(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./login/login.module": [
		"./src/app/auth/login/login.module.ts",
		"login-login-module"
	],
	"./meals/meals.module": [
		"./src/app/health/meals/meals.module.ts",
		"meals-meals-module"
	],
	"./register/register.module": [
		"./src/app/auth/register/register.module.ts",
		"register-register-module"
	],
	"./schedule/schedule.module": [
		"./src/app/health/schedule/schedule.module.ts",
		"schedule-schedule-module"
	],
	"./workouts/workouts.module": [
		"./src/app/health/workouts/workouts.module.ts",
		"workouts-workouts-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/header/header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/header/header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-header\">\r\n  <div class=\"wrapper\">\r\n    <img src=\"assets/img/logo.svg\">\r\n    <div class=\"app-header__user-info\" *ngIf=\"user?.authenticated\">\r\n      <span (click)=\"logoutUser()\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/nav/nav.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/nav/nav.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-nav\">\r\n  <div class=\"wrapper\">\r\n    <a routerLink=\"schedule\" routerLinkActive=\"active\">Schedule</a>\r\n    <a routerLink=\"meals\" routerLinkActive=\"active\">Meals</a>\r\n    <a routerLink=\"workouts\" routerLinkActive=\"active\">Workouts</a>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-header\r\n    [user]=\"user$ | async\"\r\n    (logout)=\"onLogout()\"\r\n  ></app-header>\r\n  <app-nav\r\n    *ngIf=\"(user$ | async)?.authenticated\">\r\n  </app-nav>\r\n  <div class=\"wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/shared/components/auth-form/auth-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/shared/components/auth-form/auth-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-form\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <ng-content select=\"h1\"></ng-content>\r\n\r\n    <label>\r\n      <input type=\"email\" placeholder=\"Email address\" formControlName=\"email\">\r\n    </label>\r\n\r\n    <label>\r\n      <input type=\"password\" placeholder=\"Enter password\" formControlName=\"password\">\r\n    </label>\r\n\r\n    <div class=\"error\" *ngIf=\"passwordInvalid\">\r\n      Password is required\r\n    </div>\r\n\r\n    <div class=\"error\" *ngIf=\"emailFormat\">\r\n      Invalid email format\r\n    </div>\r\n\r\n    <ng-content select=\".error\"></ng-content>\r\n\r\n    <div class=\"auth-form__action\">\r\n      <ng-content select=\".login\"></ng-content>\r\n    </div>\r\n\r\n    <div class=\"auth-form__action\">\r\n      <ng-content select=\".google\"></ng-content>\r\n    </div>\r\n\r\n    <div class=\"auth-form__toggle\">\r\n      <ng-content select=\"a\"></ng-content>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/shared/components/list-item/list-item.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/shared/components/list-item/list-item.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"list-item\">\r\n  <a [routerLink]=\"getRoute(item)\">\r\n    <p class=\"list-item__name\">{{ item.name }}</p>\r\n    <p class=\"list-item__ingredients\">\r\n      <span *ngIf=\"item.ingredients; else showWorkout\">{{ item.ingredients | join }}</span>\r\n      <ng-template #showWorkout>\r\n        <span>{{ item | workout }}</span>\r\n      </ng-template>\r\n    </p>\r\n  </a>\r\n\r\n  <div class=\"list-item__delete\" *ngIf=\"toggled\">\r\n    <p>Delete item?</p>\r\n    <button\r\n      class=\"confirm\"\r\n      type=\"button\"\r\n      (click)=\"removeItem()\">\r\n      Yes\r\n    </button>\r\n    <button\r\n      class=\"cancel\"\r\n      type=\"button\"\r\n      (click)=\"toggle()\">\r\n      No\r\n    </button>\r\n  </div>\r\n\r\n  <button\r\n    class=\"trash\"\r\n    type=\"button\"\r\n    (click)=\"toggle()\">\r\n    <img src=\"assets/img/remove.svg\" alt=\"\">\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _containers_app_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/app/app.component */ "./src/app/app/containers/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing-module */ "./src/app/app/app.routing-module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/app/components/nav/nav.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/app/components/header/header.component.ts");
