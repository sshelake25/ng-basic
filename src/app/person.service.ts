import { Component, Injectable, NgModule } from '@angular/core';




// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class PersonService {

  constructor() { }

  getPersonDetaills() {
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

  getPersonImage(){
    return 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  }

}
