
import { Component, Input } from '@angular/core';

import { AppData } from '../../classes/app-data';

@Component({
  selector: 'admin-app-card',
  templateUrl: './app-card.component.html',
})
export class AppCardComponent {

  @Input()
  private app: AppData;

  constructor() {}
}
