import {NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityService } from './app.shared.service';

@NgModule({
  imports: [CommonModule],
  // DI Container for UtilityModule (aks SharedModule)
  // whichever module imports this UtlityModule, the
  // DI COntianer will be provided to that module
  providers: [UtilityService] 
})
export class UtilityModule { 
}