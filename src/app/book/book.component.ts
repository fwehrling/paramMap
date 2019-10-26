import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { BookService } from "../book.service";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  id: string;
  book: Observable<any>;
  // book: any;

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //// PREMIERE METHODE ///////
    // const id = this.route.snapshot.paramMap.get("id");
    // this.book = this.bookService.getBook(+id);

    //// DEUXIEME METHODE /////
    // this.route.paramMap
    //   .pipe(
    //     map((params: ParamMap) => params.get("id")),
    //     switchMap((id: string) => this.bookService.getBook(+id))
    //   )
    //   .subscribe(book => (this.book = book));

    //// TROISIEME METHODE /////
    this.book = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get("id")),
      switchMap((id: string) => this.bookService.getBook(+id))
    );
  }

  previous() {
    const id = this.route.snapshot.paramMap.get("id");
    this.router.navigate(["/books", +id - 1]);
  }

  next() {
    const id = this.route.snapshot.paramMap.get("id");
    this.router.navigate(["/books", +id + 1]);
  }
}