/* harmony import */ var _health_health_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../health/health.module */ "./src/app/health/health.module.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _containers_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebaseConfig, 'angular-pro-93fe1'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
            _health_health_module__WEBPACK_IMPORTED_MODULE_14__["HealthModule"]
        ],
        providers: [store__WEBPACK_IMPORTED_MODULE_7__["Store"]],
        bootstrap: [_containers_app_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app/app.routing-module.ts":
/*!*******************************************!*\
  !*** ./src/app/app/app.routing-module.ts ***!
  \*******************************************/
/*! exports provided: ROUTES, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app/components/header/header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/app/components/header/header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-header {\n  background: #fff;\n  border-bottom: 1px solid #c1cedb;\n  padding: 15px 0;\n  text-align: center;\n}\n.app-header img {\n  display: inline-block;\n}\n.app-header__user-info {\n  position: absolute;\n  top: 16px;\n  right: 0;\n  cursor: pointer;\n}\n.app-header span {\n  background: url('logout.svg') no-repeat;\n  background-size: contain;\n  width: 24px;\n  height: 24px;\n  display: block;\n  opacity: 0.4;\n}\n.app-header span:hover {\n  opacity: 0.9;\n}\n.wrapper {\n  max-width: 800px;\n  width: 96%;\n  margin: 0 auto;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvaGVhZGVyL0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGFwcFxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLHFCQUFBO0FDRUo7QURBRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDRUo7QURBRTtFQUNFLHVDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7QUNHTjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAmX191c2VyLWluZm8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIHNwYW4ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbG9nb3V0LnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB3aWR0aDogOTYlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iLCIuYXBwLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjZWRiO1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hcHAtaGVhZGVyIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hcHAtaGVhZGVyX191c2VyLWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcHAtaGVhZGVyIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9sb2dvdXQuc3ZnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbi5hcHAtaGVhZGVyIHNwYW46aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi53cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app/components/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/app/components/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    logoutUser() {
        this.logout.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "logout", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/header/header.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/app/components/nav/nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/app/components/nav/nav.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: -1px 0 0;\n  display: block;\n}\n\n.app-nav {\n  background: #8022b0;\n  text-align: center;\n}\n\n.app-nav a {\n  color: rgba(255, 255, 255, 0.6);\n  padding: 15px 0;\n  display: inline-block;\n  min-width: 150px;\n  font-weight: 500;\n  font-size: 16px;\n  text-transform: uppercase;\n  border-bottom: 3px solid transparent;\n}\n\n.app-nav a:hover, .app-nav a.active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\n\n.wrapper {\n  max-width: 800px;\n  width: 96%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbXBvbmVudHMvbmF2L0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGFwcFxcY29tcG9uZW50c1xcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURBRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9DQUFBO0FDRUo7O0FEREk7RUFFRSxXQUFBO0VBQ0EseUJBQUE7QUNFTjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC9jb21wb25lbnRzL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuOmhvc3Qge1xyXG4gIG1hcmdpbjogLTFweCAwIDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmFwcC1uYXYge1xyXG4gIGJhY2tncm91bmQ6ICM4MDIyYjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjYpO1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgJjpob3ZlcixcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiOmhvc3Qge1xuICBtYXJnaW46IC0xcHggMCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFwcC1uYXYge1xuICBiYWNrZ3JvdW5kOiAjODAyMmIwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYXBwLW5hdiBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuLmFwcC1uYXYgYTpob3ZlciwgLmFwcC1uYXYgYS5hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbn1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app/components/nav/nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/app/components/nav/nav.component.ts ***!
  \*****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/components/nav/nav.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.scss */ "./src/app/app/components/nav/nav.component.scss")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/app/containers/app/app.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/app/containers/app/app.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n}\n\n.wrapper {\n  max-width: 800px;\n  width: 96%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2NvbnRhaW5lcnMvYXBwL0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGFwcFxcY29udGFpbmVyc1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC9jb250YWluZXJzL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hcHAvY29udGFpbmVycy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gIHdpZHRoOiA5NiU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app/containers/app/app.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/app/containers/app/app.component.ts ***!
  \*****************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/shared/services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AppComponent = class AppComponent {
    constructor(authService, store, router) {
        this.authService = authService;
        this.store = store;
        this.router = router;
    }
    ngOnInit() {
        this.subscription = this.authService.auth$.subscribe();
        this.user$ = this.store.select('user');
    }
    onLogout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.logoutUser();
            this.router.navigate(['/auth/login']);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/containers/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app/containers/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: ROUTES, AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.routing-module */ "./src/app/auth/auth.routing-module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/auth/shared/shared.module.ts");






const ROUTES = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"].forRoot()
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/auth.routing-module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth.routing-module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ROUTES = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/shared/components/auth-form/auth-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/auth/shared/components/auth-form/auth-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .error {\n  color: #a94442;\n  background: #f2dede;\n  border: 1px solid #e4b3b3;\n  border-radius: 2px;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0;\n}\n:host ::ng-deep h1 {\n  margin: 0 0 25px;\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n}\n:host ::ng-deep button {\n  cursor: pointer;\n  outline: 0;\n  width: 100%;\n  border-radius: 2px;\n  border: 1px solid #1c79b8;\n  background: #39a1e7;\n  color: #fff;\n  padding: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n}\n:host ::ng-deep button:hover {\n  background: #2296e4;\n  border-color: #196aa2;\n}\n:host ::ng-deep button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n:host ::ng-deep a {\n  display: block;\n  text-align: center;\n  color: #5e7386;\n  font-size: 14px;\n}\n.auth-form {\n  background: #fff;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 3px;\n  border: 1px solid #c1cedb;\n  width: 400px;\n  margin: 50px auto;\n  padding: 30px;\n}\n.auth-form__action {\n  margin: 10px 0 30px;\n}\n.auth-form__toggle {\n  border-radius: 0 0 3px 3px;\n  border-top: 1px solid #c1cedb;\n  background: #f8fafc;\n  padding: 10px;\n  margin: 0 -30px -30px;\n}\n.auth-form label {\n  display: block;\n  margin: 0;\n}\n.auth-form input {\n  outline: 0;\n  font-size: 16px;\n  padding: 10px 15px;\n  margin: 0;\n  width: 100%;\n  background: #fafcfd;\n  color: #5777a8;\n  border: 1px solid #d1deeb;\n  text-align: center;\n}\n.auth-form input::-webkit-input-placeholder {\n  color: #5777a8;\n}\n.auth-form input[type=email] {\n  border-radius: 3px 3px 0 0;\n}\n.auth-form input[type=password] {\n  border-radius: 0 0 3px 3px;\n  margin: -1px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaGFyZWQvY29tcG9uZW50cy9hdXRoLWZvcm0vQzpcXFVzZXJzXFx3b3JrXFxEZXNrdG9wXFx0ZXN0LWFwcC9zcmNcXGFwcFxcYXV0aFxcc2hhcmVkXFxjb21wb25lbnRzXFxhdXRoLWZvcm1cXGF1dGgtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaGFyZWQvY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNGSjtBRElJO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNITjtBRE9FO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNMSjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDTkY7QURRRTtFQUNFLG1CQUFBO0FDTko7QURTRTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQ1BKO0FEVUU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtBQ1JKO0FEV0U7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDVEo7QURXSTtFQUNFLGNBQUE7QUNUTjtBRFlJO0VBQ0UsMEJBQUE7QUNWTjtBRGFJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ1hOIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaGFyZWQvY29tcG9uZW50cy9hdXRoLWZvcm0vYXV0aC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIHtcclxuICAuZXJyb3Ige1xyXG4gICAgY29sb3I6ICNhOTQ0NDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJkZWRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0YjNiMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzFjNzliODtcclxuICAgIGJhY2tncm91bmQ6ICMzOWExZTc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMzlhMWU3LCA1JSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogZGFya2VuKCMxYzc5YjgsIDUlKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM1ZTczODY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYXV0aC1mb3JtIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxY2VkYjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgJl9fYWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgfVxyXG5cclxuICAmX190b2dnbGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2MxY2VkYjtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIC0zMHB4IC0zMHB4O1xyXG4gIH1cclxuXHJcbiAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmY2ZkO1xyXG4gICAgY29sb3I6ICM1Nzc3YTg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDFkZWViO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzU3NzdhODtcclxuICAgIH1cclxuXHJcbiAgICAmW3R5cGU9ZW1haWxdIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgJlt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAzcHggM3B4O1xyXG4gICAgICBtYXJnaW46IC0xcHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCA6Om5nLWRlZXAgLmVycm9yIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIGJhY2tncm91bmQ6ICNmMmRlZGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGIzYjM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG46aG9zdCA6Om5nLWRlZXAgaDEge1xuICBtYXJnaW46IDAgMCAyNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCBidXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxYzc5Yjg7XG4gIGJhY2tncm91bmQ6ICMzOWExZTc7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMyMjk2ZTQ7XG4gIGJvcmRlci1jb2xvcjogIzE5NmFhMjtcbn1cbjpob3N0IDo6bmctZGVlcCBidXR0b246ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWU3Mzg2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5hdXRoLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWNlZGI7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4uYXV0aC1mb3JtX19hY3Rpb24ge1xuICBtYXJnaW46IDEwcHggMCAzMHB4O1xufVxuLmF1dGgtZm9ybV9fdG9nZ2xlIHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYzFjZWRiO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDAgLTMwcHggLTMwcHg7XG59XG4uYXV0aC1mb3JtIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbn1cbi5hdXRoLWZvcm0gaW5wdXQge1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmNmZDtcbiAgY29sb3I6ICM1Nzc3YTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMWRlZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hdXRoLWZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzU3NzdhODtcbn1cbi5hdXRoLWZvcm0gaW5wdXRbdHlwZT1lbWFpbF0ge1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbn1cbi5hdXRoLWZvcm0gaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgbWFyZ2luOiAtMXB4IDAgMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/shared/components/auth-form/auth-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/auth/shared/components/auth-form/auth-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthFormComponent", function() { return AuthFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let AuthFormComponent = class AuthFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.submitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.form.valid) {
            this.submitted.emit(this.form);
        }
    }
    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }
    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }
};
AuthFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthFormComponent.prototype, "submitted", void 0);
AuthFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/shared/components/auth-form/auth-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-form.component.scss */ "./src/app/auth/shared/components/auth-form/auth-form.component.scss")).default]
    })
], AuthFormComponent);



