(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SignUp-SignUp-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/SignUp/SignUp.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/SignUp/SignUp.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content\" color=\"secondary\">\n    <ion-grid #j_58>\n        <ion-row #j_59>\n            <ion-col #j_60 class=\"sign-up-wrapper\">\n                <div #j_61 class=\"sign-up-panel\">\n                    <div #j_62 class=\"title-wrapper\">\n                        <ion-text color=\"primary\" class=\"title\">\n                            Sign up\n                        </ion-text>\n                    </div>\n                    <div #j_64 class=\"form-wrapper\">\n                        <form #signUpForm=\"ngForm\" #signUpForm_el (ngSubmit)=\"signupformNgSubmit__j_65($event, currentItem)\">\n                            <ion-item #j_66__ion4Item>\n                                <ion-label #j_66__ion4Label color=\"light\" position=\"floating\">\n                                    First name\n                                </ion-label>\n                                <ion-icon #j_66__icon slot=\"end\" color=\"light\" name=\"person\">\n                                </ion-icon>\n                                <ion-input #firstName=\"ngModel\" #firstName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"50\" minlength=\"1\" name=\"firstName\" pattern=\"^[a-zA-Z0-9 ]*$\"\n                                required=\"true\" type=\"text\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': firstName.touched && firstName.errors}\">\n                                {{firstName.errors &amp;&amp; firstName.errors.pattern ? 'Special characters are\n                                not allowed' : 'Please enter a valid First name'}}\n                            </ion-text>\n                            <ion-item #j_68__ion4Item>\n                                <ion-label #j_68__ion4Label color=\"light\" position=\"floating\">\n                                    Last name\n                                </ion-label>\n                                <ion-icon #j_68__icon slot=\"end\" color=\"light\" name=\"person\">\n                                </ion-icon>\n                                <ion-input #lastName=\"ngModel\" #lastName_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"50\" minlength=\"1\" name=\"lastName\" pattern=\"^[a-zA-Z0-9 ]*$\"\n                                required=\"true\" type=\"text\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': lastName.touched && lastName.errors}\">\n                                {{lastName.errors &amp;&amp; lastName.errors.pattern ? 'Special characters are not\n                                allowed' : 'Please enter a valid Last name'}}\n                            </ion-text>\n                            <ion-item #j_70__ion4Item>\n                                <ion-label #j_70__ion4Label color=\"light\" position=\"floating\">\n                                    Username\n                                </ion-label>\n                                <ion-icon #j_70__icon slot=\"end\" color=\"light\" name=\"mail\">\n                                </ion-icon>\n                                <ion-input #username=\"ngModel\" #username_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"254\" minlength=\"1\" name=\"username\" pattern=\"^(([^<>()\\[\\]\\\\.,;:\\s@&#34;]+(\\.[^<>()\\[\\]\\\\.,;:\\s@&#34;]+)*)|(&#34;.+&#34;))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\"\n                                required=\"true\" type=\"email\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': username.touched && username.errors}\">\n                                Please enter a valid Email\n                            </ion-text>\n                            <ion-item #j_72__ion4Item>\n                                <ion-label #j_72__ion4Label color=\"light\" position=\"floating\">\n                                    Password\n                                </ion-label>\n                                <ion-icon #j_72__icon slot=\"end\" color=\"light\" class=\"eye\" name=\"eye\">\n                                </ion-icon>\n                                <ion-input #password=\"ngModel\" #password_el [ngModel] [ngModelOptions]=\"{updateOn: 'change'}\"\n                                color=\"dark\" maxlength=\"50\" minlength=\"6\" name=\"password\" pattern=\"^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[ -/:-@\\[-`{-~]).{6,50}$\"\n                                required=\"true\" type=\"password\" class=\"password\">\n                                </ion-input>\n                            </ion-item>\n                            <ion-text color=\"danger\" class=\"error\" [ngClass]=\"{'visible': password.touched && password.errors}\">\n                                {{password.errors &amp;&amp; password.errors.pattern ? 'Password must be at least\n                                6 characters long, contain letters, numbers and symbols' : 'Please enter a valid\n                                Password'}}\n                            </ion-text>\n                            <ion-button #j_74 color=\"primary\" expand=\"block\" type=\"submit\" (click)=\"markFormControlsAsTouched()\">\n                                Sign up\n                            </ion-button>\n                        </form>\n                    </div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row #j_75>\n            <ion-col #j_76 class=\"bottom-wrapper\">\n                <div #j_77 class=\"accept-policy\">\n                    <ion-text>\n                        By signing up you accept the\n                    </ion-text>\n                    <ion-text color=\"primary\" (click)=\"Apperyio.navigateTo('termsofservice')\">\n                        Terms of Service\n                    </ion-text>\n                    <ion-text>\n                        and\n                    </ion-text>\n                    <ion-text color=\"primary\" (click)=\"Apperyio.navigateTo('privacypolicy')\">\n                        Privacy Policy\n                    </ion-text>\n                </div>\n                <div #j_82 class=\"have-account\">\n                    <ion-text>\n                        Already have an account?\n                    </ion-text>\n                    <ion-text color=\"primary\" (click)=\"Apperyio.navigateTo('login')\">\n                        Sign in\n                    </ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/SignUp/SignUp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/SignUp/SignUp.module.ts ***!
  \*****************************************/
/*! exports provided: SignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SignUp */ "./src/app/SignUp/SignUp.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











let SignUpPageModule = class SignUpPageModule {
};
SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
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
                    component: _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
                }])
        ],
        exports: [
            _SignUp__WEBPACK_IMPORTED_MODULE_6__["SignUp"]
        ]
    })
], SignUpPageModule);



