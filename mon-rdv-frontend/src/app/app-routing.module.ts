import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PraticienComponent } from './praticien/praticien.component';

const routes: Routes = [
  {path: "praticien", component: PraticienComponent},
  {path: "authentification", component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
