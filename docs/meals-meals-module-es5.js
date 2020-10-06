function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meals-meals-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/components/meal-form/meal-form.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/components/meal-form/meal-form.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthMealsComponentsMealFormMealFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"meal-form\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"meal-form__name\">\r\n      <label>\r\n        <h3>Meal name</h3>\r\n        <input\r\n          type=\"text\"\r\n          placeholder=\"e.g. English breakfast\"\r\n          formControlName=\"name\">\r\n        <div class=\"error\" *ngIf=\"required\">\r\n          Meal name is required\r\n        </div>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"meal-form__food\">\r\n      <div class=\"meal-form__subtitle\">\r\n        <h3>Food</h3>\r\n        <button\r\n          type=\"button\"\r\n          class=\"meal-form__add\"\r\n          (click)=\"addIngredient()\">\r\n          <img src=\"assets/img/add-white.svg\" alt=\"\">\r\n          Add Food\r\n        </button>\r\n      </div>\r\n      <div formArrayName=\"ingredients\">\r\n        <label *ngFor=\"let c of ingredients.controls; index as i\">\r\n          <input [formControlName]=\"i\" placeholder=\"e.g. Eggs\">\r\n          <span\r\n            class=\"meal-form__remove\"\r\n            (click)=\"removeIngredient(i)\">\r\n          </span>\r\n        </label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"meal-form__submit\">\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"button\"\r\n          *ngIf=\"!exists\"\r\n          (click)=\"createMeal()\">\r\n          Create meal\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"button\"\r\n          *ngIf=\"exists\"\r\n          (click)=\"updateMeal()\">\r\n          Save\r\n        </button>\r\n        <a\r\n          class=\"button button--cancel\"\r\n          [routerLink]=\"['../']\">\r\n          Cancel\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"meal-form__delete\" *ngIf=\"exists\">\r\n        <div *ngIf=\"toggled\">\r\n          <p>Delete item?</p>\r\n          <button\r\n            class=\"confirm\"\r\n            type=\"button\"\r\n            (click)=\"removeMeal()\">\r\n            Yes\r\n          </button>\r\n          <button\r\n            class=\"cancel\"\r\n            type=\"button\"\r\n            (click)=\"toggle()\">\r\n            No\r\n          </button>\r\n        </div>\r\n\r\n        <button\r\n          class=\"button button--delete\"\r\n          type=\"button\"\r\n          (click)=\"toggle()\">\r\n          Delete\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meal/meal.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meal/meal.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthMealsContainersMealMealComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"meal\">\r\n  <div class=\"meal__title\">\r\n    <h1>\r\n      <img src=\"assets/img/food.svg\" alt=\"\">\r\n      <span *ngIf=\"meal$ | async as meal; else title;\">{{ meal.name ? 'Edit' : 'Create' }} meal</span>\r\n      <ng-template #title>Loading...</ng-template>\r\n    </h1>\r\n  </div>\r\n  <div *ngIf=\"meal$ | async as meal; else loading;\">\r\n    <app-meal-form\r\n      [meal]=\"meal\"\r\n      (create)=\"addMeal($event)\"\r\n      (update)=\"updateMeal($event)\"\r\n      (remove)=\"removeMeal()\">\r\n    </app-meal-form>\r\n  </div>\r\n  <ng-template #loading>\r\n    <div class=\"message\">\r\n      <img src=\"/assets/img/loading.svg\">\r\n      Fetching Meal...\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meals/meals.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meals/meals.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHealthMealsContainersMealsMealsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"meals\">\r\n  <div class=\"meals__title\">\r\n    <h1>\r\n      <img src=\"assets/img/food.svg\" alt=\"\">\r\n      Your Meals\r\n    </h1>\r\n    <a href=\"\" class=\"btn__add\" [routerLink]=\"['../meals/new']\">\r\n      <img src=\"assets/img/add-white.svg\" alt=\"\">\r\n      New Meal\r\n    </a>\r\n  </div>\r\n  <div *ngIf=\"meals$ | async as meals; else loading;\">\r\n    <div class=\"message\" *ngIf=\"!meals.length\">\r\n      <img src=\"assets/img/face.svg\" alt=\"\">\r\n      No meals, add a new meal to start\r\n    </div>\r\n    <app-list-item\r\n      *ngFor=\"let meal of meals\"\r\n      [item]=\"meal\"\r\n      (remove)=\"removeMeal($event)\">\r\n    </app-list-item>\r\n  </div>\r\n  <ng-template #loading>\r\n    <div class=\"message\">\r\n      <img src=\"assets/img/loading.svg\" alt=\"\">\r\n      Fetching meals...\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/health/meals/components/meal-form/meal-form.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/health/meals/components/meal-form/meal-form.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHealthMealsComponentsMealFormMealFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".confirm,\n.cancel {\n  outline: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\n.confirm,\n.cancel {\n  padding: 5px 10px;\n  margin: 0 0 0 5px;\n  font-size: 14px;\n}\n\n.error {\n  color: #a94442;\n  background: #f2dede;\n  border: 1px solid #e4b3b3;\n  border-radius: 2px;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0;\n}\n\n.confirm {\n  color: #fff;\n  background: #d73a49;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n\n.confirm:hover {\n  background: #d42d3d;\n}\n\n.meal-form__name {\n  padding: 30px;\n  flex-direction: column;\n  border-bottom: 1px solid #d1deeb;\n}\n\n.meal-form__food {\n  padding: 30px;\n  border-bottom: 1px solid #d1deeb;\n}\n\n.meal-form__subtitle {\n  display: flex;\n  align-items: center;\n}\n\n.meal-form__subtitle h3 {\n  margin: 20px 0;\n  flex-grow: 1;\n}\n\n.meal-form__delete {\n  display: flex;\n  align-items: center;\n}\n\n.meal-form__delete > div {\n  display: flex;\n  align-items: center;\n}\n\n.meal-form__delete > div p {\n  margin: 0;\n}\n\n.meal-form__delete .cancel {\n  margin: 0 20px 0 0;\n}\n\n.meal-form__add {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: #97c747;\n  border-radius: 50px;\n  padding: 6px 20px 6px 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.meal-form__add img {\n  width: 20px;\n  margin: 0 6px 0 0;\n}\n\n.meal-form__remove {\n  cursor: pointer;\n  background-image: url('cross.svg');\n  background-size: 15px 15px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-color: #eff4f9;\n  width: 35px;\n  height: 38px;\n  display: block;\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  border-left: 1px solid #d1deeb;\n  transition: all 0.2s ease-in-out;\n}\n\n.meal-form__remove:hover {\n  background-color: #dce7f2;\n}\n\n.meal-form__submit {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px;\n}\n\n.meal-form h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.meal-form h1 img {\n  margin: 0 10px 0 0;\n}\n\n.meal-form h3 {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.meal-form label {\n  position: relative;\n  display: block;\n  margin: 0 0 10px;\n}\n\n.meal-form input {\n  outline: 0;\n  font-size: 16px;\n  padding: 10px 40px 10px 15px;\n  margin: 0;\n  width: 100%;\n  background: #fff;\n  color: #545e6f;\n  flex-grow: 1;\n  border: 1px solid #d1deeb;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n\n.meal-form input:focus {\n  border-color: #a5b9ce;\n}\n\n.meal-form input::-webkit-input-placeholder {\n  color: #aaa;\n}\n\n.meal-form .button {\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  border-radius: 2px;\n  background: #39a1e7;\n  color: #fff;\n  padding: 10px 18px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n}\n\n.meal-form .button:hover {\n  background: #2296e4;\n}\n\n.meal-form .button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.meal-form .button--cancel {\n  background: #fff;\n  color: #545e6f;\n}\n\n.meal-form .button--cancel:hover {\n  background: #fff;\n}\n\n.meal-form .button--delete {\n  background: #d73a49;\n  align-self: flex-start;\n}\n\n.meal-form .button--delete:hover {\n  background: #ce2a39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL21lYWxzL2NvbXBvbmVudHMvbWVhbC1mb3JtL0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGhlYWx0aFxcbWVhbHNcXGNvbXBvbmVudHNcXG1lYWwtZm9ybVxcbWVhbC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvbWVhbHMvY29tcG9uZW50cy9tZWFsLWZvcm0vbWVhbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FEQ0E7O0VBR0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNHRjs7QURGRTtFQUNFLG1CQUFBO0FDSUo7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURESTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDR047O0FEQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0dOOztBREZNO0VBQ0UsU0FBQTtBQ0lSOztBRERJO0VBQ0Usa0JBQUE7QUNHTjs7QURBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRERJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDR047O0FEQUU7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDRUo7O0FEREk7RUFDRSx5QkFBQTtBQ0dOOztBREFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRERJO0VBQ0Usa0JBQUE7QUNHTjs7QURBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBRTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNFSjs7QURESTtFQUNFLHFCQUFBO0FDR047O0FEREk7RUFDRSxXQUFBO0FDR047O0FEQUU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRERJO0VBQ0UsbUJBQUE7QUNHTjs7QURESTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0dOOztBRERJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDR047O0FERk07RUFDRSxnQkFBQTtBQ0lSOztBRERJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQ0dOOztBREZNO0VBQ0UsbUJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9tZWFscy9jb21wb25lbnRzL21lYWwtZm9ybS9tZWFsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuJWJ1dHRvbiB7XHJcbiAgb3V0bGluZTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5jb25maXJtLFxyXG4uY2FuY2VsIHtcclxuICBAZXh0ZW5kICVidXR0b247XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgY29sb3I6ICNhOTQ0NDI7XHJcbiAgYmFja2dyb3VuZDogI2YyZGVkZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTRiM2IzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxufVxyXG4uY29uZmlybSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2Q3M2E0OTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtlbigjZDczYTQ5LCAzJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVhbC1mb3JtIHtcclxuICAmX19uYW1lIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMWRlZWI7XHJcbiAgfVxyXG4gICZfX2Zvb2Qge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZWViO1xyXG4gIH1cclxuICAmX19zdWJ0aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fZGVsZXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgPiBkaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYW5jZWwge1xyXG4gICAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2FkZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICM5N2M3NDc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHggNnB4IDE1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBtYXJnaW46IDAgNnB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fcmVtb3ZlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvY3Jvc3Muc3ZnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNXB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmY0Zjk7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICByaWdodDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDFkZWViO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2VmZjRmOSwgNSUpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMTVweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNTQ1ZTZmO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZGVlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2E1YjljZTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogI2FhYTtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzM5YTFlNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjMzlhMWU3LCA1JSk7XHJcbiAgICB9XHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgb3BhY2l0eTogLjQ7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbiAgICAmLS1jYW5jZWwge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBjb2xvcjogIzU0NWU2ZjtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tZGVsZXRlIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Q3M2E0OTtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNkNzNhNDksIDUlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29uZmlybSxcbi5jYW5jZWwge1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb25maXJtLFxuLmNhbmNlbCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDAgMCAwIDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2E5NDQ0MjtcbiAgYmFja2dyb3VuZDogI2YyZGVkZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0YjNiMztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbn1cblxuLmNvbmZpcm0ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2Q3M2E0OTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5jb25maXJtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q0MmQzZDtcbn1cblxuLm1lYWwtZm9ybV9fbmFtZSB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZWViO1xufVxuLm1lYWwtZm9ybV9fZm9vZCB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZWViO1xufVxuLm1lYWwtZm9ybV9fc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lYWwtZm9ybV9fc3VidGl0bGUgaDMge1xuICBtYXJnaW46IDIwcHggMDtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1lYWwtZm9ybV9fZGVsZXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZWFsLWZvcm1fX2RlbGV0ZSA+IGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVhbC1mb3JtX19kZWxldGUgPiBkaXYgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5tZWFsLWZvcm1fX2RlbGV0ZSAuY2FuY2VsIHtcbiAgbWFyZ2luOiAwIDIwcHggMCAwO1xufVxuLm1lYWwtZm9ybV9fYWRkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjOTdjNzQ3O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA2cHggMjBweCA2cHggMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1lYWwtZm9ybV9fYWRkIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgNnB4IDAgMDtcbn1cbi5tZWFsLWZvcm1fX3JlbW92ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9jcm9zcy5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNGY5O1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgcmlnaHQ6IDFweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDFkZWViO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tZWFsLWZvcm1fX3JlbW92ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U3ZjI7XG59XG4ubWVhbC1mb3JtX19zdWJtaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ubWVhbC1mb3JtIGgxIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tZWFsLWZvcm0gaDEgaW1nIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufVxuLm1lYWwtZm9ybSBoMyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tZWFsLWZvcm0gbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLm1lYWwtZm9ybSBpbnB1dCB7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTBweCA0MHB4IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM1NDVlNmY7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZGVlYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5tZWFsLWZvcm0gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNhNWI5Y2U7XG59XG4ubWVhbC1mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhYWE7XG59XG4ubWVhbC1mb3JtIC5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMzlhMWU3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubWVhbC1mb3JtIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjI5NmU0O1xufVxuLm1lYWwtZm9ybSAuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm1lYWwtZm9ybSAuYnV0dG9uLS1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzU0NWU2Zjtcbn1cbi5tZWFsLWZvcm0gLmJ1dHRvbi0tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5tZWFsLWZvcm0gLmJ1dHRvbi0tZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2Q3M2E0OTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5tZWFsLWZvcm0gLmJ1dHRvbi0tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlMmEzOTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/health/meals/components/meal-form/meal-form.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/health/meals/components/meal-form/meal-form.component.ts ***!
    \**************************************************************************/

  /*! exports provided: MealFormComponent */

  /***/
  function srcAppHealthMealsComponentsMealFormMealFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MealFormComponent", function () {
      return MealFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var MealFormComponent = /*#__PURE__*/function () {
      function MealFormComponent(fb) {
        _classCallCheck(this, MealFormComponent);

        this.fb = fb;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggled = false;
        this.exists = false;
        this.form = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          ingredients: this.fb.array([''])
        });
      }

      _createClass(MealFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.meal && this.meal.name) {
            this.exists = true;
            this.ingredients.clear();
            var value = this.meal;
            this.form.patchValue(value);

            if (value.ingredients) {
              var _iterator = _createForOfIteratorHelper(value.ingredients),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  this.ingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](item));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }
      }, {
        key: "createMeal",
        value: function createMeal() {
          if (this.form.valid) {
            this.create.emit(this.form.value);
          }
        }
      }, {
        key: "updateMeal",
        value: function updateMeal() {
          if (this.form.valid) {
            this.update.emit(this.form.value);
          }
        }
      }, {
        key: "removeMeal",
        value: function removeMeal() {
          this.remove.emit(this.form.value);
        }
      }, {
        key: "addIngredient",
        value: function addIngredient() {
          this.ingredients.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''));
        }
      }, {
        key: "removeIngredient",
        value: function removeIngredient(index) {
          this.ingredients.removeAt(index);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.toggled = !this.toggled;
        }
      }, {
        key: "ingredients",
        get: function get() {
          return this.form.get('ingredients');
        }
      }, {
        key: "required",
        get: function get() {
          return this.form.get('name').hasError('required') && this.form.get('name').touched;
        }
      }]);

      return MealFormComponent;
    }();

    MealFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MealFormComponent.prototype, "meal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MealFormComponent.prototype, "create", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MealFormComponent.prototype, "update", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MealFormComponent.prototype, "remove", void 0);
    MealFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meal-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meal-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/components/meal-form/meal-form.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meal-form.component.scss */
      "./src/app/health/meals/components/meal-form/meal-form.component.scss"))["default"]]
    })], MealFormComponent);
    /***/
  },

  /***/
  "./src/app/health/meals/containers/meal/meal.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/health/meals/containers/meal/meal.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHealthMealsContainersMealMealComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  margin: 50px 0;\n}\n\n.meal {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #c1cedb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.meal h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.meal h1 img {\n  margin: 0 10px 0 0;\n}\n\n.meal__title {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  background: #f6fafd;\n  border-bottom: 1px solid #c1cedb;\n}\n\n.message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 30px;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n.message img {\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL21lYWxzL2NvbnRhaW5lcnMvbWVhbC9DOlxcVXNlcnNcXHdvcmtcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxoZWFsdGhcXG1lYWxzXFxjb250YWluZXJzXFxtZWFsXFxtZWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvbWVhbHMvY29udGFpbmVycy9tZWFsL21lYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDR0o7O0FERkk7RUFDRSxrQkFBQTtBQ0lOOztBRERFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUNHSjs7QURBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURGRTtFQUNFLGtCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9oZWFsdGgvbWVhbHMvY29udGFpbmVycy9tZWFsL21lYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuLm1lYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsMCwwLC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjZWRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGgxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZmFmZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjZWRiO1xyXG4gIH1cclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5tZWFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjZWRiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWVhbCBoMSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ubWVhbCBoMSBpbWcge1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ubWVhbF9fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxY2VkYjtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tZXNzYWdlIGltZyB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/health/meals/containers/meal/meal.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/health/meals/containers/meal/meal.component.ts ***!
    \****************************************************************/

  /*! exports provided: MealComponent */

  /***/
  function srcAppHealthMealsContainersMealMealComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MealComponent", function () {
      return MealComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_services_meals_meals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/services/meals/meals.service */
    "./src/app/health/shared/services/meals/meals.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var MealComponent = /*#__PURE__*/function () {
      function MealComponent(mealsService, router, route) {
        _classCallCheck(this, MealComponent);

        this.mealsService = mealsService;
        this.router = router;
        this.route = route;
      }

      _createClass(MealComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.mealsService.meals$.subscribe();
          this.meal$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (param) {
            return _this.mealsService.getMeal(param.id);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "addMeal",
        value: function addMeal(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.mealsService.addMeal(event);

                  case 2:
                    this.backToMeals();

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "updateMeal",
        value: function updateMeal(event) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var key;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    key = this.route.snapshot.params.id;
                    _context2.next = 3;
                    return this.mealsService.updateMeal(key, event);

                  case 3:
                    this.backToMeals();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "removeMeal",
        value: function removeMeal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var key;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    key = this.route.snapshot.params.id;
                    _context3.next = 3;
                    return this.mealsService.removeMeal(key);

                  case 3:
                    this.backToMeals();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "backToMeals",
        value: function backToMeals() {
          this.router.navigate(['meals']);
        }
      }]);

      return MealComponent;
    }();

    MealComponent.ctorParameters = function () {
      return [{
        type: _shared_services_meals_meals_service__WEBPACK_IMPORTED_MODULE_3__["MealsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MealComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meal/meal.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meal.component.scss */
      "./src/app/health/meals/containers/meal/meal.component.scss"))["default"]]
    })], MealComponent);
    /***/
  },

  /***/
  "./src/app/health/meals/containers/meals/meals.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/health/meals/containers/meals/meals.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHealthMealsContainersMealsMealsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  display: block;\n  margin: 50px 0;\n}\n\n.meals {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #c1cedb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.meals h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.meals h1 img {\n  margin: 0 10px 0 0;\n}\n\n.meals__title {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  background: #f6fafd;\n  border-bottom: 1px solid #c1cedb;\n}\n\n.btn__add {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  background: #97c747;\n  border-radius: 50px;\n  padding: 6px 20px 6px 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.btn__add img {\n  width: 20px;\n  margin: 0 6px 0 0;\n}\n\n.message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 30px;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n.message img {\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL21lYWxzL2NvbnRhaW5lcnMvbWVhbHMvQzpcXFVzZXJzXFx3b3JrXFxEZXNrdG9wXFx0ZXN0LWFwcC9zcmNcXGFwcFxcaGVhbHRoXFxtZWFsc1xcY29udGFpbmVyc1xcbWVhbHNcXG1lYWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvbWVhbHMvY29udGFpbmVycy9tZWFscy9tZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNHSjs7QURGSTtFQUNFLGtCQUFBO0FDSU47O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURERTtFQUNFLGtCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9oZWFsdGgvbWVhbHMvY29udGFpbmVycy9tZWFscy9tZWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG4ubWVhbHMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsMCwwLC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjZWRiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGgxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y2ZmFmZDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjZWRiO1xyXG4gIH1cclxufVxyXG4uYnRuX19hZGQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjOTdjNzQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcGFkZGluZzogNnB4IDIwcHggNnB4IDE1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250OiB7XHJcbiAgICB3ZWlnaHQ6IDYwMDtcclxuICAgIHNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIG1hcmdpbjogMCA2cHggMCAwO1xyXG4gIH1cclxufVxyXG4ubWVzc2FnZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG5cbi5tZWFscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MxY2VkYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1lYWxzIGgxIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5tZWFscyBoMSBpbWcge1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ubWVhbHNfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbiAgYmFja2dyb3VuZDogI2Y2ZmFmZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWNlZGI7XG59XG5cbi5idG5fX2FkZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjOTdjNzQ3O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nOiA2cHggMjBweCA2cHggMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmJ0bl9fYWRkIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgNnB4IDAgMDtcbn1cblxuLm1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tZXNzYWdlIGltZyB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/health/meals/containers/meals/meals.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/health/meals/containers/meals/meals.component.ts ***!
    \******************************************************************/

  /*! exports provided: MealsComponent */

  /***/
  function srcAppHealthMealsContainersMealsMealsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MealsComponent", function () {
      return MealsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_services_meals_meals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/services/meals/meals.service */
    "./src/app/health/shared/services/meals/meals.service.ts");
    /* harmony import */


    var store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! store */
    "./src/store.ts");

    var MealsComponent = /*#__PURE__*/function () {
      function MealsComponent(mealsService, store) {
        _classCallCheck(this, MealsComponent);

        this.mealsService = mealsService;
        this.store = store;
      }

      _createClass(MealsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.meals$ = this.store.select('meals');
          this.subscription = this.mealsService.meals$.subscribe();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "removeMeal",
        value: function removeMeal(e) {
          this.mealsService.removeMeal(e.$key);
        }
      }]);

      return MealsComponent;
    }();

    MealsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_meals_meals_service__WEBPACK_IMPORTED_MODULE_2__["MealsService"]
      }, {
        type: store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    MealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-meals',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./meals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/health/meals/containers/meals/meals.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./meals.component.scss */
      "./src/app/health/meals/containers/meals/meals.component.scss"))["default"]]
    })], MealsComponent);
    /***/
  },

  /***/
  "./src/app/health/meals/meals.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/health/meals/meals.module.ts ***!
    \**********************************************/

  /*! exports provided: MealsModule */

  /***/
  function srcAppHealthMealsMealsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MealsModule", function () {
      return MealsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/health/shared/shared.module.ts");
    /* harmony import */


    var _containers_meals_meals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./containers/meals/meals.component */
    "./src/app/health/meals/containers/meals/meals.component.ts");
    /* harmony import */


    var _containers_meal_meal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./containers/meal/meal.component */
    "./src/app/health/meals/containers/meal/meal.component.ts");
    /* harmony import */


    var _meals_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./meals.routing-module */
    "./src/app/health/meals/meals.routing-module.ts");
    /* harmony import */


    var _components_meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/meal-form/meal-form.component */
    "./src/app/health/meals/components/meal-form/meal-form.component.ts");

    var MealsModule = function MealsModule() {
      _classCallCheck(this, MealsModule);
    };

    MealsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_containers_meals_meals_component__WEBPACK_IMPORTED_MODULE_5__["MealsComponent"], _containers_meal_meal_component__WEBPACK_IMPORTED_MODULE_6__["MealComponent"], _components_meal_form_meal_form_component__WEBPACK_IMPORTED_MODULE_8__["MealFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _meals_routing_module__WEBPACK_IMPORTED_MODULE_7__["MealsRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
    })], MealsModule);
    /***/
  },

  /***/
  "./src/app/health/meals/meals.routing-module.ts":
  /*!******************************************************!*\
    !*** ./src/app/health/meals/meals.routing-module.ts ***!
    \******************************************************/

  /*! exports provided: MealsRoutingModule */

  /***/
  function srcAppHealthMealsMealsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MealsRoutingModule", function () {
      return MealsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _containers_meals_meals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./containers/meals/meals.component */
    "./src/app/health/meals/containers/meals/meals.component.ts");
    /* harmony import */


    var _containers_meal_meal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./containers/meal/meal.component */
    "./src/app/health/meals/containers/meal/meal.component.ts");

    var ROUTES = [{
      path: '',
      component: _containers_meals_meals_component__WEBPACK_IMPORTED_MODULE_3__["MealsComponent"]
    }, {
      path: 'new',
      component: _containers_meal_meal_component__WEBPACK_IMPORTED_MODULE_4__["MealComponent"]
    }, {
      path: ':id',
      component: _containers_meal_meal_component__WEBPACK_IMPORTED_MODULE_4__["MealComponent"]
    }];

    var MealsRoutingModule = function MealsRoutingModule() {
      _classCallCheck(this, MealsRoutingModule);
    };

    MealsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MealsRoutingModule);
    /***/
  }
}]);
//# sourceMappingURL=meals-meals-module-es5.js.map