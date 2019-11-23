<input type="text" id="txt" value="ABC"/> // Attribute

document.getElementById('txt').value = "PQR";  // Property

Attribute and Property

Property Binding
<input type="text" id="txt" [value]="<PUBLIC-PROPERTY-FROM-COMPONENT-CLASS>"/>
[href], [disabled], [checked] [selected] [hidden] 

In JavaScript
<input type="button" onClick="doWork();"/>
In Angular
<input type="button" (click)="<PUBLIC-METHOD-FROM-COMPONENT-CLASS>"/>

Two-Way Data Binding --> Combibnation of Property-Binding with Event-Binding

The 'ngModel' is the Attribue directive from @angular/forms paclkage provided for Two-way databinding

<input type="text" [(ngModel)]="<PUBLIC-PROPERTY-FROM-COMPONENT-CLASS>"/>

1. ngModel will listen to default event of input:text element
2. It invokes the ngModelChanged event and take value from UI to Component
3. The Component Updates itself by updating the property
4. The Component will update all proeprties depending on the property being updated because of ngModelChanged
5. The component will then push updates property values to UI and UI will be updated
  #=================================================================================================================
1. @angular/core
  -- package for the core objects from Angular frameowrk
      -- NgModule, class to create the angular module class
      -- Component, class to create the angular componenent class
      -- Directive, class to create custom directive class
      -- Pipe, the class to crerate custom pipe class
      -- Injectable, the class to represent the Angular service
      -- Input, used by public property of component class to accept data from other component
      -- Output, used by the public property of the type EventEmitter of component to emit event to parent component
      -- HostListener, to define an event on method of the compoenent so that the method will be invoked when the event is raised on updating
  -- @angular/core provides the above classes as 'Decorators'
    -- e.g. to use class as Angular module, apply the @NgModule as a decorator on class.   
    -- decorators define the behavior of the class
2. @angular/compiler
  -- contains Ahead-of-Time (AoT) compilation
    -- generate a compressed build of Angular applciation
3. @angular/common
    -- provide CommonModule that manages all library references in the current application
4. @angular/common/http
    -- provides HttpClientModule for all External Ajax calls
    -- this uses 'rxjs', the Reactive JavaScript Library that monitors and contains AJAX responses
5. @angular/platform-browser
  -- provided BrowserModule for loading the application in Browser
6. @angular/platform-browser-dynamic
  -- used to monitor dynamic changes in DOM in browser because of databinding
7. @angular/forms
  -- provides FormsModule for Two-Way databinding
  -- provides ReactiveFormsModule for the Model-Driven-Forms aka ReactiveForms
8. @angular/router
    -- SPA
#==================================================================================
Angular Directives
1. The Custom UI or Attributes for Managing or value adding in the HTML Rendering
2. They have methods for logic, propeties for databinding and events for communication
3. Threr types of Directives
  -- Component Directives 
    -- Every component is directive
  -- Structurel Directives
    -- Used for Adding/Removing HTML DOM based on databinding
    -- e.g. *ngFor, executes a for..of loop to add HTML DOM Elements
    --      *ngIf, executes if statement for adding / removing document
    --      *ngSwicth--ngSwitchCase
  -- Attribute Directives
    -- Used for Validations
      -- e.g. ngModel, valid, invalid, erros etc.        
#=================================================================================================
Angular Forms 
1. Reactive Forms
  -- The Forms those are coupled with the Model Object e.g. Product, Student, Employee
  -- Each public property of the Model object is bound to HTML UI Editable Element e.g. input, select, etc.
2. Package and classed for Reactive Forms
  -- @angular/Forms
    -- ReactiveFormsModule
      -- Classes
          -- FormGroup, the class that groups form and its elements. This class define 'FormControlCollection', the collection of each editable element
          -- FormControl, a single object in FormControlCollection. This class is used to map public property of Model class with UI
            -- The [formControlName] property of the HTML element will be used to perform Model binding insated on ngModel
          -- FormGroup.value property will be used to read values for form Elements
     -- Validators class
        -- Provides static method for Model Validations
          -- required, method accepts 'AbstractControl' is input parameter. This is the UI elements that is to be validated 
          -- requiredTrue
            -- The value must be true
          -- minlength
          -- maxlength
          -- pattern
          -- min
          -- max
          -- email 
    -- <form> will be mapped with ngForm implicitely by angular 
        -- This provide (ngSubmit) event to submit the form










