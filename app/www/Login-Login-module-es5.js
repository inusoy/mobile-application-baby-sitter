(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Login-Login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Login/Login.html":
/*!************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Login/Login.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content\" color=\"secondary\">\n    <ion-grid #j_38>\n        <ion-row #j_39>\n            <ion-col #j_40 class=\"login-wrapper\">\n                <div #j_41 class=\"login-panel\">\n                    <div #j_42 class=\"title-wrapper\">\n                        <ion-text color=\"primary\" class=\"top-title mainText\">\n                            Find a nanny\n                        </ion-text>\n                    </div>\n                    <div #j_44 class=\"form-wrapper\">\n                        <form #loginForm=\"ngForm\" #loginForm_el (ngSubmit)=\"loginformNgSubmit__j_45($event, currentItem)\">\n                            <ion-item #j_46__ion4Item>\n                                <ion-label #j_46__ion4Label color=\"light\" position=\"floating\">\n                                    Email address\n                                </ion-label>\n                                <ion-icon #j_46__icon slot=\"end\" color=\"light\" class=\"input-icon\" name=\"person\">\n                                </ion-icon>\n                                <ion-input #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"254\" minlength=\"1\" name=\"username\" pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@&#34;]+(\\.[^<>()\\[\\]\\\\.,;:\\s@&#34;]+)*)|(&#34;.+&#34;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                                required=\"true\" type=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': username.touched && username.errors}\">\n                                Please enter a valid Email\n                            </ion-text>\n                            <ion-item #j_48__ion4Item>\n                                <ion-label #j_48__ion4Label color=\"light\" position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-icon #j_48__icon slot=\"end\" color=\"light\" class=\"eye\" name=\"eye\">\n                                </ion-icon>\n                                <ion-input #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" name=\"password\" required=\"true\" type=\"password\" class=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': password.touched && password.errors && password.errors.required}\">\n                                Please enter a Password\n                            </ion-text>\n                            <div #j_50 class=\"keep-logged-in\">\n                                <ion-item #j_51__ion4Item lines=\"none\" mode=\"ios\">\n                                    <ion-label #j_51__ion4Label color=\"dark\" mode=\"ios\">\n                                        Keep me logged in\n                                    </ion-label>\n                                    <ion-checkbox #rememberme=\"ngModel\" #rememberme_el [ngModel]=\"false\" mode=\"ios\"\n                                    name=\"rememberme\" slot=\"start\">\n                                    </ion-checkbox>\n                                </ion-item>\n                            </div>\n                            <ion-button #j_52 color=\"primary\" expand=\"block\" type=\"submit\" (click)=\"signinbuttonClick__j_52($event, currentItem)\">\n                                Sign in\n                            </ion-button>\n                        </form>\n                        <div #j_53 class=\"bottom-panel\">\n                            <ion-text color=\"dark\" class=\"sign-up\" (click)=\"Apperyio.navigateTo('signup')\">\n                                Sign up\n                            </ion-text>\n                        </div>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/Login/Login.module.ts":
/*!***************************************!*\
  !*** ./src/app/Login/Login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./src/app/Login/Login.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
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
                        component: _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
                    }])
            ],
            exports: [
                _Login__WEBPACK_IMPORTED_MODULE_6__["Login"]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/Login/Login.scss":
/*!**********************************!*\
  !*** ./src/app/Login/Login.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.login-wrapper .login-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  width: 335px;\n}\n.login-wrapper .login-panel .title-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px;\n  border-bottom: 2px solid #f4f4f4;\n}\n.login-wrapper .login-panel .title-wrapper .top-title {\n  font-size: 30px;\n  line-height: 38px;\n}\n.login-wrapper .login-panel .title-wrapper .bottom-title {\n  font-size: 18px;\n  line-height: 23px;\n  margin-top: 5px;\n}\n.login-wrapper .login-panel .form-wrapper {\n  padding: 0 30px 30px 30px;\n}\n.login-wrapper .login-panel .form-wrapper ion-item {\n  margin-top: 10px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-start: 0;\n}\n.login-wrapper .login-panel .form-wrapper ion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\n.login-wrapper .login-panel .form-wrapper ion-text.error {\n  display: inline-block;\n  margin-top: 5px;\n  visibility: hidden;\n}\n.login-wrapper .login-panel .form-wrapper ion-text.error.visible {\n  visibility: visible;\n}\n.login-wrapper .login-panel .form-wrapper .keep-logged-in {\n  margin-top: 10px;\n}\n.login-wrapper .login-panel .form-wrapper .keep-logged-in ion-checkbox {\n  height: 20px;\n  width: 20px;\n}\n.login-wrapper .login-panel .form-wrapper ion-button.ion-color-primary {\n  margin-top: 25px;\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.login-wrapper .login-panel .form-wrapper .bottom-panel {\n  display: -webkit-box;\n  display: flex;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 25px;\n}\n.login-wrapper .login-panel .form-wrapper .bottom-panel .sign-up {\n  margin-left: auto;\n}\n@media (min-height: 800px) {\n  .login-wrapper {\n    margin-top: 110px;\n  }\n}\n@media (max-height: 800px) {\n  .login-wrapper {\n    margin-top: 40px;\n  }\n}\n.center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n.mainText {\n  font-size: 5em;\n  font-family: \"Arial\";\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvdGlnZ3ppL2plbmtpbnNfaTQvd29ya3NwYWNlLzY3MzQ5NS1hbmRyb2lkLzU5MDM3NS82NzM0OTUvYW5kcm9pZC9hcHAvc3JjL2FwcC9Mb2dpbi9Mb2dpbi5zY3NzIiwic3JjL2FwcC9Mb2dpbi9Mb2dpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDQ1o7QURDWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NoQjtBREVZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FoQjtBRElRO0VBQ0kseUJBQUE7QUNGWjtBRElZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRmhCO0FESWdCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0ZwQjtBRE1ZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURNZ0I7RUFDSSxtQkFBQTtBQ0pwQjtBRFFZO0VBQ0ksZ0JBQUE7QUNOaEI7QURRZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ05wQjtBRFVZO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURXWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNUaEI7QURXZ0I7RUFDSSxpQkFBQTtBQ1RwQjtBRGdCQTtFQUNJO0lBQ0ksaUJBQUE7RUNiTjtBQUNGO0FEZ0JBO0VBQ0k7SUFDSSxnQkFBQTtFQ2ROO0FBQ0Y7QURpQkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNmSjtBRGtCQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL0xvZ2luL0xvZ2luLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIC5sb2dpbi1wYW5lbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICBcbiAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50b3AtdGl0bGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmJvdHRvbS10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmZvcm0td3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHggMzBweCAzMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxM3B4IDAgMCAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLXRleHQuZXJyb3Ige1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAua2VlcC1sb2dnZWQtaW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1idXR0b24uaW9uLWNvbG9yLXByaW1hcnkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuYm90dG9tLXBhbmVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnNpZ24tdXAge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgICAubG9naW4td3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgIC5sb2dpbi13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4ubWFpblRleHQge1xuICAgIGZvbnQtc2l6ZTogNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLmxvZ2luLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMzNXB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC50aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLnRpdGxlLXdyYXBwZXIgLnRvcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLnRpdGxlLXdyYXBwZXIgLmJvdHRvbS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCAuZm9ybS13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAzMHB4IDMwcHggMzBweDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbi1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxM3B4IDAgMCAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3Ige1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLXRleHQuZXJyb3IudmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciAua2VlcC1sb2dnZWQtaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgLmtlZXAtbG9nZ2VkLWluIGlvbi1jaGVja2JveCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciBpb24tYnV0dG9uLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luLXBhbmVsIC5mb3JtLXdyYXBwZXIgLmJvdHRvbS1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubG9naW4td3JhcHBlciAubG9naW4tcGFuZWwgLmZvcm0td3JhcHBlciAuYm90dG9tLXBhbmVsIC5zaWduLXVwIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgLmxvZ2luLXdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDExMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gIC5sb2dpbi13cmFwcGVyIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG59XG4uY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5tYWluVGV4dCB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Login/Login.ts":
/*!********************************!*\
  !*** ./src/app/Login/Login.ts ***!
  \********************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/custom/FormUtils */ "./src/app/scripts/custom/FormUtils.ts");






