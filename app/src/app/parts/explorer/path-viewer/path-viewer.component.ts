import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model';
import { DataService } from 'src/app/lib/Services/data.service';

@Component({
    selector: 'app-path-viewer',
    templateUrl: './path-viewer.component.html',
    // styleUrls: ['./path-viewer.component.scss']
    host: {
        class: 'path-viewer'
    }
})
export class PathViewerComponent implements OnInit {

    root: Folder = new Folder();

    constructor(private dataSVC: DataService) { }

    ngOnInit() {
        this.dataSVC.getFiles()
            .subscribe(data => {
                this.root = data;
            });
    }

    isFile(elem: File | Folder): boolean {
        return elem instanceof File;
    }

}
