import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [MatProgressSpinnerModule, MatTableModule, CdkTableModule],
})
export class MaterialModule {}
