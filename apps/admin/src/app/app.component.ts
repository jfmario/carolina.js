
import { Component, OnInit } from '@angular/core';

import { AdminAPIService } from './lib/admin-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private adminCheckService: AdminCheckService ) {}

  ngOnInit() {
    this.adminCheckService.check();
  }
}
