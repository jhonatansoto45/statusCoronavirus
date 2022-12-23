import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderItem } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  onClickedItem(item: HeaderItem): void {
    this.scrollTop();
    switch (item) {
      case HeaderItem.home:
        this.router.navigateByUrl('inicio');
        break;
      case HeaderItem.world:
        this.router.navigateByUrl('mundial');
        break;
      case HeaderItem.countries:
        this.router.navigateByUrl('ciudades');
        break;
      case HeaderItem.continent:
        this.router.navigateByUrl('continentes');
        break;
    }
  }

  scrollTop(): void {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }
}
