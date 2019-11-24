import { AbstractControl } from '@angular/forms';
// 1. custom validation method must eb static
// 2. it must have return type as any
// 3. if value is value then return 'null'
// 4. if value is invalid then return JSON object as {invalid:true} or
// {valid:false}
// 5. if the method accepts data from UI element, the pass
// AbstractControl to the method

export class CustomValidator {
   static CheckEven(ctrl: AbstractControl): any {
      let v = ctrl.value; // read data rdeceived from UI element
      if( parseInt (v) % 2 === 0) {
         return null; // valid
      } else {

        return {valid: false};
      }
   }
}