/***/ }),

/***/ "./src/app/auth/shared/guards/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/shared/guards/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");





let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        return this.authService.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            if (!user) {
                this.router.navigate(['/auth/login']);
            }
            return !!user;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/shared/services/auth/auth.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/shared/services/auth/auth.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






let AuthService = class AuthService {
    constructor(store, af) {
        this.store = store;
        this.af = af;
        this.auth$ = this.af.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(next => this.onAuth(next)));
        this.onAuth = (next) => {
            if (!next) {
                this.store.set('user', null);
                return;
            }
            const user = {
                email: next.email,
                uid: next.uid,
                authenticated: true
            };
            this.store.set('user', user);
        };
    }
    createUser(email, password) {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }
    loginUser(email, password) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }
    loginGoogleUser() {
        return this.AuthLogin(new firebase__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider());
    }
    logoutUser() {
        return this.af.auth.signOut();
    }
    get authState() {
        return this.af.authState;
    }
    get user() {
        return this.af.auth.currentUser;
    }
    AuthLogin(provider) {
        return this.af.auth.signInWithPopup(provider)
            .then(() => {
            console.log('You have been successfully logged in!');
        }).catch((error) => {
            console.log(error);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



/***/ }),

/***/ "./src/app/auth/shared/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth-form/auth-form.component */ "./src/app/auth/shared/components/auth-form/auth-form.component.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/auth/shared/guards/auth.guard.ts");
var SharedModule_1;







let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_4__["AuthFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        exports: [
            _components_auth_form_auth_form_component__WEBPACK_IMPORTED_MODULE_4__["AuthFormComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/health/health.module.ts":
/*!*****************************************!*\
  !*** ./src/app/health/health.module.ts ***!
  \*****************************************/
/*! exports provided: HealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModule", function() { return HealthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _health_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health.routing-module */ "./src/app/health/health.routing-module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/health/shared/shared.module.ts");




let HealthModule = class HealthModule {
};
HealthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _health_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"].forRoot()
        ]
    })
], HealthModule);



