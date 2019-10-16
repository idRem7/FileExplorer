import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import {File} from 'src/app/lib/models/file.model'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  // styleUrls: ['./folder.component.scss']
  host: {
    class: 'folder'
  }
})
export class FolderComponent implements OnInit {

  private _open = false;

  @Input()
  folder: Folder;

  @HostBinding('class.folder--have-content')
  get itemsAmount() {
    return this.folder.content.length;
  }


  get isOpen() {
    return this._open;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleOpen() {
    this._open = !this._open;
  }

  isFile(elem: File | Folder): boolean {
    return elem instanceof File;
  }

  open(){
    this._open = true;
  }

  close(){
    this._open = false;
  }

}
