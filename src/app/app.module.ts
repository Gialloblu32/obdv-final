import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainPicComponent } from './components/main-pic/main-pic.component';
import { PicMenuComponent } from './components/pic-menu/pic-menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CamboyaComponent } from './pages/camboya/camboya.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { HomeComponent } from './pages/home/home.component';
import { TitleComponent } from './components/title/title.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { FormComponent } from './components/form/form.component';
import { CountryMenuComponent } from './components/country-menu/country-menu.component';
import { DivisionComponent } from './components/division/division.component';
import { MapComponent } from './components/map/map.component';
import { TemperatureComponent } from './components/temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPicComponent,
    PicMenuComponent,
    ContentComponent,
    FooterComponent,
    BottomComponent,
    NewsletterComponent,
    CamboyaComponent,
    AcercaComponent,
    HomeComponent,
    TitleComponent,
    PortfolioComponent,
    AboutComponent,
    FormComponent,
    CountryMenuComponent,
    DivisionComponent,
    MapComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
