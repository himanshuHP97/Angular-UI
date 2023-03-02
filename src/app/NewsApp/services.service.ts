import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewAppService {

  api_key = '91d45cc8-8d22-4d9e-8f42-cee34e7a22af';
  constructor(private http: HttpClient) { }


  initSources() {
    return this.http.get('' + this.api_key);
  }

  initArticles() {
    return this.http.get('' + this.api_key);
  }

  getArticlesByID(source: String) {
    return this.http.get('' + source + '&apiKey=' + this.api_key);
  }
}
