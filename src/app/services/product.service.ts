import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderResponseType} from "../types/order-response.type";
import {OrderType} from "../types/order.type";

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`)
  }

  sendOrder(formData: OrderType ): Observable<OrderResponseType> {
    return this.http.post<OrderResponseType>('https://testologia.ru/order-tea', formData);
  }
}
