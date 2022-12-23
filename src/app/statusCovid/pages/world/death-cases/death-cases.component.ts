import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ListDataWorld } from '../../../../interfaces/interfaces';
import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-death-cases',
  templateUrl: './death-cases.component.html',
  styleUrls: ['./death-cases.component.scss'],
})
export class DeathCasesComponent implements OnChanges {
  readonly pieChartType: ChartType = 'pie';

  pieChartDataDeaths: ChartData = {
    labels: [],
    datasets: [],
  };

  pieChartOptionsDeaths: ChartConfiguration['options'] = {
    responsive: true,
    color: '#fff',
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  @Input() listData: ListDataWorld[] = [];

  constructor(private statusService: StatusService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('listData' in changes && this.listData.length > 0) {
      this.createDeathCase(this.listData[0]);
    }
  }

  createDeathCase(dataItem: ListDataWorld): void {
    this.pieChartDataDeaths = {
      labels: ['Nuevas muertes', 'Grave Crítico'],
      datasets: [
        {
          data: [dataItem.NewDeaths, dataItem.Serious_Critical],
        },
      ],
    };
  }
}
