
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdminAPIService } from '../../lib/admin-api.service';

declare var $: any;
declare var sha512: any;

@Component({
  selector: 'admin-model-edit',
  templateUrl: './model-edit.component.html',
})
export class ModelEditComponent implements OnInit {

  private appName: string;
  private modelName: string;
  private modelKey: string;
  private fieldObjects: any[] = [];

  constructor(
    private adminAPIService: AdminAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async update() {

    var update: any = {};

    for (var i = 0; i < this.fieldObjects.length; ++i) {

      var fieldName = this.fieldObjects[i].name;
      var schemaData = this.fieldObjects[i].data;
      var fieldValue = this.fieldObjects[i].value;

      if (schemaData.type == 'date')
        update[fieldName] = new Date(fieldValue);
      else if (schemaData.type == 'hash') {
        if (fieldValue.length > 0)
          update[fieldName] = sha512(fieldValue + $('#carolinaMetadata').attr('salt'));
      }
      else
        update[fieldName] = fieldValue;
    }

    console.log(update);

    let response = await this.adminAPIService.post('/update', {
      appName: this.appName,
      modelName: this.modelName,
      itemKey: this.modelKey,
      update: update
    });
    if (response.hasOwnProperty('message')) {
      this.router.navigate(['/model', this.appName, this.modelName]);
    }
  }

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

      var value = response.data[fieldName];

      if (fieldObj.data.type == 'date')
        value = new Date(value);
      if (fieldObj.data.type == 'hash')
        value = '';

      fieldObj.value = value;
      this.fieldObjects.push(fieldObj);
    }
    // console.log(this.fieldObjects);
  }
}
