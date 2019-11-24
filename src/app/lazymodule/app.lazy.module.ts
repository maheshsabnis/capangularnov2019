import { NgModule } from '@angular/core';
import { Comp1Component } from './app.comp1.component';
import { Comp2Component } from './app.comp2.component';
import { RouterModule, Routes } from '@angular/router';
import { LazyMainComponent } from './app.lazymain.component';

const routes1: Routes = [
  {path: '', component: LazyMainComponent},
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component }
];


@NgModule({
  declarations: [Comp1Component, Comp2Component,
   LazyMainComponent],
  imports: [RouterModule.forChild(routes1)], // lazy loading
  exports: [RouterModule]
})
export class LazyModule { }
