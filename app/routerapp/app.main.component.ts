import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
     <table class="table table-bordered table-striped">
        <tr>
          <td>
            <!--[routerLink] will be used to query to route table based on 
              'first parameter' of the array-->
              <!--The "['<path-uri>', <comma-separated list of route parameters>]"-->
            <a [routerLink]="['']">Home</a>
          </td>
          <td>
            <!--The id is parameter to about-->
            <a [routerLink]="['/about', id]">About</a>
          </td>
          <td>
            <a [routerLink]="['contact']">Contact</a>
          </td>
          <td>
            <a [routerLink]="['lazy']">Lazy</a>
          </td>
        </tr>
     </table>
     <br>
     <!--This will render the html template of the component-->
    <router-outlet></router-outlet>
  `
})

export class MainComponent implements OnInit {
  id: number;
  constructor() {
    this.id = 1000;
   }
  ngOnInit() { }
}