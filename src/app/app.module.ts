import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BooksComponent } from "./books/books.component";
import { HeaderComponent } from "./header/header.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "books", component: BooksComponent },
  { path: "books/:id", component: BookComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, BooksComponent, BookComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