/***/ }),

/***/ "./src/app/health/health.routing-module.ts":
/*!*************************************************!*\
  !*** ./src/app/health/health.routing-module.ts ***!
  \*************************************************/
/*! exports provided: HealthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthRoutingModule", function() { return HealthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/shared/guards/auth.guard */ "./src/app/auth/shared/guards/auth.guard.ts");




const ROUTES = [
    { path: 'workouts', canActivate: [_auth_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: './workouts/workouts.module#WorkoutsModule' },
    { path: 'schedule', canActivate: [_auth_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: './schedule/schedule.module#ScheduleModule' },
    { path: 'meals', canActivate: [_auth_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: './meals/meals.module#MealsModule' },
];
let HealthRoutingModule = class HealthRoutingModule {
};
HealthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HealthRoutingModule);



/***/ }),

/***/ "./src/app/health/shared/components/list-item/list-item.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/health/shared/components/list-item/list-item.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-item {\n  display: flex;\n  border-bottom: 1px solid #c1cedb;\n  transition: all 0.2s ease-in-out;\n}\n.list-item:hover {\n  background-color: #f9f9f9;\n}\n.list-item p {\n  margin: 0;\n}\n.list-item__name {\n  flex-grow: 1;\n}\n.list-item__ingredients {\n  font-size: 12px;\n  color: #8ea6bd;\n  font-style: italic;\n}\n.list-item__delete {\n  display: flex;\n  align-items: center;\n  margin: 0 10px 0 0;\n}\n.list-item__delete p {\n  margin: 0 10px 0 0;\n  font-size: 14px;\n}\n.list-item a {\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n  height: 100%;\n  padding: 12px 20px;\n  font-weight: 400;\n  color: #545e6f;\n  font-size: 16px;\n}\n.trash, .confirm,\n.cancel {\n  outline: 0;\n  cursor: pointer;\n  border: 0;\n}\n.confirm,\n.cancel {\n  padding: 5px 10px;\n  margin: 0 0 0 5px;\n  font-size: 14px;\n}\n.confirm {\n  color: #fff;\n  background: #d73a49;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n.confirm:hover {\n  background: #d42d3d;\n}\n.cancel {\n  background: transparent;\n}\n.trash {\n  border-left: 1px solid #c1cedb;\n  padding: 10px 15px;\n  background: #f6fafd;\n  transition: all 0.2s ease-in-out;\n}\n.trash:hover {\n  background-color: #eef5fb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL3NoYXJlZC9jb21wb25lbnRzL2xpc3QtaXRlbS9DOlxcVXNlcnNcXHdvcmtcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxoZWFsdGhcXHNoYXJlZFxcY29tcG9uZW50c1xcbGlzdC1pdGVtXFxsaXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWx0aC9zaGFyZWQvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBREFFO0VBQ0UsU0FBQTtBQ0VKO0FEQUU7RUFDRSxZQUFBO0FDRUo7QURBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDR047QURBRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRUo7QURDQTs7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNHRjtBRERBOztFQUdFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0Y7QUREQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNJRjtBREhFO0VBQ0UsbUJBQUE7QUNLSjtBREZBO0VBQ0UsdUJBQUE7QUNLRjtBREhBO0VBRUUsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNLRjtBREpFO0VBQ0UseUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9zaGFyZWQvY29tcG9uZW50cy9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxY2VkYjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICZfX25hbWUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAmX19pbmdyZWRpZW50cyB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzhlYTZiZDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbiAgJl9fZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNTQ1ZTZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4lYnV0dG9uIHtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLmNvbmZpcm0sXHJcbi5jYW5jZWwge1xyXG4gIEBleHRlbmQgJWJ1dHRvbjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDAgMCAwIDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmNvbmZpcm0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNkNzNhNDk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2Q3M2E0OSwgMyUpO1xyXG4gIH1cclxufVxyXG4uY2FuY2VsIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4udHJhc2gge1xyXG4gIEBleHRlbmQgJWJ1dHRvbjtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmNmZhZmQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZjZmYWZkLCAyJSk7XHJcbiAgfVxyXG59XHJcbiIsIi5saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxY2VkYjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4ubGlzdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cbi5saXN0LWl0ZW0gcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5saXN0LWl0ZW1fX25hbWUge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubGlzdC1pdGVtX19pbmdyZWRpZW50cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4ZWE2YmQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5saXN0LWl0ZW1fX2RlbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn1cbi5saXN0LWl0ZW1fX2RlbGV0ZSBwIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubGlzdC1pdGVtIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzU0NWU2ZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udHJhc2gsIC5jb25maXJtLFxuLmNhbmNlbCB7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY29uZmlybSxcbi5jYW5jZWwge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbmZpcm0ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Q3M2E0OTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q0MmQzZDtcbn1cblxuLmNhbmNlbCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4udHJhc2gge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjMWNlZGI7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYmFja2dyb3VuZDogI2Y2ZmFmZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4udHJhc2g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmNWZiO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/health/shared/components/list-item/list-item.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/health/shared/components/list-item/list-item.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListItemComponent = class ListItemComponent {
    constructor() {
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    getRoute(item) {
        return [`../${item.ingredients ? 'meals' : 'workouts'}`, item.$key];
    }
    toggle() {
        this.toggled = !this.toggled;
    }
    removeItem() {
        this.remove.emit(this.item);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListItemComponent.prototype, "remove", void 0);
ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/shared/components/list-item/list-item.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.component.scss */ "./src/app/health/shared/components/list-item/list-item.component.scss")).default]
    })
], ListItemComponent);



