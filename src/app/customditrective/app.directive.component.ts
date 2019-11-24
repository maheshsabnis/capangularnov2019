import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  template: `
     <table class="table table-bordered table-striped">
       <tr>
         <td>
           <input type="radio" name="r" (click)="color= 'red'"> Red
         </td>
          <td>
           <input type="radio" name="r" (click)="color= 'yellow'"> Yellow
         </td>
          <td>
           <input type="radio" name="r" (click)="color= 'blue'"> Blue
         </td>
       </tr>
     </table>
     <br/>
     <!--Apply Directive-->
     <div class="container" [setColor]="color">I am First Div</div>
     <br/>
     <div class="container" [setColor]="color">I am Second Div</div>
     <br/>
     <div class="container" [setColor]="color">I am Third Div</div>  
  `
})
export class DirectiveComponent { 
  color: string;
  constructor() { 
    this.color = '';
  }
}