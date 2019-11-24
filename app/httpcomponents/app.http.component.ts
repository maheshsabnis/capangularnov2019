import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/app.http.service';
import { ProductData } from './../models/app.product.model';

@Component({
  selector: 'app-http-component',
  templateUrl: 'app.http.view.html'
})
export class HttpComponent implements OnInit {
  products: Array<ProductData>;
  constructor(private serv: HttpService) {
    this.products = new Array<ProductData>();
    console.log('Constructor Called...');
   }
  ngOnInit(): void { 
    console.log('ngOnInit Called');
    this.loadData();
  }

  loadData(): void { 
    // subscribe to observable to read data from it
    this.serv.getData().subscribe(resp => { 
      this.products = resp;
      console.log(`Received data ${JSON.stringify(this.products)}`);
    });
  }

  saveData(): void {
    let prd: ProductData = new ProductData(
      0, 'Prd0006', 'Ip-Phone',
      'CISCO', 'Electronics',
      'IP-Based Call', 45000
    );
    this.serv.postData(prd).subscribe(resp => { 
      console.log(`Received Response is ${JSON.stringify(resp)}`);
    });
  }
}