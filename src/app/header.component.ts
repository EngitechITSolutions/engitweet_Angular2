import { Component, OnInit } from '@angular/core';
import {SearchComponent} from './search.component';

@Component({
  moduleId: module.id,
  selector: 'header_row',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [SearchComponent]
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
