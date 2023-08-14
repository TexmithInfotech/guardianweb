import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute,RouterModule,Routes  }  from '@angular/router';
//import { RouterTestingModule } from '@angular/router/testing';
const routes: Routes = [

  {    
    path: ':test_id',
    component: AppComponent,
  }

];
@NgModule({
  declarations: [
    AppComponent,  
    ScoreboardComponent,
    ParagraphComponent,
    //RouterModule,
    TextfieldComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClientModule,RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }