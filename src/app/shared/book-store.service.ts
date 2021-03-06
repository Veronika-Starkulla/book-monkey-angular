import { Injectable } from '@angular/core';
import { Book } from "./book";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.api}/book/${isbn}`);
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book//${isbn}`, {responseType: 'text'});
  }
}
