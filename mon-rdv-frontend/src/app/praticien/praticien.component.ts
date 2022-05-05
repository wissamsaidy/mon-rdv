import { Component, OnInit } from '@angular/core';
import { PraticienHttpService } from './praticien-http.service';
import { Praticien } from 'src/model';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {
  public praticien : Praticien;

  constructor(private praticienHttpService: PraticienHttpService) { 
  }

  ngOnInit(): void {
  }

  list(): Array<Praticien>{
    return this.praticienHttpService.findAll();
  }
  action(){
    // this.praticien = new Praticien();
    // this.praticien.carteVitale = true;
    // this.praticien.cb = true;
    // this.praticien.cheque = true;
    // this.praticien.dureeCreneau = 2;
    // this.praticien.espece = true;
    // console.log(this.praticien);
    // this.praticienHttpService.save(this.praticien);
    this.praticienHttpService.findById(9).subscribe(resp => {this.praticien = resp});
    // this.praticienHttpService.save(this.praticien);
    // this.praticienHttpService.findById(3).subscribe(resp => this.praticien = resp);
  }

  reaction(){
    console.log(this.praticien.id);
    this.praticien.nom = "duduche2";
    this.praticienHttpService.save(this.praticien);
  }
  //(add, edit)->save
  //(delete)->delete
  //cancel
  // 

}
