import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TweetService {
  
  constructor(private http:Http) {}
  obj:Object;
  
  getData(){
    const headers =new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get('http://localhost:50358/engitweet/values',{headers: headers})
    .map((response:Response) => response.json());
   /* .subscribe((res) =>{
        this.obj=res;
        console.log(this.obj);
    },
    (err)=>console.log(err),
    ()=>console.log("Done"));*/
  }

}

