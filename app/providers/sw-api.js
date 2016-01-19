import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable({
  providers: [Http]
})
export class SWApi {
  constructor(http: Http) {
    this.baseUrl = 'https://swapi.co/api';
    this.http = http;
  }

  getPeople(){
    return new Promise(resolve => this.http.get(this.baseUrl+'/people').subscribe(res => resolve(res.json().results)));
  }
  getAll(urls){
    return Promise.all(urls.map(url => this.get(url)));
  }
  get(url){
    return new Promise(resolve => {
      this.http.get(url).subscribe(res => {
        resolve(res.json());
      });
    });
  }
}