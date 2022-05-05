import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PraticienComponent } from './praticien/praticien.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import {HttpClientModule} from '@angular/common/http';
import { PatientComponent } from './patient/patient.component';
import { CreneauComponent } from './creneau/creneau.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { LieuComponent } from './lieu/lieu.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PraticienComponent,
    AuthentificationComponent,
    SpecialiteComponent,
    PatientComponent,
    CreneauComponent,
    ConsultationComponent,
    LieuComponent,
    UtilisateurComponent,
    CreneauComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
