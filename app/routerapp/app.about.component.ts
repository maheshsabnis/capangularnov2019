import { Component, OnInit } from '@angular/core';
// ActivatedRoute will be used to subscribe to parameters in URL
// Router is used fro explicit routing
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about-component',
  template: `
     <div>
         <h2>The About Component</h2>
         <span>{{message}}</span>
     </div>
     <hr>
     <input type="button" value="navigate" (click)="navigateTo()" class="btn btn-warning"/>
  `
})

export class AboutComponent implements OnInit {
  message: string;
  // inject ActivatedRoute to subscribe to parameters from URL 
  constructor(private act: ActivatedRoute, private router: Router) {
    this.message = 'I am About component';
   }

  ngOnInit() { 
     // read the parameter from the URL
    // p is the object that contains all parameters received 
    // from url
    this.act.params.subscribe(p => {
      this.message += p.id;  // read the id parameter
    });
  }

  navigateTo(): void { 
    // the navigate() method accepts array
    // the first parameter of the array is URL path from route table
    this.router.navigate(['contact']);
  }
}