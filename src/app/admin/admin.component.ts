import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ecard-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  @Input() profile: any; // declration
  @Output() personDetails = new EventEmitter<object>();

  constructor() {
    console.log(`In constructor function`);
  }

  ngOnInit() {

    this.personDetails.emit({ name: 'John', age: 12 });


    console.log(`ngOnInit  - data is `);
  }



  // ngDoCheck() {
  //   console.log("ngDoCheck")
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit");
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked");
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit");
  // }
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked");
  // }
  // ngOnDestroy() {
  //   console.log("ngOnDestroy");
  // }

}


