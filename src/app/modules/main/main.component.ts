import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})

export class MainComponent implements OnInit, OnDestroy {
    isLoading = false;
    constructor(public loadingService: LoadingService) {
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
        this.loadingService.isLoading$.subscribe(res => {
            setTimeout(() => {
                this.isLoading = res;
            }, 100);
        })
    }
}
