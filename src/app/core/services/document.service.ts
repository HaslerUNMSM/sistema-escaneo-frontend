import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private urlEndPoint: string = '/api/';

  constructor(private _http: HttpClient) { }

  getDocumentos(token): Observable<any>{
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.urlEndPoint +'documentos', {headers: headers});
  }

  getDocumentoById(token, id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(this.urlEndPoint +`documentos/${id}`, {headers: headers});
  }

  updateDocumento(token, id: number, documento: Documento): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.put(this.urlEndPoint +`documentos/${id}`, {headers: headers});
  }

  deleteDocumentoById(token, id: number): Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.delete(this.urlEndPoint +`documentos/${id}`, {headers: headers});
  }

}