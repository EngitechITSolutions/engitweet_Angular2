import { Component, ElementRef, OnInit,AfterViewInit  } from '@angular/core';
import {MenuComponent} from './menu.component';
import {HeaderComponent} from './header.component';
import {CardsComponent} from './cards.component';

declare var jQuery:any;
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'searchpage.component.html',
  styleUrls: ['app.css','searchpage.component.css'],
  directives: [MenuComponent,HeaderComponent,CardsComponent]
})
export class SearchPageComponent implements AfterViewInit  {
  title = 'app works!';

  constructor(private _elRef: ElementRef) {}
    ngAfterViewInit():any {      
      var nav=jQuery(this._elRef.nativeElement).find('#navigation');
       jQuery(this._elRef.nativeElement).find('[data-toggle="offcanvas"]').on('click',function(){
            nav.toggleClass('hidden-xs');
        });
    }
 
}
