import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search: String;
  @Output() onSearchChange = new EventEmitter<Object>();
  
  onChange($event) {
    this.onSearchChange.emit(this.search);
  }

  constructor() { }

  ngOnInit() {
  }

}
