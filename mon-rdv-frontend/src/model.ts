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


