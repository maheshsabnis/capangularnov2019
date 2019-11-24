import { Component, OnInit } from '@angular/core';
import { ProductChild, Products } from './app.data.model';
import { CommunicationService} from './../services/app.communication.service';

@Component({
  selector: 'app-prdsubscriber-component',
  templateUrl: 'app.prdsubscriber.view.html'
})

export class PrdSubscriberComponent implements OnInit {
  prds = Products;
  prd: ProductChild;
  CatId: number;
  private _FilterProducts: Array<ProductChild>;
   // inject the CommunicationService in constructor 
  constructor(private serv: CommunicationService) {
    this.prd = new ProductChild(0, '', 0);
    this.CatId = 0;
    this._FilterProducts = new Array<ProductChild>();
  }
  // the event from the service must be subscribed once 
  // in the ngOnInit()
  ngOnInit(): void  {
    this.serv.notifyValue.subscribe((id) => { 
      this.CatId = id;
    });
  }
  // add a read-only property that will filter products based on
  // value of CatId
  // if the property binding is changed for the component using @Input
  // then it will update all properties those are depending on the
  // Input Decorated property 
  // the FilterProducts is depending on CatId
  get FilterProducts(): Array<ProductChild> {
    this._FilterProducts = new Array<ProductChild>();
    // if CatId >0 then filter data from prds
    if (this.CatId > 0) {
      this._FilterProducts = this.prds.filter((p, i) => {
        return this.CatId === p.CatId;
      });
    } else {
      this._FilterProducts = this.prds;
    }
    return this._FilterProducts;
  }
}
