import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/status.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;

  constructor(private statusService: StatusService) {}

  get listadoNoticias() {
    return this.statusService.listadoNoticias;
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.loading = true;
    this.statusService.getNews();
    //this.loading = false;
  }
}
