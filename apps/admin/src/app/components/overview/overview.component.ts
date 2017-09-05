
import { Component, OnInit } from '@angular/core';
import { AdminAPIService } from '../../lib/admin-api.service';

@Component({
  selector: 'admin-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements OnInit {

  apps = [
    'one',
    'two',
    'three'
  ]

  constructor(private adminAPIService: AdminAPIService) {}

  async ngOnInit() {
    let response = await this.adminAPIService.post('/overview', {});
    this.apps = response.apps;
  }
}