/***/ }),

/***/ "./src/app/SignUp/SignUp.scss":
/*!************************************!*\
  !*** ./src/app/SignUp/SignUp.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-up-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin-top: 40px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.sign-up-wrapper .sign-up-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  width: 335px;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper {\n  border-bottom: 2px solid #f4f4f4;\n}\n.sign-up-wrapper .sign-up-panel .title-wrapper .title {\n  font-size: 30px;\n  line-height: 38px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n  --padding-start: 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-item ion-icon {\n  font-size: 20px;\n  height: 100%;\n  margin: 13px 0 0 0;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error {\n  display: inline-block;\n  margin-top: 5px;\n  visibility: hidden;\n  font-size: 13px;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-text.error.visible {\n  visibility: visible;\n}\n.sign-up-wrapper .sign-up-panel .form-wrapper ion-button {\n  height: 54px;\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 28px;\n}\n.bottom-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.bottom-wrapper .accept-policy {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n}\n.bottom-wrapper .have-account {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n}\n@media (min-height: 800px) {\n  .title-wrapper {\n    padding: 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 30px 30px 30px;\n  }\n  .form-wrapper ion-item {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-button {\n    margin-top: 20px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px 25px 25px;\n  }\n}\n@media (max-height: 800px) {\n  .title-wrapper {\n    padding: 20px 30px 15px 30px;\n  }\n\n  .form-wrapper {\n    padding: 0 25px 25px 25px;\n  }\n  .form-wrapper ion-item {\n    --min-height: 40px;\n    margin-top: 0;\n  }\n  .form-wrapper ion-item ion-label {\n    margin-top: 5px;\n  }\n  .form-wrapper ion-item ion-input {\n    --padding-top: 0;\n  }\n  .form-wrapper ion-button {\n    margin-top: 10px;\n  }\n\n  .bottom-wrapper {\n    margin: 10px 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvdGlnZ3ppL2plbmtpbnNfaTQvd29ya3NwYWNlLzY3MzQ5NS1hbmRyb2lkLzU5MDM3NS82NzM0OTUvYW5kcm9pZC9hcHAvc3JjL2FwcC9TaWduVXAvU2lnblVwLnNjc3MiLCJzcmMvYXBwL1NpZ25VcC9TaWduVXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDUjtBRENRO0VBQ0ksZ0NBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ2hCO0FES1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSGhCO0FES2dCO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hwQjtBRE9ZO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTGhCO0FET2dCO0VBQ0ksbUJBQUE7QUNMcEI7QURTWTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BoQjtBRGFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNWSjtBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZSO0FEYUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDWFI7QURlQTtFQUNJO0lBQ0ksYUFBQTtFQ1pOOztFRGVFO0lBQ0kseUJBQUE7RUNaTjtFRGNNO0lBQ0ksZUFBQTtFQ1pWO0VEZU07SUFDSSxnQkFBQTtFQ2JWOztFRGlCRTtJQUNJLDJCQUFBO0VDZE47QUFDRjtBRGlCQTtFQUNJO0lBQ0UsNEJBQUE7RUNmSjs7RURrQkU7SUFDSSx5QkFBQTtFQ2ZOO0VEaUJNO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0VDZlY7RURpQlU7SUFDSSxlQUFBO0VDZmQ7RURrQlU7SUFDSSxnQkFBQTtFQ2hCZDtFRG9CTTtJQUNJLGdCQUFBO0VDbEJWOztFRHNCRTtJQUNJLGlCQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9TaWduVXAvU2lnblVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbi11cC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAuc2lnbi11cC1wYW5lbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgd2lkdGg6IDMzNXB4O1xuICAgICAgICBcbiAgICAgICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEzcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tdGV4dC5lcnJvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICYudmlzaWJsZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ib3R0b20td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmFjY2VwdC1wb2xpY3kge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5oYXZlLWFjY291bnQge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgLnRpdGxlLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4IDMwcHggMzBweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5ib3R0b20td3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMTBweCAyNXB4IDI1cHggMjVweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDMwcHggMTVweCAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZzogMCAyNXB4IDI1cHggMjVweDtcbiAgICAgICAgXG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYm90dG9tLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDEwcHggMjVweDtcbiAgICB9XG59XG4iLCIuc2lnbi11cC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzM1cHg7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC50aXRsZS13cmFwcGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNGY0ZjQ7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC50aXRsZS13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG4uc2lnbi11cC13cmFwcGVyIC5zaWduLXVwLXBhbmVsIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxM3B4IDAgMCAwO1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi10ZXh0LmVycm9yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi10ZXh0LmVycm9yLnZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLnNpZ24tdXAtd3JhcHBlciAuc2lnbi11cC1wYW5lbCAuZm9ybS13cmFwcGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDU0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbi5ib3R0b20td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJvdHRvbS13cmFwcGVyIC5hY2NlcHQtcG9saWN5IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJvdHRvbS13cmFwcGVyIC5oYXZlLWFjY291bnQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogODAwcHgpIHtcbiAgLnRpdGxlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuICAuZm9ybS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDMwcHggMzBweCAzMHB4O1xuICB9XG4gIC5mb3JtLXdyYXBwZXIgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuYm90dG9tLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTBweCAyNXB4IDI1cHggMjVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAudGl0bGUtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4IDE1cHggMzBweDtcbiAgfVxuXG4gIC5mb3JtLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMjVweCAyNXB4IDI1cHg7XG4gIH1cbiAgLmZvcm0td3JhcHBlciBpb24taXRlbSB7XG4gICAgLS1taW4taGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgLmZvcm0td3JhcHBlciBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgfVxuICAuZm9ybS13cmFwcGVyIGlvbi1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAuYm90dG9tLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMTBweCAyNXB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/SignUp/SignUp.ts":
/*!**********************************!*\
  !*** ./src/app/SignUp/SignUp.ts ***!
  \**********************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");
/* harmony import */ var _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/custom/FormUtils */ "./src/app/scripts/custom/FormUtils.ts");






