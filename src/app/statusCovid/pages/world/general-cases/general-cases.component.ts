import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { ListDataWorld } from '../../../../interfaces/interfaces';
import { StatusService } from '../../../services/status.service';

@Component({
  selector: 'app-general-cases',
  templateUrl: './general-cases.component.html',
  styleUrls: ['./general-cases.component.scss'],
})
export class GeneralCasesComponent implements OnChanges {
  pieChartType: ChartType = 'pie';

  pieChartDataGeneral: ChartData = {
    labels: [],
    datasets: [],
  };

  pieChartOptionsGeneral: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'left',
      },
    },
  };

  @Input() listData: ListDataWorld[] = [];

  constructor(private statusService: StatusService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('listData' in changes && this.listData.length > 0) {
      console.log(this.listData[0]);

      this.createGeneralCase(this.listData[0]);
    }
  }

  createGeneralCase(dataItem: ListDataWorld): void {
    this.pieChartDataGeneral = {
      labels: [
        'Casos Activos',
        'Tasa de letalidad',
        'Nuevos casos',
        'Nuevas muertes',
        'Total Casos',
        'Total muertes',
      ],
      datasets: [
        {
          data: [
            dataItem.ActiveCases,
            dataItem.Case_Fatality_Rate,
            dataItem.NewCases,
            dataItem.NewDeaths,
            dataItem.TotalCases,
            dataItem.TotalDeaths,
          ],
        },
      ],
    };
  }
}
