import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//modulos 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';



//componentes
import { environment } from 'src/environments/environment';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalBookComponent } from './components/modal-book/modal-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdenarPipe } from './pipe/ordenar.pipe';
import { DetailBookComponent } from './components/detail-book/detail-book.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBooksComponent,
    NavbarComponent,
    ModalBookComponent,
    OrdenarPipe,
    DetailBookComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    FormsModule, NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
