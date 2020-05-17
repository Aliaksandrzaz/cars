import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from "./components/show/show.component"

const routes: Routes = [
  { path: 'cars', component: ListComponent },
  { path: 'cars/create', component: CreateComponent },
  { path: 'cars/:id/edit', component: EditComponent },
  { path: 'cars/:id', component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
