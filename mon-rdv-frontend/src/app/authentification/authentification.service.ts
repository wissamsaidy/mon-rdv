import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO, Utilisateur } from 'src/model';
import { UtilisateurService } from './utilisateur.service';
import { GlobalService } from '../global.service';

@Injectable()
export class AuthentificationService {
  
  utilisateurs : Array<Utilisateur> = this.utilisateurService.findAll();

  utilAuthentifie: Utilisateur = null;
  apiPath:string;
  constructor(private http: HttpClient, private utilisateurService : UtilisateurService, private globalService:GlobalService) {
this.apiPath=this.globalService.backEndUrl;
  }

  login(login: string, password: string) {
    this.http.post<UserDTO>(this.apiPath + 'authentification', { login: login, password: password }) 
        .subscribe(user => {

          for (let util of this.utilisateurs) {
            if((util.email == user.login) && (util.motDePasse == user.password)) {
              user.utilisateur = util;
              this.utilAuthentifie = util;
          
            }
             
          }
          return user;
        })
  }
}