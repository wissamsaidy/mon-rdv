import { Component, OnInit } from '@angular/core';
import { Lieu } from 'src/model';
import { LieuHttpService } from './lieu-http.service';

@Component({
  selector: 'app-lieu',
  templateUrl: './lieu.component.html',
  styleUrls: ['./lieu.component.scss']
})
export class LieuComponent implements OnInit {
  lieu : Lieu;
  constructor(private lieuHttpService: LieuHttpService) { }

  ngOnInit(): void {
  }

}
