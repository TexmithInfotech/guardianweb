import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
     public http:HttpClient
  ) { }


  apiCall(id)
  {
    //alert(id);
    //return this.http.get('https://guardianeb.com/api/typing-practice/22');
    return this.http.get('https://www.guardianeb.com/api/typing-practice/'+id);

  }
}
