webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>Carolina Admin Panel</h1>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AppComponent = (function () {
    function AppComponent(adminAPIService, router) {
        this.adminAPIService = adminAPIService;
        this.router = router;
        this.title = 'app';
        this.checkFail = false;
        this.ready = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adminStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adminAPIService.check()];
                    case 1:
                        adminStatus = _a.sent();
                        if (adminStatus == true)
                            this.router.navigate(['/overview']);
                        else
                            this.router.navigate(['/redirect']);
                        return [2 /*return*/];
                }
            });
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__ = __webpack_require__("../../../../../src/app/lib/admin-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_card_app_card_component__ = __webpack_require__("../../../../../src/app/components/app-card/app-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_field_edit_field_edit_component__ = __webpack_require__("../../../../../src/app/components/field-edit/field-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_field_view_field_view_component__ = __webpack_require__("../../../../../src/app/components/field-view/field-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_model_create_model_create_component__ = __webpack_require__("../../../../../src/app/components/model-create/model-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_model_edit_model_edit_component__ = __webpack_require__("../../../../../src/app/components/model-edit/model-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_model_listing_model_listing_component__ = __webpack_require__("../../../../../src/app/components/model-listing/model-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_model_view_model_view_component__ = __webpack_require__("../../../../../src/app/components/model-view/model-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_overview_overview_component__ = __webpack_require__("../../../../../src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_redirect_redirect_component__ = __webpack_require__("../../../../../src/app/components/redirect/redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_waiting_waiting_component__ = __webpack_require__("../../../../../src/app/components/waiting/waiting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { component: __WEBPACK_IMPORTED_MODULE_17__components_waiting_waiting_component__["a" /* WaitingComponent */], path: '' },
    { canActivate: [__WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_11__components_model_create_model_create_component__["a" /* ModelCreateComponent */], path: 'create/:app/:model' },
    { canActivate: [__WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_12__components_model_edit_model_edit_component__["a" /* ModelEditComponent */], path: 'edit/:app/:model/:key' },
    { canActivate: [__WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_13__components_model_listing_model_listing_component__["a" /* ModelListingComponent */], path: 'model/:app/:model' },
    { canActivate: [__WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_14__components_model_view_model_view_component__["a" /* ModelViewComponent */], path: 'view/:app/:model/:key' },
    { canActivate: [__WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]], component: __WEBPACK_IMPORTED_MODULE_15__components_overview_overview_component__["a" /* OverviewComponent */], path: 'overview' },
    { component: __WEBPACK_IMPORTED_MODULE_16__components_redirect_redirect_component__["a" /* RedirectComponent */], path: 'redirect' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_app_card_app_card_component__["a" /* AppCardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_field_edit_field_edit_component__["a" /* FieldEditComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_field_view_field_view_component__["a" /* FieldViewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_model_create_model_create_component__["a" /* ModelCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_model_edit_model_edit_component__["a" /* ModelEditComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_model_listing_model_listing_component__["a" /* ModelListingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_model_view_model_view_component__["a" /* ModelViewComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_overview_overview_component__["a" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_redirect_redirect_component__["a" /* RedirectComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_waiting_waiting_component__["a" /* WaitingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__lib_admin_api_service__["a" /* AdminAPIService */],
            __WEBPACK_IMPORTED_MODULE_6__lib_admin_guard__["a" /* AdminGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/app-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppData; });
var AppData = (function () {
    function AppData() {
    }
    return AppData;
}());

;
//# sourceMappingURL=app-data.js.map

/***/ }),

/***/ "../../../../../src/app/classes/field-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldData; });
var FieldData = (function () {
    function FieldData() {
    }
    return FieldData;
}());

;
//# sourceMappingURL=field-data.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-card/app-card.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"card\">\r\n  <div class=\"card-block\">\r\n\r\n    <h4 class=\"card-title\">{{ app.name }}</h4>\r\n\r\n    <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"app.models.length==0\">\r\n      No models.\r\n    </h6>\r\n\r\n    <a class=\"card-link\"\r\n      *ngFor=\"let model of app.models\"\r\n      [routerLink]=\"['/model', app.name, model]\">\r\n      {{ model }}\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-card/app-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_app_data__ = __webpack_require__("../../../../../src/app/classes/app-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppCardComponent = (function () {
    function AppCardComponent() {
    }
    return AppCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_app_data__["a" /* AppData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_app_data__["a" /* AppData */]) === "function" && _a || Object)
], AppCardComponent.prototype, "app", void 0);
AppCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-app-card',
        template: __webpack_require__("../../../../../src/app/components/app-card/app-card.component.html"),
    }),
    __metadata("design:paramtypes", [])
], AppCardComponent);

var _a;
//# sourceMappingURL=app-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/field-edit/field-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <b>{{ fieldName }}</b>\r\n  </div>\r\n  <div class=\"col-md-9\" *ngIf=\"fieldData.attributes.hidden==true\">\r\n    <span class=\"badge badge-warning\">HIDDEN</span>\r\n  </div>\r\n  <div class=\"col-md-9\" *ngIf=\"fieldData.attributes.hidden!=true\">\r\n    <div class=\"form-group\">\r\n      <div *ngIf=\"fieldData.type=='bool'\">\r\n        <input class=\"form-control\" type=\"checkbox\" [(ngModel)]=\"fieldValue\" [disabled]=\"!fieldData.attributes.adminEdit\"/>\r\n      </div>\r\n      <div *ngIf=\"fieldData.type=='date'\">\r\n        <input class=\"form-control\" type=\"datetime-local\" [ngModel]=\"fieldValue | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"fieldValue = $event\" [disabled]=\"!fieldData.attributes.adminEdit\"  />\r\n      </div>\r\n      <div *ngIf=\"fieldData.type=='string'\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldValue\" [disabled]=\"!fieldData.attributes.adminEdit\" />\r\n      </div>\r\n      <div *ngIf=\"fieldData.type=='hash'\">\r\n        WAIT\r\n      </div>\r\n      <div *ngIf=\"fieldData.type=='list'\">\r\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldValue\" [disabled]=\"!fieldData.attributes.adminEdit\"/>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr class=\"my-4\">\r\n"

/***/ }),