/***/ }),

/***/ "./src/app/health/shared/pipes/join.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/health/shared/pipes/join.pipe.ts ***!
  \**************************************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JoinPipe = class JoinPipe {
    transform(value) {
        return Array.isArray(value) ? value.join(', ') : value;
    }
};
JoinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'join'
    })
], JoinPipe);



/***/ }),

/***/ "./src/app/health/shared/pipes/workout.pipe.ts":
/*!*****************************************************!*\
  !*** ./src/app/health/shared/pipes/workout.pipe.ts ***!
  \*****************************************************/
/*! exports provided: WorkoutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutPipe", function() { return WorkoutPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkoutPipe = class WorkoutPipe {
    transform(value, ...args) {
        if (value.type === 'endurance') {
            return `Distance: ${value.endurance.distance} km, Duration: ${value.endurance.duration} min`;
        }
        return `
      Weight: ${value.strength.weight} kg,
      Reps: ${value.strength.reps},
      Sets: ${value.strength.sets}
    `;
    }
};
WorkoutPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'workout'
    })
], WorkoutPipe);



/***/ }),

/***/ "./src/app/health/shared/services/meals/meals.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/health/shared/services/meals/meals.service.ts ***!
  \***************************************************************/
/*! exports provided: MealsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsService", function() { return MealsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/shared/services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");







let MealsService = class MealsService {
    constructor(store, db, authService) {
        this.store = store;
        this.db = db;
        this.authService = authService;
        this.meals$ = this.db.list(`meals/${this.uid}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(next => {
            const items = next.map(i => {
                const data = i.payload.val();
                const $key = i.payload.key;
                return Object.assign({ $key }, data);
            });
            this.store.set('meals', items);
            return items;
        }));
    }
    get uid() {
        return this.authService.user.uid;
    }
    getMeal(key) {
        if (!key) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        return this.store.select('meals').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((meals) => {
            return meals.find(meal => meal.$key === key);
        }));
    }
    addMeal(meal) {
        return this.db.list(`meals/${this.uid}`).push(meal);
    }
    updateMeal(key, meal) {
        delete meal.$key;
        return this.db.object(`meals/${this.uid}/${key}`).update(meal);
    }
    removeMeal(key) {
        return this.db.list(`meals/${this.uid}`).remove(key);
    }
};
MealsService.ctorParameters = () => [
    { type: store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
MealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MealsService);



/***/ }),

