import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ExplorerComponent } from './parts/explorer/explorer.component';
import { DataService } from './lib/Services/data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './parts/explorer/search/search.component';
import { ContentViewerComponent } from './parts/explorer/content-viewer/content-viewer.component';
import { PathViewerComponent } from './parts/explorer/path-viewer/path-viewer.component';
import { FileComponent } from './parts/explorer/path-viewer/file/file.component';
import { FolderComponent } from './parts/explorer/path-viewer/folder/folder.component';

@NgModule({
  declarations: [
    ExplorerComponent,
    SearchComponent,
    ContentViewerComponent,
    PathViewerComponent,
    FileComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    HttpClient
  ],
  bootstrap: [ExplorerComponent]
})
export class AppModule { }
