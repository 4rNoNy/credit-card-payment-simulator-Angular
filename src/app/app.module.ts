import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBrazil } from 'ng-brazil'
import { TextMaskModule } from 'angular2-text-mask';
import { BrMaskerModule } from 'br-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { TimeComponent } from './componentes/time/time.component';
import { FooterComponent } from './componentes/footer/footer.component';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ModalComponent,
    TimeComponent,
    FooterComponent,

  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    MatDialogModule,
    BrMaskerModule,
   









  ],
  providers: [HttpClient, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
