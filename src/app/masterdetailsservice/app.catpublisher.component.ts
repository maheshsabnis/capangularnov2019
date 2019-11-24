import { Component, OnInit } from '@angular/core';
import { CategoryMaster, Categories } from './app.data.model';

import { CommunicationService } from "./../services/app.communication.service";

@Component({
  selector: 'app-catpublisher-component',
  templateUrl: 'app.catpublisher.view.html'
})

export class CatPublisherComponent implements OnInit {
  cats = Categories;
  cat: CategoryMaster;
  message: string;
  // inject the CommunicationService as constructor injection
  constructor(private serv: CommunicationService) {
    this.cat = new CategoryMaster(0, '');
  }
  ngOnInit() {
  }

  // method to select Category Record from Category List Table
  getSelectedCategory(c: CategoryMaster): void {
    this.cat = c;
    // invoke method from the service to publish the CatId
    this.serv.onNotify(this.cat.CatId);
  }

   


}
