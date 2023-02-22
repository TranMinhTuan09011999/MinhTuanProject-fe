import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentDialogComponent} from "../components/content-dialog/content-dialog.component";
import {NumberInputComponent} from "../components/number-input/number-input.component";
import {NullHyphenPipe} from "./pipe/null-hyphen.pipe";
import {AddCommaPipe} from "./pipe/add-comma-pipe";
import {FormsModule} from "@angular/forms";
import {ModalComponent} from "../components/modal/modal.component";

@NgModule({
  declarations: [
    ContentDialogComponent,
    NullHyphenPipe,
    NumberInputComponent,
    AddCommaPipe,
    ModalComponent
  ],
  exports: [
    ContentDialogComponent,
    NumberInputComponent, // If NumberInputComponent is used in test module, we should declare it in exports
    ModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
