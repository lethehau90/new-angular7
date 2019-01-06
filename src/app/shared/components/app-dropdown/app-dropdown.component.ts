import { Component, OnInit, Input, Output, ElementRef, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

import * as _ from 'lodash';


@Component({
  selector: 'app-dropdown',
  templateUrl: 'app-dropdown.component.html',
  styleUrls: ['app-dropdown.component.scss']
})
export class AppDropdownComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ngOnInit(): void {
   
  }

}
