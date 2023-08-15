import { Component, Input, OnInit,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() typedWords = [];

  @Input() nextWord = '';

  @Input() upcomingSentence = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { 
   // this.scrollToElement();

  }
      // scrollToElement() {
      //   console.log('from scroll into');
      //   const element = this.elementRef.nativeElement.targetElement');
      //   console.log('from scroll into',element);

      //   //element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // }
  ngOnInit(): void {
  }

}
