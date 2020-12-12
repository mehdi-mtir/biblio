export class Book {
  isban: string;
  title: string;
  auteur: string;
  date_publication: Date;
  prix: number;

  constructor(isban, title, auteur, date_pulication, prix){
    this.isban = isban;
    this.title = title;
    this.auteur = auteur;
    this.date_publication = date_pulication;
    this.prix = prix;
  }




}
