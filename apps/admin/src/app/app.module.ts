
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AdminAPIService } from './lib/admin-api.service';
import { AdminGuard } from './lib/admin-guard';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { WaitingComponent } from './components/waiting/waiting.component';

const appRoutes: Routes = [
  { component: WaitingComponent, path: '' },
  { canActivate: [AdminGuard], component: OverviewComponent, path: 'overview' },
  { component: RedirectComponent, path: 'redirect' }
];

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    RedirectComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [
    AdminAPIService,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
