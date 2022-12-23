import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../../interfaces/interfaces';
import { apiKey } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private listadoNews: Noticias[] = [];

  //? CAMBIAR APIKEY SI SE DESEA CON OTROS USUARIO
  private headers: HttpHeaders = new HttpHeaders()
    .set('X-RapidAPI-Key', apiKey.key)
    .set('X-RapidAPI-Host', apiKey.host);

  constructor(private http: HttpClient) {}

  get listadoNoticias() {
    return [...this.listadoNews];
  }

  getNews(): void {
    this.http
      .get<Noticias>(
        'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/0',
        { headers: this.headers }
      )
      .subscribe((list: any) => (this.listadoNews = list.news));
  }

  getData(filter: string): Observable<any> {
    return this.http.get<any[]>(
      `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${filter}`,
      { headers: this.headers }
    );
  }
}
