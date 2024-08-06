import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtListComponent } from './components/art-list/art-list.component';
import { ArtFormComponent } from './components/art-form/art-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/arts', pathMatch: 'full' },
  { path: 'arts', component: ArtListComponent },
  { path: 'arts/new', component: ArtFormComponent },
  { path: 'arts/edit/:id', component: ArtFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
