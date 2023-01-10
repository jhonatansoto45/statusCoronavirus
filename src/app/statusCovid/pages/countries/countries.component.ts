import { Component, OnInit } from '@angular/core';
import { Countries } from '../../../interfaces/interfaces';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  loading: boolean = false;
  dataCountries: Countries[] = [];

  columns: string[] = [
    'Country',
    'NewCases',
    'NewDeaths',
    'TotalCases',
    'TotalDeaths',
  ];

  constructor(private statusS: StatusService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.statusS.getCountries().subscribe((data: Countries[]) => {
      this.loading = false;
      this.dataCountries = data;
      this.loading = true;
    });
  }
}
