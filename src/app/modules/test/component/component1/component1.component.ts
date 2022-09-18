import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SearchCondition} from "../model/search-condition";
import {ObjectUtil} from "../../../../util/object-util";
import {ScreenInfo} from "../../../../models/screen-info";
import {RouterConstant} from "../../../../constant/router-constant";
import {ScreenService} from "../../../../services/screen.service";

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public searchForm!: FormGroup;
  public searchCondition: SearchCondition = new SearchCondition();

  constructor(private formBuilder: FormBuilder,
              private screenService: ScreenService) { }

  ngOnInit(): void {
    this.searchFormGroup();
    this.fillSearchDataFromSession().then();
  }

  searchFormGroup = () => {
    this.searchForm = this.formBuilder.group({
      lastName: [''],
      firstName: [''],
      phoneNumber: ['']
    });
  }

  /**
   * Merge the current search conditions with the new one.
   * Remove any properties which are null or empty.
   * @param formDataValue New search options data
   */
  private patchSearchConditionFormData(formDataValue: any): SearchCondition {
    const result = { ...this.searchCondition, ...formDataValue };
    // set null to empty string value
    Object.keys(result).forEach(key => {
      if (!ObjectUtil.nonNullAndNotEmpty(result[key])) {
        result[key] = null;
      }
    });
    return result;
  }

  onSubmit = () => {
    this.searchCondition = this.patchSearchConditionFormData(this.searchForm.value);
    console.log(this.searchCondition);
    const currentScreenInfo: ScreenInfo = {
      path: [
        RouterConstant.TEST.path,
        RouterConstant.COMPONENT_1.path
      ],
      searchCondition: this.searchCondition
    };
    const nextScreenInfo: ScreenInfo = {
      path: [
        RouterConstant.TEST.path,
        RouterConstant.COMPONENT_2.path
      ], queryParams: {
        receptionControlNum: 12345,
      }
    };

    this.screenService.navigateTo(nextScreenInfo, currentScreenInfo).catch(this.handleError);
  }

  public handleError = (error: any) => {

  }

  async fillSearchDataFromSession() {
    const searchData = await this.screenService.getSearchCondition();
    console.log(searchData);
    if (searchData) {
      this.fillFormData(searchData);
    }
  }

  private fillFormData(data: SearchCondition) {
    this.searchForm.setValue({
      lastName: data ? data.lastName : null,
      firstName: data ? data.firstName : null,
      phoneNumber: data ? data.phoneNumber : null
    });
  }

}
