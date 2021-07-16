import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:2500';


  constructor(private http:HttpClient) { }

all():Observable<Product[]>{
  return this.http.get<Product[]>(`${this.uri}/api/products`)
}

create(newProduct:any): Observable<Product[]>{
  return this.http.post<Product[]>(`${this.uri}/api/products/create`,newProduct)
}
get(id:number): Observable<Product>{
return this.http.get<Product>(`${this.uri}/api/products/id/${id}`)
}
update(id:number, data:any): Observable<Product>{
return this.http.put<Product>(`${this.uri}/api/products/update/${id}`,data)
}
delete(id:number): Observable<void>{
return this.http.delete<void>(`${this.uri}/api/products/delete/${id}`)

}

}

