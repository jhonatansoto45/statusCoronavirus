import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentComponent } from './statusCovid/pages/continent/continent.component';
import { CountriesComponent } from './statusCovid/pages/countries/countries.component';
import { HomeComponent } from './statusCovid/pages/home/home.component';
import { WorldComponent } from './statusCovid/pages/world/world.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'mundial',
    component: WorldComponent,
  },
  {
    path: 'ciudades',
    component: CountriesComponent,
  },
  {
    path: 'continentes',
    component: ContinentComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
