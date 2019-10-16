import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  // styleUrls: ['./file.component.scss']
  host:{
    class: 'file pointer'
  }
})
export class FileComponent implements OnInit {

  @Input()
  file: File;

  constructor() { }

  ngOnInit() {
  }

}
