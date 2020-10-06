(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workouts-workouts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-form/workout-form.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-form/workout-form.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workout-form\">\r\n  <form [formGroup]=\"form\">\r\n    <div class=\"workout-form__name\">\r\n      <label>\r\n        <h3>Workout name</h3>\r\n        <input\r\n          type=\"text\"\r\n          [placeholder]=\"placeholder\"\r\n          formControlName=\"name\">\r\n        <div class=\"error\" *ngIf=\"required\">\r\n          Workout name is required\r\n        </div>\r\n      </label>\r\n      <label>\r\n        <h3>Type</h3>\r\n        <app-workout-type formControlName=\"type\"></app-workout-type>\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"workout-form__details\">\r\n      <div *ngIf=\"form.get('type').value === 'strength'\">\r\n        <div class=\"workout-form__fields\"\r\n             formGroupName=\"strength\">\r\n          <label>\r\n            <h3>Reps</h3>\r\n            <input type=\"number\" formControlName=\"reps\">\r\n          </label>\r\n          <label>\r\n            <h3>Sets</h3>\r\n            <input type=\"number\" formControlName=\"sets\">\r\n          </label>\r\n          <label>\r\n            <h3>Weight <span>(kg)</span></h3>\r\n            <input type=\"number\" formControlName=\"weight\">\r\n          </label>\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"form.get('type').value === 'endurance'\">\r\n        <div class=\"workout-form__fields\"\r\n             formGroupName=\"endurance\">\r\n          <label>\r\n            <h3>Distance <span>(km)</span></h3>\r\n            <input type=\"number\" formControlName=\"distance\">\r\n          </label>\r\n          <label>\r\n            <h3>Duration <span>(minutes)</span></h3>\r\n            <input type=\"number\" formControlName=\"duration\">\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"workout-form__submit\">\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"button\"\r\n          *ngIf=\"!exists\"\r\n          (click)=\"createWorkout()\">\r\n          Create workout\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"button\"\r\n          *ngIf=\"exists\"\r\n          (click)=\"updateWorkout()\">\r\n          Save\r\n        </button>\r\n        <a\r\n          class=\"button button--cancel\"\r\n          [routerLink]=\"['../']\">\r\n          Cancel\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"workout-form__delete\" *ngIf=\"exists\">\r\n        <div *ngIf=\"toggled\">\r\n          <p>Delete item?</p>\r\n          <button\r\n            class=\"confirm\"\r\n            type=\"button\"\r\n            (click)=\"removeWorkout()\">\r\n            Yes\r\n          </button>\r\n          <button\r\n            class=\"cancel\"\r\n            type=\"button\"\r\n            (click)=\"toggle()\">\r\n            No\r\n          </button>\r\n        </div>\r\n\r\n        <button\r\n          class=\"button button--delete\"\r\n          type=\"button\"\r\n          (click)=\"toggle()\">\r\n          Delete\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-type/workout-type.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-type/workout-type.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workout-type\">\r\n  <div class=\"workout-type__pane\"\r\n       [class.active]=\"selector === value\"\r\n       (click)=\"setSelected(selector)\"\r\n       *ngFor=\"let selector of selectors\">\r\n    <img src=\"/assets/img/{{selector}}.svg\" alt=\"\">\r\n    <p>{{ selector }}</p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workout/workout.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workout/workout.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workout\">\r\n  <div class=\"workout__title\">\r\n    <h1>\r\n      <img src=\"assets/img/workout.svg\" alt=\"\">\r\n      <span *ngIf=\"workout$ | async as workout; else title;\">{{ workout.name ? 'Edit' : 'Create' }} workout</span>\r\n      <ng-template #title>Loading...</ng-template>\r\n    </h1>\r\n  </div>\r\n  <div *ngIf=\"workout$ | async as workout; else loading;\">\r\n    <app-workout-form\r\n      [workout]=\"workout\"\r\n      (create)=\"addWorkout($event)\"\r\n      (update)=\"updateWorkout($event)\"\r\n      (remove)=\"removeWorkout()\">\r\n    </app-workout-form>\r\n  </div>\r\n  <ng-template #loading>\r\n    <div class=\"message\">\r\n      <img src=\"/assets/img/loading.svg\">\r\n      Fetching Workout...\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workouts/workouts.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workouts/workouts.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workouts\">\r\n  <div class=\"workouts__title\">\r\n    <h1>\r\n      <img src=\"assets/img/workout.svg\" alt=\"\">\r\n      Your Workouts\r\n    </h1>\r\n    <a href=\"\" class=\"btn__add\" [routerLink]=\"['../workouts/new']\">\r\n      <img src=\"assets/img/add-white.svg\" alt=\"\">\r\n      New Workout\r\n    </a>\r\n  </div>\r\n  <div *ngIf=\"workouts$ | async as workouts; else loading;\">\r\n    <div class=\"message\" *ngIf=\"!workouts.length\">\r\n      <img src=\"assets/img/face.svg\" alt=\"\">\r\n      No workout, add a new workout to start\r\n    </div>\r\n    <app-list-item\r\n      *ngFor=\"let workout of workouts\"\r\n      [item]=\"workout\"\r\n      (remove)=\"removeWorkout($event)\">\r\n    </app-list-item>\r\n  </div>\r\n  <ng-template #loading>\r\n    <div class=\"message\">\r\n      <img src=\"assets/img/loading.svg\" alt=\"\">\r\n      Fetching workouts...\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/health/workouts/components/workout-form/workout-form.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/health/workouts/components/workout-form/workout-form.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm,\n.cancel {\n  outline: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\n.confirm,\n.cancel {\n  padding: 5px 10px;\n  margin: 0 0 0 5px;\n  font-size: 14px;\n}\n\n.error {\n  color: #a94442;\n  background: #f2dede;\n  border: 1px solid #e4b3b3;\n  border-radius: 2px;\n  padding: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 10px 0 0;\n}\n\n.confirm {\n  color: #fff;\n  background: #d73a49;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n\n.confirm:hover {\n  background: #d42d3d;\n}\n\n.workout-form__name {\n  padding: 30px;\n  flex-direction: column;\n  border-bottom: 1px solid #d1deeb;\n}\n\n.workout-form__details {\n  padding: 30px;\n  border-bottom: 1px solid #d1deeb;\n}\n\n.workout-form__subtitle {\n  display: flex;\n  align-items: center;\n}\n\n.workout-form__subtitle h3 {\n  margin: 20px 0;\n  flex-grow: 1;\n}\n\n.workout-form__delete {\n  display: flex;\n  align-items: center;\n}\n\n.workout-form__delete > div {\n  display: flex;\n  align-items: center;\n}\n\n.workout-form__delete > div p {\n  margin: 0;\n}\n\n.workout-form__delete .cancel {\n  margin: 0 20px 0 0;\n}\n\n.workout-form__submit {\n  display: flex;\n  justify-content: space-between;\n  padding: 30px;\n}\n\n.workout-form h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.workout-form h1 img {\n  margin: 0 10px 0 0;\n}\n\n.workout-form h3 {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.workout-form label {\n  position: relative;\n  display: block;\n  margin: 0 0 10px;\n}\n\n.workout-form label span {\n  color: #7a98b5;\n  font-size: 12px;\n}\n\n.workout-form__fields {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.workout-form__fields label {\n  flex: 1 0;\n  margin: 0 10px 10px 0;\n}\n\n.workout-form__fields label:last-child {\n  margin: 0 0 10px;\n}\n\n.workout-form input {\n  outline: 0;\n  font-size: 16px;\n  padding: 10px 15px;\n  margin: 0;\n  width: 100%;\n  background: #fff;\n  color: #545e6f;\n  flex-grow: 1;\n  border: 1px solid #d1deeb;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n\n.workout-form input:focus {\n  border-color: #a5b9ce;\n}\n\n.workout-form input::-webkit-input-placeholder {\n  color: #aaa;\n}\n\n.workout-form .button {\n  cursor: pointer;\n  outline: 0;\n  border: 0;\n  border-radius: 2px;\n  background: #39a1e7;\n  color: #fff;\n  padding: 10px 18px;\n  font-size: 16px;\n  font-weight: 600;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n}\n\n.workout-form .button:hover {\n  background: #2296e4;\n}\n\n.workout-form .button:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.workout-form .button--cancel {\n  background: #fff;\n  color: #545e6f;\n}\n\n.workout-form .button--cancel:hover {\n  background: #fff;\n}\n\n.workout-form .button--delete {\n  background: #d73a49;\n  align-self: flex-start;\n}\n\n.workout-form .button--delete:hover {\n  background: #ce2a39;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbXBvbmVudHMvd29ya291dC1mb3JtL0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGhlYWx0aFxcd29ya291dHNcXGNvbXBvbmVudHNcXHdvcmtvdXQtZm9ybVxcd29ya291dC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvd29ya291dHMvY29tcG9uZW50cy93b3Jrb3V0LWZvcm0vd29ya291dC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDRUY7O0FEQUE7O0VBR0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNJRjs7QURIRTtFQUNFLG1CQUFBO0FDS0o7O0FEQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBRERFO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURGSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDSU47O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURGSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0lOOztBREhNO0VBQ0UsU0FBQTtBQ0tSOztBREZJO0VBQ0Usa0JBQUE7QUNJTjs7QURERTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNHSjs7QURGSTtFQUNFLGtCQUFBO0FDSU47O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNHSjs7QURERTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FERkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0lOOztBRERFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ0dKOztBREZJO0VBQ0UsU0FBQTtFQUNBLHFCQUFBO0FDSU47O0FESE07RUFDRSxnQkFBQTtBQ0tSOztBRERFO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBREZJO0VBQ0UscUJBQUE7QUNJTjs7QURGSTtFQUNFLFdBQUE7QUNJTjs7QURERTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDR0o7O0FERkk7RUFDRSxtQkFBQTtBQ0lOOztBREZJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDSU47O0FERkk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUNJTjs7QURITTtFQUNFLGdCQUFBO0FDS1I7O0FERkk7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FDSU47O0FESE07RUFDRSxtQkFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbXBvbmVudHMvd29ya291dC1mb3JtL3dvcmtvdXQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiVidXR0b24ge1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4uY29uZmlybSxcclxuLmNhbmNlbCB7XHJcbiAgQGV4dGVuZCAlYnV0dG9uO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDAgNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiAjYTk0NDQyO1xyXG4gIGJhY2tncm91bmQ6ICNmMmRlZGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0YjNiMztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcbn1cclxuLmNvbmZpcm0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNkNzNhNDk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2Q3M2E0OSwgMyUpO1xyXG4gIH1cclxufVxyXG5cclxuLndvcmtvdXQtZm9ybSB7XHJcbiAgJl9fbmFtZSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDFkZWViO1xyXG4gIH1cclxuICAmX19kZXRhaWxzIHtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZGVlYjtcclxuICB9XHJcbiAgJl9fc3VidGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2RlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgID4gZGl2IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FuY2VsIHtcclxuICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAmX19zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgbGFiZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjN2E5OGI1O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX2ZpZWxkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbGFiZWwge1xyXG4gICAgICBmbGV4OiAxIDA7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzU0NWU2ZjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWRlZWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6ICNhNWI5Y2U7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICNhYWE7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICMzOWExZTc7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMThweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oIzM5YTFlNywgNSUpO1xyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG4gICAgJi0tY2FuY2VsIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgY29sb3I6ICM1NDVlNmY7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtLWRlbGV0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkNzNhNDk7XHJcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigjZDczYTQ5LCA1JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmNvbmZpcm0sXG4uY2FuY2VsIHtcbiAgb3V0bGluZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29uZmlybSxcbi5jYW5jZWwge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luOiAwIDAgMCA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNhOTQ0NDI7XG4gIGJhY2tncm91bmQ6ICNmMmRlZGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGIzYjM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG5cbi5jb25maXJtIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNkNzNhNDk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uY29uZmlybTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkNDJkM2Q7XG59XG5cbi53b3Jrb3V0LWZvcm1fX25hbWUge1xuICBwYWRkaW5nOiAzMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZGVlYjtcbn1cbi53b3Jrb3V0LWZvcm1fX2RldGFpbHMge1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QxZGVlYjtcbn1cbi53b3Jrb3V0LWZvcm1fX3N1YnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53b3Jrb3V0LWZvcm1fX3N1YnRpdGxlIGgzIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi53b3Jrb3V0LWZvcm1fX2RlbGV0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud29ya291dC1mb3JtX19kZWxldGUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndvcmtvdXQtZm9ybV9fZGVsZXRlID4gZGl2IHAge1xuICBtYXJnaW46IDA7XG59XG4ud29ya291dC1mb3JtX19kZWxldGUgLmNhbmNlbCB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbn1cbi53b3Jrb3V0LWZvcm1fX3N1Ym1pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMzBweDtcbn1cbi53b3Jrb3V0LWZvcm0gaDEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLndvcmtvdXQtZm9ybSBoMSBpbWcge1xuICBtYXJnaW46IDAgMTBweCAwIDA7XG59XG4ud29ya291dC1mb3JtIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLndvcmtvdXQtZm9ybSBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG4ud29ya291dC1mb3JtIGxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzdhOThiNTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLndvcmtvdXQtZm9ybV9fZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud29ya291dC1mb3JtX19maWVsZHMgbGFiZWwge1xuICBmbGV4OiAxIDA7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcbn1cbi53b3Jrb3V0LWZvcm1fX2ZpZWxkcyBsYWJlbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cbi53b3Jrb3V0LWZvcm0gaW5wdXQge1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICM1NDVlNmY7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZGVlYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi53b3Jrb3V0LWZvcm0gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNhNWI5Y2U7XG59XG4ud29ya291dC1mb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhYWE7XG59XG4ud29ya291dC1mb3JtIC5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMzlhMWU3O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAxOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ud29ya291dC1mb3JtIC5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMjI5NmU0O1xufVxuLndvcmtvdXQtZm9ybSAuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC40O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLndvcmtvdXQtZm9ybSAuYnV0dG9uLS1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzU0NWU2Zjtcbn1cbi53b3Jrb3V0LWZvcm0gLmJ1dHRvbi0tY2FuY2VsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi53b3Jrb3V0LWZvcm0gLmJ1dHRvbi0tZGVsZXRlIHtcbiAgYmFja2dyb3VuZDogI2Q3M2E0OTtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi53b3Jrb3V0LWZvcm0gLmJ1dHRvbi0tZGVsZXRlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NlMmEzOTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/health/workouts/components/workout-form/workout-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/health/workouts/components/workout-form/workout-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: WorkoutFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutFormComponent", function() { return WorkoutFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let WorkoutFormComponent = class WorkoutFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggled = false;
        this.exists = false;
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: 'strength',
            strength: this.fb.group({
                reps: 0,
                sets: 0,
                weight: 0
            }),
            endurance: this.fb.group({
                distance: 0,
                duration: 0
            })
        });
    }
    get required() {
        return (this.form.get('name').hasError('required') &&
            this.form.get('name').touched);
    }
    get placeholder() {
        return `e.g. ${this.form.get('type').value === 'strength' ? 'Benchpress' : 'Treadmill'}`;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.workout && this.workout.name) {
            this.exists = true;
            const value = this.workout;
            this.form.patchValue(value);
        }
    }
    createWorkout() {
        if (this.form.valid) {
            this.create.emit(this.form.value);
        }
    }
    updateWorkout() {
        if (this.form.valid) {
            this.update.emit(this.form.value);
        }
    }
    removeWorkout() {
        this.remove.emit(this.form.value);
    }
    toggle() {
        this.toggled = !this.toggled;
    }
};
WorkoutFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WorkoutFormComponent.prototype, "workout", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WorkoutFormComponent.prototype, "create", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WorkoutFormComponent.prototype, "update", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WorkoutFormComponent.prototype, "remove", void 0);
WorkoutFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workout-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-form/workout-form.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-form.component.scss */ "./src/app/health/workouts/components/workout-form/workout-form.component.scss")).default]
    })
], WorkoutFormComponent);



