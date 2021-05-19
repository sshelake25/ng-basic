import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../admin/user.service';
import { PersonService } from '../person.service';

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
    this.data = this._personService.getPersonDetaills();
    this.imageUrl = this._personService.getPersonImage();


    this._personService.getPersonDetailsFromApi()
      .subscribe(
        (success) => {
          console.log(success)
        },
        (error) => {
          console.log(error)
        },
        () => console.log("observable complete")
      );

  }

}