/***/ "./src/app/health/shared/services/schedule/schedule.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/health/shared/services/schedule/schedule.service.ts ***!
  \*********************************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/shared/services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");







let ScheduleService = class ScheduleService {
    constructor(store, db, authService) {
        this.store = store;
        this.db = db;
        this.authService = authService;
        this.date$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date());
        this.section$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.itemList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selected$ = this.section$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((next) => this.store.set('selected', next)));
        this.list$ = this.section$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => this.store.value[value.type]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((next) => this.store.set('list', next)));
        this.items$ = this.itemList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.section$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([items, section]) => {
            const id = section.data.$key;
            const defaults = {
                workouts: null,
                meals: null,
                section: section.section,
                timestamp: new Date(section.day).getTime()
            };
            const payload = Object.assign({}, (id ? section.data : defaults), items);
            if (id) {
                return this.updateSection(id, payload);
            }
            return this.createSection(payload);
        }));
        this.schedule$ = this.date$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((next) => {
            this.store.set('date', next);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((day) => {
            const startAt = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
            const endAt = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).getTime() - 1;
            return { startAt, endAt };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(({ startAt, endAt }) => this.getSchedule(startAt, endAt)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            const mapped = {};
            for (const prop of data) {
                if (!mapped[prop.section]) {
                    mapped[prop.section] = prop;
                }
            }
            return mapped;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((next) => this.store.set('schedule', next)));
    }
    updateDate(date) {
        this.date$.next(date);
    }
    selectSection(event) {
        this.section$.next(event);
    }
    updateItems(items) {
        this.itemList$.next(items);
    }
    get uid() {
        return this.authService.user.uid;
    }
    getSchedule(startAt, endAt) {
        return this.db.list(`schedule/${this.uid}`, ref => {
            return ref.endAt(endAt).startAt(startAt).orderByChild('timestamp');
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(next => {
            return next.map(i => {
                const data = i.payload.val();
                const $key = i.payload.key;
                return Object.assign({ $key }, data);
            });
        }));
    }
    createSection(payload) {
        this.db.list(`schedule/${this.uid}`).push(payload);
    }
    updateSection(key, payload) {
        delete payload.$key;
        this.db.object(`schedule/${this.uid}/${key}`).update(payload);
    }
};
ScheduleService.ctorParameters = () => [
    { type: store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScheduleService);



/***/ }),

/***/ "./src/app/health/shared/services/workouts/workouts.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/health/shared/services/workouts/workouts.service.ts ***!
  \*********************************************************************/
/*! exports provided: WorkoutsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsService", function() { return WorkoutsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../auth/shared/services/auth/auth.service */ "./src/app/auth/shared/services/auth/auth.service.ts");







