import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';
import { DEFAULT_TIME } from '../app.constant';
import { AppComponent } from '../app.component';
import {ActivatedRoute,ActivatedRouteSnapshot,Params} from '@angular/router';
import {GetApiService } from '../get-api.service'; 
import { HttpClient } from  '@angular/common/http';
@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  paragraphs = [{text:''}];
  totalword;
  dataarray = Array();
  myvar:any;
  title:any;
  public id: string;
  time:number;
  public time_limit:number;

  public defaultTime:number;
  constructor( public api:GetApiService,public route: ActivatedRoute){
      //super(('https://guardianeb.com/api/typing-practice/22'),'hello'); // Call the parent class's constructor
      console.log('from cononentst');
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
      this.time = this.time_limit;

    
      //console.log('data',this.myvar['data']['paragraph']);
      //this.resetTest();
  this.defaultTime = this.time;
    
    }
    

  private _start = false;
  @Input() set start(val) {
    this._start = val;
    if (val) {
      this.time = this.defaultTime;
      this.lastBest = this.records.best;
      this.startTimer();
    } else if (this.timer) {
      this.timesUp.emit(this.time);
      this.timer.unsubscribe();
    }
  }
  get start() {
    return this._start;
  }

  @Input() score;

  timer;

  @Output() timesUp = new EventEmitter();

  @Input() records = {
    best: 0,
    last: 0
  };
  lastBest = this.records.best;

    // constructor() { }

     ngOnInit(): void {
       this.lastBest = this.records.best;
     }

  startTimer() {
    this.timer = timer(1000, 1000).subscribe(res => {
      if (res === this.defaultTime) {
        this.time = 0;
        this.timesUp.emit(0);
        this.timer.unsubscribe();
        this.timer = null;
      } else {
        this.time--;
      }
    });
  }
}
