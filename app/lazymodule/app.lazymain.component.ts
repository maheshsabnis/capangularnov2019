import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazymain-component',
  template: `
     <h3>The Lazy Loaded Module</h3>
     <table class="table table-bordered table-striped">
       <tr>
         <td>
           <a [routerLink]="['']">Main</a>
         </td>
         <td>
           <a [routerLink]="['comp1']">Comp1</a>
         </td>
          <td>
           <a [routerLink]="['comp2']">Comp2</a>
         </td>
       </tr>
     </table>
     <br>
     <router-outlet></router-outlet>
  `
})

export class LazyMainComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}