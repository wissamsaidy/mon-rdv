import { Component, OnInit } from '@angular/core';
import { Specialite } from 'src/model';
import { PatientHttpService } from '../patient/patient-http.service';
import { SpecialiteHttpService } from './specialite-http.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {

  specialite:Specialite;
  
  constructor(private specialiteHttpService : SpecialiteHttpService) { }

  ngOnInit(): void {
  }

}
