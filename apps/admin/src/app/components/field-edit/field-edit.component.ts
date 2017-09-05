
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FieldData } from '../../classes/field-data';

@Component({
  selector: 'admin-field-edit',
  templateUrl: './field-edit.component.html',
})
export class FieldEditComponent {

  @Input()
  fieldData: FieldData;

  @Input()
  fieldName: string;

  @Input()
  fieldValue: any;
  @Output()
  fieldValueChange = new EventEmitter<string>();

  constructor() {}
}
