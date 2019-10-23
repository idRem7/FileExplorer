import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './parts/explorer/explorer.component';
import { PathViewerComponent } from './parts/explorer/path-viewer/path-viewer.component';


const routes: Routes = [
  // { path: ':path', component: ExplorerComponent, },ф
  { path: '', component: ExplorerComponent, },
  { path: '**', component: ExplorerComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
