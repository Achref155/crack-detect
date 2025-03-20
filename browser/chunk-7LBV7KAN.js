import{a as w}from"./chunk-N4E3QWDE.js";import{a as b,c as f,d as M,e as y,g as C,h as _,i as v,l as T,m as L,o as E}from"./chunk-GMB2OH5J.js";import"./chunk-VHIVGA7J.js";import{p as h}from"./chunk-JTZO6T7H.js";import{Db as r,Hb as l,Ib as d,Jb as g,Na as s,Sa as p,Xa as S,ob as t,pb as i,vb as c}from"./chunk-NWJZ2U3V.js";var A=(()=>{class m{constructor(e){this.adminService=e,this.aiThreshold=0,this.imageStorageLimit=0}ngOnInit(){this.loadSettings()}loadSettings(){this.adminService.getSettings().subscribe({next:e=>{this.aiThreshold=e.aiThreshold,this.imageStorageLimit=e.imageStorageLimit},error:e=>console.error("Error loading settings",e)})}updateSettings(){let e={aiThreshold:this.aiThreshold,imageStorageLimit:this.imageStorageLimit};this.adminService.updateSettings(e).subscribe({next:()=>console.log("Settings updated successfully"),error:a=>console.error("Error updating settings",a)})}static{this.\u0275fac=function(a){return new(a||m)(p(w))}}static{this.\u0275cmp=S({type:m,selectors:[["app-settings"]],decls:25,vars:2,consts:[[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12"],[1,"bredcrumb_wrap"],["aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["href","#"],["aria-current","page",1,"breadcrumb-item","active"],[1,"admin-settings"],[3,"submit"],[1,"form-group"],["for","aiThreshold"],["type","number","id","aiThreshold","min","0","max","100",3,"ngModelChange","ngModel"],["for","imageStorageLimit"],["type","number","id","imageStorageLimit","min","0",3,"ngModelChange","ngModel"],["type","submit",1,"add-listing","dark-bg"]],template:function(a,n){a&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3)(4,"ol",4)(5,"li",5)(6,"a",6),r(7,"Home"),i()(),t(8,"li",5)(9,"a",6),r(10,"Dashboard"),i()(),t(11,"li",7),r(12,"System Settings"),i()()()()()(),t(13,"div",8)(14,"form",9),c("submit",function(){return n.updateSettings()}),t(15,"div",10)(16,"label",11),r(17,"AI Detection Threshold:"),i(),t(18,"input",12),g("ngModelChange",function(o){return d(n.aiThreshold,o)||(n.aiThreshold=o),o}),i()(),t(19,"div",10)(20,"label",13),r(21,"Image Storage Limit (MB):"),i(),t(22,"input",14),g("ngModelChange",function(o){return d(n.imageStorageLimit,o)||(n.imageStorageLimit=o),o}),i()(),t(23,"button",15),r(24," Update Settings "),i()()()),a&2&&(s(18),l("ngModel",n.aiThreshold),s(4),l("ngModel",n.imageStorageLimit))},dependencies:[h,E,_,b,v,f,M,L,T,C,y],encapsulation:2})}}return m})();export{A as SettingsComponent};
