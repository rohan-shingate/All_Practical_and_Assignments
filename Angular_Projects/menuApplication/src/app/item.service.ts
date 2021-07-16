import { Injectable } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-items';
import { Observable, of, Subject } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  private itemsUpdated = new Subject<Item[]>();
  private menuUrl = "http://localhost:3000/api/menu";                 // findAll Add
  private detail = "http://localhost:3000/api/detail";
    // private deleteUrl="http://localhost:3000/api/menu/:id";
    // private findOne="http://localhost:3000/api/menu/:id";
    // private updateeUrl="http://localhost:3000/api/menu/:id";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService,private router: Router) { }

  getItems(): Observable<Item[]> {
    //const items = of(ITEMS);
    //this.messageService.add('ItemService: fetched items');
    //return items;
    return this.http.get<Item[]>(this.menuUrl)
    .pipe(tap(_ => this.log('fetched items')),catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  getItemNo404<Data>(id: number): Observable<Item> {
    const url = `${this.menuUrl}/?id=${id}`;
    return this.http.get<Item[]>(url)
      .pipe(
        map(items => items[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} item id=${id}`);
        }),
        catchError(this.handleError<Item>(`getItem id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getItem(id:number): Observable<Item> {
   // const item = ITEMS.find(h => h.id === id)!;
   // this.messageService.add(`ItemService: fetched item id=${id}`);
   // return of(item);

   const url = `${this.detail}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.menuUrl, item, this.httpOptions).pipe(
      tap((newItem: Item) => this.log(`added item w/ id=${newItem.id}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }
  deleteItem(id: any): Observable<Item> {
    const url = `${this.menuUrl}/${id}`;
    return this.http.delete<Item>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted item id=${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty item array.
      return of([]);
    }
    return this.http.get<Item[]>(`${this.menuUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found items matching "${term}"`) :
         this.log(`no items matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItems', []))
    );
  }

  updateItem(item: Item ): Observable<any> {
    const url=`${this.detail}/${item.id}`;
    return this.http.put(url, item).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }


  private log(message: string) {
    this.messageService.add(`ItemService: ${message}`);
  }

}


