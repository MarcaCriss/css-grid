import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CineComponent } from './cine/cine.component';

const routes: Routes = [
  {
    path: 'cine',
    component: CineComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}