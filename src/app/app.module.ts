import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthAPIInterceptor } from './shared/helpers/auth-api.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      tapToDismiss: true,
      maxOpened: 1
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthAPIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
