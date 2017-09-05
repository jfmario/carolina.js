
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdminAPIService } from '../../lib/admin-api.service';

@Component({
  selector: 'admin-model-view',
  templateUrl: './model-view.component.html',
})
export class ModelViewComponent implements OnInit {

  private appName: string;
  private modelName: string;
  private modelKey: string;
  private fieldObjects: any[] = [];

  constructor(
    private adminAPIService: AdminAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {

    this.appName = this.route.snapshot.paramMap.get('app');
    this.modelName = this.route.snapshot.paramMap.get('model');
    this.modelKey = this.route.snapshot.paramMap.get('key');

    let response = await this.adminAPIService.post('/view', {
      appName: this.appName,
      modelName: this.modelName,
      itemKey: this.modelKey
    });

    for (var i = 0; i < response.schema.fieldNames.length; ++i) {

      var fieldName = response.schema.fieldNames[i];
      var fieldObj: any = {};

      fieldObj.name = fieldName;
      fieldObj.data = response.schema.fieldDetails[fieldName];
      fieldObj.value = response.data[fieldName];
      this.fieldObjects.push(fieldObj);
    }
    // console.log(this.fieldObjects);
  }
}
