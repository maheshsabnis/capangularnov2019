import {Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ProductData } from './../models/app.product.model';
@Injectable({
  providedIn:'root'
})
export class HttpService { 
  url: string;
  // inject HttpClient in Constructor
  constructor(private http: HttpClient) {
    this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
  }
   
  getData(): Observable<ProductData[]> { 
    let res: Observable<ProductData[]> = null;
    res = this.http.get<ProductData[]>(this.url);
    return res;
  }
  postData(prd: ProductData): Observable<ProductData> { 
    let res: Observable<ProductData> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    res = this.http.post<ProductData>(this.url, prd, options);
    return res;
  }

  putData(id: number, prd: ProductData): Observable<ProductData> { 
    let res: Observable<ProductData> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    res = this.http.put<ProductData>(`${this.url}/${id}`, prd, options);
    return res;
  }

  deleteData(id: number): Observable<boolean> { 
    let res: Observable<boolean> = null;
    res = this.http.delete<boolean>(`${this.url}/${id}`);
    return res;
  }
}
