import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { PraticienComponent } from './praticien/praticien.component';

const routes: Routes = [
  {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
