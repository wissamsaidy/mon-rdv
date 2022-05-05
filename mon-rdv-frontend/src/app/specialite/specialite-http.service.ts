import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialite } from 'src/model';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteHttpService {
  private apiUrl: string;
  specialites: Array<Specialite> = new Array<Specialite>();

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.apiUrl = globalService.backEndUrl + "specialite";
    this.load();
   }

   findAll(): Array<Specialite>{
     return this.specialites;
   }
   findById(id: number): Observable<Specialite>{
    return this.httpClient.get<Specialite>(this.apiUrl + "/" + id);
   }

   save(specialite: Specialite){
    if(specialite.id){
      this.httpClient.put<Specialite>(this.apiUrl + "/" + specialite.id, specialite).subscribe(response => {
        this.load();
      });
    }else{
      this.httpClient.post<Specialite>(this.apiUrl, specialite).subscribe(response => {
        this.load();
      });
    }
   }

   delete(id: number){
    this.httpClient.delete<void>(this.apiUrl + "/" + id).subscribe(() => {this.load});
  }
  load(){
    this.httpClient.get<Array<Specialite>>(this.apiUrl).subscribe( (response) => this.specialites = response);
  }
}
