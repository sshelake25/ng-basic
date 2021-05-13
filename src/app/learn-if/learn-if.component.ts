import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-if',
  templateUrl: './learn-if.component.html',
  styleUrls: ['./learn-if.component.scss']
})
export class LearnIfComponent implements OnInit {

  birthDay = new Date(1988, 3, 15);

  amount = 500;
  price = 600;
  people = [
    { name: 'joha', age: 20, country: 'ind' },
    { name: 'foo', age: 35, country: 'uk' },
    { name: 'bar', age: 40, country: 'us' },
    { name: 'harry', age: 25, country: 'can' },
    { name: 'kally', age: 35, country: 'ind' }
  ];

  isAgeLess = false;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(country: any) {
    // switch (country) {
    //   case 'uk':
    //     return 'green';
    //   case 'us':
    //     return 'blue';
    //   case 'ind':
    //     return 'red';
    //   default: return 'grey';
    // }

    return 'yellow';

  }


}
