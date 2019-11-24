import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-component',
  template: `
     <div>
         <h2>The Contact Component</h2>
         <span>{{message}}</span>
         <br>
         <a [routerLink]="['product']">Product</a>
         <router-outlet></router-outlet>
     </div>
  `
})

export class ContactComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'I am Contact component';
   }

  ngOnInit() { }
}