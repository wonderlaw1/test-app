(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ZDXd:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class o{}var e=u("pMnS"),r=u("n32P"),i=u("SDrr"),a=u("SVse"),s=u("iInd");class c{constructor(n,l){this.workoutService=n,this.store=l}ngOnInit(){this.workouts$=this.store.select("workouts"),this.subscription=this.workoutService.workouts$.subscribe()}ngOnDestroy(){this.subscription.unsubscribe()}removeWorkout(n){this.workoutService.removeWorkout(n.$key)}}var b=u("AzN7"),g=u("Ogvq"),d=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.workouts[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.workouts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.workouts[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0;width:24px;height:24px}.workouts__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.btn__add[_ngcontent-%COMP%]{display:flex;align-items:center;color:#fff;background:#97c747;border-radius:50px;padding:6px 20px 6px 15px;text-transform:uppercase;font-weight:600;font-size:13px}.btn__add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;margin:0 6px 0 0}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function p(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/face.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" No workout, add a new workout to start "]))],null,null)}function C(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-list-item",[],null,[[null,"remove"]],(function(n,l,u){var t=!0;return"remove"===l&&(t=!1!==n.component.removeWorkout(u)&&t),t}),r.b,r.a)),t.pb(1,114688,null,0,i.a,[],{item:[0,"item"]},{remove:"remove"})],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function f(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,p)),t.pb(2,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,null,1,null,C)),t.pb(4,278528,null,0,a.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,!l.context.ngIf.length),n(l,4,0,l.context.ngIf)}),null)}function m(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["alt",""],["src","assets/img/loading.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Fetching workouts... "]))],null,null)}function h(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,13,"div",[["class","workouts"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,8,"div",[["class","workouts__title"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/workout.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Your Workouts "])),(n()(),t.qb(5,0,null,null,4,"a",[["class","btn__add"],["href",""]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Cb(n,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.pb(6,671744,null,0,s.n,[s.k,s.a,a.i],{routerLink:[0,"routerLink"]},null),t.Db(7,1),(n()(),t.qb(8,0,null,null,0,"img",[["alt",""],["src","assets/img/add-white.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" New Workout "])),(n()(),t.fb(16777216,null,null,2,null,f)),t.pb(11,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,a.b,[t.h]),(n()(),t.fb(0,[["loading",2]],null,0,null,m))],(function(n,l){var u=l.component,o=n(l,7,0,"../workouts/new");n(l,6,0,o),n(l,11,0,t.Kb(l,11,0,t.Cb(l,12).transform(u.workouts$)),t.Cb(l,13))}),(function(n,l){n(l,5,0,t.Cb(l,6).target,t.Cb(l,6).href)}))}function k(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-workout",[],null,null,null,h,d)),t.pb(1,245760,null,0,c,[b.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _=t.mb("app-workout",c,k,{},{},[]),v=u("s7LF");Object(t.S)(()=>w);class w{constructor(){this.selectors=["strength","endurance"]}ngOnInit(){}registerOnTouched(n){this.onTouch=n}registerOnChange(n){this.onModelChange=n}writeValue(n){this.value=n}setSelected(n){this.value=n,this.onModelChange(n),this.onTouch()}}var x=t.ob({encapsulation:0,styles:[[".workout-type[_ngcontent-%COMP%]{display:flex}.workout-type__pane[_ngcontent-%COMP%]{flex:0 0 30%;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:15px;margin:0 15px 0 0;background:#f5f9fd;border:1px solid #d1deeb;border-radius:3px;transition:all .2s ease-in-out}.workout-type__pane.active[_ngcontent-%COMP%], .workout-type__pane[_ngcontent-%COMP%]:hover{background:#e8f1fa}.workout-type__pane.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .workout-type__pane.active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:1}.workout-type__pane[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.6;margin:0 25px 0 0;width:35px}.workout-type__pane[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.6;margin:0;font-size:15px;font-weight:500;text-transform:uppercase;letter-spacing:3px}"]],data:{}});function P(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,3,"div",[["class","workout-type__pane"]],[[2,"active",null]],[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.setSelected(n.context.$implicit)&&t),t}),null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(n()(),t.qb(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Jb(3,null,["",""]))],null,(function(n,l){n(l,0,0,l.context.$implicit===l.component.value),n(l,1,0,t.ub(1,"assets/img/",l.context.$implicit,".svg")),n(l,3,0,l.context.$implicit)}))}function O(n){return t.Lb(2,[(n()(),t.qb(0,0,null,null,2,"div",[["class","workout-type"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,P)),t.pb(2,278528,null,0,a.j,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.selectors)}),null)}class M{constructor(n){this.fb=n,this.create=new t.m,this.update=new t.m,this.remove=new t.m,this.toggled=!1,this.exists=!1,this.form=this.fb.group({name:["",v.p.required],type:"strength",strength:this.fb.group({reps:0,sets:0,weight:0}),endurance:this.fb.group({distance:0,duration:0})})}get required(){return this.form.get("name").hasError("required")&&this.form.get("name").touched}get placeholder(){return"e.g. "+("strength"===this.form.get("type").value?"Benchpress":"Treadmill")}ngOnInit(){}ngOnChanges(){this.workout&&this.workout.name&&(this.exists=!0,this.form.patchValue(this.workout))}createWorkout(){this.form.valid&&this.create.emit(this.form.value)}updateWorkout(){this.form.valid&&this.update.emit(this.form.value)}removeWorkout(){this.remove.emit(this.form.value)}toggle(){this.toggled=!this.toggled}}var y=t.ob({encapsulation:0,styles:[[".cancel[_ngcontent-%COMP%], .confirm[_ngcontent-%COMP%]{outline:0;cursor:pointer;border:0;background:0 0;padding:5px 10px;margin:0 0 0 5px;font-size:14px}.error[_ngcontent-%COMP%]{color:#a94442;background:#f2dede;border:1px solid #e4b3b3;border-radius:2px;padding:8px;font-size:14px;font-weight:400;margin:10px 0 0}.confirm[_ngcontent-%COMP%]{color:#fff;background:#d73a49;border-radius:3px;transition:all .2s ease-in-out}.confirm[_ngcontent-%COMP%]:hover{background:#d42d3d}.workout-form__name[_ngcontent-%COMP%]{padding:30px;flex-direction:column;border-bottom:1px solid #d1deeb}.workout-form__details[_ngcontent-%COMP%]{padding:30px;border-bottom:1px solid #d1deeb}.workout-form__subtitle[_ngcontent-%COMP%]{display:flex;align-items:center}.workout-form__subtitle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0;flex-grow:1}.workout-form__delete[_ngcontent-%COMP%], .workout-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center}.workout-form__delete[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.workout-form__delete[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{margin:0 20px 0 0}.workout-form__submit[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:30px}.workout-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.workout-form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}.workout-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.workout-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative;display:block;margin:0 0 10px}.workout-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#7a98b5;font-size:12px}.workout-form__fields[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.workout-form__fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{flex:1 0;margin:0 10px 10px 0}.workout-form__fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:last-child{margin:0 0 10px}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{outline:0;font-size:16px;padding:10px 15px;margin:0;width:100%;background:#fff;color:#545e6f;flex-grow:1;border:1px solid #d1deeb;border-radius:3px;transition:all .2s ease-in-out}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#a5b9ce}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#aaa}.workout-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{cursor:pointer;outline:0;border:0;border-radius:2px;background:#39a1e7;color:#fff;padding:10px 18px;font-size:16px;font-weight:600;transition:all .2s ease-in-out;display:inline-block}.workout-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover{background:#2296e4}.workout-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.workout-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]{background:#fff;color:#545e6f}.workout-form[_ngcontent-%COMP%]   .button--cancel[_ngcontent-%COMP%]:hover{background:#fff}.workout-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]{background:#d73a49;align-self:flex-start}.workout-form[_ngcontent-%COMP%]   .button--delete[_ngcontent-%COMP%]:hover{background:#ce2a39}"]],data:{}});function q(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Workout name is required "]))],null,null)}function I(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,36,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,35,"div",[["class","workout-form__fields"],["formGroupName","strength"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(2,212992,null,0,v.i,[[3,v.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Gb(2048,null,v.b,null,[v.i]),t.pb(4,16384,null,0,v.m,[[4,v.b]],null,null),(n()(),t.qb(5,0,null,null,9,"label",[],null,null,null,null,null)),(n()(),t.qb(6,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Reps"])),(n()(),t.qb(8,0,null,null,6,"input",[["formControlName","reps"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,9)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,9).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,9)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,9)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.Cb(n,10).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.Cb(n,10).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,10).onTouched()&&o),o}),null,null)),t.pb(9,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.pb(10,16384,null,0,v.n,[t.B,t.k],null,null),t.Gb(1024,null,v.j,(function(n,l){return[n,l]}),[v.c,v.n]),t.pb(12,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(14,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),t.qb(15,0,null,null,9,"label",[],null,null,null,null,null)),(n()(),t.qb(16,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Sets"])),(n()(),t.qb(18,0,null,null,6,"input",[["formControlName","sets"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,19)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,19).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,19)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,19)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.Cb(n,20).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.Cb(n,20).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,20).onTouched()&&o),o}),null,null)),t.pb(19,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.pb(20,16384,null,0,v.n,[t.B,t.k],null,null),t.Gb(1024,null,v.j,(function(n,l){return[n,l]}),[v.c,v.n]),t.pb(22,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(24,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),t.qb(25,0,null,null,11,"label",[],null,null,null,null,null)),(n()(),t.qb(26,0,null,null,3,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Weight "])),(n()(),t.qb(28,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["(kg)"])),(n()(),t.qb(30,0,null,null,6,"input",[["formControlName","weight"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,31)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,31).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,31)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,31)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.Cb(n,32).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.Cb(n,32).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,32).onTouched()&&o),o}),null,null)),t.pb(31,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.pb(32,16384,null,0,v.n,[t.B,t.k],null,null),t.Gb(1024,null,v.j,(function(n,l){return[n,l]}),[v.c,v.n]),t.pb(34,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(36,16384,null,0,v.l,[[4,v.k]],null,null)],(function(n,l){n(l,2,0,"strength"),n(l,12,0,"reps"),n(l,22,0,"sets"),n(l,34,0,"weight")}),(function(n,l){n(l,1,0,t.Cb(l,4).ngClassUntouched,t.Cb(l,4).ngClassTouched,t.Cb(l,4).ngClassPristine,t.Cb(l,4).ngClassDirty,t.Cb(l,4).ngClassValid,t.Cb(l,4).ngClassInvalid,t.Cb(l,4).ngClassPending),n(l,8,0,t.Cb(l,14).ngClassUntouched,t.Cb(l,14).ngClassTouched,t.Cb(l,14).ngClassPristine,t.Cb(l,14).ngClassDirty,t.Cb(l,14).ngClassValid,t.Cb(l,14).ngClassInvalid,t.Cb(l,14).ngClassPending),n(l,18,0,t.Cb(l,24).ngClassUntouched,t.Cb(l,24).ngClassTouched,t.Cb(l,24).ngClassPristine,t.Cb(l,24).ngClassDirty,t.Cb(l,24).ngClassValid,t.Cb(l,24).ngClassInvalid,t.Cb(l,24).ngClassPending),n(l,30,0,t.Cb(l,36).ngClassUntouched,t.Cb(l,36).ngClassTouched,t.Cb(l,36).ngClassPristine,t.Cb(l,36).ngClassDirty,t.Cb(l,36).ngClassValid,t.Cb(l,36).ngClassInvalid,t.Cb(l,36).ngClassPending)}))}function J(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,28,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,27,"div",[["class","workout-form__fields"],["formGroupName","endurance"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),t.pb(2,212992,null,0,v.i,[[3,v.b],[8,null],[8,null]],{name:[0,"name"]},null),t.Gb(2048,null,v.b,null,[v.i]),t.pb(4,16384,null,0,v.m,[[4,v.b]],null,null),(n()(),t.qb(5,0,null,null,11,"label",[],null,null,null,null,null)),(n()(),t.qb(6,0,null,null,3,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Distance "])),(n()(),t.qb(8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["(km)"])),(n()(),t.qb(10,0,null,null,6,"input",[["formControlName","distance"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,11)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,11).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,11)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,11)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.Cb(n,12).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.Cb(n,12).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,12).onTouched()&&o),o}),null,null)),t.pb(11,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.pb(12,16384,null,0,v.n,[t.B,t.k],null,null),t.Gb(1024,null,v.j,(function(n,l){return[n,l]}),[v.c,v.n]),t.pb(14,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(16,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),t.qb(17,0,null,null,11,"label",[],null,null,null,null,null)),(n()(),t.qb(18,0,null,null,3,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Duration "])),(n()(),t.qb(20,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["(minutes)"])),(n()(),t.qb(22,0,null,null,6,"input",[["formControlName","duration"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,23)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,23).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,23)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,23)._compositionEnd(u.target.value)&&o),"change"===l&&(o=!1!==t.Cb(n,24).onChange(u.target.value)&&o),"input"===l&&(o=!1!==t.Cb(n,24).onChange(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,24).onTouched()&&o),o}),null,null)),t.pb(23,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.pb(24,16384,null,0,v.n,[t.B,t.k],null,null),t.Gb(1024,null,v.j,(function(n,l){return[n,l]}),[v.c,v.n]),t.pb(26,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(28,16384,null,0,v.l,[[4,v.k]],null,null)],(function(n,l){n(l,2,0,"endurance"),n(l,14,0,"distance"),n(l,26,0,"duration")}),(function(n,l){n(l,1,0,t.Cb(l,4).ngClassUntouched,t.Cb(l,4).ngClassTouched,t.Cb(l,4).ngClassPristine,t.Cb(l,4).ngClassDirty,t.Cb(l,4).ngClassValid,t.Cb(l,4).ngClassInvalid,t.Cb(l,4).ngClassPending),n(l,10,0,t.Cb(l,16).ngClassUntouched,t.Cb(l,16).ngClassTouched,t.Cb(l,16).ngClassPristine,t.Cb(l,16).ngClassDirty,t.Cb(l,16).ngClassValid,t.Cb(l,16).ngClassInvalid,t.Cb(l,16).ngClassPending),n(l,22,0,t.Cb(l,28).ngClassUntouched,t.Cb(l,28).ngClassTouched,t.Cb(l,28).ngClassPristine,t.Cb(l,28).ngClassDirty,t.Cb(l,28).ngClassValid,t.Cb(l,28).ngClassInvalid,t.Cb(l,28).ngClassPending)}))}function T(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.createWorkout()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Create workout "]))],null,null)}function W(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"button",[["class","button"],["type","button"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.updateWorkout()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Save "]))],null,null)}function L(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Delete item?"])),(n()(),t.qb(3,0,null,null,1,"button",[["class","confirm"],["type","button"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.removeWorkout()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Yes "])),(n()(),t.qb(5,0,null,null,1,"button",[["class","cancel"],["type","button"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.toggle()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" No "]))],null,null)}function N(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,4,"div",[["class","workout-form__delete"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,L)),t.pb(2,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(3,0,null,null,1,"button",[["class","button button--delete"],["type","button"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.toggle()&&t),t}),null,null)),(n()(),t.Jb(-1,null,[" Delete "]))],(function(n,l){n(l,2,0,l.component.toggled)}),null)}function S(n){return t.Lb(2,[(n()(),t.qb(0,0,null,null,43,"div",[["class","workout-form"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,42,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,u){var o=!0;return"submit"===l&&(o=!1!==t.Cb(n,3).onSubmit(u)&&o),"reset"===l&&(o=!1!==t.Cb(n,3).onReset()&&o),o}),null,null)),t.pb(2,16384,null,0,v.t,[],null,null),t.pb(3,540672,null,0,v.h,[[8,null],[8,null]],{form:[0,"form"]},null),t.Gb(2048,null,v.b,null,[v.h]),t.pb(5,16384,null,0,v.m,[[4,v.b]],null,null),(n()(),t.qb(6,0,null,null,20,"div",[["class","workout-form__name"]],null,null,null,null,null)),(n()(),t.qb(7,0,null,null,10,"label",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Workout name"])),(n()(),t.qb(10,0,null,null,5,"input",[["formControlName","name"],["type","text"]],[[8,"placeholder",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,u){var o=!0;return"input"===l&&(o=!1!==t.Cb(n,11)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Cb(n,11).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Cb(n,11)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Cb(n,11)._compositionEnd(u.target.value)&&o),o}),null,null)),t.pb(11,16384,null,0,v.c,[t.B,t.k,[2,v.a]],null,null),t.Gb(1024,null,v.j,(function(n){return[n]}),[v.c]),t.pb(13,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(15,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),t.fb(16777216,null,null,1,null,q)),t.pb(17,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(18,0,null,null,8,"label",[],null,null,null,null,null)),(n()(),t.qb(19,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.Jb(-1,null,["Type"])),(n()(),t.qb(21,0,null,null,5,"app-workout-type",[["formControlName","type"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,O,x)),t.pb(22,114688,null,0,w,[],null,null),t.Gb(1024,null,v.j,(function(n){return[n]}),[w]),t.pb(24,671744,null,0,v.g,[[3,v.b],[8,null],[8,null],[6,v.j],[2,v.s]],{name:[0,"name"]},null),t.Gb(2048,null,v.k,null,[v.g]),t.pb(26,16384,null,0,v.l,[[4,v.k]],null,null),(n()(),t.qb(27,0,null,null,4,"div",[["class","workout-form__details"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,I)),t.pb(29,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,null,1,null,J)),t.pb(31,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(32,0,null,null,11,"div",[["class","workout-form__submit"]],null,null,null,null,null)),(n()(),t.qb(33,0,null,null,8,"div",[],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,1,null,T)),t.pb(35,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.fb(16777216,null,null,1,null,W)),t.pb(37,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.qb(38,0,null,null,3,"a",[["class","button button--cancel"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Cb(n,39).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.pb(39,671744,null,0,s.n,[s.k,s.a,a.i],{routerLink:[0,"routerLink"]},null),t.Db(40,1),(n()(),t.Jb(-1,null,[" Cancel "])),(n()(),t.fb(16777216,null,null,1,null,N)),t.pb(43,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,3,0,u.form),n(l,13,0,"name"),n(l,17,0,u.required),n(l,22,0),n(l,24,0,"type"),n(l,29,0,"strength"===u.form.get("type").value),n(l,31,0,"endurance"===u.form.get("type").value),n(l,35,0,!u.exists),n(l,37,0,u.exists);var t=n(l,40,0,"../");n(l,39,0,t),n(l,43,0,u.exists)}),(function(n,l){var u=l.component;n(l,1,0,t.Cb(l,5).ngClassUntouched,t.Cb(l,5).ngClassTouched,t.Cb(l,5).ngClassPristine,t.Cb(l,5).ngClassDirty,t.Cb(l,5).ngClassValid,t.Cb(l,5).ngClassInvalid,t.Cb(l,5).ngClassPending),n(l,10,0,u.placeholder,t.Cb(l,15).ngClassUntouched,t.Cb(l,15).ngClassTouched,t.Cb(l,15).ngClassPristine,t.Cb(l,15).ngClassDirty,t.Cb(l,15).ngClassValid,t.Cb(l,15).ngClassInvalid,t.Cb(l,15).ngClassPending),n(l,21,0,t.Cb(l,26).ngClassUntouched,t.Cb(l,26).ngClassTouched,t.Cb(l,26).ngClassPristine,t.Cb(l,26).ngClassDirty,t.Cb(l,26).ngClassValid,t.Cb(l,26).ngClassInvalid,t.Cb(l,26).ngClassPending),n(l,38,0,t.Cb(l,39).target,t.Cb(l,39).href)}))}var j=u("mrSG"),D=u("eIep");class G{constructor(n,l,u){this.workoutsService=n,this.router=l,this.route=u}ngOnInit(){this.subscription=this.workoutsService.workouts$.subscribe(),this.workout$=this.route.params.pipe(Object(D.a)(n=>this.workoutsService.getWorkout(n.id)))}ngOnDestroy(){this.subscription.unsubscribe()}addWorkout(n){return j.__awaiter(this,void 0,void 0,(function*(){yield this.workoutsService.addWorkout(n),this.backToWorkouts()}))}updateWorkout(n){return j.__awaiter(this,void 0,void 0,(function*(){const l=this.route.snapshot.params.id;yield this.workoutsService.updateWorkout(l,n),this.backToWorkouts()}))}removeWorkout(){return j.__awaiter(this,void 0,void 0,(function*(){const n=this.route.snapshot.params.id;yield this.workoutsService.removeWorkout(n),this.backToWorkouts()}))}backToWorkouts(){this.router.navigate(["workouts"])}}var z=t.ob({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;margin:50px 0}.workout[_ngcontent-%COMP%]{position:relative;background:#fff;box-shadow:0 3px 4px rgba(0,0,0,.1);border:1px solid #c1cedb;border-radius:3px;overflow:hidden}.workout[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;margin:0;padding:0;font-size:24px}.workout[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0;width:24px;height:24px}.workout__title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:30px;background:#f6fafd;border-bottom:1px solid #c1cedb}.message[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:100%;padding:30px;font-size:22px;font-weight:500}.message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:0 10px 0 0}"]],data:{}});function E(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.Jb(1,null,[""," workout"]))],null,(function(n,l){n(l,1,0,l.context.ngIf.name?"Edit":"Create")}))}function A(n){return t.Lb(0,[(n()(),t.Jb(-1,null,["Loading..."]))],null,null)}function V(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,1,"app-workout-form",[],null,[[null,"create"],[null,"update"],[null,"remove"]],(function(n,l,u){var t=!0,o=n.component;return"create"===l&&(t=!1!==o.addWorkout(u)&&t),"update"===l&&(t=!1!==o.updateWorkout(u)&&t),"remove"===l&&(t=!1!==o.removeWorkout()&&t),t}),S,y)),t.pb(2,638976,null,0,M,[v.e],{workout:[0,"workout"]},{create:"create",update:"update",remove:"remove"})],(function(n,l){n(l,2,0,l.context.ngIf)}),null)}function $(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,2,"div",[["class","message"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,0,"img",[["src","assets/img/loading.svg"]],null,null,null,null,null)),(n()(),t.Jb(-1,null,[" Fetching Workout... "]))],null,null)}function B(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,11,"div",[["class","workout"]],null,null,null,null,null)),(n()(),t.qb(1,0,null,null,6,"div",[["class","workout__title"]],null,null,null,null,null)),(n()(),t.qb(2,0,null,null,5,"h1",[],null,null,null,null,null)),(n()(),t.qb(3,0,null,null,0,"img",[["alt",""],["src","assets/img/workout.svg"]],null,null,null,null,null)),(n()(),t.fb(16777216,null,null,2,null,E)),t.pb(5,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,a.b,[t.h]),(n()(),t.fb(0,[["title",2]],null,0,null,A)),(n()(),t.fb(16777216,null,null,2,null,V)),t.pb(9,16384,null,0,a.k,[t.N,t.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),t.Eb(131072,a.b,[t.h]),(n()(),t.fb(0,[["loading",2]],null,0,null,$))],(function(n,l){var u=l.component;n(l,5,0,t.Kb(l,5,0,t.Cb(l,6).transform(u.workout$)),t.Cb(l,7)),n(l,9,0,t.Kb(l,9,0,t.Cb(l,10).transform(u.workout$)),t.Cb(l,11))}),null)}function U(n){return t.Lb(0,[(n()(),t.qb(0,0,null,null,1,"app-workout",[],null,null,null,B,z)),t.pb(1,245760,null,0,G,[b.a,s.k,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}var K=t.mb("app-workout",G,U,{},{},[]),F=u("PVcy"),Y=u("z5t0"),R=u("yA/v"),X=u("1XSQ");class Q{}var Z=u("gNyd");u.d(l,"WorkoutsModuleNgFactory",(function(){return H}));var H=t.nb(o,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[e.a,_,K]],[3,t.j],t.v]),t.Ab(4608,a.m,a.l,[t.s,[2,a.s]]),t.Ab(4608,v.e,v.e,[]),t.Ab(4608,v.r,v.r,[]),t.Ab(4608,F.a,F.a,[R.d,[2,R.c],[2,X.a],t.z,t.x]),t.Ab(1073742336,a.c,a.c,[]),t.Ab(1073742336,v.q,v.q,[]),t.Ab(1073742336,v.o,v.o,[]),t.Ab(1073742336,s.o,s.o,[[2,s.t],[2,s.k]]),t.Ab(1073742336,Q,Q,[]),t.Ab(1073742336,Y.a,Y.a,[]),t.Ab(1073742336,Z.a,Z.a,[]),t.Ab(1073742336,o,o,[]),t.Ab(1024,s.i,(function(){return[[{path:"",component:c},{path:"new",component:G},{path:":id",component:G}]]}),[])])}))}}]);