import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { JwtDTO } from 'src/app/models/jwt-dto';
import { URL_SERVICIOS } from '../settings/url';
import { Observable, Subject } from 'rxjs';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  httpHeaders: HttpHeaders;
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private http: HttpClient) { }

  createObject(createObj: NuevoUsuario, url:string): Observable<NuevoUsuario[]> {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      // url += '?token=' + this.token;
      return this.http.post<NuevoUsuario[]>(`${URL_SERVICIOS}/${url}`, createObj, {headers: this.httpHeaders})
          .pipe(
          tap(() =>  {
            this._refreshNeeded$.next();
          })
          );
    }

  createObject2(createObj: any, url:string): Observable<any> {

    this.httpHeaders = new HttpHeaders({'Accept': 'application/json'});

    // 'http://localhost:8080/api/product/form'
    const req = new HttpRequest('POST',`${URL_SERVICIOS}/${url}` ,createObj,  {
      headers: this.httpHeaders,
      //  params: formdata,
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req).pipe(
      tap(() => {
        console.log('RES');

        console.log('CRUD REFRESHED NEED');

          this._refreshNeeded$.next();
      } ))
  }

  public postObject(createObj: any, url:string): Observable<JwtDTO> {
    return this.http.post<JwtDTO>(`${URL_SERVICIOS}/${url}`, createObj)
    .pipe( tap(() => {
      this._refreshNeeded$.next;
    }));
  }

  public updateObject(createObj: any, url:string): Observable<JwtDTO> {
    return this.http.put<JwtDTO>(`${URL_SERVICIOS}/${url}`, createObj);
  }

  public getObjectByName(username: any, url:string): Observable<NuevoUsuario> {
    return this.http.get<NuevoUsuario>(`${URL_SERVICIOS}/${url}/${username}`,{headers: this.httpHeaders});
  }

  getAllObjects(url:string): Observable<NuevoUsuario[]> {
    console.log('GET ALL ACCOUNTS TYPE');
     this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      return this.http.get<NuevoUsuario[]>(`${URL_SERVICIOS}/${url}`, {headers: this.httpHeaders});


    }
}
