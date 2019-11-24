import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routerapp/app.home.component';
import { ContactComponent } from './routerapp/app.contact.component';
import { AboutComponent } from './routerapp/app.about.component';
import { ProductValidationComponent } from './productvalidationcomponent/app.product.validation.component';


// the routes table
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent }, // the :id is parameter
  {
    path: 'contact', component: ContactComponent, children: [
      {path:'product',component:ProductValidationComponent}
    ]
  },
  //                         file path of lazy-modue#<MODULE-NAME> 
  {path:'lazy', loadChildren:'./lazymodule/app.lazy.module#LazyModule'},
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  // registeration of the Route table using forRoot() method of
  // router module
  // This will make sure that, the route table will be available
  // for the root of the module wherever the cuurent module is 
  // imported
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
