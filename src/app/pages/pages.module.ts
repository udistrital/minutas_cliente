import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SharedModule } from '../shared/shared.module';
import { MenuService } from '../@core/data/menu.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    SharedModule,
    CKEditorModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  providers: [
    MenuService,
  ],
})
export class PagesModule {
}