/***/ }),

/***/ "./src/app/health/workouts/components/workout-type/workout-type.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/health/workouts/components/workout-type/workout-type.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".workout-type {\n  display: flex;\n}\n.workout-type__pane {\n  flex: 0 0 30%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n  margin: 0 15px 0 0;\n  background: #f5f9fd;\n  border: 1px solid #d1deeb;\n  border-radius: 3px;\n  transition: all 0.2s ease-in-out;\n}\n.workout-type__pane:hover {\n  background: #e8f1fa;\n}\n.workout-type__pane.active {\n  background: #e8f1fa;\n}\n.workout-type__pane.active img, .workout-type__pane.active p {\n  opacity: 1;\n}\n.workout-type__pane img {\n  opacity: 0.6;\n  margin: 0 25px 0 0;\n  width: 35px;\n}\n.workout-type__pane p {\n  opacity: 0.6;\n  margin: 0;\n  font-size: 15px;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbXBvbmVudHMvd29ya291dC10eXBlL0M6XFxVc2Vyc1xcd29ya1xcRGVza3RvcFxcdGVzdC1hcHAvc3JjXFxhcHBcXGhlYWx0aFxcd29ya291dHNcXGNvbXBvbmVudHNcXHdvcmtvdXQtdHlwZVxcd29ya291dC10eXBlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvd29ya291dHMvY29tcG9uZW50cy93b3Jrb3V0LXR5cGUvd29ya291dC10eXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUNFSjtBRERJO0VBQ0UsbUJBQUE7QUNHTjtBRERJO0VBQ0UsbUJBQUE7QUNHTjtBREZNO0VBQ0UsVUFBQTtBQ0lSO0FEREk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR047QURESTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbXBvbmVudHMvd29ya291dC10eXBlL3dvcmtvdXQtdHlwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3Jrb3V0LXR5cGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJl9fcGFuZSB7XHJcbiAgICBmbGV4OiAwIDAgMzAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW46IDAgMTVweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmOWZkO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QxZGVlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNmNWY5ZmQsIDMlKTtcclxuICAgIH1cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNmNWY5ZmQsIDMlKTtcclxuICAgICAgaW1nLCBwIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBvcGFjaXR5OiAuNjtcclxuICAgICAgbWFyZ2luOiAwIDI1cHggMCAwO1xyXG4gICAgICB3aWR0aDogMzVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBvcGFjaXR5OiAuNjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi53b3Jrb3V0LXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLndvcmtvdXQtdHlwZV9fcGFuZSB7XG4gIGZsZXg6IDAgMCAzMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgYmFja2dyb3VuZDogI2Y1ZjlmZDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QxZGVlYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi53b3Jrb3V0LXR5cGVfX3BhbmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZThmMWZhO1xufVxuLndvcmtvdXQtdHlwZV9fcGFuZS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZThmMWZhO1xufVxuLndvcmtvdXQtdHlwZV9fcGFuZS5hY3RpdmUgaW1nLCAud29ya291dC10eXBlX19wYW5lLmFjdGl2ZSBwIHtcbiAgb3BhY2l0eTogMTtcbn1cbi53b3Jrb3V0LXR5cGVfX3BhbmUgaW1nIHtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDAgMjVweCAwIDA7XG4gIHdpZHRoOiAzNXB4O1xufVxuLndvcmtvdXQtdHlwZV9fcGFuZSBwIHtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/health/workouts/components/workout-type/workout-type.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/health/workouts/components/workout-type/workout-type.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TYPE_VALUE_ACCESSOR, WorkoutTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_VALUE_ACCESSOR", function() { return TYPE_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutTypeComponent", function() { return WorkoutTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const TYPE_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => WorkoutTypeComponent),
    multi: true
};
let WorkoutTypeComponent = class WorkoutTypeComponent {
    constructor() {
        this.selectors = ['strength', 'endurance'];
    }
    ngOnInit() {
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    setSelected(value) {
        this.value = value;
        this.onModelChange(value);
        this.onTouch();
    }
};
WorkoutTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workout-type',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/components/workout-type/workout-type.component.html")).default,
        providers: [TYPE_VALUE_ACCESSOR],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout-type.component.scss */ "./src/app/health/workouts/components/workout-type/workout-type.component.scss")).default]
    })
], WorkoutTypeComponent);



