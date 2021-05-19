import { HttpClient } from '@angular/common/http';
import { Component, Injectable, NgModule } from '@angular/core';




// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PersonService {

  constructor(private http: HttpClient) { }

  getPersonDetailsFromApi() {
    let configUrl = 'assets/person.json';
    return this.http.get(configUrl);
  }

  getPersonDetaills() {

    //this.http.post('https://flickar.com/api/updateuseer',{user:'1'})

    return {
      name: 'abcd',
      adress: 'BAN',
      phoneNo: 90909090909
    }
  }

  getPersonAge() {
    return 50;
  }

  getPersonAdreess() {
    return 'BAN';
  }

  getPersonImage() {
    return 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  }

}