/***/ "../../../../../src/app/components/field-edit/field-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_field_data__ = __webpack_require__("../../../../../src/app/classes/field-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldEditComponent = (function () {
    function FieldEditComponent() {
        this.fieldValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    return FieldEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_field_data__["a" /* FieldData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_field_data__["a" /* FieldData */]) === "function" && _a || Object)
], FieldEditComponent.prototype, "fieldData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FieldEditComponent.prototype, "fieldName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FieldEditComponent.prototype, "fieldValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], FieldEditComponent.prototype, "fieldValueChange", void 0);
FieldEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-field-edit',
        template: __webpack_require__("../../../../../src/app/components/field-edit/field-edit.component.html"),
    }),
    __metadata("design:paramtypes", [])
], FieldEditComponent);

var _a;
//# sourceMappingURL=field-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/field-view/field-view.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-md-3\">\r\n    <b>{{ fieldName }}</b>\r\n  </div>\r\n  <div class=\"col-md-9\" *ngIf=\"fieldData.attributes.hidden==true\">\r\n    <span class=\"badge badge-warning\">HIDDEN</span>\r\n  </div>\r\n  <div class=\"col-md-9\" *ngIf=\"fieldData.attributes.hidden!=true\">\r\n    <div *ngIf=\"fieldData.type=='bool'\">\r\n      <span class=\"badge badge-success\" *ngIf=\"fieldValue==true\">TRUE</span>\r\n      <span class=\"badge badge-danger\" *ngIf=\"fieldValue==false\">FALSE</span>\r\n    </div>\r\n    <div *ngIf=\"fieldData.type=='date'\">\r\n      {{ fieldValue }}\r\n    </div>\r\n    <div *ngIf=\"fieldData.type=='string'\">\r\n      {{ fieldValue }}\r\n    </div>\r\n    <div *ngIf=\"fieldData.type=='hash'\">\r\n      ({{ fieldValue }})\r\n    </div>\r\n    <div *ngIf=\"fieldData.type=='list'\">\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item\" *ngFor=\"let listItem of fieldValue\">\r\n          {{ listItem }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr class=\"my-4\">\r\n"

/***/ }),

