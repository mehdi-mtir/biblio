import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input('book') activeBook;
  @Output() sendBook = new EventEmitter<Book>();

  constructor() { }

  prepareToEditBook(isban : HTMLInputElement, titre : HTMLInputElement, auteur : HTMLInputElement, date_publication : HTMLInputElement, prix : HTMLInputElement){
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
    this.sendBook.emit(book);
  }

  ngOnInit(): void {
  }

}
