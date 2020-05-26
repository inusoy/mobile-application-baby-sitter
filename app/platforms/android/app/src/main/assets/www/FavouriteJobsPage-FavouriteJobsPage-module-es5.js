(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FavouriteJobsPage-FavouriteJobsPage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/FavouriteJobsPage/FavouriteJobsPage.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/FavouriteJobsPage/FavouriteJobsPage.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar #j_7>\n        <ion-buttons #j_8 slot=\"start\">\n            <ion-back-button #j_9>\n            </ion-back-button>\n            <ion-button #j_10 color=\"primary\" expand=\"block\" (click)=\"button4Click__j_10($event, currentItem)\">\n                <ion-icon #j_10__icon name=\"add\" slot=\"icon-only\">\n                </ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons #j_11 slot=\"end\">\n            <ion-menu-button #j_12>\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-title #j_13>\n            Job List\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-list #j_2>\n        <ion-item #j_3 class=\"userListItem\" *ngFor=\"let user of userList\">\n            <ion-label #j_4>\n                {{user.userName}}, {{user.description}}, {{user.address}}\n            </ion-label>\n            <ion-button #j_5 color=\"danger\" expand=\"block\" (click)=\"deleteUser(user._id)\">\n                <ion-icon #j_5__icon name=\"remove\" slot=\"icon-only\">\n                </ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/FavouriteJobsPage/FavouriteJobsPage.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/FavouriteJobsPage/FavouriteJobsPage.module.ts ***!
  \***************************************************************/
/*! exports provided: FavouriteJobsPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteJobsPagePageModule", function() { return FavouriteJobsPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _FavouriteJobsPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FavouriteJobsPage */ "./src/app/FavouriteJobsPage/FavouriteJobsPage.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











var FavouriteJobsPagePageModule = /** @class */ (function () {
    function FavouriteJobsPagePageModule() {
    }
    FavouriteJobsPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _FavouriteJobsPage__WEBPACK_IMPORTED_MODULE_6__["FavouriteJobsPage"]
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
                        component: _FavouriteJobsPage__WEBPACK_IMPORTED_MODULE_6__["FavouriteJobsPage"]
                    }])
            ],
            exports: [
                _FavouriteJobsPage__WEBPACK_IMPORTED_MODULE_6__["FavouriteJobsPage"]
            ]
        })
    ], FavouriteJobsPagePageModule);
    return FavouriteJobsPagePageModule;
}());



/***/ }),

/***/ "./src/app/FavouriteJobsPage/FavouriteJobsPage.scss":
/*!**********************************************************!*\
  !*** ./src/app/FavouriteJobsPage/FavouriteJobsPage.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userListItem:nth-child(odd) {\n  --background: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvdGlnZ3ppL2plbmtpbnNfaTQvd29ya3NwYWNlLzY3MzQ5NS1hbmRyb2lkLzU5MDM3NS82NzM0OTUvYW5kcm9pZC9hcHAvc3JjL2FwcC9GYXZvdXJpdGVKb2JzUGFnZS9GYXZvdXJpdGVKb2JzUGFnZS5zY3NzIiwic3JjL2FwcC9GYXZvdXJpdGVKb2JzUGFnZS9GYXZvdXJpdGVKb2JzUGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0Zhdm91cml0ZUpvYnNQYWdlL0Zhdm91cml0ZUpvYnNQYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckxpc3RJdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4iLCIudXNlckxpc3RJdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjJmMmYyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/FavouriteJobsPage/FavouriteJobsPage.ts":
/*!********************************************************!*\
  !*** ./src/app/FavouriteJobsPage/FavouriteJobsPage.ts ***!
  \********************************************************/
/*! exports provided: FavouriteJobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouriteJobsPage", function() { return FavouriteJobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");




var FavouriteJobsPage = /** @class */ (function () {
    function FavouriteJobsPage(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "getUserList": "invokeService_getUserList"
        };
    }
    FavouriteJobsPage.prototype.__getMapping = function (_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    };
    FavouriteJobsPage.prototype.deleteUser = function (userId) {
        var _this = this;
        this.Apperyio.getService("UserDB_UserProfile_delete_service").then(function (service) {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            service.execute({
                data: {},
                params: {
                    "_id": userId
                },
                headers: {}
            }).subscribe(function (res) {
                _this.Apperyio.execDataService(_this, "getUserList"); // Change service_name to created DataSource name;
            }, function (err) {
                console.log(err);
            });
        });
    };
    FavouriteJobsPage.prototype.ionViewWillEnter = function () {
        this.pageIonViewWillEnter__j_0();
    };
    FavouriteJobsPage.prototype.pageIonViewWillEnter__j_0 = function (event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /* Invoke data service */
                this.invokeService_getUserList();
                return [2 /*return*/];
            });
        });
    };
    FavouriteJobsPage.prototype.button4Click__j_10 = function (event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /* Navigate to Page */
                this.Apperyio.navigateTo('AddJobPage');
                return [2 /*return*/];
            });
        });
    };
    FavouriteJobsPage.prototype.invokeService_getUserList = function (cb) {
        var _this = this;
        this.Apperyio.getService("UserDB_UserProfile_list_service").then(function (service) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data, params, headers;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return [2 /*return*/];
                }
                data = {};
                params = {};
                headers = {};
                service.execute({
                    data: data,
                    params: params,
                    headers: headers
                }).subscribe(
                /* onsuccess */
                function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var mappingData;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        mappingData = {};
                        /* Mapping */
                        this.userList = this.$aio_mappingHelper.updateData(this.userList, [], this.$aio_mappingHelper.getSubdata(res, []));
                        this.mappingData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.mappingData, mappingData);
                        if (cb && typeof cb === "function")
                            cb(res);
                        return [2 /*return*/];
                    });
                }); }, function (err) {
                    console.log(err);
                });
                return [2 /*return*/];
            });
        }); });
    };
    FavouriteJobsPage.ctorParameters = function () { return [
        { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
        { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    FavouriteJobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./FavouriteJobsPage.html */ "./node_modules/raw-loader/index.js!./src/app/FavouriteJobsPage/FavouriteJobsPage.html"),
            selector: 'page-favourite-jobs-page',
            styles: [__webpack_require__(/*! ./FavouriteJobsPage.scss */ "./src/app/FavouriteJobsPage/FavouriteJobsPage.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], FavouriteJobsPage);
    return FavouriteJobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=FavouriteJobsPage-FavouriteJobsPage-module-es5.js.map