import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform-basic',
  templateUrl: './reactiveform-basic.component.html',
  styleUrls: ['./reactiveform-basic.component.scss']
})
export class ReactiveformBasicComponent implements OnInit {

  // dynamic select option for form
  language: string[] = [
    'English',
    'French',
    'German',
    'Hindi',
    'Marthi'
  ];
  // name = new FormControl('pooja');
  profileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(),
    language: new FormControl(),
    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zip: new FormControl(),
    })
  });

  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    console.log(this.profileForm);
  }
}
