import { Component, OnInit } from '@angular/core';
import {ContentDialogService} from "../../../../components/content-dialog/content-dialog.service";
import * as $ from 'jquery';
import {CommonUtil} from "../../../../util/common-util";

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.css']
})
export class Ui2Component implements OnInit {

  public modalId = 'modalId';
  public header = 'Selection';

  public categoryScroll = false;
  public busTypeNameScroll = false;

  public categoryAndBusinessTypeNameList = [
    {
      category: "category1",
      businessTypeList: [
        {
          businessType: "businessType1"
        },
        {
          businessType: "businessType11"
        },
        {
          businessType: "businessType111"
        }
      ]
    },
    {
      category: "category2",
      businessTypeList: [
        {
          businessType: "businessType2"
        },
        {
          businessType: "businessType22"
        },
        {
          businessType: "businessType222"
        }
      ]
    },
    {
      category: "category3",
      businessTypeList: [
        {
          businessType: "businessType3"
        }
      ]
    },
    {
      category: "category4",
      businessTypeList: [
        {
          businessType: "businessType4"
        }
      ]
    },
    {
      category: "category5",
      businessTypeList: [
        {
          businessType: "businessType5"
        }
      ]
    },
    {
      category: "category6",
      businessTypeList: [
        {
          businessType: "businessType6"
        }
      ]
    },
    {
      category: "category7",
      businessTypeList: [
        {
          businessType: "businessType7"
        }
      ]
    },
    {
      category: "category8",
      businessTypeList: [
        {
          businessType: "businessType8"
        }
      ]
    },
    {
      category: "category9",
      businessTypeList: [
        {
          businessType: "businessType9"
        }
      ]
    },
    {
      category: "category10",
      businessTypeList: [
        {
          businessType: "businessType10"
        },
        {
          businessType: "businessType101"
        },
        {
          businessType: "businessType102"
        },
        {
          businessType: "businessType103"
        },
        {
          businessType: "businessType104"
        },
        {
          businessType: "businessType105"
        },
        {
          businessType: "businessType106"
        },
        {
          businessType: "businessType107"
        },
        {
          businessType: "businessType108"
        },
        {
          businessType: "businessType109"
        },
        {
          businessType: "businessType1010"
        },
        {
          businessType: "businessType1011"
        },
        {
          businessType: "businessType1012"
        }
      ]
    },
    {
      category: "category11",
      businessTypeList: [
        {
          businessType: "businessType11"
        }
      ]
    },
    {
      category: "category12",
      businessTypeList: [
        {
          businessType: "businessType12"
        }
      ]
    },
    {
      category: "category13",
      businessTypeList: [
        {
          businessType: "businessType13"
        }
      ]
    },
    {
      category: "category14",
      businessTypeList: [
        {
          businessType: "businessType14"
        }
      ]
    },
    {
      category: "category15",
      businessTypeList: [
        {
          businessType: "businessType15"
        }
      ]
    },
    {
      category: "category16",
      businessTypeList: [
        {
          businessType: "businessType16"
        }
      ]
    },
    {
      category: "category17",
      businessTypeList: [
        {
          businessType: "businessType17"
        }
      ]
    },
    {
      category: "category18",
      businessTypeList: [
        {
          businessType: "businessType18"
        },
        {
          businessType: "businessType181"
        },
        {
          businessType: "businessType182"
        },
        {
          businessType: "businessType183"
        },
        {
          businessType: "businessType184"
        },
        {
          businessType: "businessType185"
        },
        {
          businessType: "businessType186"
        },
        {
          businessType: "businessType187"
        },
        {
          businessType: "businessType188"
        },
        {
          businessType: "businessType189"
        },
        {
          businessType: "businessType1810"
        },
        {
          businessType: "businessType1811"
        },
        {
          businessType: "businessType1812"
        }
      ]
    },
    {
      category: "category19",
      businessTypeList: [
        {
          businessType: "businessType19"
        }
      ]
    }
  ]

  public categorySelection: any;

  public selectedCategory = {
    category: "category18",
    businessTypeName: "businessType1810"
  }

  constructor(private dialogService: ContentDialogService) { }

  ngOnInit(): void {
    this.chooseCurrentCategory();
    console.log(this.categorySelection);
  }

  openModal = () => {
    this.categoryScroll = this.busTypeNameScroll = true;
    this.dialogService.open(this.modalId);
  }

  chooseCurrentCategory = () => {
    this.categoryAndBusinessTypeNameList.filter(item => {
      if (item.category === this.selectedCategory.category) {
        this.categorySelection = item;
      }
    });
  }

  chooseCategoryCss = (item: any, index: any) => {
    if (CommonUtil.equals(item, this.selectedCategory.category)) {
      if (this.categoryScroll === true) {
        const container = $('#categoryScroll');
        // @ts-ignore
        const elementScrollVal = $('#categoryElement-' + index).offset().top - $('#categoryElement-' + 0).offset().top;
        this.scrollToElement(container, elementScrollVal);
        this.categoryScroll = false;
      }
      return true;
    }
    return false;
  }

  checkedBusinessTypeName = (item: any, index: any) => {
    if (CommonUtil.equals(item, this.selectedCategory.businessTypeName)) {
      if (this.busTypeNameScroll === true) {
        const container = $('#businessTypeNameScroll');
        // @ts-ignore
        const elementScrollVal = $('#businessTypeNameElement-' + index).offset().top - $('#businessTypeNameElement-' + 0).offset().top;
        this.scrollToElement(container, elementScrollVal);
        this.busTypeNameScroll = false;
      }
      return true;
    }
    return false;
  }

  scrollToElement = (container: any, elementScrollVal: any) => {
    container.animate({
      scrollTop: elementScrollVal
    });
  }

}
