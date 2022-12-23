import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorldComponent } from './pages/world/world.component';

const routes: Routes = [
 /*  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'world',
        component: WorldComponent,
      }
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusCovidRoutingModule { }
