import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss'],
})
export class ContinentComponent implements OnInit {
  loading: boolean = false;

  dataAsia: any[] = [];
  dataAfrica: any[] = [];
  dataEuropa: any[] = [];
  dataAmerica: any[] = [];
  dataOceania: any[] = [];

  columns: string[] = [
    'Country',
    'NewCases',
    'NewDeaths',
    'TotalCases',
    'TotalDeaths',
  ];

  constructor(private statusS: StatusService) {}

  ngOnInit(): void {
    this.getDataAsia();
    this.getDataAfrica();
    this.getDataEuropa();
    this.getDataAmerica();
    this.getDataOceania();
  }

  getDataAsia(): void {
    this.statusS.getContinent('asia').subscribe((data: any[]) => {
      this.loading = false;
      this.dataAsia = data;
      this.loading = true;
    });
  }

  getDataAfrica(): void {
    this.statusS.getContinent('africa').subscribe((data: any[]) => {
      this.loading = false;
      this.dataAfrica = data;
      this.loading = true;
    });
  }

  getDataEuropa(): void {
    this.statusS.getContinent('europe').subscribe((data: any[]) => {
      this.loading = false;
      this.dataEuropa = data;
      this.loading = true;
    });
  }

  getDataAmerica(): void {
    this.statusS.getContinent('northamerica').subscribe((data: any[]) => {
      this.loading = false;
      this.dataAmerica = data;
      this.loading = true;
    });
  }

  getDataOceania(): void {
    this.statusS.getContinent('australia').subscribe((data: any[]) => {
      this.loading = false;
      this.dataOceania = data;
      this.loading = true;
    });
  }
}
