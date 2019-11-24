import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1-component',
  template: `
     <h2>The Lazy Componen1</h2>
     <div>
       <span>
          I am Lazy Component 1
       </span>
     </div>
      <table class="table table-bordered table-striped">
       <tr>
         <td>
           <a [routerLink]="['comp1']">Comp1</a>
         </td>
          <td>
           <a [routerLink]="['comp2']">Comp2</a>
         </td>
       </tr>
     </table>
  `
})

export class Comp1Component implements OnInit {
  constructor() { }

  ngOnInit() { }
}