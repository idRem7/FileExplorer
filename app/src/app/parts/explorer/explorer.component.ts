import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './explorer.component.html',
  // styleUrls: ['./explorer.component.scss'],
  host: {
    class: 'explorer'
  }
})
export class ExplorerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
