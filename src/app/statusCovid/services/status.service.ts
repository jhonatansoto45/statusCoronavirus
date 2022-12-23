import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListDataWorld, Noticias } from '../../interfaces/interfaces';
import { apiKey } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private listadoNews: Noticias[] = [];
  private listDataWorld: ListDataWorld[] = [];

  //? CAMBIAR APIKEY SI SE DESEA CON OTROS USUARIO
  private headers: HttpHeaders = new HttpHeaders()
    .set('X-RapidAPI-Key', apiKey.key)
    .set('X-RapidAPI-Host', apiKey.host);

  constructor(private http: HttpClient) {}

  get listadoNoticias() {
    return [...this.listadoNews];
  }

  get listadoWorld() {
    return [...this.listDataWorld];
  }

  getNews(): void {
    this.http
      .get<Noticias>(
        'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
        { headers: this.headers }
      )
      .subscribe((list: any) => (this.listadoNews = list.news));
  }

  getData(filter: string) {
    return this.http.get<ListDataWorld[]>(
      `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${filter}`,
      { headers: this.headers }
    );
  }
}
