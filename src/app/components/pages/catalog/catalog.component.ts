import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductType[] = [];

  constructor(private http: HttpClient,private cartService: CartService,private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
    )
  }

  Details(id: number):void {
    this.router.navigate(['/product',id]);
  }

}
