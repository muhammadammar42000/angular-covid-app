import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css'],
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.topConfirmedCases = this.covidData.response
      ?.slice(0, 5)
      ?.sort((a: any, b: any) => b.cases.total - a.cases.total);
    this.topConfirmedDeaths = this.covidData.response
      ?.slice(0, 5)
      ?.sort((a: any, b: any) => b.deaths.total - a.deaths.total);
    this.topConfirmedRecovered = this.covidData.response
      ?.slice(0, 5)
      ?.sort((a: any, b: any) => b.cases.recovered - a.cases.recovered);

    console.log('top country ==> ', this.topConfirmedCases);
  }
}
