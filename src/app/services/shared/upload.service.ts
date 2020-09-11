import { Injectable } from '@angular/core';
import {  HttpEvent, HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { URL_SERVICIOS } from '../settings/url';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  httpHeaders: HttpHeaders;



  constructor(private http: HttpClient) { }




  pushFileToStorage(file: File, url:any): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    this.httpHeaders = new HttpHeaders({ Accept: "application/json" });
    formdata.append("file", file);
    console.log("FORM DATA ", formdata);
    console.log('TIPO ', url);


    const req = new HttpRequest(
      "POST",
      `${URL_SERVICIOS}/` + url ,
      formdata,
      {
        headers: this.httpHeaders,
        reportProgress: true,
        responseType: "text"
      }
    );
    return this.http.request(req);
  }


  sendXmlInvoice(file: File, url:string): Observable<any> {
    const formdata: FormData = new FormData();
    this.httpHeaders = new HttpHeaders({'Accept': 'application/json'});
    formdata.append('file', file);
    console.log('FORM DATA ', formdata);

    const req = new HttpRequest('POST', `${URL_SERVICIOS}/`+ url, formdata,  {
      headers: this.httpHeaders,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req).pipe(
      tap(() => {
          this._refreshNeeded$.next();
      } ))
  }


  createUser(file: File, formdata:FormData): Observable<any> {
    // const formdata: FormData = new FormData();
    this.httpHeaders = new HttpHeaders({'Accept': 'application/json'});
    // formdata.append('file', file);
    // formdata.append("name", user.name);
    // formdata.append("lastName", user.lastName);
    // formdata.append("username", user.username);
    // formdata.append("password", user.password);
    // formdata.append("photoName", user.photoName);

    console.log('FORM DATA ', formdata);
    // 'http://localhost:8080/api/form'
    const req = new HttpRequest('POST',`${URL_SERVICIOS}/form`,formdata,  {
      headers: this.httpHeaders,
      //  params: formdata,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req).pipe(
      tap(() => {
          this._refreshNeeded$.next();
      } ))
  }


  createProduct(file: File, formdata:FormData): Observable<any> {

    this.httpHeaders = new HttpHeaders({'Accept': 'application/json'});

    // 'http://localhost:8080/api/product/form'
    const req = new HttpRequest('POST',`${URL_SERVICIOS}/product/form` ,formdata,  {
      headers: this.httpHeaders,
      //  params: formdata,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req).pipe(
      tap(() => {
          this._refreshNeeded$.next();
      } ))
  }

  updatePerfil(formdata:FormData): Observable<any> {

    this.httpHeaders = new HttpHeaders({'Accept': 'application/json'});
    // 'http://localhost:8080/api/usuarios/update-profile'

    const req = new HttpRequest('PUT',`${URL_SERVICIOS}/usuarios/update-profile`,formdata,  {
      headers: this.httpHeaders,
      //  params: formdata,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req).pipe(
      tap(() => {
          this._refreshNeeded$.next();
      } ))
  }






}
