import {Component, ElementRef,OnInit} from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'my-jquery',
    template:`
        <button>Click me</button>
    `
})
export class jQueryComponent implements OnInit{

    constructor(private _elRef: ElementRef) {}
    ngOnInit():any {
        jQuery(this._elRef.nativeElement).find('[data-toggle="offcanvas"]').on('click',function(){
            jQuery(this._elRef.nativeElement).find('#navigation').toggleClass("hidden-xs");           
            alert('It works');
        });
    }
}