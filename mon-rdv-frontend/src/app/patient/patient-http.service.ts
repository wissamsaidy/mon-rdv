import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/model';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {
  private apiUrl: string;
  patients: Array<Patient> = new Array<Patient>();

  constructor(private httpClient: HttpClient, private globalService: GlobalService) {
    this.apiUrl = globalService.backEndUrl + "patient";
    this.load();
   }

   findAll(): Array<Patient>{
     return this.patients;
   }
   findById(id: number): Observable<Patient>{
    return this.httpClient.get<Patient>(this.apiUrl + "/" + id);
   }

   save(patient: Patient){
    if(patient.id){
      this.httpClient.put<Patient>(this.apiUrl + "/" + patient.id, patient).subscribe(() => {
        this.load();
      });
    }else{
      this.httpClient.post<Patient>(this.apiUrl, patient).subscribe(() => {
        this.load();
      });
    }
   }

   delete(id: number){
    this.httpClient.delete<void>(this.apiUrl + "/" + id).subscribe(() => {this.load});
  }
  load(){
    this.httpClient.get<Array<Patient>>(this.apiUrl).subscribe( response => this.patients = response);
  }
}
