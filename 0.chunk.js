webpackJsonp([0],{

/***/ "../../../../../src/app/pages/terms-conditions/terms-conditions-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terms_conditions_component__ = __webpack_require__("../../../../../src/app/pages/terms-conditions/terms-conditions.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsRoutingModule; });
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
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__terms_conditions_component__["a" /* TermsConditionsComponent */]
    }
];
var TermsConditionsRoutingModule = (function () {
    function TermsConditionsRoutingModule() {
    }
    return TermsConditionsRoutingModule;
}());
TermsConditionsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], TermsConditionsRoutingModule);

//# sourceMappingURL=terms-conditions-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terms-conditions/terms-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"term-conditions-component\">\n\n  <div class=\"term-conditions-text\">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur ligula euismod metus malesuada sodales. Etiam lobortis laoreet est ut rutrum. Nam interdum nibh nec arcu bibendum rhoncus ut id urna. Aliquam erat volutpat. Vestibulum non lacus et nisl congue tempor. Nulla viverra pulvinar vestibulum. Morbi pulvinar faucibus purus, vehicula cursus quam fringilla sed. Sed mauris ante, dictum vitae tempor id, bibendum sed eros.\n\n    Nunc id ligula scelerisque, feugiat nibh quis, malesuada nisi. Fusce bibendum, neque id suscipit condimentum, dui augue imperdiet ex, et luctus nisi nunc feugiat quam. Suspendisse lectus velit, dictum eget metus ut, elementum vulputate lorem. Nam vehicula erat eget neque tempor bibendum. Proin sit amet massa id massa pulvinar vulputate vel ac leo. Praesent eu pulvinar velit. Nulla egestas vel nibh at efficitur. Duis suscipit mauris lectus, ac rutrum libero semper eu.\n\n    Praesent fermentum enim in lacus malesuada gravida nec eget ligula. Morbi eu purus eu diam pretium pulvinar vitae id dolor. Maecenas pulvinar maximus varius. Cras vehicula feugiat rhoncus. Ut dignissim mi et nisi ullamcorper consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam pulvinar tellus id dui facilisis, at porta neque sagittis. Maecenas non erat tellus. Nulla tellus lectus, pulvinar nec semper in, blandit eget nunc. Maecenas pellentesque urna mi, ac dignissim augue convallis ut. Ut pretium interdum iaculis. Sed et metus ultricies, rutrum quam vitae, aliquet ipsum.\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/terms-conditions/terms-conditions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".term-conditions-component .term-conditions-text {\n  margin-bottom: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/terms-conditions/terms-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsConditionsComponent = (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    return TermsConditionsComponent;
}());
TermsConditionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-terms-conditions',
        template: __webpack_require__("../../../../../src/app/pages/terms-conditions/terms-conditions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/terms-conditions/terms-conditions.component.scss"), __webpack_require__("../../../../../src/app/pages/pages.scss")]
    }),
    __metadata("design:paramtypes", [])
], TermsConditionsComponent);

//# sourceMappingURL=terms-conditions.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/terms-conditions/terms-conditions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_conditions_component__ = __webpack_require__("../../../../../src/app/pages/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_conditions_routing_module__ = __webpack_require__("../../../../../src/app/pages/terms-conditions/terms-conditions-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__("../../../../../src/app/components/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsModule", function() { return TermsConditionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TermsConditionsModule = (function () {
    function TermsConditionsModule() {
    }
    return TermsConditionsModule;
}());
TermsConditionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__terms_conditions_routing_module__["a" /* TermsConditionsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_5__directives__["a" /* DirectivesModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__terms_conditions_component__["a" /* TermsConditionsComponent */]
        ]
    })
], TermsConditionsModule);

//# sourceMappingURL=terms-conditions.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map