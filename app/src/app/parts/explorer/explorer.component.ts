import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Folder } from 'src/app/lib/models/folder.model';
import { DataService } from 'src/app/lib/Services/data.service';
import { first, filter, delay, tap, map, distinctUntilChanged } from 'rxjs/operators';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';
import { PathViewerComponent } from './path-viewer/path-viewer.component';

@Component({
    selector: 'app-root',
    templateUrl: './explorer.component.html',
    // styleUrls: ['./explorer.component.scss'],
    host: {
        class: 'explorer'
    }
})
export class ExplorerComponent implements OnInit {

    selectedItem: SelectedItem;
    root: Folder;

    @ViewChild(PathViewerComponent, { static: true })
    pathViever: PathViewerComponent;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private dataSVC: DataService,
        private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {

        this.dataSVC.getFiles()
            .pipe(
                first()
            ).subscribe(data => {
                this.root = data;
            });

        this.route.queryParams.pipe(
            filter(q => !!q.path),
            first()
        ).subscribe(params => {
            this.pathViever.selectItem(params.path);
        });

        this.route.queryParams.pipe(
            map(params => params.search),
            distinctUntilChanged(),
            filter(s => s !== undefined),
        ).subscribe(s => {
            this.pathViever.search(s);
            this.selectedItem = null;
            this.pathViever.closeChildrenFolders();
        });

    }

    refreshSelectedItem(selectedItem: SelectedItem) {
        this.selectedItem = selectedItem;
        this.router.navigate([], {
            queryParams: { path: this.selectedItem.pathToString },
            queryParamsHandling: 'merge'
        });
        this.changeDetector.detectChanges();
    }

}
