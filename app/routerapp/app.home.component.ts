import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
     <div>
         <h2>The Home Component</h2>
         <span>{{message}}</span>
     </div>
  `
})

export class HomeComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'I am Home component';
   }

  ngOnInit() { }
}