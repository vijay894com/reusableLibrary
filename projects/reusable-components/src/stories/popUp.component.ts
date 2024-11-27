import { Component, OnInit, ViewContainerRef } from "@angular/core";

@Component({
    selector:'pop-up',
    standalone:false,
    template:`<h2>Hello</h2>`,
    styleUrls: ['./popUp.css'],
})
export class popUpComponent implements OnInit{
 constructor(private viewRef:ViewContainerRef)
 {}

 ngOnInit()
 {
   this.viewRef.clear();
 }
}