var Login = /** @class */ (function () {
    function Login(Apperyio, $aio_mappingHelper, $aio_changeDetector, formUtils) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.formUtils = formUtils;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "dbLogin": "invokeService_dbLogin"
        };
    }
    Login.prototype.__getMapping = function (_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    };
    Login.prototype.markFormControlsAsTouched = function () {
        this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
    };
    Login.prototype.ngOnInit = function () {
        this.pageNgOnInit__j_36();
    };
    Login.prototype.pageNgOnInit__j_36 = function (event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var databaseId, alert_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        databaseId = this.Apperyio.config.get("SecuritySettings.database_id");
                        if (!(databaseId == 'SPECIFY YOUR DATABASE ID')) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.Apperyio.getController("AlertController").create({
                                header: 'Alert',
                                subHeader: 'Database Id is not specified',
                                message: 'Please open SecuritySettings and specify your database id as database_id property',
                                buttons: ['OK']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        console.log('login screen');
                        this.formUtils.showPasswordOnClick('page-login');
                        return [2 /*return*/];
                }
            });
        });
    };
    Login.prototype.loginformNgSubmit__j_45 = function (event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.loginForm.valid) {
                    /* Invoke data service */
                    this.invokeService_dbLogin();
                }
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.signinbuttonClick__j_52 = function (event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                /* Run TypeScript */
                this.formUtils.markFormControlsAsTouched(this.loginForm.form, ['username', 'password']);
                return [2 /*return*/];
            });
        });
    };
    Login.prototype.invokeService_dbLogin = function (cb) {
        var _this = this;
        this.Apperyio.getService("LoginService").then(function (service) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var data, params, headers;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!service) {
                            console.log("Error. Service was not found.");
                            return [2 /*return*/];
                        }
                        data = {};
                        params = {};
                        headers = {};
                        this.$aio_changeDetector.detectChanges();
                        /* Mapping */
                        data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'loginForm', 'ionic4form', 'formData'));
                        /* Present Loading */
                        return [4 /*yield*/, (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var options, controller, loading;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            options = {
                                                'spinner': 'circles',
                                            };
                                            controller = this.Apperyio.getController('LoadingController');
                                            return [4 /*yield*/, controller.create(options)];
                                        case 1:
                                            loading = _a.sent();
                                            return [4 /*yield*/, loading.present()];
                                        case 2: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })()];
                    case 1:
                        /* Present Loading */
                        _a.sent();
                        service.execute({
                            data: data,
                            params: params,
                            headers: headers
                        }).subscribe(
                        /* onsuccess */
                        function (res) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var mappingData;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        mappingData = {};
                                        /* Mapping */
                                        return [4 /*yield*/, this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]))];
                                    case 1:
                                        /* Mapping */
                                        _a.sent();
                                        /* Dismiss loading */
                                        return [4 /*yield*/, this.Apperyio.getController("LoadingController").dismiss()];
                                    case 2:
                                        /* Dismiss loading */
                                        _a.sent();
                                        /* Navigate to Page */
                                        this.Apperyio.navigateTo('Home_Database_Login_and_Signup');
                                        this.mappingData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.mappingData, mappingData);
                                        if (cb && typeof cb === "function")
                                            cb(res);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 
                        /* onerror */
                        function (err) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    /* Dismiss loading */
                                    return [4 /*yield*/, this.Apperyio.getController("LoadingController").dismiss()];
                                    case 1:
                                        /* Dismiss loading */
                                        _a.sent();
                                        /* Present Toast */
                                        return [4 /*yield*/, (function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var options, controller, toast;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            options = {
                                                                'color': 'danger',
                                                                'duration': 1000,
                                                                'message': 'Invalid user\u0027s credentials',
                                                                'position': 'top',
                                                                'buttons': []
                                                            };
                                                            controller = this.Apperyio.getController('ToastController');
                                                            return [4 /*yield*/, controller.create(options)];
                                                        case 1:
                                                            toast = _a.sent();
                                                            return [4 /*yield*/, toast.present()];
                                                        case 2: return [2 /*return*/, _a.sent()];
                                                    }
                                                });
                                            }); })()];
                                    case 2:
                                        /* Present Toast */
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Login.ctorParameters = function () { return [
        { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
        { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm_el', {
            static: false
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Login.prototype, "loginForm_el", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm', {
            static: true
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Login.prototype, "loginForm", void 0);
    Login = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./Login.html */ "./node_modules/raw-loader/index.js!./src/app/Login/Login.html"),
            selector: 'page-login',
            styles: [__webpack_require__(/*! ./Login.scss */ "./src/app/Login/Login.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"]])
    ], Login);
    return Login;
}());



/***/ })

}]);
//# sourceMappingURL=Login-Login-module-es5.js.map