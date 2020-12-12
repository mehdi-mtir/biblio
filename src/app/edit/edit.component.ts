import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input('book') activeBook;
  @Output() sendBook = new EventEmitter<Book>();
  editFormGroup : FormGroup;

  constructor() {


  }

  prepareToEditBook(){
    const formValues = this.editFormGroup.value;
    console.log(this.editFormGroup);
    let book = new Book(
      formValues.isban,
      formValues.title,
      formValues.auteur,
      new Date(formValues.date_publication),
      formValues.prix
    );

    this.editFormGroup.reset();

    this.sendBook.emit(book);
  }

 /* prepareToEditBook(isban : HTMLInputElement, titre : HTMLInputElement, auteur : HTMLInputElement, date_publication : HTMLInputElement, prix : HTMLInputElement){
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
    this.sendBook.emit(book);
  }*/

  ngOnInit(): void {
    this.editFormGroup = new FormGroup({
      isban : new FormControl(this.activeBook.isban, [Validators.required, Validators.pattern('^[A-Z][0-9]+')]),
      title : new FormControl(this.activeBook.title, Validators.required),
      auteur : new FormControl(this.activeBook.auteur, []),
      date_publication : new FormControl(this.activeBook.date_publication, []),
      prix : new FormControl(this.activeBook.prix, [Validators.min(10)])
    });




  }

}
