import { Component, OnInit, Output, EventEmitter, Input, ViewChildren, QueryList, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { Subject, of, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-path-viewer',
    templateUrl: './path-viewer.component.html',
    // styleUrls: ['./path-viewer.component.scss']
    host: {
        class: 'path-viewer'
    }
})
export class PathViewerComponent implements OnInit, AfterViewInit {

    private _isViewChildrenFoldersReady: boolean = false;
    private _viewChildrenFoldersReady$: Subject<boolean> = new Subject<boolean>();

    private _isViewChildrenFilesReady: boolean = false;
    private _viewChildrenFilesReady$: Subject<boolean> = new Subject<boolean>();

    @ViewChildren(FolderComponent)
    folders: QueryList<FolderComponent>;

    @ViewChildren(FileComponent)
    files: QueryList<FileComponent>;

    @Input()
    root: Folder;

    @Output()
    select: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {

        if (!!this.root && this.folders.toArray().length == this.root.amountFolders) {
            this._isViewChildrenFoldersReady = true;
            this._viewChildrenFoldersReady$.next(true);
        } else {
            this.folders.changes.subscribe(e => {
                this._isViewChildrenFoldersReady = true;
                this._viewChildrenFoldersReady$.next(true);
            });
        }

        if (!!this.root && this.files.toArray().length == this.root.amountFiles) {
            this._isViewChildrenFilesReady = true;
            this._viewChildrenFilesReady$.next(true);
        } else {
            this.files.changes.subscribe(e => {
                this._isViewChildrenFilesReady = true;
                this._viewChildrenFilesReady$.next(true);
            });
        }

    }

    checkViewClidrenFoldersReady$(): Observable<boolean> {
        if (this._isViewChildrenFoldersReady) {
            return of(true);
        } else {
            return this._viewChildrenFoldersReady$;
        }
    }

    checkViewClidrenFilesReady$(): Observable<boolean> {
        if (this._isViewChildrenFilesReady) {
            return of(true).pipe(first());
        } else {
            return this._viewChildrenFilesReady$.pipe(first());
        }
    }

    isFile(elem: File | Folder): boolean {
        return elem instanceof File;
    }

    onSelectedItem(selectedItem: SelectedItem) {
        this.select.emit(selectedItem);
        this.folders.forEach(f => {
            if (f.folder.name != selectedItem.path[selectedItem.path.length - 1]) {
                f.closeChildrenFolders();
                f.close();
                console.log("Close " + f.folder.name);
                                
            }
        });
    }

    selectItem(itemPath: string) {

        let arrayPath = itemPath.split('/');

        if (arrayPath.length == 1) {
            this.checkViewClidrenFilesReady$().subscribe(e => {
                let item = this.files.find(f => f.file.name == arrayPath[0]);
                item.onSelect();
            });
        } else if (arrayPath.length == 2 && arrayPath[arrayPath.length - 1] == "") {
            this.checkViewClidrenFoldersReady$().subscribe(e => {
                let item = this.folders.find(f => f.folder.name == arrayPath[0]);
                item.onSelectSelf(true);
            });
        } else {
            this.checkViewClidrenFoldersReady$().subscribe(e => {
                let item = this.folders.find(f => f.folder.name == arrayPath[0]);   
                item.selectItem(arrayPath.slice(1, arrayPath.length));                
            });
        }

    }

    search(query: string) { }

}
