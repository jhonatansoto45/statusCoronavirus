import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusCovidRoutingModule } from './status-covid-routing.module';
import { WorldComponent } from './pages/world/world.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ContinentComponent } from './pages/continent/continent.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WorldComponent, CountriesComponent, ContinentComponent],
  imports: [CommonModule, StatusCovidRoutingModule, SharedModule],
})
export class StatusCovidModule {}
