import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ecard-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
   @Input() profile: any; // declration


  constructor() {
    console.log(`In constructor function`);
  }

  ngOnChanges() {
      // template liternal string
      console.log('inside on chnages')
    console.log(`ngOnChanges - data is ${this.profile}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - data is `);
  }
  ngDoCheck() {
    console.log("ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}


