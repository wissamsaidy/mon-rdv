import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lieu } from 'src/model';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class LieuHttpService {
  private apiUrl: string;
  lieus: Array<Lieu> = new Array<Lieu>();

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.apiUrl = globalService.backEndUrl + "lieu";
    this.load();
   }

   findAll(): Array<Lieu>{
     return this.lieus;
   }
   findById(id: number): Observable<Lieu>{
    return this.httpClient.get<Lieu>(this.apiUrl + "/" + id);
   }


   save(lieu: Lieu){
    if(lieu.id){
      this.httpClient.put<Lieu>(this.apiUrl + "/" + lieu.id, lieu).subscribe(() => {
        this.load();
      });
    }else{
      this.httpClient.post<Lieu>(this.apiUrl, lieu).subscribe(() => {
        this.load();
      });
    }
   }

   delete(id: number){
    this.httpClient.delete<void>(this.apiUrl + "/" + id).subscribe(() => {this.load});
  }
  load(){
    this.httpClient.get<Array<Lieu>>(this.apiUrl).subscribe( response => this.lieus = response);
  }
}
