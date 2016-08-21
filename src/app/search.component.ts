import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from './header.component';
import {CardsComponent} from './cards.component';

@Component({
  moduleId: module.id,
  selector: 'searchbox',
  templateUrl: 'search.component.html',
  styleUrls: ['app.css','search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
