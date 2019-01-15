import { Component, OnInit, OnDestroy, AfterViewInit, OnChanges } from '@angular/core';
import { ScriptLoaderService } from './shared/services/script-loader.service';
import { Helpers } from './shared/helpers/helpers';
import { LoadingService } from './shared/services/loading.service';
import { CachingService } from './shared/services/caching.service';
import { isDashboard } from './shared/share.constants';
import { CheckHaveDashBoardService } from './shared/services/checkHaveDashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  constructor(
    private _script: ScriptLoaderService,
    private _cachingService: CachingService,
    private _checkHaveDashboardService: CheckHaveDashBoardService
  ) { }

  title = 'my-app';
  private isDashboard = false;
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    this._script.loadScripts('body', [
      'assets/vendors/base/vendors.bundle.js',
      'assets/js/scripts.bundle.js'], true).then((result) => {
        this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js'], true);
      });
    
  
      this._checkHaveDashboardService.isDashboard$.subscribe((res: boolean) => {
        this.isDashboard = res;
      })

      this.isDashboard = this._cachingService.sessionStorage.get(isDashboard);

  }

  ngOnChanges(): void {
    console.log("ngOnchange")
  }


  ngAfterViewInit() {

    mLayout.initHeader();

  }
}
