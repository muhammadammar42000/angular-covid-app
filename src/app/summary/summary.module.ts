import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { TopCountriesComponent } from './components/top-countries/top-countries.component';
import { ConfirmedByCountryComponent } from './components/confirmed-by-country/confirmed-by-country.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardComponent,
    TopCountriesComponent,
    ConfirmedByCountryComponent,
  ],
  imports: [CommonModule, SummaryRoutingModule, SharedModule],
})
export class SummaryModule {}
