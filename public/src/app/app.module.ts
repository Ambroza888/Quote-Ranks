import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditauthorComponent } from './editauthor/editauthor.component';
import { QuoteComponent } from './quote/quote.component';
import { CreateQComponent } from './create-q/create-q.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    EditauthorComponent,
    QuoteComponent,
    CreateQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
