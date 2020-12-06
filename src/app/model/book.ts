export class Book {
  private isban: string;
  private title: string;
  private auteur: string;
  private date_publication: Date;
  private prix: number;

  constructor(isban, title, auteur, date_pulication, prix){
    this.isban = isban;
    this.title = title;
    this.auteur = auteur;
    this.date_publication = date_pulication;
    this.prix = prix;
  }




}
