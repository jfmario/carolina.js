
import { Component, Input } from '@angular/core';

import { FieldData } from '../../classes/field-data';

@Component({
  selector: 'admin-field-view',
  templateUrl: './field-view.component.html',
})
export class FieldViewComponent {

  @Input()
  fieldData: FieldData;

  @Input()
  fieldName: string;

  @Input()
  fieldValue: any;

  constructor() {}
}
