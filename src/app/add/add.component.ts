import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector : "app-add",
  templateUrl : "./add.component.html"
})
export class AddComponent{
  @Output() sendAddedBook = new EventEmitter<Book>();


  createBook(isban : HTMLInputElement, titre : HTMLInputElement, auteur : HTMLInputElement, date_publication : HTMLInputElement, prix : HTMLInputElement){
    let book = new Book(
      isban.value,
      titre.value,
      auteur.value,
      date_publication.value,
      prix.value
    );

    isban.value = "";
    titre.value = "";
    auteur.value = "";
    date_publication.value = "";
    prix.value = "";

    //Envoyer au parent
    this.sendAddedBook.emit(book);
  }
}
