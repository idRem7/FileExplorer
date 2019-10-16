import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.scss']
})
export class ContentViewerComponent implements OnInit {

  @Input()
  elem: File | Folder;

  get items() {
    if (this.elem instanceof Folder) {
      return this.elem.content.length;
    } else {
      return 0;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
