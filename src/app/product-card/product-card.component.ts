import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  Url: string = '';

  constructor(private perServ: PersonService) { }

  ngOnInit(): void {
    this.Url = this.perServ.getPersonImage();
  }

}
