import {Component, OnInit} from '@angular/core';
import {FormGroup,FormControl , Validators} from '@angular/forms';
import {Product} from './app.product.model';
import {ProductLogic} from './app.logic';
import {Categories, Manufacturers} from './app.constants';
import { CustomValidator } from './app.custom.validators';



@Component({
  selector:'app-product-validation-component',
  templateUrl:'./app.product.validation.component.view.html'
})
export class ProductValidationComponent implements OnInit {
    product: Product;
    private logic: ProductLogic;
  products: Array<Product>;
  headers: Array<string>;
  categories = Categories;
  manufacturers = Manufacturers;

  // define FormGroup
  frmProduct: FormGroup;

  constructor(){
    this.product  =new Product(0,'','','','','',0);
    this.logic = new ProductLogic();
    this.products = new Array<Product>();
    this.headers = new Array<string>();

    // create a model class binding with FromGroup with Validators
    // this will be the collection of FormControl aka FormCOntrolCollection
    // each FormControlName must be same as the property from Model class
    this.frmProduct = new FormGroup({
       ProductRowId: new  FormControl(this.product.ProductRowId,
         Validators.compose([Validators.required,
        Validators.minLength(2), Validators.maxLength(6),
       Validators.pattern('[0-9]+'), CustomValidator.CheckEven])),
       ProductId: new  FormControl(this.product.ProductId),
       ProductName: new  FormControl(this.product.ProductName),
       Manufacturer: new  FormControl(this.product.Manufacturer),
       CategoryName: new  FormControl(this.product.CategoryName),
       Description: new  FormControl(this.product.Description),
       BasePrice: new  FormControl(this.product.BasePrice)
    });
  }

  clear(): void {
      this.product  =new Product(0,'','','','','',0);
  }
  save(): void {
    // the 'value' property of the FormGrou will provide the ForPosted data
    this.product = this.frmProduct.value;
    this.products = this.logic.saveProduct(this.product);
    alert(JSON.stringify(this.products));
  }
  ngOnInit():void {
    for(let p in this.product){
      this.headers.push(p);
    }
    this.products = this.logic.getProducts();
  }

  getSelectedProduct(p:Product):void {
    this.product = Object.assign({},p);
  }
}
