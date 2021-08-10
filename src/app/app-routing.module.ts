import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { CamboyaComponent } from './pages/camboya/camboya.component';
import { IndonesiaComponent } from './pages/indonesia/indonesia.component';
import { RusiaComponent } from './pages/rusia/rusia.component';
import { MarruecosComponent } from './pages/marruecos/marruecos.component';
import { TanzaniaComponent } from './pages/tanzania/tanzania.component';

import { AcercaComponent } from './pages/acerca/acerca.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camboya', component: CamboyaComponent },
  { path: 'indonesia', component: IndonesiaComponent },
  { path: 'rusia', component: RusiaComponent },
  { path: 'marruecos', component: MarruecosComponent },
  { path: 'tanzania', component: TanzaniaComponent },

  { path: 'acerca', component: AcercaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