/***/ "../../../../../src/app/components/field-view/field-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_field_data__ = __webpack_require__("../../../../../src/app/classes/field-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FieldViewComponent = (function () {
    function FieldViewComponent() {
    }
    return FieldViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_field_data__["a" /* FieldData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_field_data__["a" /* FieldData */]) === "function" && _a || Object)
], FieldViewComponent.prototype, "fieldData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FieldViewComponent.prototype, "fieldName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FieldViewComponent.prototype, "fieldValue", void 0);
FieldViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-field-view',
        template: __webpack_require__("../../../../../src/app/components/field-view/field-view.component.html"),
    }),
    __metadata("design:paramtypes", [])
], FieldViewComponent);

var _a;
//# sourceMappingURL=field-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model-create/model-create.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{ appName }}/{{ modelName }}</h2>\r\n\r\n<hr class=\"my-4\">\r\n\r\n<div *ngFor=\"let fieldObj of fieldObjects; let i = index\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <b>{{ fieldObj.name }}</b>\r\n    </div>\r\n    <div class=\"col-md-9\" *ngIf=\"fieldObj.data.attributes.hidden==true\">\r\n      <span class=\"badge badge-warning\">HIDDEN</span>\r\n    </div>\r\n    <div class=\"col-md-9\" *ngIf=\"fieldObj.data.attributes.hidden!=true\">\r\n      <div class=\"form-group\">\r\n        <div *ngIf=\"fieldObj.data.type=='bool'\">\r\n          <input class=\"form-control\" type=\"checkbox\" [(ngModel)]=\"fieldObj.value\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='date'\">\r\n          <input class=\"form-control\" type=\"datetime-local\" [ngModel]=\"fieldObj.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"fieldObj.value = $event\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='string'\">\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldObj.value\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='hash'\">\r\n          <input class=\"form-control\" type=\"password\" [(ngModel)]=\"fieldObj.value\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='list'\">\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldObj.value\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"my-4\">\r\n\r\n</div>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"create()\">Submit</button>\r\n<a class=\"btn btn-secondary\" [routerLink]=\"['/view', appName, modelName]\">Cancel</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/model-create/model-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ModelCreateComponent = (function () {
    function ModelCreateComponent(adminAPIService, route, router) {
        this.adminAPIService = adminAPIService;
        this.route = route;
        this.router = router;
        this.fieldObjects = [];
    }
    ModelCreateComponent.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var update, i, fieldName, schemaData, fieldValue, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        update = {};
                        for (i = 0; i < this.fieldObjects.length; ++i) {
                            fieldName = this.fieldObjects[i].name;
                            schemaData = this.fieldObjects[i].data;
                            fieldValue = this.fieldObjects[i].value;
                            if (schemaData.type == 'date')
                                update[fieldName] = new Date(fieldValue);
                            else if (schemaData.type == 'hash') {
                                if (fieldValue.length > 0)
                                    update[fieldName] = sha512(fieldValue + $('#carolinaMetadata').attr('salt'));
                            }
                            else
                                update[fieldName] = fieldValue;
                        }
                        console.log(update);
                        return [4 /*yield*/, this.adminAPIService.post('/new', {
                                appName: this.appName,
                                modelName: this.modelName,
                                attributes: update
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.hasOwnProperty('message')) {
                            this.router.navigate(['/model', this.appName, this.modelName]);
                        }
                        else if (response.hasOwnAttribute('error'))
                            console.log(response.error);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelCreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, i, fieldName, fieldObj, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.appName = this.route.snapshot.paramMap.get('app');
                        this.modelName = this.route.snapshot.paramMap.get('model');
                        return [4 /*yield*/, this.adminAPIService.post('/view', {
                                appName: this.appName,
                                modelName: this.modelName,
                                itemKey: ''
                            })];
                    case 1:
                        response = _a.sent();
                        for (i = 0; i < response.schema.fieldNames.length; ++i) {
                            fieldName = response.schema.fieldNames[i];
                            fieldObj = {};
                            fieldObj.name = fieldName;
                            fieldObj.data = response.schema.fieldDetails[fieldName];
                            value = fieldObj.data.attributes.default;
                            if (fieldObj.data.type == 'date')
                                value = new Date(value);
                            if (fieldObj.data.type == 'hash')
                                value = '';
                            fieldObj.value = value;
                            this.fieldObjects.push(fieldObj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ModelCreateComponent;
}());
ModelCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-model-create',
        template: __webpack_require__("../../../../../src/app/components/model-create/model-create.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ModelCreateComponent);

var _a, _b, _c;
//# sourceMappingURL=model-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model-edit/model-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{ appName }}/{{ modelName }}: {{ modelKey }}</h2>\r\n\r\n<hr class=\"my-4\">\r\n\r\n<div *ngFor=\"let fieldObj of fieldObjects; let i = index\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <b>{{ fieldObj.name }}</b>\r\n    </div>\r\n    <div class=\"col-md-9\" *ngIf=\"fieldObj.data.attributes.hidden==true\">\r\n      <span class=\"badge badge-warning\">HIDDEN</span>\r\n    </div>\r\n    <div class=\"col-md-9\" *ngIf=\"fieldObj.data.attributes.hidden!=true\">\r\n      <div class=\"form-group\">\r\n        <div *ngIf=\"fieldObj.data.type=='bool'\">\r\n          <input class=\"form-control\" type=\"checkbox\" [(ngModel)]=\"fieldObj.value\" [disabled]=\"!fieldObj.data.attributes.adminEdit\"/>\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='date'\">\r\n          <input class=\"form-control\" type=\"datetime-local\" [ngModel]=\"fieldObj.value | date:'yyyy-MM-ddTHH:mm'\" (ngModelChange)=\"fieldObj.value = $event\" [disabled]=\"!fieldObj.data.attributes.adminEdit\"  />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='string'\">\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldObj.value\" [disabled]=\"!fieldObj.data.attributes.adminEdit\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='hash'\">\r\n\r\n          <p>\r\n            The original value of this field is not available to you.\r\n            Leave this field blank to leave it unchanged.\r\n          </p>\r\n\r\n          <input class=\"form-control\" type=\"password\" [(ngModel)]=\"fieldObj.value\" [disabled]=\"!fieldObj.data.attributes.adminEdit\" />\r\n        </div>\r\n        <div *ngIf=\"fieldObj.data.type=='list'\">\r\n          <input class=\"form-control\" type=\"text\" [(ngModel)]=\"fieldObj.value\" [disabled]=\"!fieldObj.data.attributes.adminEdit\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <hr class=\"my-4\">\r\n\r\n</div>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"update()\">Submit</button>\r\n<a class=\"btn btn-secondary\" [routerLink]=\"['/view', appName, modelName, modelKey]\">Cancel</a>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/model-edit/model-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ModelEditComponent = (function () {
    function ModelEditComponent(adminAPIService, route, router) {
        this.adminAPIService = adminAPIService;
        this.route = route;
        this.router = router;
        this.fieldObjects = [];
    }
    ModelEditComponent.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var update, i, fieldName, schemaData, fieldValue, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        update = {};
                        for (i = 0; i < this.fieldObjects.length; ++i) {
                            fieldName = this.fieldObjects[i].name;
                            schemaData = this.fieldObjects[i].data;
                            fieldValue = this.fieldObjects[i].value;
                            if (schemaData.type == 'date')
                                update[fieldName] = new Date(fieldValue);
                            else if (schemaData.type == 'hash') {
                                if (fieldValue.length > 0)
                                    update[fieldName] = sha512(fieldValue + $('#carolinaMetadata').attr('salt'));
                            }
                            else
                                update[fieldName] = fieldValue;
                        }
                        console.log(update);
                        return [4 /*yield*/, this.adminAPIService.post('/update', {
                                appName: this.appName,
                                modelName: this.modelName,
                                itemKey: this.modelKey,
                                update: update
                            })];
                    case 1:
                        response = _a.sent();
                        if (response.hasOwnProperty('message')) {
                            this.router.navigate(['/model', this.appName, this.modelName]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelEditComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, i, fieldName, fieldObj, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.appName = this.route.snapshot.paramMap.get('app');
                        this.modelName = this.route.snapshot.paramMap.get('model');
                        this.modelKey = this.route.snapshot.paramMap.get('key');
                        return [4 /*yield*/, this.adminAPIService.post('/view', {
                                appName: this.appName,
                                modelName: this.modelName,
                                itemKey: this.modelKey
                            })];
                    case 1:
                        response = _a.sent();
                        for (i = 0; i < response.schema.fieldNames.length; ++i) {
                            fieldName = response.schema.fieldNames[i];
                            fieldObj = {};
                            fieldObj.name = fieldName;
                            fieldObj.data = response.schema.fieldDetails[fieldName];
                            value = response.data[fieldName];
                            if (fieldObj.data.type == 'date')
                                value = new Date(value);
                            if (fieldObj.data.type == 'hash')
                                value = '';
                            fieldObj.value = value;
                            this.fieldObjects.push(fieldObj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ModelEditComponent;
}());
ModelEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-model-edit',
        template: __webpack_require__("../../../../../src/app/components/model-edit/model-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ModelEditComponent);

var _a, _b, _c;
//# sourceMappingURL=model-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model-listing/model-listing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{ appName }}</h2>\r\n\r\n<h3>{{ modelName }}</h3>\r\n\r\n<a class=\"btn btn-success\" [routerLink]=\"['/create', appName, modelName]\">Create New {{ modelName }}</a>\r\n\r\n<table class=\"table table-hover table-inverse table-sm\">\r\n  <thead>\r\n    <th>Model</th>\r\n    <th>Key</th>\r\n    <th>View</th>\r\n    <th>Edit</th>\r\n    <th>Delete</th>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let item of items\">\r\n      <td>{{ modelName }}</td>\r\n      <td><b>{{ item }}</b></td>\r\n      <td><a class=\"btn btn-sm btn-light\" [routerLink]=\"['/view', appName, modelName, item]\">View</a></td>\r\n      <td><a class=\"btn btn-sm btn-warning\" [routerLink]=\"['/edit', appName, modelName, item]\">Edit</a></td>\r\n      <td><a class=\"btn btn-sm btn-danger\" href=\"#\">Delete</a></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n<div class=\"btn-group\">\r\n  <button class=\"btn btn-danger\" (click)=\"previous()\" *ngIf=\"currentPage > 1\">Previous</button>\r\n  <button class=\"btn btn-info\" (click)=\"next()\" *ngIf=\"items.length>0\">Next</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/model-listing/model-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ModelListingComponent = (function () {
    function ModelListingComponent(adminAPIService, route, router) {
        this.adminAPIService = adminAPIService;
        this.route = route;
        this.router = router;
        this.items = [];
        this.currentPage = 1;
    }
    ModelListingComponent.prototype.getPage = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.adminAPIService.post('/list', {
                                appName: this.appName,
                                modelName: this.modelName,
                                pageNumber: num
                            })];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelListingComponent.prototype.previous = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                --this.currentPage;
                this.getPage(this.currentPage);
                return [2 /*return*/];
            });
        });
    };
    ModelListingComponent.prototype.next = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ++this.currentPage;
                this.getPage(this.currentPage);
                return [2 /*return*/];
            });
        });
    };
    ModelListingComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.appName = this.route.snapshot.paramMap.get('app');
                        this.modelName = this.route.snapshot.paramMap.get('model');
                        return [4 /*yield*/, this.adminAPIService.post('/list', {
                                appName: this.appName,
                                modelName: this.modelName
                            })];
                    case 1:
                        response = _a.sent();
                        this.items = response;
                        return [2 /*return*/];
                }
            });
        });
    };
    return ModelListingComponent;
}());
ModelListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-model-listing',
        template: __webpack_require__("../../../../../src/app/components/model-listing/model-listing.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ModelListingComponent);

var _a, _b, _c;
//# sourceMappingURL=model-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/model-view/model-view.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>{{ appName }}/{{ modelName }}: {{ modelKey }}</h2>\r\n\r\n<hr class=\"my-4\">\r\n\r\n<div *ngFor=\"let fieldObj of fieldObjects\">\r\n  <admin-field-view [fieldData]=\"fieldObj.data\" [fieldName]=\"fieldObj.name\" [fieldValue]=\"fieldObj.value\">\r\n  </admin-field-view>\r\n</div>\r\n\r\n<a class=\"btn btn-info\" [routerLink]=\"['/edit', appName, modelName, modelKey]\">Edit</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/model-view/model-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModelViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ModelViewComponent = (function () {
    function ModelViewComponent(adminAPIService, route, router) {
        this.adminAPIService = adminAPIService;
        this.route = route;
        this.router = router;
        this.fieldObjects = [];
    }
    ModelViewComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, i, fieldName, fieldObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.appName = this.route.snapshot.paramMap.get('app');
                        this.modelName = this.route.snapshot.paramMap.get('model');
                        this.modelKey = this.route.snapshot.paramMap.get('key');
                        return [4 /*yield*/, this.adminAPIService.post('/view', {
                                appName: this.appName,
                                modelName: this.modelName,
                                itemKey: this.modelKey
                            })];
                    case 1:
                        response = _a.sent();
                        for (i = 0; i < response.schema.fieldNames.length; ++i) {
                            fieldName = response.schema.fieldNames[i];
                            fieldObj = {};
                            fieldObj.name = fieldName;
                            fieldObj.data = response.schema.fieldDetails[fieldName];
                            fieldObj.value = response.data[fieldName];
                            this.fieldObjects.push(fieldObj);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ModelViewComponent;
}());
ModelViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-model-view',
        template: __webpack_require__("../../../../../src/app/components/model-view/model-view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ModelViewComponent);

var _a, _b, _c;
//# sourceMappingURL=model-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Apps</h2>\r\n\r\n<div *ngFor=\"let app of apps\">\r\n  <admin-app-card [app]=\"app\"></admin-app-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var OverviewComponent = (function () {
    function OverviewComponent(adminAPIService) {
        this.adminAPIService = adminAPIService;
        this.apps = [
            'one',
            'two',
            'three'
        ];
    }
    OverviewComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.adminAPIService.post('/overview', {})];
                    case 1:
                        response = _a.sent();
                        this.apps = response.apps;
                        return [2 /*return*/];
                }
            });
        });
    };
    return OverviewComponent;
}());
OverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-overview',
        template: __webpack_require__("../../../../../src/app/components/overview/overview.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__lib_admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__lib_admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object])
], OverviewComponent);

