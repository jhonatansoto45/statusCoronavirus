import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  exports: [
    MatProgressSpinnerModule,
    MatTableModule,
    CdkTableModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}
