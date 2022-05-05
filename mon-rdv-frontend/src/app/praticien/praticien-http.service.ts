import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Praticien } from 'src/model';
import { GlobalService } from '../global.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PraticienHttpService {
  private apiUrl: string;
  praticiens: Array<Praticien> = new Array<Praticien>();

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.apiUrl = globalService.backEndUrl + "praticien";
    this.load();
   }

   findAll(): Array<Praticien>{
     return this.praticiens;
   }
   findById(id: number): Observable<Praticien>{
    return this.httpClient.get<Praticien>(this.apiUrl + "/" + id);
   }


   save(praticien: Praticien){
    if(praticien.id){
      this.httpClient.put<Praticien>(this.apiUrl + "/" + praticien.id, praticien).subscribe(() => {
        this.load();
      });
    }else{
      this.httpClient.post<Praticien>(this.apiUrl, praticien).subscribe(() => {
        this.load();
      });
    }
   }

   delete(id: number){
    this.httpClient.delete<void>(this.apiUrl + "/" + id).subscribe(() => {this.load});
  }

  load(){
    this.httpClient.get<Array<Praticien>>(this.apiUrl).subscribe( response => this.praticiens = response);
  }
}
