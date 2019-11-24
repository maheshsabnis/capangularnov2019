1. How many components we can bootstrap?
   1. We can boostrap multiple components
2. How Components can communicate with each other?
   1. Component those have parent-child relatiopship
      1. Components knows about each other
   2. Component those are bound to Publish/Subscribe pattern  
      1. Components talk to each other using some mediater
3. What are various ways to communicate across components?
   1. Using @Input and @Output Decorators
      1. @Input is used to send data from Parent component to Child Component
         1. The Child Component must have public property decorated with @Input decorator.
         2. Use @angular/core to import this decorator 
      2. The property decorated with @Input decorator can be used for property-binding for child component's selector
      3. @Output is used to emit an event from child to parent comppnent
         1. The Child must use an 'EventEmitter<T>' class decorated of which instance is decorated with @Output. 
         2. T is the payload or data that is emitted from child to parent
         3. An EventEmitter<T> emits an event from child to parent and parent must subscribe to it using 'Event-Binding'. 
         4. The parent must subscribe to event emitted from child using event-bindig and recive the data from child using $event object

#=============================================================================
Angular Services
1. The class decorated with @Injectable() decorator
2. This class will be injected into other classes e.g. Component/Directice/Pipe, etc
3. Services can be used for following
   1. Containing Heavy Business Logic or reusable utility logic e.g. common methods those are needed across all components
   2. Used for containing methods for Http Communcaition from Angular Applications
   3. Used as a mediator for communication across components like publish/subscribe
4. Service class must be registered in DI Container provided by @NgModule in Angular
   1. Use 'provoiders:[]' array of NgModule
   2. Use providedIn:'root' peoperty of Injectable decorator. This will inject service in Global DI of the Current Angular application

#============================================================================
Access REST APIs using Angular App
1. @angular/common/http package
   1. HttpClientModule Module class
      1. HttpClient class
         1. get<T>()/post<T>()/put<T>()/delete<T>()
            1. T is the type returned when call is successful
               1. object/ array/ string / text/ xml/ blob/ arraybuffer 
      2. HttpHeaders
         1. Call that represent Request headers
            1. Content-Type
            2. Authorization
   2. rxjs
      1. Provides an Observable class to hold response from REST APIs

# ======================================================================================================================

Angular Routing
1. @angular/router Package
   1. Classes
      1. RouterModule
         1. A Routing Framework that manages following
            1. Route Table, using 'Routes' class
               1. Each Entry in Routes class is 'Route' Object
                  1. The Route Object has a JSON object {} with following
                     1. the 'path', the uri for Routing (mandatory)
                     2. the 'component', the component to be loaded using path (mandatory)
                     3. the 'children', the Routes object for child routing, the 'children' itself is a Routes collection having Route object inside it (optional)
                     4. the 'loadChildren', the expression to load other angular module as 'lazy-loaded' module (on-demand) (optional)
                     5. the 'redirectTo', the default redirection (optional)
            2. Router Class, used to manage event based routing
            3. ActivatedRoute, used for parameterized routing
         2. Router Guards
            1. COntroled by server based on Authentication    
         3. The '[routerLink]' custom attribute directive for executing Routing request using 'path'
            1. <a [routerLink]="['<path-value>']">
         4. the <router-outlet></router-outlet>, custom standard component to load the 'component' inside it.

# ============================================================================
Angular Directives
1. Angular Objects for Resuablity of Logic + UI, UI and Attributes
2. Standard Directives
   1. Components, Logic + UI
   2. Structural Directives, UI, *ngFor, *ngIf, etc.
   3. Attribure Directves, 
3. Creating Custom Attribute Directive
   1. FUnctional reusable attribute 
   2. They have logic
   3. They accept property values using one or more @Input decorated properties
   4. They have functions hosting events to make sure that the directive is activated when the event is occured
      1. The 'HostListener' object is used as decorator on function to execute the function when an event occures
