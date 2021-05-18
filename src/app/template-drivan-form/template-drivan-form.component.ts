import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drivan-form',
  templateUrl: './template-drivan-form.component.html',
  styleUrls: ['./template-drivan-form.component.scss']
})
export class TemplateDrivanFormComponent implements OnInit {
  langs = [
    'hindi',
    'eng',
    'french'
  ];

  public contatcForm = {
    fname: 'Shravani',
    lname: 'Iyer',
    contatNo: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.contatcForm.email)
  }

  SubmitForm() {
    console.log(this.contatcForm)
  }

}
