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
  public title = 'basic-angular';

   constructor() {
    // this.title = first;
   }

}


// let apc1 = new AppComponent();

// let apc2 = new AppComponent();

// let apc3 = new AppComponent();