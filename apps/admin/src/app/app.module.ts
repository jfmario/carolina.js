
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AdminAPIService } from './lib/admin-api.service';
import { AdminGuard } from './lib/admin-guard';

import { AppComponent } from './app.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { FieldEditComponent } from './components/field-edit/field-edit.component';
import { FieldViewComponent } from './components/field-view/field-view.component';
import { ModelCreateComponent } from './components/model-create/model-create.component';
import { ModelDeleteComponent } from './components/model-delete/model-delete.component';
import { ModelEditComponent } from './components/model-edit/model-edit.component';
import { ModelListingComponent } from './components/model-listing/model-listing.component';
import { ModelViewComponent } from './components/model-view/model-view.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { WaitingComponent } from './components/waiting/waiting.component';

const appRoutes: Routes = [
  { component: WaitingComponent, path: '' },
  { canActivate: [AdminGuard], component: ModelCreateComponent, path: 'create/:app/:model' },
  { canActivate: [AdminGuard], component: ModelDeleteComponent, path: 'delete/:app/:model/:key' },
  { canActivate: [AdminGuard], component: ModelEditComponent, path: 'edit/:app/:model/:key' },
  { canActivate: [AdminGuard], component: ModelListingComponent, path: 'model/:app/:model' },
  { canActivate: [AdminGuard], component: ModelViewComponent, path: 'view/:app/:model/:key' },
  { canActivate: [AdminGuard], component: OverviewComponent, path: 'overview' },
  { component: RedirectComponent, path: 'redirect' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppCardComponent,
    FieldEditComponent,
    FieldViewComponent,
    ModelCreateComponent,
    ModelDeleteComponent,
    ModelEditComponent,
    ModelListingComponent,
    ModelViewComponent,
    OverviewComponent,
    RedirectComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
