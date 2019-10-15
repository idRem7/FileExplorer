import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/lib/Services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  constructor(private dataSVC: DataService) { }

  ngOnInit() {
    this.dataSVC.getFiles()
      .subscribe(e => {
        console.log(e);
      })
  }

}
