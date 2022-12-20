import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, BannerComponent, FooterComponent],
  exports: [HeaderComponent, BannerComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}
