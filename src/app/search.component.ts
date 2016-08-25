import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'searchbox',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  defaultValue="proyectosnubelo";
  constructor() {}

 
  SearchTweets(inputSearch:string)
  {
    console.log('searchComponent '+ inputSearch);
    this.notify.emit(inputSearch);
  }
}
