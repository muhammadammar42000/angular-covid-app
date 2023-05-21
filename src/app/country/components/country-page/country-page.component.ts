import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit, OnChanges {
  covidData: any[] = [];

  constructor(private dataService: DataService , private searchService: SearchService) {}

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe((data: any) => {
      this.covidData = data.response;
    });
  }

  searchCountry(country: string) {
    const countries = this.covidData?.filter((c: any) =>
      c.country.toLowerCase().includes(country.toLocaleLowerCase())
    );
    
    this.searchService.setCountries(countries)

  }

  ngOnChanges() {}
}
