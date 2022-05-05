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
<<<<<<< HEAD
import { PatientComponent } from './patient/patient.component';
import { CreneauComponent } from './creneau/creneau.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { LieuComponent } from './lieu/lieu.component';
=======
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CreneauComponent } from './creneau/creneau.component';
>>>>>>> 5f32581b1101a1f0e14068def0fc2f0d125a5d73

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PraticienComponent,
    AuthentificationComponent,
    SpecialiteComponent,
<<<<<<< HEAD
    PatientComponent,
    CreneauComponent,
    ConsultationComponent,
    LieuComponent
=======
    UtilisateurComponent,
    CreneauComponent
>>>>>>> 5f32581b1101a1f0e14068def0fc2f0d125a5d73
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
