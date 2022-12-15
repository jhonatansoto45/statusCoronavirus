import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `<section class="banner container" id="banner">
    <p class="banner__title">{{ text }}</p>
  </section>`,
  styles: [
    `
      .banner {
        width: 90%;
        height: 300px;
        border-radius: var(--border-radius);
      }

      .banner__title {
        text-align: center;
        font-size: 7rem;
        font-weight: 600;
        line-height: 300px;
        color: #000;
      }
    `,
  ],
})
export class BannerComponent implements OnInit {
  @Input() text: string = 'Escribe aquí tu texto';
  @Input() routeImage: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.routeImage !== undefined) {
      document.getElementById(
        'banner'
      )!.style.backgroundImage = `url(${this.routeImage})`;
      document.getElementById('banner')!.style.backgroundRepeat = 'no-repeat';
      document.getElementById('banner')!.style.backgroundPosition = 'top';
      document.getElementById('banner')!.style.backgroundSize = 'cover';
    }
  }
}
