import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BikeListComponent} from "./bike-list/bike-list.component";
import {BikeCreateComponent} from "./bike-create/bike-create.component";

const routes: Routes = [
  { path: 'bikes', component: BikeListComponent },
 // { path: 'bike/:id', component: BikeDetailsComponent },
 { path: 'bikes/create', component: BikeCreateComponent },
 // { path: 'bike/edit/:id', component: BikeEditComponent },
  { path: '', redirectTo: '/bikes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
