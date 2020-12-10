import { TableOverviewExample } from './table-overview-example';
import { TableComponent } from './components/table/table.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: 'photos',
  component: PhotoListComponent
},
{
  path: 'photos/new',
  component: PhotoFormComponent
},
{
  path: 'photos/:id',
  component: PhotoPreviewComponent
},
{
  path: '',
  redirectTo: '/photos',
  pathMatch: 'full'
},
{
  path: 'table',
  component: TableOverviewExample
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
