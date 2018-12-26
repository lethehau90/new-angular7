import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ClickOutsideModule } from 'ng-click-outside';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ModalModule, PaginationModule, PopoverModule } from 'ngx-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgxMaskModule } from 'ngx-mask';
import { LoadingService } from './services/loading.service';
import { NotifierService } from './services/notifier.service';
import { EmitterService } from './services/emitter.service';
import { HttpClientService } from './services/http-client.service';
import { WindowRef } from './services/window-ref.service';
import { CachingService } from './services/caching.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        NgxDaterangepickerMd,
        ClickOutsideModule,
        AutoCompleteModule,
        MatProgressSpinnerModule,
        NgDatepickerModule,
        PaginationModule.forRoot(),
        ModalModule.forRoot(),
        NgbModule.forRoot(),
        DpDatePickerModule,
        PopoverModule.forRoot(),
        NgxMaskModule.forRoot(),
    ],
    exports: [
        NgDatepickerModule,
        NgxPaginationModule,
        PaginationModule,
        ModalModule,
        NgbModule,
        PopoverModule,
        NgxMaskModule,
        ClickOutsideModule,
    ],
    declarations: [

    ],
    providers: [
        
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [
          EmitterService,
          HttpClientService,
          LoadingService,
          NotifierService,
          WindowRef,
          CachingService
        ]
      };
    }
  }