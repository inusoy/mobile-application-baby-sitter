(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AddJobPage-AddJobPage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/AddJobPage/AddJobPage.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/AddJobPage/AddJobPage.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar #j_22>\n        <ion-buttons #j_23 slot=\"start\">\n            <ion-back-button #j_24>\n            </ion-back-button>\n        </ion-buttons>\n        <ion-title #j_25>\n            Add a Job\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-item #j_17__ion4Item>\n        <ion-label #j_17__ion4Label>\n            E-mail:\n        </ion-label>\n        <ion-input #j_17 [(ngModel)]=\"newJobName\" name=\"Input1\" placeholder=\"Enter contact e-mail\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_18__ion4Item>\n        <ion-label #j_18__ion4Label>\n            Address:\n        </ion-label>\n        <ion-input #j_18 [(ngModel)]=\"newJobAddress\" name=\"Input1\" placeholder=\"Enter address\">\n        </ion-input>\n    </ion-item>\n    <ion-item #j_19__ion4Item>\n        <ion-label #j_19__ion4Label>\n            Description:\n        </ion-label>\n        <ion-input #j_19 [(ngModel)]=\"newJobDescription\" name=\"Input1\" placeholder=\"Enter job description\">\n        </ion-input>\n    </ion-item>\n    <ion-button #j_20 expand=\"block\" (click)=\"button3Click__j_20($event, currentItem)\">\n        Add\n    </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/AddJobPage/AddJobPage.module.ts":
/*!*************************************************!*\
  !*** ./src/app/AddJobPage/AddJobPage.module.ts ***!
  \*************************************************/
/*! exports provided: AddJobPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobPagePageModule", function() { return AddJobPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _AddJobPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AddJobPage */ "./src/app/AddJobPage/AddJobPage.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let AddJobPagePageModule = class AddJobPagePageModule {
};
AddJobPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _AddJobPage__WEBPACK_IMPORTED_MODULE_6__["AddJobPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
            _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"],
            _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__["CustomModulesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _AddJobPage__WEBPACK_IMPORTED_MODULE_6__["AddJobPage"]
                }])
        ],
        exports: [
            _AddJobPage__WEBPACK_IMPORTED_MODULE_6__["AddJobPage"]
        ]
    })
], AddJobPagePageModule);



/***/ }),

/***/ "./src/app/AddJobPage/AddJobPage.scss":
/*!********************************************!*\
  !*** ./src/app/AddJobPage/AddJobPage.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkZEpvYlBhZ2UvQWRkSm9iUGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/AddJobPage/AddJobPage.ts":
/*!******************************************!*\
  !*** ./src/app/AddJobPage/AddJobPage.ts ***!
  \******************************************/
/*! exports provided: AddJobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobPage", function() { return AddJobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");




let AddJobPage = class AddJobPage {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "createJob": "invokeService_createJob"
        };
    }
    __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    button3Click__j_20(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Invoke data service */
            this.invokeService_createJob();
        });
    }
    invokeService_createJob(cb) {
        this.Apperyio.getService("UserDB_UserProfile_create_service").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, ["userName"], this.$aio_mappingHelper.getSubdata(this.newJobName, []));
            data = this.$aio_mappingHelper.updateData(data, ["description"], this.$aio_mappingHelper.getSubdata(this.newJobDescription, []));
            data = this.$aio_mappingHelper.updateData(data, ["address"], this.$aio_mappingHelper.getSubdata(this.newJobAddress, []));
            service.execute({
                data: data,
                params: params,
                headers: headers
            }).subscribe(
            /* onsuccess */
            (res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let mappingData = {};
                /* Run TypeScript */
                this.newJobName = "";
                /* Navigate to Page */
                this.Apperyio.navigateTo('FavouriteJobs');
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), (err) => {
                console.log(err);
            });
        }));
    }
};
AddJobPage.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddJobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./AddJobPage.html */ "./node_modules/raw-loader/index.js!./src/app/AddJobPage/AddJobPage.html"),
        selector: 'page-add-job-page',
        styles: [__webpack_require__(/*! ./AddJobPage.scss */ "./src/app/AddJobPage/AddJobPage.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AddJobPage);



/***/ })

}]);
//# sourceMappingURL=AddJobPage-AddJobPage-module-es2015.js.map