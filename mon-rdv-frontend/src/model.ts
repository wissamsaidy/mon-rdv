////////////////////////////////////////////Priscille









//////////////////////////////////////Quentin










////////////////////////////////Wissam
export class UserDTO {

    public login: string;
    public password: string;
    public utilisateur: Utilisateur;
    public type: string;

  constructor(
    login?: string, 
    password?: string, 
    utilisateur?: Utilisateur, 
    type?: string
) {
    this.login = login
    this.password = password
    this.utilisateur = utilisateur
    this.type = type
  }

}

/////////////////////////////////////////Lloyd
export class Utilisateur{
    constructor(
        public id?:number,
        public version?: number,
        public nom?: string,
        public prenom?:string,
        public email?:string,
        public motDePasse?:string
    ){

    }
}

export class Praticien extends Utilisateur{
    constructor(
        id?:number,
        version?: number,
        nom?: string,
        prenom?:string,
        email?:string,
        motDePasse?:string,
        public matricule?:string,
        public telephone?:string,
        public photo?:string,
        public convention?:string,
        public carteVitale?:boolean,
        public cb?: boolean,
        public cheque?:boolean,
        public espece?:boolean,
        public dureeCreneau?:number
    ){
        super(id, version, nom, prenom, email, motDePasse);
    }
}

export class Patient extends Utilisateur{
    constructor(
        id?:number,
        version?: number,
        nom?: string,
        prenom?:string,
        email?:string,
        motDePasse?:string,
        public dateNaissance?: string,
        public numeroSS?:string,
        public telephone?:string
    ){
        super(id, version, nom, prenom, email, motDePasse);
    }
}

export class Specialite{
    constructor(
        public id?: number,
        public description?: string,
        public nom?: string
    ){
    }
}

export class Lieu{
    constructor(
        public id?:number,
        public code_postal?:string,
        public rue?: string,
        public ville?:string,
        public virtuel?: boolean
    ){

    }
}
export class Consultation{
    constructor(
        public id?:number,
        public nb_creneau?: number,
        public statut?: string,
        public motif?: Motif,
        public patient?: Patient,
        public praticient?:Praticien
    ){

    }
}
export class Motif{
    constructor(
        public id?:number,
        public libelle?:string,
        public nb_creneau?:number,
        public praticient?:Praticien
    ){

    }
}
export class Creneau{
    constructor(
        public id?:number,
        public date_creneau?: string,
        public dispo?:boolean,
        public duree?: number,
        public heure_creneau?: string,
        public consultation?: Consultation,
        public lieu?: Lieu,
        public praticien?: Praticien
    ){}
}






