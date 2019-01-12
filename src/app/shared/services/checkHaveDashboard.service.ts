import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';


@Injectable()
export class CheckHaveDashBoardService {
    private subjectDashboard = new Subject<boolean>();
    public isDashboard$: Observable<boolean> = this.subjectDashboard.asObservable();
  
    showDashboard() {
      this.subjectDashboard.next(true);
    }
  
    hideDashboard() {
      this.subjectDashboard.next(false);
    }
}