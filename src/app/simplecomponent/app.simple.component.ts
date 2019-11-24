import {Component } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: 'app.simple.view.html'
})
export class SimpleComponent {

  message: string;
  data: any;
  constructor() { 
    this.message = 'Hello Angular!!!!!';
    this.data = [
      { id: 101, name: 'A' },
      { id: 102, name: 'B' },
      { id: 103, name: 'C' }
    ];
  }

  display(): void { 
    alert('clicked');
  }

 }