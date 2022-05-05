import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/model';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

users: Array<Utilisateur> = new Array<Utilisateur>();
apiPath:string;

constructor(private http: HttpClient, private appGlobal: GlobalService) {
  this.apiPath = this.appGlobal.backEndUrl + "utilisateur/";
  this.load();
}

  findAll(): Array<Utilisateur> {
    return this.users;
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.apiPath + id);
  }

  save(utilisateur: Utilisateur) {
    if (utilisateur.id) {
      this.http.put<Utilisateur>(this.apiPath + utilisateur.id, Utilisateur)
        .subscribe(resp => {
          this.load();
        });
    } else {
      this.http.post<Utilisateur>(this.apiPath, utilisateur)
        .subscribe(resp => {
          this.load();
        });
    }
  }

  delete(id: number) {
    this.http.delete<void>(this.apiPath + id)
      .subscribe(resp => {
        this.load();
      });
  }

  load() {
    this.http.get<Array<Utilisateur>>(this.apiPath)
      .subscribe(response => {
        this.users = response;
      });
  }
}
