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
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PraticienComponent,
    AuthentificationComponent,
    SpecialiteComponent,
    UtilisateurComponent
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
