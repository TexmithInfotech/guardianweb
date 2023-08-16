import { Component } from '@angular/core';
//import { DEFAULT_TIME } from './app.constant';
import {GetApiService } from './get-api.service'; 
import {Observable, observable} from 'rxjs';
import {ActivatedRoute,ActivatedRouteSnapshot,Params} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraphs = [{text:''}];
  totalword;
  dataarray = Array();
  myvar:any;
  title:any;
  public id: string;
  public defaultTime:any;
  public time_limit:string;
  //userData$:Observable<any>;
  constructor( public api:GetApiService,public route: ActivatedRoute)
  {
    this.route.queryParams.subscribe((params: Params) => {
      this.api.apiCall(params.test_id).subscribe((data)=>{
        
        this.myvar = data;
        this.myprocess();
        this.dataarray.push("arrayvalue");
        })
    });
    
    this.paragraphs = this.dataarray;
  }
myprocess(){

  this.paragraphs = [{text:this.myvar['data']['paragraph']}];
  this.time_limit = this.myvar['data']['time_limit'];
  this.totalword = this.myvar['data']['paragraph'].match(/\w+/g).length;
  //console.log('total length',this.totalword);

  //console.log('time_taken',this.myvar['data']['time_limit']);

  //console.log('data',this.myvar['data']['paragraph']);
  this.resetTest();
 this.defaultTime = this.time_limit;
 this.defaultTime = this.defaultTime*60;
}

 

 //title="normal value";
 //console.warn(title);
 // this.paragraphs.push(text:"this is third nbcjkssjkjb sjcbsjckscns cjksc skc sjkcb sjkcbs cksbc sk");
  upcomingSentence = '';
  nextWord = '';
  previousWords = [];
  allWords = [];
  selectedParagraph = '';
  startTyping = false;
  score = {
    wpm: 0,
    errors: 0,
    total: 0,
    accuracy: 0,
    inaccuracy: 0,
    incorrect:0,
    correct:0
  };
  records = {
    best: parseInt(localStorage.getItem('best') || '0', 10),
    last: parseInt(localStorage.getItem('last') || '0', 10)
  };


  ngOnInit(): void{

  
    //sleep(300);


  }

  //console.log(this.paragraphs);

  newWordEntered(e) {
    if (this.startTyping) {
      const typedWords = e.value.split(' ');
      const score = {
        wpm: 0,
        errors: 0,
        total: this.totalword,
        accuracy: 0,
        inaccuracy: 0,
        incorrect:0,
        correct:0
      };
      this.previousWords = [];

      for (let i = 0; i < typedWords.length - 1; i++) {
        const typedWord = typedWords[i];
        const originalWord = this.allWords[i];
        const wordInfo = {
          hasError: false,
          word: originalWord
        };

        if (typedWord === originalWord) {
         // score.total += 10;
        } else {
          //score.total -= 5;
          wordInfo.hasError = true;
          score.errors++;
        }

        this.previousWords.push(wordInfo);
      }

      this.nextWord = this.allWords[typedWords.length - 1];
      this.upcomingSentence = this.allWords.slice(typedWords.length).join(' ');

      this.score = score;
    }
  }

  startTimer() {
    if (this.previousWords.length) {
      //this.resetTest();
      this.records.last = parseInt(localStorage.getItem('last') || '0', 10);
    }
    if (!this.startTyping) {
      this.score = { // Resetting scores
        wpm: 0,
        errors: 0,
        total: this.totalword,
        accuracy: 0,
        inaccuracy: 0,
        incorrect:0,
        correct:0
      };
      this.startTyping = true;
    }
  }

  stopTimer() {
    if (this.startTyping) {
      this.startTyping = false;
    }
  }

  resetTest() {
    this.previousWords = [];
    this.selectedParagraph = this.paragraphs[Math.floor(Math.random() * this.paragraphs.length)].text;
    const firstSpaceIndex = this.selectedParagraph.indexOf(' ');

    this.upcomingSentence = this.selectedParagraph.substr(firstSpaceIndex + 1);
    this.nextWord = this.selectedParagraph.substr(0, firstSpaceIndex);

    this.allWords = this.selectedParagraph.split(' ');
    this.score.total =  this.totalword;
    console.log('total score',this.score.total);
  }

  timesUp(timeInSeconds) {
    this.startTyping = false;
    this.score.wpm = this.previousWords.length / ((this.defaultTime - timeInSeconds) / 60);
    console.log('wpm',timeInSeconds);
    console.log('defaulttime',this.defaultTime);
    
    this.score.accuracy = this.previousWords.length ? parseFloat((((this.previousWords.length - this.score.errors) / this.previousWords.length) * 100).toFixed(2)) : 0;
    this.score.incorrect = this.previousWords.length;
    this.score.correct = this.previousWords.length-this.score.errors;
    //console.log('incorrect',this.score.correct);
   // this.score.inaccuracy = 100-this.score.accuracy;
   this.score.total =  this.totalword;

    this.score.inaccuracy = this.previousWords.length ? parseFloat((100-((this.previousWords.length - this.score.errors) / this.previousWords.length) * 100).toFixed(2)) : 0;
    //console.log(typeof this.score.accuracy);
    //localStorage.setItem('best', '24');

   // if (this.score.total > this.records.best) {
      //localStorage.setItem('best', this.score.correct.toString());
      //this.records.best = 92;
      //this.records.best = this.score.total;
    //}

    //localStorage.setItem('last', this.score.total.toString());
    //this.resetTest();
  }
}
