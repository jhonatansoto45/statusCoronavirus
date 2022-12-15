import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCovidRoutingModule } from './status-covid-routing.module';
import { WorldComponent } from './pages/world/world.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ContinentComponent } from './pages/continent/continent.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [
    WorldComponent,
    CountriesComponent,
    ContinentComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    StatusCovidRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class StatusCovidModule {}
