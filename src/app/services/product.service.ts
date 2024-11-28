import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Product } from '../Models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Baba',
      description: 'Labubu',
      price: 1000.99,
      image: 'assets/baba.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 2,
      name: 'Dada',
      description: 'Labubu',
      price: 1090,
      image: 'assets/dada.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 3,
      name: 'hehe',
      description: 'Labubu',
      price: 1090.99,
      image: 'assets/hehe.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 4,
      name: 'Ququ',
      description: 'Labubu',
      price: 1000.99,
      image: 'assets/ququ.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 5,
      name: 'Sisi',
      description: 'Labubu',
      price: 2400.69,
      image: 'assets/sisi.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Zizi',
      description: 'Labubu',
      price: 1590.79,
      image: 'assets/zizi.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'kittyfit',
      description: 'Labubu Outfit',
      price: 1990.29,
      image: 'assets/hellokittyoutfit.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Lovefit',
      description: 'Labubu Outfit',
      price: 1239.99,
      image: 'assets/lovefit.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 101',
      description: 'Labubu Outfit',
      price: 1267.99,
      image: 'assets/outfit1.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 102',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit2.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 103',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit3.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 104',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit4.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 105',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit5.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 106',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit6.jfif',
      category: 'Stuff Toy'
    },
    {
      id: 6,
      name: 'Outfit 107',
      description: 'Labubu Outfit',
      price: 1090.99,
      image: 'assets/outfit7.jfif',
      category: 'Stuff Toy'
    },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  addProduct(product: Product): Observable<Product> {
    this.products.push(product);
    return of(product);
  }
}