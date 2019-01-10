import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoadingService {
  private subject = new Subject<boolean>();
  public isLoading$: Observable<boolean> = this.subject.asObservable();

  showLoading() {
    this.subject.next(true);
  }

  hideLoading() {
    this.subject.next(false);
  }

}