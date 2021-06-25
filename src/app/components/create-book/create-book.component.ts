import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { Book } from '../models/bookmodels';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createBook: FormGroup; 
  book = {} as Book
  loading = false;
  submitted = false;
  editoriales: any;
  defaultEditorial = 'Acantilado'; 
  tipoPastas: any; 
  defaultPasta = 'Dura'; 
  app:any = {}
  
  constructor(private fb: FormBuilder, private bookService:BookService, private router:Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {

    this.createBook = this.fb.group({
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      editorial: ['', Validators.required],
      pasta: ['', Validators.required],
      nPaginas: ['', Validators.required],
    })
    this.getEditorial();
    this.getTipoPasta(); 

}


   

  ngOnInit(): void {
  } 

  addBook(){ 
    this.submitted = true;
    if(this.createBook.invalid){
      return;
    }

    this.book = this.createBook.value 
    console.log(this.book);
    this.loading = true

    this.bookService.addBook(this.book).then(() => {
      this.toastr.success('El producto se registro con exito.', 'Producto registrado');
      this.router.navigate(['/list-books']);
    }).catch(error => {
      this.toastr.error('Ha ocurrido un error!', 'ERROR');
    })

  } 

  getEditorial(){ 
    this.bookService.getEditorial().subscribe(data =>{
      this.editoriales = []; 
      data.forEach((element:any) => {
        this.editoriales.push({ 
          id:element.payload.doc.id, 
          ...element.payload.doc.data()
        }) 
        this.createBook.controls['editorial'].setValue(this.defaultEditorial,
          { onlySelf: true });
        this.createBook.get('editorial');
      });
      console.log(this.editoriales)
    })
  } 

  getTipoPasta(){ 
    this.bookService.getTipoPasta().subscribe(data => { 
      this.tipoPastas = []; 
      data.forEach((element:any) => {
        this.tipoPastas.push({ 
          id:element.payload.doc.id, 
          ...element.payload.doc.data()
        }) 
        this.createBook.controls['pasta'].setValue(this.defaultPasta,
          { onlySelf: true });
        this.createBook.get('pasta');
      });
      console.log(this.tipoPastas)
    })
  }
  
}
