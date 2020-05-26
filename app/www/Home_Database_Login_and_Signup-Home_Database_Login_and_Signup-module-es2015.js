(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Home_Database_Login_and_Signup-Home_Database_Login_and_Signup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar #j_98 color=\"secondary\">\n        <ion-buttons #j_99 slot=\"start\">\n            <ion-menu-button #j_100 autoHide=\"true\">\n            </ion-menu-button>\n        </ion-buttons>\n        <ion-buttons #j_101 slot=\"end\">\n            <ion-button #j_102 expand=\"block\" (click)=\"logoutbuttonClick__j_102($event, currentItem)\">\n                <ion-icon #j_102__icon name=\"log-out\">\n                </ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title #j_103>\n            Home\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"main-content\">\n    <ion-img #j_88 src=\"assets/images/cart.jpg\" alt=\"Image error\" class=\"center\">\n    </ion-img>\n    <ion-text class=\"center mainText\">\n        Find a\n        <br>\n        nanny\n    </ion-text>\n    <ion-text class=\"center lowerText\">\n        student edition\n    </ion-text>\n    <ion-grid #j_91>\n        <ion-row #j_92>\n            <ion-col #j_93>\n                <ion-button #j_94 expand=\"block\" shape=\"round\" size=\"large\" (click)=\"button3Click__j_94($event, currentItem)\">\n                    Check for jobs\n                </ion-button>\n            </ion-col>\n            <ion-col #j_95>\n                <ion-button #j_96 expand=\"block\" shape=\"round\" size=\"large\" (click)=\"button4Click__j_96($event, currentItem)\">\n                    Add job offer\n                </ion-button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: Home_Database_Login_and_SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home_Database_Login_and_SignupPageModule", function() { return Home_Database_Login_and_SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Home_Database_Login_and_Signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home_Database_Login_and_Signup */ "./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let Home_Database_Login_and_SignupPageModule = class Home_Database_Login_and_SignupPageModule {
};
Home_Database_Login_and_SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _Home_Database_Login_and_Signup__WEBPACK_IMPORTED_MODULE_6__["Home_Database_Login_and_Signup"]
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
                    component: _Home_Database_Login_and_Signup__WEBPACK_IMPORTED_MODULE_6__["Home_Database_Login_and_Signup"]
                }])
        ],
        exports: [
            _Home_Database_Login_and_Signup__WEBPACK_IMPORTED_MODULE_6__["Home_Database_Login_and_Signup"]
        ]
    })
], Home_Database_Login_and_SignupPageModule);



/***/ }),

/***/ "./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.scss":
/*!************************************************************************************!*\
  !*** ./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.mainText {\n  font-size: 5em;\n  font-family: \"Arial\";\n  text-align: center;\n  font-weight: bold;\n}\n\n.lowerText {\n  font-size: 2.5em;\n  font-family: \"Arial\";\n  text-align: center;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvdGlnZ3ppL2plbmtpbnNfaTQvd29ya3NwYWNlLzY3MzQ5NS1hbmRyb2lkLzU5MDM3NS82NzM0OTUvYW5kcm9pZC9hcHAvc3JjL2FwcC9Ib21lX0RhdGFiYXNlX0xvZ2luX2FuZF9TaWdudXAvSG9tZV9EYXRhYmFzZV9Mb2dpbl9hbmRfU2lnbnVwLnNjc3MiLCJzcmMvYXBwL0hvbWVfRGF0YWJhc2VfTG9naW5fYW5kX1NpZ251cC9Ib21lX0RhdGFiYXNlX0xvZ2luX2FuZF9TaWdudXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0hvbWVfRGF0YWJhc2VfTG9naW5fYW5kX1NpZ251cC9Ib21lX0RhdGFiYXNlX0xvZ2luX2FuZF9TaWdudXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4ubWFpblRleHQge1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG93ZXJUZXh0IHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCIuY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5tYWluVGV4dCB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubG93ZXJUZXh0IHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.ts ***!
  \**********************************************************************************/
/*! exports provided: Home_Database_Login_and_Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home_Database_Login_and_Signup", function() { return Home_Database_Login_and_Signup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");




let Home_Database_Login_and_Signup = class Home_Database_Login_and_Signup {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "dbLogout": "invokeService_dbLogout"
        };
    }
    __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    button3Click__j_94(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Navigate to Page */
            this.Apperyio.navigateTo('FavouriteJobs');
        });
    }
    button4Click__j_96(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Navigate to Page */
            this.Apperyio.navigateTo('AddJobPage');
        });
    }
    logoutbuttonClick__j_102(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Invoke data service */
            this.invokeService_dbLogout();
        });
    }
    invokeService_dbLogout(cb) {
        this.Apperyio.getService("LogoutService").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            headers = this.$aio_mappingHelper.updateData(headers, ['X-Appery-Session-Token'], yield this.$aio_mappingHelper.getServiceDataValue("sessionToken", []));
            /* Present Loading */
            yield (() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let options = {
                    'spinner': 'circles',
                };
                let controller = this.Apperyio.getController('LoadingController');
                const loading = yield controller.create(options);
                return yield loading.present();
            }))();
            service.execute({
                data: data,
                params: params,
                headers: headers
            }).subscribe(
            /* onsuccess */
            (res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let mappingData = {};
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Navigate to Page */
                this.Apperyio.navigateTo('Login');
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), 
            /* onerror */
            (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Navigate to Page */
                this.Apperyio.navigateTo('Login');
            }));
        }));
    }
};
Home_Database_Login_and_Signup.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Home_Database_Login_and_Signup = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./Home_Database_Login_and_Signup.html */ "./node_modules/raw-loader/index.js!./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.html"),
        selector: 'page-home_-database_-login_and_-signup',
        styles: [__webpack_require__(/*! ./Home_Database_Login_and_Signup.scss */ "./src/app/Home_Database_Login_and_Signup/Home_Database_Login_and_Signup.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], Home_Database_Login_and_Signup);



/***/ })

}]);
//# sourceMappingURL=Home_Database_Login_and_Signup-Home_Database_Login_and_Signup-module-es2015.js.map