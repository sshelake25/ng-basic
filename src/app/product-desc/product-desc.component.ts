import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../admin/user.service';
import { PersonService } from '../person.service';

import { of, pipe } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';





@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
  public data: any;
  imageUrl: any;

  constructor(
    private _personService: PersonService,
    private _userSer: UserService
  ) { }

  ngOnInit(): void {
/// observale and oprators
    const nums = of(1, 2, 3, 4, 5);
    nums.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n),
      first()
    ).subscribe(x => console.log(x));




    // this.data = this._personService.getPersonDetaills();
    this.imageUrl = this._personService.getPersonImage();

    this._personService.getPersonDetailsFromApi()
      .subscribe((success) => console.log(success));


    let mydetails = this._personService.getPersonDetaills();

  }

}
