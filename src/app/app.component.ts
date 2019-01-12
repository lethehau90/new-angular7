import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ScriptLoaderService } from './shared/services/script-loader.service';
import { Helpers } from './shared/helpers/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private _script: ScriptLoaderService,
  ) { }

  private isDashBoard = false;
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this._script.loadScripts('body', [
      'assets/vendors/base/vendors.bundle.js',
      'assets/js/scripts.bundle.js'], true).then((result) => {
        this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
      });
      this.isDashBoard = false;
  }
  title = 'my-app';

  ngAfterViewInit() {

    mLayout.initHeader();

  }
}