var _a;
//# sourceMappingURL=overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  You are not logged into an admin account.\r\n  Please <a href=\"/auth?next=/admin\">login</a>.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedirectComponent = (function () {
    function RedirectComponent() {
    }
    return RedirectComponent;
}());
RedirectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-redirect',
        template: __webpack_require__("../../../../../src/app/components/redirect/redirect.component.html")
    }),
    __metadata("design:paramtypes", [])
], RedirectComponent);

//# sourceMappingURL=redirect.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/waiting/waiting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>Authorizing...</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/waiting/waiting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaitingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WaitingComponent = (function () {
    function WaitingComponent() {
    }
    return WaitingComponent;
}());
WaitingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'admin-waiting',
        template: __webpack_require__("../../../../../src/app/components/waiting/waiting.component.html"),
    }),
    __metadata("design:paramtypes", [])
], WaitingComponent);

//# sourceMappingURL=waiting.component.js.map

/***/ }),

/***/ "../../../../../src/app/lib/admin-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AdminAPIService = (function () {
    function AdminAPIService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        this.isConfirmed = false;
        this.isAdmin = false;
        this.currentUser = null;
        this.currentToken = null;
    }
    AdminAPIService.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var headers, res, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentUser = window.localStorage.getItem('carolinaAuthenticationApp-carolinaUsername');
                        this.currentToken = window.localStorage.getItem('carolinaAuthenticationApp-carolinaToken');
                        headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                            'Content-Type': 'application/json'
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post('/auth/api/admin-check', JSON.stringify({
                                carolinaUser: this.currentUser,
                                carolinaToken: this.currentToken
                            }), { headers: headers }).toPromise()];
                    case 2:
                        res = _a.sent();
                        this.isAdmin = true;
                        return [2 /*return*/, true];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AdminAPIService.prototype.post = function (endpoint, data) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, res, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.carolinaUser = this.currentUser;
                        data.carolinaToken = this.currentToken;
                        baseUrl = window.location.pathname.split('/')[1] + '/api';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.post(baseUrl + endpoint, JSON.stringify(data), { headers: this.headers }).toPromise()];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res.json()];
                    case 3:
                        error_2 = _a.sent();
                        alert(error_2._body);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return AdminAPIService;
}());
AdminAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AdminAPIService);

var _a;
//# sourceMappingURL=admin-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/lib/admin-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_api_service__ = __webpack_require__("../../../../../src/app/lib/admin-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = (function () {
    function AdminGuard(adminAPIService, router) {
        this.adminAPIService = adminAPIService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        if (this.adminAPIService.isAdmin)
            return true;
        else {
            this.router.navigate(['/redirect']);
        }
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__admin_api_service__["a" /* AdminAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__admin_api_service__["a" /* AdminAPIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AdminGuard);

;
var _a, _b;
//# sourceMappingURL=admin-guard.js.map

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
    production: false
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map