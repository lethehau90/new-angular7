import { Component, OnInit, Input, Output, ElementRef, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import * as _ from 'lodash';
import { SearchDropdownComponent } from './search-dropdown/search-dropdown.component';


@Component({
  selector: 'app-dropdown',
  templateUrl: 'app-dropdown.component.html',
  styleUrls: ['app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit, OnChanges {

  @ViewChild('searchBox') searchBox: SearchDropdownComponent;

  @Input() alwaysShow: boolean = false;
  @Input() placeholderSingle = 'Select Item'
  @Input() placeholderMultiple = 'Select Items';
  @Input() placeholderText: string = 'Type something';
  @Input() icon: string = 'la la-list-alt';
  @Input() multiple: boolean = false;
  @Input() data: any[] = [];
  @Input() selectedItem: any;
  @Input() selected: any[] = [];

  @Output() selectedData = new EventEmitter<any>();
  @Output() closeDropdown = new EventEmitter();

  @ViewChild('content') content: ElementRef;

  isShow: boolean = false;
  listBidding = [];
  filteredItems: any[] = [];
  selectedItemValue: string;
  search: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.multiple) {
      if (this.selected && this.selected.length == 0 && this.data && this.data.length > 0) {
        this.search = '';
        this.selected = [];
        this.data.forEach(item => (item.selected = false));
      }
    }
    else if (this.selectedItem && this.selectedItem.length) {
      this.selectedItem = this.selectedItem[0];
      this.selectedItemValue = this.selectedItem.value;
    }
    if (changes.data && this.alwaysShow) {
      this._filter();
    }
    if (this.selectedItem && this.selectedItem.id && this.data && this.data.length > 0) {
      let index = this.data.findIndex(d => d.id == this.selectedItem.id);
      this.data[index].selected = true;
      this.selectedItem = _.cloneDeep(this.data[index]);
    }
    this.selected = _.cloneDeep(this.selected);
    if (this.selected && this.selected.length != 0 && this.selected && this.data && this.data.length > 0) {
      this.selected.forEach(item => {
        this.data.forEach(dt => {
          if (dt.value == item.value) {
            dt.selected = true;
          }
        });
      });
    }
  }

  ngOnInit() {
    this._filter();
  }

  removeSelected(item: any) {
    let position = this.selected.findIndex(s => s.id == item.id)
    this.selected.splice(position, 1);
    position = _.findIndex(this.data, o => { return o.id == item.id });
    this.data[position].selected = false;
    this._filter();
    this.selectedData.emit(this.selected);
  }

  selectItem(item: any) {
    if (item.selected) {
      this.removeSelected(item);
    } else {
      if (!this.selected.includes(item)) {
        item.selected = true;
        this.selected.push(item);
        this.selectedData.emit(this.selected);
      }
    }
  }

  selectOneItem(index: number, userSelected) {
    if (userSelected && userSelected.selected == true) {
      this.data.map(i => (i.selected = false));
      this.selectedItem = null;
      this.selectedItemValue = null;
    }
    else {
      this.data.map(i => (i.selected = false));
      if (userSelected.selected == true) {
        this.selectedItem = this.data[index];
        this.data[index].selected = false;
        this.selectedItemValue = this.selectedItem.value;
      }
      else {
        this.selectedItem = this.data[index];
        this.data[index].selected = true;
        this.selectedItemValue = this.selectedItem.value;
      }
    }
    this.isShow = false;
    this.selectedData.emit(this.selectedItem);
  }

  clearAll() {
    this.searchBox.setFocus();
    this.resetData()
  }

  onClickedOutside(value) {
    if (value) {
      this.isShow = false;
    }
  }

  receiveDataFilterList(data) {
    this.search = data;
    this._filter();
  }

  searchData(data) {
    this.data = this.filteredItems ? [...this.filteredItems] : null;
    this.data = this.data.filter(d => d.value.toLowerCase().includes(data));
  }

  resetData() {
    if (this.multiple) {
      this.search = '';
      this.selected = [];
      this.selectedItem = null;
      this.filteredItems.forEach(item => {
        item.selected = false;
      });
      this.data.forEach(item => (item.selected = false));
      this._filter();
      this.selectedData.emit(this.selected);
    } else {
      this.selectedItem = null;
      this.selected = [];
      this.search = '';
      this.data.forEach(item => (item.selected = false));
      this._filter();
      this.selectedData.emit(this.selectedItem);
    }
  }

  private _filter() {
    if (this.data && this.data.length > 0) {
      this.listBidding = [...this.data]
      const sortData = _.orderBy(this.data, [data => data.value ? data.value.toString().toLowerCase() : null], ['asc']);
      this.filteredItems = Object.assign([], sortData.filter(item => item.value ? item.value.toString().toLowerCase().indexOf(this.search.toLowerCase()) > -1 : false));
    }
  }

}