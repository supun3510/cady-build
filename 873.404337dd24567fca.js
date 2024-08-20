"use strict";(self.webpackChunkhybrix=self.webpackChunkhybrix||[]).push([[873],{4873:(Z,r,s)=>{s.r(r),s.d(r,{ExtraspagesModule:()=>f});var c=s(6895),a=s(5892),t=s(4650);let d=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-maintenance"]],decls:26,vars:0,consts:[[1,"auth-page-wrapper-2","py-4","position-relative","d-flex","align-items-center","justify-content-center","min-vh-100","bg-light"],[1,"container"],[1,"row","g-0"],[1,"col-lg-5"],[1,"auth-card","card","bg-primary","h-100","rounded-0","rounded-start","border-0","d-flex","align-items-center","justify-content-center","overflow-hidden","p-4"],[1,"auth-image"],["src","assets/images/logo-light-full.png","alt","","height","42"],["src","assets/images/effect-pattern/auth-effect-2.png","alt","",1,"auth-effect-2"],["src","assets/images/effect-pattern/auth-effect.png","alt","",1,"auth-effect"],["src","assets/images/effect-pattern/auth-effect.png","alt","",1,"auth-effect-3"],[1,"col-lg-7"],[1,"card","mb-0","rounded-0","rounded-end","border-0","py-lg-3"],[1,"card-body","p-4","p-sm-5","m-lg-4"],[1,"text-center"],[1,"mb-5"],[1,"text-muted","fs-14"],[1,"mt-4","pt-2"],["routerLink","/",1,"btn","btn-primary"],[1,"mdi","mdi-home","me-1"],[1,"row","justify-content-center"],[1,"col-xl-8"],["src","assets/images/maintenance.png","alt","",1,"img-fluid"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6)(7,"img",7)(8,"img",8)(9,"img",9),t.qZA()()(),t.TgZ(10,"div",10)(11,"div",11)(12,"div",12)(13,"div",13)(14,"div",14)(15,"h3"),t._uU(16,"Site is Under Maintenance"),t.qZA(),t.TgZ(17,"p",15),t._uU(18,"Please check back in sometime"),t.qZA(),t.TgZ(19,"div",16)(20,"a",17),t._UZ(21,"i",18),t._uU(22," Back to Home"),t.qZA()()(),t.TgZ(23,"div",19)(24,"div",20),t._UZ(25,"img",21),t.qZA()()()()()()()()())},dependencies:[a.rH]})}return e})();var u=s(4986),m=s(5963),l=s(4004);const h=[{path:"maintenance",component:d},{path:"coming-soon",component:(()=>{class e{constructor(){this.year=(new Date).getFullYear()}ngOnInit(){this._trialEndsAt="2023-10-30",function g(e=0,v=u.z){return e<0&&(e=0),(0,m.H)(e,e,v)}(1e3).pipe((0,l.U)(i=>{this._diff=Date.parse(this._trialEndsAt)-Date.parse((new Date).toString())})).subscribe(i=>{this._days=this.getDays(this._diff),this._hours=this.getHours(this._diff),this._minutes=this.getMinutes(this._diff),this._seconds=this.getSeconds(this._diff)})}getDays(i){return Math.floor(i/864e5)}getHours(i){return Math.floor(i/36e5%24)}getMinutes(i){return Math.floor(i/1e3/60%60)}getSeconds(i){return Math.floor(i/1e3%60)}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-coming-soon"]],decls:54,vars:5,consts:[[1,"auth-bg-cover","min-vh-100","p-4","p-lg-5","d-flex","align-items-center","justify-content-center"],[1,"bg-overlay"],[1,"container-fluid","px-0"],[1,"row","g-0","justify-content-center"],[1,"col-xl-4","col-lg-8"],[1,"text-center","mb-5"],["src","assets/images/logo-light-full.png","alt","","height","32"],[1,"card","mb-0"],[1,"card-body","p-4","p-sm-4","m-lg-3","text-center"],[1,"mb-sm-5","pb-sm-0","pb-5"],["src","assets/images/comingsoon.png","alt","","height","110",1,"move-animation"],[1,"mb-5"],[1,"row","justify-content-center","mt-5"],[1,"col-lg-10"],["data-countdown","Oct 30, 2023",1,"countdownlist"],[1,"countdownlist-item"],[1,"count-title"],[1,"count-num"],[1,"mt-5"],[1,"text-muted"],["action","#!"],[1,"countdown-input-subscribe","mx-auto","my-4"],["type","email","placeholder","Enter your email address","required","",1,"form-control","shadow"],["type","submit","id","button-email",1,"btn","btn-primary"],[1,"ri-send-plane-2-fill","align-bottom","ms-2"],[1,"text-white","text-center","mt-5"],[1,"mb-0"],[1,"mdi","mdi-heart","text-danger"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0),t._UZ(1,"div",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),t._UZ(6,"img",6),t.qZA(),t.TgZ(7,"div",7)(8,"div",8)(9,"div",9),t._UZ(10,"img",10),t.qZA(),t.TgZ(11,"div",11)(12,"h1"),t._uU(13,"Coming Soon"),t.qZA()(),t.TgZ(14,"div")(15,"div",12)(16,"div",13)(17,"div",14)(18,"div",15)(19,"div",16),t._uU(20,"Days"),t.qZA(),t.TgZ(21,"div",17),t._uU(22),t.qZA()(),t.TgZ(23,"div",15)(24,"div",16),t._uU(25,"Hours"),t.qZA(),t.TgZ(26,"div",17),t._uU(27),t.qZA()(),t.TgZ(28,"div",15)(29,"div",16),t._uU(30,"Minutes"),t.qZA(),t.TgZ(31,"div",17),t._uU(32),t.qZA()(),t.TgZ(33,"div",15)(34,"div",16),t._uU(35,"Seconds"),t.qZA(),t.TgZ(36,"div",17),t._uU(37),t.qZA()()()()(),t.TgZ(38,"div",18)(39,"h4"),t._uU(40,"Get notified when we launch"),t.qZA(),t.TgZ(41,"p",19),t._uU(42,"Don't worry we will not spam you \u{1f60a}"),t.qZA()(),t.TgZ(43,"form",20)(44,"div",21),t._UZ(45,"input",22),t.TgZ(46,"button",23),t._uU(47,"Send"),t._UZ(48,"i",24),t.qZA()()()()()(),t.TgZ(49,"div",25)(50,"p",26),t._uU(51),t._UZ(52,"i",27),t._uU(53," by Themesbrand "),t.qZA()()()()()()),2&n&&(t.xp6(22),t.Oqu(o._days),t.xp6(5),t.Oqu(o._hours),t.xp6(5),t.Oqu(o._minutes),t.xp6(5),t.Oqu(o._seconds),t.xp6(14),t.hij("\xa9 ",o.year," Hybrix. Crafted with "))}})}return e})()}];let p=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(h),a.Bz]})}return e})(),f=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[c.ez,p]})}return e})()}}]);