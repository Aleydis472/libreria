import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  Book: any
  id: string | null;
  
  today= new Date();
  jstoday = '';
  constructor(private bookService: BookService, private aRoute: ActivatedRoute) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', 'TT');
    
   }

  ngOnInit(): void { 
    this.getBook();
  }
 

  getBook() {
    if (this.id !== null) {
      this.bookService.getBook(this.id).subscribe(data => {
        this.Book = data.payload.data();
        this.Book.id = data.payload.id
        
        console.log(this.Book, 'aver');
      })
    }
  }
}
