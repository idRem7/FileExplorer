import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpSVC: HttpClient) { }

  getFiles(): Observable<Folder> {
    return this.httpSVC.get('assets/fs.json')
    .pipe(
      map(f => Folder.createFrom(f))
    );
  }

}


