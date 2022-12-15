import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  readonly textBanner: string = 'Mundial';
  readonly routeImgBanner: string =
    '../../../../assets/images/banner/world.avif';
  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.getDataWorld();
  }

  getDataWorld(): void {
    const filter: string = 'world';
    this.statusService.getData(filter).subscribe((response) => {
      console.log(response, 'data');
    });
  }
}