let WorkoutsService = class WorkoutsService {
    constructor(store, db, authService) {
        this.store = store;
        this.db = db;
        this.authService = authService;
        this.workouts$ = this.db.list(`workouts/${this.uid}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(next => {
            const items = next.map(i => {
                const data = i.payload.val();
                const $key = i.payload.key;
                return Object.assign({ $key }, data);
            });
            this.store.set('workouts', items);
            return items;
        }));
    }
    get uid() {
        return this.authService.user.uid;
    }
    getWorkout(key) {
        if (!key) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }
        return this.store.select('workouts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(Boolean), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((workouts) => {
            return workouts.find(workout => workout.$key === key);
        }));
    }
    addWorkout(workout) {
        return this.db.list(`workouts/${this.uid}`).push(workout);
    }
    updateWorkout(key, workout) {
        delete workout.$key;
        return this.db.object(`workouts/${this.uid}/${key}`).update(workout);
    }
    removeWorkout(key) {
        return this.db.list(`workouts/${this.uid}`).remove(key);
    }
};
WorkoutsService.ctorParameters = () => [
    { type: store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _auth_shared_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
WorkoutsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkoutsService);



/***/ }),

/***/ "./src/app/health/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/health/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_meals_meals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/meals/meals.service */ "./src/app/health/shared/services/meals/meals.service.ts");
/* harmony import */ var _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/workouts/workouts.service */ "./src/app/health/shared/services/workouts/workouts.service.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/health/shared/components/list-item/list-item.component.ts");
/* harmony import */ var _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/join.pipe */ "./src/app/health/shared/pipes/join.pipe.ts");
/* harmony import */ var _pipes_workout_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/workout.pipe */ "./src/app/health/shared/pipes/workout.pipe.ts");
/* harmony import */ var _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/schedule/schedule.service */ "./src/app/health/shared/services/schedule/schedule.service.ts");
var SharedModule_1;











let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [_services_meals_meals_service__WEBPACK_IMPORTED_MODULE_5__["MealsService"], _services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_6__["WorkoutsService"], _services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_10__["ScheduleService"]]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ListItemComponent"],
            _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_8__["JoinPipe"],
            _pipes_workout_pipe__WEBPACK_IMPORTED_MODULE_9__["WorkoutPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        exports: [
            _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_7__["ListItemComponent"],
            _pipes_join_pipe__WEBPACK_IMPORTED_MODULE_8__["JoinPipe"],
            _pipes_workout_pipe__WEBPACK_IMPORTED_MODULE_9__["WorkoutPipe"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyA2HTghLf4CWs-CoDZN1B9EAs9COyVQROE',
        authDomain: 'angular-pro-93fe1.firebaseapp.com',
        databaseURL: 'https://angular-pro-93fe1.firebaseio.com',
        projectId: 'angular-pro-93fe1',
        storageBucket: 'angular-pro-93fe1.appspot.com',
        messagingSenderId: '416970614087',
        appId: '1:416970614087:web:dd901deb688c7ad6601862',
        measurementId: 'G-15RCV59T9H'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app/app.module */ "./src/app/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const basicState = {
    user: undefined,
    meals: undefined,
    workouts: undefined,
    list: undefined,
    date: undefined,
    schedule: undefined,
    selected: undefined
};
let Store = class Store {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](basicState);
        this.store = this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    }
    get value() {
        return this.subject.value;
    }
    select(name) {
        return this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])(name));
    }
    set(name, state) {
        this.subject.next(Object.assign({}, this.value, { [name]: state }));
    }
};
Store = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], Store);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\work\Desktop\test-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map