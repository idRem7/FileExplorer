import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {

  private _open = false;

  @Input()
  folder: Folder;

  get itemsAmount(){
    return this.folder.content.length;
  }

  get isOpen(){
    return this._open;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleOpen(){
    this._open = !this._open;
  }

}
