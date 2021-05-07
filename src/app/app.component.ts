import { Component } from '@angular/core';
/**
 * dasdsad
 * sdsadsad
 */
@Component(
  {
    selector: 'myroot-compunent', // <app-root></app-root>
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'] // [1,2,3,4]
  }
  )
export class AppComponent {
  public title = 'We are sending input data from app.compounet to admin compout';
 
  displayData: any;
   
   constructor() {
    // this.title = first;
   }

   getPersonDetails(valOj:any) {
     this.displayData = valOj;
      console.log(valOj);
   }

}


// let apc1 = new AppComponent();

// let apc2 = new AppComponent();

// let apc3 = new AppComponent();