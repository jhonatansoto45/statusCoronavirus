import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Countries,
  ListDataWorld,
  Noticias,
} from '../../interfaces/interfaces';
import { apiKey, environment } from '../../../environments/environment';

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

  private baseUri: string = environment.baseUrl;

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

  getData() {
    return this.http.get<ListDataWorld[]>(`${this.baseUri}/world`, {
      headers: this.headers,
    });
  }

  getCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.baseUri}/countries`, {
      headers: this.headers,
    });
  }

  getContinent(continente: string): Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.baseUri}/${continente}`, {
      headers: this.headers,
    });
  }
}
