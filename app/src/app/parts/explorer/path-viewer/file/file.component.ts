import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { SelectedItem } from 'src/app/lib/models/selected-item.model';
import { File } from 'src/app/lib/models/file.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  // styleUrls: ['./file.component.scss']
  host: {
    class: 'file pointer'
  }
})
export class FileComponent implements OnInit {

  @Input()
  file: File;

  @Output()
  selectItem: EventEmitter<SelectedItem> = new EventEmitter<SelectedItem>();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  select() {
    let selectedItem = new SelectedItem();
    selectedItem.item = this.file;
    selectedItem.path.push(this.file.name);    
    this.selectItem.emit(selectedItem);        
  }

}
