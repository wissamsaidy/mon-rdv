////////////////////////////////////////////Priscille









//////////////////////////////////////Quentin










////////////////////////////////Wissam











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


