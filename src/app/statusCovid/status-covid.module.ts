import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldComponent } from './pages/world/world.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { ContinentComponent } from './pages/continent/continent.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { WorldModule } from './pages/world/world.module';

@NgModule({
  declarations: [CountriesComponent, ContinentComponent, HomeComponent],
  exports: [CountriesComponent, ContinentComponent, HomeComponent],
  imports: [CommonModule, MaterialModule, SharedModule, WorldModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatusCovidModule {}
