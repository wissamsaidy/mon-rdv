import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDTO, Utilisateur } from 'src/model';
import { AuthentificationService } from './authentification.service';

@Component({
  selector: 'authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  user: UserDTO = new UserDTO();
  loading = false;
  authUser: Utilisateur;

  id:string;
  mdp:string;

  constructor(private authentificationService : AuthentificationService, private route: ActivatedRoute) { 
       
  }

  
  ngOnInit(): void { 
  }

  login() {
    this.loading = true;
    this.authUser = this.authentificationService.login(this.user.login, this.user.password);
    }
  }