import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PdfFormRequest } from './pdf-form-request';

const jsonOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const blobOptions: any = {
  responseType: 'blob'
}

const url = 'http://localhost:8081';

@Injectable({providedIn: 'root'})
export class HttpService {
  constructor(private http: HttpClient) {}

  postFormRequest(request: PdfFormRequest) {
    console.log('request', request);
    return this.http.post(`${url}/api/generate/template`,request, blobOptions);
  }
}
