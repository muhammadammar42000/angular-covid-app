import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSummaryData() {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '3fb42286f7msh07291d7a0f05411p18a8c2jsn20d7c24ac8da',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
    });

    return this.http.get('https://covid-193.p.rapidapi.com/statistics', {
      headers,
    });
  }
}
