"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Ui2Component = void 0;
var core_1 = require("@angular/core");
var $ = require("jquery");
var common_util_1 = require("../../../../shared/util/common-util");
var Ui2Component = /** @class */ (function () {
    function Ui2Component(dialogService) {
        var _this = this;
        this.dialogService = dialogService;
        this.modalId = 'modalId';
        this.header = 'Selection';
        this.categoryScroll = false;
        this.busTypeNameScroll = false;
        this.categoryAndBusinessTypeNameList = [
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
        ];
        this.selectedCategory = {
            category: "category18",
            businessTypeName: "businessType1810"
        };
        this.openModal = function () {
            _this.categoryScroll = _this.busTypeNameScroll = true;
            _this.dialogService.open(_this.modalId);
        };
        this.chooseCurrentCategory = function () {
            _this.categoryAndBusinessTypeNameList.filter(function (item) {
                if (item.category === _this.selectedCategory.category) {
                    _this.categorySelection = item;
                }
            });
        };
        this.chooseCategoryCss = function (item, index) {
            if (common_util_1.CommonUtil.equals(item, _this.selectedCategory.category)) {
                if (_this.categoryScroll === true) {
                    var container = $('#categoryScroll');
                    // @ts-ignore
                    var elementScrollVal = $('#categoryElement-' + index).offset().top - $('#categoryElement-' + 0).offset().top;
                    _this.scrollToElement(container, elementScrollVal);
                    _this.categoryScroll = false;
                }
                return true;
            }
            return false;
        };
        this.checkedBusinessTypeName = function (item, index) {
            if (common_util_1.CommonUtil.equals(item, _this.selectedCategory.businessTypeName)) {
                if (_this.busTypeNameScroll === true) {
                    var container = $('#businessTypeNameScroll');
                    // @ts-ignore
                    var elementScrollVal = $('#businessTypeNameElement-' + index).offset().top - $('#businessTypeNameElement-' + 0).offset().top;
                    _this.scrollToElement(container, elementScrollVal);
                    _this.busTypeNameScroll = false;
                }
                return true;
            }
            return false;
        };
        this.scrollToElement = function (container, elementScrollVal) {
            container.animate({
                scrollTop: elementScrollVal
            });
        };
    }
    Ui2Component.prototype.ngOnInit = function () {
        this.chooseCurrentCategory();
        console.log(this.categorySelection);
    };
    Ui2Component = __decorate([
        (0, core_1.Component)({
            selector: 'app-ui2',
            templateUrl: './ui2.component.html',
            styleUrls: ['./ui2.component.css']
        })
    ], Ui2Component);
    return Ui2Component;
}());
exports.Ui2Component = Ui2Component;
