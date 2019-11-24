import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2-component',
  template: `
     <h2>The Lazy Componen2</h2>
     <div>
       <span>
          I am Lazy Component 2
       </span>
     </div>
  `
})

export class Comp2Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}