import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ui1',
  templateUrl: './ui1.component.html',
  styleUrls: ['./ui1.component.css']
})
export class Ui1Component implements OnInit {

  public userList = [
      {
        id: 1,
        name: "Minh Tuan",
        age: 23,
        DOB: "09-01-1999",
        phone: "0377730290",
        address: "Ho Chi Minh"
      },
      {
        id: 2,
        name: "Minh Tien",
        age: 22,
        DOB: "15-07-2000",
        phone: "0377730290",
        address: "Ho Chi Minh"
      },
      {
        id: 3,
        name: "Minh Tai",
        age: 23,
        DOB: "09-01-1999",
        phone: "0377730290",
        address: "Ho Chi Minh"
      },
      {
        id: 4,
        name: "Minh Nguyen",
        age: 23,
        DOB: "09-01-1999",
        phone: "0377730290",
        address: "Ho Chi Minh"
      },
      {
        id: 5,
        name: "Minh Tu",
        age: 23,
        DOB: "09-01-1999",
        phone: "0377730290",
        address: "Ho Chi Minh"
      }
    ]

  public filersChecked: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  checkAll = () => {
    if (this.filersChecked.length > 0 && this.filersChecked.length === this.userList.length) {
      return true;
    } else {
      return false;
    }
  }

  onCheckAll = (event: any) => {
    this.filersChecked = [];
    this.userList.forEach((value, index) => {
      $(`#cb${index}`).prop('checked', event.target.checked);
      if (event.target.checked) {
        this.filersChecked.push(value);
      }
    });
    console.log(this.filersChecked);
  }

  onChange = (item: any, event: any) => {
    if (event.target.checked) {
      this.filersChecked.push(item);
    } else {
      this.filersChecked = this.filersChecked.filter(ite =>
        ite !== item && ite.id !== item.id);
    }

    if (this.filersChecked.length > 0 && this.filersChecked.length === this.userList.length) {
      $(`#cbAll`).prop('checked', true);
    } else {
      $(`#cbAll`).prop('checked', false);
    }
  }
}
