
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { AdminAPIService } from '../../lib/admin-api.service';

@Component({
  selector: 'admin-model-delete',
  templateUrl: './model-delete.component.html',
})
export class ModelDeleteComponent implements OnInit {

  private appName: string;
  private modelName: string;
  private modelKey: string;

  constructor(
    private adminAPIService: AdminAPIService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async delete() {
    let response = await this.adminAPIService.post('/delete', {
      appName: this.appName,
      modelName: this.modelName,
      itemKey: this.modelKey
    });
    this.router.navigate(['/model', this.appName, this.modelName]);
  }

  async ngOnInit() {
    this.appName = this.route.snapshot.paramMap.get('app');
    this.modelName = this.route.snapshot.paramMap.get('model');
    this.modelKey = this.route.snapshot.paramMap.get('key');
  }
}
