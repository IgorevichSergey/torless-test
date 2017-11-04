webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/terms-conditions/terms-conditions.module": [
		"../../../../../src/app/pages/terms-conditions/terms-conditions.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: 'terms-and-conditions', loadChildren: './pages/terms-conditions/terms-conditions.module#TermsConditionsModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"torless\">\n  <div class=\"torless__header\">\n\n    <div class=\"top-header\">\n      <div class=\"connect-registration left\">\n        <!--connect-->\n        <div *ngIf=\"!loggedIn\" [ngClass]=\"{'active': isActiveLink('/login')}\" class=\"connect header__nav__item\" (click)=\"goTo('/login')\">התחברו</div>\n        <!--registration-->\n        <div *ngIf=\"!loggedIn\" [ngClass]=\"{'active': isActiveLink('/registration')}\" class=\"registration header__nav__item\" (click)=\"goTo('/registration')\">הרשמו</div>\n        <!--log out-->\n        <div *ngIf=\"loggedIn\" class=\"log-out\" (click)=\"logOut()\">להתנתק</div>\n        <!--triangle with count-->\n        <div class=\"triangle-container\">\n          <img src=\"./assets/icon/danger.svg\">\n          <span class=\"counter\">\n            0\n          </span>\n        </div>\n      </div>\n\n      <div class=\"pages center\">\n        <!--manager list-->\n        <div [ngClass]=\"{'active': isActiveLink('/welcome-page')}\" (click)=\"goTo('/manager-list')\">רשימת משתמשים</div>\n        <!--reports-->\n        <div>דוחות</div>\n        <!--cafeterias-->\n        <div [ngClass]=\"{'active': isActiveLink('/welcome-page')}\" (click)=\"goTo('/welcome-page')\">({{cafeteriasLength}})  קפיטריות</div>\n        <!--main-->\n        <div >ראשי</div>\n      </div>\n\n      <div class=\"logo right\">\n        <div>\n          <span>לוגו</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"main__content__block\">\n      <div class=\"main__container\">\n\n        <div class=\"sub-header\">\n            <app-path *ngIf=\"visible.breadcrumbs\"></app-path>\n            <div style=\"position: absolute; left: 50%; top: 10px;\">\n              <app-information *ngIf=\"visible.info\" [hintText]=\"visible.hintText\" hintPosition=\"top center\"></app-information>\n            </div>\n            <app-user-image *ngIf=\"visible.companyLogo\" [text]=\"logoText\" [image]=\"logoImage\"></app-user-image>\n          </div>\n\n          <div class=\"torless__body\">\n\n            <div class=\"content-body torless__container\">\n              <router-outlet></router-outlet>\n            </div>\n\n          </div>\n\n          <!--<app-time-select></app-time-select>-->\n          <app-modal-container></app-modal-container>\n        </div>\n       </div>\n        <div class=\"torless__footer\">\n          footer\n        </div>\n    </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main__container {\n  padding-right: 6rem;\n  padding-left: 6rem; }\n\n.torless {\n  position: relative;\n  height: 100%;\n  /**\n    styles for site header\n   */\n  /**\n    styles for site body\n    begin after sub-header (breadcrumbs, info-icon, company-logo)\n   */\n  /**\n    styles for site footer\n   */ }\n  .torless .header__nav__item {\n    font-size: 1.3rem;\n    margin-right: 1.2rem; }\n  .torless__header {\n    /**\n      styles for top header element (with a dark background)\n     */\n    /**\n      styles for sub-header, containing breadcrumbs, info-icon, company-logo\n     */ }\n    .torless__header .top-header {\n      position: relative;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      z-index: 9;\n      padding: 0.4rem 0.7rem;\n      white-space: nowrap;\n      width: 100%;\n      position: fixed;\n      top: 0;\n      left: 0;\n      background: #353b41;\n      box-sizing: border-box;\n      height: 4.5rem;\n      min-height: 72px; }\n      .torless__header .top-header .connect-registration {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        margin-right: auto;\n        margin-left: 5rem; }\n        .torless__header .top-header .connect-registration .connect {\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          cursor: pointer;\n          color: #8f8f8f;\n          border-bottom: 1px solid #8f8f8f; }\n          .torless__header .top-header .connect-registration .connect:hover {\n            color: #fff;\n            border-bottom: 1px solid #fff; }\n        .torless__header .top-header .connect-registration .registration {\n          margin-left: 0;\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          cursor: pointer;\n          color: #8f8f8f;\n          border-bottom: 1px solid #8f8f8f; }\n          .torless__header .top-header .connect-registration .registration:hover {\n            color: #fff;\n            border-bottom: 1px solid #fff; }\n        .torless__header .top-header .connect-registration .log-out {\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          cursor: pointer;\n          color: #8f8f8f;\n          border-bottom: 1px solid #8f8f8f; }\n          .torless__header .top-header .connect-registration .log-out:hover {\n            color: #fff;\n            border-bottom: 1px solid #fff; }\n        .torless__header .top-header .connect-registration .triangle-container {\n          position: relative;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          margin-left: 1.7rem;\n          margin-top: 0.5rem;\n          height: 2.7rem;\n          width: 2.7rem;\n          background: #8f8f8f;\n          cursor: pointer; }\n          .torless__header .top-header .connect-registration .triangle-container .counter {\n            display: inline-block;\n            position: absolute;\n            top: 5px;\n            right: 5px;\n            color: #353b41;\n            font-size: 0.7rem; }\n          .torless__header .top-header .connect-registration .triangle-container img {\n            width: 50%;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n        @media screen and (max-width: 940px) {\n          .torless__header .top-header .connect-registration {\n            position: absolute;\n            left: 10px; } }\n      .torless__header .top-header .pages {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        width: 40%;\n        margin: 0 auto; }\n        .torless__header .top-header .pages div {\n          margin: 0 25px;\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          cursor: pointer;\n          font-size: 1.4rem;\n          margin: 0 1.8rem;\n          color: #9c9c9c; }\n          .torless__header .top-header .pages div:hover {\n            color: #fff; }\n        @media screen and (max-width: 940px) {\n          .torless__header .top-header .pages {\n            width: 100%;\n            -webkit-box-ordinal-group: 2;\n                -ms-flex-order: 1;\n                    order: 1;\n            right: 10px;\n            padding-top: 64px; } }\n      .torless__header .top-header .logo {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n        -ms-flex-pack: end;\n        justify-content: flex-end;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        width: 12.8rem;\n        border: 1px solid #000000;\n        background: #000000;\n        transition-duration: 0.3s;\n        margin-left: 11rem; }\n        .torless__header .top-header .logo:hover {\n          background: none; }\n          .torless__header .top-header .logo:hover span {\n            color: #000 !important; }\n        .torless__header .top-header .logo div {\n          width: 100%;\n          height: 100%;\n          -ms-flex-item-align: center;\n          align-self: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n          -ms-flex-pack: center;\n          justify-content: center; }\n          .torless__header .top-header .logo div span {\n            font-size: 2rem;\n            text-align: center;\n            padding-left: 1rem;\n            color: #353b41;\n            line-height: 3.7rem; }\n            @media screen and (max-width: 940px) {\n              .torless__header .top-header .logo div span {\n                font-size: 1.8rem; } }\n          @media screen and (max-width: 940px) {\n            .torless__header .top-header .logo div {\n              padding: 5px 10px 5px 35px; } }\n        @media screen and (max-width: 940px) {\n          .torless__header .top-header .logo {\n            position: absolute;\n            right: 10px; } }\n      .torless__header .top-header .active {\n        pointer-events: none;\n        color: #fff !important;\n        border-bottom: 1px solid #fff !important; }\n    .torless__header .sub-header {\n      position: relative;\n      width: 100%;\n      height: 80px; }\n      @media screen and (max-width: 940px) {\n        .torless__header .sub-header {\n          width: 90%; } }\n  .torless__body {\n    position: relative;\n    width: 100%;\n    text-align: left;\n    min-height: auto;\n    margin: 0;\n    max-width: none;\n    margin-top: 1.7rem; }\n    @media screen and (max-width: 760px) {\n      .torless__body {\n        width: 90%; } }\n  .torless__footer {\n    margin-top: auto;\n    padding: 20px;\n    background: #353b41;\n    color: #fff; }\n\n@media screen and (max-width: 1024px) {\n  .torless__header .logo {\n    height: 3.6rem;\n    text-align: center; }\n  .torless__header .top-header .pages {\n    height: 3rem;\n    text-align: left;\n    display: block;\n    padding-top: 5rem; }\n    .torless__header .top-header .pages.center {\n      text-align: left;\n      display: inline-block;\n      padding-top: 4.7rem;\n      width: auto; }\n      .torless__header .top-header .pages.center div {\n        display: inline-block;\n        vertical-align: top;\n        position: relative; }\n  .torless__header .top-header {\n    height: auto;\n    padding-bottom: 0rem; }\n    .torless__header .top-header .connect-registration {\n      margin-left: 1rem; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("../../../../../src/app/constants/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services


var AppComponent = (function () {
    function AppComponent(router, userService, cafeteriaService, modalService, eventService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.cafeteriaService = cafeteriaService;
        this.modalService = modalService;
        this.eventService = eventService;
        this.cafeteriasLength = 0;
        this.companyName = '';
        this.cafeteriaName = '';
        this.userName = '';
        this.visible = {
            info: false,
            breadcrumbs: false,
            companyLogo: false,
            hintText: ''
        };
        /**
         * when app init
         */
        this.__isLoggedIn();
        this.__getCafeteriasList(this.loggedIn);
        router.events
            .debounce(function (value) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].timer(100); })
            .subscribe(function (data) {
            _this.currentUrl = data.url;
            /**
             * when url update
             */
            _this.__subHeaderElementsVisible(data.url);
            _this.__isLoggedIn();
            _this.__getCafeteriasList(_this.loggedIn);
            _this.__getCafeteriaInfo();
        });
        this.__getUserInfo();
        this.eventService.headerText$.subscribe(function (cafeteriaName) {
            _this.cafeteriaName = cafeteriaName;
            _this.logoText = _this.__setHeaderText();
        });
    }
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_5__modals_confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */], {
            headerText: 'Confirm modal header text!',
            bodyText: 'האם אתה בטוח שברצונך לצאת?'
        }, 'small').then(function () {
            _this.userService.logout().then(function () {
                _this.router.navigateByUrl('/login');
            });
        }, function () {
            console.log('error');
        });
    };
    AppComponent.prototype.isActiveLink = function (linkTo) {
        return this.currentUrl ? (this.currentUrl.indexOf(linkTo) === 0) : false;
    };
    AppComponent.prototype.goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    ////
    AppComponent.prototype.__subHeaderElementsVisible = function (url) {
        var key = (function (_url) {
            for (var _key in __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* PAGES_CONFIG */]['sub-header']) {
                if (_url && _url.indexOf(_key) === 0) {
                    return _key;
                }
            }
        })(url);
        if (__WEBPACK_IMPORTED_MODULE_3__constants__["b" /* PAGES_CONFIG */]['sub-header'][key]) {
            this.visible = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* PAGES_CONFIG */]['sub-header'][key];
        }
    };
    AppComponent.prototype.__isLoggedIn = function () {
        this.loggedIn = this.userService.isLoggedIn();
    };
    AppComponent.prototype.__getCafeteriasList = function (loggedIn) {
        var _this = this;
        if (loggedIn) {
            this.cafeteriaService.getUserCafeterias().then(function (response) {
                if (response && response.data && response.data.length) {
                    var cafeterias = response.data.filter(function (item) { return item && item.id && item.id > 0; });
                    _this.cafeteriasLength = cafeterias.length;
                }
                else {
                    _this.cafeteriasLength = 0;
                }
            });
        }
    };
    AppComponent.prototype.__setHeaderText = function () {
        // cafeteria_name - company_name / login_user_name
        var result = '';
        if (this.cafeteriaName) {
            result += this.cafeteriaName;
        }
        if (result) {
            result += ' - ' + this.companyName;
        }
        else {
            result += this.companyName;
        }
        if (result) {
            result += ' / ' + this.userName;
        }
        else {
            result += this.userName;
        }
        return result;
    };
    AppComponent.prototype.__getCafeteriaInfo = function () {
        var _this = this;
        this.cafeteriaService.getInfo().then(function (response) {
            if (response.data && response.data.company_image) {
                _this.logoImage = response.data.company_image;
            }
        }, function (error) {
            console.warn('error', error);
        });
    };
    AppComponent.prototype.__getUserInfo = function () {
        var _this = this;
        if (this.loggedIn) {
            this.userService.getUserInfo().then(function (response) {
                console.log('user info response ===> ', response);
                _this.companyName = response.data.company_name;
                _this.userName = response.data.name;
                _this.logoText = _this.__setHeaderText();
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["f" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["e" /* CafeteriaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["i" /* ModalService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["k" /* EventService */]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__("../../../../../src/app/pages/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register_module__ = __webpack_require__("../../../../../src/app/pages/register/register.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_sms_confirm_sms_confirm_module__ = __webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cafeteria_list_cafeteria_list_module__ = __webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_cafeteria_type_cafeteria_type_module__ = __webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_create_cafeteria_create_cafeteria_module__ = __webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_product_list_product_list_module__ = __webpack_require__("../../../../../src/app/pages/product-list/product-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_categories_list_categories_list_module__ = __webpack_require__("../../../../../src/app/pages/categories-list/categories-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_manager_create_manager_module__ = __webpack_require__("../../../../../src/app/pages/create-manager/create-manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_product_add_product_module__ = __webpack_require__("../../../../../src/app/pages/add-product/add-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_cafeteria_edit_cafeteria_module__ = __webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_edit_product_edit_product_module__ = __webpack_require__("../../../../../src/app/pages/edit-product/edit-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_manager_list_manager_list_module__ = __webpack_require__("../../../../../src/app/pages/manager-list/manager-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_manager_edit_manager_module__ = __webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_confirm_email_confirm_email_module__ = __webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_removed_products_removed_products_module__ = __webpack_require__("../../../../../src/app/pages/removed-products/removed-products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_index__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_index__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__modals__ = __webpack_require__("../../../../../src/app/modals/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// MAIN COMPONENT

// ROUTER

// PAGES MODULES
















// COMPONENTS

// SERVICES

// DIRECTIVES

// PIPES

// MODALS

// import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
// import { ManagerListComponent } from './pages/manager-list/manager-list.component';
// import { EditManagerComponent } from './pages/edit-manager/edit-manager.component';
// import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
// import { RemovedProductsComponent } from './pages/removed-products/removed-products.component';
// 3rd
// import { LodashModule } from 'ng2-lodash';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_8__pages_register_register_module__["a" /* RegisterModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_sms_confirm_sms_confirm_module__["a" /* SmsConfirmModule */],
            __WEBPACK_IMPORTED_MODULE_10__pages_cafeteria_list_cafeteria_list_module__["a" /* CafeteriaListModule */],
            __WEBPACK_IMPORTED_MODULE_11__pages_cafeteria_type_cafeteria_type_module__["a" /* CafeteriaTypeModule */],
            __WEBPACK_IMPORTED_MODULE_12__pages_create_cafeteria_create_cafeteria_module__["a" /* CreateCafeteriaModule */],
            // CreateMainCategoryModule,
            __WEBPACK_IMPORTED_MODULE_13__pages_product_list_product_list_module__["a" /* ProductListModule */],
            __WEBPACK_IMPORTED_MODULE_14__pages_categories_list_categories_list_module__["a" /* CategoriesListModule */],
            __WEBPACK_IMPORTED_MODULE_15__pages_create_manager_create_manager_module__["a" /* CreateManagerModule */],
            __WEBPACK_IMPORTED_MODULE_16__pages_add_product_add_product_module__["a" /* AddProductModule */],
            __WEBPACK_IMPORTED_MODULE_17__pages_edit_cafeteria_edit_cafeteria_module__["a" /* EditCafeteriaModule */],
            __WEBPACK_IMPORTED_MODULE_18__pages_edit_product_edit_product_module__["a" /* EditProductModule */],
            __WEBPACK_IMPORTED_MODULE_19__pages_manager_list_manager_list_module__["a" /* ManagerListModule */],
            __WEBPACK_IMPORTED_MODULE_20__pages_edit_manager_edit_manager_module__["a" /* EditManagerModule */],
            __WEBPACK_IMPORTED_MODULE_21__pages_confirm_email_confirm_email_module__["a" /* ConfirmEmailModule */],
            __WEBPACK_IMPORTED_MODULE_22__pages_removed_products_removed_products_module__["a" /* RemovedProductsModule */],
            __WEBPACK_IMPORTED_MODULE_27__modals__["a" /* ModalsModule */],
            __WEBPACK_IMPORTED_MODULE_23__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_25__directives_index__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_index__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__services__["a" /* LoggedInGuardService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["b" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["c" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["d" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["e" /* CafeteriaService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["f" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["g" /* UniversityService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["h" /* TimeSelectService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["i" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["j" /* TmpTimerService */],
            __WEBPACK_IMPORTED_MODULE_24__services__["k" /* EventService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__information_information_component__ = __webpack_require__("../../../../../src/app/components/information/information.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_path_component__ = __webpack_require__("../../../../../src/app/components/path/path.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_image_user_image_component__ = __webpack_require__("../../../../../src/app/components/user-image/user-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__ = __webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_input_component__ = __webpack_require__("../../../../../src/app/components/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_select_component__ = __webpack_require__("../../../../../src/app/components/select/select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_component__ = __webpack_require__("../../../../../src/app/components/textarea/textarea.component.ts");
/* unused harmony reexport InformationComponent */
/* unused harmony reexport PathComponent */
/* unused harmony reexport UserImageComponent */
/* unused harmony reexport ProgressBarComponent */
/* unused harmony reexport InputComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { InformationComponent } from './information/information.component';
// import { PathComponent } from './path/path.component';
// import { UserImageComponent } from './user-image/user-image.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_11__pipes__["a" /* PipesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__information_information_component__["a" /* InformationComponent */],
            __WEBPACK_IMPORTED_MODULE_1__path_path_component__["a" /* PathComponent */],
            __WEBPACK_IMPORTED_MODULE_2__user_image_user_image_component__["a" /* UserImageComponent */],
            __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_component__["a" /* TextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__select_select_component__["a" /* SelectComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__information_information_component__["a" /* InformationComponent */],
            __WEBPACK_IMPORTED_MODULE_1__path_path_component__["a" /* PathComponent */],
            __WEBPACK_IMPORTED_MODULE_2__user_image_user_image_component__["a" /* UserImageComponent */],
            __WEBPACK_IMPORTED_MODULE_3__progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_4__input_input_component__["a" /* InputComponent */],
            __WEBPACK_IMPORTED_MODULE_6__textarea_textarea_component__["a" /* TextareaComponent */],
            __WEBPACK_IMPORTED_MODULE_5__select_select_component__["a" /* SelectComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/information/information.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"information-element\">\n  <div class=\"visible-part\" [style.color]=\"iconColor\">\n    i\n  </div>\n  <div [attr.class]=\"'hidden-part ' + hintPosition\">\n    <div class=\"hint-text\" [style.color]=\"color\">\n      {{ hintText }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/information/information.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.information-element {\n  position: relative;\n  display: inline-block;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 24px; }\n  .information-element .visible-part {\n    display: inline-block;\n    width: 24px;\n    height: 24px;\n    cursor: pointer;\n    line-height: 24px;\n    text-align: center;\n    background: #ffffff;\n    color: #909090;\n    font-weight: 900;\n    font-size: 17px;\n    border-radius: 100%;\n    border: 1px solid #eaeaea; }\n  .information-element .hidden-part {\n    display: none;\n    position: absolute;\n    z-index: 20;\n    width: 300px;\n    text-align: right;\n    background: #ffffff;\n    box-shadow: 0 0 10px black;\n    border-radius: 2px;\n    padding: 5px; }\n    .information-element .hidden-part.center {\n      left: calc((310px - 24px)/2 * -1); }\n      .information-element .hidden-part.center:after {\n        left: calc(50% - 8px); }\n    .information-element .hidden-part.left {\n      left: calc((310px - 24px * 1.5) * -1); }\n      .information-element .hidden-part.left:after {\n        right: 16px; }\n    .information-element .hidden-part.right {\n      right: calc((310px - 24px * 1.5) * -1); }\n      .information-element .hidden-part.right:after {\n        left: 16px; }\n    .information-element .hidden-part.top {\n      bottom: 32px; }\n      .information-element .hidden-part.top:after {\n        content: '';\n        position: absolute;\n        /* Абсолютное позиционирование */\n        bottom: -16px;\n        border: 8px solid transparent;\n        border-top: 8px solid #ffffff; }\n    .information-element .hidden-part.bottom {\n      bottom: calc((15px + 24px) * -1); }\n    .information-element .hidden-part .hint-text {\n      color: #909090;\n      font-size: 17px; }\n  .information-element:hover .hidden-part {\n    display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/information/information.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InformationComponent = (function () {
    function InformationComponent(elementref, renderer) {
        this.elementref = elementref;
        this.renderer = renderer;
        this.hintPosition = 'top left';
        this.color = '#909090';
        this.iconColor = '#909090';
    }
    InformationComponent.prototype.ngAfterViewInit = function () {
        // this.renderer.setElementStyle(this.elementref.nativeElement, 'position', 'absolute');
        // if (this.elementHorizontalPosition === 'center') {
        //   this.renderer.setElementStyle(this.elementref.nativeElement, 'left', '50%');
        // } else if (this.elementHorizontalPosition === 'left') {
        //   this.renderer.setElementStyle(this.elementref.nativeElement, 'left', '0');
        // }
        // if (this.elementVerticalPosition === 'bottom') {
        //   this.renderer.setElementStyle(this.elementref.nativeElement, 'margin-top', 'inherit');
        // }
    };
    return InformationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hintText'),
    __metadata("design:type", String)
], InformationComponent.prototype, "hintText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('hintPosition'),
    __metadata("design:type", String)
], InformationComponent.prototype, "hintPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('color'),
    __metadata("design:type", String)
], InformationComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('iconColor'),
    __metadata("design:type", String)
], InformationComponent.prototype, "iconColor", void 0);
InformationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-information',
        template: __webpack_require__("../../../../../src/app/components/information/information.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/information/information.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _b || Object])
], InformationComponent);

var _a, _b;
//# sourceMappingURL=information.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-component\">\n  <div class=\"input-component__placeholder\" (click)=\"fieldFocus($event.target, true)\">\n    {{ placeholder }}\n  </div>\n\n  <input dir=\"rtl\" [type]=\"type\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChanged(model)\" (blur)=\"inputBlur(model)\">\n\n  <div class=\"input-component__error-message\" [ngClass]=\"{'visible': showError}\">\n    {{ errorText }}\n  </div>\n\n  <div *ngIf=\"showLink\" class=\"input-component__input-link\"\n       [ngClass]=\"{\n        'top-left': linkPosition === 'top-left',\n        'bottom-right': linkPosition === 'bottom-right',\n        'bottom-left': linkPosition === 'bottom-left'\n        }\"\n       (click)=\"inputLinkClick()\">\n    {{ linkText }}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-component {\n  position: relative;\n  margin-bottom: 3.6rem;\n  height: 4rem;\n  margin-top: 2rem; }\n  .input-component input {\n    background: inherit;\n    width: 100%;\n    height: 4rem;\n    font-size: 1.1rem;\n    font-weight: 300; }\n  .input-component__placeholder {\n    position: absolute;\n    height: 100%;\n    line-height: 4rem;\n    font-size: 1.5rem;\n    width: 100%;\n    top: 0;\n    right: 0;\n    vertical-align: middle;\n    text-align: right;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: top 0.2s, font-size 0.2s;\n    color: #a2a2a2; }\n    .input-component__placeholder.focused {\n      top: -16px;\n      right: 0;\n      font-size: 0.7rem; }\n  .input-component__error-message {\n    position: absolute;\n    right: 0;\n    font-size: 0;\n    color: #ff5b57;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: font-size 0.25s; }\n    .input-component__error-message.visible {\n      font-size: 0.8rem; }\n  .input-component__input-link {\n    position: absolute;\n    font-size: .7rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n    .input-component__input-link.top-left {\n      top: -16px;\n      left: 0; }\n    .input-component__input-link.bottom-right {\n      bottom: -16px;\n      right: 0; }\n    .input-component__input-link.bottom-left {\n      bottom: -16px;\n      left: 0; }\n    .input-component__input-link:hover {\n      text-decoration: underline; }\n  .input-component .forgot-password {\n    position: absolute;\n    left: 0;\n    top: -16px;\n    cursor: pointer;\n    font-size: 0.7rem;\n    border-bottom: 1px solid #656565; }\n    .input-component .forgot-password:hover {\n      color: #000;\n      border-bottom: 1px solid #000; }\n\n.input-line .app-input-placeholder {\n  font-size: 1.2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    function InputComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        /**
         * Outputs
         * @type {EventEmitter<any>}
         */
        this.linkAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.invalid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    //   @Input('placeholderMessage') placeholderMessage: string;
    //   @Input('errorMessage') errorMessage: string;
    //   @Input('invalidMessage') invalidMessage: string;
    //
    //   @Input('error') error: boolean;
    //   @Input('invalid') invalid: boolean;
    //
    //   @Input('ngModel') ngModel: any;
    //
    //   // todo: add pattern and showing invalid messages
    //
    //
    //   private _placeholderElement: any;
    //   private _errorElement: any;
    //   private _invalidElement: any;
    //
    //   constructor(
    //     private renderer: Renderer,
    //     private elementRef: ElementRef
    //   ) {
    //
    //   }
    //
    InputComponent.prototype.modelChanged = function (model) {
        var _this = this;
        setTimeout((function () {
            if (_this.formatter) {
                _this.model = _this.formatter(model);
            }
            _this.output.emit(_this.model);
        }).bind(this), 1);
    };
    InputComponent.prototype.ngOnChanges = function (values) {
        console.log('values ===> ', values);
        // if (values && values.error && values.error.currentValue) {
        //   this._setErrorInputField(true);
        // }
        // if (values && values.error && values.error.previousValue && !values.error.currentValue) {
        //   this._setErrorInputField(false);
        // }
        // if (values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
        //   this._removeErrorText();
        //   this._addErrorText();
        // }
        // if (values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
        //   this.renderer.setElementClass(this._placeholderElement, 'focused', true);
        // }
    };
    //
    InputComponent.prototype.ngAfterViewInit = function () {
        this.modelChanged(this.model);
        // this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
        // this._placeholderElement.innerHTML = this.placeholderMessage;
        // this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
        //
        // // set focus on input, when click on placeholder
        // this._placeholderElement.addEventListener('click', () => {
        //   this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
        // });
        //
        // if(this.ngModel) {
        //   this.renderer.setElementClass(this._placeholderElement, 'focused', true);
        // }
    };
    InputComponent.prototype.fieldFocus = function (element, add) {
        this.renderer.setElementClass(element, 'focused', add);
        if (add) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('input'), 'focus');
        }
    };
    InputComponent.prototype.inputBlur = function (model) {
        var placeholderElement = this.elementRef.nativeElement.querySelector('.input-component__placeholder');
        if (!model && model !== 0) {
            this.fieldFocus(placeholderElement, false);
        }
        else if (this.pattern) {
            this.invalid.emit(this.pattern.test(model));
        }
    };
    InputComponent.prototype.inputLinkClick = function () {
        this.linkAction.emit();
    };
    return InputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('model'),
    __metadata("design:type", Object)
], InputComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('type'),
    __metadata("design:type", String)
], InputComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('placeholder'),
    __metadata("design:type", String)
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('errorText'),
    __metadata("design:type", String)
], InputComponent.prototype, "errorText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('showError'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "showError", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('showLink'),
    __metadata("design:type", Boolean)
], InputComponent.prototype, "showLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('linkText'),
    __metadata("design:type", String)
], InputComponent.prototype, "linkText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('linkPosition'),
    __metadata("design:type", String)
], InputComponent.prototype, "linkPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('pattern'),
    __metadata("design:type", Object)
], InputComponent.prototype, "pattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('validationError'),
    __metadata("design:type", String)
], InputComponent.prototype, "validationError", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('formatter'),
    __metadata("design:type", Function)
], InputComponent.prototype, "formatter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('linkAction'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], InputComponent.prototype, "linkAction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('output'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _b || Object)
], InputComponent.prototype, "output", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('invalid'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _c || Object)
], InputComponent.prototype, "invalid", void 0);
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-input',
        template: __webpack_require__("../../../../../src/app/components/input/input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/input/input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _e || Object])
], InputComponent);

var _a, _b, _c, _d, _e;
// // import {
// //   Directive, Input, Renderer, ElementRef, OnInit, AfterViewInit, HostListener, HostBinding,
// //   OnChanges
// // } from '@angular/core';
//
// // @Component({
// //   selector: '[appInput]'
// // })
// export class InputDirective implements AfterViewInit, OnChanges {
//   @Input('placeholderMessage') placeholderMessage: string;
//   @Input('errorMessage') errorMessage: string;
//   @Input('invalidMessage') invalidMessage: string;
//
//   @Input('error') error: boolean;
//   @Input('invalid') invalid: boolean;
//
//   @Input('ngModel') ngModel: any;
//
//   // todo: add pattern and showing invalid messages
//
//
//   private _placeholderElement: any;
//   private _errorElement: any;
//   private _invalidElement: any;
//
//   constructor(
//     private renderer: Renderer,
//     private elementRef: ElementRef
//   ) {
//
//   }
//
//   ngOnChanges(values) {
//     if(values && values.error && values.error.currentValue) {
//       this._setErrorInputField(true);
//     }
//     if(values && values.error && values.error.previousValue && !values.error.currentValue) {
//       this._setErrorInputField(false);
//     }
//     if(values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
//       this._removeErrorText();
//       this._addErrorText();
//     }
//     if(values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   ngAfterViewInit() {
//     this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//     this._placeholderElement.innerHTML = this.placeholderMessage;
//     this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
//
//     // set focus on input, when click on placeholder
//     this._placeholderElement.addEventListener('click', () => {
//       this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
//     });
//
//     if(this.ngModel) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   @HostListener('focus') onFocus() {
//     this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//   }
//
//   @HostListener('blur') onBlur() {
//     if(!this.elementRef.nativeElement.value) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', false);
//       this._setErrorInputField(false);
//     }
//   }
//
//
//   ///////
//   private _setErrorInputField(status: boolean): void {
//     if(status) {
//       this._addErrorText();
//       this._addInputBorder('#ff5b57');
//     } else {
//       this._removeErrorText();
//       this._removeInputBorder();
//     }
//   }
//   private _addErrorText() {
//     if(this.errorMessage) {
//       this._errorElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//       this._errorElement.innerHTML = this.errorMessage;
//       this.renderer.setElementClass(this._errorElement, 'app-input-error-message', true);
//     }
//   }
//
//   private _removeErrorText() {
//     if(this._errorElement) {
//       this._errorElement.remove();
//     }
//   }
//
//   private _addInputBorder(color) {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', 'border-bottom: 1px solid ' + color + ';');
//   }
//
//   private _removeInputBorder() {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', null);
//   }
// }
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/path/path.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"path-component\">\n  <span class=\"previous\">ראשי</span>\n  <span>></span>\n  <span class=\"current\">התחבר/י</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/path/path.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".path-component {\n  position: relative;\n  margin-top: 0.6rem;\n  display: inline-block;\n  vertical-align: top;\n  width: 24%;\n  margin-right: 10%;\n  white-space: nowrap; }\n  .path-component .previous {\n    color: #000000;\n    border-bottom: 2px solid #838383;\n    cursor: pointer; }\n  .path-component .current {\n    color: #9b9b9b;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/path/path.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PathComponent = (function () {
    function PathComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    PathComponent.prototype.ngOnInit = function () {
    };
    PathComponent.prototype.logOut = function () {
        this.userService.logout();
        this._goTo('/login');
    };
    ///
    PathComponent.prototype._goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    return PathComponent;
}());
PathComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-path',
        template: __webpack_require__("../../../../../src/app/components/path/path.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/path/path.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */]) === "function" && _b || Object])
], PathComponent);

var _a, _b;
//# sourceMappingURL=path.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-bar\">\n  <div class=\"background-container\" [style.width]=\"width + '%'\"></div>\n  <div class=\"points\">\n    <div class=\"point\" *ngFor=\"let dot of dotsArray; let index = index;\" [style.right]=\"getRightPosition(index)\" [ngClass]=\"{'filled': isFilled(index)}\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-bar {\n  position: relative;\n  height: 2px;\n  background: #c8c8c8;\n  width: 100%;\n  margin-left: auto;\n  margin-bottom: 40px; }\n  .progress-bar .background-container {\n    position: absolute;\n    height: 2px;\n    right: 0;\n    width: 0;\n    background: #fff557;\n    transition: width 0.5s; }\n  .progress-bar .point {\n    position: absolute;\n    display: inline-block;\n    bottom: -5px;\n    width: 12px;\n    height: 12px;\n    border-radius: 100%;\n    background: #c8c8c8; }\n    .progress-bar .point.filled {\n      background: #fff557; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.dots = 3;
        this.dotsArray = new Array(this.dots);
    }
    ProgressBarComponent.prototype.getRightPosition = function (index) {
        var step = 100 / this.dots, result = step * (index + 1) + '%';
        return result;
    };
    ProgressBarComponent.prototype.isFilled = function (index) {
        var step = 100 / this.dots, currentPosition = step * (index + 1);
        return currentPosition <= this.width;
    };
    return ProgressBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('width'),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('dots'),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "dots", void 0);
ProgressBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-progress-bar',
        template: __webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/progress-bar/progress-bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"select-component\">\n\n  <div class=\"select-component__placeholder\" (click)=\"placeholderFocus(); inputFocus()\" [ngClass]=\"{'focused': inputFocused}\">\n    {{ placeholder }}\n  </div>\n\n  <!--<div *ngIf=\"value\" class=\"select-component__close\" (click)=\"resetValue()\"></div>-->\n\n\n\n\n  <input *ngIf=\"!value\" dir=\"rtl\" type=\"text\" #input\n         [(ngModel)]=\"search\" (focus)=\"setFocus(true); showList(true)\" (keyup)=\"filterGenerate(search)\">\n\n  <div *ngIf=\"!value\" class=\"select-component__triangle\" (click)=\"showList(true)\"></div>\n\n  <!--<div *ngIf=\"value\" class=\"\">-->\n    <!--{{ value }}-->\n  <!--</div>-->\n  <input *ngIf=\"value\" dir=\"rtl\" type=\"text\" [(ngModel)]=\"value\" (focus)=\"setFocus(true); showList(true)\" (blur)=\"valueReset(value)\" (keyup)=\"filterGenerate(value)\">\n  <!--select-component__value-->\n\n  <div class=\"select-component__list\" *ngIf=\"list\" [ngClass]=\"{'visible': visibleList}\">\n    <div class=\"list-element\" *ngFor=\"let item of list | filter: filterParams;\" (click)=\"selectItem(item)\">\n      {{ key ? item[key] : item }}\n    </div>\n    <div dir=\"rtl\" class=\"list-element\" *ngIf=\"filterParams && (list | filter: filterParams)?.length === 0\">\n      אין פריטים עם פרמטר '{{filterParams.value}}'\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-component {\n  position: relative; }\n  .select-component > div {\n    font-size: 1.1rem;\n    background: inherit;\n    font-weight: 500;\n    color: #999999; }\n  .select-component input {\n    background: inherit;\n    width: 100%;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    font-size: 1.1rem;\n    font-weight: 500;\n    color: #999999;\n    padding-left: 10px; }\n  .select-component__triangle {\n    position: absolute;\n    bottom: 0;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    cursor: pointer; }\n    .select-component__triangle:after {\n      content: '\\25BC';\n      font-size: 0.6rem;\n      color: #999999; }\n  .select-component__close {\n    position: absolute;\n    bottom: 0;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    cursor: pointer; }\n    .select-component__close:after {\n      content: '\\D7';\n      font-size: 0.9rem;\n      color: #999999; }\n  .select-component__placeholder {\n    position: absolute;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    width: 100%;\n    top: 0;\n    right: 0;\n    vertical-align: middle;\n    text-align: right;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 1.1rem;\n    font-weight: 500;\n    transition: top 0.2s, font-size 0.2s;\n    color: #999999; }\n    .select-component__placeholder.focused {\n      top: -10px;\n      right: 0;\n      font-size: 0.7rem !important;\n      height: auto;\n      line-height: inherit; }\n  .select-component__value {\n    height: 2.7rem;\n    line-height: 2.7rem;\n    width: 100%;\n    vertical-align: middle;\n    text-align: right;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    font-size: 1.1rem;\n    transition: top 0.2s, font-size 0.2s;\n    border-bottom: 1px solid #c8c8c8;\n    font-weight: 500;\n    color: #999999; }\n    .select-component__value.focused {\n      top: -16px;\n      right: 0;\n      font-size: 0.7rem; }\n  .select-component__list {\n    position: absolute;\n    z-index: 1;\n    width: 100%;\n    max-height: 0;\n    overflow: auto;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);\n    border-radius: 3px;\n    transition: max-height 0.2s;\n    direction: rtl; }\n    .select-component__list .list-element {\n      height: 2.7rem;\n      line-height: 2.7rem;\n      background: #fff;\n      color: #999999;\n      padding: 0 10px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      cursor: pointer;\n      font-weight: 500;\n      font-size: 1.1rem; }\n      .select-component__list .list-element:hover {\n        background: #d0d5d5;\n        border-right: 1px solid #fff;\n        border-left: 1px solid #fff;\n        padding: 0 9px; }\n    .select-component__list.visible {\n      max-height: calc(2.7rem * 6); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/select/select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectComponent = (function () {
    function SelectComponent(elementRef) {
        this.elementRef = elementRef;
        // set item output eventemitter
        this.setItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        console.log('add select init');
    }
    SelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        document.addEventListener('click', (function (event) {
            var specifiedElement = _this.elementRef.nativeElement;
            var isClickInside = specifiedElement.contains(event.target);
            if (!isClickInside) {
                _this.showList(false);
                if (!_this.value && (!_this.filterParams || !_this.filterParams.value)) {
                    _this.setFocus(false);
                }
            }
        }).bind(this));
        if (this.value) {
            this.setFocus(true);
        }
    };
    SelectComponent.prototype.ngOnChanges = function (values) {
        // console.log('values ==> ', values);
        if (values && values.value && values.value.currentValue && (values.value.currentValue !== values.value.previousValue)) {
            this.setFocus(true);
        }
        if (values && values.value && !values.value.currentValue && values.value.previousValue) {
            this.filterParams = null;
        }
    };
    SelectComponent.prototype.filterGenerate = function (search) {
        this.filterParams = {
            by: this.key,
            value: search
        };
    };
    SelectComponent.prototype.selectItem = function (item) {
        this.value = this.key ? item[this.key] : item;
        this.filterParams = null;
        this.visibleList = false;
        this.search = '';
        this.setFocus(true);
        this.setItem.emit(item);
    };
    SelectComponent.prototype.showList = function (show) {
        this.visibleList = show;
        // this.renderer.setElementClass(this.listElement.nativeElement, 'visible', show);
    };
    SelectComponent.prototype.resetValue = function () {
        this.value = null;
        this.inputFocused = false;
        this.setItem.emit();
    };
    SelectComponent.prototype.setFocus = function (focus) {
        this.inputFocused = focus;
    };
    SelectComponent.prototype.placeholderFocus = function () {
        this.inputFocused = true;
    };
    SelectComponent.prototype.inputFocus = function () {
        if (this.input) {
            this.input.nativeElement.focus();
            this.inputFocused = true;
        }
    };
    SelectComponent.prototype.valueReset = function (value) {
        if (!value) {
            this.setItem.emit();
        }
    };
    return SelectComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('list'),
    __metadata("design:type", Array)
], SelectComponent.prototype, "list", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('key'),
    __metadata("design:type", String)
], SelectComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('placeholder'),
    __metadata("design:type", String)
], SelectComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('value'),
    __metadata("design:type", String)
], SelectComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('valueKey'),
    __metadata("design:type", String)
], SelectComponent.prototype, "valueKey", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('setItem'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], SelectComponent.prototype, "setItem", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object)
], SelectComponent.prototype, "input", void 0);
SelectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-select',
        template: __webpack_require__("../../../../../src/app/components/select/select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/select/select.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _c || Object])
], SelectComponent);

var _a, _b, _c;
//# sourceMappingURL=select.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/textarea/textarea.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-component\">\n  <div class=\"input-component__placeholder\" (click)=\"fieldFocus($event.target, true)\">\n    {{ placeholder }}\n  </div>\n\n  <textarea dir=\"rtl\" [(ngModel)]=\"model\" (ngModelChange)=\"modelChanged(model)\" (blur)=\"inputBlur(model)\"></textarea>\n\n  <div class=\"input-component__error-message\" [ngClass]=\"{'visible': showError}\">\n    {{ errorText }}\n  </div>\n\n  <div *ngIf=\"showLink\" class=\"input-component__input-link\"\n       [ngClass]=\"{\n        'top-left': linkPosition === 'top-left',\n        'bottom-right': linkPosition === 'bottom-right',\n        'bottom-left': linkPosition === 'bottom-left'\n        }\"\n       (click)=\"inputLinkClick()\">\n    {{ linkText }}\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/textarea/textarea.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-component {\n  position: relative;\n  margin-bottom: 3.6rem;\n  height: 4rem;\n  margin-top: 2rem; }\n  .input-component textarea {\n    background: inherit;\n    width: 100%;\n    height: 4rem;\n    font-size: 1.1rem;\n    font-weight: 300;\n    resize: none; }\n  .input-component__placeholder {\n    position: absolute;\n    height: 100%;\n    line-height: 4rem;\n    font-size: 1.5rem;\n    width: 100%;\n    top: 0;\n    right: 0;\n    vertical-align: middle;\n    text-align: right;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: top 0.2s, font-size 0.2s;\n    color: #a2a2a2; }\n    .input-component__placeholder.focused {\n      top: -16px;\n      right: 0;\n      font-size: 0.7rem; }\n  .input-component__error-message {\n    position: absolute;\n    right: 0;\n    font-size: 0;\n    color: #ff5b57;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    transition: font-size 0.25s; }\n    .input-component__error-message.visible {\n      font-size: 0.8rem; }\n  .input-component__input-link {\n    position: absolute;\n    font-size: .7rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n    .input-component__input-link.top-left {\n      top: -16px;\n      left: 0; }\n    .input-component__input-link.bottom-right {\n      bottom: -16px;\n      right: 0; }\n    .input-component__input-link.bottom-left {\n      bottom: -16px;\n      left: 0; }\n    .input-component__input-link:hover {\n      text-decoration: underline; }\n  .input-component .forgot-password {\n    position: absolute;\n    left: 0;\n    top: -16px;\n    cursor: pointer;\n    font-size: 0.7rem;\n    border-bottom: 1px solid #656565; }\n    .input-component .forgot-password:hover {\n      color: #000;\n      border-bottom: 1px solid #000; }\n\n.input-line .app-input-placeholder {\n  font-size: 1.2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/textarea/textarea.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextareaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextareaComponent = (function () {
    function TextareaComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        /**
         * Outputs
         * @type {EventEmitter<any>}
         */
        this.linkAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.output = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.invalid = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    //   @Input('placeholderMessage') placeholderMessage: string;
    //   @Input('errorMessage') errorMessage: string;
    //   @Input('invalidMessage') invalidMessage: string;
    //
    //   @Input('error') error: boolean;
    //   @Input('invalid') invalid: boolean;
    //
    //   @Input('ngModel') ngModel: any;
    //
    //   // todo: add pattern and showing invalid messages
    //
    //
    //   private _placeholderElement: any;
    //   private _errorElement: any;
    //   private _invalidElement: any;
    //
    //   constructor(
    //     private renderer: Renderer,
    //     private elementRef: ElementRef
    //   ) {
    //
    //   }
    //
    TextareaComponent.prototype.modelChanged = function (model) {
        // console.log('event ==> ', event);
        // this.model = this.test(event);
        this.output.emit(model);
        // if (this.formatter) {
        //   setTimeout((() => {
        //
        //     this.model = this.formatter(model);
        //     // console.log('this.model', this.model)
        //     this.output.emit(this.model);
        //
        //   }).bind(this), 1);
        // } else {
        //   this.output.emit(this.model);
        // }
    };
    TextareaComponent.prototype.ngOnChanges = function (values) {
        // console.log('textarea values ===> ', values);
        // if (values && values.error && values.error.currentValue) {
        //   this._setErrorInputField(true);
        // }
        // if (values && values.error && values.error.previousValue && !values.error.currentValue) {
        //   this._setErrorInputField(false);
        // }
        // if (values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
        //   this._removeErrorText();
        //   this._addErrorText();
        // }
        // if (values && values.model && values.model.currentValue && values.model.currentValue !== values.model.previousValue ) {
        //   this.model = values.model.currentValue;
        // }
    };
    //
    TextareaComponent.prototype.ngAfterViewInit = function () {
        this.modelChanged(this.model);
        // this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
        // this._placeholderElement.innerHTML = this.placeholderMessage;
        // this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
        //
        // // set focus on input, when click on placeholder
        // this._placeholderElement.addEventListener('click', () => {
        //   this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
        // });
        //
        // if(this.ngModel) {
        //   this.renderer.setElementClass(this._placeholderElement, 'focused', true);
        // }
    };
    TextareaComponent.prototype.fieldFocus = function (element, add) {
        this.renderer.setElementClass(element, 'focused', add);
        if (add) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('textarea'), 'focus');
        }
    };
    TextareaComponent.prototype.inputBlur = function (model) {
        var placeholderElement = this.elementRef.nativeElement.querySelector('.input-component__placeholder');
        if (!model && model !== 0) {
            this.fieldFocus(placeholderElement, false);
        }
        else if (this.pattern) {
            this.invalid.emit(this.pattern.test(model));
        }
    };
    TextareaComponent.prototype.inputLinkClick = function () {
        this.linkAction.emit();
    };
    // todo: use as PhoneFormat
    TextareaComponent.prototype.test = function (t) {
        var numbers = t ? t.replace(/\D/g, '') : '', dashes = {
            4: '-',
            7: '-',
            9: '-'
        }, len = (numbers.length <= 10) ? numbers.length : 10;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += (dashes[i] || '') + numbers[i];
        }
        console.log('result ===> ', result);
        // console.log('t', t);
        return result;
    };
    return TextareaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('model'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('placeholder'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('errorText'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "errorText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('showError'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "showError", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('showLink'),
    __metadata("design:type", Boolean)
], TextareaComponent.prototype, "showLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('linkText'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "linkText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('linkPosition'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "linkPosition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('pattern'),
    __metadata("design:type", Object)
], TextareaComponent.prototype, "pattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('validationError'),
    __metadata("design:type", String)
], TextareaComponent.prototype, "validationError", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('formatter'),
    __metadata("design:type", Function)
], TextareaComponent.prototype, "formatter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('linkAction'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], TextareaComponent.prototype, "linkAction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('output'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _b || Object)
], TextareaComponent.prototype, "output", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Output */])('invalid'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _c || Object)
], TextareaComponent.prototype, "invalid", void 0);
TextareaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-textarea',
        template: __webpack_require__("../../../../../src/app/components/textarea/textarea.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/textarea/textarea.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _e || Object])
], TextareaComponent);

var _a, _b, _c, _d, _e;
// // import {
// //   Directive, Input, Renderer, ElementRef, OnInit, AfterViewInit, HostListener, HostBinding,
// //   OnChanges
// // } from '@angular/core';
//
// // @Component({
// //   selector: '[appInput]'
// // })
// export class InputDirective implements AfterViewInit, OnChanges {
//   @Input('placeholderMessage') placeholderMessage: string;
//   @Input('errorMessage') errorMessage: string;
//   @Input('invalidMessage') invalidMessage: string;
//
//   @Input('error') error: boolean;
//   @Input('invalid') invalid: boolean;
//
//   @Input('ngModel') ngModel: any;
//
//   // todo: add pattern and showing invalid messages
//
//
//   private _placeholderElement: any;
//   private _errorElement: any;
//   private _invalidElement: any;
//
//   constructor(
//     private renderer: Renderer,
//     private elementRef: ElementRef
//   ) {
//
//   }
//
//   ngOnChanges(values) {
//     if(values && values.error && values.error.currentValue) {
//       this._setErrorInputField(true);
//     }
//     if(values && values.error && values.error.previousValue && !values.error.currentValue) {
//       this._setErrorInputField(false);
//     }
//     if(values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
//       this._removeErrorText();
//       this._addErrorText();
//     }
//     if(values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   ngAfterViewInit() {
//     this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//     this._placeholderElement.innerHTML = this.placeholderMessage;
//     this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
//
//     // set focus on input, when click on placeholder
//     this._placeholderElement.addEventListener('click', () => {
//       this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
//     });
//
//     if(this.ngModel) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   @HostListener('focus') onFocus() {
//     this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//   }
//
//   @HostListener('blur') onBlur() {
//     if(!this.elementRef.nativeElement.value) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', false);
//       this._setErrorInputField(false);
//     }
//   }
//
//
//   ///////
//   private _setErrorInputField(status: boolean): void {
//     if(status) {
//       this._addErrorText();
//       this._addInputBorder('#ff5b57');
//     } else {
//       this._removeErrorText();
//       this._removeInputBorder();
//     }
//   }
//   private _addErrorText() {
//     if(this.errorMessage) {
//       this._errorElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//       this._errorElement.innerHTML = this.errorMessage;
//       this.renderer.setElementClass(this._errorElement, 'app-input-error-message', true);
//     }
//   }
//
//   private _removeErrorText() {
//     if(this._errorElement) {
//       this._errorElement.remove();
//     }
//   }
//
//   private _addInputBorder(color) {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', 'border-bottom: 1px solid ' + color + ';');
//   }
//
//   private _removeInputBorder() {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', null);
//   }
// }
//# sourceMappingURL=textarea.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-image/user-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-image-component\">\n  <!--<div class=\"user-description\">קרנף בקמפוס - רשת מסעדות / מנהל/ת אדמין ראשי - שי יטח</div>-->\n  <div class=\"user-description\">{{ text }}</div>\n  <img app-check-image defaultImage=\"./assets/icon/image-example.png\" [src]=\"image\" [image]=\"image\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-image/user-image.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-image-component {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: right; }\n  .user-image-component .user-description {\n    padding: 5px 10px;\n    font-size: 1.4rem;\n    font-weight: 900;\n    color: #979797;\n    width: 320px;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center; }\n  .user-image-component img {\n    width: 100%;\n    height: auto;\n    max-width: 80px;\n    max-height: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-image/user-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserImageComponent = (function () {
    function UserImageComponent() {
    }
    UserImageComponent.prototype.ngOnInit = function () {
    };
    return UserImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('text'),
    __metadata("design:type", String)
], UserImageComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('image'),
    __metadata("design:type", String)
], UserImageComponent.prototype, "image", void 0);
UserImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-user-image',
        template: __webpack_require__("../../../../../src/app/components/user-image/user-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-image/user-image.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UserImageComponent);

//# sourceMappingURL=user-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/constants/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_config_constant__ = __webpack_require__("../../../../../src/app/constants/pages-config.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reg_exps_constant__ = __webpack_require__("../../../../../src/app/constants/reg-exps.constant.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__pages_config_constant__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__reg_exps_constant__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/constants/pages-config.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES_CONFIG; });
var PAGES_CONFIG = {
    'sub-header': {
        '/login': {
            info: true,
            breadcrumbs: true,
            companyLogo: false,
            hintText: 'דף הכניסה'
        },
        '/registration': {
            info: true,
            breadcrumbs: true,
            companyLogo: false,
            hintText: 'דף רישום'
        },
        '/sms-confirm': {
            info: true,
            breadcrumbs: true,
            companyLogo: false,
            hintText: 'דף אישור'
        },
        '/welcome-page': {
            info: true,
            breadcrumbs: true,
            companyLogo: true,
            hintText: 'רשימת קפטריה'
        },
        '/edit-cafeteria': {
            info: true,
            breadcrumbs: true,
            companyLogo: true,
            hintText: 'לערוך את הקפטריה'
        },
        '/manager-list': {
            info: true,
            breadcrumbs: true,
            companyLogo: true,
            hintText: 'רשימת מנהלים'
        },
        '/add-product': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/product-list': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/removed-products': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/categories-list': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/cafeteria-type': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/create-cafeteria': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/edit-manager': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        },
        '/edit-product': {
            info: false,
            breadcrumbs: true,
            companyLogo: true
        }
    }
};
//# sourceMappingURL=pages-config.constant.js.map

/***/ }),

/***/ "../../../../../src/app/constants/reg-exps.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REG_EXPS; });
var REG_EXPS = {
    'email': /(.+)@(.+){2,}\.(.+){2,}/,
    'phone': /^\d{7}$/,
    'password': /^[a-zA-Z0-6]{6,20}$/
};
//# sourceMappingURL=reg-exps.constant.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/cafeteria/createdCafeteria.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedCafeteria; });
// todo: work time
var CreatedCafeteria = (function () {
    function CreatedCafeteria(cafeteria, work_time) {
        if (cafeteria === void 0) { cafeteria = {
            caf_type: null,
            caf_name: '',
            caf_university_id: null,
            caf_university_building_id: null,
            caf_kosher_type: null,
            caf_veg_type: null,
            caf_address: '',
            caf_description: ''
        }; }
        if (work_time === void 0) { work_time = []; }
        this.cafeteria = cafeteria;
        this.work_time = work_time;
    }
    return CreatedCafeteria;
}());

//# sourceMappingURL=createdCafeteria.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/cafeteria/updatedCafeteria.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatedCafeteria; });
var UpdatedCafeteria = (function () {
    function UpdatedCafeteria(cafeteria, work_time) {
        if (cafeteria === void 0) { cafeteria = {
            up_caf_id: null,
            up_caf_type: null,
            up_caf_name: '',
            up_caf_university_id: null,
            up_caf_university_building_id: null,
            up_caf_kosher_type: null,
            up_caf_veg_type: null,
            up_caf_address: '',
            up_caf_description: ''
        }; }
        if (work_time === void 0) { work_time = []; }
        this.cafeteria = cafeteria;
        this.work_time = work_time;
    }
    return UpdatedCafeteria;
}());

//# sourceMappingURL=updatedCafeteria.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_loginUser_class__ = __webpack_require__("../../../../../src/app/custom-classes/user/loginUser.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_createdUser_class__ = __webpack_require__("../../../../../src/app/custom-classes/user/createdUser.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_createdManagerUser_class__ = __webpack_require__("../../../../../src/app/custom-classes/user/createdManagerUser.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainCategory_createdMainCategory_class__ = __webpack_require__("../../../../../src/app/custom-classes/mainCategory/createdMainCategory.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cafeteria_createdCafeteria_class__ = __webpack_require__("../../../../../src/app/custom-classes/cafeteria/createdCafeteria.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mainProduct_createdMainProduct_class__ = __webpack_require__("../../../../../src/app/custom-classes/mainProduct/createdMainProduct.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cafeteria_updatedCafeteria_class__ = __webpack_require__("../../../../../src/app/custom-classes/cafeteria/updatedCafeteria.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mainCategory_updatedMainCategory_class__ = __webpack_require__("../../../../../src/app/custom-classes/mainCategory/updatedMainCategory.class.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__user_loginUser_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__user_createdUser_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__user_createdManagerUser_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__mainCategory_createdMainCategory_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__cafeteria_createdCafeteria_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__mainProduct_createdMainProduct_class__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__mainProduct_createdMainProduct_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__mainProduct_createdMainProduct_class__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__mainProduct_createdMainProduct_class__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__cafeteria_updatedCafeteria_class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__mainCategory_updatedMainCategory_class__["a"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/mainCategory/createdMainCategory.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedMainCategoryClass; });
var CreatedMainCategoryClass = (function () {
    function CreatedMainCategoryClass(ct_caf_id, ct_name) {
        if (ct_caf_id === void 0) { ct_caf_id = null; }
        if (ct_name === void 0) { ct_name = ''; }
        this.ct_caf_id = ct_caf_id;
        this.ct_name = ct_name;
    }
    return CreatedMainCategoryClass;
}());

//# sourceMappingURL=createdMainCategory.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/mainCategory/updatedMainCategory.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatedMainCategory; });
var UpdatedMainCategory = (function () {
    function UpdatedMainCategory(upm_caf_id, upm_cat_id, upm_cat_name, upm_cat_number) {
        if (upm_caf_id === void 0) { upm_caf_id = null; }
        if (upm_cat_id === void 0) { upm_cat_id = null; }
        if (upm_cat_name === void 0) { upm_cat_name = ''; }
        if (upm_cat_number === void 0) { upm_cat_number = null; }
        this.upm_caf_id = upm_caf_id;
        this.upm_cat_id = upm_cat_id;
        this.upm_cat_name = upm_cat_name;
        this.upm_cat_number = upm_cat_number;
    }
    return UpdatedMainCategory;
}());

//# sourceMappingURL=updatedMainCategory.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/mainProduct/createdMainProduct.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoubleExtraProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ExtraInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ExtraCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CreatedProduct; });
// CLASSES
var DoubleExtraProduct = (function () {
    function DoubleExtraProduct(double_extra_pr_name, double_extra_pr_price) {
        if (double_extra_pr_name === void 0) { double_extra_pr_name = ''; }
        if (double_extra_pr_price === void 0) { double_extra_pr_price = ''; }
        this.double_extra_pr_name = double_extra_pr_name;
        this.double_extra_pr_price = double_extra_pr_price;
    }
    return DoubleExtraProduct;
}());

var ExtraInfo = (function () {
    function ExtraInfo(extra_pr_name, extra_pr_price, extra_pr_descr, double_extra_products) {
        if (extra_pr_name === void 0) { extra_pr_name = ''; }
        if (extra_pr_price === void 0) { extra_pr_price = ''; }
        if (extra_pr_descr === void 0) { extra_pr_descr = ''; }
        if (double_extra_products === void 0) { double_extra_products = []; }
        this.extra_pr_name = extra_pr_name;
        this.extra_pr_price = extra_pr_price;
        this.extra_pr_descr = extra_pr_descr;
        this.double_extra_products = double_extra_products;
    }
    return ExtraInfo;
}());

var ExtraCategories = (function () {
    function ExtraCategories(extra_cat_name, extra_info) {
        if (extra_cat_name === void 0) { extra_cat_name = ''; }
        if (extra_info === void 0) { extra_info = []; }
        this.extra_cat_name = extra_cat_name;
        this.extra_info = extra_info;
    }
    return ExtraCategories;
}());

var CreatedProduct = (function () {
    function CreatedProduct(pr_caf_id, pr_cat_id, product, extra_categories) {
        if (pr_caf_id === void 0) { pr_caf_id = ''; }
        if (pr_cat_id === void 0) { pr_cat_id = ''; }
        if (product === void 0) { product = {
            pr_name: '',
            pr_price: '',
            pr_cook_time: '',
            pr_descr: '',
            pr_type: 1,
            pr_veg_type: 0
        }; }
        if (extra_categories === void 0) { extra_categories = []; }
        this.pr_caf_id = pr_caf_id;
        this.pr_cat_id = pr_cat_id;
        this.product = product;
        this.extra_categories = extra_categories;
    }
    return CreatedProduct;
}());

//# sourceMappingURL=createdMainProduct.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/user/createdManagerUser.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedManagerUser; });
var CreatedManagerUser = (function () {
    function CreatedManagerUser(mn_name, mn_last_name, mn_phone, mn_email, mn_pass) {
        if (mn_name === void 0) { mn_name = ''; }
        if (mn_last_name === void 0) { mn_last_name = ''; }
        if (mn_phone === void 0) { mn_phone = ''; }
        if (mn_email === void 0) { mn_email = ''; }
        if (mn_pass === void 0) { mn_pass = ''; }
        this.mn_name = mn_name;
        this.mn_last_name = mn_last_name;
        this.mn_phone = mn_phone;
        this.mn_email = mn_email;
        this.mn_pass = mn_pass;
    }
    return CreatedManagerUser;
}());

//# sourceMappingURL=createdManagerUser.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/user/createdUser.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatedUser; });
var CreatedUser = (function () {
    function CreatedUser(user, company) {
        if (user === void 0) { user = {
            us_name: '',
            us_last_name: '',
            us_position: '',
            us_phone: '',
            us_passport_id: '',
            us_email: '',
            us_pass: ''
        }; }
        if (company === void 0) { company = {
            comapny_name: '',
            comapny_vat_number: null,
            comapny_address: '',
            comapny_city: ''
        }; }
        this.user = user;
        this.company = company;
    }
    return CreatedUser;
}());

//# sourceMappingURL=createdUser.class.js.map

/***/ }),

/***/ "../../../../../src/app/custom-classes/user/loginUser.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUser; });
var LoginUser = (function () {
    function LoginUser(us_log_email, us_log_pass) {
        if (us_log_email === void 0) { us_log_email = ''; }
        if (us_log_pass === void 0) { us_log_pass = ''; }
        this.us_log_email = us_log_email;
        this.us_log_pass = us_log_pass;
    }
    return LoginUser;
}());

//# sourceMappingURL=loginUser.class.js.map

/***/ }),

/***/ "../../../../../src/app/directives/check-image/check-image.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckImageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckImageDirective = (function () {
    function CheckImageDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    CheckImageDirective.prototype.ngOnChanges = function (value) {
        var _this = this;
        console.log('value', value);
        if (value.image.currentValue) {
            console.log('value.image.currentValue', value.image.currentValue);
            this.checkImage(value.image.currentValue, function () { }, function () {
                console.log('defaultImage', _this.defaultImage);
                _this.renderer.setElementAttribute(_this.elementRef.nativeElement, 'src', _this.defaultImage ? _this.defaultImage : 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
            });
        }
    };
    CheckImageDirective.prototype.checkImage = function (imageSrc, good, bad) {
        var img = new Image();
        img.onload = good;
        img.onerror = bad;
        img.src = imageSrc;
    };
    return CheckImageDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('defaultImage'),
    __metadata("design:type", String)
], CheckImageDirective.prototype, "defaultImage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('image'),
    __metadata("design:type", String)
], CheckImageDirective.prototype, "image", void 0);
CheckImageDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: 'img[app-check-image]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _b || Object])
], CheckImageDirective);

var _a, _b;
//# sourceMappingURL=check-image.directive.js.map

/***/ }),

/***/ "../../../../../src/app/directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input_input_directive__ = __webpack_require__("../../../../../src/app/directives/input/input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__check_image_check_image_directive__ = __webpack_require__("../../../../../src/app/directives/check-image/check-image.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__input_input_directive__["a" /* InputDirective */],
            __WEBPACK_IMPORTED_MODULE_2__check_image_check_image_directive__["a" /* CheckImageDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__input_input_directive__["a" /* InputDirective */],
            __WEBPACK_IMPORTED_MODULE_2__check_image_check_image_directive__["a" /* CheckImageDirective */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/directives/input/input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDirective = (function () {
    function InputDirective(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    InputDirective.prototype.ngOnChanges = function (values) {
        if (values && values.error && values.error.currentValue) {
            this._setErrorInputField(true);
        }
        if (values && values.error && values.error.previousValue && !values.error.currentValue) {
            this._setErrorInputField(false);
        }
        if (values && values.message && values.message.previousValue && values.message.currentValue !== values.message.previousValue) {
            this._removeErrorText();
            this._addErrorText();
        }
        if (values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
            this.renderer.setElementClass(this._placeholderElement, 'focused', true);
        }
    };
    InputDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
        this._placeholderElement.innerHTML = this.placeholderMessage;
        this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
        // set focus on input, when click on placeholder
        this._placeholderElement.addEventListener('click', function () {
            _this.renderer.invokeElementMethod(_this.elementRef.nativeElement, 'focus');
        });
        if (this.ngModel) {
            this.renderer.setElementClass(this._placeholderElement, 'focused', true);
        }
    };
    InputDirective.prototype.onFocus = function () {
        this.renderer.setElementClass(this._placeholderElement, 'focused', true);
    };
    InputDirective.prototype.onBlur = function () {
        if (!this.elementRef.nativeElement.value) {
            this.renderer.setElementClass(this._placeholderElement, 'focused', false);
            this._setErrorInputField(false);
        }
    };
    ///////
    InputDirective.prototype._setErrorInputField = function (status) {
        if (status) {
            this._addErrorText();
            this._addInputBorder('#ff5b57');
        }
        else {
            this._removeErrorText();
            this._removeInputBorder();
        }
    };
    InputDirective.prototype._addErrorText = function () {
        if (this.message) {
            this._errorElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
            this._errorElement.innerHTML = this.message;
            this.renderer.setElementClass(this._errorElement, 'app-input-error-message', true);
        }
    };
    InputDirective.prototype._removeErrorText = function () {
        if (this._errorElement) {
            this._errorElement.remove();
        }
    };
    InputDirective.prototype._addInputBorder = function (color) {
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', 'border-bottom: 1px solid ' + color + ';');
    };
    InputDirective.prototype._removeInputBorder = function () {
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', null);
    };
    return InputDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('placeholderMessage'),
    __metadata("design:type", String)
], InputDirective.prototype, "placeholderMessage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('message'),
    __metadata("design:type", String)
], InputDirective.prototype, "message", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('error'),
    __metadata("design:type", Boolean)
], InputDirective.prototype, "error", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])('ngModel'),
    __metadata("design:type", Object)
], InputDirective.prototype, "ngModel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputDirective.prototype, "onFocus", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('blur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InputDirective.prototype, "onBlur", null);
InputDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Directive */])({
        selector: '[appInput]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object])
], InputDirective);

var _a, _b;
//# sourceMappingURL=input.directive.js.map

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"torless-modal\">\n  <div class=\"torless-modal__header\">\n    <div class=\"text\">\n      {{ headerText }}\n    </div>\n    <div class=\"close-button\" (click)=\"close()\"></div>\n  </div>\n\n  <div class=\"torless-modal__body\" >\n   {{ bodyText }}\n  </div>\n\n  <div class=\"torless-modal__footer\">\n    <button class=\"response-button\" (click)=\"submit()\">\n      תְגוּבָה\n    </button>\n    <div class=\"reject-button\" (click)=\"close()\">\n      לִדחוֹת\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmModalComponent = (function () {
    function ConfirmModalComponent(modalService) {
        this.modalService = modalService;
        console.log('confirm modal init');
    }
    ConfirmModalComponent.prototype.close = function () {
        this.modalService.closeModal$.emit();
    };
    ConfirmModalComponent.prototype.submit = function () {
        this.modalService.closeModal$.emit(true);
    };
    return ConfirmModalComponent;
}());
ConfirmModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-confirm-modal',
        template: __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.scss"), __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */]) === "function" && _a || Object])
], ConfirmModalComponent);

var _a;
//# sourceMappingURL=confirm-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"torless-modal\">\n  <div class=\"torless-modal__header\">\n    <div class=\"text\">\n      צור קשר\n    </div>\n    <div class=\"close-button\" (click)=\"close()\"></div>\n  </div>\n\n  <div class=\"torless-modal__body\">\n    <!--<app-input type=\"text\"-->\n               <!--placeholder=\"שם משתמש\"-->\n               <!--errorText=\"שם משתמש לא קיים\"-->\n               <!--[showError]=\"emailError\"-->\n               <!--[(model)]=\"email\"-->\n               <!--(output)=\"email = $event\"-->\n               <!--(invalid)=\"invalidForm = $event\">-->\n    <!--</app-input>-->\n    <div class=\"input-line\">\n      <input type=\"text\"\n             autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\n             appInput\n             [(ngModel)]=\"email\"\n             [placeholderMessage]=\"'שם משתמש'\"\n             [error]=\"emailError\"\n             [message]=\"'שם משתמש לא קיים'\" />\n    </div>\n\n    <div class=\"textarea-line\">\n      <textarea appInput\n                [(ngModel)]=\"message\"\n                [placeholderMessage]=\"'שם משתמש'\"\n                [error]=\"messageError\"\n                [message]=\"'שם משתמש לא קיים'\">\n      </textarea>\n    </div>\n<div style=\"clear: both;\"></div>\n    <!--<app-textarea-->\n               <!--placeholder=\"שם משתמש\"-->\n               <!--phoneFormat=\"true\"-->\n               <!--errorText=\"שם משתמש לא קיים\"-->\n               <!--[showError]=\"messageError\"-->\n               <!--[(model)]=\"message\"-->\n               <!--(output)=\"message = $event\"-->\n               <!--(invalid)=\"invalidForm = $event\">-->\n    <!--</app-textarea>-->\n  </div>\n\n  <div class=\"torless-modal__footer\">\n    <div class=\"response-button\" (click)=\"submit()\">\n      לשלוח\n    </div>\n    <div class=\"reject-button\" (click)=\"close()\">\n      לִדחוֹת\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".torless-modal__body {\n  padding-bottom: 0 !important; }\n\n.torless-modal .input-line,\n.torless-modal .textarea-line {\n  position: relative;\n  margin-bottom: 5rem;\n  width: 100%;\n  text-align: right;\n  float: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n  .torless-modal .input-line input,\n  .torless-modal .input-line textarea,\n  .torless-modal .textarea-line input,\n  .torless-modal .textarea-line textarea {\n    width: 100%;\n    font-size: 1.1rem;\n    height: 2.7rem;\n    background: inherit;\n    font-weight: 500;\n    color: #999999; }\n  .torless-modal .input-line textarea,\n  .torless-modal .textarea-line textarea {\n    padding-top: 10px;\n    resize: vertical;\n    max-height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactUsModalComponent = (function () {
    function ContactUsModalComponent(modalService) {
        this.modalService = modalService;
    }
    ContactUsModalComponent.prototype.submit = function () {
        console.log('sumbit');
        // this.modalService.closeModal$.emit();
    };
    ContactUsModalComponent.prototype.close = function () {
        this.modalService.closeModal$.emit();
    };
    // todo: use as PhoneFormat
    ContactUsModalComponent.prototype.phoneFormatter = function (t) {
        var numbers = t ? t.replace(/\D/g, '') : '', dashes = {
            3: '-',
            5: '-',
            7: '-'
        }, len = (numbers.length <= 10) ? numbers.length : 10;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += (dashes[i] || '') + numbers[i];
        }
        return result;
    };
    return ContactUsModalComponent;
}());
ContactUsModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-contact-us-modal',
        template: __webpack_require__("../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.scss"), __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */]) === "function" && _a || Object])
], ContactUsModalComponent);

var _a;
//# sourceMappingURL=contact-us-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes__ = __webpack_require__("../../../../../src/app/pipes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__time_select_modal_time_select_modal_component__ = __webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__select_cafeteria_modal_select_cafeteria_modal_component__ = __webpack_require__("../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_container_modal_container_component__ = __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { InformationComponent } from './information/information.component';
// import { PathComponent } from './path/path.component';
// import { UserImageComponent } from './user-image/user-image.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';
var ModalsModule = (function () {
    function ModalsModule() {
    }
    return ModalsModule;
}());
ModalsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_4__pipes__["a" /* PipesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */],
            __WEBPACK_IMPORTED_MODULE_7__time_select_modal_time_select_modal_component__["a" /* TimeSelectModalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__select_cafeteria_modal_select_cafeteria_modal_component__["a" /* SelectCafeteriaModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modal_container_modal_container_component__["a" /* ModalContainerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */],
            __WEBPACK_IMPORTED_MODULE_7__time_select_modal_time_select_modal_component__["a" /* TimeSelectModalComponent */],
            __WEBPACK_IMPORTED_MODULE_8__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__select_cafeteria_modal_select_cafeteria_modal_component__["a" /* SelectCafeteriaModalComponent */],
            __WEBPACK_IMPORTED_MODULE_10__modal_container_modal_container_component__["a" /* ModalContainerComponent */]
        ]
    })
], ModalsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/modals/modal-container/modal-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-cover\" #modalCover>\n  <div class=\"modal-context\" #modalContext [ngClass]=\"{'small': cssClass === 'small', 'middle': cssClass === 'middle', 'large': cssClass === 'large'}\">\n    <div #modalContainer></div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/modals/modal-container/modal-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.modal-cover {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: rgba(233, 233, 233, 0.6); }\n  .modal-cover.visible {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .modal-cover .modal-context {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-top: 200%;\n    transition: margin-top 0.2s;\n    width: auto; }\n    .modal-cover .modal-context.small {\n      width: 40%;\n      max-width: 450px; }\n    .modal-cover .modal-context.middle {\n      width: 60%;\n      max-width: 580px; }\n    .modal-cover .modal-context.large {\n      width: 80%;\n      max-width: 760px; }\n    .modal-cover .modal-context.visible {\n      margin-top: 0; }\n\n.torless-modal {\n  background: #ffffff; }\n  .torless-modal__header {\n    position: relative;\n    background: #32393f;\n    padding: 10px;\n    text-align: center;\n    color: #fff;\n    font-weight: 900;\n    margin-bottom: 60px;\n    direction: rtl;\n    min-height: 21px; }\n    .torless-modal__header .text {\n      font-size: 1.1rem;\n      width: 90%;\n      margin: 0 auto;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n    .torless-modal__header .close-button {\n      position: absolute;\n      color: #fff557;\n      top: 5px;\n      right: 10px;\n      cursor: pointer; }\n      .torless-modal__header .close-button:after {\n        content: '\\D7';\n        font-size: 30px;\n        vertical-align: middle; }\n  .torless-modal__body {\n    padding: 0 35px 60px;\n    direction: rtl;\n    text-align: right; }\n  .torless-modal__footer {\n    padding: 0 35px 35px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .torless-modal__footer .response-button {\n      background: #fff557;\n      padding: 10px 20px;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n      .torless-modal__footer .response-button:hover, .torless-modal__footer .response-button:active {\n        background: #c2ba37; }\n    .torless-modal__footer .reject-button {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      margin: 0 30px;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n      .torless-modal__footer .reject-button:hover, .torless-modal__footer .reject-button:active {\n        text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/modal-container/modal-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/modals/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_select_modal_time_select_modal_component__ = __webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_cafeteria_modal_select_cafeteria_modal_component__ = __webpack_require__("../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalContainerComponent = (function () {
    function ModalContainerComponent(resolver, renderer, modalService) {
        var _this = this;
        this.resolver = resolver;
        this.renderer = renderer;
        this.modalService = modalService;
        this.currentComponent = null;
        modalService.modal$.subscribe(function (modalData) {
            _this.__prepareModal({
                providers: modalData.providers,
                component: modalData.component
            });
            _this.cssClass = modalData.cssClass;
            _this.__makeVisible();
            modalService.closeModal$.subscribe(function () {
                _this.__makeHidden();
                _this.cssClass = '';
            });
        });
    }
    ModalContainerComponent.prototype.__prepareModal = function (options) {
        var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ReflectiveInjector */].fromResolvedProviders([], this.modalContainer.parentInjector), factory = this.resolver.resolveComponentFactory(options.component), 
        // Create the component using the factory and the injector
        createdComponent = factory.create(injector);
        for (var key in options.providers) {
            createdComponent.instance[key] = options.providers[key];
        }
        // Insert the component into the dom container
        this.modalContainer.insert(createdComponent.hostView);
        if (this.currentComponent) {
            this.currentComponent.destroy();
        }
        this.currentComponent = createdComponent;
    };
    ModalContainerComponent.prototype.__makeVisible = function () {
        var _this = this;
        this.renderer.setElementClass(this.modalCover.nativeElement, 'visible', true);
        setTimeout((function () {
            _this.renderer.setElementClass(_this.modalContext.nativeElement, 'visible', true);
        }).bind(this), 10);
    };
    ModalContainerComponent.prototype.__makeHidden = function () {
        var _this = this;
        this.renderer.setElementClass(this.modalContext.nativeElement, 'visible', false);
        setTimeout((function () {
            _this.renderer.setElementClass(_this.modalCover.nativeElement, 'visible', false);
            _this.currentComponent.destroy();
            _this.currentComponent = null;
        }).bind(this), 200);
    };
    return ModalContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('modalContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */] }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* ViewContainerRef */]) === "function" && _a || Object)
], ModalContainerComponent.prototype, "modalContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('modalCover'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _b || Object)
], ModalContainerComponent.prototype, "modalCover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('modalContext'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _c || Object)
], ModalContainerComponent.prototype, "modalContext", void 0);
ModalContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-modal-container',
        entryComponents: [__WEBPACK_IMPORTED_MODULE_1__confirm_modal_confirm_modal_component__["a" /* ConfirmModalComponent */], __WEBPACK_IMPORTED_MODULE_2__time_select_modal_time_select_modal_component__["a" /* TimeSelectModalComponent */], __WEBPACK_IMPORTED_MODULE_3__contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], __WEBPACK_IMPORTED_MODULE_4__select_cafeteria_modal_select_cafeteria_modal_component__["a" /* SelectCafeteriaModalComponent */]],
        template: __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ComponentFactoryResolver */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services__["i" /* ModalService */]) === "function" && _f || Object])
], ModalContainerComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=modal-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"torless-modal select-cafeteria-modal\">\n  <div class=\"torless-modal__header\">\n    <div class=\"text\">\n      בחר בקפיטריה\n    </div>\n    <div class=\"close-button\" (click)=\"close()\"></div>\n  </div>\n\n  <div class=\"torless-modal__body\">\n      <div class=\"list\">\n        <div class=\"list-element\" *ngFor=\"let cafeteria of cafeterias\" (click)=\"selectCafeteria(cafeteria)\" [ngClass]=\"{'selected': cafeteria.id === selectedCafeteria?.id}\">\n          {{ cafeteria.caf_name }}\n        </div>\n      </div>\n  </div>\n\n  <div class=\"torless-modal__footer\">\n    <button class=\"response-button\" (click)=\"submit()\" [disabled]=\"!selectedCafeteria\">\n      לשלוח\n    </button>\n    <div class=\"reject-button\" (click)=\"close()\">\n      לִדחוֹת\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select-cafeteria-modal.torless-modal .torless-modal__body {\n  padding: 0; }\n  .select-cafeteria-modal.torless-modal .torless-modal__body .list {\n    max-height: 300px;\n    overflow: auto;\n    margin-bottom: 60px; }\n    .select-cafeteria-modal.torless-modal .torless-modal__body .list .list-element {\n      padding: 10px 25px;\n      cursor: pointer; }\n      .select-cafeteria-modal.torless-modal .torless-modal__body .list .list-element.selected {\n        background: #e9e9e9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectCafeteriaModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectCafeteriaModalComponent = (function () {
    function SelectCafeteriaModalComponent(cafeteriaService, modalService) {
        this.cafeteriaService = cafeteriaService;
        this.modalService = modalService;
    }
    SelectCafeteriaModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cafeteriaService.getUserCafeterias().then(function (response) {
            _this.cafeterias = response.data;
            console.log('cafeterias', response.data);
        });
    };
    SelectCafeteriaModalComponent.prototype.close = function () {
        this.modalService.closeModal$.emit();
    };
    SelectCafeteriaModalComponent.prototype.submit = function () {
        if (this.selectedCafeteria) {
            this.modalService.closeModal$.emit(this.selectedCafeteria);
        }
    };
    SelectCafeteriaModalComponent.prototype.selectCafeteria = function (cafeteria) {
        this.selectedCafeteria = cafeteria;
    };
    return SelectCafeteriaModalComponent;
}());
SelectCafeteriaModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-select-cafeteria-modal',
        template: __webpack_require__("../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.scss"), __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["e" /* CafeteriaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */]) === "function" && _b || Object])
], SelectCafeteriaModalComponent);

var _a, _b;
//# sourceMappingURL=select-cafeteria-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modals/time-select-modal/time-select-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"torless-modal time-select-modal\">\n  <div class=\"torless-modal__header\">\n    <div class=\"text\">\n      ימי פעילות הסניף\n    </div>\n    <div class=\"close-button\" (click)=\"close()\"></div>\n  </div>\n\n  <div class=\"torless-modal__body\" >\n    <div class=\"buttons\">\n      <button class=\"button\" [ngClass]=\"{'selected': viewedDay?.opened}\" (click)=\"makeWorking(true)\">\n        <!--working-->\n        הסניף פתוח\n      </button>\n      <button class=\"button\" [ngClass]=\"{'selected': viewedDay?.closed}\" (click)=\"makeWorking(false)\">\n        <!--not working-->\n        הסניף סגור\n      </button>\n\n    </div>\n    <div class=\"form\" *ngIf=\"viewedDay?.opened\">\n      <div class=\"select-container\">\n        <app-select [list]=\"hours\" [value]=\"getValue('openAt')\" [placeholder]=\"'יום א’ - הקלד/י שעת פתיחה'\" (setItem)=\"setTime($event, 'openAt')\"></app-select>\n      </div>\n\n      <div class=\"select-container\">\n        <app-select [list]=\"hours\" [value]=\"getValue('closeAt')\" [placeholder]=\"'יום א’ - הקלד/י שעת פתיחה'\" (setItem)=\"setTime($event, 'closeAt')\"></app-select>\n      </div>\n    </div>\n\n\n    <div class=\"day-select\">\n      <div class=\"day\" *ngFor=\"let day of week?.days; let index = index;\"\n           (click)=\"selectDay(day)\"\n           [ngClass]=\"{'selected': viewedDay?.dayNumber === (index + 1)}\">\n        <div class=\"icon\">{{ day.dayName }}</div>\n        <div *ngIf=\"day.openAt && day.closeAt\" class=\"time\">\n          {{ day.openAt + ' - ' + day.closeAt}}\n        </div>\n      </div>\n      <!--<div class=\"day\" (click)=\"selectDay(1)\" [ngClass]=\"{'selected': selectedDay === 1}\">-->\n        <!--<div class=\"icon\">א</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(2)\" [ngClass]=\"{'selected': selectedDay === 2}\">-->\n        <!--<div class=\"icon\">ב</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(3)\" [ngClass]=\"{'selected': selectedDay === 3}\">-->\n        <!--<div class=\"icon\">ג</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(4)\" [ngClass]=\"{'selected': selectedDay === 4}\">-->\n        <!--<div class=\"icon\">ד</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(5)\" [ngClass]=\"{'selected': selectedDay === 5}\">-->\n        <!--<div class=\"icon\">ה</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(6)\" [ngClass]=\"{'selected': selectedDay === 6}\">-->\n        <!--<div class=\"icon\">ו</div>-->\n      <!--</div>-->\n      <!--<div class=\"day\" (click)=\"selectDay(7)\" [ngClass]=\"{'selected': selectedDay === 7}\">-->\n        <!--<div class=\"icon\">ש</div>-->\n      <!--</div>-->\n    </div>\n  </div>\n\n  <div class=\"torless-modal__footer\">\n    <button class=\"response-button\" (click)=\"submit()\" [disabled]=\"isButtonDisabled()\">\n      שמירה\n    </button>\n    <div class=\"reject-button\" (click)=\"close()\">\n      ביטול\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/modals/time-select-modal/time-select-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".time-select-modal .torless-modal__body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  direction: ltr;\n  position: relative; }\n  .time-select-modal .torless-modal__body .buttons {\n    position: absolute;\n    top: 0;\n    width: calc(100% - 200px);\n    margin: 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .time-select-modal .torless-modal__body .buttons .button {\n      height: 50px;\n      width: calc(50% - 10px);\n      font-size: 1.6rem;\n      cursor: pointer;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      border: 1px solid #CFCFCF;\n      background: #fff;\n      color: #1a1a1a;\n      font-weight: 100; }\n      .time-select-modal .torless-modal__body .buttons .button.selected {\n        background: #32393F;\n        color: #FFF557;\n        font-weight: 900;\n        border: none; }\n  .time-select-modal .torless-modal__body .form {\n    width: calc(100% - 130px);\n    margin-top: 100px; }\n    .time-select-modal .torless-modal__body .form .select-container {\n      margin-bottom: 40px; }\n  .time-select-modal .torless-modal__body .day-select {\n    width: 100px;\n    border: 1px solid #000;\n    padding: 10px 0;\n    margin-left: auto; }\n    .time-select-modal .torless-modal__body .day-select .day {\n      height: 50px;\n      text-align: center;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      cursor: pointer; }\n      .time-select-modal .torless-modal__body .day-select .day .icon {\n        font-size: 2rem;\n        line-height: 50px; }\n      .time-select-modal .torless-modal__body .day-select .day.selected {\n        background: #000; }\n        .time-select-modal .torless-modal__body .day-select .day.selected .icon {\n          color: #fff;\n          font-weight: 900; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/time-select-modal/time-select-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSelectModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Day = (function () {
    function Day(dayName, dayNumber, openAt, closeAt) {
        this.openAt = openAt;
        this.closeAt = closeAt;
        this.opened = false;
        this.closed = false;
        this.dayName = dayName;
        this.dayNumber = dayNumber;
    }
    return Day;
}());
var Week = (function () {
    function Week(days) {
        this.days = days;
    }
    Week.prototype.getDay = function (dayNumber) {
        var i = 0, len = (this.days && this.days.length) ? this.days.length : 0, result;
        for (; i < len; i++) {
            if (this.days[i].dayNumber === dayNumber) {
                result = this.days[i];
                break;
            }
        }
        return result;
    };
    Week.prototype.changeDay = function (newValue) {
        var index;
        for (var i = 0, len = this.days.length; i < len; i++) {
            if (this.days[i].dayNumber === newValue.dayNumber) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            this.days[index] = newValue;
        }
    };
    return Week;
}());
var daysOfWeekNames = [
    '’יום א',
    '’יום ב',
    '’יום ג',
    '’יום ד',
    '’יום ה',
    '’יום ו',
    '’יום ש'
];
var TimeSelectModalComponent = (function () {
    function TimeSelectModalComponent(modalService) {
        this.modalService = modalService;
        // Output
        this.hours = [];
        this.__workingHoursGenerate();
    }
    TimeSelectModalComponent.prototype.ngAfterViewInit = function () {
        this.__setWeek(this.workTime.slice());
        this.viewedDay = this.week.getDay(this.selectedDay);
    };
    TimeSelectModalComponent.prototype.close = function () {
        this.modalService.closeModal$.emit();
    };
    TimeSelectModalComponent.prototype.submit = function () {
        if (!this.isButtonDisabled()) {
            this.modalService.closeModal$.emit(this.__parseResult(this.week.days));
        }
        else {
            console.log('no. both values must be selected!');
        }
    };
    TimeSelectModalComponent.prototype.makeWorking = function (working) {
        this.viewedDay.opened = working;
        this.viewedDay.closed = !working;
    };
    TimeSelectModalComponent.prototype.selectDay = function (day) {
        this.viewedDay = day;
    };
    TimeSelectModalComponent.prototype.setTime = function (event, timeType) {
        // public setTime(event, timeType: 'time_start' | 'time_end'): void {
        this.viewedDay[timeType] = event;
        this.week.changeDay(this.viewedDay);
    };
    TimeSelectModalComponent.prototype.getValue = function (timeType) {
        return this.viewedDay[timeType] ? this.viewedDay[timeType] : '';
    };
    TimeSelectModalComponent.prototype.isButtonDisabled = function () {
        var result = false;
        if (this.viewedDay && this.viewedDay.opened) {
            if ((this.viewedDay.closeAt && this.viewedDay.openAt) || (!this.viewedDay.closeAt && !this.viewedDay.openAt)) {
                result = false;
            }
            else {
                result = true;
            }
        }
        return result;
    };
    ////
    TimeSelectModalComponent.prototype.__workingHoursGenerate = function () {
        for (var i = 0, len = 24; i < len; i++) {
            for (var j = 1, _len = 4; j <= _len; j++) {
                var hours = i, minutes = '' + (15 * j);
                if (j === 4) {
                    hours++;
                    minutes = '00';
                }
                this.hours.push(hours + ':' + minutes);
            }
        }
        this.hours.splice(this.hours.length - 1, 1);
    };
    TimeSelectModalComponent.prototype.__setWeek = function (array) {
        var days = [], sortedArr = array.sort(function (a, b) {
            if (a && b && (a.day_number < b.day_number)) {
                return -1;
            }
            if (a && b && (a.day_number > b.day_number)) {
                return 1;
            }
            return 0;
        }), maxDayNumber = (sortedArr[sortedArr.length - 1] && sortedArr[sortedArr.length - 1].day_number) ? sortedArr[sortedArr.length - 1].day_number : 0, length = maxDayNumber === 7 ? maxDayNumber : 7;
        for (var i = 0, len = length; i < len; i++) {
            var day = new Day(daysOfWeekNames[i], i + 1, (sortedArr[i] && sortedArr[i].time_start) ? sortedArr[i].time_start : '', (sortedArr[i] && sortedArr[i].time_end) ? sortedArr[i].time_end : '');
            if (day.openAt && day.closeAt) {
                day.opened = true;
            }
            days.push(day);
        }
        this.week = new Week(days);
    };
    TimeSelectModalComponent.prototype.__parseResult = function (days) {
        var result = [];
        for (var i = 0, len = days.length; i < len; i++) {
            if (days[i].opened) {
                result.push({
                    day_number: days[i].dayNumber,
                    time_start: days[i].openAt,
                    time_end: days[i].closeAt
                });
            }
        }
        return result;
    };
    return TimeSelectModalComponent;
}());
TimeSelectModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-time-select-modal',
        template: __webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.scss"), __webpack_require__("../../../../../src/app/modals/modal-container/modal-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["i" /* ModalService */]) === "function" && _a || Object])
], TimeSelectModalComponent);

var _a;
//# sourceMappingURL=time-select-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/add-product/add-product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_component__ = __webpack_require__("../../../../../src/app/pages/add-product/add-product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'add-product/:cafId/:catId',
        component: __WEBPACK_IMPORTED_MODULE_3__add_product_component__["a" /* AddProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var AddProductRoutingModule = (function () {
    function AddProductRoutingModule() {
    }
    return AddProductRoutingModule;
}());
AddProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AddProductRoutingModule);

//# sourceMappingURL=add-product-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"add-product-component container\">\n\n  <div class=\"component-header\">\n    <div class=\"button-container\">\n      <button class=\"torless-button\" (click)=\"goBack()\">חזרה לקטגוריות</button>\n    </div>\n    <div class=\"text-container\">\n      הוסף מוצר\n    </div>\n  </div>\n\n  <div class=\"component-body\">\n    <div class=\"new-product\">\n      <div class=\"name-line\">\n        <div class=\"input-line required\">\n          <input type=\"text\" appInput [(ngModel)]=\"createdProduct.product.pr_name\" [placeholderMessage]=\"'שם מוצר'\">\n        </div>\n        <div class=\"check-elements\">\n          <div class=\"check-element\" (click)=\"makeEmpty(-1)\">\n            <img class=\"check-element__icon\" *ngIf=\"createdProduct.product.pr_type === -1\" src=\"./assets/icon/check-red.svg\" >\n            <img class=\"check-element__icon\" *ngIf=\"createdProduct.product.pr_type !== -1\" src=\"./assets/icon/disabled.svg\" >\n            <!--no available-->\n            <div class=\"check-element__text\" [ngClass]=\"{'checked': createdProduct.product.pr_type === -1}\">זה לא במלאי</div>\n          </div>\n\n          <div class=\"check-element\" (click)=\"makeEmpty(1)\">\n            <img class=\"check-element__icon\" *ngIf=\"createdProduct.product.pr_type === 1\" src=\"./assets/icon/check-red.svg\" >\n            <img class=\"check-element__icon\" *ngIf=\"createdProduct.product.pr_type !== 1\" src=\"./assets/icon/disabled.svg\" >\n            <!--available-->\n            <div class=\"check-element__text\" [ngClass]=\"{'checked': createdProduct.product.pr_type === 1}\" style=\"width: 25px; margin: 0 auto;\">מוצר ריק</div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"border-bottom\"></div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdProduct.product.pr_descr\" [placeholderMessage]=\"'פרטי מוצר'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"number\" dir=\"rtl\" appInput [(ngModel)]=\"createdProduct.product.pr_price\" [placeholderMessage]=\"'מחיר מוצר'\">\n      </div>\n\n      <div class=\"cook-time\">\n        <div class=\"label required\">\n           <span>\n            <app-information [hintText]=\"'1000'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n           </span>\n          <span>דקות ליצירת המוצר</span>\n        </div>\n        <div class=\"minute\" *ngFor=\"let minute of minutes; let index = index;\"\n             [ngClass]=\"{'selected': createdProduct.product.pr_cook_time === ''+ index }\"\n             (click)=\"selectCookTime(index)\">\n          {{ index }}\n        </div>\n      </div>\n\n      <div class=\"radio-elements\" *ngIf=\"vegTypes\">\n        <div class=\"radio-element\" *ngFor=\"let vegType of vegTypes;\">\n          <label class=\"text\" [attr.for]=\"vegType.veg_type\">{{vegType.veg_type}}</label>\n          <input type=\"radio\" [attr.id]=\"vegType.veg_type\" value=\"{{vegType.veg_id}}\" [(ngModel)]=\"createdProduct.product.pr_veg_type\">\n        </div>\n      </div>\n\n      <div class=\"upload-image\">\n        <input type=\"file\" (change)=\"openFileUploader(fileUploader)\" accept=\"image/jpeg,image/png,image/jpg\" data-max-size=\"1024\" #fileUploader>\n        <div class=\"upload-image__text\">\n          <div>\n            הלוגו יופיע בכל פרסומי הקפיטריה, <br>\n            על כן, אנחנו ממליצים לצרף קובץ איכותי<br>\n          </div>\n\n          <div>\n            מידת הלוגו 150X150 פיקסלים<br>\n            בפורמט JPG / PNG\n          </div>\n\n          <div class=\"radio\">\n            <label>‘התמונה להמחשה בלבד’</label>\n            <input type=\"radio\" name=\"\">\n\n          </div>\n\n          <div class=\"links\">\n            <div (click)=\"fileUploader.click()\">שנה תמונה</div>\n            <div (click)=\"deleteImage()\">למחוק תמונה</div>\n          </div>\n        </div>\n\n        <div class=\"upload-image__button\">\n          <div class=\"upload-image__button--inner\" *ngIf=\"!uploadedImage\" (click)=\"fileUploader.click()\">\n            <div class=\"text\">הוסף/י לוגו לרשת</div>\n          </div>\n\n          <img [src]=\"uploadedImage\" *ngIf=\"uploadedImage\">\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n    <div class=\"extra-category__header\">\n      <button (click)=\"addNewExtraCategory()\" class=\"torless-page__add-new-element\">\n        <span class=\"plus\">+</span>\n        <span class=\"text\">הוסף תת קטגוריה</span>\n      </button>\n      <div class=\"info-icon\">\n        <app-information [hintText]=\"'1001'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n      </div>\n      <div class=\"label-text\">\n        קטגוריות נוספות\n      </div>\n    </div>\n\n    <div class=\"extra-category__content\" *ngFor=\"let extra_category of createdProduct.extra_categories; let index = index;\">\n      <div class=\"label\">\n        <button class=\"remove-button\" (click)=\"removeExtraCategory(index)\">\n          <img src=\"./assets/icon/trash.svg\">\n        </button>\n        <div class=\"information-container\">\n          <app-information [hintText]=\"'1002'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n        </div>\n        <div class=\"name-line\">\n          <div class=\"input-line\">\n            <input type=\"text\" appInput [(ngModel)]=\"extra_category.extra_cat_name\" [placeholderMessage]=\"'שם קטגוריה נוספת'\">\n          </div>\n        </div>\n      </div>\n      <div class=\"body\" *ngIf=\"extra_category?.extra_cat_name.length > 0\">\n        <div class=\"extra-product\">\n          <div class=\"extra-product__outer\">\n            <div class=\"information-container\">\n              <app-information [hintText]=\"'1003'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n            </div>\n            <div class=\"description\">\n              <!--todo: remove-->\n              טקסט הבדיקה\n            </div>\n          </div>\n\n          <div *ngFor=\"let extra_info of extra_category.extra_info\" style=\"margin-bottom: 30px;\">\n            <div class=\"extra-product__inner\">\n              <div class=\"input-line\">\n                <input type=\"text\" appInput [(ngModel)]=\"extra_info.extra_pr_name\" [placeholderMessage]=\"'שם מוצר נוסף'\">\n              </div>\n\n              <div class=\"input-line\">\n                <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"extra_info.extra_pr_descr\" [placeholderMessage]=\"'תיאור מוצר נוסף'\">\n              </div>\n\n              <div class=\"price-input-line\" *ngIf=\"extra_info.double_extra_products?.length === 0\">\n                <input type=\"text\" dir=\"rtl\" [(ngModel)]=\"extra_info.extra_pr_price\">\n              </div>\n            </div>\n\n            <div class=\"double-extra-products__container\">\n              <div class=\"double-extra-products__item\">\n                <div class=\"double-extra-products__item--outer\" *ngIf=\"extra_info.double_extra_products?.length > 0\">\n                  <div class=\"description\">\n                    <!--todo: remove-->\n                    טקסט הבדיקה\n                  </div>\n                </div>\n\n                <div class=\"double-extra-products__item--inner\" *ngFor=\"let double_extra of extra_info.double_extra_products\">\n                  <div class=\"input-line\">\n                    <input type=\"text\" appInput [(ngModel)]=\"double_extra.double_extra_pr_name\" [placeholderMessage]=\"'שם מוצר כפול'\">\n                  </div>\n                  <div class=\"price-input-line\">\n                    <input type=\"text\" dir=\"rtl\" [(ngModel)]=\"double_extra.double_extra_pr_price\">\n                  </div>\n                </div>\n\n                <div class=\"double-extra-products__item--button\" (click)=\"addDoubleExtraProduct(extra_info.double_extra_products)\">\n                  <!--todo: remove-->\n                  <span class=\"text\">טקסט הבדיקה</span>\n                  <span class=\"plus\">+</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <!--TODO: after BE connect uncomment-->\n          <div class=\"extra-product__button\" (click)=\"addExtraInfo(extra_category.extra_info)\">\n            <!--todo: remove-->\n            <span class=\"text\">טקסט הבדיקה</span>\n            <span class=\"plus\">+</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <button (click)=\"addNewExtraCategory()\" class=\"torless-page__add-new-element\" *ngIf=\"createdProduct.extra_categories?.length > 4\" style=\"margin-bottom: 55px;\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">הוסף תת קטגוריה</span>\n    </button>\n\n  </div>\n\n  <div class=\"component-footer\">\n    <span (click)=\"goBack()\" class=\"back-button\">תחזור</span>\n    <button (click)=\"saveProduct()\" [disabled]=\"isSubmitButtonDisabled()\" class=\"torless-page__add-new-element\">\n      <span class=\"text\">לשמור מוצר</span>\n      <span class=\"icon\">\n        <img src=\"./assets/icon/save.svg\">\n      </span>\n    </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/add-product/add-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-product-component .app-input-placeholder {\n  font-size: 1.4rem; }\n\n.add-product-component .torless-button {\n  width: 100%;\n  max-width: 275px;\n  height: 44px;\n  background: #fff557;\n  color: grey;\n  font-size: 1.3rem;\n  font-weight: 900; }\n  .add-product-component .torless-button:hover, .add-product-component .torless-button:active {\n    background: #c2ba37; }\n\n.add-product-component .upload-image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .add-product-component .upload-image input[type=\"file\"] {\n    width: 0; }\n  .add-product-component .upload-image__text {\n    text-align: right;\n    padding-right: 10px;\n    vertical-align: top;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 1rem;\n    font-family: sans-serif;\n    letter-spacing: -0.1rem;\n    line-height: 1.3;\n    color: #9a9a9a;\n    font-weight: normal; }\n    .add-product-component .upload-image__text div:not(:nth-last-child(1)) {\n      margin-top: 0;\n      margin-bottom: 0.4rem; }\n    .add-product-component .upload-image__text .links {\n      text-decoration: underline; }\n      .add-product-component .upload-image__text .links div {\n        cursor: pointer; }\n        .add-product-component .upload-image__text .links div:hover {\n          text-decoration: underline; }\n    .add-product-component .upload-image__text .radio {\n      white-space: nowrap; }\n      .add-product-component .upload-image__text .radio label {\n        color: #000;\n        font-weight: 900;\n        vertical-align: text-bottom; }\n  .add-product-component .upload-image__button {\n    width: 400px;\n    height: 400px;\n    background: #000;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .add-product-component .upload-image__button--inner {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      text-align: center;\n      width: 100%; }\n      .add-product-component .upload-image__button--inner .text {\n        color: #909090;\n        font-weight: 600; }\n        .add-product-component .upload-image__button--inner .text:before {\n          content: \"+\\A\" attr(title);\n          white-space: pre;\n          color: #fff557;\n          font-weight: bolder;\n          font-size: 4rem; }\n    .add-product-component .upload-image__button img {\n      width: 100%;\n      height: auto; }\n\n.add-product-component .input-line {\n  font-size: 1.1rem;\n  margin-bottom: 0;\n  width: 22rem;\n  height: 2.7rem;\n  font-weight: 500; }\n  .add-product-component .input-line span {\n    display: none; }\n\n.add-product-component .component-header {\n  text-align: right; }\n  .add-product-component .component-header .button-container {\n    margin-bottom: 30px;\n    width: 40%;\n    margin-left: auto; }\n  .add-product-component .component-header .text-container {\n    margin-bottom: 30px;\n    font-weight: 900;\n    font-size: 1.2rem;\n    font-size: 2.5rem;\n    margin-top: 2.7rem; }\n\n.add-product-component .image__btn__text {\n  background: #000;\n  margin-bottom: 1rem; }\n\n.add-product-component .component-body .new-product {\n  background: #fff;\n  margin-bottom: 45px;\n  padding: 25px 55px 55px; }\n  .add-product-component .component-body .new-product .name-line {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n    .add-product-component .component-body .new-product .name-line .input-line {\n      width: 50%;\n      margin-bottom: 20px; }\n    .add-product-component .component-body .new-product .name-line .check-elements {\n      width: 50%;\n      text-align: center;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n      .add-product-component .component-body .new-product .name-line .check-elements .check-element {\n        display: inline-block;\n        width: 50px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        cursor: pointer; }\n        .add-product-component .component-body .new-product .name-line .check-elements .check-element__icon {\n          width: 25px;\n          vertical-align: bottom;\n          padding-bottom: 5px; }\n        .add-product-component .component-body .new-product .name-line .check-elements .check-element__text {\n          color: #9C9C9C;\n          line-height: 13px;\n          font-size: 0.8rem;\n          text-align: center; }\n          .add-product-component .component-body .new-product .name-line .check-elements .check-element__text.checked {\n            color: #FF5D59; }\n  .add-product-component .component-body .new-product .border-bottom {\n    border-bottom: 1px solid #000;\n    width: calc(100% + 110px);\n    border-bottom: 1px solid #000;\n    display: block;\n    margin-left: -55px;\n    margin-bottom: 70px; }\n  .add-product-component .component-body .new-product .cook-time {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: auto;\n    margin-bottom: 40px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .add-product-component .component-body .new-product .cook-time .label {\n      width: 100%;\n      position: relative;\n      text-align: right;\n      margin-bottom: 10px;\n      font-size: 1.4rem;\n      font-family: sans-serif;\n      padding-bottom: 5px;\n      color: #9c9c9c; }\n    .add-product-component .component-body .new-product .cook-time .minute {\n      width: calc((100% / 8) - 10px);\n      margin-bottom: 1px;\n      height: 55px;\n      line-height: 55px;\n      vertical-align: center;\n      border: 1px solid #cdcccc;\n      text-align: center;\n      font-weight: 900;\n      font-family: sans-serif;\n      color: grey;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      font-size: 1.4rem; }\n    .add-product-component .component-body .new-product .cook-time .minute.selected {\n      background: #000;\n      color: #fff; }\n  .add-product-component .component-body .new-product .radio-elements {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 50%;\n    margin-left: auto;\n    margin-bottom: 40px;\n    padding-bottom: 5px;\n    width: 37rem; }\n    .add-product-component .component-body .new-product .radio-elements .radio-element {\n      width: calc(100% / 3 - 5px);\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      text-align: right;\n      cursor: pointer;\n      font-size: 1.6rem;\n      font-family: sans-serif;\n      margin-left: 2.3rem;\n      margin-bottom: 2rem;\n      width: 8.6rem; }\n      .add-product-component .component-body .new-product .radio-elements .radio-element input {\n        width: 1.6rem;\n        height: 1.6rem; }\n      .add-product-component .component-body .new-product .radio-elements .radio-element label {\n        font-size: 1.5rem;\n        display: inline-block;\n        margin-top: -0rem;\n        vertical-align: top; }\n      .add-product-component .component-body .new-product .radio-elements .radio-element .text {\n        color: grey;\n        cursor: pointer; }\n      .add-product-component .component-body .new-product .radio-elements .radio-element:hover .text {\n        color: #676666; }\n\n.add-product-component .component-body .extra-category__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px; }\n  .add-product-component .component-body .extra-category__header .info-icon {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-left: auto;\n    margin-right: 20px; }\n  .add-product-component .component-body .extra-category__header .label-text {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 1.9rem;\n    font-weight: 900;\n    color: #000; }\n\n.add-product-component .component-body .extra-category__content {\n  margin-bottom: 20px;\n  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5); }\n  .add-product-component .component-body .extra-category__content .information-container {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-left: auto;\n    margin-right: 20px; }\n  .add-product-component .component-body .extra-category__content .input-line input {\n    font-weight: 900; }\n  .add-product-component .component-body .extra-category__content .label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 20px 30px;\n    background: #fff; }\n    .add-product-component .component-body .extra-category__content .label .remove-button {\n      max-width: none;\n      width: 20px;\n      background: inherit;\n      height: auto;\n      padding: 0; }\n      .add-product-component .component-body .extra-category__content .label .remove-button [disabled] {\n        opacity: 0.8;\n        cursor: not-allowed; }\n      .add-product-component .component-body .extra-category__content .label .remove-button:active {\n        -webkit-transform: scale(0.9);\n                transform: scale(0.9); }\n      .add-product-component .component-body .extra-category__content .label .remove-button img {\n        width: 100%; }\n    .add-product-component .component-body .extra-category__content .label .name-line {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      color: #000;\n      font-weight: 900; }\n      .add-product-component .component-body .extra-category__content .label .name-line .input-line {\n        margin-bottom: 1rem;\n        width: 100%; }\n  .add-product-component .component-body .extra-category__content .body {\n    padding: 15px 30px;\n    background: #eaeaea; }\n    .add-product-component .component-body .extra-category__content .body .extra-product {\n      margin: 0 10px 10px 0; }\n      .add-product-component .component-body .extra-category__content .body .extra-product__inner {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: relative;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: reverse;\n            -ms-flex-direction: row-reverse;\n                flex-direction: row-reverse;\n        padding: 20px;\n        margin-bottom: 15px;\n        background: #fff; }\n      .add-product-component .component-body .extra-category__content .body .extra-product__outer {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-bottom: 5px; }\n        .add-product-component .component-body .extra-category__content .body .extra-product__outer .description {\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          font-size: 1.1rem;\n          font-weight: 800;\n          color: #bababa; }\n      .add-product-component .component-body .extra-category__content .body .extra-product__button {\n        text-align: right;\n        color: #858585;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        cursor: pointer; }\n        .add-product-component .component-body .extra-category__content .body .extra-product__button .text {\n          font-size: 1.4rem;\n          text-decoration: underline;\n          letter-spacing: -1px; }\n        .add-product-component .component-body .extra-category__content .body .extra-product__button .plus {\n          color: #000;\n          font-size: 1.6rem;\n          font-weight: 900;\n          vertical-align: middle;\n          display: inline-block;\n          margin-left: 10px; }\n        .add-product-component .component-body .extra-category__content .body .extra-product__button:hover .text {\n          color: #9f9e9e; }\n        .add-product-component .component-body .extra-category__content .body .extra-product__button:hover .plus {\n          color: #1a1919; }\n      .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item {\n        margin: 0 50px 10px 0; }\n        .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--inner {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: reverse;\n              -ms-flex-direction: row-reverse;\n                  flex-direction: row-reverse;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          padding: 20px;\n          margin-bottom: 15px;\n          background: #f4f4f4; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--inner .app-input-placeholder {\n            font-size: 0.9rem; }\n        .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--outer {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          margin: 10px 0 5px 0; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--outer .description {\n            -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n                align-self: center;\n            font-size: 1rem;\n            font-weight: 700;\n            color: #b2b2b2; }\n        .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button {\n          text-align: right;\n          color: #858585;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          cursor: pointer; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button .text {\n            font-size: 1.4rem;\n            text-decoration: underline;\n            letter-spacing: -1px; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button .plus {\n            color: #000;\n            font-size: 1.6rem;\n            font-weight: 900;\n            vertical-align: middle;\n            display: inline-block;\n            margin-left: 10px; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button:hover .text {\n            color: #9f9e9e; }\n          .add-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button:hover .plus {\n            color: #1a1919; }\n      .add-product-component .component-body .extra-category__content .body .extra-product .input-line {\n        width: 30%;\n        margin-bottom: 0;\n        margin-left: 10%; }\n  .add-product-component .component-body .extra-category__content:last-child {\n    margin-bottom: 30px; }\n\n.add-product-component .component-footer {\n  text-align: right; }\n  .add-product-component .component-footer .back-button {\n    display: inline-block;\n    margin: 0 50px;\n    cursor: pointer;\n    font-weight: 900; }\n    .add-product-component .component-footer .back-button:hover {\n      text-decoration: underline; }\n  .add-product-component .component-footer .torless-page__add-new-element {\n    background: #fff557;\n    position: relative; }\n    .add-product-component .component-footer .torless-page__add-new-element .text {\n      color: #000;\n      vertical-align: text-bottom;\n      font-size: 1.5rem; }\n    .add-product-component .component-footer .torless-page__add-new-element .icon {\n      position: absolute;\n      right: 20px;\n      top: calc(50% - 10px); }\n    .add-product-component .component-footer .torless-page__add-new-element[disabled] {\n      background: #fff88a;\n      cursor: not-allowed; }\n    .add-product-component .component-footer .torless-page__add-new-element:hover {\n      background: #c2ba37; }\n\n.add-product-component .input-line {\n  position: relative;\n  width: 50%;\n  margin-left: auto;\n  margin-bottom: 40px;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n  .add-product-component .input-line input {\n    width: 100%;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    font-size: 1.1rem;\n    font-weight: 500;\n    background: inherit;\n    color: #999999; }\n  .add-product-component .input-line .app-input-placeholder {\n    font-size: 1.4rem !important;\n    font-weight: 500 !important;\n    line-height: 2.7rem;\n    height: 2.7rem;\n    color: #999999; }\n    .add-product-component .input-line .app-input-placeholder.focused {\n      top: -12px !important;\n      right: 0;\n      font-size: 1rem !important;\n      height: auto;\n      line-height: inherit; }\n\n.add-product-component .price-input-line {\n  width: 50px;\n  height: 2.7%;\n  font-size: 1.1rem;\n  font-weight: 500;\n  background: inherit;\n  margin-left: 60px;\n  margin-right: auto; }\n  .add-product-component .price-input-line input {\n    font-weight: 900;\n    width: 100%;\n    background: inherit;\n    font-size: 1.1rem;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    color: #999999; }\n\n.add-product-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.add-product-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProductComponent = (function () {
    function AddProductComponent(router, activatedRoute, productService, cafeteriaService, eventService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.createdProduct = new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["d" /* CreatedProduct */]();
        this.minutes = new Array(18);
        this.emptyProduct = false;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this._categoryId = +param.catId;
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
        });
        this.__getVegTypes();
    };
    AddProductComponent.prototype.saveProduct = function () {
        var _this = this;
        this.createdProduct.pr_caf_id = '' + this._cafeteriaId;
        this.createdProduct.pr_cat_id = '' + this._categoryId;
        this.createdProduct.product.pr_price = '' + this.createdProduct.product.pr_price;
        console.log('this.createdProduct', this.createdProduct);
        console.log('this.uploadedFile', this.uploadedFile);
        this.productService.createMainProduct(this.createdProduct).then(function (response) {
            console.log('response ==> ', response);
            if (_this.uploadedFile) {
                _this.productService.saveImage(_this.uploadedFile, response.data.prod_id).then(function (imgResponse) {
                    console.log('imgResponse', imgResponse);
                    _this.goBack();
                }, function (imgError) {
                    console.warn('imgError', imgError);
                });
            }
            else {
                _this.goBack();
            }
            // todo: delete after BE connect
            _this.goBack();
        }, function (error) {
            console.log('error ===> ', error);
        });
    };
    AddProductComponent.prototype.goBack = function () {
        this.router.navigate(['product-list', this._cafeteriaId, this._categoryId]);
    };
    AddProductComponent.prototype.selectCookTime = function (minute) {
        this.createdProduct.product.pr_cook_time = '' + minute;
    };
    AddProductComponent.prototype.addNewExtraCategory = function () {
        var lastIndex = 0;
        this.createdProduct.extra_categories.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["a" /* ExtraCategories */]());
        lastIndex = this.createdProduct.extra_categories.length - 1;
        // todo: сделать что то с этим говнищем
        this.createdProduct.extra_categories[lastIndex].extra_info.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["e" /* ExtraInfo */]());
    };
    AddProductComponent.prototype.addDoubleExtraProduct = function (doubleExtraProducts) {
        doubleExtraProducts.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["b" /* DoubleExtraProduct */]());
    };
    AddProductComponent.prototype.addExtraInfo = function (extra_info) {
        extra_info.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["e" /* ExtraInfo */]());
    };
    AddProductComponent.prototype.isSubmitButtonDisabled = function () {
        var result = false;
        if (!this.createdProduct.product.pr_name ||
            !this.createdProduct.product.pr_price ||
            !this.createdProduct.product.pr_cook_time ||
            !this.createdProduct.product.pr_descr) {
            result = true;
        }
        return result;
    };
    AddProductComponent.prototype.removeExtraCategory = function (index) {
        this.createdProduct.extra_categories.splice(index, 1);
    };
    AddProductComponent.prototype.openFileUploader = function (fileUploader) {
        var _this = this;
        if (fileUploader.files && fileUploader.files[0]) {
            var files = fileUploader.files;
            var file_1 = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            reader_1.onload = (function () {
                _this.uploadedFile = file_1;
                _this.uploadedImage = reader_1.result;
                // image size check 150x150
                // const img: HTMLImageElement = new Image();
                // img.src = reader.result;
                // img.onload = () => {
                //   if (img.width <= 150 && img.height <= 150) {
                //     // prev.src = this.src;
                //     this.uploadedImage = img.src;
                //   } else {
                //     console.log('ERROR');
                //   }
                // };
            }).bind(this);
            reader_1.onerror = (function (error) {
                console.log('Error: ', error);
            });
        }
    };
    AddProductComponent.prototype.deleteImage = function () {
        this.uploadedFile = null;
        this.uploadedImage = null;
    };
    AddProductComponent.prototype.makeEmpty = function (status) {
        this.createdProduct.product.pr_type = status;
    };
    ///
    AddProductComponent.prototype.__makeEmptyProduct = function (productId) {
        var _this = this;
        this.productService.emptyProduct(productId).then(function () {
            _this.router.navigate(['removed-products', _this._cafeteriaId, _this._categoryId]);
        });
    };
    AddProductComponent.prototype.__getVegTypes = function () {
        var _this = this;
        this.productService.getVegTypes().then(function (response) {
            _this.vegTypes = response.data;
        });
    };
    return AddProductComponent;
}());
AddProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-add-product',
        template: __webpack_require__("../../../../../src/app/pages/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/add-product/add-product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _e || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/add-product/add-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_product_routing_module__ = __webpack_require__("../../../../../src/app/pages/add-product/add-product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_product_component__ = __webpack_require__("../../../../../src/app/pages/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddProductModule = (function () {
    function AddProductModule() {
    }
    return AddProductModule;
}());
AddProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__add_product_routing_module__["a" /* AddProductRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__add_product_component__["a" /* AddProductComponent */]
        ]
    })
], AddProductModule);

//# sourceMappingURL=add-product.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-list/cafeteria-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cafeteria_list_component__ = __webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'welcome-page',
        component: __WEBPACK_IMPORTED_MODULE_3__cafeteria_list_component__["a" /* CafeteriaListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var CafeteriaListRoutingModule = (function () {
    function CafeteriaListRoutingModule() {
    }
    return CafeteriaListRoutingModule;
}());
CafeteriaListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CafeteriaListRoutingModule);

//# sourceMappingURL=cafeteria-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cafeteria-list-component\">\n  <div class=\"component-title component-center-element\" *ngIf=\"cafeteriaList?.length === 0\">\n    <div dir=\"rtl\" style=\"margin-top: 1rem;\">\n      ברוכים הבאים\n    </div>\n    <div dir=\"rtl\" style=\"margin-top: 1rem;\">\n      אנחנו שמחים שבחרתם torless.\n    </div>\n    <div dir=\"rtl\" style=\"margin-top: 1rem;\">\n\n\n      **על מנת שתוכלו להתחיל להרוויח, עליכם להשלים **2 שלבים:    </div>\n\n  </div>\n\n  <div class=\"list-options\" *ngIf=\"cafeteriaList?.length === 0\">\n    <div class=\"list-element\">\n      <div class=\"element-label\">\n        <span>1</span>\n      </div>\n      <div class=\"element-text\">\n        הקמת סניף ראשון\n      </div>\n    </div>\n    <div class=\"list-element\">\n      <div class=\"element-label\">\n        <span>2</span>\n      </div>\n      <div class=\"element-text\">\n        יצירת  תפריט לסניף\n      </div>\n    </div>\n  </div>\n\n  <div class=\"component-button-container\" *ngIf=\"cafeteriaList?.length === 0\">\n    <div class=\"button-description\">\n      אנחנו נלווה אתכם לכל אורך התהליך ונדאג שתסיימו אותו במהירות.\n    </div>\n    <button (click)=\"selectNewCafeteriaType()\">\n      <span>+</span>\n      לחצו להקמת סניף ראשון\n    </button>\n  </div>\n\n  <div class=\"table-images-container\" *ngIf=\"cafeteriaList?.length === 0\">\n    <div class=\"table-image\">\n      <img src=\"./assets/icon/table-image.png\">\n    </div>\n    <div class=\"list-element\">\n      <img src=\"./assets/icon/table-image.png\">\n    </div>\n  </div>\n\n  <div class=\"real-time-information-component\">\n    <div class=\"component-description\">\n     <div class=\"label\">\n       מידע זמן אמת\n     </div>\n      <div class=\"dropdown\">\n(כל הקפיטריות (0\n      </div>\n    </div>\n    <div class=\"blocks-container\">\n      <div *ngFor=\"let cafeteria of cafeteriaList\" class=\"real-time-information-block\">\n        <!--<div class=\"title\">הזמנות בטיפול</div>-->\n        <div class=\"title\" (click)=\"editCafeteria(cafeteria)\">\n          {{cafeteria.caf_name}}\n        </div>\n        <div class=\"content\" (click)=\"editCafeteria(cafeteria)\">-</div>\n        <div class=\"footer\" (click)=\"showCafeteriaMenu(cafeteria)\">\n          <div>\n            <!--קפיטריה מובילה בהזמנות: אין נתונים-->\n            {{cafeteria.caf_name + '\\'s'}} menu\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"cafeteriaList?.length === 0\">\n        no items\n      </div>\n    </div>\n  </div>\n\n  <div class=\"time-information\">\n    <div class=\"component-description\">\n      <div class=\"label\">\n        מידע לאורך זמן\n      </div>\n      <div class=\"dropdown\">\n        קפיטריה ב’ בנין 678 מכללת ספי...0\n      </div>\n      <div class=\"dropdown\">\n        היום ה-22/12/2016\n      </div>\n    </div>\n\n    <div class=\"time-information-component-content\">\n      <div class=\"block\">\n        <div class=\"block-header\">הזמנות שנעשו</div>\n        <div class=\"block-content\">-</div>\n      </div>\n      <div class=\"block\">\n        <div class=\"block-header\">מחיר הזמנה ממוצעת</div>\n        <div class=\"block-content\">-</div>\n      </div>\n      <div class=\"block\">\n        <div class=\"block-header\">חיסכון זמן ללקוחותייך (שעות)</div>\n        <div class=\"block-content\">-</div>\n      </div>\n      <div class=\"block\" right-border>\n        <div class=\"block-header\">הכנסות מ-Torless</div>\n        <div class=\"block-content\">-</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"canvas-block\">\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cafeteria-list-component .component-center-element div {\n  font-size: 2.1rem;\n  display: block;\n  margin: 0 auto;\n  width: 58%;\n  margin-top: 6.2rem; }\n\n.cafeteria-list-component .cafe__title__component__prev {\n  display: block;\n  margin-top: 3.85rem;\n  font-size: 1.4rem; }\n\n.cafeteria-list-component .list-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  width: 50%;\n  margin: 0 auto 40px;\n  min-width: 520px;\n  margin-top: 2rem;\n  width: 42%;\n  min-width: 0; }\n  @media screen and (max-width: 760px) {\n    .cafeteria-list-component .list-options {\n      width: 100%;\n      min-width: 0;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; } }\n  .cafeteria-list-component .list-options .list-element {\n    width: 45%;\n    padding: 5px 10px 5px;\n    text-align: right;\n    width: 50%;\n    padding: 0.3rem 1rem;\n    text-align: right;\n    float: right; }\n    @media screen and (max-width: 760px) {\n      .cafeteria-list-component .list-options .list-element {\n        margin: 0 auto; } }\n    .cafeteria-list-component .list-options .list-element .element-label {\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 25px;\n      height: 25px;\n      text-align: center;\n      border: 1px solid #c9c9c9;\n      background: #fff;\n      font-weight: 900;\n      border-radius: 100%;\n      width: 2rem;\n      height: 2rem;\n      font-family: sans-serif;\n      font-size: 1.5rem; }\n      .cafeteria-list-component .list-options .list-element .element-label span {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center; }\n    .cafeteria-list-component .list-options .list-element .element-text {\n      padding-top: 10px;\n      font-weight: bolder;\n      font-size: 1.4rem;\n      font-size: 1.8rem;\n      padding-top: 0.25rem; }\n\n.cafeteria-list-component .component-button-container {\n  text-align: center;\n  margin-bottom: 40px; }\n  .cafeteria-list-component .component-button-container .button-description {\n    font-size: 1.2rem;\n    margin-top: 3.4rem;\n    margin-bottom: 0; }\n  .cafeteria-list-component .component-button-container button {\n    background: #fff557;\n    font-size: 1rem;\n    font-weight: 900;\n    width: 48%;\n    min-width: 0;\n    max-width: none;\n    font-size: 1.6rem;\n    height: 3.8rem;\n    box-sizing: border-box;\n    margin-bottom: 0.7rem;\n    margin-top: 0.7rem;\n    margin-bottom: 0; }\n    .cafeteria-list-component .component-button-container button:hover, .cafeteria-list-component .component-button-container button:active {\n      background: #c2ba37; }\n    .cafeteria-list-component .component-button-container button span {\n      display: inline-block;\n      font-size: 1.7rem;\n      padding: 0 2rem; }\n    @media screen and (max-width: 520px) {\n      .cafeteria-list-component .component-button-container button {\n        width: 90%;\n        min-width: 0; } }\n  .cafeteria-list-component .component-button-container button[disabled] {\n    cursor: not-allowed; }\n\n.cafeteria-list-component .table-images-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 60%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0 auto 60px;\n  width: 47.5%;\n  max-width: none;\n  margin-top: 6.3rem; }\n  @media screen and (max-width: 760px) {\n    .cafeteria-list-component .table-images-container {\n      width: 100%;\n      min-width: 0; } }\n\n.cafeteria-list-component .component-input input {\n  width: 100%;\n  height: 34px;\n  font-size: 1.1rem;\n  font-weight: 300; }\n\n.cafeteria-list-component .component-title {\n  text-align: center;\n  font-size: 1.3rem;\n  margin: 40px auto 20px; }\n\n.cafeteria-list-component .branch-create-header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 0 20px 0; }\n  .cafeteria-list-component .branch-create-header .info {\n    margin: 0 auto; }\n\n.cafeteria-list-component .component-content {\n  position: relative; }\n  @media screen and (max-width: 940px) {\n    .cafeteria-list-component .component-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: column-reverse;\n              flex-direction: column-reverse; } }\n  .cafeteria-list-component .component-content .register-container {\n    position: absolute;\n    width: 25%;\n    margin: 0 auto; }\n    @media screen and (max-width: 940px) {\n      .cafeteria-list-component .component-content .register-container {\n        position: relative;\n        width: 100%;\n        max-width: 300px; } }\n    .cafeteria-list-component .component-content .register-container .register-label {\n      text-align: center;\n      font-size: 0.9rem;\n      font-weight: 900;\n      margin-bottom: 20px; }\n  @media screen and (max-width: 940px) {\n    .cafeteria-list-component .component-content .branch-create-container {\n      margin-bottom: 40px; } }\n  .cafeteria-list-component .component-content .branch-create-container .branch-create-label {\n    text-align: end;\n    color: #484848;\n    margin-bottom: 25px; }\n\n.real-time-information-component,\n.time-information {\n  width: 100%;\n  max-width: 1220px;\n  margin: 10px auto;\n  margin-top: 40px; }\n  .real-time-information-component .component-description,\n  .time-information .component-description {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    margin-left: auto;\n    margin-bottom: 5px;\n    width: 100%; }\n    .real-time-information-component .component-description .label,\n    .real-time-information-component .component-description .dropdown,\n    .time-information .component-description .label,\n    .time-information .component-description .dropdown {\n      width: 23%;\n      margin-left: 3%;\n      text-align: right;\n      font-size: 1.7rem;\n      font-weight: 700; }\n      @media screen and (max-width: 940px) {\n        .real-time-information-component .component-description .label,\n        .real-time-information-component .component-description .dropdown,\n        .time-information .component-description .label,\n        .time-information .component-description .dropdown {\n          width: 46%;\n          margin-left: 0; } }\n    @media screen and (max-width: 940px) {\n      .real-time-information-component .component-description,\n      .time-information .component-description {\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between; } }\n  .real-time-information-component .blocks-container,\n  .time-information .blocks-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow: hidden;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    margin-top: 0.8rem; }\n    .real-time-information-component .blocks-container .real-time-information-block,\n    .time-information .blocks-container .real-time-information-block {\n      border-radius: 5px;\n      background: #fff;\n      width: calc(100%/4 - 1rem);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin: 0 0.5rem 1rem; }\n      .real-time-information-component .blocks-container .real-time-information-block .title,\n      .time-information .blocks-container .real-time-information-block .title {\n        padding: 0.5rem;\n        font-size: 1.4rem;\n        text-align: center;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n      .real-time-information-component .blocks-container .real-time-information-block .content,\n      .time-information .blocks-container .real-time-information-block .content {\n        padding: 25px;\n        text-align: center;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        padding: 1.8rem;\n        font-size: 3rem;\n        height: auto;\n        margin: 0;\n        padding-top: 0.2rem; }\n      .real-time-information-component .blocks-container .real-time-information-block .footer,\n      .time-information .blocks-container .real-time-information-block .footer {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        height: 100%;\n        /*border-top: 1px solid #c9c9c9;*/\n        padding: 10px;\n        font-size: 1.2rem;\n        color: #c9c9c9;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none; }\n        .real-time-information-component .blocks-container .real-time-information-block .footer div,\n        .time-information .blocks-container .real-time-information-block .footer div {\n          text-align: center;\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center; }\n        @media screen and (max-width: 940px) {\n          .real-time-information-component .blocks-container .real-time-information-block .footer,\n          .time-information .blocks-container .real-time-information-block .footer {\n            font-size: 0.6rem; } }\n      @media screen and (max-width: 940px) {\n        .real-time-information-component .blocks-container .real-time-information-block,\n        .time-information .blocks-container .real-time-information-block {\n          width: 46%; } }\n    @media screen and (max-width: 940px) {\n      .real-time-information-component .blocks-container,\n      .time-information .blocks-container {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap; } }\n  .real-time-information-component .time-information-component-content,\n  .time-information .time-information-component-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    border-radius: 5px;\n    background: #353b41;\n    margin-bottom: 40px; }\n    .real-time-information-component .time-information-component-content .block,\n    .time-information .time-information-component-content .block {\n      width: 23%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n      .real-time-information-component .time-information-component-content .block .block-header,\n      .time-information .time-information-component-content .block .block-header {\n        padding: 10px;\n        font-size: 0.9rem;\n        text-align: center;\n        color: #fff;\n        font-size: 1.25rem;\n        padding-top: 0.5rem;\n        padding-bottom: 0.2rem; }\n      .real-time-information-component .time-information-component-content .block .block-content,\n      .time-information .time-information-component-content .block .block-content {\n        padding: 30px;\n        text-align: center;\n        color: #b8b44f; }\n    .real-time-information-component .time-information-component-content [right-border],\n    .time-information .time-information-component-content [right-border] {\n      border-right: 1px solid #8f8f8f; }\n\n.time-information {\n  margin-top: 3rem; }\n\n.canvas-block {\n  width: 90%;\n  height: 300px;\n  border-radius: 5px;\n  max-width: 1220px;\n  margin: 10px auto;\n  background: #353b41;\n  width: 100%;\n  margin-top: 4rem;\n  height: 21rem;\n  margin-bottom: 15rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CafeteriaListComponent = (function () {
    function CafeteriaListComponent(cafeteriaService, eventService, router) {
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.router = router;
        this.cafeteriaList = [];
    }
    CafeteriaListComponent.prototype.ngOnInit = function () {
        this._getCafeteriaList();
        this.eventService.headerText$.emit('');
    };
    CafeteriaListComponent.prototype.selectNewCafeteriaType = function () {
        this.router.navigateByUrl('/cafeteria-type');
    };
    CafeteriaListComponent.prototype.editCafeteria = function (cafeteria) {
        console.log('cafeteria ==> ', cafeteria);
        this.router.navigate(['edit-cafeteria', cafeteria.id]);
    };
    CafeteriaListComponent.prototype.showCafeteriaMenu = function (cafeteria) {
        this.router.navigate(['categories-list', cafeteria.id]);
    };
    /////
    CafeteriaListComponent.prototype._getCafeteriaList = function () {
        var _this = this;
        this.cafeteriaService.getUserCafeterias().then(function (response) {
            console.log('response ===> ', response);
            _this.cafeteriaList = _this._filter(response.data || []);
            console.log('this.cafeteriaList', _this.cafeteriaList);
        }, function (error) {
            console.log('error', error);
        });
    };
    CafeteriaListComponent.prototype._filter = function (array) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](array, function (item) {
            return item.id;
        });
    };
    return CafeteriaListComponent;
}());
CafeteriaListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-cafeteria-list',
        template: __webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CafeteriaListComponent);

var _a, _b, _c;
//# sourceMappingURL=cafeteria-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-list/cafeteria-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cafeteria_list_routing_module__ = __webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cafeteria_list_component__ = __webpack_require__("../../../../../src/app/pages/cafeteria-list/cafeteria-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CafeteriaListModule = (function () {
    function CafeteriaListModule() {
    }
    return CafeteriaListModule;
}());
CafeteriaListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__cafeteria_list_routing_module__["a" /* CafeteriaListRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__cafeteria_list_component__["a" /* CafeteriaListComponent */]
        ]
    })
], CafeteriaListModule);

//# sourceMappingURL=cafeteria-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-type/cafeteria-type-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cafeteria_type_component__ = __webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaTypeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    { path: 'cafeteria-type', component: __WEBPACK_IMPORTED_MODULE_3__cafeteria_type_component__["a" /* CafeteriaTypeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]] }
];
var CafeteriaTypeRoutingModule = (function () {
    function CafeteriaTypeRoutingModule() {
    }
    return CafeteriaTypeRoutingModule;
}());
CafeteriaTypeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CafeteriaTypeRoutingModule);

//# sourceMappingURL=cafeteria-type-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cafeteria-type-component\">\n  <div class=\"component-title\">\n הקמת סניף\n  </div>\n  <div style=\"width: 40%; margin-left: auto;\">\n    <app-progress-bar [width]=\"100/3\" [dots]=\"3\"></app-progress-bar>\n  </div>\n\n    <div class=\"activity-types-block__title\">מה תחום פעילות הסניף?</div>\n\n  <div class=\"activity-types-block\">\n\n    <!-- cafeteria -->\n    <div class=\"activity-block\" (click)=\"selectElement(1)\" [ngClass]=\"{'checked': selectedCafeteriaType === 1}\">\n      <div class=\"text\">\n        קפיטריה\n      </div>\n      <div class=\"check-icon\" *ngIf=\"selectedCafeteriaType === 1\">\n        <img src=\"./assets/icon/checked.svg\">\n      </div>\n    </div>\n    <!-- salad-bar -->\n    <div class=\"activity-block\" (click)=\"selectElement(2)\" [ngClass]=\"{'checked': selectedCafeteriaType === 2}\">\n      <div class=\"text\">\n        סלט-בר\n      </div>\n      <div class=\"check-icon\" *ngIf=\"selectedCafeteriaType === 2\">\n        <img src=\"./assets/icon/checked.svg\">\n      </div>\n    </div>\n    <!-- manza -->\n    <div class=\"activity-block\" (click)=\"selectElement(3)\" [ngClass]=\"{'checked': selectedCafeteriaType === 3}\">\n      <div class=\"text\">\n        מנזה\n      </div>\n      <div class=\"check-icon\" *ngIf=\"selectedCafeteriaType === 3\">\n        <img src=\"./assets/icon/checked.svg\">\n      </div>\n    </div>\n  </div>\n  <div class=\"duplication-options\" *ngIf=\"selectedCafeteriaType && cafeterias?.length > 0\">\n    <app-select [list]=\"cafeterias\" key=\"caf_name\" [placeholder]=\"'שכפול סניף קיים'\" (setItem)=\"selectCafeteria($event)\"></app-select>\n  </div>\n\n  <div class=\"button-container\">\n    <button [disabled]=\"!selectedCafeteriaType\" (click)=\"submitCafeteriaType(selectedCafeteriaType)\">\n      המשיכו\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cafeteria-type-component .component-title {\n  text-align: right;\n  font-size: 1.4rem;\n  font-weight: 900;\n  margin-bottom: 40px;\n  font-size: 2.4rem;\n  font-family: sans-serif;\n  margin-top: 6.9rem;\n  margin-bottom: 1rem; }\n\n.cafeteria-type-component .activity-types-block__title {\n  margin-top: 5.9rem;\n  text-align: right;\n  font-size: 1.4rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  direction: rtl; }\n\n.cafeteria-type-component .activity-types-block {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  margin-bottom: 40px; }\n  .cafeteria-type-component .activity-types-block .activity-block.checked {\n    background: #353b41;\n    position: relative;\n    color: #fff; }\n  .cafeteria-type-component .activity-types-block .activity-block {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    position: relative;\n    width: 23%;\n    height: 175px;\n    margin-left: 2%;\n    border-radius: 5px;\n    background: #fff;\n    font-size: 2rem;\n    cursor: pointer; }\n    .cafeteria-type-component .activity-types-block .activity-block .text {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      font-size: 3rem;\n      font-family: sans-serif;\n      margin: auto; }\n    .cafeteria-type-component .activity-types-block .activity-block .check-icon {\n      position: absolute;\n      bottom: 10px;\n      width: 100%;\n      text-align: center; }\n      .cafeteria-type-component .activity-types-block .activity-block .check-icon img {\n        width: 25px; }\n\n.cafeteria-type-component .duplication-options {\n  text-align: right;\n  margin-bottom: 40px;\n  width: 40%;\n  margin-left: auto; }\n\n.cafeteria-type-component .button-container {\n  width: 23%;\n  margin-left: auto;\n  margin-bottom: 10rem; }\n  .cafeteria-type-component .button-container button {\n    width: 100%;\n    height: 3.5rem;\n    background: #fff557;\n    font-size: 1.4rem;\n    font-weight: 900;\n    font-family: sans-serif;\n    text-align: center;\n    transition-duration: 0.3s; }\n    .cafeteria-type-component .button-container button:active, .cafeteria-type-component .button-container button:hover {\n      background: #c2ba37; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CafeteriaTypeComponent = (function () {
    function CafeteriaTypeComponent(elementRef, renderer, cafeteriaService, router, eventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cafeteriaService = cafeteriaService;
        this.router = router;
        this.eventService = eventService;
        this.complete = 50; // 25, 50, 75, 100
    }
    CafeteriaTypeComponent.prototype.ngOnInit = function () {
        this.eventService.headerText$.emit('');
    };
    CafeteriaTypeComponent.prototype.selectCafeteria = function (event) {
        this.selectedCafeteriaId = event ? event.id : null;
    };
    CafeteriaTypeComponent.prototype.selectElement = function (typeId) {
        var _this = this;
        this.cafeteriaService.getUserCafeterias().then(function (res) {
            _this.cafeterias = _this._filter(res.data);
            console.log('this.cafeterias', _this.cafeterias);
            _this.selectedCafeteriaType = typeId;
        }, function (err) {
            _this.selectedCafeteriaType = typeId;
        });
    };
    CafeteriaTypeComponent.prototype.submitCafeteriaType = function (typeId) {
        // , { queryParams: { page: this.page + 1 } })
        var queryParams = {};
        console.log('this.selectedCafeteriaId', this.selectedCafeteriaId);
        if (this.selectedCafeteriaId) {
            queryParams = { queryParams: { id: this.selectedCafeteriaId } };
        }
        this.router.navigate(['/create-cafeteria', typeId], queryParams);
    };
    CafeteriaTypeComponent.prototype._filter = function (array) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["filter"](array, function (item) {
            return item.id;
        });
    };
    return CafeteriaTypeComponent;
}());
CafeteriaTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-create-branch',
        template: __webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _e || Object])
], CafeteriaTypeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cafeteria-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/cafeteria-type/cafeteria-type.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cafeteria_type_routing_module__ = __webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cafeteria_type_component__ = __webpack_require__("../../../../../src/app/pages/cafeteria-type/cafeteria-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaTypeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CafeteriaTypeModule = (function () {
    function CafeteriaTypeModule() {
    }
    return CafeteriaTypeModule;
}());
CafeteriaTypeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__cafeteria_type_routing_module__["a" /* CafeteriaTypeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__cafeteria_type_component__["a" /* CafeteriaTypeComponent */]
        ]
    })
], CafeteriaTypeModule);

//# sourceMappingURL=cafeteria-type.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/categories-list/categories-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_list_component__ = __webpack_require__("../../../../../src/app/pages/categories-list/categories-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'categories-list/:cafId',
        component: __WEBPACK_IMPORTED_MODULE_3__categories_list_component__["a" /* CategoriesListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var CategoriesListRoutingModule = (function () {
    function CategoriesListRoutingModule() {
    }
    return CategoriesListRoutingModule;
}());
CategoriesListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CategoriesListRoutingModule);

//# sourceMappingURL=categories-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/categories-list/categories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories-list-component\">\n\n  <div class=\"torless-page__header\">\n    <button (click)=\"addNewCategory()\" class=\"torless-page__add-new-element\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\"> הוסף קטגוריה</span>\n    </button>\n    <div class=\"title\">\n      קטגוריות\n    </div>\n  </div>\n\n  <!--<div>-->\n    <!--<span (click)=\"tmpCafeteriaList()\">go to cafeterias list</span>-->\n  <!--</div>-->\n\n  <div class=\"torless-page__list new-element\" *ngIf=\"newCategory\">\n    <div class=\"element\">\n      <div style=\"position: absolute; top: -12px; right: 18px;\">\n        <app-information [hintText]=\"'1004'\" hintPosition=\"top left\" iconColor=\"#ff5b57\"></app-information>\n        <app-information [hintText]=\"'1005'\" hintPosition=\"top left\" iconColor=\"#ff5b57\"></app-information>\n      </div>\n      <div class=\"dots\">\n        <img src=\"./assets/icon/more.svg\">\n      </div>\n      <div class=\"input-line\">\n        <input type=\"text\" [(ngModel)]=\"newCategory.ct_name\" placeholder=\"שם קטגוריה\">\n      </div>\n\n      <div class=\"amount\">\n        <span class=\"number\">0</span>\n        <span class=\"description\">מספר</span>\n      </div>\n\n\n      <div class=\"buttons\">\n        <button class=\"save-button\" (click)=\"saveNewCategory(newCategory)\" [disabled]=\"!newCategory.ct_name\">\n          רשימת מוצרים\n        </button>\n        <span class=\"remove-category\" (click)=\"removeNewCategory()\">להסיר קטגוריה</span>\n      </div>\n\n\n    </div>\n  </div>\n\n  <div class=\"torless-page__list\" *ngIf=\"categories?.length > 0\" dnd-sortable-container [sortableData]=\"categories\">\n\n    <div class=\"element\" *ngFor=\"let category of categories; let i = index\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"categoriesDropped()\">\n      <div class=\"dots\">\n        <img src=\"./assets/icon/more.svg\">\n      </div>\n      <div class=\"name\" *ngIf=\"!category.edit\">\n        <span (click)=\"setEditMode(category)\">{{ category.category_name || 'NA' }}</span>\n      </div>\n\n      <div class=\"input-line\" *ngIf=\"category.edit && editBuffer\">\n        <input type=\"text\" [(ngModel)]=\"editBuffer.category_name\" placeholder=\"שם קטגוריה\" (blur)=\"editCategory(editBuffer)\">\n      </div>\n\n\n      <div class=\"amount\">\n        <span class=\"number\">{{ category.prod_col }}</span>\n        <span class=\"description\">מספר</span>\n      </div>\n\n      <div class=\"buttons\">\n        <button class=\"redirect-button\" (click)=\"goToProducts(category.cat_id)\">\n          לשמור קטגוריה חדשה\n        </button>\n        <span class=\"remove-category\">להסיר קטגוריה</span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"footer\" *ngIf=\"categories?.length >= 5\">\n    <button (click)=\"addNewCategory()\" class=\"torless-page__add-new-element\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">הוסף קטגוריה</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/categories-list/categories-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categories-list-component .new-element {\n  margin-bottom: 40px; }\n  .categories-list-component .new-element .element {\n    position: relative; }\n\n.categories-list-component .torless-page__list .name {\n  font-size: 1.5rem; }\n\n.categories-list-component .torless-page__list .input-line {\n  margin-bottom: 0; }\n\n.categories-list-component .torless-page__list input {\n  color: #000;\n  font-weight: 800; }\n  .categories-list-component .torless-page__list input::-webkit-input-placeholder {\n    color: #bababa;\n    font-size: 1.6rem;\n    font-weight: 300; }\n  .categories-list-component .torless-page__list input:-moz-placeholder {\n    color: #bababa;\n    font-size: 1.6rem;\n    font-weight: 300; }\n  .categories-list-component .torless-page__list input::-moz-placeholder {\n    color: #bababa;\n    font-size: 1.6rem;\n    font-weight: 300; }\n  .categories-list-component .torless-page__list input:-ms-input-placeholder {\n    color: #bababa;\n    font-size: 1.6rem;\n    font-weight: 300; }\n\n.categories-list-component .torless-page__list .amount {\n  margin-right: auto;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-item-align: center;\n      align-self: center;\n  color: #a3a3a3;\n  font-family: sans-serif;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .categories-list-component .torless-page__list .amount .description {\n    font-size: 1rem;\n    letter-spacing: -1px; }\n    .categories-list-component .torless-page__list .amount .description:after {\n      content: '--';\n      color: #fff; }\n\n.categories-list-component .torless-page__list .buttons {\n  margin-right: auto;\n  font-family: sans-serif; }\n  .categories-list-component .torless-page__list .buttons .remove-category {\n    display: inline-block;\n    margin-left: 15px;\n    color: #a3a3a3;\n    vertical-align: middle;\n    letter-spacing: -1px;\n    font-size: 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n    .categories-list-component .torless-page__list .buttons .remove-category:hover {\n      text-decoration: underline; }\n  .categories-list-component .torless-page__list .buttons .save-button,\n  .categories-list-component .torless-page__list .buttons .redirect-button {\n    width: 230px;\n    padding: 10px;\n    color: #000;\n    background: #fff557;\n    font-size: 1.1rem; }\n    .categories-list-component .torless-page__list .buttons .save-button:active, .categories-list-component .torless-page__list .buttons .save-button:hover,\n    .categories-list-component .torless-page__list .buttons .redirect-button:active,\n    .categories-list-component .torless-page__list .buttons .redirect-button:hover {\n      background: #c2ba37; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/categories-list/categories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesListComponent = (function () {
    function CategoriesListComponent(categoryService, cafeteriaService, eventService, activatedRoute, router) {
        this.categoryService = categoryService;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this._getCategoriesForCafeteria(+param.cafId);
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
        });
    };
    CategoriesListComponent.prototype.saveNewCategory = function (newCategory) {
        var _this = this;
        newCategory.ct_caf_id = this._cafeteriaId;
        this.categoryService.createMainCategory(newCategory).then(function (response) {
            _this._getCategoriesForCafeteria(_this._cafeteriaId);
            _this.newCategory = null;
        }, function (error) {
            console.log('error ==> ', error);
        });
    };
    CategoriesListComponent.prototype.addNewCategory = function () {
        this.newCategory = new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["g" /* CreatedMainCategoryClass */]();
    };
    CategoriesListComponent.prototype.goToProducts = function (catId) {
        this.router.navigate(['product-list', this._cafeteriaId, catId]);
    };
    CategoriesListComponent.prototype.categoriesDropped = function () {
        var orderedCategories = [];
        this.categories.forEach(function (item, i) {
            orderedCategories.push({
                cat_id: item.cat_id,
                cat_pos: i + 1
            });
        });
        this.categoryService.setCategoryOrder(this._cafeteriaId, orderedCategories);
    };
    CategoriesListComponent.prototype.tmpCafeteriaList = function () {
        this.router.navigate(['welcome-page']);
    };
    CategoriesListComponent.prototype.removeNewCategory = function () {
        this.newCategory = null;
    };
    CategoriesListComponent.prototype.setEditMode = function (category) {
        var _this = this;
        this.categories.forEach(function (item) {
            // item.edit = (category.cat_id === item.cat_id);
            if (category.cat_id === item.cat_id) {
                _this.editBuffer = _this.__test(category);
                item.edit = true;
            }
            else {
                item.edit = false;
            }
        });
    };
    CategoriesListComponent.prototype.editCategory = function (buffer) {
        var _this = this;
        var _loop_1 = function (i, len) {
            if (buffer.cat_id === this_1.categories[i].cat_id) {
                if (buffer && buffer.category_name) {
                    var updatedCategory = new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["h" /* UpdatedMainCategory */](this_1._cafeteriaId, buffer.cat_id, buffer.category_name, buffer.prod_col);
                    // todo: add Update Category Method
                    this_1.categoryService.updateMainCategory(updatedCategory).then(function (response) {
                        _this.categories[i] = Object.assign({}, _this.editBuffer);
                    });
                }
                else {
                    this_1.categories[i].edit = false;
                }
                return "break";
            }
        };
        var this_1 = this;
        for (var i = 0, len = this.categories.length; i < len; i++) {
            var state_1 = _loop_1(i, len);
            if (state_1 === "break")
                break;
        }
    };
    ///
    CategoriesListComponent.prototype._getCategoriesForCafeteria = function (caf_id) {
        var _this = this;
        this.categoryService.getCategoriesForCafeteria(caf_id).then(function (response) {
            _this.categories = response.data.categories;
            console.log('this.categories', _this.categories);
        }, function (error) {
            console.log('error', error);
        });
    };
    CategoriesListComponent.prototype._goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    CategoriesListComponent.prototype.__test = function (obj) {
        var res = {};
        for (var key in obj) {
            res[key] = obj[key];
        }
        return res;
    };
    return CategoriesListComponent;
}());
CategoriesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-categories-list',
        template: __webpack_require__("../../../../../src/app/pages/categories-list/categories-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/categories-list/categories-list.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["d" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["d" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], CategoriesListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=categories-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/categories-list/categories-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories_list_routing_module__ = __webpack_require__("../../../../../src/app/pages/categories-list/categories-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_list_component__ = __webpack_require__("../../../../../src/app/pages/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CategoriesListModule = (function () {
    function CategoriesListModule() {
    }
    return CategoriesListModule;
}());
CategoriesListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__categories_list_routing_module__["a" /* CategoriesListRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__categories_list_component__["a" /* CategoriesListComponent */]
        ]
    })
], CategoriesListModule);

//# sourceMappingURL=categories-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confirm-email/confirm-email-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_email_component__ = __webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { AuthGuardService } from '../../services';
// COMPONENT

var routes = [
    {
        path: 'confirm-email/:token',
        component: __WEBPACK_IMPORTED_MODULE_2__confirm_email_component__["a" /* ConfirmEmailComponent */]
        // canActivate: [AuthGuardService]
    }
];
var ConfirmEmailRoutingModule = (function () {
    function ConfirmEmailRoutingModule() {
    }
    return ConfirmEmailRoutingModule;
}());
ConfirmEmailRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ConfirmEmailRoutingModule);

//# sourceMappingURL=confirm-email-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confirm-email/confirm-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"confirm-email-component\">\n\n  <div class=\"component-title component-center-element\">\n    <div class=\"title-label\">\n      הצלחת! חשבונך נפתח\n    </div>\n    <div class=\"title-description\">\n      .       רק עוד משהו אחרון לפני שמתחילים לרוויח - יותר\n    </div>\n  </div>\n\n\n  <div class=\"component-content\">\n\n    <div class=\"confirm-email-container component-center-element\">\n      <div class=\"confirm-email-label\">\n        SMS-        הזן/י כאן את הקוד שנישלח אליך ב\n      </div>\n      <div class=\"confirm-email-input-field component-input confirm-email\">\n        <input dir=\"rtl\" type=\"text\" [(ngModel)]=\"email\" appInput [placeholderMessage]=\"'email'\">\n        <span class=\"success-icon\" *ngIf=\"!confirmError && confirmSuccess\">\n          <img src=\"./assets/icon/success.png\">\n        </span>\n        <span class=\"error-icon\" *ngIf=\"confirmError && !confirmSuccess\">\n          <img src=\"./assets/icon/close.png\">\n        </span>\n        <span class=\"resend-sms\">שילחו לי שוב את הקוד</span>\n      </div>\n      <div class=\"button-container component-button-container\">\n        <button (click)=\"confirm(email)\" [disabled]=\"!validEmail(email)\">התחבר/י</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/confirm-email/confirm-email.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".confirm-email-component .component-center-element {\n  width: 40%;\n  margin: 0 auto; }\n  @media screen and (max-width: 940px) {\n    .confirm-email-component .component-center-element {\n      width: 100%;\n      max-width: 300px; } }\n\n.confirm-email-component .component-button-container button {\n  width: 100%;\n  height: 44px;\n  background: #fff557;\n  font-size: 0.9rem;\n  font-weight: 900; }\n  .confirm-email-component .component-button-container button:active, .confirm-email-component .component-button-container button:hover {\n    background: #c2ba37; }\n\n.confirm-email-component .component-button-container button[disabled] {\n  cursor: not-allowed; }\n\n.confirm-email-component .component-input input {\n  width: 100%;\n  height: 34px;\n  font-size: 1.1rem;\n  font-weight: 300; }\n\n.confirm-email-component .component-title {\n  text-align: center;\n  margin-bottom: 40px; }\n  .confirm-email-component .component-title .title-label {\n    font-size: 1.4rem;\n    font-weight: 800; }\n  .confirm-email-component .component-title .title-description {\n    font-size: 1.1rem; }\n\n.confirm-email-component .confirm-email-header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 0 20px 0; }\n  .confirm-email-component .confirm-email-header .info {\n    margin: 0 auto; }\n\n.confirm-email-component .component-content {\n  position: relative; }\n  @media screen and (max-width: 940px) {\n    .confirm-email-component .component-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: column-reverse;\n              flex-direction: column-reverse; } }\n  .confirm-email-component .component-content .register-container {\n    position: absolute;\n    width: 25%;\n    margin: 0 auto; }\n    @media screen and (max-width: 940px) {\n      .confirm-email-component .component-content .register-container {\n        position: relative;\n        width: 100%;\n        max-width: 300px; } }\n    .confirm-email-component .component-content .register-container .register-label {\n      text-align: center;\n      font-size: 0.9rem;\n      font-weight: 900;\n      margin-bottom: 20px; }\n  @media screen and (max-width: 940px) {\n    .confirm-email-component .component-content .confirm-email-container {\n      margin-bottom: 40px; } }\n  .confirm-email-component .component-content .confirm-email-container .confirm-email-label {\n    text-align: end;\n    color: #484848;\n    margin-bottom: 25px; }\n  .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field {\n    position: relative;\n    margin-bottom: 40px; }\n    .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field input {\n      background: inherit; }\n    .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field .resend-sms {\n      position: absolute;\n      right: 0;\n      bottom: -16px;\n      cursor: pointer;\n      font-size: 0.7rem;\n      border-bottom: 1px solid #656565;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n      .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field .resend-sms:hover {\n        color: #000;\n        border-bottom: 1px solid #000; }\n    .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field .success-icon,\n    .confirm-email-component .component-content .confirm-email-container .confirm-email-input-field .error-icon {\n      display: inline-block;\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/confirm-email/confirm-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmEmailComponent = (function () {
    function ConfirmEmailComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.confirmError = false;
        this.confirmSuccess = false;
        this._emailRegExp = /(.+)@(.+){2,}\.(.+){2,}/;
    }
    ConfirmEmailComponent.prototype.ngOnInit = function () {
        this.activatedRoute.params
            .subscribe(function (param) {
            console.log('param', param);
        });
    };
    ConfirmEmailComponent.prototype.confirm = function (email) {
        var _this = this;
        this.userService.confirmEmail(email).then(function (data) {
            console.log('data', data);
            _this.confirmError = false;
            _this.confirmSuccess = true;
        }, function (error) {
            _this.confirmError = true;
            _this.confirmSuccess = false;
        });
    };
    ConfirmEmailComponent.prototype.validEmail = function (email) {
        if (email) {
            return this._emailRegExp.test(email);
        }
        else {
            return false;
        }
    };
    return ConfirmEmailComponent;
}());
ConfirmEmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-confirm-email',
        template: __webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */]) === "function" && _b || Object])
], ConfirmEmailComponent);

var _a, _b;
//# sourceMappingURL=confirm-email.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/confirm-email/confirm-email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_email_routing_module__ = __webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_email_component__ = __webpack_require__("../../../../../src/app/pages/confirm-email/confirm-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmEmailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ConfirmEmailModule = (function () {
    function ConfirmEmailModule() {
    }
    return ConfirmEmailModule;
}());
ConfirmEmailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__confirm_email_routing_module__["a" /* ConfirmEmailRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__confirm_email_component__["a" /* ConfirmEmailComponent */]
        ]
    })
], ConfirmEmailModule);

//# sourceMappingURL=confirm-email.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-cafeteria/create-cafeteria-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_cafeteria_component__ = __webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCafeteriaRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    { path: 'create-cafeteria/:typeId', component: __WEBPACK_IMPORTED_MODULE_3__create_cafeteria_component__["a" /* CreateCafeteriaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]] },
    { path: 'create-cafeteria', redirectTo: 'cafeteria-type' }
];
var CreateCafeteriaRoutingModule = (function () {
    function CreateCafeteriaRoutingModule() {
    }
    return CreateCafeteriaRoutingModule;
}());
CreateCafeteriaRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CreateCafeteriaRoutingModule);

//# sourceMappingURL=create-cafeteria-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-cafeteria-component\">\n  <div class=\"component-title\">\n    הקמת סניף\n  </div>\n\n  <div style=\"width: 40%; margin-left: auto;\">\n    <app-progress-bar  [width]=\"(100/3)*2\" [dots]=\"3\"></app-progress-bar>\n  </div>\n\n\n  <div class=\"component-content\">\n    <div class=\"left-side-form\">\n      <!-- test -->\n\n      <div class=\"create-connection\">\n        <div class=\"notice\">\n          <div class=\"bold\" dir=\"rtl\">תהליך הקמת קפיטריה הוא חד פעמי.</div>\n          <div class=\"bold\" dir=\"rtl\">בעתיד, תוכלו לבצע עידכונים ושינויים בכל הבחירות שבצעתם</div>\n          <div class=\"normal\" dir=\"rtl\">בעתיד, תוכל/י לבצע עידכונים וש</div>\n        </div>\n\n          <div class=\"notice notice__second\">\n            <div class=\"bold\" dir=\"rtl\">נא הכינו את המידע הנ”ל:</div>\n\n            <div class=\"normal create__big__area\">\n\n              <span>רשימת קטגוריות המוצרים </span><br><span>שמות כל המוצרים</span><br><span>תיאור מפורט של כל המוצרים</span></div>\n\n          </div>\n\n        <div class=\"link\">\n          לעזרה - צורו קשר        </div>\n      </div>\n\n    </div>\n\n    <div class=\"cafeteria-details-form\">\n      <!--cafeteria details-->\n      <div class=\"form-label\">\n        פרטי ה      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdCafeteria.cafeteria.caf_name\" [placeholderMessage]=\"'שם'\">\n      </div>\n\n      <!--<div class=\"input-line required\">-->\n        <!--<input type=\"text\" appInput [(ngModel)]=\"createdCafeteria.cafeteria.caf_address\" [placeholderMessage]=\"'כתובת'\">-->\n      <!--</div>-->\n\n      <div class=\"select-line required\">\n        <app-select [list]=\"universities\" [value]=\"getBy(universities, createdCafeteria.cafeteria.caf_university_id, 'university_id', 'university_name')\" key=\"university_name\" [placeholder]=\"'המוסד האקדמי בו הקפיטריה נמצאת'\" (setItem)=\"selectUniversity($event)\"></app-select>\n      </div>\n\n      <div class=\"select-line required\">\n        <app-select [list]=\"universityBuildings\" [value]=\"getBy(universityBuildings, createdCafeteria.cafeteria.caf_university_building_id, 'building_id', 'building_name')\" key=\"building_name\" [placeholder]=\"'הבניין בו ממוקמת הכפיטריה'\" (setItem)=\"selectCafeteriaBuilding($event)\"></app-select>\n      </div>\n\n      <div class=\"select-line required\">\n        <app-select [list]=\"kosherTypes\" key=\"name\" [value]=\"getBy(kosherTypes, createdCafeteria.cafeteria.caf_kosher_type, 'id', 'name')\" [placeholder]=\"'כשרות'\" (setItem)=\"selectKosherType($event)\"></app-select>\n      </div>\n\n      <div class=\"radio-line\">\n        <div class=\"radio-button-element\">\n          <!-- not vegeterian -->\n          <span class=\"button-description\">\nיש מנות צמחוניות\n          </span>\n          <!--<input type=\"radio\"  name=\"sex\" >Female-->\n\n          <input type=\"radio\" [(ngModel)]=\"createdCafeteria.cafeteria.caf_veg_type\" [value]=\"0\">\n        </div>\n\n        <div class=\"radio-button-element\">\n          <!-- vegeterian -->\n          <span class=\"button-description\">\n            יש מנות טבעוניות\n          </span>\n          <input type=\"radio\" [(ngModel)]=\"createdCafeteria.cafeteria.caf_veg_type\" [value]=\"1\">\n          <!--<input type=\"radio\">-->\n        </div>\n      </div>\n\n      <div class=\"days-of-branch-activity\">\n        <div class=\"label\">\n          ימי פעילות הסניף\n        </div>\n        <div class=\"days required-top\">\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(1)\">\n              {{ getTimeByDayNumber(1) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(1, $event)\" [ngClass]=\"{'selected': showTimeText(1)}\">א</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(2)\">\n              {{ getTimeByDayNumber(2) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(2, $event)\" [ngClass]=\"{'selected': showTimeText(2)}\">ב</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(3)\">\n              {{ getTimeByDayNumber(3) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(3, $event)\" [ngClass]=\"{'selected': showTimeText(3)}\">ג</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(4)\">\n              {{ getTimeByDayNumber(4) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(4, $event)\" [ngClass]=\"{'selected': showTimeText(4)}\">ד</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(5)\">\n              {{ getTimeByDayNumber(5) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(5, $event)\" [ngClass]=\"{'selected': showTimeText(5)}\">ה</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(6)\">\n              {{ getTimeByDayNumber(6) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(6, $event)\" [ngClass]=\"{'selected': showTimeText(6)}\">ו</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(7)\">\n              {{ getTimeByDayNumber(7) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(7, $event)\" [ngClass]=\"{'selected': showTimeText(7)}\">ש</div>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"clear:both;\"></div>\n\n      <div class=\"upload__image__container\">\n        <input type=\"file\" (change)=\"openFileUploader(fileUploader)\" accept=\"image/jpeg,image/png,image/jpg\" data-max-size=\"1024\" #fileUploader>\n        <div class=\"upload__image__text\">\n\n          <div dir=\"rtl\">התמונה תופיע בכל פרסומי הסניף,</div>\n          <div dir=\"rtl\"> על כן, אנחנו ממליצים לצרף קובץ איכותי</div>\n\n          <div dir=\"rtl\">מידת התמונה <span style=\"display: inline-block; margin-right: 3px;\">400X400</span> פיקסלים</div>\n          <div dir=\"rtl\">בפורמט <span style=\"display: inline-block; margin-right: 3px;\">JPG / PNG</span></div>\n\n\n          <div class=\"upload__image__text__links\" *ngIf=\"uploadedImage\">\n            <div (click)=\"fileUploader.click()\">שינוי תמונה</div>\n            <div (click)=\"deleteImage()\">למחוק תמונה</div>\n          </div>\n        </div>\n        <div class=\"upload__image__btn\">\n          <div class=\"upload__image__btn__inner\" *ngIf=\"!uploadedImage\" (click)=\"fileUploader.click()\">\n            <div class=\"upload__image__btn__text\">הוסיפו תמונת סניף</div>\n          </div>\n          <img [src]=\"uploadedImage\" *ngIf=\"uploadedImage\">\n        </div>\n\n      </div>\n\n      <div class=\"submit-block\">\n        <div class=\"submit-button-container\">\n          <button (click)=\"createCafeteria(createdCafeteria)\">המשיכו</button>\n          <div class=\"repeat-button\">\n            <span (click)=\"goBack()\">חזרו</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload__image__container {\n  margin-top: -1.5rem;\n  text-align: right;\n  width: 200%;\n  margin-left: -100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .upload__image__container input[type=\"file\"] {\n    width: 0;\n    opacity: 0;\n    z-index: -1; }\n\n.upload__image__btn__text {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 1rem; }\n  .upload__image__btn__text:before {\n    content: \"+\\A\" attr(title);\n    white-space: pre;\n    color: #fff557;\n    font-weight: bolder;\n    font-size: 4rem; }\n\n.upload__image__corss__container {\n  position: relative;\n  width: 1.3rem;\n  height: 0.5rem;\n  background: #fff557;\n  margin: 0 auto;\n  margin-top: 3.9rem; }\n  .upload__image__corss__container:after {\n    content: '';\n    background: #fff557;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) rotate(90deg);\n            transform: translateX(-50%) rotate(90deg); }\n\n.upload__image__text {\n  vertical-align: top;\n  display: inline-block;\n  padding-right: 1rem;\n  margin-top: 0.1rem;\n  box-sizing: border-box;\n  direction: rtl;\n  font-size: 1rem;\n  font-family: sans-serif;\n  letter-spacing: -0.1rem;\n  line-height: 1.3;\n  color: #9a9a9a;\n  font-weight: normal; }\n  .upload__image__text div:not(:nth-last-child(1)) {\n    margin-top: 0;\n    margin-bottom: 0.4rem; }\n  .upload__image__text__links {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.upload__image__btn {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #000;\n  color: #8f8f8f; }\n\n/*8f8f8f*/\n.upload__image__btn {\n  vertical-align: top;\n  display: inline-block;\n  width: 40%;\n  height: 150px;\n  text-align: center;\n  margin-bottom: 4.5rem; }\n  .upload__image__btn__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .upload__image__btn img {\n    width: auto;\n    height: 100%; }\n\n.create-connection {\n  max-width: none;\n  min-width: 0;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  display: inline-block;\n  vertical-align: top; }\n  .create-connection .create__big__area {\n    line-height: 1.95;\n    padding-right: 1rem;\n    position: relative; }\n    .create-connection .create__big__area span {\n      position: relative; }\n    .create-connection .create__big__area span:after {\n      content: '';\n      position: absolute;\n      right: -2rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      background: #ccc; }\n  .create-connection .notice__second {\n    margin-bottom: 2rem; }\n  .create-connection .notice {\n    text-align: right;\n    background: #ffffff;\n    padding: 0.7rem 1.5rem;\n    border: 4px solid #fff557;\n    margin-bottom: 0rem;\n    margin-top: 1.1rem; }\n    .create-connection .notice .create__big__area {\n      color: #000;\n      font-weight: 600; }\n      .create-connection .notice .create__big__area span {\n        /*display: block;*/ }\n    .create-connection .notice .bold {\n      font-weight: 900;\n      font-size: 1.4rem;\n      line-height: 1;\n      font-family: sans-serif;\n      letter-spacing: -0.06rem; }\n    .create-connection .notice .normal {\n      color: #8f8f8f;\n      font-size: 1.2rem;\n      margin-top: 0.4rem;\n      margin-bottom: 1rem; }\n  .create-connection .link {\n    font-weight: 600;\n    margin-top: 1.5rem;\n    text-align: center;\n    text-decoration: underline;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 1.3rem; }\n\n.create-cafeteria-component .component-title {\n  text-align: right;\n  font-weight: 900;\n  margin-bottom: 40px;\n  font-size: 2.4rem;\n  font-family: sans-serif;\n  margin-top: 5.6rem; }\n\n.create-cafeteria-component .component-content .left-side-form {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 40%; }\n\n.create-cafeteria-component .component-content .cafeteria-details-form {\n  /*position: absolute;*/\n  max-width: 50%;\n  width: 30rem;\n  text-align: right;\n  position: relative;\n  float: right;\n  right: 0;\n  margin-top: 3.4rem; }\n  .create-cafeteria-component .component-content .cafeteria-details-form .form-label {\n    text-align: right;\n    margin-bottom: 2.5rem;\n    font-weight: 700;\n    font-size: 1.4rem; }\n\n.create-cafeteria-component .input-line,\n.create-cafeteria-component .textarea-line {\n  position: relative;\n  margin-bottom: 5rem;\n  width: 80%;\n  text-align: right;\n  float: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n  .create-cafeteria-component .input-line input,\n  .create-cafeteria-component .input-line textarea,\n  .create-cafeteria-component .textarea-line input,\n  .create-cafeteria-component .textarea-line textarea {\n    width: 100%;\n    font-size: 1.1rem;\n    height: 2.7rem;\n    background: inherit;\n    font-weight: 500;\n    color: #999999; }\n  .create-cafeteria-component .input-line textarea,\n  .create-cafeteria-component .textarea-line textarea {\n    padding-top: 10px;\n    resize: vertical; }\n\n.create-cafeteria-component .select-line {\n  position: relative;\n  margin-bottom: 5rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: inline-block;\n  width: 80%;\n  text-align: right; }\n  .create-cafeteria-component .select-line > input {\n    font-weight: 500;\n    color: #999999; }\n  .create-cafeteria-component .select-line .select-component {\n    margin-bottom: 0; }\n  .create-cafeteria-component .select-line div {\n    text-align: right; }\n\n.create-cafeteria-component input[type=\"radio\"] {\n  width: 1.6rem;\n  height: 1.6rem;\n  background: none;\n  display: inline-block;\n  vertical-align: top; }\n\n.create-cafeteria-component .radio-line {\n  position: relative;\n  margin-bottom: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: .5rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 110%;\n  margin-left: -10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n  .create-cafeteria-component .radio-line .radio-button-element {\n    width: auto; }\n\n.create-cafeteria-component .days-of-branch-activity {\n  margin-bottom: 6rem; }\n  .create-cafeteria-component .days-of-branch-activity .label {\n    text-align: right;\n    font-size: 1.7rem;\n    margin-top: 4.6rem; }\n  .create-cafeteria-component .days-of-branch-activity .days {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .create-cafeteria-component .days-of-branch-activity .days .day {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .create-cafeteria-component .days-of-branch-activity .days .day .time {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin-right: 10px;\n        font-size: 1.5rem;\n        font-weight: 900; }\n      .create-cafeteria-component .days-of-branch-activity .days .day .icon {\n        width: 3.7rem;\n        height: 3.7rem;\n        font-size: 2rem;\n        font-family: sans-serif;\n        margin-bottom: 2px;\n        border: 1px solid #c8c8c8;\n        text-align: center;\n        line-height: 35px;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        font-weight: 900;\n        color: #8f8f8f;\n        padding-top: 0.4rem;\n        box-sizing: border-box; }\n      .create-cafeteria-component .days-of-branch-activity .days .day .icon.selected {\n        background: #000;\n        color: white; }\n\n.create-cafeteria-component .submit-block {\n  position: relative;\n  margin-bottom: 40px; }\n  .create-cafeteria-component .submit-block .description,\n  .create-cafeteria-component .submit-block .submit-button-container {\n    width: 100%;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n  .create-cafeteria-component .submit-block .description {\n    font-size: 0.8rem;\n    margin-bottom: 10px; }\n  .create-cafeteria-component .submit-block .submit-button-container button {\n    width: 80%;\n    height: 3.5rem;\n    background: #fff557;\n    margin-bottom: 10rem;\n    font-weight: 900;\n    font-size: 1.4rem; }\n    .create-cafeteria-component .submit-block .submit-button-container button:active, .create-cafeteria-component .submit-block .submit-button-container button:hover {\n      background: #c2ba37; }\n  .create-cafeteria-component .submit-block .submit-button-container .repeat-button {\n    position: absolute;\n    cursor: pointer;\n    right: -5rem;\n    height: 44px;\n    line-height: 44px;\n    top: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #2f2f2f; }\n    .create-cafeteria-component .submit-block .submit-button-container .repeat-button span {\n      font-size: 1.4rem;\n      border-bottom: 1px solid #000; }\n    .create-cafeteria-component .submit-block .submit-button-container .repeat-button span:hover {\n      border-bottom: 1px solid #2f2f2f; }\n\n.create-cafeteria-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.create-cafeteria-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n\n.button-description {\n  font-size: 1.8rem;\n  letter-spacing: -0.06rem; }\n\n.days-of-branch-activity {\n  margin-bottom: 40px; }\n  .days-of-branch-activity .label {\n    text-align: right;\n    margin-bottom: 10px; }\n  .days-of-branch-activity .days {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .days-of-branch-activity .days .day {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .days-of-branch-activity .days .day .time {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin-right: 10px; }\n      .days-of-branch-activity .days .day .icon {\n        width: 35px;\n        height: 35px;\n        margin-bottom: 2px;\n        border: 1px solid #c8c8c8;\n        text-align: center;\n        line-height: 35px;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        font-weight: 900;\n        color: #8f8f8f; }\n      .days-of-branch-activity .days .day .icon.selected {\n        background: #000;\n        color: white; }\n\n.main__container {\n  padding-right: 6rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_time_select_modal_time_select_modal_component__ = __webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCafeteriaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// custom classes

// modal

var CreateCafeteriaComponent = (function () {
    function CreateCafeteriaComponent(renderer, router, activatedRoute, eventService, cafeteriaService, universityService, timeSelectService, modalService) {
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.eventService = eventService;
        this.cafeteriaService = cafeteriaService;
        this.universityService = universityService;
        this.timeSelectService = timeSelectService;
        this.modalService = modalService;
        this.complete = 25; // 25, 50, 75, 100
        this.createdCafeteria = new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["i" /* CreatedCafeteria */]();
        // temporary. todo: remove after BE connect
        this.kosherTypes = [
            {
                id: 0,
                name: 'first'
            },
            {
                id: 1,
                name: 'second'
            },
            {
                id: 2,
                name: 'third'
            },
            {
                id: 3,
                name: 'fourth'
            },
            {
                id: 4,
                name: 'fifth'
            }
        ];
    }
    CreateCafeteriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaTypeId = +param.typeId;
        });
        this.activatedRoute.queryParams
            .subscribe(function (e) {
            if (e.id) {
                _this.cafeteriaService.getCafeteriaById(+e.id).then(function (response) {
                    _this._copyExistingCafeteria(response.data.cafeteria);
                }, function (error) {
                    console.log('error getCafeteriaById', error);
                });
            }
        });
        this._getUniversities();
        this.eventService.headerText$.emit('');
    };
    CreateCafeteriaComponent.prototype.selectDay = function (event) {
        var addClass = !event.target.classList.contains('selected');
        this.renderer.setElementClass(event.target, 'selected', addClass);
    };
    CreateCafeteriaComponent.prototype.selectUniversity = function (event) {
        var _this = this;
        console.log('selectUniversity event', event);
        this.createdCafeteria.cafeteria.caf_university_id = event ? event.university_id : null;
        this.universityBuildings = [];
        if (this.createdCafeteria.cafeteria.caf_university_building_id) {
            this.createdCafeteria.cafeteria.caf_university_building_id = null;
        }
        console.log('this.createdCafeteria.cafeteria.caf_university_id', this.createdCafeteria.cafeteria.caf_university_id);
        if (this.createdCafeteria.cafeteria.caf_university_id) {
            this._getUniversityBuildingById(this.createdCafeteria.cafeteria.caf_university_id).then(function (universityBuildings) {
                console.log('universityBuildings', universityBuildings);
                _this.universityBuildings = universityBuildings;
            });
        }
    };
    CreateCafeteriaComponent.prototype.createCafeteria = function (createdCafeteria) {
        var _this = this;
        this.createdCafeteria.cafeteria.caf_type = this._cafeteriaTypeId;
        this.cafeteriaService.createCafeteria(this.createdCafeteria).then(function (response) {
            console.log('response', response);
            if (_this.uploadedFile) {
                _this.cafeteriaService.saveImage(_this.uploadedFile, response.data.caf_id).then(function (imgResponse) {
                    console.log('img response', imgResponse);
                    _this.router.navigate(['create-cafeteria-manager', response.data.caf_id]);
                }, function (imgError) {
                    console.warn('img error', imgError);
                });
            }
            else {
                // todo: uncomment after BE fix
                // this.router.navigate(['create-cafeteria-manager', response.data.caf_id]);
            }
            _this.router.navigate(['create-cafeteria-manager', response.data.caf_id]);
            // this._goTo('/create-cafeteria-manager');
        }, function (error) {
            console.log('error', error);
        });
    };
    CreateCafeteriaComponent.prototype.showTimeSelectModal = function (dayNumber, event) {
        var _this = this;
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_4__modals_time_select_modal_time_select_modal_component__["a" /* TimeSelectModalComponent */], {
            workTime: this.createdCafeteria.work_time,
            selectedDay: dayNumber
        }, 'middle').then(function (response) {
            _this.createdCafeteria.work_time = response;
        }, function (errors) {
            console.log('errors', errors);
        });
        // this.timeSelectService.show(dayNumber, this.createdCafeteria.work_time[dayNumber - 1]).then((response) => {
        //   this._setSelectedTime(this.createdCafeteria.work_time, {
        //     day_number: dayNumber,
        //     time_start: (response as any).begin,
        //     time_end: (response as any).end
        //   });
        //   this.selectDay(event);
        // }, (error) => {
        //   console.log('error', error);
        // });
    };
    CreateCafeteriaComponent.prototype.showTimeText = function (dayNumber) {
        var index = this._findIndex(this.createdCafeteria.work_time, function (day) {
            return day.day_number === dayNumber;
        });
        return (index >= 0);
    };
    CreateCafeteriaComponent.prototype.getTimeByDayNumber = function (dayNumber) {
        var result, index = this._findIndex(this.createdCafeteria.work_time, function (day) {
            return day.day_number === dayNumber;
        });
        if (index >= 0) {
            if (this.createdCafeteria.work_time[index].offDay) {
                result = 'יום חפשי';
            }
            else {
                result = this.createdCafeteria.work_time[index].time_start + " - " + this.createdCafeteria.work_time[index].time_end;
            }
        }
        else {
            result = 'NA';
        }
        return result;
    };
    CreateCafeteriaComponent.prototype.goBack = function () {
        this._goTo('/cafeteria-type');
    };
    CreateCafeteriaComponent.prototype.openFileUploader = function (fileUploader) {
        var _this = this;
        if (fileUploader.files && fileUploader.files[0]) {
            var files = fileUploader.files;
            var file_1 = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            reader_1.onload = (function () {
                _this.uploadedFile = file_1;
                _this.uploadedImage = reader_1.result;
                // image size check 150x150
                // const img: HTMLImageElement = new Image();
                // img.src = reader.result;
                // img.onload = () => {
                //   if (img.width <= 150 && img.height <= 150) {
                //     // prev.src = this.src;
                //     this.uploadedImage = img.src;
                //   } else {
                //     console.log('ERROR');
                //   }
                // };
            }).bind(this);
            reader_1.onerror = (function (error) {
                console.log('Error: ', error);
            });
        }
    };
    CreateCafeteriaComponent.prototype.deleteImage = function () {
        this.uploadedImage = null;
        this.uploadedFile = null;
    };
    CreateCafeteriaComponent.prototype.selectKosherType = function (event) {
        this.createdCafeteria.cafeteria.caf_kosher_type = event ? event.id : null;
    };
    CreateCafeteriaComponent.prototype.selectCafeteriaBuilding = function (event) {
        this.createdCafeteria.cafeteria.caf_university_building_id = event ? event.building_id : null;
        console.log('this.createdCafeteria.cafeteria.caf_university_building_id', this.createdCafeteria.cafeteria.caf_university_building_id);
    };
    CreateCafeteriaComponent.prototype.getBy = function (array, value, key, displayedValue) {
        var index = this._findIndex(array, function (item) {
            return item[key] === value;
        }), result;
        if ((index || index === 0) && index > -1) {
            result = array[index][displayedValue];
        }
        return result;
    };
    /////
    CreateCafeteriaComponent.prototype._copyExistingCafeteria = function (existingCafeteria) {
        var _this = this;
        this.createdCafeteria.cafeteria = {
            caf_type: +existingCafeteria.caf_type,
            caf_name: existingCafeteria.caf_name,
            caf_university_id: +existingCafeteria.university_id,
            caf_university_building_id: +existingCafeteria.university_building_id,
            caf_kosher_type: +existingCafeteria.kosher_type,
            caf_veg_type: +existingCafeteria.veg_type,
            caf_address: existingCafeteria.caf_address,
            caf_description: existingCafeteria.description
        };
        existingCafeteria.working_time.forEach(function (item) {
            _this.createdCafeteria.work_time.push({
                day_number: item.day_number,
                time_start: item.time_start,
                time_end: item.time_end
            });
        });
        this._getUniversityBuildingById(this.createdCafeteria.cafeteria.caf_university_id).then(function (universityBuildings) {
            console.log('universityBuildings', universityBuildings);
            _this.universityBuildings = universityBuildings;
        });
    };
    CreateCafeteriaComponent.prototype._getUniversities = function () {
        var _this = this;
        this.universityService.getUniversityList().then(function (response) {
            // todo: RENAME response.data.cafeteria -> response.data.universities
            console.log('universities', response.data.universities);
            _this.universities = response.data.universities;
        });
    };
    CreateCafeteriaComponent.prototype._getUniversityBuildingById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.universityService.getUniversitybuildings(id).then(function (response) {
                resolve(response.data.cafeteria);
            });
        });
    };
    CreateCafeteriaComponent.prototype._findIndex = function (array, callback) {
        var i = 0, len = (array && array.length) ? array.length : 0, result;
        for (; i < len; i++) {
            if (callback(array[i])) {
                result = i;
                break;
            }
        }
        return result;
    };
    CreateCafeteriaComponent.prototype._setSelectedTime = function (array, newTime) {
        var index = this._findIndex(this.createdCafeteria.work_time, function (day) {
            return day.day_number === newTime.day_number;
        });
        if (index >= 0) {
            this.createdCafeteria.work_time[index] = newTime;
        }
        else {
            this.createdCafeteria.work_time.push(newTime);
        }
    };
    CreateCafeteriaComponent.prototype._goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    return CreateCafeteriaComponent;
}());
CreateCafeteriaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-create-cafeteria',
        template: __webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__services__["g" /* UniversityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["g" /* UniversityService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__services__["h" /* TimeSelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["h" /* TimeSelectService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["i" /* ModalService */]) === "function" && _h || Object])
], CreateCafeteriaComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=create-cafeteria.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-cafeteria/create-cafeteria.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_cafeteria_routing_module__ = __webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_cafeteria_component__ = __webpack_require__("../../../../../src/app/pages/create-cafeteria/create-cafeteria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCafeteriaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CreateCafeteriaModule = (function () {
    function CreateCafeteriaModule() {
    }
    return CreateCafeteriaModule;
}());
CreateCafeteriaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__create_cafeteria_routing_module__["a" /* CreateCafeteriaRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__create_cafeteria_component__["a" /* CreateCafeteriaComponent */]
        ]
    })
], CreateCafeteriaModule);

//# sourceMappingURL=create-cafeteria.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-manager/create-manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_manager_component__ = __webpack_require__("../../../../../src/app/pages/create-manager/create-manager.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateManagerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'create-cafeteria-manager/:cafId',
        component: __WEBPACK_IMPORTED_MODULE_3__create_manager_component__["a" /* CreateManagerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var CreateManagerRoutingModule = (function () {
    function CreateManagerRoutingModule() {
    }
    return CreateManagerRoutingModule;
}());
CreateManagerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], CreateManagerRoutingModule);

//# sourceMappingURL=create-manager-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-manager/create-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-manager-component\">\n  <div class=\"component-title\">\n    הקמת סניף\n  </div>\n  <div style=\"width: 40%; margin-left: auto;\">\n    <app-progress-bar [width]=\"100\" [dots]=\"3\"></app-progress-bar>\n  </div>\n\n  <div class=\"component-content\">\n    <div class=\"left-side-form\">\n            <div class=\"create-connection\">\n        <div class=\"notice\">\n          <div class=\"bold\">תהליך ההרשמה לתורלס הוא</div>\n          <div class=\"bold\">.חד פעמי</div>\n          <div class=\"normal\">בעתיד, תוכל/י לבצע עידכונים וש</div>\n        </div>\n\n          <div class=\"notice notice__second\">\n            <div class=\"bold\">נא הכינו את המידע הנ”ל:</div>\n\n            <div class=\"normal create__big__area\">\n\n              <span>רשימת קטגוריות המוצרים </span><br><span>שמות כל המוצרים</span><br><span>תיאור מפורט של כל המוצרים</span></div>\n\n          </div>\n\n        <div class=\"link\">\n          לעזרה - צור/י קשר\n        </div>\n      </div>\n    </div>\n\n    <div class=\"manager-details-form\">\n      <!--cafeteria details-->\n      <div class=\"form-label\">\n        מנהל הקפטריה\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdManagerUser.mn_name\" [placeholderMessage]=\"'שֵׁם'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdManagerUser.mn_last_name\" [placeholderMessage]=\"'שם משפחה'\">\n      </div>\n\n      <div class=\"input-line\">\n        <input type=\"text\" appInput [placeholderMessage]=\"'תְעוּדַת זֶהוּת'\">\n      </div>\n\n      <div class=\"input-line\">\n        <input type=\"text\" dir=\"rtl\" appInput [placeholderMessage]=\"'מספר דרכון'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdManagerUser.mn_email\" (blur)=\"checkEmail(createdManagerUser.mn_email)\" [placeholderMessage]=\"'אֶלֶקטרוֹנִי'\" [error]=\"formErrors.emailField\" [message]=\"formErrorMessages.email\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"createdManagerUser.mn_phone\" (keyup)=\"createdManagerUser.mn_phone = phoneFormatter(createdManagerUser.mn_phone)\" [placeholderMessage]=\"'טלפון'\">\n      </div>\n\n      <div style=\"margin-bottom: 1.5rem; font-weight: 800; font-size: 1.3rem\">\n        סיסמה\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"password\" appInput [(ngModel)]=\"createdManagerUser.mn_pass\" (blur)=\"checkPassword(createdManagerUser.mn_pass, 'passwordField')\" [error]=\"formErrors.passwordField\" [message]=\"formErrorMessages.password\" [placeholderMessage]=\"'סיסמה'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"password\" appInput [(ngModel)]=\"confirmPassword\" (blur)=\"checkPassword(confirmPassword, 'confirmPasswordField')\" [error]=\"formErrors.confirmPasswordField\" [message]=\"formErrorMessages.password\" [placeholderMessage]=\"'אשר סיסמה'\">\n      </div>\n\n      <div class=\"submit-block\">\n        <div class=\"submit-button-container\">\n          <button (click)=\"createManager(createdManagerUser)\" [disabled]=\"isButtonDisabled()\">הרשם/י</button>\n          <div class=\"repeat-button\">\n            <span (click)=\"goBack()\">חזור/י</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/create-manager/create-manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-manager-component .component-title {\n  text-align: right;\n  font-weight: 900;\n  margin-bottom: 40px;\n  font-size: 2.4rem;\n  font-family: sans-serif;\n  margin-top: 5.6rem; }\n\n.create-manager-component .create-connection {\n  max-width: none;\n  min-width: 0;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  display: inline-block;\n  vertical-align: top; }\n  .create-manager-component .create-connection .create__big__area {\n    line-height: 1.95;\n    padding-right: 1rem;\n    position: relative; }\n    .create-manager-component .create-connection .create__big__area span {\n      position: relative; }\n    .create-manager-component .create-connection .create__big__area span:after {\n      content: '';\n      position: absolute;\n      right: -2rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      background: #ccc; }\n  .create-manager-component .create-connection .notice__second {\n    margin-bottom: 2rem; }\n  .create-manager-component .create-connection .notice {\n    text-align: right;\n    background: #ffffff;\n    padding: 0.7rem 1.5rem;\n    border: 4px solid #fff557;\n    margin-bottom: 0rem;\n    margin-top: 1.1rem; }\n    .create-manager-component .create-connection .notice .create__big__area {\n      color: #000;\n      font-weight: 600; }\n      .create-manager-component .create-connection .notice .create__big__area span {\n        /*display: block;*/ }\n    .create-manager-component .create-connection .notice .bold {\n      font-weight: 900;\n      font-size: 1.4rem;\n      line-height: 1;\n      font-family: sans-serif;\n      letter-spacing: -0.06rem; }\n    .create-manager-component .create-connection .notice .normal {\n      color: #8f8f8f;\n      font-size: 1.2rem;\n      margin-top: 0.4rem;\n      margin-bottom: 1rem; }\n  .create-manager-component .create-connection .link {\n    font-weight: 600;\n    margin-top: 1.5rem;\n    text-align: center;\n    text-decoration: underline;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 1.3rem; }\n\n.create-manager-component .component-content .left-side-form {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.create-manager-component .component-content .manager-details-form {\n  max-width: 50%;\n  width: 30rem;\n  text-align: right;\n  position: relative;\n  float: right;\n  right: 0;\n  margin-top: 3.4rem; }\n  .create-manager-component .component-content .manager-details-form .form-label {\n    text-align: right;\n    margin-bottom: 2.5rem;\n    font-weight: 700;\n    font-size: 1.4rem; }\n\n.create-manager-component .input-line {\n  position: relative;\n  margin-bottom: 5rem;\n  width: 80%;\n  text-align: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-left: auto; }\n  .create-manager-component .input-line input {\n    width: 100%;\n    font-size: 1.1rem;\n    font-weight: 300;\n    height: 2.7rem;\n    font-size: 1.1rem;\n    font-weight: 300;\n    background: inherit; }\n\n.create-manager-component .submit-block {\n  position: relative;\n  margin-bottom: 40px; }\n  .create-manager-component .submit-block .description,\n  .create-manager-component .submit-block .submit-button-container {\n    width: 100%;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n  .create-manager-component .submit-block .description {\n    font-size: 0.8rem;\n    margin-bottom: 10px; }\n  .create-manager-component .submit-block .submit-button-container button {\n    width: 80%;\n    height: 3.5rem;\n    background: #fff557;\n    margin-bottom: 10rem;\n    font-weight: 900;\n    font-size: 1.4rem; }\n    .create-manager-component .submit-block .submit-button-container button:active, .create-manager-component .submit-block .submit-button-container button:hover {\n      background: #c2ba37; }\n  .create-manager-component .submit-block .submit-button-container .repeat-button {\n    position: absolute;\n    cursor: pointer;\n    right: -5rem;\n    height: 44px;\n    line-height: 44px;\n    top: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #2f2f2f; }\n    .create-manager-component .submit-block .submit-button-container .repeat-button span {\n      font-size: 1.4rem;\n      border-bottom: 1px solid #000; }\n    .create-manager-component .submit-block .submit-button-container .repeat-button span:hover {\n      border-bottom: 1px solid #2f2f2f; }\n\n.create-manager-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.create-manager-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/create-manager/create-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateManagerComponent = (function () {
    function CreateManagerComponent(router, activatedRoute, userService, cafeteriaService, eventService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.complete = 75;
        this.createdManagerUser = new __WEBPACK_IMPORTED_MODULE_2__custom_classes__["f" /* CreatedManagerUser */]();
        this.formErrors = {
            emailField: false,
            passwordField: false,
            confirmPasswordField: false
        };
        this.formErrorMessages = {
            email: '',
            password: ''
        };
        this._errors = {
            invalidEmail: 'דוא"ל שנכתב שגוי',
            emailAlreadyExist: 'הדוא"ל כבר בשימוש',
            invalidPassword: 'חייב להכיל לפחות 6 סמלים'
        };
        this._emailRegExp = /(.+)@(.+){2,}\.(.+){2,}/;
    }
    CreateManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
        });
    };
    CreateManagerComponent.prototype.createManager = function (createdManagerUser) {
        var _this = this;
        this.checkEmail(createdManagerUser.mn_email).then(function () {
            _this.userService.registerManagerUser(createdManagerUser).then(function (data) {
                console.log('data', data);
                _this.router.navigate(['categories-list', _this._cafeteriaId]);
                // this._goTo('/categories-list');
            }, function (error) {
                console.log('error', error);
            });
        }, function () {
            console.log('invlid email, or email alreadu exist');
        });
    };
    CreateManagerComponent.prototype.goBack = function () {
        // this._goTo('/categories-list');
        this.router.navigate(['categories-list', this._cafeteriaId]);
    };
    CreateManagerComponent.prototype.isButtonDisabled = function () {
        var disable = false;
        for (var key in this.createdManagerUser) {
            if (!this.createdManagerUser[key] || this.createdManagerUser[key].length < 2) {
                disable = true;
            }
        }
        if (this.__hasError()) {
            disable = true;
        }
        if (!this.confirmPassword || !this.createdManagerUser.mn_pass || (this.confirmPassword !== this.createdManagerUser.mn_pass)) {
            disable = true;
        }
        return disable;
    };
    CreateManagerComponent.prototype.checkEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (email) {
                if (_this._emailRegExp.test(email)) {
                    _this.userService.checkUserEmail(email).then(function (data) {
                        _this.formErrors.emailField = false;
                        resolve();
                    }, function (error) {
                        _this.formErrors.emailField = true;
                        _this.formErrorMessages.email = _this._errors.emailAlreadyExist;
                        reject();
                    });
                }
                else {
                    _this.formErrors.emailField = true;
                    _this.formErrorMessages.email = _this._errors.invalidEmail;
                    reject();
                }
            }
            else {
                reject();
            }
        });
    };
    CreateManagerComponent.prototype.checkPassword = function (password, type) {
        if (password) {
            if (password.length >= 6) {
                this.formErrors[type] = false;
            }
            else {
                this.formErrors[type] = true;
                this.formErrorMessages.password = this._errors.invalidPassword;
            }
        }
    };
    CreateManagerComponent.prototype.phoneFormatter = function (t) {
        var numbers = t ? t.replace(/\D/g, '') : '', dashes = {
            3: '-'
        }, len = (numbers.length <= 10) ? numbers.length : 10;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += (dashes[i] || '') + numbers[i];
        }
        return result;
    };
    ///////
    CreateManagerComponent.prototype._goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    CreateManagerComponent.prototype.__hasError = function () {
        var result = false;
        for (var key in this.formErrors) {
            if (this.formErrors[key]) {
                result = true;
            }
        }
        return result;
    };
    return CreateManagerComponent;
}());
CreateManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-create-manager',
        template: __webpack_require__("../../../../../src/app/pages/create-manager/create-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/create-manager/create-manager.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["e" /* CafeteriaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["k" /* EventService */]) === "function" && _e || Object])
], CreateManagerComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/create-manager/create-manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_manager_routing_module__ = __webpack_require__("../../../../../src/app/pages/create-manager/create-manager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_manager_component__ = __webpack_require__("../../../../../src/app/pages/create-manager/create-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CreateManagerModule = (function () {
    function CreateManagerModule() {
    }
    return CreateManagerModule;
}());
CreateManagerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__create_manager_routing_module__["a" /* CreateManagerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__create_manager_component__["a" /* CreateManagerComponent */]
        ]
    })
], CreateManagerModule);

//# sourceMappingURL=create-manager.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-cafeteria/edit-cafeteria-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_cafeteria_component__ = __webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCafeteriaRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'edit-cafeteria/:cafId',
        component: __WEBPACK_IMPORTED_MODULE_3__edit_cafeteria_component__["a" /* EditCafeteriaComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var EditCafeteriaRoutingModule = (function () {
    function EditCafeteriaRoutingModule() {
    }
    return EditCafeteriaRoutingModule;
}());
EditCafeteriaRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EditCafeteriaRoutingModule);

//# sourceMappingURL=edit-cafeteria-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"update-cafeteria-component\">\n  <div class=\"component-title\">\n    הקמת סניף\n  </div>\n\n\n  <div class=\"component-content\" *ngIf=\"updatedCafeteria\">\n    <div class=\"left-side-form\">\n\n      <div class=\"create-connection\">\n        <div class=\"notice\">\n          <div class=\"bold\">תהליך ההרשמה לתורלס הוא</div>\n          <div class=\"bold\">.חד פעמי</div>\n          <div class=\"normal\">בעתיד, תוכל/י לבצע עידכונים וש</div>\n        </div>\n\n        <div class=\"notice notice__second\">\n          <div class=\"bold\">נא הכינו את המידע הנ”ל:</div>\n\n          <div class=\"normal create__big__area\">\n\n            <span>רשימת קטגוריות המוצרים </span><br><span>שמות כל המוצרים</span><br><span>תיאור מפורט של כל המוצרים</span></div>\n\n        </div>\n\n        <div class=\"link\">\n          לעזרה - צור/י קשר\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"cafeteria-details-form\">\n      <!--cafeteria details-->\n      <div class=\"form-label\">\n        פרטי הקפיטריה\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_name\" [placeholderMessage]=\"'שם חברה'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_address\" [placeholderMessage]=\"'כתובת'\">\n      </div>\n\n      <div class=\"select-line required\">\n        <!--<div>-->\n          <!--Universities-->\n        <!--</div>-->\n        <app-select [list]=\"universities\" [value]=\"getBy(universities, updatedCafeteria.cafeteria.up_caf_university_id, 'university_id', 'university_name')\" key=\"university_name\" [placeholder]=\"'בנייני האוניברסיטה'\" (setItem)=\"selectUniversity($event)\"></app-select>\n        <!--<select [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_university_id\" (change)=\"getBuildingsByUniversityId(updatedCafeteria.cafeteria.up_caf_university_id)\">-->\n          <!--<option *ngFor=\"let university of universities\" [value]=\"university.university_id\">-->\n            <!--{{ university.university_name }}-->\n          <!--</option>-->\n        <!--</select>-->\n      </div>\n\n      <div class=\"select-line required\">\n        <!--<div>-->\n          <!--University Buildings-->\n        <!--</div>-->\n        <app-select [list]=\"universityBuildings\" [value]=\"getBy(universityBuildings, updatedCafeteria.cafeteria.up_caf_university_building_id, 'building_id', 'building_name')\" key=\"building_name\" [placeholder]=\"'בנייני האוניברסיטה'\" (setItem)=\"selectCafeteriaBuilding($event)\"></app-select>\n        <!--<select [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_university_building_id\">-->\n          <!--<option *ngFor=\"let universityBuilding of universityBuildings\" [value]=\"universityBuilding.building_id\">-->\n            <!--{{ universityBuilding.building_name }}-->\n          <!--</option>-->\n        <!--</select>-->\n      </div>\n\n      <div class=\"select-line required\">\n        <!--<div>-->\n          <!--Kosher Type-->\n        <!--</div>-->\n        <app-select [list]=\"kosherTypes\" key=\"name\" [value]=\"getBy(kosherTypes, updatedCafeteria.cafeteria.up_caf_kosher_type, 'id', 'name')\" [placeholder]=\"'כשרות'\" (setItem)=\"selectKosherType($event)\"></app-select>\n        <!--<select [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_kosher_type\">-->\n          <!--<option [value]=\"0\">first</option>-->\n          <!--<option [value]=\"1\">second</option>-->\n          <!--<option [value]=\"2\">third</option>-->\n          <!--<option [value]=\"3\">fourth</option>-->\n          <!--<option [value]=\"4\">fifth</option>-->\n        <!--</select>-->\n      </div>\n\n      <div class=\"radio-line\">\n        <div class=\"radio-button-element\">\n          <!-- not vegeterian -->\n          <span class=\"button-description\">\n           אין מאכלים צמחוניים\n          </span>\n          <!--<input type=\"radio\"  name=\"sex\" >Female-->\n\n          <input type=\"radio\" [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_veg_type\" [value]=\"0\">\n        </div>\n\n        <div class=\"radio-button-element\">\n          <!-- vegeterian -->\n          <span class=\"button-description\">\n            יש מנות צמחוניות\n          </span>\n          <input type=\"radio\" [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_veg_type\" [value]=\"1\">\n          <!--<input type=\"radio\">-->\n        </div>\n      </div>\n\n      <div class=\"days-of-branch-activity\">\n        <div class=\"label\">\n          ימי פעילות הסניף\n        </div>\n        <div class=\"days required-top\">\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(1)\">\n              {{ getTimeByDayNumber(1) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(1, $event)\" [ngClass]=\"{'selected': showTimeText(1)}\">א</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(2)\">\n              {{ getTimeByDayNumber(2) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(2, $event)\" [ngClass]=\"{'selected': showTimeText(2)}\">ב</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(3)\">\n              {{ getTimeByDayNumber(3) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(3, $event)\" [ngClass]=\"{'selected': showTimeText(3)}\">ג</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(4)\">\n              {{ getTimeByDayNumber(4) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(4, $event)\" [ngClass]=\"{'selected': showTimeText(4)}\">ד</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(5)\">\n              {{ getTimeByDayNumber(5) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(5, $event)\" [ngClass]=\"{'selected': showTimeText(5)}\">ה</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(6)\">\n              {{ getTimeByDayNumber(6) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(6, $event)\" [ngClass]=\"{'selected': showTimeText(6)}\">ו</div>\n          </div>\n          <div class=\"day\">\n            <div class=\"time\" *ngIf=\"showTimeText(7)\">\n              {{ getTimeByDayNumber(7) }}\n            </div>\n            <div class=\"icon\" (click)=\"showTimeSelectModal(7, $event)\" [ngClass]=\"{'selected': showTimeText(7)}\">ש</div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"textarea-line\">\n        <textarea appInput [(ngModel)]=\"updatedCafeteria.cafeteria.up_caf_description\" [placeholderMessage]=\"'את התיאור'\"></textarea>\n      </div>\n\n      <div style=\"clear: both;\"></div>\n\n      <div class=\"upload__image__container\">\n        <input type=\"file\" (change)=\"openFileUploader(fileUploader)\" accept=\"image/jpeg,image/png,image/jpg\" data-max-size=\"1024\" #fileUploader>\n        <div class=\"upload__image__text\">\n          <div>\n            הלוגו יופיע בכל פרסומי הקפיטריה, <br>\n            על כן, אנחנו ממליצים לצרף קובץ איכותי<br>\n          </div>\n          <div>\n            מידת הלוגו 150X150 פיקסלים<br>\n            בפורמט JPG / PNG\n          </div>\n\n          <div class=\"upload__image__text__links\" *ngIf=\"uploadedImage\">\n            <div (click)=\"fileUploader.click()\">שנה תמונה</div>\n            <div (click)=\"deleteImage()\">למחוק תמונה</div>\n          </div>\n        </div>\n        <div class=\"upload__image__btn\">\n          <div class=\"upload__image__btn__inner\" *ngIf=\"!uploadedImage\" (click)=\"fileUploader.click()\">\n            <div class=\"upload__image__btn__text\">הוסף/י לוגו לרשת</div>\n          </div>\n          <img app-check-image [src]=\"uploadedImage\" [image]=\"uploadedImage\" *ngIf=\"uploadedImage\">\n        </div>\n\n      </div>\n\n      <div class=\"submit-block\">\n        <div class=\"submit-button-container\">\n          <button (click)=\"updateCafeteria(updatedCafeteria)\">הרשם/י</button>\n          <div class=\"repeat-button\">\n            <span (click)=\"goBack()\">חזור/י</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload__image__container {\n  margin-top: -1.5rem;\n  text-align: right;\n  width: 200%;\n  margin-left: -100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .upload__image__container input[type=\"file\"] {\n    width: 0; }\n\n.upload__image__btn__text {\n  font-size: 1rem;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 1rem; }\n  .upload__image__btn__text:before {\n    content: \"+\\A\" attr(title);\n    white-space: pre;\n    color: #fff557;\n    font-weight: bolder;\n    font-size: 4rem; }\n\n.upload__image__corss__container {\n  position: relative;\n  width: 1.3rem;\n  height: 0.5rem;\n  background: #fff557;\n  margin: 0 auto;\n  margin-top: 3.9rem; }\n  .upload__image__corss__container:after {\n    content: '';\n    background: #fff557;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) rotate(90deg);\n            transform: translateX(-50%) rotate(90deg); }\n\n.upload__image__text {\n  vertical-align: top;\n  display: inline-block;\n  padding-right: 1rem;\n  margin-top: 0.1rem;\n  box-sizing: border-box;\n  direction: rtl;\n  font-size: 1rem;\n  font-family: sans-serif;\n  letter-spacing: -0.1rem;\n  line-height: 1.3;\n  color: #9a9a9a;\n  font-weight: normal; }\n  .upload__image__text div:not(:nth-last-child(1)) {\n    margin-top: 0;\n    margin-bottom: 0.4rem; }\n  .upload__image__text__links {\n    text-decoration: underline;\n    cursor: pointer; }\n\n.upload__image__btn {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #000;\n  color: #8f8f8f; }\n\n/*8f8f8f*/\n.upload__image__btn {\n  vertical-align: top;\n  display: inline-block;\n  width: 40%;\n  height: 150px;\n  text-align: center;\n  margin-bottom: 4.5rem; }\n  .upload__image__btn__inner {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .upload__image__btn img {\n    width: auto;\n    height: 100%; }\n\n.create-connection {\n  max-width: none;\n  min-width: 0;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  display: inline-block;\n  vertical-align: top; }\n  .create-connection .create__big__area {\n    line-height: 1.95;\n    padding-right: 1rem;\n    position: relative; }\n    .create-connection .create__big__area span {\n      position: relative; }\n    .create-connection .create__big__area span:after {\n      content: '';\n      position: absolute;\n      right: -2rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      background: #ccc; }\n  .create-connection .notice__second {\n    margin-bottom: 2rem; }\n  .create-connection .notice {\n    text-align: right;\n    background: #ffffff;\n    padding: 0.7rem 1.5rem;\n    border: 4px solid #fff557;\n    margin-bottom: 0rem;\n    margin-top: 1.1rem; }\n    .create-connection .notice .create__big__area {\n      color: #000;\n      font-weight: 600; }\n      .create-connection .notice .create__big__area span {\n        /*display: block;*/ }\n    .create-connection .notice .bold {\n      font-weight: 900;\n      font-size: 1.4rem;\n      line-height: 1;\n      font-family: sans-serif;\n      letter-spacing: -0.06rem; }\n    .create-connection .notice .normal {\n      color: #8f8f8f;\n      font-size: 1.2rem;\n      margin-top: 0.4rem;\n      margin-bottom: 1rem; }\n  .create-connection .link {\n    font-weight: 600;\n    margin-top: 1.5rem;\n    text-align: center;\n    text-decoration: underline;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 1.3rem; }\n\n.update-cafeteria-component .component-title {\n  text-align: right;\n  font-weight: 900;\n  margin-bottom: 40px;\n  font-size: 2.4rem;\n  font-family: sans-serif;\n  margin-top: 5.6rem; }\n\n.update-cafeteria-component .component-content .left-side-form {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.update-cafeteria-component .component-content .cafeteria-details-form {\n  /*position: absolute;*/\n  max-width: 50%;\n  width: 30rem;\n  text-align: right;\n  position: relative;\n  float: right;\n  right: 0;\n  margin-top: 3.4rem; }\n  .update-cafeteria-component .component-content .cafeteria-details-form .form-label {\n    text-align: right;\n    margin-bottom: 2.5rem;\n    font-weight: 700;\n    font-size: 1.4rem; }\n\n.update-cafeteria-component .input-line,\n.update-cafeteria-component .textarea-line {\n  position: relative;\n  margin-bottom: 5rem;\n  width: 80%;\n  text-align: right;\n  float: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n  .update-cafeteria-component .input-line input,\n  .update-cafeteria-component .input-line textarea,\n  .update-cafeteria-component .textarea-line input,\n  .update-cafeteria-component .textarea-line textarea {\n    width: 100%;\n    font-size: 1.1rem;\n    height: 2.7rem;\n    background: inherit;\n    font-weight: 500;\n    color: #999999; }\n  .update-cafeteria-component .input-line textarea,\n  .update-cafeteria-component .textarea-line textarea {\n    padding-top: 10px;\n    resize: vertical; }\n\n.update-cafeteria-component .select-line {\n  position: relative;\n  margin-bottom: 5rem;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: inline-block;\n  width: 80%;\n  text-align: right; }\n  .update-cafeteria-component .select-line > input {\n    font-weight: 500;\n    color: #999999; }\n  .update-cafeteria-component .select-line .select-component {\n    margin-bottom: 0; }\n  .update-cafeteria-component .select-line div {\n    text-align: right; }\n\n.update-cafeteria-component input[type=\"radio\"] {\n  width: 1.6rem;\n  height: 1.6rem;\n  background: none;\n  display: inline-block;\n  vertical-align: top; }\n\n.update-cafeteria-component .radio-line {\n  position: relative;\n  margin-bottom: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: .5rem;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 110%;\n  margin-left: -10%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n  .update-cafeteria-component .radio-line .radio-button-element {\n    width: auto; }\n\n.update-cafeteria-component .days-of-branch-activity {\n  margin-bottom: 6rem; }\n  .update-cafeteria-component .days-of-branch-activity .label {\n    text-align: right;\n    font-size: 1.7rem;\n    margin-top: 4.6rem; }\n  .update-cafeteria-component .days-of-branch-activity .days {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .update-cafeteria-component .days-of-branch-activity .days .day {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .update-cafeteria-component .days-of-branch-activity .days .day .time {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin-right: 10px;\n        font-size: 1.5rem;\n        font-weight: 900; }\n      .update-cafeteria-component .days-of-branch-activity .days .day .icon {\n        width: 3.7rem;\n        height: 3.7rem;\n        font-size: 2rem;\n        font-family: sans-serif;\n        margin-bottom: 2px;\n        border: 1px solid #c8c8c8;\n        text-align: center;\n        line-height: 35px;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        font-weight: 900;\n        color: #8f8f8f;\n        padding-top: 0.4rem;\n        box-sizing: border-box; }\n      .update-cafeteria-component .days-of-branch-activity .days .day .icon.selected {\n        background: #000;\n        color: white; }\n\n.update-cafeteria-component .submit-block {\n  position: relative;\n  margin-bottom: 40px; }\n  .update-cafeteria-component .submit-block .description,\n  .update-cafeteria-component .submit-block .submit-button-container {\n    width: 100%;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n  .update-cafeteria-component .submit-block .description {\n    font-size: 0.8rem;\n    margin-bottom: 10px; }\n  .update-cafeteria-component .submit-block .submit-button-container button {\n    width: 80%;\n    height: 3.5rem;\n    background: #fff557;\n    margin-bottom: 10rem;\n    font-weight: 900;\n    font-size: 1.4rem; }\n    .update-cafeteria-component .submit-block .submit-button-container button:active, .update-cafeteria-component .submit-block .submit-button-container button:hover {\n      background: #c2ba37; }\n  .update-cafeteria-component .submit-block .submit-button-container .repeat-button {\n    position: absolute;\n    cursor: pointer;\n    right: -5rem;\n    height: 44px;\n    line-height: 44px;\n    top: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #2f2f2f; }\n    .update-cafeteria-component .submit-block .submit-button-container .repeat-button span {\n      font-size: 1.4rem;\n      border-bottom: 1px solid #000; }\n    .update-cafeteria-component .submit-block .submit-button-container .repeat-button span:hover {\n      border-bottom: 1px solid #2f2f2f; }\n\n.update-cafeteria-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.update-cafeteria-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n\n.button-description {\n  font-size: 1.8rem;\n  letter-spacing: -0.06rem; }\n\n.days-of-branch-activity {\n  margin-bottom: 40px; }\n  .days-of-branch-activity .label {\n    text-align: right;\n    margin-bottom: 10px; }\n  .days-of-branch-activity .days {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .days-of-branch-activity .days .day {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .days-of-branch-activity .days .day .time {\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        margin-right: 10px; }\n      .days-of-branch-activity .days .day .icon {\n        width: 35px;\n        height: 35px;\n        margin-bottom: 2px;\n        border: 1px solid #c8c8c8;\n        text-align: center;\n        line-height: 35px;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        font-weight: 900;\n        color: #8f8f8f; }\n      .days-of-branch-activity .days .day .icon.selected {\n        background: #000;\n        color: white; }\n\n.main__container {\n  padding-right: 6rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_time_select_modal_time_select_modal_component__ = __webpack_require__("../../../../../src/app/modals/time-select-modal/time-select-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCafeteriaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCafeteriaComponent = (function () {
    function EditCafeteriaComponent(renderer, router, activatedRoute, timeSelectService, cafeteriaService, universityService, modalService, eventService) {
        this.renderer = renderer;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.timeSelectService = timeSelectService;
        this.cafeteriaService = cafeteriaService;
        this.universityService = universityService;
        this.modalService = modalService;
        this.eventService = eventService;
        // temporary. todo: remove after BE connect
        this.kosherTypes = [
            {
                id: 0,
                name: 'first'
            },
            {
                id: 1,
                name: 'second'
            },
            {
                id: 2,
                name: 'third'
            },
            {
                id: 3,
                name: 'fourth'
            },
            {
                id: 4,
                name: 'fifth'
            }
        ];
    }
    EditCafeteriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this._getCafeteria(+param.cafId).then(function (data) {
                _this.eventService.headerText$.emit(data.caf_name);
                _this.updatedCafeteria = _this._parseCafeteriaToSaveFormat(data);
                console.log('this.updatedCafeteria', _this.updatedCafeteria);
                _this.getBuildingsByUniversityId(_this.updatedCafeteria.cafeteria.up_caf_university_id);
                _this._getUniversityBuildingById(_this.updatedCafeteria.cafeteria.up_caf_university_building_id);
            });
        });
        this._getUniversities();
    };
    EditCafeteriaComponent.prototype.deleteImage = function () {
        this.uploadedImage = '';
        this.uploadedFile = null;
    };
    // public showTimeSelectModal(dayNumber: number, event): void {
    //   console.log('CLICK')
    //   this.timeSelectService.show(dayNumber).then((response) => {
    //     this._setSelectedTime(this.updatedCafeteria.work_time, {
    //       up_day_number: dayNumber,
    //       up_time_start: (response as any).begin,
    //       up_time_end: (response as any).end
    //     });
    //     this.selectDay(event);
    //   }, (error) => {
    //     console.log('error', error);
    //   });
    // }
    EditCafeteriaComponent.prototype.showTimeSelectModal = function (dayNumber, event) {
        var _this = this;
        var workTime = [];
        this.updatedCafeteria.work_time.forEach(function (item) {
            workTime.push({
                day_number: item.up_day_number,
                time_start: item.up_time_start,
                time_end: item.up_time_end
            });
        });
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_3__modals_time_select_modal_time_select_modal_component__["a" /* TimeSelectModalComponent */], {
            workTime: workTime,
            selectedDay: dayNumber
        }, 'middle').then(function (response) {
            _this.updatedCafeteria.work_time = _this._timeSelectResponseParsing(response);
        }, function (errors) {
            console.log('errors', errors);
        });
        // this.timeSelectService.show(dayNumber, this.createdCafeteria.work_time[dayNumber - 1]).then((response) => {
        //   this._setSelectedTime(this.createdCafeteria.work_time, {
        //     day_number: dayNumber,
        //     time_start: (response as any).begin,
        //     time_end: (response as any).end
        //   });
        //   this.selectDay(event);
        // }, (error) => {
        //   console.log('error', error);
        // });
    };
    EditCafeteriaComponent.prototype.selectDay = function (event) {
        var addClass = !event.target.classList.contains('selected');
        this.renderer.setElementClass(event.target, 'selected', addClass);
    };
    EditCafeteriaComponent.prototype.showTimeText = function (dayNumber) {
        var index = this._findIndex(this.updatedCafeteria.work_time, function (day) {
            return day.up_day_number === dayNumber;
        });
        return (index >= 0);
    };
    EditCafeteriaComponent.prototype.getTimeByDayNumber = function (dayNumber) {
        var result, index = this._findIndex(this.updatedCafeteria.work_time, function (day) {
            return day.up_day_number === dayNumber;
        });
        if (index >= 0) {
            result = this.updatedCafeteria.work_time[index].up_time_start + " - " + this.updatedCafeteria.work_time[index].up_time_end;
        }
        else {
            result = 'NA';
        }
        return result;
    };
    EditCafeteriaComponent.prototype.getBuildingsByUniversityId = function (universityId) {
        var _this = this;
        this._getUniversityBuildingById(universityId).then(function (universityBuildings) {
            _this.universityBuildings = universityBuildings;
        });
    };
    EditCafeteriaComponent.prototype.updateCafeteria = function (updatedCafeteria) {
        var _this = this;
        console.log('updatedCafeteria ==> ', updatedCafeteria);
        console.log('this.uploadedFile ==> ', this.uploadedFile);
        this.cafeteriaService.updateCafeteria(updatedCafeteria).then(function (data) {
            console.log('update data', data);
            if (_this.uploadedFile) {
                _this.cafeteriaService.saveImage(_this.uploadedFile, _this._cafeteriaId).then(function (imgResponse) {
                    console.log('img response', imgResponse);
                    _this.goBack();
                }, function (imgError) {
                    console.warn('img error', imgError);
                    _this.goBack();
                });
            }
            else {
                _this.goBack();
            }
        }, function (error) {
            console.log('update error', error);
        });
    };
    EditCafeteriaComponent.prototype.goBack = function () {
        this.router.navigate(['welcome-page']);
    };
    EditCafeteriaComponent.prototype.openFileUploader = function (fileUploader) {
        var _this = this;
        if (fileUploader.files && fileUploader.files[0]) {
            var files = fileUploader.files;
            var file_1 = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            reader_1.onload = (function () {
                _this.uploadedFile = file_1;
                _this.uploadedImage = reader_1.result;
                // image size check 150x150
                // const img: HTMLImageElement = new Image();
                // img.src = reader.result;
                // img.onload = () => {
                //   if (img.width <= 150 && img.height <= 150) {
                //     // prev.src = this.src;
                //     this.uploadedImage = img.src;
                //   } else {
                //     console.log('ERROR');
                //   }
                // };
            }).bind(this);
            reader_1.onerror = (function (error) {
                console.log('Error: ', error);
            });
        }
    };
    EditCafeteriaComponent.prototype.selectUniversity = function (event) {
        var _this = this;
        console.log('selectUniversity event', event);
        this.updatedCafeteria.cafeteria.up_caf_university_id = event ? event.university_id : null;
        console.log('this.updatedCafeteria.cafeteria.up_caf_university_id', this.updatedCafeteria.cafeteria.up_caf_university_id);
        this.universityBuildings = [];
        if (this.updatedCafeteria.cafeteria.up_caf_university_id) {
            this.updatedCafeteria.cafeteria.up_caf_university_building_id = null;
        }
        if (this.updatedCafeteria.cafeteria.up_caf_university_id) {
            this._getUniversityBuildingById(this.updatedCafeteria.cafeteria.up_caf_university_id).then(function (universityBuildings) {
                console.log('universityBuildings', universityBuildings);
                _this.universityBuildings = universityBuildings;
            });
        }
    };
    EditCafeteriaComponent.prototype.selectKosherType = function (event) {
        this.updatedCafeteria.cafeteria.up_caf_kosher_type = event ? event.id : null;
    };
    EditCafeteriaComponent.prototype.selectCafeteriaBuilding = function (event) {
        this.updatedCafeteria.cafeteria.up_caf_university_building_id = event ? event.building_id : null;
    };
    EditCafeteriaComponent.prototype.getBy = function (array, value, key, displayedValue) {
        var index = this._findIndex(array, function (item) {
            return item[key] === value;
        }), result;
        if ((index || index === 0) && index > -1) {
            result = array[index][displayedValue];
        }
        return result;
    };
    ////
    EditCafeteriaComponent.prototype._getCafeteria = function (id) {
        var _this = this;
        console.log('id ==> ', id);
        return new Promise(function (resolve, reject) {
            _this.cafeteriaService.getCafeteriaById(id).then(function (response) {
                if (response && response.data && response.data.cafeteria) {
                    resolve(response.data.cafeteria);
                }
                else {
                    reject();
                }
            });
        });
    };
    EditCafeteriaComponent.prototype._parseCafeteriaToSaveFormat = function (cafeteria) {
        var result = new __WEBPACK_IMPORTED_MODULE_2__custom_classes__["c" /* UpdatedCafeteria */](), workTime = cafeteria.working_time;
        workTime.forEach(function (item) {
            for (var key in item) {
                if (key === 'day_number' || key === 'time_end' || key === 'time_start') {
                    item['up_' + key] = item[key];
                }
                delete item[key];
            }
        });
        result.work_time = workTime;
        console.log('result', result);
        console.log('cafeteria', cafeteria);
        //
        this.uploadedImage = cafeteria.caf_image;
        result.cafeteria.up_caf_id = cafeteria.id;
        result.cafeteria.up_caf_type = cafeteria.caf_type;
        result.cafeteria.up_caf_name = cafeteria.caf_name;
        result.cafeteria.up_caf_university_id = cafeteria.university_id;
        result.cafeteria.up_caf_university_building_id = cafeteria.university_building_id;
        result.cafeteria.up_caf_kosher_type = cafeteria.kosher_type;
        result.cafeteria.up_caf_veg_type = cafeteria.veg_type;
        result.cafeteria.up_caf_address = cafeteria.caf_address;
        result.cafeteria.up_caf_description = cafeteria.description;
        // up_caf_id: null,
        // up_caf_type: null,
        // up_caf_name: '',
        // up_caf_university_id: null,
        // up_caf_university_building_id: null,
        // up_caf_kosher_type: null,
        // up_caf_veg_type: null,
        // up_caf_address: '',
        // up_caf_description: ''
        // caf_address
        //   :
        //   "test address"
        // caf_icon
        //   :
        //   null
        // caf_image
        //   :
        //   null
        // caf_name
        //   :
        //   "my first cafe"
        // caf_type
        //   :
        //   1
        // company_id
        //   :
        //   36
        // description
        //   :
        //   "sdfsdfsdfsdfsdfsdf"
        // id
        //   :
        //   65
        // kosher_type
        //   :
        //   0
        // university_building_id
        //   :
        //   1
        // university_id
        //   :
        //   1
        // veg_type
        //   :
        //   0
        return result;
    };
    EditCafeteriaComponent.prototype._findIndex = function (array, callback) {
        var i = 0, len = (array && array.length) ? array.length : 0, result;
        for (; i < len; i++) {
            if (callback(array[i])) {
                result = i;
                break;
            }
        }
        return result;
    };
    EditCafeteriaComponent.prototype._setSelectedTime = function (array, newTime) {
        var index = this._findIndex(this.updatedCafeteria.work_time, function (day) {
            return day.up_day_number === newTime.up_day_number;
        });
        if (index >= 0) {
            this.updatedCafeteria.work_time[index] = newTime;
        }
        else {
            this.updatedCafeteria.work_time.push(newTime);
        }
    };
    EditCafeteriaComponent.prototype._getUniversities = function () {
        var _this = this;
        this.universityService.getUniversityList().then(function (response) {
            // todo: RENAME response.data.cafeteria -> response.data.universities
            _this.universities = response.data.universities;
        });
    };
    EditCafeteriaComponent.prototype._getUniversityBuildingById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.universityService.getUniversitybuildings(id).then(function (response) {
                resolve(response.data.cafeteria);
            });
        });
    };
    EditCafeteriaComponent.prototype._timeSelectResponseParsing = function (array) {
        var result = [], len = array.length, i = 0;
        for (; i < len; i++) {
            var tmpObj = {};
            for (var key in array[i]) {
                tmpObj['up_' + key] = array[i][key];
            }
            result.push(tmpObj);
        }
        return result;
    };
    return EditCafeteriaComponent;
}());
EditCafeteriaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-edit-cafeteria',
        template: __webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services__["h" /* TimeSelectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["h" /* TimeSelectService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["e" /* CafeteriaService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services__["g" /* UniversityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["g" /* UniversityService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["i" /* ModalService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services__["k" /* EventService */]) === "function" && _h || Object])
], EditCafeteriaComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=edit-cafeteria.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_cafeteria_routing_module__ = __webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_cafeteria_component__ = __webpack_require__("../../../../../src/app/pages/edit-cafeteria/edit-cafeteria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCafeteriaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var EditCafeteriaModule = (function () {
    function EditCafeteriaModule() {
    }
    return EditCafeteriaModule;
}());
EditCafeteriaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__edit_cafeteria_routing_module__["a" /* EditCafeteriaRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_5__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__edit_cafeteria_component__["a" /* EditCafeteriaComponent */]
        ]
    })
], EditCafeteriaModule);

//# sourceMappingURL=edit-cafeteria.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-manager/edit-manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_manager_component__ = __webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditManagerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'edit-manager/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__edit_manager_component__["a" /* EditManagerComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var EditManagerRoutingModule = (function () {
    function EditManagerRoutingModule() {
    }
    return EditManagerRoutingModule;
}());
EditManagerRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EditManagerRoutingModule);

//# sourceMappingURL=edit-manager-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-manager/edit-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-manager-component\">\n  <div class=\"component-title\">\n    מנהל עריכה\n  </div>\n\n  <div class=\"component-content\">\n    <div class=\"left-side-form\">\n      <div class=\"create-connection\">\n        <div class=\"notice\">\n          <div class=\"bold\">תהליך ההרשמה לתורלס הוא</div>\n          <div class=\"bold\">.חד פעמי</div>\n          <div class=\"normal\">בעתיד, תוכל/י לבצע עידכונים וש</div>\n        </div>\n\n        <div class=\"notice notice__second\">\n          <div class=\"bold\">נא הכינו את המידע הנ”ל:</div>\n\n          <div class=\"normal create__big__area\">\n\n            <span>רשימת קטגוריות המוצרים </span><br><span>שמות כל המוצרים</span><br><span>תיאור מפורט של כל המוצרים</span></div>\n\n        </div>\n\n        <div class=\"link\">\n          לעזרה - צור/י קשר\n        </div>\n      </div>\n    </div>\n\n    <div class=\"manager-details-form\">\n      <!--cafeteria details-->\n      <div class=\"form-label\">\n        מנהל הקפטריה\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"manager.name\" [placeholderMessage]=\"'שם פרטי'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"manager.last_name\" [placeholderMessage]=\"'שם משפחה'\">\n      </div>\n\n      <!--<div class=\"input-line\">-->\n        <!--<input type=\"text\" appInput [(ngModel)]=\"manager.id\" [placeholderMessage]=\"'id'\">-->\n      <!--</div>-->\n\n      <!--<div class=\"input-line\">-->\n        <!--<input type=\"text\" dir=\"rtl\" [(ngModel)]=\"manager.passport_id\" appInput [placeholderMessage]=\"'passport ID'\">-->\n      <!--</div>-->\n\n      <div class=\"input-line required\">\n        <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"manager.email\" (blur)=\"checkEmail(manager.email)\"  [placeholderMessage]=\"'אֶלֶקטרוֹנִי'\" [error]=\"formErrors.emailField\" [message]=\"formErrorMessages.email\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"manager.phone\" (keyup)=\"manager.phone = phoneFormatter(manager.phone)\" [placeholderMessage]=\"'טלפון'\">\n      </div>\n\n      <div style=\"margin-bottom: 1.5rem; font-weight: 800; font-size: 1.3rem\">\n        סיסמה\n      </div>\n\n      <div class=\"input-line\">\n        <input type=\"password\" dir=\"rtl\" appInput [(ngModel)]=\"passwords.main\" (blur)=\"checkPassword(passwords.main, 'passwordField')\" [error]=\"formErrors.passwordField\" [message]=\"formErrorMessages.password\" [placeholderMessage]=\"'סיסמה'\">\n      </div>\n\n      <div class=\"input-line\">\n        <input type=\"password\" dir=\"rtl\" appInput [(ngModel)]=\"passwords.confirm\" (blur)=\"checkPassword(passwords.confirm, 'confirmPasswordField')\" [error]=\"formErrors.confirmPasswordField\" [message]=\"formErrorMessages.password\" [placeholderMessage]=\"'אשר סיסמה'\">\n      </div>\n\n      <div class=\"submit-block\">\n        <div class=\"submit-button-container\">\n          <button (click)=\"updateManager(manager)\" [disabled]=\"isButtonDisabled()\">עדכון</button>\n          <div class=\"repeat-button\">\n            <span (click)=\"goBack()\">חזור</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/edit-manager/edit-manager.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-manager-component .component-title {\n  text-align: right;\n  font-weight: 900;\n  margin-bottom: 40px;\n  font-size: 2.4rem;\n  font-family: sans-serif;\n  margin-top: 5.6rem; }\n\n.edit-manager-component .create-connection {\n  max-width: none;\n  min-width: 0;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  display: inline-block;\n  vertical-align: top; }\n  .edit-manager-component .create-connection .create__big__area {\n    line-height: 1.95;\n    padding-right: 1rem;\n    position: relative; }\n    .edit-manager-component .create-connection .create__big__area span {\n      position: relative; }\n    .edit-manager-component .create-connection .create__big__area span:after {\n      content: '';\n      position: absolute;\n      right: -2rem;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      width: 1rem;\n      height: 1rem;\n      border-radius: 50%;\n      background: #ccc; }\n  .edit-manager-component .create-connection .notice__second {\n    margin-bottom: 2rem; }\n  .edit-manager-component .create-connection .notice {\n    text-align: right;\n    background: #ffffff;\n    padding: 0.7rem 1.5rem;\n    border: 4px solid #fff557;\n    margin-bottom: 0rem;\n    margin-top: 1.1rem; }\n    .edit-manager-component .create-connection .notice .create__big__area {\n      color: #000;\n      font-weight: 600; }\n      .edit-manager-component .create-connection .notice .create__big__area span {\n        /*display: block;*/ }\n    .edit-manager-component .create-connection .notice .bold {\n      font-weight: 900;\n      font-size: 1.4rem;\n      line-height: 1;\n      font-family: sans-serif;\n      letter-spacing: -0.06rem; }\n    .edit-manager-component .create-connection .notice .normal {\n      color: #8f8f8f;\n      font-size: 1.2rem;\n      margin-top: 0.4rem;\n      margin-bottom: 1rem; }\n  .edit-manager-component .create-connection .link {\n    font-weight: 600;\n    margin-top: 1.5rem;\n    text-align: center;\n    text-decoration: underline;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 1.3rem; }\n\n.edit-manager-component .component-content .left-side-form {\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.edit-manager-component .component-content .manager-details-form {\n  max-width: 50%;\n  width: 30rem;\n  text-align: right;\n  position: relative;\n  float: right;\n  right: 0;\n  margin-top: calc(3.4rem + 42px); }\n  .edit-manager-component .component-content .manager-details-form .form-label {\n    text-align: right;\n    margin-bottom: 2.5rem;\n    font-weight: 700;\n    font-size: 1.4rem; }\n\n.edit-manager-component .input-line {\n  position: relative;\n  margin-bottom: 5rem;\n  width: 80%;\n  text-align: right;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-left: auto; }\n  .edit-manager-component .input-line input {\n    width: 100%;\n    height: 2.7rem;\n    font-size: 1.1rem;\n    font-weight: 500;\n    color: #999999;\n    background: inherit; }\n\n.edit-manager-component .submit-block {\n  position: relative;\n  margin-bottom: 40px; }\n  .edit-manager-component .submit-block .description,\n  .edit-manager-component .submit-block .submit-button-container {\n    width: 100%;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n  .edit-manager-component .submit-block .description {\n    font-size: 0.8rem;\n    margin-bottom: 10px; }\n  .edit-manager-component .submit-block .submit-button-container button {\n    width: 80%;\n    height: 3.5rem;\n    background: #fff557;\n    margin-bottom: 10rem;\n    font-weight: 900;\n    font-size: 1.4rem; }\n    .edit-manager-component .submit-block .submit-button-container button:active, .edit-manager-component .submit-block .submit-button-container button:hover {\n      background: #c2ba37; }\n  .edit-manager-component .submit-block .submit-button-container .repeat-button {\n    position: absolute;\n    cursor: pointer;\n    right: -5rem;\n    height: 44px;\n    line-height: 44px;\n    top: 0;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #2f2f2f; }\n    .edit-manager-component .submit-block .submit-button-container .repeat-button span {\n      font-size: 1.4rem;\n      border-bottom: 1px solid #000; }\n    .edit-manager-component .submit-block .submit-button-container .repeat-button span:hover {\n      border-bottom: 1px solid #2f2f2f; }\n\n.edit-manager-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.edit-manager-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/edit-manager/edit-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__("../../../../../src/app/constants/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditManagerComponent = (function () {
    function EditManagerComponent(router, userService, activatedRoute, eventService) {
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.eventService = eventService;
        this.manager = {};
        this.passwords = {
            main: '',
            confirm: ''
        };
        this.formErrors = {
            emailField: false,
            passwordField: false,
            confirmPasswordField: false
        };
        this.formErrorMessages = {
            email: '',
            password: ''
        };
        this._errors = {
            invalidEmail: 'דוא"ל שנכתב שגוי',
            emailAlreadyExist: 'הדוא"ל כבר בשימוש',
            invalidPassword: 'חייב להכיל לפחות 6 סמלים'
        };
        this._emailRegExp = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* REG_EXPS */].email;
        this._passwordRegExp = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* REG_EXPS */].password;
    }
    EditManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._managerId = +param.id;
            _this.__getManager(+param.id);
        });
        this.eventService.headerText$.emit('');
    };
    EditManagerComponent.prototype.updateManager = function (manager) {
        var _this = this;
        this.userService.editManager(this._managerId, this._cafeteriaId, {
            mn_name: manager.name,
            mn_last_name: manager.last_name,
            mn_phone: manager.phone,
            mn_email: manager.email,
            mn_pass: manager.password
        }).then(function (response) {
            console.log('manager was updated', response);
            _this.goBack();
        });
    };
    EditManagerComponent.prototype.goBack = function () {
        this.router.navigateByUrl('/manager-list');
    };
    EditManagerComponent.prototype.checkEmail = function (email) {
        var _this = this;
        if (email && email !== this._bufferEmail) {
            if (this._emailRegExp.test(email)) {
                this.userService.checkUserEmail(email).then(function (data) {
                    _this.formErrors.emailField = false;
                }, function (error) {
                    _this.formErrors.emailField = true;
                    _this.formErrorMessages.email = _this._errors.emailAlreadyExist;
                });
            }
            else {
                this.formErrors.emailField = true;
                this.formErrorMessages.email = this._errors.invalidEmail;
            }
        }
    };
    EditManagerComponent.prototype.checkPassword = function (password, type) {
        if (password) {
            if (password.length >= 6) {
                this.formErrors[type] = false;
            }
            else {
                this.formErrors[type] = true;
                this.formErrorMessages.password = this._errors.invalidPassword;
            }
        }
    };
    EditManagerComponent.prototype.isButtonDisabled = function () {
        var disable = false;
        for (var key in this.manager) {
            if (key !== 'id' && key !== 'passport_id' && (!this.manager[key] || this.manager[key].length < 2)) {
                disable = true;
            }
        }
        if (this.__hasError()) {
            disable = true;
        }
        if (this.passwords.main) {
            disable = this.passwords.main !== this.passwords.confirm;
        }
        return disable;
    };
    EditManagerComponent.prototype.phoneFormatter = function (t) {
        var numbers = t ? t.replace(/\D/g, '') : '', dashes = {
            3: '-'
        }, len = (numbers.length <= 10) ? numbers.length : 10;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += (dashes[i] || '') + numbers[i];
        }
        return result;
    };
    ////
    EditManagerComponent.prototype.__getManager = function (id) {
        var _this = this;
        this.userService.getManagerById(id).then(function (response) {
            console.log('response', response);
            _this.manager = response.data;
            _this.manager.phone = _this.phoneFormatter(_this.manager.phone);
            _this._bufferEmail = _this.manager.email;
        }, function () {
            console.log('reject');
            _this.manager = {};
        });
    };
    EditManagerComponent.prototype.__hasError = function () {
        var result = false;
        for (var key in this.formErrors) {
            if (this.formErrors[key]) {
                result = true;
            }
        }
        return result;
    };
    return EditManagerComponent;
}());
EditManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-edit-manager',
        template: __webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _d || Object])
], EditManagerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-manager.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-manager/edit-manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_manager_routing_module__ = __webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_manager_component__ = __webpack_require__("../../../../../src/app/pages/edit-manager/edit-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditManagerModule = (function () {
    function EditManagerModule() {
    }
    return EditManagerModule;
}());
EditManagerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__edit_manager_routing_module__["a" /* EditManagerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__edit_manager_component__["a" /* EditManagerComponent */]
        ]
    })
], EditManagerModule);

//# sourceMappingURL=edit-manager.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-product/edit-product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_product_component__ = __webpack_require__("../../../../../src/app/pages/edit-product/edit-product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'edit-product/:cafId/:catId/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__edit_product_component__["a" /* EditProductComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var EditProductRoutingModule = (function () {
    function EditProductRoutingModule() {
    }
    return EditProductRoutingModule;
}());
EditProductRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], EditProductRoutingModule);

//# sourceMappingURL=edit-product-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-product-component container\">\n\n  <div class=\"component-header\">\n    <div class=\"button-container\">\n      <button class=\"torless-button\" (click)=\"goBack()\">חזרה מוצרים</button>\n    </div>\n    <div class=\"text-container\">\n      עדכון המוצר\n    </div>\n  </div>\n\n  <div class=\"component-body\" *ngIf=\"updatedMainProduct\">\n    <div class=\"new-product\">\n      <div class=\"name-line\">\n        <div class=\"input-line required\">\n          <input type=\"text\" appInput [(ngModel)]=\"updatedMainProduct.product.pr_name\" [placeholderMessage]=\"'שם מוצר'\">\n        </div>\n        <div class=\"check-elements\">\n          <div class=\"check-element\" (click)=\"makeEmpty(-1)\">\n            <img class=\"check-element__icon\" *ngIf=\"updatedMainProduct.product.pr_type === -1\" src=\"./assets/icon/check-red.svg\" >\n            <img class=\"check-element__icon\" *ngIf=\"updatedMainProduct.product.pr_type !== -1\" src=\"./assets/icon/disabled.svg\" >\n            <!--no available-->\n            <div class=\"check-element__text\" [ngClass]=\"{'checked': updatedMainProduct.product.pr_type === -1}\">זה לא במלאי</div>\n          </div>\n\n          <div class=\"check-element\" (click)=\"makeEmpty(1)\">\n            <img class=\"check-element__icon\" *ngIf=\"updatedMainProduct.product.pr_type === 1\" src=\"./assets/icon/check-red.svg\" >\n            <img class=\"check-element__icon\" *ngIf=\"updatedMainProduct.product.pr_type !== 1\" src=\"./assets/icon/disabled.svg\" >\n            <!--available-->\n            <div class=\"check-element__text\" [ngClass]=\"{'checked': updatedMainProduct.product.pr_type === 1}\" style=\"width: 25px; margin: 0 auto;\">מוצר ריק</div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"border-bottom\"></div>\n\n      <div class=\"input-line required\">\n        <input type=\"text\" appInput [(ngModel)]=\"updatedMainProduct.product.pr_descr\" [placeholderMessage]=\"'פרטי מוצר'\">\n      </div>\n\n      <div class=\"input-line required\">\n        <input type=\"number\" dir=\"rtl\" appInput [(ngModel)]=\"updatedMainProduct.product.pr_price\" [placeholderMessage]=\"'מחיר מוצר'\">\n      </div>\n\n      <div class=\"cook-time\">\n        <div class=\"label required\">\n           <span>\n            <app-information [hintText]=\"'1006'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n           </span>\n          <span>דקות ליצירת המוצר</span>\n        </div>\n        <div class=\"minute\" *ngFor=\"let minute of minutes; let index = index;\"\n             [ngClass]=\"{'selected': updatedMainProduct.product.pr_cook_time === ''+ index }\"\n             (click)=\"selectCookTime(index)\">\n          {{ index }}\n        </div>\n\n      </div>\n\n      <div class=\"radio-elements\" *ngIf=\"vegTypes\">\n        <div class=\"radio-element\" *ngFor=\"let vegType of vegTypes;\">\n          <label class=\"text\" [attr.for]=\"vegType.veg_type\">{{vegType.veg_type}}</label>\n          <input type=\"radio\" [attr.id]=\"vegType.veg_type\" value=\"{{vegType.veg_id}}\" [(ngModel)]=\"updatedMainProduct.product.pr_veg_type\">\n        </div>\n      </div>\n\n      <div class=\"upload-image\">\n        <input type=\"file\" (change)=\"openFileUploader(fileUploader)\" accept=\"image/jpeg,image/png,image/jpg\" data-max-size=\"1024\" #fileUploader>\n        <div class=\"upload-image__text\">\n          <div>\n            הלוגו יופיע בכל פרסומי הקפיטריה, <br>\n            על כן, אנחנו ממליצים לצרף קובץ איכותי<br>\n          </div>\n\n          <div>\n            מידת הלוגו 150X150 פיקסלים<br>\n            בפורמט JPG / PNG\n          </div>\n\n          <div class=\"radio\">\n            <label>‘התמונה להמחשה בלבד’</label>\n            <input type=\"radio\" name=\"\">\n\n          </div>\n\n          <div class=\"links\">\n            <div (click)=\"fileUploader.click()\">שנה תמונה</div>\n            <div (click)=\"deleteImage()\">למחוק תמונה</div>\n          </div>\n        </div>\n\n        <div class=\"upload-image__button\">\n          <div class=\"upload-image__button--inner\" *ngIf=\"!uploadedImage\" (click)=\"fileUploader.click()\">\n            <div class=\"text\">הוסף/י לוגו לרשת</div>\n          </div>\n\n          <img app-check-image [src]=\"uploadedImage\" [image]=\"uploadedImage\" *ngIf=\"uploadedImage\">\n        </div>\n\n\n      </div>\n\n    </div>\n\n    <div class=\"extra-category__header\">\n      <button (click)=\"addNewExtraCategory()\" class=\"torless-page__add-new-element\">\n        <span class=\"plus\">+</span>\n        <span class=\"text\">הוסף תת קטגוריה</span>\n      </button>\n      <div class=\"info-icon\">\n        <app-information [hintText]=\"'1007'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n      </div>\n      <div class=\"label-text\">\n        קטגוריות נוספות\n      </div>\n    </div>\n\n    <div class=\"extra-category__content\" *ngFor=\"let extra_category of updatedMainProduct.extra_categories; let index = index;\">\n      <div class=\"label\">\n        <button class=\"remove-button\" (click)=\"removeExtraCategory(index)\">\n          <img src=\"./assets/icon/trash.svg\">\n        </button>\n        <div class=\"information-container\">\n          <app-information [hintText]=\"'1008'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n        </div>\n        <div class=\"name-line\">\n          <div class=\"input-line\">\n            <input type=\"text\" appInput [(ngModel)]=\"extra_category.extra_cat_name\" [placeholderMessage]=\"'שם קטגוריה נוספת'\">\n          </div>\n        </div>\n      </div>\n      <div class=\"body\" *ngIf=\"extra_category?.extra_cat_name.length > 0\">\n        <div class=\"extra-product\">\n          <div class=\"extra-product__outer\">\n            <div class=\"information-container\">\n              <app-information [hintText]=\"'1009'\" hintPosition=\"top center\" iconColor=\"#ff5b57\"></app-information>\n            </div>\n            <div class=\"description\">\n              <!--todo: remove-->\n              טקסט הבדיקה\n            </div>\n          </div>\n\n          <div *ngFor=\"let extra_info of extra_category.extra_info\" style=\"margin-bottom: 30px;\">\n            <div class=\"extra-product__inner\">\n              <div class=\"input-line\">\n                <input type=\"text\" appInput [(ngModel)]=\"extra_info.extra_pr_name\" [placeholderMessage]=\"'שם מוצר נוסף'\">\n              </div>\n\n              <div class=\"input-line\">\n                <input type=\"text\" dir=\"rtl\" appInput [(ngModel)]=\"extra_info.extra_pr_descr\" [placeholderMessage]=\"'תיאור מוצר נוסף'\">\n              </div>\n\n              <div class=\"price-input-line\" *ngIf=\"extra_info.double_extra_products?.length === 0\">\n                <input type=\"text\" dir=\"rtl\" [(ngModel)]=\"extra_info.extra_pr_price\">\n              </div>\n            </div>\n\n            <div class=\"double-extra-products__container\">\n              <div class=\"double-extra-products__item\">\n                <div class=\"double-extra-products__item--outer\" *ngIf=\"extra_info.double_extra_products?.length > 0\">\n                  <div class=\"description\">\n                    <!--todo: remove-->\n                    טקסט הבדיקה\n                  </div>\n                </div>\n\n                <div class=\"double-extra-products__item--inner\" *ngFor=\"let double_extra of extra_info.double_extra_products\">\n                  <div class=\"input-line\">\n                    <input type=\"text\" appInput [(ngModel)]=\"double_extra.double_extra_pr_name\" [placeholderMessage]=\"'שם מוצר כפול'\">\n                  </div>\n                  <div class=\"price-input-line\">\n                    <input type=\"text\" dir=\"rtl\" [(ngModel)]=\"double_extra.double_extra_pr_price\">\n                  </div>\n                </div>\n\n                <div class=\"double-extra-products__item--button\" (click)=\"addDoubleExtraProduct(extra_info.double_extra_products)\">\n                  <!--todo: remove-->\n                  <span class=\"text\">טקסט הבדיקה</span>\n                  <span class=\"plus\">+</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <!--TODO: after BE connect uncomment-->\n          <div class=\"extra-product__button\" (click)=\"addExtraInfo(extra_category.extra_info)\">\n            <!--todo: remove-->\n            <span class=\"text\">טקסט הבדיקה</span>\n            <span class=\"plus\">+</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <button (click)=\"addNewExtraCategory()\" class=\"torless-page__add-new-element\" *ngIf=\"updatedMainProduct.extra_categories?.length > 4\" style=\"margin-bottom: 55px;\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">הוסף תת קטגוריה</span>\n    </button>\n\n  </div>\n\n  <div class=\"component-footer\">\n    <span (click)=\"goBack()\" class=\"back-button\">תחזור</span>\n    <button (click)=\"updateProduct()\" [disabled]=\"isSubmitButtonDisabled()\" class=\"torless-page__add-new-element\">\n      <span class=\"text\">עדכון המוצר</span>\n    </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/edit-product/edit-product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".edit-product-component .app-input-placeholder {\n  font-size: 1.4rem; }\n\n.edit-product-component .torless-button {\n  width: 100%;\n  max-width: 275px;\n  height: 44px;\n  background: #fff557;\n  color: grey;\n  font-size: 1.3rem;\n  font-weight: 900; }\n\n.edit-product-component .upload-image {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .edit-product-component .upload-image input[type=\"file\"] {\n    width: 0; }\n  .edit-product-component .upload-image__text {\n    text-align: right;\n    padding-right: 10px;\n    vertical-align: top;\n    display: inline-block;\n    box-sizing: border-box;\n    font-size: 1rem;\n    font-family: sans-serif;\n    letter-spacing: -0.1rem;\n    line-height: 1.3;\n    color: #9a9a9a;\n    font-weight: normal; }\n    .edit-product-component .upload-image__text div:not(:nth-last-child(1)) {\n      margin-top: 0;\n      margin-bottom: 0.4rem; }\n    .edit-product-component .upload-image__text .links {\n      text-decoration: underline; }\n      .edit-product-component .upload-image__text .links div {\n        cursor: pointer; }\n        .edit-product-component .upload-image__text .links div:hover {\n          text-decoration: underline; }\n    .edit-product-component .upload-image__text .radio {\n      white-space: nowrap; }\n      .edit-product-component .upload-image__text .radio label {\n        color: #000;\n        font-weight: 900;\n        vertical-align: text-bottom; }\n  .edit-product-component .upload-image__button {\n    width: 400px;\n    height: 400px;\n    background: #000;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    .edit-product-component .upload-image__button--inner {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      text-align: center;\n      width: 100%; }\n      .edit-product-component .upload-image__button--inner .text {\n        color: #909090;\n        font-weight: 600; }\n        .edit-product-component .upload-image__button--inner .text:before {\n          content: \"+\\A\" attr(title);\n          white-space: pre;\n          color: #fff557;\n          font-weight: bolder;\n          font-size: 4rem; }\n    .edit-product-component .upload-image__button img {\n      width: 100%;\n      height: auto; }\n\n.edit-product-component .input-line {\n  font-size: 1.1rem;\n  margin-bottom: 0;\n  width: 22rem;\n  height: 2.7rem;\n  font-weight: 500; }\n  .edit-product-component .input-line span {\n    display: none; }\n\n.edit-product-component .component-header {\n  text-align: right; }\n  .edit-product-component .component-header .button-container {\n    margin-bottom: 30px;\n    width: 40%;\n    margin-left: auto; }\n  .edit-product-component .component-header .text-container {\n    margin-bottom: 30px;\n    font-weight: 900;\n    font-size: 1.2rem;\n    font-size: 2.5rem;\n    margin-top: 2.7rem; }\n\n.edit-product-component .image__btn__text {\n  background: #000;\n  margin-bottom: 1rem; }\n\n.edit-product-component .component-body .new-product {\n  background: #fff;\n  margin-bottom: 45px;\n  padding: 25px 55px 55px; }\n  .edit-product-component .component-body .new-product .name-line {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n    .edit-product-component .component-body .new-product .name-line .input-line {\n      width: 50%;\n      margin-bottom: 20px; }\n    .edit-product-component .component-body .new-product .name-line .check-elements {\n      width: 50%;\n      text-align: center;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n      .edit-product-component .component-body .new-product .name-line .check-elements .check-element {\n        display: inline-block;\n        width: 50px;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        cursor: pointer; }\n        .edit-product-component .component-body .new-product .name-line .check-elements .check-element__icon {\n          width: 25px;\n          vertical-align: bottom;\n          padding-bottom: 5px; }\n        .edit-product-component .component-body .new-product .name-line .check-elements .check-element__text {\n          color: #9C9C9C;\n          line-height: 13px;\n          font-size: 0.8rem;\n          text-align: center; }\n          .edit-product-component .component-body .new-product .name-line .check-elements .check-element__text.checked {\n            color: #FF5D59; }\n  .edit-product-component .component-body .new-product .border-bottom {\n    border-bottom: 1px solid #000;\n    width: calc(100% + 110px);\n    border-bottom: 1px solid #000;\n    display: block;\n    margin-left: -55px;\n    margin-bottom: 70px; }\n  .edit-product-component .component-body .new-product .cook-time {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-left: auto;\n    margin-bottom: 40px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .edit-product-component .component-body .new-product .cook-time .label {\n      width: 100%;\n      position: relative;\n      text-align: right;\n      margin-bottom: 10px;\n      font-size: 1.4rem;\n      font-family: sans-serif;\n      padding-bottom: 5px;\n      color: #9c9c9c; }\n    .edit-product-component .component-body .new-product .cook-time .minute {\n      width: calc((100% / 8) - 10px);\n      margin-bottom: 1px;\n      height: 50px;\n      line-height: 50px;\n      vertical-align: center;\n      border: 1px solid #cdcccc;\n      text-align: center;\n      font-weight: 900;\n      font-family: sans-serif;\n      color: grey;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      font-size: 1.4rem; }\n    .edit-product-component .component-body .new-product .cook-time .minute.selected {\n      background: #000;\n      color: #fff; }\n  .edit-product-component .component-body .new-product .radio-elements {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 50%;\n    margin-left: auto;\n    margin-bottom: 40px;\n    padding-bottom: 5px;\n    width: 37rem; }\n    .edit-product-component .component-body .new-product .radio-elements .radio-element {\n      width: calc(100% / 3 - 5px);\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      text-align: right;\n      cursor: pointer;\n      font-size: 1.6rem;\n      font-family: sans-serif;\n      margin-left: 2.3rem;\n      margin-bottom: 2rem;\n      width: 8.6rem; }\n      .edit-product-component .component-body .new-product .radio-elements .radio-element input {\n        width: 1.6rem;\n        height: 1.6rem; }\n      .edit-product-component .component-body .new-product .radio-elements .radio-element label {\n        font-size: 1.5rem;\n        display: inline-block;\n        margin-top: -0rem;\n        vertical-align: top; }\n      .edit-product-component .component-body .new-product .radio-elements .radio-element .text {\n        color: grey;\n        cursor: pointer; }\n      .edit-product-component .component-body .new-product .radio-elements .radio-element:hover .text {\n        color: #676666; }\n\n.edit-product-component .component-body .extra-category__header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 30px; }\n  .edit-product-component .component-body .extra-category__header .info-icon {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-left: auto;\n    margin-right: 20px; }\n  .edit-product-component .component-body .extra-category__header .label-text {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    font-size: 1.9rem;\n    font-weight: 900;\n    color: #000; }\n\n.edit-product-component .component-body .extra-category__content {\n  margin-bottom: 20px;\n  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.5); }\n  .edit-product-component .component-body .extra-category__content .information-container {\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-left: auto;\n    margin-right: 20px; }\n  .edit-product-component .component-body .extra-category__content .input-line input {\n    font-weight: 900; }\n  .edit-product-component .component-body .extra-category__content .label {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 20px 30px;\n    background: #fff; }\n    .edit-product-component .component-body .extra-category__content .label .remove-button {\n      max-width: none;\n      width: 20px;\n      background: inherit;\n      height: auto;\n      padding: 0; }\n      .edit-product-component .component-body .extra-category__content .label .remove-button [disabled] {\n        opacity: 0.8;\n        cursor: not-allowed; }\n      .edit-product-component .component-body .extra-category__content .label .remove-button:active {\n        -webkit-transform: scale(0.9);\n                transform: scale(0.9); }\n      .edit-product-component .component-body .extra-category__content .label .remove-button img {\n        width: 100%; }\n    .edit-product-component .component-body .extra-category__content .label .name-line {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      color: #000;\n      font-weight: 900; }\n      .edit-product-component .component-body .extra-category__content .label .name-line .input-line {\n        margin-bottom: 1rem;\n        width: 100%; }\n  .edit-product-component .component-body .extra-category__content .body {\n    padding: 15px 30px;\n    background: #eaeaea; }\n    .edit-product-component .component-body .extra-category__content .body .extra-product {\n      margin: 0 10px 10px 0; }\n      .edit-product-component .component-body .extra-category__content .body .extra-product__inner {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        position: relative;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: reverse;\n            -ms-flex-direction: row-reverse;\n                flex-direction: row-reverse;\n        padding: 20px;\n        margin-bottom: 15px;\n        background: #fff; }\n      .edit-product-component .component-body .extra-category__content .body .extra-product__outer {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        margin-bottom: 5px; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product__outer .description {\n          -ms-flex-item-align: center;\n              -ms-grid-row-align: center;\n              align-self: center;\n          font-size: 1.1rem;\n          font-weight: 800;\n          color: #bababa; }\n      .edit-product-component .component-body .extra-category__content .body .extra-product__button {\n        text-align: right;\n        color: #858585;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        cursor: pointer; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product__button .text {\n          font-size: 1.4rem;\n          text-decoration: underline;\n          letter-spacing: -1px; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product__button .plus {\n          color: #000;\n          font-size: 1.6rem;\n          font-weight: 900;\n          vertical-align: middle;\n          display: inline-block;\n          margin-left: 10px; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product__button:hover .text {\n          color: #9f9e9e; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product__button:hover .plus {\n          color: #1a1919; }\n      .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item {\n        margin: 0 50px 10px 0; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--inner {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          position: relative;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: reverse;\n              -ms-flex-direction: row-reverse;\n                  flex-direction: row-reverse;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          padding: 20px;\n          margin-bottom: 15px;\n          background: #f4f4f4; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--inner .app-input-placeholder {\n            font-size: 0.9rem; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--outer {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: end;\n              -ms-flex-pack: end;\n                  justify-content: flex-end;\n          margin: 10px 0 5px 0; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--outer .description {\n            -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n                align-self: center;\n            font-size: 1rem;\n            font-weight: 700;\n            color: #b2b2b2; }\n        .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button {\n          text-align: right;\n          color: #858585;\n          -webkit-user-select: none;\n             -moz-user-select: none;\n              -ms-user-select: none;\n                  user-select: none;\n          cursor: pointer; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button .text {\n            font-size: 1.4rem;\n            text-decoration: underline;\n            letter-spacing: -1px; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button .plus {\n            color: #000;\n            font-size: 1.6rem;\n            font-weight: 900;\n            vertical-align: middle;\n            display: inline-block;\n            margin-left: 10px; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button:hover .text {\n            color: #9f9e9e; }\n          .edit-product-component .component-body .extra-category__content .body .extra-product .double-extra-products__item--button:hover .plus {\n            color: #1a1919; }\n      .edit-product-component .component-body .extra-category__content .body .extra-product .input-line {\n        width: 30%;\n        margin-bottom: 0;\n        margin-left: 10%; }\n  .edit-product-component .component-body .extra-category__content:last-child {\n    margin-bottom: 30px; }\n\n.edit-product-component .component-footer {\n  text-align: right; }\n  .edit-product-component .component-footer .back-button {\n    display: inline-block;\n    margin: 0 50px;\n    cursor: pointer;\n    font-weight: 900; }\n    .edit-product-component .component-footer .back-button:hover {\n      text-decoration: underline; }\n  .edit-product-component .component-footer .torless-page__add-new-element {\n    background: #fff557;\n    position: relative; }\n    .edit-product-component .component-footer .torless-page__add-new-element .text {\n      color: #000;\n      vertical-align: text-bottom;\n      font-size: 1.5rem; }\n    .edit-product-component .component-footer .torless-page__add-new-element .icon {\n      position: absolute;\n      right: 20px;\n      top: calc(50% - 10px); }\n    .edit-product-component .component-footer .torless-page__add-new-element[disabled] {\n      background: #fff88a;\n      cursor: not-allowed; }\n    .edit-product-component .component-footer .torless-page__add-new-element:active, .edit-product-component .component-footer .torless-page__add-new-element:hover {\n      background: #c2ba37; }\n\n.edit-product-component .input-line {\n  position: relative;\n  width: 50%;\n  margin-left: auto;\n  margin-bottom: 40px;\n  -ms-flex-item-align: end;\n      align-self: flex-end; }\n  .edit-product-component .input-line input {\n    width: 100%;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    font-size: 1.1rem;\n    font-weight: 500;\n    background: inherit;\n    color: #999999; }\n  .edit-product-component .input-line .app-input-placeholder {\n    font-size: 1.4rem !important;\n    font-weight: 500 !important;\n    line-height: 2.7rem;\n    height: 2.7rem;\n    color: #999999; }\n    .edit-product-component .input-line .app-input-placeholder.focused {\n      top: -12px !important;\n      right: 0;\n      font-size: 1rem !important;\n      height: auto;\n      line-height: inherit; }\n\n.edit-product-component .price-input-line {\n  width: 50px;\n  height: 2.7%;\n  font-size: 1.1rem;\n  font-weight: 500;\n  background: inherit;\n  margin-left: 60px;\n  margin-right: auto; }\n  .edit-product-component .price-input-line input {\n    font-weight: 900;\n    width: 100%;\n    background: inherit;\n    font-size: 1.1rem;\n    height: 2.7rem;\n    line-height: 2.7rem;\n    color: #999999; }\n\n.edit-product-component .required:after {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  bottom: 1px; }\n\n.edit-product-component .required-top:before {\n  content: '';\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background: #ff5b57;\n  right: 0;\n  top: -5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductComponent = (function () {
    function EditProductComponent(router, activatedRoute, productService, cafeteriaService, eventService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.minutes = new Array(18);
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            console.log('param', param);
            _this._productId = +param.id;
            _this._cafeteriaId = +param.cafId;
            _this._categoryId = +param.catId;
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
            _this.productService.getMainProduct(_this._productId).then(function (response) {
                console.log('response ==> ', response);
                console.log('response.data', response.data);
                _this.updatedMainProduct = _this._parseBEData(response.data);
            });
        });
        this.__getVegTypes();
    };
    EditProductComponent.prototype.updateProduct = function () {
        // this.updatedMainProduct.pr_caf_id = this._cafeteriaId;
        // this.updatedMainProduct.pr_cat_id = this._categoryId;
        var _this = this;
        console.log('this.updatedMainProduct', this.updatedMainProduct);
        console.log('this._cafeteriaId', this._cafeteriaId);
        console.log('this._categoryId', this._categoryId);
        console.log('this._productId', this._productId);
        console.log('this.uploadedFile', this.uploadedFile);
        this.productService.updateProduct(this.updatedMainProduct, this._cafeteriaId, this._categoryId, this._productId).then(function (response) {
            console.log('response ==> ', response);
            if (_this.uploadedFile) {
                _this.productService.saveImage(_this.uploadedFile, _this._productId).then(function () {
                    _this.goBack();
                });
            }
            else {
                _this.goBack();
            }
        }, function (error) {
            console.log('error ===> ', error);
        });
    };
    EditProductComponent.prototype.goBack = function () {
        this.router.navigate(['product-list', this._cafeteriaId, this._categoryId]);
    };
    EditProductComponent.prototype.selectCookTime = function (minute) {
        this.updatedMainProduct.product.pr_cook_time = '' + minute;
    };
    EditProductComponent.prototype.addNewExtraCategory = function () {
        this.updatedMainProduct.extra_categories.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["a" /* ExtraCategories */]());
    };
    EditProductComponent.prototype.addDoubleExtraProduct = function (doubleExtraProducts) {
        console.log('doubleExtraProducts ==> ', doubleExtraProducts);
        doubleExtraProducts.push(new __WEBPACK_IMPORTED_MODULE_3__custom_classes__["b" /* DoubleExtraProduct */]());
    };
    EditProductComponent.prototype.isSubmitButtonDisabled = function () {
        var result = false;
        if (!this.updatedMainProduct ||
            !this.updatedMainProduct.product ||
            !this.updatedMainProduct.product.pr_name ||
            !this.updatedMainProduct.product.pr_price ||
            !this.updatedMainProduct.product.pr_cook_time ||
            !this.updatedMainProduct.product.pr_descr) {
            result = true;
        }
        return result;
    };
    EditProductComponent.prototype.addExtraInfo = function (extra_info) {
        extra_info.push({
            extra_pr_name: '',
            extra_pr_descr: '',
            extra_pr_price: '',
            double_extra_products: []
        });
    };
    EditProductComponent.prototype.removeExtraCategory = function (index) {
        this.updatedMainProduct.extra_categories.splice(index, 1);
    };
    EditProductComponent.prototype.makeEmpty = function (statusCode) {
        this.updatedMainProduct.product.prod_type = statusCode;
    };
    EditProductComponent.prototype.openFileUploader = function (fileUploader) {
        var _this = this;
        if (fileUploader.files && fileUploader.files[0]) {
            var files = fileUploader.files;
            var file_1 = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            reader_1.onload = (function () {
                _this.uploadedFile = file_1;
                _this.uploadedImage = reader_1.result;
                // image size check 150x150
                // const img: HTMLImageElement = new Image();
                // img.src = reader.result;
                // img.onload = () => {
                //   if (img.width <= 150 && img.height <= 150) {
                //     // prev.src = this.src;
                //     this.uploadedImage = img.src;
                //   } else {
                //     console.log('ERROR');
                //   }
                // };
            }).bind(this);
            reader_1.onerror = (function (error) {
                console.log('Error: ', error);
            });
        }
    };
    EditProductComponent.prototype.deleteImage = function () {
        this.uploadedFile = null;
        this.uploadedImage = null;
    };
    ///
    EditProductComponent.prototype._parseBEData = function (beData) {
        var result = {};
        result.extra_categories = beData.extra_categories;
        this.uploadedImage = (beData.product.prod_image === 'none') ? '' : beData.product.prod_image;
        result.product = {
            pr_name: beData.product.prod_name,
            pr_price: beData.product.prod_price,
            pr_cook_time: String(beData.product.prod_cook_time),
            pr_descr: beData.product.prod_descr,
            pr_type: beData.product.prod_type
        };
        return result;
    };
    EditProductComponent.prototype.__getVegTypes = function () {
        var _this = this;
        this.productService.getVegTypes().then(function (response) {
            _this.vegTypes = response.data;
        });
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/pages/edit-product/edit-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/edit-product/edit-product.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _e || Object])
], EditProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/edit-product/edit-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_product_routing_module__ = __webpack_require__("../../../../../src/app/pages/edit-product/edit-product-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_product_component__ = __webpack_require__("../../../../../src/app/pages/edit-product/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditProductModule = (function () {
    function EditProductModule() {
    }
    return EditProductModule;
}());
EditProductModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__edit_product_routing_module__["a" /* EditProductRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__edit_product_component__["a" /* EditProductComponent */]
        ]
    })
], EditProductModule);

//# sourceMappingURL=edit-product.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// COMPONENT

var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* LoggedInGuardService */]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-component\">\n\n  <div class=\"login__header__containtainer\">\n    <div class=\"login__header__left__part\"></div>\n    <div class=\"login-component__title\">\n        torLess ברוכים הבאים למערכת\n           להזמין * לשלם * ולדלג על התור\n    </div>\n  </div>\n\n\n  <div class=\"body-container\">\n\n    <div class=\"login-component__left-side\">\n      <div class=\"label\">\n        ?torLess ברוכים הבאים למערכת\n           להזמין * לשלם * ולדלג על התור\n      </div>\n\n      <button class=\"torless-button\" (click)=\"goToRegistration()\">הרשם/י עכשיו</button>\n    </div>\n\n    <div class=\"login-component__form\">\n      <div class=\"label\">\n        :כבר איתנו? התחבר/י\n      </div>\n      <div class=\"input-line\">\n        <input name=\"n\"\n               type=\"text\" appInput\n               [(ngModel)]=\"user.us_log_email\"\n               [placeholderMessage]=\"'שם משתמש'\"\n               [error]=\"loginError\"\n               [message]=\"'שם משתמש לא קיים'\" autocomplete=\"off\" >\n      </div>\n\n      <div class=\"input-line\">\n        <span class=\"link top left\" (click)=\"forgotPassword()\">שכחתי סיסמה</span>\n        <input name=\"p\"\n               type=\"password\"\n               autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\n               appInput\n               [(ngModel)]=\"user.us_log_pass\"\n               [placeholderMessage]=\"'סיסמה'\"\n               [error]=\"loginError\"\n               [message]=\"'אולי טעיתם פה?'\" />\n      </div>\n\n      <button class=\"torless-button\" (click)=\"login(user)\" [disabled]=\"submitButtonDisabled(user) && !invalidForm\">התחבר/י</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login__header__containtainer {\n  display: inline-block;\n  width: 100%;\n  height: auto; }\n\n.login__header__left__part {\n  display: inline-block;\n  vertical-align: top;\n  width: 24%;\n  margin-right: 10%;\n  height: 1px; }\n\n.login-component .login-component__title {\n  display: inline-block;\n  width: 31.5%;\n  max-width: none;\n  margin: 0;\n  vertical-align: top;\n  font-size: 1.79rem;\n  max-width: none;\n  line-height: 1.3;\n  margin-bottom: 0;\n  margin-top: -0.4rem;\n  font-family: sans-serif; }\n\n.login-component__left-side .torless-button {\n  width: 100%;\n  font-size: 1.4rem;\n  margin-top: 1.5rem;\n  padding-top: 0.5rem;\n  transition-duration: 0.3s;\n  padding-bottom: 0.9rem;\n  height: auto; }\n  .login-component__left-side .torless-button:active, .login-component__left-side .torless-button:hover {\n    background: #c2ba37; }\n\n.login-component .body-container {\n  position: relative;\n  margin-top: 4.4rem; }\n\n.login-component__title {\n  text-align: center;\n  font-size: 1.3rem;\n  margin-bottom: 40px;\n  width: 45%; }\n\n.login-component__form {\n  display: inline-block;\n  width: 31.5%;\n  max-width: none;\n  margin: 0;\n  vertical-align: top;\n  max-width: none;\n  line-height: 1.3;\n  margin-bottom: 0;\n  margin-top: -0.4rem;\n  font-family: sans-serif;\n  text-align: right; }\n  .login-component__form .torless-button {\n    font-size: 1.4rem;\n    padding-top: 0rem;\n    height: 3.7rem;\n    color: #000;\n    box-sizing: border-box;\n    transition-duration: 0.3s; }\n    .login-component__form .torless-button:active, .login-component__form .torless-button:hover {\n      background: #c2ba37; }\n  .login-component__form .label {\n    font-size: 1.3rem;\n    letter-spacing: -0.1rem;\n    margin-bottom: 15px; }\n  .login-component__form .input-line {\n    margin-bottom: 40px; }\n\n.login-component__left-side {\n  position: relative;\n  left: auto;\n  top: auto;\n  max-width: none;\n  font-size: 0.8rem;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n  width: 24%;\n  margin-right: 10%;\n  height: 1px; }\n  .login-component__left-side .label {\n    width: 100%;\n    font-size: 1.3rem;\n    font-family: sans-serif;\n    font-weight: 600;\n    letter-spacing: -0.09rem;\n    line-height: 1;\n    margin-bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    // listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__custom_classes__["k" /* LoginUser */](); // 'torless_1@mailinator.com', 'qwerty123' //('sergiosy@sergiosy.com', '111111');
        this.loginError = false;
        this.invalidForm = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.forgotPassword = function () {
        console.log('forgot password?');
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.userService.login(user).then(function (data) {
            _this.loginError = false;
            _this._goTo('/welcome-page');
        }, function (reject) {
            _this.loginError = true;
        });
    };
    LoginComponent.prototype.submitButtonDisabled = function (user) {
        // validation can be added here
        return !user.us_log_email || !user.us_log_pass;
    };
    LoginComponent.prototype.goToRegistration = function () {
        this._goTo('/registration');
    };
    ////
    LoginComponent.prototype._goTo = function (url, params) {
        this.router.navigateByUrl(url, params);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("../../../../../src/app/pages/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { DndModule } from 'ng2-dnd';
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */]
            // DndModule.forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
        ]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manager-list/manager-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_list_component__ = __webpack_require__("../../../../../src/app/pages/manager-list/manager-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// GUARDS

// COMPONENT

var routes = [
    {
        path: 'manager-list',
        component: __WEBPACK_IMPORTED_MODULE_3__manager_list_component__["a" /* ManagerListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var ManagerListRoutingModule = (function () {
    function ManagerListRoutingModule() {
    }
    return ManagerListRoutingModule;
}());
ManagerListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ManagerListRoutingModule);

//# sourceMappingURL=manager-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manager-list/manager-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"manager-list-component\">\n  <div class=\"torless-page__header\">\n    <button (click)=\"addManager()\" class=\"torless-page__add-new-element\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">ליצור מנהל</span>\n    </button>\n    <div class=\"title\">רשימת מנהלים</div>\n  </div>\n\n  <div class=\"torless-page__list\">\n    <div class=\"element\" *ngFor=\"let manager of managers\">\n      <div class=\"name\">\n        {{ manager.name + ' ' + manager.last_name }}\n      </div>\n      <div class=\"email\">\n        {{ manager.email }}\n      </div>\n      <div class=\"buttons\">\n        <button class=\"buttons__edit\" (click)=\"editManager(manager)\">\n          <img src=\"./assets/icon/edit.svg\">\n          <div>מנהל עריכה</div>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/manager-list/manager-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".manager-list-component {\n  padding-top: calc(1.7rem + 44px); }\n  .manager-list-component .torless-page__header .title {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-size: 1.6rem; }\n  .manager-list-component .torless-page__list .name {\n    width: calc(100% / 2 - 50px); }\n  .manager-list-component .torless-page__list .email {\n    width: calc(100% / 2 - 50px);\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    text-align: center; }\n  .manager-list-component .torless-page__list .buttons {\n    width: 50px;\n    margin-right: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/manager-list/manager-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modals_select_cafeteria_modal_select_cafeteria_modal_component__ = __webpack_require__("../../../../../src/app/modals/select-cafeteria-modal/select-cafeteria-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManagerListComponent = (function () {
    function ManagerListComponent(router, userService, eventService, modalService) {
        this.router = router;
        this.userService = userService;
        this.eventService = eventService;
        this.modalService = modalService;
    }
    ManagerListComponent.prototype.ngOnInit = function () {
        this.__getManagerList();
        this.eventService.headerText$.emit('');
    };
    ManagerListComponent.prototype.editManager = function (manager) {
        this.router.navigate(['edit-manager', manager.id]);
    };
    ManagerListComponent.prototype.addManager = function () {
        var _this = this;
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_3__modals_select_cafeteria_modal_select_cafeteria_modal_component__["a" /* SelectCafeteriaModalComponent */], null, 'small').then(function (response) {
            _this.router.navigate(['create-cafeteria-manager', response.id]);
        }, function () {
            console.log('error');
        });
    };
    ///
    ManagerListComponent.prototype.__getManagerList = function () {
        var _this = this;
        this.userService.getManagerList().then(function (response) {
            _this.managers = response.data;
            console.log('this.managers', _this.managers);
        }, function (errors) {
            console.log('errors', errors);
        });
    };
    return ManagerListComponent;
}());
ManagerListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-manager-list',
        template: __webpack_require__("../../../../../src/app/pages/manager-list/manager-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/manager-list/manager-list.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["f" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["i" /* ModalService */]) === "function" && _d || Object])
], ManagerListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=manager-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/manager-list/manager-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_list_routing_module__ = __webpack_require__("../../../../../src/app/pages/manager-list/manager-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_list_component__ = __webpack_require__("../../../../../src/app/pages/manager-list/manager-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ManagerListModule = (function () {
    function ManagerListModule() {
    }
    return ManagerListModule;
}());
ManagerListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__manager_list_routing_module__["a" /* ManagerListRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__manager_list_component__["a" /* ManagerListComponent */]
        ]
    })
], ManagerListModule);

//# sourceMappingURL=manager-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n  mixins\n */\n/**\n  button element style\n */\n.torless-button {\n  width: 100%;\n  height: 44px;\n  background: #fff557;\n  font-size: 0.9rem;\n  font-weight: 900; }\n  .torless-button:hover, .torless-button:active {\n    background: #c2ba37; }\n  .torless-button[disabled] {\n    cursor: not-allowed; }\n\n[center] {\n  margin-left: auto;\n  margin-right: auto; }\n\n[max-width__350] {\n  max-width: 350px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product-list/product-list-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list_component__ = __webpack_require__("../../../../../src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENT

// GUARDS

var routes = [
    { path: 'product-list/:cafId/:catId', component: __WEBPACK_IMPORTED_MODULE_2__product_list_component__["a" /* ProductListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__services__["j" /* TmpTimerService */], __WEBPACK_IMPORTED_MODULE_3__services__["b" /* AuthGuardService */]] }
];
var ProductListRoutingModule = (function () {
    function ProductListRoutingModule() {
    }
    return ProductListRoutingModule;
}());
ProductListRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], ProductListRoutingModule);

//# sourceMappingURL=product-list-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-list-component\">\n  <div class=\"button back-button\">\n    <button (click)=\"goToCategoriesList()\">חזרה לתפריט</button>\n  </div>\n\n  <div  class=\"button back-button\">\n    <!--<div (click)=\"goToCafeteriasList()\">go to cafeterias list</div>-->\n    <button (click)=\"goToRemovedProductList()\">רשימת מוצרים שהוסרו</button>\n  </div>\n\n  <div class=\"torless-page__header\">\n    <button (click)=\"goToAddProductPage()\" class=\"torless-page__add-new-element\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">הוסף מוצר</span>\n    </button>\n    <div class=\"title\">רשימת מוצרים</div>\n  </div>\n\n  <div class=\"torless-page__list\" *ngIf=\"products?.length > 0\" dnd-sortable-container [sortableData]=\"products\">\n    <div class=\"element\" *ngFor=\"let product of products; let i = index\" dnd-sortable [sortableIndex]=\"i\" (onDropSuccess)=\"productsDropped()\">\n      <div class=\"dots\">\n        <img src=\"./assets/icon/more.svg\">\n      </div>\n      <div class=\"name\" *ngIf=\"!product.edit\">\n        <span>{{ product.prod_name || 'NA' }}</span>\n      </div>\n\n      <div class=\"image\" *ngIf=\"product.prod_image && product.prod_image !== 'none'\">\n        <img app-check-image [src]=\"product.prod_image\" [image]=\"product.prod_image\">\n      </div>\n\n      <div class=\"checkboxes\">\n        <button class=\"check-element\" (click)=\"emptyProduct(product)\">\n          <img *ngIf=\"product.prod_type === -2\" src=\"./assets/icon/enabled.svg\">\n          <img *ngIf=\"product.prod_type !== -2\" src=\"./assets/icon/disabled.svg\">\n          <div>מוצר ריק</div>\n        </button>\n        <button class=\"check-element\" (click)=\"fullProduct(product)\">\n          <img *ngIf=\"product.prod_type === 1\" src=\"./assets/icon/enabled.svg\">\n          <img *ngIf=\"product.prod_type === -2\" src=\"./assets/icon/disabled.svg\">\n          <div>מוצר מלא</div>\n        </button>\n        <!--<span class=\"check-element\" [ngClass]=\"{'active': product.prod_type === -2, 'disabled': product.prod_type !== -2}\" (click)=\"emptyProduct(product)\"></span>-->\n        <!--<span class=\"check-element\" [ngClass]=\"{'active': product.prod_type === 1, 'disabled': product.prod_type === -2}\" (click)=\"fullProduct(product)\"></span>-->\n      </div>\n\n      <div class=\"buttons\">\n        <button class=\"buttons__edit\" (click)=\"editProduct(product)\">\n          <img src=\"./assets/icon/edit.svg\">\n          <div>מוצר עריכה</div>\n        </button>\n        <button class=\"buttons__remove\" (click)=\"removeProduct(product)\">\n          <img src=\"./assets/icon/trash.svg\">\n          <div>למחוק מוצר</div>\n        </button>\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"torless-page__list\" *ngIf=\"products?.length === 0\">\n    <div class=\"empty-list\" *ngIf=\"products?.length === 0\">\n      הרשימה ריקה\n    </div>\n  </div>\n\n\n  <div class=\"torless-page__footer\" *ngIf=\"products?.length > 4\">\n    <button (click)=\"goToAddProductPage()\" class=\"torless-page__add-new-element\">\n      <span class=\"plus\">+</span>\n      <span class=\"text\">הוסף מוצר</span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-list-component div > div {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.6rem; }\n\n.product-list-component .header,\n.product-list-component .footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 20px; }\n  .product-list-component .header .button,\n  .product-list-component .footer .button {\n    text-align: left;\n    width: 22rem; }\n    .product-list-component .header .button button,\n    .product-list-component .footer .button button {\n      width: 100%;\n      max-width: 275px;\n      height: 44px;\n      background: #000;\n      color: grey;\n      font-size: 1.2rem;\n      font-weight: 900; }\n      .product-list-component .header .button button:active,\n      .product-list-component .footer .button button:active {\n        background: #1a1919; }\n  .product-list-component .header .title,\n  .product-list-component .footer .title {\n    font-weight: 900;\n    text-align: right;\n    -ms-flex-item-align: end;\n        align-self: flex-end;\n    font-size: 1.9rem;\n    font-family: sans-serif; }\n\n.product-list-component .button.back-button {\n  text-align: right;\n  margin-bottom: 1.7rem; }\n  .product-list-component .button.back-button button {\n    width: 100%;\n    max-width: 275px;\n    height: 44px;\n    background: #fff557;\n    color: grey;\n    font-size: 1.3rem;\n    font-weight: 900; }\n    .product-list-component .button.back-button button:active, .product-list-component .button.back-button button:hover {\n      background: #c2ba37; }\n\n.product-list-component .torless-page__list .element .image {\n  margin: 0;\n  margin-right: 30px;\n  height: 60px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n  .product-list-component .torless-page__list .element .image img {\n    height: 100%; }\n\n.product-list-component .torless-page__list .element .checkboxes {\n  margin: 0;\n  margin-right: auto; }\n  .product-list-component .torless-page__list .element .checkboxes .check-element {\n    margin-right: 25px;\n    padding: 0;\n    background: inherit;\n    cursor: pointer;\n    color: grey; }\n    .product-list-component .torless-page__list .element .checkboxes .check-element img {\n      width: 25px;\n      height: 25px; }\n    .product-list-component .torless-page__list .element .checkboxes .check-element div {\n      width: 32px;\n      text-align: center;\n      font-size: 14px; }\n\n.product-list-component .torless-page__list .element .buttons {\n  text-align: left;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  margin-right: 0;\n  width: 260px; }\n  .product-list-component .torless-page__list .element .buttons__edit, .product-list-component .torless-page__list .element .buttons__remove {\n    color: grey;\n    cursor: pointer;\n    background: inherit; }\n    .product-list-component .torless-page__list .element .buttons__edit img, .product-list-component .torless-page__list .element .buttons__remove img {\n      width: 25px;\n      height: 25px; }\n    .product-list-component .torless-page__list .element .buttons__edit div, .product-list-component .torless-page__list .element .buttons__remove div {\n      width: 32px;\n      text-align: center;\n      font-size: 14px; }\n\n.product-list-component .torless-page__list .empty-list {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.6rem;\n  color: grey;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListComponent = (function () {
    function ProductListComponent(productService, cafeteriaService, eventService, activatedRoute, router) {
        this.productService = productService;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this._categoryId = +param.catId;
            _this._getProducts();
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
        });
    };
    ProductListComponent.prototype.goToAddProductPage = function () {
        this.router.navigate(['add-product', this._cafeteriaId, this._categoryId]);
    };
    ProductListComponent.prototype.removeProduct = function (product) {
        var _this = this;
        this.productService.deleteProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products.splice(index, 1);
        });
    };
    ProductListComponent.prototype.emptyProduct = function (product) {
        var _this = this;
        this.productService.emptyProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products[index].prod_type = -2;
        });
    };
    ProductListComponent.prototype.fullProduct = function (product) {
        var _this = this;
        this.productService.fullProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products[index].prod_type = 1;
        });
    };
    ProductListComponent.prototype.editProduct = function (product) {
        if (product.prod_id) {
            this.router.navigate(['edit-product', this._cafeteriaId, this._categoryId, product.prod_id]);
        }
    };
    ProductListComponent.prototype.goToCategoriesList = function () {
        this.router.navigate(['categories-list', this._cafeteriaId]);
    };
    ProductListComponent.prototype.goToCafeteriasList = function () {
        this.router.navigate(['welcome-page']);
    };
    ProductListComponent.prototype.goToRemovedProductList = function () {
        this.router.navigate(['removed-products', this._cafeteriaId, this._categoryId]);
    };
    ProductListComponent.prototype.productsDropped = function () {
        var orderedProducts = [];
        this.products.forEach(function (item, i) {
            orderedProducts.push({
                prod_id: item.prod_id,
                position: i + 1
            });
        });
        console.log('orderedProducts', orderedProducts);
        this.productService.orderProducts(orderedProducts).then(function (response) {
            console.log('response => ', response);
        }, function (error) {
            console.log('error', error);
        });
    };
    ////
    ProductListComponent.prototype._getProducts = function () {
        var _this = this;
        this.productService.getProductsForCategory(this._cafeteriaId, this._categoryId).then(function (response) {
            _this.products = response.data.products;
            console.log('this.products', _this.products);
        }, function (error) {
            console.log('error ==> ', error);
        });
    };
    ProductListComponent.prototype._copy = function (obj) {
        var result = {};
        for (var key in obj) {
            result[key] = obj[key];
        }
        return result;
    };
    ProductListComponent.prototype._findIndex = function (array, callback) {
        var i = 0, len = (array && array.length) ? array.length : 0, result;
        for (; i < len; i++) {
            if (callback(array[i])) {
                result = i;
                break;
            }
        }
        return result;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/pages/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/product-list/product-list.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ProductListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/product-list/product-list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_routing_module__ = __webpack_require__("../../../../../src/app/pages/product-list/product-list-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_list_component__ = __webpack_require__("../../../../../src/app/pages/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductListModule = (function () {
    function ProductListModule() {
    }
    return ProductListModule;
}());
ProductListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__product_list_routing_module__["a" /* ProductListRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__product_list_component__["a" /* ProductListComponent */]
        ]
    })
], ProductListModule);

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// COMPONENT

var routes = [
    { path: 'registration', component: __WEBPACK_IMPORTED_MODULE_3__register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["a" /* LoggedInGuardService */]] }
];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    return RegisterRoutingModule;
}());
RegisterRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], RegisterRoutingModule);

//# sourceMappingURL=register-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"registration-component\">\n  <div class=\"registration-header\">\n    <div class=\"label\">הרשמה</div>\n    <div class=\"description\">תהליך הקמה חד פעמי ומתחילים להרוויח</div>\n  </div>\n\n  <div class=\"registration-content\">\n    <div class=\"create-connection\">\n\n      <div class=\"notice\">\n        <div class=\"bold\">תהליך ההרשמה לתורלס הוא</div>\n        <div class=\"bold\">.חד פעמי</div>\n        <div class=\"normal\">בעתיד, תוכלו לבצע עידכונים ושינויים בכל הבחירות שבצעתם</div>\n      </div>\n      <div class=\"link\" (click)=\"contactUsModal()\">\n        לעזרה - צרו קשר\n      </div>\n    </div>\n\n    <div class=\"registration-block\">\n      <div class=\"business-details\">\n        <div class=\"label\">\n          פרטי העסק\n        </div>\n        <div class=\"upload__image__container\">\n          <input type=\"file\" (change)=\"openFileUploader(fileUploader)\" accept=\"image/jpeg,image/png,image/jpg\" data-max-size=\"1024\" #fileUploader>\n          <div class=\"upload__image__text\">\n            <div>\n              הלוגו יופיע בכל פרסומי הקפיטריה, <br>\n              על כן, אנחנו ממליצים לצרף קובץ איכותי<br>\n            </div>\n            <div>\n              מידת              הלוגו         <span style=\"display: inline-block; margin-right: 5px;\">150X150</span>     פיקסלים<br>\n              בפורמט  <span style=\"display: inline-block; margin-right: 5px;\">JPG / PNG</span>\n            </div>\n\n            <div class=\"upload__image__text__links\" *ngIf=\"uploadedImage\">\n              <div (click)=\"fileUploader.click()\">שנה תמונה</div>\n              <div (click)=\"deleteImage()\">למחוק תמונה</div>\n            </div>\n          </div>\n\n\n          <div class=\"upload__image__btn\">\n            <div class=\"upload__image__btn__inner\" *ngIf=\"!uploadedImage\" (click)=\"fileUploader.click()\">\n              <div class=\"upload__image__btn__text\">הוסיפו את לוגו הרשת</div>\n            </div>\n            <img [src]=\"uploadedImage\" *ngIf=\"uploadedImage\">\n          </div>\n\n        </div>\n\n        <div class=\"input-line required\">\n          <!--<span>company name</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.company.comapny_name\" [placeholderMessage]=\"'שם חברה'\" [error]=\"registrationError\" >\n        </div>\n        <div class=\"input-line required\">\n         <!--<span> VAT number</span>-->\n          <input dir=\"rtl\" type=\"number\" appInput [(ngModel)]=\"createdUser.company.comapny_vat_number\" [placeholderMessage]=\"'מס’ ח”פ'\" [message]=\"'ח”פ לא תקין'\" [error]=\"registrationError\">\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>address</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.company.comapny_address\" [placeholderMessage]=\"'כתובת'\" [error]=\"registrationError\">\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>city</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.company.comapny_city\" [placeholderMessage]=\"'עיר'\" [error]=\"registrationError\">\n        </div>\n        <!--<div class=\"input-line\">-->\n          <!--&lt;!&ndash;<span>post code</span>&ndash;&gt;-->\n          <!--<input type=\"text\" appInput [(ngModel)]=\"createdUser.company.comapny_zip_code\" [placeholderMessage]=\"'מיקוד'\" [error]=\"registrationError\">-->\n        <!--</div>-->\n      </div>\n\n      <div class=\"chief-account-details\">\n        <div class=\"label\">\n        <div class=\"information-container\">\n          <app-information [hintText]=\"'בתורלס. פרטיו של המנהל הראשי מוזנים פה. הפרטים ניתנים לשינוי בכל עת. בנוסף, לכל סניף שתפתחו במערכת, יהיה מנהל משלו ופרטיו מוזנים בעת פתיחת הסניף.'\" hintPosition=\"top center\" elementVerticalPosition=\"top\" elementHorizontalPosition=\"left\" iconColor=\"#ff5b57\"></app-information>\n        </div>\n          פרטי מנהל/ת החשבון הראשי\n        </div>\n\n        <div class=\"input-line required\">\n          <!--<span>first name</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.user.us_name\" [placeholderMessage]=\"'שם פרטי'\" [error]=\"registrationError\" >\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>last name</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.user.us_last_name\" [placeholderMessage]=\"'שם משפחה'\" [error]=\"registrationError\">\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>id number</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.user.us_passport_id\" [placeholderMessage]=\"'מס’ תעודת זהות'\" [error]=\"registrationError\">\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>role</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.user.us_position\" [placeholderMessage]=\"'תפקיד'\" [error]=\"registrationError\" >\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>email</span>-->\n          <input type=\"email\" appInput [(ngModel)]=\"createdUser.user.us_email\" (blur)=\"checkEmail(createdUser.user.us_email)\" [placeholderMessage]=\"'אימייל'\" [error]=\"formErrors.emailField\" [message]=\"formErrorMessages.email\" >\n        </div>\n        <div class=\"input-line required\">\n          <!--<span>phone</span>-->\n          <input type=\"text\" appInput [(ngModel)]=\"createdUser.user.us_phone\" (keyup)=\"createdUser.user.us_phone = phoneFormatter(createdUser.user.us_phone)\" [placeholderMessage]=\"'מספר טלפון נייד'\" [error]=\"registrationError\" >\n        </div>\n      </div>\n\n      <div class=\"securing\">\n        <div class=\"label\">\n          אבטחה\n        </div>\n\n        <div class=\"input-line required\">\n          <!--<span>password</span>-->\n          <input type=\"password\" appInput [(ngModel)]=\"createdUser.user.us_pass\" [placeholderMessage]=\"'סיסמה'\" (blur)=\"checkPassword(createdUser.user.us_pass, 'passwordField')\" [error]=\"formErrors.passwordField\" [message]=\"formErrorMessages.password\" >\n        </div>\n\n        <div class=\"input-line required\">\n          <!--username-->\n          <input type=\"password\" appInput [(ngModel)]=\"confirmedPassword\" [placeholderMessage]=\"'הקלידו ססמה מחדש'\" (blur)=\"checkPassword(confirmedPassword, 'confirmPasswordField')\" [error]=\"formErrors.confirmPasswordField\" [message]=\"formErrorMessages.password\" >\n        </div>\n\n      </div>\n\n      <div class=\"submit-block\">\n        <div dir=\"rtl\" class=\"description\">\n          <span>בלחיצה, אני מסכים/ה</span>\n          <span (click)=\"termsAndConditions()\" class=\"link\">לתנאי השימוש</span>\n          <span (click)=\"termsAndConditions()\" class=\"link\">ולתקנון</span>\n          <span>תורלס</span>\n\n        </div>\n        <div class=\"submit-button-container\">\n          <button (click)=\"registerUser(createdUser)\" [disabled]=\"isButtonDisabled(createdUser.user)\">הרשמו</button>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".registration-component {\n  padding-right: 0rem;\n  /*8f8f8f*/ }\n  .registration-component .upload__image__container {\n    margin-top: -1.5rem;\n    text-align: right; }\n    .registration-component .upload__image__container input[type=\"file\"] {\n      width: 0;\n      height: 0;\n      opacity: 0; }\n  .registration-component .upload__image__btn__text {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n    margin-top: 1rem; }\n    .registration-component .upload__image__btn__text:before {\n      content: \"+\\A\" attr(title);\n      white-space: pre;\n      color: #fff557;\n      font-weight: bolder;\n      font-size: 4rem; }\n  .registration-component .upload__image__corss__container {\n    position: relative;\n    width: 1.3rem;\n    height: 0.5rem;\n    background: #fff557;\n    margin: 0 auto;\n    margin-top: 3.9rem; }\n    .registration-component .upload__image__corss__container:after {\n      content: '';\n      background: #fff557;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 50%;\n      -webkit-transform: translateX(-50%) rotate(90deg);\n              transform: translateX(-50%) rotate(90deg); }\n  .registration-component .upload__image__text {\n    vertical-align: top;\n    display: inline-block;\n    padding-right: 1rem;\n    box-sizing: border-box;\n    direction: rtl;\n    font-size: 1rem;\n    font-family: sans-serif;\n    letter-spacing: -0.1rem;\n    line-height: 1.3;\n    color: #9a9a9a;\n    font-weight: normal; }\n    .registration-component .upload__image__text div:not(:nth-last-child(1)) {\n      margin-top: 0;\n      margin-bottom: 0.4rem; }\n    .registration-component .upload__image__text__links {\n      text-decoration: underline;\n      cursor: pointer; }\n  .registration-component .upload__image__btn {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background: #000;\n    color: #8f8f8f; }\n  .registration-component .upload__image__btn {\n    vertical-align: top;\n    display: inline-block;\n    width: 150px;\n    height: 150px;\n    margin-bottom: 4.5rem; }\n    .registration-component .upload__image__btn__inner {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n    .registration-component .upload__image__btn img {\n      width: 100%;\n      height: 100%; }\n  .registration-component .input-line {\n    width: 80%; }\n    .registration-component .input-line input {\n      width: 100%;\n      font-size: 1.1rem;\n      height: 2.7rem;\n      background: inherit;\n      font-weight: 500;\n      color: #999999; }\n  .registration-component .registration-block .label {\n    margin-top: 2.8rem;\n    margin-bottom: 2.4rem;\n    position: relative; }\n  .registration-component .information-container {\n    display: inline-block;\n    margin: 0 10px; }\n  .registration-component .registration-header {\n    text-align: right;\n    margin-bottom: 20px; }\n    .registration-component .registration-header .label {\n      font-size: 2.3rem;\n      margin-right: 0.6rem;\n      margin-top: -0.8rem;\n      font-weight: 800; }\n    .registration-component .registration-header .description {\n      font-size: 1.5rem;\n      font-weight: 500; }\n  .registration-component .registration-content {\n    /*margin-top: 2.3rem;*/\n    margin-top: 0;\n    position: relative; }\n    .registration-component .registration-content .create-connection {\n      max-width: none;\n      min-width: 0;\n      width: 24.5%;\n      position: relative;\n      margin: 0;\n      display: inline-block;\n      vertical-align: top; }\n      .registration-component .registration-content .create-connection .notice {\n        text-align: right;\n        background: #ffffff;\n        padding: 0.7rem 1.5rem;\n        border: 4px solid #fff557;\n        margin-bottom: 0rem;\n        margin-top: 1.1rem; }\n        .registration-component .registration-content .create-connection .notice .bold {\n          font-weight: 900;\n          font-size: 1.4rem;\n          line-height: 1;\n          font-family: sans-serif;\n          letter-spacing: -0.06rem; }\n        .registration-component .registration-content .create-connection .notice .normal {\n          color: #8f8f8f;\n          font-size: 1.2rem;\n          margin-top: 0.4rem;\n          margin-bottom: 1rem; }\n      .registration-component .registration-content .create-connection .link {\n        font-weight: 600;\n        margin-top: 1.5rem;\n        text-align: center;\n        text-decoration: underline;\n        cursor: pointer;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        font-size: 1.3rem; }\n    .registration-component .registration-content .registration-block {\n      padding: 0;\n      /*margin-top: 1.1rem;*/\n      margin-top: 0;\n      float: right;\n      display: inline-block;\n      vertical-align: top;\n      text-align: right;\n      width: 26rem; }\n      .registration-component .registration-content .registration-block .label {\n        font-size: 1.4rem;\n        font-weight: 100;\n        /*margin-bottom: 15.6rem;*/ }\n      .registration-component .registration-content .registration-block .business-details,\n      .registration-component .registration-content .registration-block .chief-account-details,\n      .registration-component .registration-content .registration-block .securing,\n      .registration-component .registration-content .registration-block .submit-block {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-bottom: 0; }\n      .registration-component .registration-content .registration-block .submit-block .description,\n      .registration-component .registration-content .registration-block .submit-block .submit-button-container {\n        width: 85%;\n        -ms-flex-item-align: end;\n            align-self: flex-end; }\n      .registration-component .registration-content .registration-block .submit-block .link {\n        text-decoration: underline;\n        cursor: pointer; }\n      .registration-component .registration-content .registration-block .submit-block .description {\n        font-size: 0.95rem;\n        width: 100%;\n        margin-top: 1.6rem; }\n      .registration-component .registration-content .registration-block .submit-block .submit-button-container button {\n        width: 100%;\n        height: 44px;\n        background: #fff557;\n        font-size: 0.9rem;\n        font-weight: 900;\n        font-size: 1.5rem;\n        width: 100%;\n        margin-top: 1rem;\n        height: 3.3rem;\n        margin-bottom: 10rem; }\n        .registration-component .registration-content .registration-block .submit-block .submit-button-container button:active, .registration-component .registration-content .registration-block .submit-block .submit-button-container button:hover {\n          background: #c2ba37; }\n      .registration-component .registration-content .registration-block .submit-block .submit-button-container button[disabled] {\n        background: #fff88a;\n        cursor: not-allowed; }\n        .registration-component .registration-content .registration-block .submit-block .submit-button-container button[disabled]:active, .registration-component .registration-content .registration-block .submit-block .submit-button-container button[disabled]:hover {\n          background: #c2ba37; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_classes__ = __webpack_require__("../../../../../src/app/custom-classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modals_contact_us_modal_contact_us_modal_component__ = __webpack_require__("../../../../../src/app/modals/contact-us-modal/contact-us-modal.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(userService, modalService, router, platformLocation) {
        this.userService = userService;
        this.modalService = modalService;
        this.router = router;
        this.platformLocation = platformLocation;
        this.createdUser = new __WEBPACK_IMPORTED_MODULE_4__custom_classes__["j" /* CreatedUser */]();
        this.registrationError = false;
        this.confirmedPassword = '';
        this.confirmPasswordError = false;
        this.formErrors = {
            emailField: false,
            passwordField: false,
            confirmPasswordField: false
        };
        this.formErrorMessages = {
            email: '',
            password: ''
        };
        this._errors = {
            invalidEmail: 'דוא"ל שנכתב שגוי',
            emailAlreadyExist: 'הדוא"ל כבר בשימוש',
            invalidPassword: 'חייב להכיל לפחות 6 סמלים'
        };
        this._emailRegExp = /(.+)@(.+){2,}\.(.+){2,}/;
        console.log('platformLocation.getBaseHrefFromDOM()', platformLocation.getBaseHrefFromDOM());
        // console.log(platformLocation.location.href);
        // console.log(platformLocation.location.origin);
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.registerUser = function (createdUser) {
        var _this = this;
        console.log('createdUser', createdUser);
        console.log('this.uploadedFile', this.uploadedFile);
        this.checkEmail(createdUser.user.us_email || '').then(function () {
            _this.userService.registration(createdUser).then(function (response) {
                _this.registrationError = false;
                console.log('response ===> ', response);
                console.log('response', response.data.token);
                if (_this.uploadedFile) {
                    _this.userService.saveCompanyImage(_this.uploadedFile, response.data.token).then(function (imgResponse) {
                        _this._goTo('/welcome-page');
                    }, function (error) {
                        console.log('error ===> ', error);
                    });
                }
                else {
                    console.log('go to cafeteria type');
                }
                _this._goTo('/welcome-page');
                console.log('todo: save new image');
            }, function (error) {
                _this.registrationError = true;
            });
        }, function () {
            console.log('email already exist, or has incorrect format.');
        });
    };
    RegisterComponent.prototype.contactUsModal = function () {
        this.modalService.create(__WEBPACK_IMPORTED_MODULE_5__modals_contact_us_modal_contact_us_modal_component__["a" /* ContactUsModalComponent */], null, 'middle').then(function () {
            console.log("sumbit CB");
        }, function () {
            console.log("error CB");
        });
    };
    RegisterComponent.prototype.checkEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (email) {
                if (_this._emailRegExp.test(email)) {
                    _this.userService.checkUserEmail(email).then(function (data) {
                        resolve();
                        _this.formErrors.emailField = false;
                    }, function (error) {
                        reject();
                        _this.formErrors.emailField = true;
                        _this.formErrorMessages.email = _this._errors.emailAlreadyExist;
                    });
                }
                else {
                    reject();
                    _this.formErrors.emailField = true;
                    _this.formErrorMessages.email = _this._errors.invalidEmail;
                }
            }
            else {
                reject();
            }
        });
    };
    RegisterComponent.prototype.checkPassword = function (password, type) {
        if (password) {
            if (password.length >= 6) {
                this.formErrors[type] = false;
            }
            else {
                this.formErrors[type] = true;
                this.formErrorMessages.password = this._errors.invalidPassword;
            }
        }
    };
    // public isButtonDisabled(user): boolean {
    //   let result: boolean = (this.confirmedPassword !== user.us_pass);
    //
    //   for (let key in user) {
    //     if (!user[key]) {
    //       result = true;
    //     }
    //   }
    //
    //   return result;
    // }
    RegisterComponent.prototype.isButtonDisabled = function (user) {
        var disable = false;
        for (var key in user) {
            if (!user[key] || String(user[key]).length < 2) {
                disable = true;
            }
        }
        if (this.__hasError()) {
            disable = true;
        }
        if (!user.us_pass || !this.confirmedPassword || (this.confirmedPassword !== user.us_pass)) {
            disable = true;
        }
        return disable;
    };
    RegisterComponent.prototype.termsAndConditions = function () {
        window.open(this.platformLocation.getBaseHrefFromDOM() + 'terms-and-conditions', '_blank');
    };
    RegisterComponent.prototype.openFileUploader = function (fileUploader) {
        var _this = this;
        if (fileUploader.files && fileUploader.files[0]) {
            var files = fileUploader.files;
            var file_1 = files[0];
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file_1);
            reader_1.onload = (function () {
                _this.uploadedFile = file_1;
                _this.uploadedImage = reader_1.result;
                // let token = localStorage.getItem('torless_token') ? localStorage.getItem('torless_token') : null;
                // this.userService.saveCompanyImage(this.uploadedFile, token).then((response) => {
                //   console.log('response ===> ', response);
                // }, (error) => {
                //   console.log('error ===> ', error);
                // });
                // image size check 150x150
                // const img: HTMLImageElement = new Image();
                // img.src = reader.result;
                // img.onload = () => {
                //   if (img.width <= 150 && img.height <= 150) {
                //     // prev.src = this.src;
                //     this.uploadedImage = img.src;
                //   } else {
                //     console.log('ERROR');
                //   }
                // };
            }).bind(this);
            reader_1.onerror = (function (error) {
                console.log('Error: ', error);
            });
        }
    };
    RegisterComponent.prototype.deleteImage = function () {
        this.uploadedImage = null;
        this.uploadedFile = null;
    };
    RegisterComponent.prototype.phoneFormatter = function (t) {
        var numbers = t ? t.replace(/\D/g, '') : '', dashes = {
            3: '-'
        }, len = (numbers.length <= 10) ? numbers.length : 10;
        var result = '';
        for (var i = 0; i < len; i++) {
            result += (dashes[i] || '') + numbers[i];
        }
        return result;
    };
    /////
    RegisterComponent.prototype._goTo = function (url, params) {
        this.router.navigateByUrl(url, params);
    };
    RegisterComponent.prototype.__hasError = function () {
        var result = false;
        for (var key in this.formErrors) {
            if (this.formErrors[key]) {
                result = true;
            }
        }
        return result;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/pages/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["f" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services__["i" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services__["i" /* ModalService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* PlatformLocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* PlatformLocation */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_routing_module__ = __webpack_require__("../../../../../src/app/pages/register/register-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__register_routing_module__["a" /* RegisterRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__register_component__["a" /* RegisterComponent */]
        ]
    })
], RegisterModule);

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/removed-products/removed-products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__removed_products_component__ = __webpack_require__("../../../../../src/app/pages/removed-products/removed-products.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovedProductsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// COMPONENT

var routes = [
    {
        path: 'removed-products/:cafId/:catId',
        component: __WEBPACK_IMPORTED_MODULE_3__removed_products_component__["a" /* RemovedProductsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_2__services__["j" /* TmpTimerService */]]
    }
];
var RemovedProductsRoutingModule = (function () {
    function RemovedProductsRoutingModule() {
    }
    return RemovedProductsRoutingModule;
}());
RemovedProductsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], RemovedProductsRoutingModule);

//# sourceMappingURL=removed-products-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/removed-products/removed-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"removed-product-list-component\">\n  <div class=\"button back-button\">\n    <button (click)=\"goToCategoriesList()\">חזרה לתפריט</button>\n  </div>\n\n  <div class=\"torless-page__header\">\n    <div class=\"title\">רשימת מוצרים שהוסרו</div>\n  </div>\n\n  <div class=\"close hairline\">\n\n  </div>\n\n  <div class=\"torless-page__list\">\n    <div class=\"element\" *ngFor=\"let product of products;\">\n\n      <div class=\"dots\">\n        <img src=\"./assets/icon/more.svg\">\n      </div>\n\n      <div class=\"name\" *ngIf=\"!product.edit\">\n        <span>{{ product.prod_name || 'NA' }}</span>\n      </div>\n\n      <div class=\"image\" *ngIf=\"product.prod_image && product.prod_image !== 'none'\">\n        <img [src]=\"product.prod_image\">\n      </div>\n\n      <!--<div class=\"checkboxes\">-->\n        <!--<button class=\"check-element\" (click)=\"emptyProduct(product)\">-->\n          <!--<img *ngIf=\"product.prod_type === -2\" src=\"./assets/icon/enabled.svg\">-->\n          <!--<img *ngIf=\"product.prod_type !== -2\" src=\"./assets/icon/disabled.svg\">-->\n          <!--<div>מוצר ריק</div>-->\n        <!--</button>-->\n        <!--<button class=\"check-element\" (click)=\"fullProduct(product)\">-->\n          <!--<img *ngIf=\"product.prod_type === 1\" src=\"./assets/icon/enabled.svg\">-->\n          <!--<img *ngIf=\"product.prod_type === -2\" src=\"./assets/icon/disabled.svg\">-->\n          <!--<div>מוצר מלא</div>-->\n        <!--</button>-->\n      <!--</div>-->\n\n      <div class=\"buttons\">\n        <button class=\"buttons__edit\" (click)=\"editProduct(product)\">\n          <img src=\"./assets/icon/edit.svg\">\n          <div>מוצר עריכה</div>\n        </button>\n        <button class=\"buttons__remove\" (click)=\"restoreProduct(product)\">\n          <img src=\"./assets/icon/trash.svg\">\n          <div>שחזור המוצר</div>\n        </button>\n      </div>\n    </div>\n    <div class=\"empty-list\" *ngIf=\"products?.length === 0\">\n      הרשימה ריקה\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/removed-products/removed-products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".removed-product-list-component div > div {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.6rem; }\n\n.removed-product-list-component .button.back-button {\n  text-align: right;\n  margin-bottom: 1.7rem; }\n  .removed-product-list-component .button.back-button button {\n    width: 100%;\n    max-width: 275px;\n    height: 44px;\n    background: #fff557;\n    color: grey;\n    font-size: 1.3rem;\n    font-weight: 900; }\n    .removed-product-list-component .button.back-button button:active, .removed-product-list-component .button.back-button button:hover {\n      background: #c2ba37; }\n\n.removed-product-list-component .torless-page__header {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.removed-product-list-component .torless-page__list .element .dots img {\n  opacity: 0; }\n\n.removed-product-list-component .torless-page__list .element .image {\n  margin: 0;\n  margin-right: 30px;\n  height: 60px;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n  .removed-product-list-component .torless-page__list .element .image img {\n    height: 100%; }\n\n.removed-product-list-component .torless-page__list .element .buttons {\n  margin: 0 auto 0 0; }\n  .removed-product-list-component .torless-page__list .element .buttons__remove {\n    position: relative; }\n    .removed-product-list-component .torless-page__list .element .buttons__remove::before, .removed-product-list-component .torless-page__list .element .buttons__remove::after {\n      content: '';\n      position: absolute;\n      height: 2px;\n      width: 100%;\n      top: 15px;\n      left: 0;\n      margin-top: -1px;\n      background: grey; }\n    .removed-product-list-component .torless-page__list .element .buttons__remove::before {\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg); }\n    .removed-product-list-component .torless-page__list .element .buttons__remove::after {\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n\n.removed-product-list-component .torless-page__list .empty-list {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.6rem;\n  color: grey;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/removed-products/removed-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovedProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemovedProductsComponent = (function () {
    function RemovedProductsComponent(productService, activatedRoute, cafeteriaService, eventService, router) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.cafeteriaService = cafeteriaService;
        this.eventService = eventService;
        this.router = router;
    }
    RemovedProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (param) {
            _this._cafeteriaId = +param.cafId;
            _this._categoryId = +param.catId;
            _this.cafeteriaService.getCafeteriaById(_this._cafeteriaId).then(function (response) {
                _this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
            });
            console.log('this._cafeteriaId', _this._cafeteriaId);
            console.log('this._categoryId', _this._categoryId);
            _this._getProducts();
        });
    };
    RemovedProductsComponent.prototype.goToAddProductPage = function () {
        this.router.navigate(['add-product', this._cafeteriaId, this._categoryId]);
    };
    RemovedProductsComponent.prototype.setEditMode = function (product) {
        this.productBuffer = this._copy(product);
        this.products.forEach(function (item) {
            item.edit = (item.prod_id === product.prod_id);
        });
    };
    RemovedProductsComponent.prototype.saveProduct = function () {
        var _this = this;
        if (this.productBuffer && this.productBuffer.prod_name) {
            var index = this._findIndex(this.products, function (item) { return item.prod_id === _this.productBuffer.prod_id; });
            this.products[index] = this.productBuffer;
            this.productBuffer = null;
        }
    };
    RemovedProductsComponent.prototype.removeProduct = function (product) {
        var _this = this;
        this.productService.deleteProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products.splice(index, 1);
        });
    };
    RemovedProductsComponent.prototype.emptyProduct = function (product) {
        var _this = this;
        this.productService.emptyProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products[index].prod_type = -2;
        });
    };
    RemovedProductsComponent.prototype.fullProduct = function (product) {
        var _this = this;
        this.productService.fullProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            _this.products[index].prod_type = 1;
        });
    };
    RemovedProductsComponent.prototype.editProduct = function (product) {
        if (product.prod_id) {
            this.router.navigate(['edit-product', this._cafeteriaId, this._categoryId, product.prod_id]);
        }
    };
    RemovedProductsComponent.prototype.goToCategoriesList = function () {
        this.router.navigate(['categories-list', this._cafeteriaId]);
    };
    RemovedProductsComponent.prototype.goToCafeteriasList = function () {
        this.router.navigate(['welcome-page']);
    };
    RemovedProductsComponent.prototype.goToRemovedProductList = function () {
        this.router.navigate(['removed-products', this._cafeteriaId, this._categoryId]);
    };
    RemovedProductsComponent.prototype.restoreProduct = function (product) {
        var _this = this;
        console.log('product', product);
        this.productService.fullProduct(product.prod_id).then(function (response) {
            var index = _this._findIndex(_this.products, function (item) { return item.prod_id === product.prod_id; });
            console.log('index', index);
            _this.products.splice(index, 1);
        });
    };
    ////
    RemovedProductsComponent.prototype._getProducts = function () {
        var _this = this;
        this.productService.getRemovedProducts(this._cafeteriaId).then(function (response) {
            console.log('response', response);
            _this.products = response.data;
        }, function (error) {
            console.log('error ==> ', error);
        });
    };
    RemovedProductsComponent.prototype._goTo = function (url) {
        this.router.navigateByUrl(url);
    };
    RemovedProductsComponent.prototype._copy = function (obj) {
        var result = {};
        for (var key in obj) {
            result[key] = obj[key];
        }
        return result;
    };
    RemovedProductsComponent.prototype._findIndex = function (array, callback) {
        var i = 0, len = (array && array.length) ? array.length : 0, result;
        for (; i < len; i++) {
            if (callback(array[i])) {
                result = i;
                break;
            }
        }
        return result;
    };
    return RemovedProductsComponent;
}());
RemovedProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-removed-products',
        template: __webpack_require__("../../../../../src/app/pages/removed-products/removed-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/removed-products/removed-products.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["e" /* CafeteriaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["k" /* EventService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], RemovedProductsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=removed-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/removed-products/removed-products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__removed_products_component__ = __webpack_require__("../../../../../src/app/pages/removed-products/removed-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__removed_products_routing_module__ = __webpack_require__("../../../../../src/app/pages/removed-products/removed-products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovedProductsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RemovedProductsModule = (function () {
    function RemovedProductsModule() {
    }
    return RemovedProductsModule;
}());
RemovedProductsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__removed_products_routing_module__["a" /* RemovedProductsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__removed_products_component__["a" /* RemovedProductsComponent */]
        ]
    })
], RemovedProductsModule);

//# sourceMappingURL=removed-products.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sms-confirm/sms-confirm-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sms_confirm_component__ = __webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsConfirmRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENT

var routes = [
    { path: 'sms-confirm', component: __WEBPACK_IMPORTED_MODULE_2__sms_confirm_component__["a" /* SmsConfirmComponent */] }
];
var SmsConfirmRoutingModule = (function () {
    function SmsConfirmRoutingModule() {
    }
    return SmsConfirmRoutingModule;
}());
SmsConfirmRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], SmsConfirmRoutingModule);

//# sourceMappingURL=sms-confirm-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sms-confirm/sms-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sms-confirm-component\">\n\n  <div class=\"component-title component-center-element\">\n    <div class=\"title-label\">\n      הצלחת! חשבונך נפתח\n    </div>\n    <div class=\"title-description\">\n.       רק עוד משהו אחרון לפני שמתחילים לרוויח - יותר\n    </div>\n  </div>\n\n\n  <div class=\"component-content\">\n\n    <div class=\"sms-confirm-container component-center-element\">\n      <div class=\"sms-confirm-label\">\n        SMS-        הזן/י כאן את הקוד שנישלח אליך ב\n      </div>\n      <div class=\"sms-confirm-input-field component-input sms-confirm\">\n        <input dir=\"rtl\" type=\"number\" [(ngModel)]=\"smsCode\" appInput [placeholderMessage]=\"'שם משתמש'\">\n        <span class=\"success-icon\" *ngIf=\"!confirmError && confirmSuccess\">\n          <img src=\"./assets/icon/success.png\">\n        </span>\n        <span class=\"error-icon\" *ngIf=\"confirmError && !confirmSuccess\">\n          <img src=\"./assets/icon/close.png\">\n        </span>\n        <span class=\"resend-sms\">שילחו לי שוב את הקוד</span>\n      </div>\n      <div class=\"button-container component-button-container\">\n        <button (click)=\"confirm(smsCode)\" [disabled]=\"!smsCode\">התחבר/י</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/sms-confirm/sms-confirm.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sms-confirm-component .component-center-element {\n  width: 40%;\n  margin: 0 auto; }\n  @media screen and (max-width: 940px) {\n    .sms-confirm-component .component-center-element {\n      width: 100%;\n      max-width: 300px; } }\n\n.sms-confirm-component .component-button-container button {\n  width: 100%;\n  height: 44px;\n  background: #fff557;\n  font-size: 0.9rem;\n  font-weight: 900; }\n  .sms-confirm-component .component-button-container button:active, .sms-confirm-component .component-button-container button:hover {\n    background: #c2ba37; }\n\n.sms-confirm-component .component-button-container button[disabled] {\n  cursor: not-allowed; }\n\n.sms-confirm-component .component-input input {\n  width: 100%;\n  height: 34px;\n  font-size: 1.1rem;\n  font-weight: 300; }\n\n.sms-confirm-component .component-title {\n  text-align: center;\n  margin-bottom: 40px; }\n  .sms-confirm-component .component-title .title-label {\n    font-size: 1.4rem;\n    font-weight: 800; }\n  .sms-confirm-component .component-title .title-description {\n    font-size: 1.1rem; }\n\n.sms-confirm-component .sms-confirm-header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 0 20px 0; }\n  .sms-confirm-component .sms-confirm-header .info {\n    margin: 0 auto; }\n\n.sms-confirm-component .component-content {\n  position: relative; }\n  @media screen and (max-width: 940px) {\n    .sms-confirm-component .component-content {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: reverse;\n          -ms-flex-direction: column-reverse;\n              flex-direction: column-reverse; } }\n  .sms-confirm-component .component-content .register-container {\n    position: absolute;\n    width: 25%;\n    margin: 0 auto; }\n    @media screen and (max-width: 940px) {\n      .sms-confirm-component .component-content .register-container {\n        position: relative;\n        width: 100%;\n        max-width: 300px; } }\n    .sms-confirm-component .component-content .register-container .register-label {\n      text-align: center;\n      font-size: 0.9rem;\n      font-weight: 900;\n      margin-bottom: 20px; }\n  @media screen and (max-width: 940px) {\n    .sms-confirm-component .component-content .sms-confirm-container {\n      margin-bottom: 40px; } }\n  .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-label {\n    text-align: end;\n    color: #484848;\n    margin-bottom: 25px; }\n  .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field {\n    position: relative;\n    margin-bottom: 40px; }\n    .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field input {\n      background: inherit; }\n    .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field .resend-sms {\n      position: absolute;\n      right: 0;\n      bottom: -16px;\n      cursor: pointer;\n      font-size: 0.7rem;\n      border-bottom: 1px solid #656565;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n      .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field .resend-sms:hover {\n        color: #000;\n        border-bottom: 1px solid #000; }\n    .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field .success-icon,\n    .sms-confirm-component .component-content .sms-confirm-container .sms-confirm-input-field .error-icon {\n      display: inline-block;\n      position: absolute;\n      bottom: 5px;\n      left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sms-confirm/sms-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmsConfirmComponent = (function () {
    function SmsConfirmComponent(userService) {
        this.userService = userService;
        this.confirmError = false;
        this.confirmSuccess = false;
    }
    SmsConfirmComponent.prototype.ngOnInit = function () { };
    SmsConfirmComponent.prototype.confirm = function (smsCode) {
        var _this = this;
        this.userService.confirmUser(smsCode).then(function (data) {
            _this.confirmError = false;
            _this.confirmSuccess = true;
        }, function (error) {
            _this.confirmError = true;
            _this.confirmSuccess = false;
        });
    };
    return SmsConfirmComponent;
}());
SmsConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-sms-confirm',
        template: __webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services__["f" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["f" /* UserService */]) === "function" && _a || Object])
], SmsConfirmComponent);

var _a;
//# sourceMappingURL=sms-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/sms-confirm/sms-confirm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sms_confirm_routing_module__ = __webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sms_confirm_component__ = __webpack_require__("../../../../../src/app/pages/sms-confirm/sms-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmsConfirmModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SmsConfirmModule = (function () {
    function SmsConfirmModule() {
    }
    return SmsConfirmModule;
}());
SmsConfirmModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__sms_confirm_routing_module__["a" /* SmsConfirmRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__sms_confirm_component__["a" /* SmsConfirmComponent */]
        ]
    })
], SmsConfirmModule);

//# sourceMappingURL=sms-confirm.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_for_filter_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/ng-for-filter/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__ng_for_filter_filter_pipe__["a" /* FilterPipe */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__ng_for_filter_filter_pipe__["a" /* FilterPipe */]
        ]
    })
], PipesModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/ng-for-filter/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (array, option) {
        if (option && typeof option === 'object' && option.value) {
            if (!option.by) {
                return array.filter(function (item) { return item.indexOf(option.value) !== -1; });
            }
            else {
                return array.filter(function (item) { return item[option.by].indexOf(option.value) !== -1; });
            }
        }
        else {
            return array;
        }
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Pipe */])({
        name: 'filter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

var AuthGuardService = (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function () {
        var result = this.userService.isLoggedIn();
        if (!result) {
            this.router.navigateByUrl('/login');
        }
        return result;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/cafeteria/cafeteria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CafeteriaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CafeteriaService = (function () {
    function CafeteriaService(http) {
        this.http = http;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
        this._imageHost = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].cafeteriaImage;
    }
    CafeteriaService.prototype.createCafeteria = function (createdCafeteria) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'create_cafeteria', 'token': token, cafeteria: createdCafeteria.cafeteria, work_time: createdCafeteria.work_time });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CafeteriaService.prototype.getUserCafeterias = function () {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_user_cafeterias', token: token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CafeteriaService.prototype.getCafeteriaById = function (cafeteriaId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_cafeteria_by_id', token: token, g_caf_id: cafeteriaId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CafeteriaService.prototype.updateCafeteria = function (updatedCafeteria) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'update_cafeteria', token: token, cafeteria: updatedCafeteria.cafeteria, work_time: updatedCafeteria.work_time });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CafeteriaService.prototype.getInfo = function () {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_company_name', token: token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CafeteriaService.prototype.saveImage = function (file, cafeteriaId) {
        var _this = this;
        var formData = new FormData(), token = localStorage.getItem('torless_token');
        formData.append('file', file);
        formData.append('token', token);
        formData.append('cafeteria_id', '' + cafeteriaId);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._imageHost, formData)
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    /////
    CafeteriaService.prototype._setRequest = function (data) {
        var _this = this;
        var body = new URLSearchParams();
        body.set('data', data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._host, body.toString(), { headers: _this._headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    return CafeteriaService;
}());
CafeteriaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CafeteriaService);

var _a;
//# sourceMappingURL=cafeteria.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
        // this._token = WindowLocalStorage.get('torless_token');
    }
    CategoryService.prototype.createMainCategory = function (createdMainCategory) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'create_main_category', token: token, ct_caf_id: createdMainCategory.ct_caf_id, ct_name: createdMainCategory.ct_name });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CategoryService.prototype.getCategoriesForCafeteria = function (cafeteriaId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_categories_for_cafe', token: token, gc_caf_id: cafeteriaId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CategoryService.prototype.updateMainCategory = function (updatedMainCategory) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'update_main_category', token: token, upm_caf_id: updatedMainCategory.upm_caf_id, upm_cat_id: updatedMainCategory.upm_cat_id, upm_cat_name: updatedMainCategory.upm_cat_name, upm_cat_number: updatedMainCategory.upm_cat_number });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    CategoryService.prototype.setCategoryOrder = function (cafeteriaId, categories) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'set_category_order', token: token, caf_id: cafeteriaId, cats: categories });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /////
    CategoryService.prototype._setRequest = function (data) {
        var _this = this;
        var body = new URLSearchParams();
        body.set('data', data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._host, body.toString(), { headers: _this._headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/event/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventService = (function () {
    function EventService() {
        this.headerText$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    return EventService;
}());
EventService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventService);

//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_product_service__ = __webpack_require__("../../../../../src/app/services/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cafeteria_cafeteria_service__ = __webpack_require__("../../../../../src/app/services/cafeteria/cafeteria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__university_university_service__ = __webpack_require__("../../../../../src/app/services/university/university.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__time_select_time_select_service__ = __webpack_require__("../../../../../src/app/services/time-select/time-select.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modal_modal_service__ = __webpack_require__("../../../../../src/app/services/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logged_in_guard_logged_in_guard_service__ = __webpack_require__("../../../../../src/app/services/logged-in-guard/logged-in-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tmp_timer_tmp_timer_service__ = __webpack_require__("../../../../../src/app/services/tmp-timer/tmp-timer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__event_event_service__ = __webpack_require__("../../../../../src/app/services/event/event.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__product_product_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__category_category_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__cafeteria_cafeteria_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__university_university_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_guard_auth_guard_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__time_select_time_select_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__modal_modal_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__logged_in_guard_logged_in_guard_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_9__tmp_timer_tmp_timer_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__event_event_service__["a"]; });












//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/services/logged-in-guard/logged-in-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInGuardService = (function () {
    function LoggedInGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    LoggedInGuardService.prototype.canActivate = function () {
        var result = this.userService.isLoggedIn();
        if (result) {
            this.router.navigateByUrl('/welcome-page');
        }
        return true;
    };
    return LoggedInGuardService;
}());
LoggedInGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LoggedInGuardService);

var _a, _b;
//# sourceMappingURL=logged-in-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ConfirmModalComponent } from '../../modals/confirm-modal/confirm-modal.component';
// import { TimeSelectModalComponent } from '../../modals/time-select-modal/time-select-modal.component';
var ModalService = (function () {
    function ModalService(resolver) {
        this.resolver = resolver;
        this.modal$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.actions$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.closeModal$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    ModalService.prototype.create = function (component, data, cssClass) {
        var _this = this;
        if (data === void 0) { data = {}; }
        return new Promise(function (resolve, reject) {
            _this.modal$.emit({ providers: data, component: component, cssClass: cssClass });
            _this.closeModal$.subscribe(function (response) {
                _this.closeModal$.observers.length = 0;
                if (response) {
                    resolve(response);
                }
                else {
                    reject();
                }
            });
        });
    };
    ModalService.prototype.close = function () {
    };
    return ModalService;
}());
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ComponentFactoryResolver */]) === "function" && _a || Object])
], ModalService);

var _a;
//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
        this._imageHost = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].productImage;
    }
    ProductService.prototype.createMainProduct = function (createdProduct) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'create_main_product', token: token, pr_caf_id: createdProduct.pr_caf_id, pr_cat_id: createdProduct.pr_cat_id, product: createdProduct.product, extra_categories: createdProduct.extra_categories });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.getProductsForCategory = function (cafeteriaId, categoryId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_products_for_category', token: token, gcp_caf_id: cafeteriaId, gcp_cat_id: categoryId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.getMainProduct = function (productId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_product_by_id', token: token, prod_id: productId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.deleteProduct = function (productId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'delete_product', token: token, prod_id: productId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.emptyProduct = function (productId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'empty_product', token: token, prod_id: productId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.fullProduct = function (productId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'full_product', token: token, prod_id: productId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.updateProduct = function (updatedProduct, cafeteriaId, categoryId, productId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'update_main_product', token: token, pr_caf_id: cafeteriaId, pr_cat_id: categoryId, pr_prod_id: productId, product: updatedProduct.product, extra_categories: updatedProduct.extra_categories });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.getRemovedProducts = function (cafeteriaId) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ 'tag': 'get_deleted_products', 'token': _token, 'caf_id': cafeteriaId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.restoreProduct = function () {
        console.log('restore product');
        // const _token: string = localStorage.getItem('torless_token');
        // const data: string = JSON.stringify({'tag': 'get_deleted_products', 'token': _token, 'caf_id': cafeteriaId});
        //
        // return new Promise((resolve, reject) => {
        //   this._setRequest(data).then((response) => {
        //     resolve(response);
        //   }, (error) => {
        //     reject(error);
        //   });
        // });
    };
    ProductService.prototype.saveImage = function (file, productId) {
        var _this = this;
        var formData = new FormData(), token = localStorage.getItem('torless_token');
        formData.append('file', file);
        formData.append('token', token);
        formData.append('product_id', '' + productId);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._imageHost, formData)
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.orderProducts = function (products) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ 'tag': 'set_product_order', 'token': _token, 'prods': products });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    ProductService.prototype.getVegTypes = function () {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ 'tag': 'get_veg_types', 'token': _token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /////
    ProductService.prototype._setRequest = function (data) {
        var _this = this;
        var body = new URLSearchParams();
        body.set('data', data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._host, body.toString(), { headers: _this._headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/time-select/time-select.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSelectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimeSelectService = (function () {
    function TimeSelectService() {
        this.timeSelectModal$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.timerModalListener$ = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    TimeSelectService.prototype.show = function (dayNumber, time) {
        var _this = this;
        this.timeSelectModal$.emit({ visible: true, dayNumber: dayNumber, time: time });
        return new Promise(function (resolve, reject) {
            _this.timerModalListener$.subscribe(function (data) {
                if (data.eventName === 'submit') {
                    resolve(data.workTime);
                }
                else {
                    reject();
                }
            });
        });
    };
    return TimeSelectService;
}());
TimeSelectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TimeSelectService);

//# sourceMappingURL=time-select.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/tmp-timer/tmp-timer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_service__ = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmpTimerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmpTimerService = (function () {
    function TmpTimerService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    TmpTimerService.prototype.canActivate = function () {
        var _this = this;
        var loggedTime = this.userService.loggedTime(), currentTime = new Date().getTime(), timeHoursDiff = (Math.abs(loggedTime - currentTime) / (1000 * 3600));
        if (timeHoursDiff >= 1) {
            console.log('tmp service error');
            this.userService.logout().then(function () {
                _this.router.navigateByUrl('/login');
            });
            return false;
        }
        return true;
    };
    return TmpTimerService;
}());
TmpTimerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_user_service__["a" /* UserService */]) === "function" && _b || Object])
], TmpTimerService);

var _a, _b;
//# sourceMappingURL=tmp-timer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/university/university.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniversityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UniversityService = (function () {
    function UniversityService(http) {
        this.http = http;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
    }
    UniversityService.prototype.getUniversityList = function () {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_university_list', token: token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UniversityService.prototype.getUniversitybuildings = function (universityId) {
        var _this = this;
        var token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_university_building', token: token, unv_id: universityId });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /////
    UniversityService.prototype._setRequest = function (data) {
        var _this = this;
        var body = new URLSearchParams();
        body.set('data', data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._host, body.toString(), { headers: _this._headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    return UniversityService;
}());
UniversityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UniversityService);

var _a;
//# sourceMappingURL=university.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this._headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this._host = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].host;
        this._imageHost = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].companyImage;
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var data = JSON.stringify({ 'tag': 'login', 'us_log_email': user.us_log_email, 'us_log_pass': user.us_log_pass });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                var loggedInDate = '' + new Date().getTime();
                localStorage.setItem('torless_loggedInTime', loggedInDate);
                localStorage.setItem('torless_token', response.data.token);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.registration = function (createdUser) {
        var _this = this;
        var data = JSON.stringify({ tag: 'registration', user: createdUser.user, company: createdUser.company });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                var loggedInDate = '' + new Date().getTime();
                localStorage.setItem('torless_loggedInTime', loggedInDate);
                localStorage.setItem('torless_token', response.data.token);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.isLoggedIn = function () {
        return localStorage.getItem('torless_token') ? true : false;
    };
    UserService.prototype.loggedTime = function () {
        return +localStorage.getItem('torless_loggedInTime');
    };
    UserService.prototype.isTokenValid = function () {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'is_token_live', token: _token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                _this.logout().then(function () {
                    reject(error);
                });
            });
        });
    };
    UserService.prototype.registerManagerUser = function (createdManagerUser) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'register_manager_user', token: _token, manager_user: { mn_name: createdManagerUser.mn_name, mn_last_name: createdManagerUser.mn_last_name, mn_phone: createdManagerUser.mn_phone, mn_email: createdManagerUser.mn_email, mn_pass: createdManagerUser.mn_pass } });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.confirmUser = function (userKey) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'confirm_user', token: _token, us_key: userKey });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'logout', 'token': _token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                localStorage.removeItem('torless_token');
                localStorage.removeItem('torless_loggedInTime');
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.checkUserEmail = function (email) {
        var _this = this;
        var data = JSON.stringify({ tag: 'check_email', 'ch_mail': email });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.getManagerList = function () {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_manager_list', 'token': _token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.getManagerById = function (id) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_manager_by_id', 'token': _token, 'manager_id': id });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.editManager = function (managerId, cafeteriaId, manager) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'update_manager_user', 'token': _token, 'user_id': managerId, 'caf_id': cafeteriaId, 'manager_user': manager });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.confirmEmail = function (email) {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'confirm_mail', 'token': _token, 'ch_mail': email });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.saveCompanyImage = function (file, token) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', file);
        formData.append('token', token);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._imageHost, formData)
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    UserService.prototype.getUserInfo = function () {
        var _this = this;
        var _token = localStorage.getItem('torless_token');
        var data = JSON.stringify({ tag: 'get_user_info', 'token': _token });
        return new Promise(function (resolve, reject) {
            _this._setRequest(data).then(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    /////
    UserService.prototype._setRequest = function (data) {
        var _this = this;
        var body = new URLSearchParams();
        body.set('data', data);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this._host, body.toString(), { headers: _this._headers })
                .map(function (response) { return response.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    host: 'https://api.tor-less.com/front_api_all_tags',
    companyImage: 'https://api.tor-less.com/addCompanyImageAjax',
    cafeteriaImage: 'https://api.tor-less.com/addCafeteriaImageAjax',
    productImage: 'https://api.tor-less.com/addProductImageAjax'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map