import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../settings/url';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  httpHeaders: HttpHeaders;



  constructor(private http: HttpClient) { }

  getAllAccounts(url: string): Observable<any[]> {
    console.log('GET ALL ACCOUNTS');

    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(`${URL_SERVICIOS}/${url}`, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          // this._refreshNeeded$.next;
        })
      )

  }

  connectAdminPro20(url: string): Observable<any[]> {
    console.log('GET ALL ACCOUNTS');

    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(`${URL_SERVICIOS}/${url}`, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          // this._refreshNeeded$.next;
        })
      )

  }




  getInvoicePageableByPageNo(url: string, pageSize: any, pageNo: any, sortBy: any, orderBy: boolean): Observable<any[]> {
    console.log('GET INVOICE PAGEABLE');
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(`${URL_SERVICIOS}${url}/?pageSize=${pageSize}&pageNo=${pageNo}&sortBy=${sortBy}&orderBy=${orderBy}`, { headers: this.httpHeaders })


  }


  getInvoiceByQuery(urlquery: string, strQuery: string): Observable<any[]> {
    console.log('GET ALL ACCOUNTS TYPE');
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(`${URL_SERVICIOS}${urlquery}?${strQuery}`, { headers: this.httpHeaders })

  }


  getAllProducts(url: string): Observable<any[]> {
    console.log('GET ALL ACCOUNTS');

    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(URL_SERVICIOS + url, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          // this._refreshNeeded$.next;
        })
      )

  }


  getAllAdmins(url: string): Observable<any[]> {
    console.log('GET ALL ACCOUNTS');

    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any[]>(URL_SERVICIOS + url, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          // this._refreshNeeded$.next;
        })
      )

  }



}