/***/ }),

/***/ "./src/app/health/workouts/containers/workout/workout.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/health/workouts/containers/workout/workout.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  margin: 50px 0;\n}\n\n.workout {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #c1cedb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.workout h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.workout h1 img {\n  margin: 0 10px 0 0;\n  width: 24px;\n  height: 24px;\n}\n\n.workout__title {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  background: #f6fafd;\n  border-bottom: 1px solid #c1cedb;\n}\n\n.message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 30px;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n.message img {\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbnRhaW5lcnMvd29ya291dC9DOlxcVXNlcnNcXHdvcmtcXERlc2t0b3BcXHRlc3QtYXBwL3NyY1xcYXBwXFxoZWFsdGhcXHdvcmtvdXRzXFxjb250YWluZXJzXFx3b3Jrb3V0XFx3b3Jrb3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvd29ya291dHMvY29udGFpbmVycy93b3Jrb3V0L3dvcmtvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDR0o7O0FERkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSU47O0FEREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBREFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREZFO0VBQ0Usa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC93b3Jrb3V0cy9jb250YWluZXJzL3dvcmtvdXQvd29ya291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG4ud29ya291dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgfVxyXG59XHJcbi5tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLndvcmtvdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWNlZGI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53b3Jrb3V0IGgxIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi53b3Jrb3V0IGgxIGltZyB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi53b3Jrb3V0X190aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJhY2tncm91bmQ6ICNmNmZhZmQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjZWRiO1xufVxuXG4ubWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1lc3NhZ2UgaW1nIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/health/workouts/containers/workout/workout.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/health/workouts/containers/workout/workout.component.ts ***!
  \*************************************************************************/
