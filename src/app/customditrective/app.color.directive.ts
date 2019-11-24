import {Directive, Input, HostListener, Renderer, ElementRef } from '@angular/core';
// Directive --> Decoartor for dircetive
// Input --> decorator for accepting value
// HostListener --> Decorator for Hosting events for ditrective
// Renderer --> The object that will manage rendering when directive is activated
// ElementRef --> The object that will refer the DOM Element that is affected
// using the directive

// this will be attribute directive so selector will be in 
// [] as property binding
@Directive({
   selector: '[setColor]'
})
export class ColorDirective {
  // define an input decorated property that will map with
  // the selector
  @Input('setColor') setColor: string;
  // inject ElementRef and Renderer in constructor
  constructor(private ele: ElementRef, private render: Renderer) { }
  
  // method for logic of directive
  private applyColor(color: string): void {
    // the background of the element will be rendered
    this.render.setElementStyle(this.ele.nativeElement, 'backgroundColor',
      color);
  } 
  // methods to host events for activation of directive
  @HostListener('mouseenter')
  onMouseEnter(): void { this.applyColor(this.setColor || 'magenta'); }
  @HostListener('mouseleave')
  onMouseLeave(): void { this.applyColor(null); }

}