import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  
  readonly rootUrl = 'http://qrcode.asktech-development.website/api/';
  // readonly rootUrl = 'http://localhost:8000/api/';
  // readonly rootUrl = 'http://e0556859.ngrok.io/api/';
  constructor(private http: HttpClient) { }

  registerUser(user) {
    let reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'user', user, {headers: reqHeader});
  }

  user(user) {
    let reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + 'mobilelogin', user, {headers: reqHeader});
  }

  post(method, data) {
    return this.http.post(this.rootUrl + method, data);
  }

  get(method, param) {
    return this.http.get(this.rootUrl + method + '/' + param);
  }
}
