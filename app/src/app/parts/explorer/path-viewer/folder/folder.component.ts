import { Component, OnInit, Input, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model'
import { SelectedItem } from 'src/app/lib/models/selected-item.model';

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

  @Output()
  selectItem: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();

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

  select() {
    
    if (!this.itemsAmount) {
      return;
    }

    let selectedItem = new SelectedItem();
    selectedItem.item = this.folder;
    selectedItem.path.push(this.folder.name);
    this.selectItem.emit(selectedItem);
  }

  onSelectedItem(selectedItem: SelectedItem) {
    selectedItem.path.push(this.folder.name);
    this.selectItem.emit(selectedItem);
  }

  toggleOpen() {
    this._open = !this._open;
  }

  isFile(elem: File | Folder): boolean {
    return elem instanceof File;
  }

  open() {
    this._open = true;
  }

  close() {
    this._open = false;
  }

}
