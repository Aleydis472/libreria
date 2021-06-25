import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { ModalBookComponent } from './components/modal-book/modal-book.component';

const routes: Routes = [
  {path: '', redirectTo:'list-books', pathMatch:'full'}, 
  {path: 'list-books', component:ListBooksComponent},
  {path: 'create-book', component:CreateBookComponent},
  {path: 'detail-book/:id', component:DetailBookComponent},
  {path: 'modal-book/:id', component:ModalBookComponent},
  {path: '**', redirectTo:'list-books', pathMatch:'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
