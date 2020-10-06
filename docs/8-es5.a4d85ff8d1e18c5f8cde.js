function _createForOfIteratorHelper(n,l){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=_unsupportedIterableToArray(n))||l&&n&&"number"==typeof n.length){e&&(n=e);var t=0,u=function(){};return{s:u,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return r=n.done,n},e:function(n){a=!0,o=n},f:function(){try{r||null==e.return||e.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(n,l){if(n){if("string"==typeof n)return _arrayLikeToArray(n,l);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,l):void 0}}function _arrayLikeToArray(n,l){(null==l||l>n.length)&&(l=n.length);for(var e=0,t=new Array(l);e<l;e++)t[e]=n[e];return t}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"c+rg":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),r=e("n32P"),a=e("SDrr"),i=e("SVse"),s=e("iInd"),c=function(){function n(l,e){_classCallCheck(this,n),this.mealsService=l,this.store=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.meals$=this.store.select("meals"),this.subscription=this.mealsService.meals$.subscribe()}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"removeMeal",value:function(n){this.mealsService.removeMeal(n.$key)}}]),n}(),b=e("o3+j"),g=e("Ogvq"),d=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.meals[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.meals[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meals[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meals__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.btn__add[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;background:#97c747;border-radius:50px;padding:6px 20px 6px 15px;text-transform:uppercase;font-weight:600;font-size:13px}.btn__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin:0 6px 0 0}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function f(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/face.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" No meals, add a new meal to start "]))],null,null)}function m(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-list-item",[],null,[[null,"remove"]],(function(n,l,e){var t=!0;return"remove"===l&&(t=!1!==n.component.removeMeal(e)&&t),t}),r.b,r.a)),t.pb(1,114688,null,0,a.a,[],{item:[0,"item"]},{remove:"remove"})],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function p(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,f)),t.pb(2,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,null,1,null,m)),t.pb(4,278528,null,0,i.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,!l.context.ngIf.length),n(l,4,0,l.context.ngIf)}),null)}function h(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/loading.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Fetching meals... "]))],null,null)}function C(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,13,"div",[["class","meals"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,8,"div",[["class","meals__title"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/food.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Your Meals "])),(n()(),t.qb(5,0,null,null,4,"a",[["class","btn__add"],["href",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t.pb(6,671744,null,0,s.n,[s.k,s.a,i.i],{routerLink:[0,"routerLink"]},null),t.Db(7,1),(n()(),t.qb(8,0,null,null,0,"img",[["alt",""],["src","assets/img/add-white.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" New Meal "])),(n()(),t.fb(16777216,null,null,2,null,p)),t.pb(11,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,i.b,[t.h]),(n()(),t.fb(0,[["loading",2]],null,0,null,h))],(function(n,l){var e=l.component,u=n(l,7,0,"../meals/new");n(l,6,0,u),n(l,11,0,t.Kb(l,11,0,t.Cb(l,12).transform(e.meals$)),t.Cb(l,13))}),(function(n,l){n(l,5,0,t.Cb(l,6).target,t.Cb(l,6).href)}))}var v=t.mb("app-meals",c,(function(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-meals",[],null,null,null,C,d)),t.pb(1,245760,null,0,c,[b.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),_=e("s7LF"),x=function(){function n(l){_classCallCheck(this,n),this.fb=l,this.create=new t.m,this.update=new t.m,this.remove=new t.m,this.toggled=!1,this.exists=!1,this.form=this.fb.group({name:["",_.p.required],ingredients:this.fb.array([""])})}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ngOnChanges",value:function(n){if(this.meal&&this.meal.name){this.exists=!0,this.ingredients.clear();var l=this.meal;if(this.form.patchValue(l),l.ingredients){var e,t=_createForOfIteratorHelper(l.ingredients);try{for(t.s();!(e=t.n()).done;){var u=e.value;this.ingredients.push(new _.f(u))}}catch(o){t.e(o)}finally{t.f()}}}}},{key:"createMeal",value:function(){this.form.valid&&this.create.emit(this.form.value)}},{key:"updateMeal",value:function(){this.form.valid&&this.update.emit(this.form.value)}},{key:"removeMeal",value:function(){this.remove.emit(this.form.value)}},{key:"addIngredient",value:function(){this.ingredients.push(new _.f(""))}},{key:"removeIngredient",value:function(n){this.ingredients.removeAt(n)}},{key:"toggle",value:function(){this.toggled=!this.toggled}},{key:"ingredients",get:function(){return this.form.get("ingredients")}},{key:"required",get:function(){return this.form.get("name").hasError("required")&&this.form.get("name").touched}}]),n}(),k=t.ob({encapsulation:0,styles:[[".cancel[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%]{outline:0;cursor:pointer;border:0;background:0 0;padding:5px 10px;margin:0 0 0 5px;font-size:14px}.error[_ngcontent-%COMP%]{color:#a94442;background:#f2dede;border:1px solid #e4b3b3;border-radius:2px;padding:8px;font-size:14px;font-weight:400;margin:10px 0 0}.confirm[_ngcontent-%COMP%]{color:#fff;background:#d73a49;border-radius:3px;transition:all .2s ease-in-out}.confirm[_ngcontent-%COMP%]:hover{background:#d42d3d}.meal-form__name[_ngcontent-%COMP%]{padding:30px;flex-direction:column;border-bottom:1px solid #d1deeb}.meal-form__food[_ngcontent-%COMP%]{padding:30px;border-bottom:1px solid #d1deeb}.meal-form__subtitle[_ngcontent-%COMP%]{display:flex;align-items:center}.meal-form__subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0;flex-grow:1}.meal-form__delete[_ngcontent-%COMP%], .meal-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.meal-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.meal-form__delete[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{margin:0 20px 0 0}.meal-form__add[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;border:0;outline:0;cursor:pointer;background:#97c747;border-radius:50px;padding:6px 20px 6px 15px;text-transform:uppercase;font-weight:600;font-size:13px}.meal-form__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin:0 6px 0 0}.meal-form__remove[_ngcontent-%COMP%]{cursor:pointer;background-image:url(cross.f5ebdff99def6bd5b31f.svg);background-size:15px 15px;background-repeat:no-repeat;background-position:center center;background-color:#eff4f9;width:35px;height:38px;display:block;position:absolute;top:1px;right:1px;border-left:1px solid #d1deeb;transition:all .2s ease-in-out}.meal-form__remove[_ngcontent-%COMP%]:hover{background-color:#dce7f2}.meal-form__submit[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:30px}.meal-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meal-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meal-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.meal-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;display:block;margin:0 0 10px}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:0;font-size:16px;padding:10px 40px 10px 15px;margin:0;width:100%;background:#fff;color:#545e6f;flex-grow:1;border:1px solid #d1deeb;border-radius:3px;transition:all .2s ease-in-out}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#a5b9ce}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#aaa}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{cursor:pointer;outline:0;border:0;border-radius:2px;background:#39a1e7;color:#fff;padding:10px 18px;font-size:16px;font-weight:600;transition:all .2s ease-in-out;display:inline-block}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:#2296e4}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.meal-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]{background:#fff;color:#545e6f}.meal-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]:hover{background:#fff}.meal-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]{background:#d73a49;align-self:flex-start}.meal-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]:hover{background:#ce2a39}"]],data:{}});function M(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Meal name is required "]))],null,null)}function y(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,7,"label",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,5,"input",[["placeholder","e.g. Eggs"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0;return"input"===l&&(u=!1!==t.Cb(n,2)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.Cb(n,2).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Cb(n,2)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Cb(n,2)._compositionEnd(e.target.value)&&u),u}),null,null)),t.pb(2,16384,null,0,_.c,[t.B,t.k,[2,_.a]],null,null),t.Gb(1024,null,_.j,(function(n){return[n]}),[_.c]),t.pb(4,671744,null,0,_.g,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.s]],{name:[0,"name"]},null),t.Gb(2048,null,_.k,null,[_.g]),t.pb(6,16384,null,0,_.l,[[4,_.k]],null,null),(n()(),t.qb(7,0,null,null,0,"span",[["class","meal-form__remove"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.removeIngredient(n.context.index)&&t),t}),null,null))],(function(n,l){n(l,4,0,l.context.index)}),(function(n,l){n(l,1,0,t.Cb(l,6).ngClassUntouched,t.Cb(l,6).ngClassTouched,t.Cb(l,6).ngClassPristine,t.Cb(l,6).ngClassDirty,t.Cb(l,6).ngClassValid,t.Cb(l,6).ngClassInvalid,t.Cb(l,6).ngClassPending)}))}function O(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.createMeal()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Create meal "]))],null,null)}function P(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateMeal()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Save "]))],null,null)}function q(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Delete item?"])),(n()(),t.qb(3,0,null,null,1,"button",[["class","confirm"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.removeMeal()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Yes "])),(n()(),t.qb(5,0,null,null,1,"button",[["class","cancel"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggle()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" No "]))],null,null)}function w(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["class","meal-form__delete"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,q)),t.pb(2,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(3,0,null,null,1,"button",[["class","button button--delete"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.toggle()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Delete "]))],(function(n,l){n(l,2,0,l.component.toggled)}),null)}function I(n){return t.Lb(2,[(n()(),t.qb(0,0,null,null,42,"div",[["class","meal-form"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,e){var u=!0;return"submit"===l&&(u=!1!==t.Cb(n,3).onSubmit(e)&&u),"reset"===l&&(u=!1!==t.Cb(n,3).onReset()&&u),u}),null,null)),t.pb(2,16384,null,0,_.t,[],null,null),t.pb(3,540672,null,0,_.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,_.b,null,[_.h]),t.pb(5,16384,null,0,_.m,[[4,_.b]],null,null),(n()(),t.qb(6,0,null,null,11,"div",[["class","meal-form__name"]],null,null,null,null,null)),(n()(),t.qb(7,0,null,null,10,"label",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Meal name"])),(n()(),t.qb(10,0,null,null,5,"input",[["formControlName","name"],["placeholder","e.g. English breakfast"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var u=!0;return"input"===l&&(u=!1!==t.Cb(n,11)._handleInput(e.target.value)&&u),"blur"===l&&(u=!1!==t.Cb(n,11).onTouched()&&u),"compositionstart"===l&&(u=!1!==t.Cb(n,11)._compositionStart()&&u),"compositionend"===l&&(u=!1!==t.Cb(n,11)._compositionEnd(e.target.value)&&u),u}),null,null)),t.pb(11,16384,null,0,_.c,[t.B,t.k,[2,_.a]],null,null),t.Gb(1024,null,_.j,(function(n){return[n]}),[_.c]),t.pb(13,671744,null,0,_.g,[[3,_.b],[8,null],[8,null],[6,_.j],[2,_.s]],{name:[0,"name"]},null),t.Gb(2048,null,_.k,null,[_.g]),t.pb(15,16384,null,0,_.l,[[4,_.k]],null,null),(n()(),t.fb(16777216,null,null,1,null,M)),t.pb(17,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(18,0,null,null,12,"div",[["class","meal-form__food"]],null,null,null,null,null)),(n()(),t.qb(19,0,null,null,5,"div",[["class","meal-form__subtitle"]],null,null,null,null,null)),(n()(),t.qb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Food"])),(n()(),t.qb(22,0,null,null,2,"button",[["class","meal-form__add"],["type","button"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.addIngredient()&&t),t}),null,null)),(n()(),t.qb(23,0,null,null,0,"img",[["alt",""],["src","assets/img/add-white.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Add Food "])),(n()(),t.qb(25,0,null,null,5,"div",[["formArrayName","ingredients"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(26,212992,null,0,_.d,[[3,_.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Gb(2048,null,_.b,null,[_.d]),t.pb(28,16384,null,0,_.m,[[4,_.b]],null,null),(n()(),t.fb(16777216,null,null,1,null,y)),t.pb(30,278528,null,0,i.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.qb(31,0,null,null,11,"div",[["class","meal-form__submit"]],null,null,null,null,null)),(n()(),t.qb(32,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,O)),t.pb(34,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,null,1,null,P)),t.pb(36,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(37,0,null,null,3,"a",[["class","button button--cancel"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t.Cb(n,38).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t.pb(38,671744,null,0,s.n,[s.k,s.a,i.i],{routerLink:[0,"routerLink"]},null),t.Db(39,1),(n()(),t.Jb(-1,null,[" Cancel "])),(n()(),t.fb(16777216,null,null,1,null,w)),t.pb(42,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.form),n(l,13,0,"name"),n(l,17,0,e.required),n(l,26,0,"ingredients"),n(l,30,0,e.ingredients.controls),n(l,34,0,!e.exists),n(l,36,0,e.exists);var t=n(l,39,0,"../");n(l,38,0,t),n(l,42,0,e.exists)}),(function(n,l){n(l,1,0,t.Cb(l,5).ngClassUntouched,t.Cb(l,5).ngClassTouched,t.Cb(l,5).ngClassPristine,t.Cb(l,5).ngClassDirty,t.Cb(l,5).ngClassValid,t.Cb(l,5).ngClassInvalid,t.Cb(l,5).ngClassPending),n(l,10,0,t.Cb(l,15).ngClassUntouched,t.Cb(l,15).ngClassTouched,t.Cb(l,15).ngClassPristine,t.Cb(l,15).ngClassDirty,t.Cb(l,15).ngClassValid,t.Cb(l,15).ngClassInvalid,t.Cb(l,15).ngClassPending),n(l,25,0,t.Cb(l,28).ngClassUntouched,t.Cb(l,28).ngClassTouched,t.Cb(l,28).ngClassPristine,t.Cb(l,28).ngClassDirty,t.Cb(l,28).ngClassValid,t.Cb(l,28).ngClassInvalid,t.Cb(l,28).ngClassPending),n(l,37,0,t.Cb(l,38).target,t.Cb(l,38).href)}))}var J=e("mrSG"),A=e("eIep"),L=function(){function n(l,e,t){_classCallCheck(this,n),this.mealsService=l,this.router=e,this.route=t}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.subscription=this.mealsService.meals$.subscribe(),this.meal$=this.route.params.pipe(Object(A.a)((function(l){return n.mealsService.getMeal(l.id)})))}},{key:"ngOnDestroy",value:function(){this.subscription.unsubscribe()}},{key:"addMeal",value:function(n){return J.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.mealsService.addMeal(n);case 2:this.backToMeals();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"updateMeal",value:function(n){return J.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var e;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e=this.route.snapshot.params.id,l.next=3,this.mealsService.updateMeal(e,n);case 3:this.backToMeals();case 4:case"end":return l.stop()}}),l,this)})))}},{key:"removeMeal",value:function(){return J.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=this.route.snapshot.params.id,n.next=3,this.mealsService.removeMeal(l);case 3:this.backToMeals();case 4:case"end":return n.stop()}}),n,this)})))}},{key:"backToMeals",value:function(){this.router.navigate(["meals"])}}]),n}(),S=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.meal[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.meal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meal__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function N(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Jb(1,null,[""," meal"]))],null,(function(n,l){n(l,1,0,l.context.ngIf.name?"Edit":"Create")}))}function j(n){return t.Lb(0,[(n()(),t.Jb(-1,null,["Loading..."]))],null,null)}function E(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"app-meal-form",[],null,[[null,"create"],[null,"update"],[null,"remove"]],(function(n,l,e){var t=!0,u=n.component;return"create"===l&&(t=!1!==u.addMeal(e)&&t),"update"===l&&(t=!1!==u.updateMeal(e)&&t),"remove"===l&&(t=!1!==u.removeMeal()&&t),t}),I,k)),t.pb(2,638976,null,0,x,[_.e],{meal:[0,"meal"]},{create:"create",update:"update",remove:"remove"})],(function(n,l){n(l,2,0,l.context.ngIf)}),null)}function T(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["src","assets/img/loading.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Fetching Meal... "]))],null,null)}function z(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,11,"div",[["class","meal"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,6,"div",[["class","meal__title"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,5,"h1",[],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/food.svg"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,2,null,N)),t.pb(5,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,i.b,[t.h]),(n()(),t.fb(0,[["title",2]],null,0,null,j)),(n()(),t.fb(16777216,null,null,2,null,E)),t.pb(9,16384,null,0,i.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,i.b,[t.h]),(n()(),t.fb(0,[["loading",2]],null,0,null,T))],(function(n,l){var e=l.component;n(l,5,0,t.Kb(l,5,0,t.Cb(l,6).transform(e.meal$)),t.Cb(l,7)),n(l,9,0,t.Kb(l,9,0,t.Cb(l,10).transform(e.meal$)),t.Cb(l,11))}),null)}var F=t.mb("app-meal",L,(function(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-meal",[],null,null,null,z,S)),t.pb(1,245760,null,0,L,[b.a,s.k,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),D=e("PVcy"),$=e("z5t0"),K=e("yA/v"),G=e("1XSQ"),R=function n(){_classCallCheck(this,n)},V=e("gNyd");e.d(l,"MealsModuleNgFactory",(function(){return U}));var U=t.nb(u,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,v,F]],[3,t.j],t.v]),t.Ab(4608,i.m,i.l,[t.s,[2,i.s]]),t.Ab(4608,_.e,_.e,[]),t.Ab(4608,_.r,_.r,[]),t.Ab(4608,D.a,D.a,[K.d,[2,K.c],[2,G.a],t.z,t.x]),t.Ab(1073742336,i.c,i.c,[]),t.Ab(1073742336,_.q,_.q,[]),t.Ab(1073742336,_.o,_.o,[]),t.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),t.Ab(1073742336,R,R,[]),t.Ab(1073742336,$.a,$.a,[]),t.Ab(1073742336,V.a,V.a,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,s.i,(function(){return[[{path:"",component:c},{path:"new",component:L},{path:":id",component:L}]]}),[])])}))}}]);