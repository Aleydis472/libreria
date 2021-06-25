import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Book } from '../components/models/bookmodels';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firestore: AngularFirestore) { }


  getBooks(): Observable<any> {
    return this.firestore.collection('books', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();
  }

  getBook(id: string): Observable<any> {
    return this.firestore.collection('books').doc(id).snapshotChanges();
  }

  addBook(product: Book) {
    return this.firestore.collection('books').add(product);
  }

  deleteBook(id: string): Promise<any> {
    return this.firestore.collection('books').doc(id).delete();
  } 

  getEditorial(){ 
    return this.firestore.collection('editorial').snapshotChanges(); 
  } 

 getTipoPasta(){ 
    return this.firestore.collection('pasta').snapshotChanges();
  }

  /*getPlaneta(){ 
    return this.firestore.collection('books', m => m.where("editorial", "==", "Planeta")).snapshotChanges();
  } 

  getAcantilado(){ 
    return this.firestore.collection('books', m => m.where("editorial", "==", "Acantilado")).snapshotChanges();
  }
  
  getSatori(){ 
    return this.firestore.collection('books', m => m.where("editorial", "==", "Satori")).snapshotChanges();
  }*/

  getByEditorial(editorial:any){ 
    return this.firestore.collection('books',  m => m.where("editorial", "==", editorial)).snapshotChanges();
  }

}