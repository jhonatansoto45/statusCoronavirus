import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { MaterialModule } from '../../../shared/material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { WorldComponent } from './world.component';
import { ActiveCasesComponent } from './active-cases/active-cases.component';
import { DeathCasesComponent } from './death-cases/death-cases.component';
import { GeneralCasesComponent } from './general-cases/general-cases.component';

@NgModule({
  declarations: [
    WorldComponent,
    ActiveCasesComponent,
    DeathCasesComponent,
    GeneralCasesComponent,
  ],
  exports: [WorldComponent],
  imports: [CommonModule, MaterialModule, SharedModule, NgChartsModule],
})
export class WorldModule {}
