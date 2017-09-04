
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Headers, Http } from '@angular/http';

import { AdminAPIService } from './lib/admin-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  checkFail = false;
  ready = false;

  constructor(
    private adminAPIService: AdminAPIService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {

    let adminStatus = await this.adminAPIService.check();
    if (adminStatus == true)
      this.router.navigate(['/overview'])
    else
      this.router.navigate(['/redirect']);
  }
}
