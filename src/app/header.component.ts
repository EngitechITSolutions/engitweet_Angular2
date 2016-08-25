import { Component, Output, EventEmitter } from '@angular/core';
import {SearchComponent} from './search.component';

@Component({
  moduleId: module.id,
  selector: 'header_row',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [SearchComponent]
})
export class HeaderComponent{

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  valueToSearch:string;
  constructor() {}

  onNotify(searchValue:string):void
  {
    //Propagamos el valor de búsqueda hacia el padre (App)
        this.valueToSearch=searchValue;
        this.PropagateValue();
    //
        console.log('headerComponent: ' + this.valueToSearch);  
  }

  PropagateValue()
  {
    //Propagamos el valor de búsqueda hacia el padre (App)
      this.notify.emit(this.valueToSearch);
    //
  }
}
