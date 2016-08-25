import { Component, OnInit, Input } from '@angular/core';
import {Http, Response} from '@angular/http';
import {TweetService} from './tweet.service';

@Component({
  moduleId: module.id,
  selector: 'cardsrepeater',
  templateUrl: 'cards.component.html',
  styleUrls: ['cards.component.css'],
  providers: [TweetService]
  
})
export class CardsComponent implements OnInit {
    
  @Input() SearchString:string;
  items: any[];    
  constructor(private tweetsvc: TweetService) 
  {
    console.log('ctor '+ this.SearchString);
  }
  LaunchSearch(searchstringvalue:string)
  {
    console.log('input value '+ searchstringvalue);
    this.tweetsvc.getData(searchstringvalue)
     .subscribe((res:any) =>{       
        this.items=res;
        console.log(res);        
    },
    (err)=>console.log(err),
    ()=>console.log("Done"));
  }
  
  
  ngOnInit() {
    console.log("value "+this.SearchString);
    this.tweetsvc.getData(this.SearchString)
     .subscribe((res:any) =>{       
        this.items=res;
        console.log(res);        
    },
    (err)=>console.log(err),
    ()=>console.log("Done"));
    
  }

}