/*! exports provided: WorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutComponent", function() { return WorkoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/workouts/workouts.service */ "./src/app/health/shared/services/workouts/workouts.service.ts");





let WorkoutComponent = class WorkoutComponent {
    constructor(workoutsService, router, route) {
        this.workoutsService = workoutsService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.subscription = this.workoutsService.workouts$.subscribe();
        this.workout$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(param => this.workoutsService.getWorkout(param.id)));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    addWorkout(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.workoutsService.addWorkout(event);
            this.backToWorkouts();
        });
    }
    updateWorkout(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const key = this.route.snapshot.params.id;
            yield this.workoutsService.updateWorkout(key, event);
            this.backToWorkouts();
        });
    }
    removeWorkout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const key = this.route.snapshot.params.id;
            yield this.workoutsService.removeWorkout(key);
            this.backToWorkouts();
        });
    }
    backToWorkouts() {
        this.router.navigate(['workouts']);
    }
};
WorkoutComponent.ctorParameters = () => [
    { type: _shared_services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_4__["WorkoutsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
WorkoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workout/workout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workout.component.scss */ "./src/app/health/workouts/containers/workout/workout.component.scss")).default]
    })
], WorkoutComponent);



/***/ }),

/***/ "./src/app/health/workouts/containers/workouts/workouts.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/health/workouts/containers/workouts/workouts.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  margin: 50px 0;\n}\n\n.workouts {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);\n  border: 1px solid #c1cedb;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.workouts h1 {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n}\n\n.workouts h1 img {\n  margin: 0 10px 0 0;\n  width: 24px;\n  height: 24px;\n}\n\n.workouts__title {\n  display: flex;\n  align-items: center;\n  padding: 30px;\n  background: #f6fafd;\n  border-bottom: 1px solid #c1cedb;\n}\n\n.btn__add {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  background: #97c747;\n  border-radius: 50px;\n  padding: 6px 20px 6px 15px;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.btn__add img {\n  width: 20px;\n  margin: 0 6px 0 0;\n}\n\n.message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 30px;\n  font-size: 22px;\n  font-weight: 500;\n}\n\n.message img {\n  margin: 0 10px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL3dvcmtvdXRzL2NvbnRhaW5lcnMvd29ya291dHMvQzpcXFVzZXJzXFx3b3JrXFxEZXNrdG9wXFx0ZXN0LWFwcC9zcmNcXGFwcFxcaGVhbHRoXFx3b3Jrb3V0c1xcY29udGFpbmVyc1xcd29ya291dHNcXHdvcmtvdXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFsdGgvd29ya291dHMvY29udGFpbmVycy93b3Jrb3V0cy93b3Jrb3V0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURERTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNHSjs7QURGSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNJTjs7QURERTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDR0o7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0VKOztBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRERFO0VBQ0Usa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC93b3Jrb3V0cy9jb250YWluZXJzL3dvcmtvdXRzL3dvcmtvdXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogNTBweCAwO1xyXG59XHJcbi53b3Jrb3V0cyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IHJnYmEoMCwwLDAsLjEpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaDEge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmX190aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWNlZGI7XHJcbiAgfVxyXG59XHJcbi5idG5fX2FkZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM5N2M3NDc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiA2cHggMjBweCA2cHggMTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQ6IHtcclxuICAgIHdlaWdodDogNjAwO1xyXG4gICAgc2l6ZTogMTNweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDZweCAwIDA7XHJcbiAgfVxyXG59XHJcbi5tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDEwcHggMCAwO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLndvcmtvdXRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzFjZWRiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud29ya291dHMgaDEge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLndvcmtvdXRzIGgxIGltZyB7XG4gIG1hcmdpbjogMCAxMHB4IDAgMDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi53b3Jrb3V0c19fdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjZmYWZkO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxY2VkYjtcbn1cblxuLmJ0bl9fYWRkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM5N2M3NDc7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmc6IDZweCAyMHB4IDZweCAxNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uYnRuX19hZGQgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbjogMCA2cHggMCAwO1xufVxuXG4ubWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1lc3NhZ2UgaW1nIHtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/health/workouts/containers/workouts/workouts.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/health/workouts/containers/workouts/workouts.component.ts ***!
  \***************************************************************************/
