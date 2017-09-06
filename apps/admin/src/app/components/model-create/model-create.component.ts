
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdminAPIService } from '../../lib/admin-api.service';

declare var $: any;
declare var sha512: any;

@Component({
  selector: 'admin-model-create',
  templateUrl: './model-create.component.html',
})
export class ModelCreateComponent implements OnInit {

  private appName: string;
  private modelName: string;
  private fieldObjects: any[] = [];

  constructor(
    private adminAPIService: AdminAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async create() {

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

    let response = await this.adminAPIService.post('/new', {
      appName: this.appName,
      modelName: this.modelName,
      attributes: update
    });
    if (response.hasOwnProperty('message')) {
      this.router.navigate(['/model', this.appName, this.modelName]);
    }
    else if (response.hasOwnAttribute('error'))
      console.log(response.error);
  }

  async ngOnInit() {

    this.appName = this.route.snapshot.paramMap.get('app');
    this.modelName = this.route.snapshot.paramMap.get('model');

    let response = await this.adminAPIService.post('/view', {
      appName: this.appName,
      modelName: this.modelName,
      itemKey: ''
    });

    for (var i = 0; i < response.schema.fieldNames.length; ++i) {

      var fieldName = response.schema.fieldNames[i];
      var fieldObj: any = {};

      fieldObj.name = fieldName;
      fieldObj.data = response.schema.fieldDetails[fieldName];

      var value = fieldObj.data.attributes.default;

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
