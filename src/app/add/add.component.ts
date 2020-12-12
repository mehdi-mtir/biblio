import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector : "app-add",
  templateUrl : "./add.component.html",
  styleUrls : ['./add.component.css']
})
export class AddComponent{
  @Output() sendAddedBook = new EventEmitter<Book>();


  /*createBook(isban : HTMLInputElement, titre : HTMLInputElement, auteur : HTMLInputElement, date_publication : HTMLInputElement, prix : HTMLInputElement){
    let book = new Book(
      isban.value,
      titre.value,
      auteur.value,
      new Date(date_publication.value),
      prix.value
    );

    isban.value = "";
    titre.value = "";
    auteur.value = "";
    date_publication.value = "";
    prix.value = "";

    //Envoyer au parent
    this.sendAddedBook.emit(book);
  }*/

  createBook(f : NgForm){
    console.log(f);
    const formValues = f.value;
    typeof(formValues);
    let book = new Book(
      formValues.isban,
      formValues.title,
      formValues.auteur,
      new Date(formValues.date_publication),
      formValues.prix
    );

    f.reset();
    this.sendAddedBook.emit(book);

  }
}
