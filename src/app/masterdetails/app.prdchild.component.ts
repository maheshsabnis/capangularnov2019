import { Component, OnInit, Input, Output ,EventEmitter } from '@angular/core';
import { ProductChild, Products } from './app.data.model';


@Component({
  selector: 'app-prdchild-component',
  templateUrl: 'app.prdchild.view.html'
})

export class PrdChildComponent implements OnInit {
  prds = Products;
  prd: ProductChild;
  private _CatId: number;
  private _FilterProducts: Array<ProductChild>;
  @Output()
  notifyParent: EventEmitter<string>;
  constructor() {
    this.prd = new ProductChild(0, '', 0);
    this._CatId = 0;
    this._FilterProducts = new Array<ProductChild>();
    this.notifyParent = new EventEmitter<string>();

  }

  // define public properties (get/set)
  // property decorated with @Input will be used for Property-Binding
  // e.g. [CatId]
  @Input()
  set CatId(v: number) {
    this._CatId = v;
    console.log(this._CatId);
  }
  get CatId(): number {
    return this._CatId;
  }
  ngOnInit() {
  }

  // a method that will be used to emit event
  onNotifyParent(): void { 
    this.notifyParent.emit(`We found ${this._FilterProducts.length} records matching with CatId = ${this._CatId}`)
  }


  // add a read-only property that will filter products based on
  // value of _CatId
  // if the property binding is changed for the component using @Input
  // then it will update all properties those are depending on the
  // Input Decorated property 
  // the FilterProducts is depending on CatId
  get FilterProducts(): Array<ProductChild> {
    this._FilterProducts = new Array<ProductChild>();
    // if CatId >0 then filter data from prds
    if (this._CatId > 0) {
      this._FilterProducts = this.prds.filter((p, i) => {
        return this._CatId === p.CatId;
      });
    } else {
      this._FilterProducts = this.prds;
    }
    return this._FilterProducts;
  }
}