/*! exports provided: WorkoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsComponent", function() { return WorkoutsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store */ "./src/store.ts");
/* harmony import */ var _shared_services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/workouts/workouts.service */ "./src/app/health/shared/services/workouts/workouts.service.ts");




let WorkoutsComponent = class WorkoutsComponent {
    constructor(workoutService, store) {
        this.workoutService = workoutService;
        this.store = store;
    }
    ngOnInit() {
        this.workouts$ = this.store.select('workouts');
        this.subscription = this.workoutService.workouts$.subscribe();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    removeWorkout(e) {
        this.workoutService.removeWorkout(e.$key);
    }
};
WorkoutsComponent.ctorParameters = () => [
    { type: _shared_services_workouts_workouts_service__WEBPACK_IMPORTED_MODULE_3__["WorkoutsService"] },
    { type: store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
WorkoutsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workouts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/workouts/containers/workouts/workouts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workouts.component.scss */ "./src/app/health/workouts/containers/workouts/workouts.component.scss")).default]
    })
], WorkoutsComponent);



/***/ }),

/***/ "./src/app/health/workouts/workouts.module.ts":
/*!****************************************************!*\
  !*** ./src/app/health/workouts/workouts.module.ts ***!
  \****************************************************/
/*! exports provided: WorkoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsModule", function() { return WorkoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/health/shared/shared.module.ts");
/* harmony import */ var _containers_workout_workout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/workout/workout.component */ "./src/app/health/workouts/containers/workout/workout.component.ts");
/* harmony import */ var _containers_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/workouts/workouts.component */ "./src/app/health/workouts/containers/workouts/workouts.component.ts");
/* harmony import */ var _workouts_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workouts.routing-module */ "./src/app/health/workouts/workouts.routing-module.ts");
/* harmony import */ var _components_workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/workout-form/workout-form.component */ "./src/app/health/workouts/components/workout-form/workout-form.component.ts");
/* harmony import */ var _components_workout_type_workout_type_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/workout-type/workout-type.component */ "./src/app/health/workouts/components/workout-type/workout-type.component.ts");










