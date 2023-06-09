import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';

  constructor() {}

  @Output() countryToSearch = new EventEmitter<any>();
  ngOnInit(): void {}

  search() {
    this.countryToSearch.emit(this.searchTerm);
  }
}
