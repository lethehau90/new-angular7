import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.scss']
})
export class SearchDropdownComponent implements OnInit {
  @Input() placeholderText = 'Type something';
  @Input('search') search;

  @Output() searchData = new EventEmitter<any>();

  @ViewChild('searchText') searchText: ElementRef

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.searchText.nativeElement.focus();
  }

  filter() {
    this.searchData.emit(this.search);
  }

  setFocus() {
    this.searchText.nativeElement.focus();
  }
}
