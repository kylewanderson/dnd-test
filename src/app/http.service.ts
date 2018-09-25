import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PdfFormRequest } from './pdf-form-request';

const jsonOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true
};

const url = 'https://localhost:8443/pdfservice';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {}

  postFormRequest(request: PdfFormRequest) {
    console.log('request', request);
    return this.http.post(`${url}/api/form`,request,jsonOptions);
  }
}
