import { Component, OnInit } from '@angular/core';
import { UtilityService } from './../sharedmodule/app.shared.service';
@Component({
  selector: 'app-sharedmodule-component',
  template: `
     <div class="container">
        <p>
           <span>
             <strong>{{str1}}</strong>
           </span>
        </p> 
        <br>
        <p>
           <span>
             <strong>{{str2}}</strong>
           </span>
        </p> 
     </div>  
  `
})

export class SharedModuleComponent implements OnInit {
  str1: string;
  str2: string;

  constructor(private serv: UtilityService) {
    this.str1 = ' I Will Like to be in Upper Case';
    this.str2 = ' I Will Like to be in Lower Case';
  }

  ngOnInit() { 
    this.str1 = this.serv.changeCase(this.str1, 'U');
    this.str2 = this.serv.changeCase(this.str2, 'L');
  }
}