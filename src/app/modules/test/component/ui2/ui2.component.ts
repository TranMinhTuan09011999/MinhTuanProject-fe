import { Component, OnInit } from '@angular/core';
import {ContentDialogService} from "../../../../components/content-dialog/content-dialog.service";

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.css']
})
export class Ui2Component implements OnInit {

  public modalId = 'modalId';
  public header = 'header';

  constructor(private dialogService: ContentDialogService) { }

  ngOnInit(): void {
  }

  openModal = () => {
    this.dialogService.open(this.modalId);
  }

}
