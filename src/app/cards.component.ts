import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {TweetService} from './tweet.service';

@Component({
  moduleId: module.id,
  selector: 'cardsrepeater',
  templateUrl: 'cards.component.html',
  styleUrls: ['app.css','cards.component.css'],
  providers: [TweetService]
  
})
export class CardsComponent implements OnInit {
    items: any[];    
  constructor(private tweetsvc: TweetService) {}

  ngOnInit() {
    this.tweetsvc.getData()
     .subscribe((res:any) =>{
        this.items=res;
        console.log(res);
        console.log(this.items);
    },
    (err)=>console.log(err),
    ()=>console.log("Done"));
    
  }

}
