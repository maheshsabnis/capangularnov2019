import { Injectable, EventEmitter } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class CommunicationService { 
  private id: number;

  notifyValue: EventEmitter<number>;
  constructor() { 
    this.id = 0;
    this.notifyValue = new EventEmitter<number>();
  }

  // method that will be invoked by publisher component
  // to emit an event with data
  onNotify(n: number): void {
    this.id = n;
    this.notifyValue.emit(this.id);
  }
}