import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { SubmitLinkComponent } from '../../../BitlyCloneAssignment/src/app/submit-link/submit-link.component';


const BASE_URL = 'https://safe-tundra-95217.herokuapp.com/postUrl';
const localUrl = 'https://safe-tundra-95217.herokuapp.com/links';


@Injectable({
  providedIn: 'root'
})
export class UrlDetailsService {

  constructor(private http: HttpClient) { }

  urlInfo(long) {
    const params = {
      longUrl: long
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(`${BASE_URL}`, params, httpOptions );

  }

  shortUrl(id) {
    return this.http.get(`${localUrl}/${id}`);
  }

}
