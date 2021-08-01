import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { CamboyaComponent } from './pages/camboya/camboya.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'camboya', component: CamboyaComponent },
  { path: 'acerca', component: AcercaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
