import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductValidationComponent} from './productvalidationcomponent/app.product.validation.component';

@NgModule({
  declarations: [
    AppComponent, ProductValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductValidationComponent]
})
export class AppModule { }
