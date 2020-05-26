(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PrivacyPolicy-PrivacyPolicy-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/PrivacyPolicy/PrivacyPolicy.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/PrivacyPolicy/PrivacyPolicy.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"content\" color=\"secondary\">\n    <ion-grid #j_107>\n        <ion-row #j_108>\n            <ion-col #j_109 class=\"policy-wrapper\">\n                <div #j_110 class=\"policy-panel\">\n                    <ion-text color=\"dark\" class=\"title\">\n                        General Privacy Policy\n                    </ion-text>\n                    <ion-text color=\"dark\" class=\"description\">\n                        This General Privacy Policy (also referred to as the ‘Privacy Policy’) provides\n                        information on the collection, use, and sharing (collectively referred to ‘processing’\n                        or ‘process’) as of personal information by Corporation and its affiliates in connection\n                        with your use of websites, mobile applications, and social media pages that link\n                        to this Privacy Policy, your interactions with during in-person meetings or at events,\n                        and in the context of other offline sales and marketing activities. This Privacy\n                        Policy also explains the privacy rights you have in relation to these processing\n                        activities.This General Privacy Policy (also referred to as the ‘Privacy Policy’)\n                        provides information on the collection, use, and sharing (collectively referred to\n                        ‘processing’ or ‘process’) as of personal information by Corporation and its affiliates\n                        in connection with your use of websites, mobile applications, and social media pages\n                        that link to this Privacy Policy, your interactions with during in-person meetings\n                        or at events, and in the context of other offline sales and marketing activities.\n                        Why are you still reading this? Your data is not safe here, turn back! This Privacy\n                        Policy also explains the privacy rights you have in relation to these processing\n                        activities.\n                    </ion-text>\n                    <ion-button #j_113 color=\"primary\" expand=\"block\" [routerLink]=\"['/signup']\">\n                        Ok\n                    </ion-button>\n                </div>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/PrivacyPolicy/PrivacyPolicy.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/PrivacyPolicy/PrivacyPolicy.module.ts ***!
  \*******************************************************/
/*! exports provided: PrivacyPolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyPageModule", function() { return PrivacyPolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PrivacyPolicy */ "./src/app/PrivacyPolicy/PrivacyPolicy.ts");
/* harmony import */ var _scripts_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scripts/pipes.module */ "./src/app/scripts/pipes.module.ts");
/* harmony import */ var _scripts_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scripts/directives.module */ "./src/app/scripts/directives.module.ts");
/* harmony import */ var _scripts_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scripts/components.module */ "./src/app/scripts/components.module.ts");
/* harmony import */ var _scripts_custom_modules_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scripts/custom-modules.module */ "./src/app/scripts/custom-modules.module.ts");











var PrivacyPolicyPageModule = /** @class */ (function () {
    function PrivacyPolicyPageModule() {
    }
    PrivacyPolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicy"]
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
                        component: _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicy"]
                    }])
            ],
            exports: [
                _PrivacyPolicy__WEBPACK_IMPORTED_MODULE_6__["PrivacyPolicy"]
            ]
        })
    ], PrivacyPolicyPageModule);
    return PrivacyPolicyPageModule;
}());



/***/ }),

/***/ "./src/app/PrivacyPolicy/PrivacyPolicy.scss":
/*!**************************************************!*\
  !*** ./src/app/PrivacyPolicy/PrivacyPolicy.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".policy-wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.policy-wrapper .policy-panel {\n  background-color: #ffffff;\n  border-radius: 8px;\n  padding: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 335px;\n}\n.policy-wrapper .policy-panel .title {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 23px;\n}\n.policy-wrapper .policy-panel .description {\n  font-size: 14px;\n  line-height: 26px;\n  margin-top: 20px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n.policy-wrapper .policy-panel ion-button {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvdGlnZ3ppL2plbmtpbnNfaTQvd29ya3NwYWNlLzY3MzQ5NS1hbmRyb2lkLzU5MDM3NS82NzM0OTUvYW5kcm9pZC9hcHAvc3JjL2FwcC9Qcml2YWN5UG9saWN5L1ByaXZhY3lQb2xpY3kuc2NzcyIsInNyYy9hcHAvUHJpdmFjeVBvbGljeS9Qcml2YWN5UG9saWN5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1o7QURFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxnQkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvUHJpdmFjeVBvbGljeS9Qcml2YWN5UG9saWN5LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9saWN5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIC5wb2xpY3ktcGFuZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAzMzVweDtcbiAgICAgICAgXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnBvbGljeS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucG9saWN5LXdyYXBwZXIgLnBvbGljeS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMzNXB4O1xufVxuLnBvbGljeS13cmFwcGVyIC5wb2xpY3ktcGFuZWwgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbn1cbi5wb2xpY3ktd3JhcHBlciAucG9saWN5LXBhbmVsIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDYwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucG9saWN5LXdyYXBwZXIgLnBvbGljeS1wYW5lbCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/PrivacyPolicy/PrivacyPolicy.ts":
/*!************************************************!*\
  !*** ./src/app/PrivacyPolicy/PrivacyPolicy.ts ***!
  \************************************************/
/*! exports provided: PrivacyPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicy", function() { return PrivacyPolicy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_helper */ "./src/app/scripts/apperyio/apperyio_helper.ts");
/* harmony import */ var _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/apperyio/apperyio_mapping_helper */ "./src/app/scripts/apperyio/apperyio_mapping_helper.ts");




var PrivacyPolicy = /** @class */ (function () {
    function PrivacyPolicy(Apperyio, $aio_mappingHelper, $aio_changeDetector) {
        this.Apperyio = Apperyio;
        this.$aio_mappingHelper = $aio_mappingHelper;
        this.$aio_changeDetector = $aio_changeDetector;
        this.currentItem = null;
        this.mappingData = {};
    }
    PrivacyPolicy.ctorParameters = function () { return [
        { type: _scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"] },
        { type: _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    PrivacyPolicy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./PrivacyPolicy.html */ "./node_modules/raw-loader/index.js!./src/app/PrivacyPolicy/PrivacyPolicy.html"),
            selector: 'page-privacy-policy',
            styles: [__webpack_require__(/*! ./PrivacyPolicy.scss */ "./src/app/PrivacyPolicy/PrivacyPolicy.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_scripts_apperyio_apperyio_helper__WEBPACK_IMPORTED_MODULE_2__["ApperyioHelperService"], _scripts_apperyio_apperyio_mapping_helper__WEBPACK_IMPORTED_MODULE_3__["ApperyioMappingHelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PrivacyPolicy);
    return PrivacyPolicy;
}());



/***/ })

}]);
//# sourceMappingURL=PrivacyPolicy-PrivacyPolicy-module-es5.js.map