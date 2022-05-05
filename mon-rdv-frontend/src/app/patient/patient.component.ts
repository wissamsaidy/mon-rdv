import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/model';
import { PatientHttpService } from './patient-http.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patient: Patient;

  constructor(private patientHttpService : PatientHttpService) { 
    // this.patient = new Patient();
    // this.patient.nom = "f";
    // this.patientHttpService.save(this.patient);
this.patientHttpService.delete(15);
  }

  ngOnInit(): void {
  }



}
