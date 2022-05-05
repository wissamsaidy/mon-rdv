import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO, Utilisateur } from 'src/model';
import { UtilisateurService } from './utilisateur.service';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  
  utilisateurs : Array<Utilisateur> = this.utilisateurService.findAll();

  user: Utilisateur;

  apiPath:string;

  constructor(private http: HttpClient,
     private utilisateurService : UtilisateurService, 
     private globalService:GlobalService) {
      this.apiPath=this.globalService.backEndUrl;
  }

  login(login: string, password: string) {
    console.log(login, " ",password);
    this.http.post<UserDTO>(this.apiPath + 'authentification', { login: login, password: password }) 
        .subscribe(user => {
          console.log("returned user",user);
          this.user = user.utilisateur;
          console.log("authUser" , this.user);
          return this.user;
        })
  }
}