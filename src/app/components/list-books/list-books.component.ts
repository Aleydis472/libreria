import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../models/bookmodels';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Book[] = [];

 
  //select: boolean = false
  check: any
  //element: any
  //ordenar: any
  //@ViewChild('content') content?: ElementRef;
  constructor(private bookService: BookService, private toastr: ToastrService, private router:Router, private aRoute: ActivatedRoute, private modalService: NgbModal) {
    //this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  pageActual: number = 1;
  ngOnInit(): void {
    this.getBooks();
    //this.getBook();

  }

  getBooks() {
    this.bookService.getBooks().subscribe(data => {
      this.books = [];
      data.forEach((element: any) => {
        this.books.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.books)
    })
  }

  /*getBook() {
    if (this.id !== null) {
      this.bookService.getBook(this.id).subscribe(data => {
        this.Book = data.payload.data();
        this.Book.id = data.payload.id
        
        console.log(this.Book, 'aver');
      })
    }
  }*/

  getBooksPlaneta() {
    this.check = document.getElementById("check3");
    if (this.check.checked) {
      this.bookService.getByEditorial('Planeta').subscribe(data => {
        this.books = [];
        data.forEach((element: any) => {
          this.books.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.books, 'editoriales')
      })
    }
  }

  getBooksSatori() {
    this.check = document.getElementById("check2");
    if (this.check.checked) {
      this.bookService.getByEditorial('Satori').subscribe(data => {
        this.books = [];
        data.forEach((element: any) => {
          this.books.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.books, 'editoriales')
      })
    }
  }

  getBooksAcantilado() {
    this.check = document.getElementById("check1");
    if (this.check.checked) {
      this.bookService.getByEditorial('Acantilado').subscribe(data => {
        this.books = [];
        data.forEach((element: any) => {
          this.books.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.books, 'editoriales')
      })
    }
  }

  deletedBook(id: string) {
    if (confirm("Esta seguro de eliminar este libro?")) {
      this.bookService.deleteBook(id).then(() => {
        this.toastr.error('El Libro fue eliminado con exito!', 'Registro Eliminado');
      }).catch(error => {
        console.log(error);
      });
    }
  }

  /*abrirModal(content: any) { 
    this.router.navigate([`/list-books/${content}` ]);
    this.modalService.open(content);
  }*/


}
