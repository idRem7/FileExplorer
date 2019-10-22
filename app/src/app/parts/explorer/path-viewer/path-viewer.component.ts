import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model';
import { DataService } from 'src/app/lib/Services/data.service';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';

@Component({
    selector: 'app-path-viewer',
    templateUrl: './path-viewer.component.html',
    // styleUrls: ['./path-viewer.component.scss']
    host: {
        class: 'path-viewer'
    }
})
export class PathViewerComponent implements OnInit {

    @Input()
    root: Folder;

    @Output()
    select: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();

    constructor(private dataSVC: DataService) { }

    ngOnInit() { }

    isFile(elem: File | Folder): boolean {
        return elem instanceof File;
    }

    onSelectedItem(selectedItem: SelectedItem) {  
        this.select.emit(selectedItem);
    }

}
