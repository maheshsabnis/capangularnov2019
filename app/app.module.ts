import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductValidationComponent} from './productvalidationcomponent/app.product.validation.component';
import { CatMasterComponent } from './masterdetails/app.catmaster.component';
import { PrdChildComponent } from './masterdetails/app.prdchild.component';
import { SimpleComponent } from "./simplecomponent/app.simple.component";
import { CatPublisherComponent } from './masterdetailsservice/app.catpublisher.component';
import { PrdSubscriberComponent } from './masterdetailsservice/app.prdsubsciber.component';
import { HttpComponent } from './httpcomponents/app.http.component';
import { UtilityModule } from './sharedmodule/app.shared.module'; 
import { SharedModuleComponent } from './sharedmodulecomponent/app.sharedmodule.component';
import { HomeComponent } from './routerapp/app.home.component';
import { AboutComponent } from './routerapp/app.about.component';
import { ContactComponent } from './routerapp/app.contact.component';
import { MainComponent } from './routerapp/app.main.component';

@NgModule({
  declarations: [
    AppComponent, ProductValidationComponent,
    CatMasterComponent, PrdChildComponent, SimpleComponent,
    CatPublisherComponent, PrdSubscriberComponent,
    HttpComponent, SharedModuleComponent,
  HomeComponent, ContactComponent, AboutComponent, MainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    // the AppRoutingModule will register the Route table
    // ate the root of the Current AppModule
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
