import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { firstValueFrom } from 'rxjs';

type ApiResponse = { page: number; per_page: number, total: number, total_pages:number, 
results:Product[]}


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpClient = inject(HttpClient);

  getAllProducts(): Promise<ApiResponse>{
    return firstValueFrom(this.httpClient.get<ApiResponse>('https://peticiones.online/api/products'))
  }

  constructor() { }
}
