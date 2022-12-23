import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ListDataWorld } from '../../../../interfaces/interfaces';
import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-active-cases',
  templateUrl: './active-cases.component.html',
  styleUrls: ['./active-cases.component.scss'],
})
export class ActiveCasesComponent implements OnChanges {
  readonly pieChartType: ChartType = 'pie';
  pieChartDataActive: ChartData = {
    labels: [],
    datasets: [],
  };

  pieChartOptionsActive: ChartConfiguration['options'] = {
    responsive: true,
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
      this.createActiveCase(this.listData[0]);
    }
  }

  createActiveCase(dataItem: ListDataWorld): void {
    this.pieChartDataActive = {
      labels: ['Casos Activos', 'Nuevos casos'],
      datasets: [
        {
          data: [dataItem.ActiveCases, dataItem.NewCases],
        },
      ],
    };
  }
}
