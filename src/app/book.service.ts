import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BookService {
  books: any[] = [{ title: "livre1" }, { title: "livre2" }, { title: "livre3" }];
  constructor() {}

  getBook(id: number) {
    // console.log(id);
    // console.log(this.books[id]);
    // return this.books[id];
    return of(this.books[id]);
  }
}
