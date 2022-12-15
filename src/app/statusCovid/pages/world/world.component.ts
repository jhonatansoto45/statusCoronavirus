import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  readonly textBanner: string = 'Mundial';
  readonly routeImgBanner: string =
    '../../../../assets/images/banner/world.avif';

  constructor() {}

  ngOnInit(): void {}
}
