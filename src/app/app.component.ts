import { Component, ElementRef, OnInit,AfterViewInit  } from '@angular/core';
import {MenuComponent} from './menu.component';

declare var jQuery:any;
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.css','app.component.css'],
  directives: [MenuComponent]
})
export class AppComponent implements OnInit  {
  title = 'app works!';

  constructor() {}

  ngOnInit() {
  }
 
}
