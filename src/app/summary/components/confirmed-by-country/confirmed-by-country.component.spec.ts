import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedByCountryComponent } from './confirmed-by-country.component';

describe('ConfirmedByCountryComponent', () => {
  let component: ConfirmedByCountryComponent;
  let fixture: ComponentFixture<ConfirmedByCountryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedByCountryComponent]
    });
    fixture = TestBed.createComponent(ConfirmedByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
