import { Component, OnInit } from '@angular/core';
import { PraticienHttpService } from './praticien-http.service';
import { Praticien } from 'src/model';

@Component({
  selector: 'app-praticien',
  templateUrl: './praticien.component.html',
  styleUrls: ['./praticien.component.scss']
})
export class PraticienComponent implements OnInit {

  constructor(private praticienHttpService: PraticienHttpService) { }

  ngOnInit(): void {
  }

  list(): Array<Praticien>{
    return this.praticienHttpService.findAll();
  }

}
