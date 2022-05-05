import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PraticienComponent } from './praticien/praticien.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

const routes: Routes = [
  {path: "praticien", component: PraticienComponent},
  {path: "patient", component: PatientComponent},
  {path: "login", component: AuthFormComponent},
  {path: "authentification", component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
