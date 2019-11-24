import { Component, OnInit } from '@angular/core';
import { CategoryMaster, Categories } from './app.data.model';

@Component({
  selector: 'app-catmaster-component',
  templateUrl: 'app.catmaster.view.html'
})

export class CatMasterComponent implements OnInit {
  cats = Categories;
  cat: CategoryMaster;
  message: string;
  constructor() {
    this.cat = new CategoryMaster(0, '');
  }
  ngOnInit() {
  }

  // method to select Category Record from Category List Table
  getSelectedCategory(c: CategoryMaster): void {
    this.cat = c;
  }

  getNotification(event): void {
    this.message = event;
  }


}
