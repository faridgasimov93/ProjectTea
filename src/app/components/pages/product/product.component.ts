import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType ;

  constructor(private cartService: CartService,private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      price: 0
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/']);
            }
          })

      }
    });
  }

  addToCart(title:string):void {
    this.cartService.product = title;
    this.router.navigate(['/order']);
  }

}
