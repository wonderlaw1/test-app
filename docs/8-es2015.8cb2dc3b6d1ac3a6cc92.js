(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"c+rg":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),i=e("n32P"),a=e("SDrr"),r=e("SVse"),s=e("iInd");class c{constructor(l,n){this.mealsService=l,this.store=n}ngOnInit(){this.meals$=this.store.select("meals"),this.subscription=this.mealsService.meals$.subscribe()}ngOnDestroy(){this.subscription.unsubscribe()}removeMeal(l){this.mealsService.removeMeal(l.$key)}}var g=e("o3+j"),b=e("Ogvq"),d=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.meals[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.meals[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meals[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meals__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.btn__add[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;background:#97c747;border-radius:50px;padding:6px 20px 6px 15px;text-transform:uppercase;font-weight:600;font-size:13px}.btn__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin:0 6px 0 0}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/face.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" No meals, add a new meal to start "]))],null,null)}function f(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-list-item",[],null,[[null,"remove"]],(function(l,n,e){var t=!0;return"remove"===n&&(t=!1!==l.component.removeMeal(e)&&t),t}),i.b,i.a)),t.pb(1,114688,null,0,a.a,[],{item:[0,"item"]},{remove:"remove"})],(function(l,n){l(n,1,0,n.context.$implicit)}),null)}function p(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,m)),t.pb(2,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,f)),t.pb(4,278528,null,0,r.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,!n.context.ngIf.length),l(n,4,0,n.context.ngIf)}),null)}function C(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/loading.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Fetching meals... "]))],null,null)}function h(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,13,"div",[["class","meals"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","meals__title"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/food.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Your Meals "])),(l()(),t.qb(5,0,null,null,4,"a",[["class","btn__add"],["href",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t.pb(6,671744,null,0,s.n,[s.k,s.a,r.i],{routerLink:[0,"routerLink"]},null),t.Db(7,1),(l()(),t.qb(8,0,null,null,0,"img",[["alt",""],["src","assets/img/add-white.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" New Meal "])),(l()(),t.fb(16777216,null,null,2,null,p)),t.pb(11,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,r.b,[t.h]),(l()(),t.fb(0,[["loading",2]],null,0,null,C))],(function(l,n){var e=n.component,u=l(n,7,0,"../meals/new");l(n,6,0,u),l(n,11,0,t.Kb(n,11,0,t.Cb(n,12).transform(e.meals$)),t.Cb(n,13))}),(function(l,n){l(n,5,0,t.Cb(n,6).target,t.Cb(n,6).href)}))}function _(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-meals",[],null,null,null,h,d)),t.pb(1,245760,null,0,c,[g.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.mb("app-meals",c,_,{},{},[]),x=e("s7LF");class M{constructor(l){this.fb=l,this.create=new t.m,this.update=new t.m,this.remove=new t.m,this.toggled=!1,this.exists=!1,this.form=this.fb.group({name:["",x.p.required],ingredients:this.fb.array([""])})}get ingredients(){return this.form.get("ingredients")}get required(){return this.form.get("name").hasError("required")&&this.form.get("name").touched}ngOnInit(){}ngOnChanges(l){if(this.meal&&this.meal.name){this.exists=!0,this.ingredients.clear();const l=this.meal;if(this.form.patchValue(l),l.ingredients)for(const n of l.ingredients)this.ingredients.push(new x.f(n))}}createMeal(){this.form.valid&&this.create.emit(this.form.value)}updateMeal(){this.form.valid&&this.update.emit(this.form.value)}removeMeal(){this.remove.emit(this.form.value)}addIngredient(){this.ingredients.push(new x.f(""))}removeIngredient(l){this.ingredients.removeAt(l)}toggle(){this.toggled=!this.toggled}}var O=t.ob({encapsulation:0,styles:[[".cancel[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%]{outline:0;cursor:pointer;border:0;background:0 0;padding:5px 10px;margin:0 0 0 5px;font-size:14px}.error[_ngcontent-%COMP%]{color:#a94442;background:#f2dede;border:1px solid #e4b3b3;border-radius:2px;padding:8px;font-size:14px;font-weight:400;margin:10px 0 0}.confirm[_ngcontent-%COMP%]{color:#fff;background:#d73a49;border-radius:3px;transition:all .2s ease-in-out}.confirm[_ngcontent-%COMP%]:hover{background:#d42d3d}.meal-form__name[_ngcontent-%COMP%]{padding:30px;flex-direction:column;border-bottom:1px solid #d1deeb}.meal-form__food[_ngcontent-%COMP%]{padding:30px;border-bottom:1px solid #d1deeb}.meal-form__subtitle[_ngcontent-%COMP%]{display:flex;align-items:center}.meal-form__subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0;flex-grow:1}.meal-form__delete[_ngcontent-%COMP%], .meal-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.meal-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.meal-form__delete[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{margin:0 20px 0 0}.meal-form__add[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;border:0;outline:0;cursor:pointer;background:#97c747;border-radius:50px;padding:6px 20px 6px 15px;text-transform:uppercase;font-weight:600;font-size:13px}.meal-form__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin:0 6px 0 0}.meal-form__remove[_ngcontent-%COMP%]{cursor:pointer;background-image:url(cross.f5ebdff99def6bd5b31f.svg);background-size:15px 15px;background-repeat:no-repeat;background-position:center center;background-color:#eff4f9;width:35px;height:38px;display:block;position:absolute;top:1px;right:1px;border-left:1px solid #d1deeb;transition:all .2s ease-in-out}.meal-form__remove[_ngcontent-%COMP%]:hover{background-color:#dce7f2}.meal-form__submit[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:30px}.meal-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meal-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meal-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.meal-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;display:block;margin:0 0 10px}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:0;font-size:16px;padding:10px 40px 10px 15px;margin:0;width:100%;background:#fff;color:#545e6f;flex-grow:1;border:1px solid #d1deeb;border-radius:3px;transition:all .2s ease-in-out}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#a5b9ce}.meal-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#aaa}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{cursor:pointer;outline:0;border:0;border-radius:2px;background:#39a1e7;color:#fff;padding:10px 18px;font-size:16px;font-weight:600;transition:all .2s ease-in-out;display:inline-block}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:#2296e4}.meal-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.meal-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]{background:#fff;color:#545e6f}.meal-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]:hover{background:#fff}.meal-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]{background:#d73a49;align-self:flex-start}.meal-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]:hover{background:#ce2a39}"]],data:{}});function P(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Meal name is required "]))],null,null)}function k(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,7,"label",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,5,"input",[["placeholder","e.g. Eggs"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var u=!0;return"input"===n&&(u=!1!==t.Cb(l,2)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.Cb(l,2).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Cb(l,2)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Cb(l,2)._compositionEnd(e.target.value)&&u),u}),null,null)),t.pb(2,16384,null,0,x.c,[t.B,t.k,[2,x.a]],null,null),t.Gb(1024,null,x.j,(function(l){return[l]}),[x.c]),t.pb(4,671744,null,0,x.g,[[3,x.b],[8,null],[8,null],[6,x.j],[2,x.s]],{name:[0,"name"]},null),t.Gb(2048,null,x.k,null,[x.g]),t.pb(6,16384,null,0,x.l,[[4,x.k]],null,null),(l()(),t.qb(7,0,null,null,0,"span",[["class","meal-form__remove"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.removeIngredient(l.context.index)&&t),t}),null,null))],(function(l,n){l(n,4,0,n.context.index)}),(function(l,n){l(n,1,0,t.Cb(n,6).ngClassUntouched,t.Cb(n,6).ngClassTouched,t.Cb(n,6).ngClassPristine,t.Cb(n,6).ngClassDirty,t.Cb(n,6).ngClassValid,t.Cb(n,6).ngClassInvalid,t.Cb(n,6).ngClassPending)}))}function q(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.createMeal()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" Create meal "]))],null,null)}function y(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateMeal()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" Save "]))],null,null)}function w(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Delete item?"])),(l()(),t.qb(3,0,null,null,1,"button",[["class","confirm"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.removeMeal()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" Yes "])),(l()(),t.qb(5,0,null,null,1,"button",[["class","cancel"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggle()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" No "]))],null,null)}function I(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,4,"div",[["class","meal-form__delete"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,w)),t.pb(2,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(3,0,null,null,1,"button",[["class","button button--delete"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggle()&&t),t}),null,null)),(l()(),t.Jb(-1,null,[" Delete "]))],(function(l,n){l(n,2,0,n.component.toggled)}),null)}function J(l){return t.Lb(2,[(l()(),t.qb(0,0,null,null,42,"div",[["class","meal-form"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,e){var u=!0;return"submit"===n&&(u=!1!==t.Cb(l,3).onSubmit(e)&&u),"reset"===n&&(u=!1!==t.Cb(l,3).onReset()&&u),u}),null,null)),t.pb(2,16384,null,0,x.t,[],null,null),t.pb(3,540672,null,0,x.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,x.b,null,[x.h]),t.pb(5,16384,null,0,x.m,[[4,x.b]],null,null),(l()(),t.qb(6,0,null,null,11,"div",[["class","meal-form__name"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,10,"label",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Meal name"])),(l()(),t.qb(10,0,null,null,5,"input",[["formControlName","name"],["placeholder","e.g. English breakfast"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,e){var u=!0;return"input"===n&&(u=!1!==t.Cb(l,11)._handleInput(e.target.value)&&u),"blur"===n&&(u=!1!==t.Cb(l,11).onTouched()&&u),"compositionstart"===n&&(u=!1!==t.Cb(l,11)._compositionStart()&&u),"compositionend"===n&&(u=!1!==t.Cb(l,11)._compositionEnd(e.target.value)&&u),u}),null,null)),t.pb(11,16384,null,0,x.c,[t.B,t.k,[2,x.a]],null,null),t.Gb(1024,null,x.j,(function(l){return[l]}),[x.c]),t.pb(13,671744,null,0,x.g,[[3,x.b],[8,null],[8,null],[6,x.j],[2,x.s]],{name:[0,"name"]},null),t.Gb(2048,null,x.k,null,[x.g]),t.pb(15,16384,null,0,x.l,[[4,x.k]],null,null),(l()(),t.fb(16777216,null,null,1,null,P)),t.pb(17,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(18,0,null,null,12,"div",[["class","meal-form__food"]],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,5,"div",[["class","meal-form__subtitle"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Food"])),(l()(),t.qb(22,0,null,null,2,"button",[["class","meal-form__add"],["type","button"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addIngredient()&&t),t}),null,null)),(l()(),t.qb(23,0,null,null,0,"img",[["alt",""],["src","assets/img/add-white.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Add Food "])),(l()(),t.qb(25,0,null,null,5,"div",[["formArrayName","ingredients"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(26,212992,null,0,x.d,[[3,x.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Gb(2048,null,x.b,null,[x.d]),t.pb(28,16384,null,0,x.m,[[4,x.b]],null,null),(l()(),t.fb(16777216,null,null,1,null,k)),t.pb(30,278528,null,0,r.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(31,0,null,null,11,"div",[["class","meal-form__submit"]],null,null,null,null,null)),(l()(),t.qb(32,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,q)),t.pb(34,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,y)),t.pb(36,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(37,0,null,null,3,"a",[["class","button button--cancel"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,38).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u}),null,null)),t.pb(38,671744,null,0,s.n,[s.k,s.a,r.i],{routerLink:[0,"routerLink"]},null),t.Db(39,1),(l()(),t.Jb(-1,null,[" Cancel "])),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(42,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,e.form),l(n,13,0,"name"),l(n,17,0,e.required),l(n,26,0,"ingredients"),l(n,30,0,e.ingredients.controls),l(n,34,0,!e.exists),l(n,36,0,e.exists);var t=l(n,39,0,"../");l(n,38,0,t),l(n,42,0,e.exists)}),(function(l,n){l(n,1,0,t.Cb(n,5).ngClassUntouched,t.Cb(n,5).ngClassTouched,t.Cb(n,5).ngClassPristine,t.Cb(n,5).ngClassDirty,t.Cb(n,5).ngClassValid,t.Cb(n,5).ngClassInvalid,t.Cb(n,5).ngClassPending),l(n,10,0,t.Cb(n,15).ngClassUntouched,t.Cb(n,15).ngClassTouched,t.Cb(n,15).ngClassPristine,t.Cb(n,15).ngClassDirty,t.Cb(n,15).ngClassValid,t.Cb(n,15).ngClassInvalid,t.Cb(n,15).ngClassPending),l(n,25,0,t.Cb(n,28).ngClassUntouched,t.Cb(n,28).ngClassTouched,t.Cb(n,28).ngClassPristine,t.Cb(n,28).ngClassDirty,t.Cb(n,28).ngClassValid,t.Cb(n,28).ngClassInvalid,t.Cb(n,28).ngClassPending),l(n,37,0,t.Cb(n,38).target,t.Cb(n,38).href)}))}var L=e("mrSG"),A=e("eIep");class N{constructor(l,n,e){this.mealsService=l,this.router=n,this.route=e}ngOnInit(){this.subscription=this.mealsService.meals$.subscribe(),this.meal$=this.route.params.pipe(Object(A.a)(l=>this.mealsService.getMeal(l.id)))}ngOnDestroy(){this.subscription.unsubscribe()}addMeal(l){return L.__awaiter(this,void 0,void 0,(function*(){yield this.mealsService.addMeal(l),this.backToMeals()}))}updateMeal(l){return L.__awaiter(this,void 0,void 0,(function*(){const n=this.route.snapshot.params.id;yield this.mealsService.updateMeal(n,l),this.backToMeals()}))}removeMeal(){return L.__awaiter(this,void 0,void 0,(function*(){const l=this.route.snapshot.params.id;yield this.mealsService.removeMeal(l),this.backToMeals()}))}backToMeals(){this.router.navigate(["meals"])}}var S=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.meal[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.meal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.meal[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.meal__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function z(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Jb(1,null,[""," meal"]))],null,(function(l,n){l(n,1,0,n.context.ngIf.name?"Edit":"Create")}))}function E(l){return t.Lb(0,[(l()(),t.Jb(-1,null,["Loading..."]))],null,null)}function j(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-meal-form",[],null,[[null,"create"],[null,"update"],[null,"remove"]],(function(l,n,e){var t=!0,u=l.component;return"create"===n&&(t=!1!==u.addMeal(e)&&t),"update"===n&&(t=!1!==u.updateMeal(e)&&t),"remove"===n&&(t=!1!==u.removeMeal()&&t),t}),J,O)),t.pb(2,638976,null,0,M,[x.e],{meal:[0,"meal"]},{create:"create",update:"update",remove:"remove"})],(function(l,n){l(n,2,0,n.context.ngIf)}),null)}function D(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,0,"img",[["src","/assets/img/loading.svg"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" Fetching Meal... "]))],null,null)}function F(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,11,"div",[["class","meal"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,6,"div",[["class","meal__title"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,5,"h1",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/food.svg"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,2,null,z)),t.pb(5,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,r.b,[t.h]),(l()(),t.fb(0,[["title",2]],null,0,null,E)),(l()(),t.fb(16777216,null,null,2,null,j)),t.pb(9,16384,null,0,r.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,r.b,[t.h]),(l()(),t.fb(0,[["loading",2]],null,0,null,D))],(function(l,n){var e=n.component;l(n,5,0,t.Kb(n,5,0,t.Cb(n,6).transform(e.meal$)),t.Cb(n,7)),l(n,9,0,t.Kb(n,9,0,t.Cb(n,10).transform(e.meal$)),t.Cb(n,11))}),null)}function T(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-meal",[],null,null,null,F,S)),t.pb(1,245760,null,0,N,[g.a,s.k,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var K=t.mb("app-meal",N,T,{},{},[]),$=e("PVcy"),G=e("z5t0"),V=e("yA/v"),U=e("1XSQ");class Y{}var B=e("gNyd");e.d(n,"MealsModuleNgFactory",(function(){return Q}));var Q=t.nb(u,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,v,K]],[3,t.j],t.v]),t.Ab(4608,r.m,r.l,[t.s,[2,r.s]]),t.Ab(4608,x.e,x.e,[]),t.Ab(4608,x.r,x.r,[]),t.Ab(4608,$.a,$.a,[V.d,[2,V.c],[2,U.a],t.z,t.x]),t.Ab(1073742336,r.c,r.c,[]),t.Ab(1073742336,x.q,x.q,[]),t.Ab(1073742336,x.o,x.o,[]),t.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),t.Ab(1073742336,Y,Y,[]),t.Ab(1073742336,G.a,G.a,[]),t.Ab(1073742336,B.a,B.a,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,s.i,(function(){return[[{path:"",component:c},{path:"new",component:N},{path:":id",component:N}]]}),[])])}))}}]);