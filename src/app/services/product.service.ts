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
      name: 'Faerie Fire',
      description: 'The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.',
      price: 65,
      image: 'assets/Faerie Fire.jfif',
      category: 'Item'
    },
    {
      id: 2,
      name: 'Enchanted Mango',
      description: 'The bittersweet flavors of Jidi Isle are irresistible to amphibians.',
      price: 65,
      image: 'assets/Enchanted Mango.jfif',
      category: 'Item'
    },
    {
      id: 3,
      name: 'Smoke of Deceit',
      description: 'The charlatan wizard Myrddins only true contribution to the arcane arts.',
      price: 50,
      image: 'assets/Smoke of Deceit .jfif',
      category: 'Item'
    },
    {
      id: 4,
      name: 'Healing Salve',
      description: 'A magical salve that can quickly mend even the deepest of wounds.',
      price: 100,
      image: 'assets/Healing Salve.jfif',
      category: 'Item'
    },
    {
      id: 5,
      name: 'Clarity',
      description: 'Clear water that enhances the ability to meditate.',
      price: 50,
      image: 'assets/clarity .jfif',
      category: 'Item'
    },
    {
      id: 6,
      name: 'Blood Grenade',
      description: 'Throws a grenade at the target area. Enemies in the area will take 50 damage on impact, be slowed by 15% and take 15 damage per second.',
      price: 50,
      image: 'assets/Blood Grenade.jfif',
      category: 'Item'
    },
    {
      id: 7,
      name: 'Observer Wards',
      description: 'A form of half-sentient plant, often cultivated by apprentice wizards.',
      price: 50,
      image: 'assets/observer wards.jfif',
      category: 'Item'
    },
    {
      id: 8,
      name: 'Dust of Appearance',
      description: 'One may hide visage, but never volume.',
      price: 80,
      image: 'assets/Dust of Appearance.jfif',
      category: 'Item'
    },
    {
      id: 9,
      name: 'Iron Branch',
      description: 'A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.',
      price: 50,
      image: 'assets/Iron Branch.jfif',
      category: 'Item'
    },
    {
      id: 10,
      name: 'Tango',
      description: 'Forage to survive on the battlefield.',
      price: 90,
      image: 'assets/tango.jfif',
      category: 'Item'
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