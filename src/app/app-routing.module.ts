import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoftwareListComponent } from './software/software-list/software-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'software-list', pathMatch: 'full' },
  { path: 'software-list', component: SoftwareListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
