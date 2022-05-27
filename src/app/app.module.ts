import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { MainBannerComponent } from './home/main-banner/main-banner.component';
import { LastNewsComponent } from './home/last-news/last-news.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainNavComponent,
    MainFooterComponent,
    InicioComponent,
    MainBannerComponent,
    LastNewsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
