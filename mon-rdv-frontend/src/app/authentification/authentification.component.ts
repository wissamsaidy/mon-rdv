import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/model';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  user: UserDTO;
  loading = false;

  constructor(private authentificationService : AuthentificationService) { }

  
  ngOnInit(): void { 
  }

  login() {
    this.loading = true;
    this.authentificationService.login(this.user.login, this.user.password)
    }
  }