import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';
import { File } from 'src/app/lib/models/file.model';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';

@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.scss']
})
export class ContentViewerComponent implements OnInit {

  // Компонент подписывается на специальный сервис, который передает папку или файл
  // Для отображения контента

  @Input()
  elem: SelectedItem = null;

  get items() {
    if (this.elem.item instanceof Folder) {
      return this.elem.item.content.length;
    } else {
      return 0;
    }
  }

  get isFile() {
    return this.elem.item instanceof File;
  }

  get haveElement() {
    return this.elem;
  }

  constructor() { }

  ngOnInit() {
  }

}
