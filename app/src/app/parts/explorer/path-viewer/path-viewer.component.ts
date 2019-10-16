import { Component, OnInit, Input } from '@angular/core';
import { Folder } from 'src/app/lib/models/folder.model';

@Component({
  selector: 'app-path-viewer',
  templateUrl: './path-viewer.component.html',
  styleUrls: ['./path-viewer.component.scss']
})
export class PathViewerComponent implements OnInit {

  @Input()
  root: Folder;

  constructor() { }

  ngOnInit() {
  }

}
