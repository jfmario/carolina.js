
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdminAPIService } from '../../lib/admin-api.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'admin-model-listing',
  templateUrl: './model-listing.component.html',
})
export class ModelListingComponent implements OnInit {

  private appName: string;
  private modelName: string;
  private items: string[] = [];
  private currentPage = 1;

  constructor(
    private adminAPIService: AdminAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async getPage(num) {
    this.items = await this.adminAPIService.post('/list', {
      appName: this.appName,
      modelName: this.modelName,
      pageNumber:num
    });
  }
  async previous() {
    --this.currentPage;
    this.getPage(this.currentPage);
  }
  async next() {
    ++this.currentPage;
    this.getPage(this.currentPage);
  }
  async ngOnInit() {

    this.appName = this.route.snapshot.paramMap.get('app');
    this.modelName = this.route.snapshot.paramMap.get('model');

    let response = await this.adminAPIService.post('/list', {
      appName: this.appName,
      modelName: this.modelName
    });
    this.items = response;
  }
}
