import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model';
import { DataService } from 'src/app/lib/Services/data.service';
import { first } from 'rxjs/operators';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';

@Component({
    selector: 'app-root',
    templateUrl: './explorer.component.html',
    // styleUrls: ['./explorer.component.scss'],
    host: {
        class: 'explorer'
    }
})
export class ExplorerComponent implements OnInit {

    // Сюда перекидываем обязанности подписки на маршрут и параметры поиска
    // А так же перекладываем работу с content-handler

    selectedItem: SelectedItem = null;
    root: Folder = new Folder();
    queryParams: Params;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private dataSVC: DataService) { }

    ngOnInit() {
        this.dataSVC.getFiles()
            .pipe(
                first()
            ).subscribe(data => {
                this.root = data;
            });

        this.route.queryParams.subscribe(e => {
            this.queryParams = e;

        });

        this.route.url.subscribe(e => {
            console.log(e);
        })
    }

    refreshSelectedItem(selectedItem: SelectedItem) {
        this.selectedItem = selectedItem;
        console.log(this.queryParams);

        this.router.navigate([], {
            queryParams: { path: this.selectedItem.pathToString },
            queryParamsHandling: 'merge' 
        }).then(e => {       


        });

        // this.router.navigateByUrl(this.selectedItem.pathToString, {
        //     queryParamsHandling: 'merge'
        // });

    }

}
