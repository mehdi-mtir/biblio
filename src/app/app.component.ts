import { Component, OnInit } from '@angular/core';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books : Book[];
  action : string;
  activeBook : number;

  saveBooks(){
    localStorage.setItem("savedBooks", JSON.stringify(this.books));
  }

  addBook(book : Book){
    this.books.push(book);
    this.saveBooks();
    console.log(this.books);
  }

  editBook(book : Book){
    this.books[this.activeBook] = book;
    this.saveBooks();
  }

  showEdit(indice : number){
    //Envoyer l'objet à modifier au composant fils (app-edit)
    this.activeBook = indice;
    //afficher le formulaire d'edit
    this.setAction('edit');
  }

  setAction(action : string){
    this.action = action;
  }

  deleteBook(indice : number){
    if(confirm("Êtes-vous sûre de vouloir supprimer le livre : " + this.books[indice].title)){
      this.books.splice(indice, 1);
    }
    this.saveBooks();
  }


  ngOnInit(): void {
    if(localStorage.getItem("savedBooks")){
      this.books = JSON.parse(localStorage.getItem("savedBooks"));
      console.log(this.books);
    }
    else{
      this.books = [];
    }

    this.action = "";
  }
}
