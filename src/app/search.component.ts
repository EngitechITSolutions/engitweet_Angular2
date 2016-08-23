import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'searchbox',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  SearchTweets(inputSearch:string)
  {
    console.log(inputSearch);
    this.notify.emit('parent: '+ inputSearch);
  }
}