let SignUp = class SignUp {
    constructor(Apperyio, $aio_mappingHelper, $aio_changeDetector, formUtils) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.formUtils = formUtils;
        this.currentItem = null;
        this.mappingData = {};
        this.$aio_dataServices = {
            "dbSignup": "invokeService_dbSignup"
        };
    }
    __getMapping(_currentItem, property, defaultValue, isVariable, isSelected) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    markFormControlsAsTouched() {
        this.formUtils.markFormControlsAsTouched(this.signUpForm.form, ['firstName', 'lastName', 'username', 'password']);
    }
    ngOnInit() {
        this.pageNgOnInit__j_56();
    }
    pageNgOnInit__j_56(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            /* Run TypeScript */
            this.formUtils.showPasswordOnClick('page-sign-up');
        });
    }
    signupformNgSubmit__j_65(event, currentItem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.signUpForm.valid) {
                /* Invoke data service */
                this.invokeService_dbSignup();
            }
        });
    }
    invokeService_dbSignup(cb) {
        this.Apperyio.getService("SignupService").then((service) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!service) {
                console.log("Error. Service was not found.");
                return;
            }
            let data = {};
            let params = {};
            let headers = {};
            this.$aio_changeDetector.detectChanges();
            /* Mapping */
            data = this.$aio_mappingHelper.updateData(data, [], this.$aio_mappingHelper.getComponentPropValue.call(this, 'signUpForm', 'ionic4form', 'formData'));
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
                /* Mapping */
                yield this.$aio_mappingHelper.setServiceDataValue("sessionToken", [], this.$aio_mappingHelper.getSubdata(res, ["sessionToken"]));
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Navigate to Page */
                this.Apperyio.navigateTo('Home_Database_Login_and_Signup');
                this.mappingData = Object.assign({}, this.mappingData, mappingData);
                if (cb && typeof cb === "function")
                    cb(res);
            }), 
            /* onerror */
            (err) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                /* Dismiss loading */
                yield this.Apperyio.getController("LoadingController").dismiss();
                /* Present Toast */
                yield (() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let options = {
                        'color': 'danger',
                        'duration': 1000,
                        'message': 'Invalid user\u0027s data',
                        'position': 'top',
                        'buttons': []
                    };
                    let controller = this.Apperyio.getController('ToastController');
                    const toast = yield controller.create(options);
                    return yield toast.present();
                }))();
            }));
        }));
    }
};
SignUp.ctorParameters = () => [
    { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
    { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm_el', {
        static: false
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignUp.prototype, "signUpForm_el", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('signUpForm', {
        static: true
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SignUp.prototype, "signUpForm", void 0);
SignUp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./SignUp.html */ "./node_modules/raw-loader/index.js!./src/app/SignUp/SignUp.html"),
        selector: 'page-sign-up',
        styles: [__webpack_require__(/*! ./SignUp.scss */ "./src/app/SignUp/SignUp.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _scripts_custom_FormUtils__WEBPACK_IMPORTED_MODULE_4__["ExportedClass"]])
], SignUp);



/***/ })

}]);
//# sourceMappingURL=SignUp-SignUp-module-es2015.js.map