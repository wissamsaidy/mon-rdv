import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Praticien } from 'src/model';
import { GlobalService } from '../global.service';

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

  
  load(){
    this.httpClient.get<Array<Praticien>>(this.apiUrl).subscribe( response => this.praticiens = response);
  }
}