let WorkoutsModule = class WorkoutsModule {
};
WorkoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _containers_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_6__["WorkoutsComponent"],
            _containers_workout_workout_component__WEBPACK_IMPORTED_MODULE_5__["WorkoutComponent"],
            _components_workout_form_workout_form_component__WEBPACK_IMPORTED_MODULE_8__["WorkoutFormComponent"],
            _components_workout_type_workout_type_component__WEBPACK_IMPORTED_MODULE_9__["WorkoutTypeComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _workouts_routing_module__WEBPACK_IMPORTED_MODULE_7__["WorkoutsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], WorkoutsModule);



/***/ }),

/***/ "./src/app/health/workouts/workouts.routing-module.ts":
/*!************************************************************!*\
  !*** ./src/app/health/workouts/workouts.routing-module.ts ***!
  \************************************************************/
/*! exports provided: WorkoutsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutsRoutingModule", function() { return WorkoutsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/workouts/workouts.component */ "./src/app/health/workouts/containers/workouts/workouts.component.ts");
/* harmony import */ var _containers_workout_workout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/workout/workout.component */ "./src/app/health/workouts/containers/workout/workout.component.ts");





const ROUTES = [
    { path: '', component: _containers_workouts_workouts_component__WEBPACK_IMPORTED_MODULE_3__["WorkoutsComponent"] },
    { path: 'new', component: _containers_workout_workout_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutComponent"] },
    { path: ':id', component: _containers_workout_workout_component__WEBPACK_IMPORTED_MODULE_4__["WorkoutComponent"] },
];
let WorkoutsRoutingModule = class WorkoutsRoutingModule {
};
WorkoutsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WorkoutsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=workouts-workouts-module-es2015.js.map