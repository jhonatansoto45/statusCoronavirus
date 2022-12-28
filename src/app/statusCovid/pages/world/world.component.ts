import { Component, OnInit } from '@angular/core';
import { ListDataWorld } from '../../../interfaces/interfaces';
import { StatusService } from '../../services/status.service';
@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent implements OnInit {
  readonly filter: string = 'world';

  listDataWorld: ListDataWorld[] = [];

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.getDataWorld();
  }

  private getDataWorld() {
    this.statusService
      .getData()
      .subscribe((data: any) => (this.listDataWorld = data));
  }
}
