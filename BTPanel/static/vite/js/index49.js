const __vite__fileDeps=["js/index126.js?v=1721298337096","js/index.js?v=1721298337096","js/vue.js?v=1721298337096","js/pinia.js?v=1721298337096","css/index34.css?v=1721298337096","js/site2.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang14.js?v=1721298337096","js/Progress.js?v=1721298337096","js/DataTable.js?v=1721298337096","js/Checkbox.js?v=1721298337096","js/Ellipsis.js?v=1721298337096","js/Select.js?v=1721298337096","js/Tag.js?v=1721298337096","js/Empty.js?v=1721298337096","js/omit.js?v=1721298337096","js/file2.js?v=1721298337096","js/use-theme-vars.js?v=1721298337096","css/index31.css?v=1721298337096","js/index127.js?v=1721298337096","js/index136.js?v=1721298337096","js/Spin.js?v=1721298337096","css/index15.css?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang.js?v=1721298337096","js/useTableColumns.js?v=1721298337096","css/useTableColumns.css?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang2.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang3.js?v=1721298337096","js/useTableData.js?v=1721298337096","js/Skeleton.js?v=1721298337096","js/useLoading.js?v=1721298337096","js/set.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang6.js?v=1721298337096","js/index128.js?v=1721298337096","js/index72.js?v=1721298337096","js/Tabs.js?v=1721298337096","css/index10.css?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang12.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang8.js?v=1721298337096","js/InputGroupLabel.js?v=1721298337096","js/InputGroup.js?v=1721298337096","js/index100.js?v=1721298337096","css/index11.css?v=1721298337096","js/check.js?v=1721298337096","css/index29.css?v=1721298337096","js/index129.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang13.js?v=1721298337096","js/index130.js?v=1721298337096","js/index68.js?v=1721298337096","js/index131.js?v=1721298337096","js/index132.js?v=1721298337096","js/index135.js?v=1721298337096","css/index14.css?v=1721298337096","js/index64.js?v=1721298337096","css/index9.css?v=1721298337096","js/refersh.js?v=1721298337096","js/php.js?v=1721298337096","js/Space.js?v=1721298337096","js/form.vue_vue_type_script_setup_true_lang2.js?v=1721298337096","css/index30.css?v=1721298337096","js/batch.js?v=1721298337096","js/DatePicker.js?v=1721298337096","js/index.vue_vue_type_script_setup_true_lang4.js?v=1721298337096","js/index62.js?v=1721298337096","js/data.js?v=1721298337096","css/index8.css?v=1721298337096","js/site.js?v=1721298337096","js/ButtonGroup.js?v=1721298337096","js/batch2.js?v=1721298337096","js/batch3.js?v=1721298337096"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cy as e,cz as t,cA as a,e as i,B as n,b8 as o,a as s,J as l,v as r,j as d,av as u,cB as c,bd as p,g as _,k as m,q as h,cC as w,h as P,m as f,I as b,r as y}from"./index.js?v=1721298337096";import{_ as v}from"./index64.js?v=1721298337096";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang.js?v=1721298337096";import{_ as k}from"./index.vue_vue_type_script_setup_true_lang2.js?v=1721298337096";import{_ as g}from"./index.vue_vue_type_script_setup_true_lang3.js?v=1721298337096";import{u as S,_ as H}from"./useTableData.js?v=1721298337096";import{_ as j}from"./index.vue_vue_type_script_setup_true_lang4.js?v=1721298337096";import{_ as C}from"./index62.js?v=1721298337096";import{s as D}from"./pinia.js?v=1721298337096";import{o as E,l as O}from"./site.js?v=1721298337096";import{u as T}from"./useLoading.js?v=1721298337096";import{c as R,i as B,u as L,a as U,b as I}from"./useTableColumns.js?v=1721298337096";import{s as $,g as A,a as V,b as W,c as z,d as M}from"./site2.js?v=1721298337096";import{l as N,d as K,r as q,k as G,S as J,U as Z,V as F,P as Q,q as X,a3 as Y,W as ee,_ as te,b as ae,a1 as ie,ae as ne,ad as oe,s as se,ao as le,Z as re,f as de,w as ue,af as ce,t as pe,n as _e}from"./vue.js?v=1721298337096";import{_ as me}from"./Select.js?v=1721298337096";import{N as he}from"./ButtonGroup.js?v=1721298337096";import{_ as we}from"./DatePicker.js?v=1721298337096";function Pe(a,i){const n=e(a);return isNaN(i)?t(a,NaN):i?(n.setDate(n.getDate()+i),n):n}function fe(t,a){return+e(t)<+e(a)}const be={class:"flex justify-end"},ye=s(N({__name:"index",props:{row:{}},setup(e){const t=K(e,"row"),s=q(null),l=q(null),r=new Date;r.setHours(0,0,0,0);const d=G((()=>{const e=new Date(t.value.edate);return"0000-00-00"!==t.value.edate&&fe(e,r)})),u=G((()=>{const e=new Date(t.value.edate);return"0000-00-00"!==t.value.edate&&fe(e,Pe(r,7))})),c=e=>fe(e,Pe(r,1)),p=()=>{s.value="0000-00-00"===t.value.edate?null:new Date(t.value.edate).getTime()},_=async()=>{var e;await $({id:t.value.id,edate:"0000-00-00"}),t.value.edate="0000-00-00",null==(e=l.value)||e.setShow(!1)},m=async()=>{var e;if(null===s.value)return;const i=a(s.value,"yyyy-MM-dd");await $({id:t.value.id,edate:i}),t.value.edate=i,null==(e=l.value)||e.setShow(!1)};return(e,a)=>{const r=i,h=n,w=he,P=we,f=o;return J(),Z(f,{ref_key:"popoverRef",ref:l,placement:"bottom",trigger:"click"},{trigger:F((()=>[Q(r,{type:ee(d)?"error":ee(u)?"warning":"primary",onClick:p},{default:F((()=>[X(Y("0000-00-00"===ee(t).edate?e.$t("Site.PHP.index_34"):ee(d)?e.$t("Site.PHP.index_28"):ee(t).edate),1)])),_:1},8,["type"])])),default:F((()=>[Q(P,{value:ee(s),"onUpdate:value":a[0]||(a[0]=e=>ae(s)?s.value=e:null),type:"date",panel:!0,actions:null,"is-date-disabled":c},{footer:F((()=>[te("div",be,[Q(w,{size:"small"},{default:F((()=>[Q(h,{onClick:_},{default:F((()=>[X(Y(e.$t("Site.PHP.index_34")),1)])),_:1}),Q(h,{disabled:null===ee(s),onClick:m},{default:F((()=>[X(Y(e.$t("Public.Btn.Confirm")),1)])),_:1},8,["disabled"])])),_:1})])])),_:1},8,["value"])])),_:1},512)}}}),[["__scopeId","data-v-0f7e7fa2"]]);function ve(e){l({title:1===e.length?"Delete site [".concat(e[0].name,"]"):"Deleting sites in batches",width:480,minHeight:248,footer:!0,data:{rows:e},component:ie((()=>r((()=>import("./index126.js?v=1721298337096")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))))})}const xe=N({functional:!0,props:{path:{type:String,default:"",required:!0}},setup(e){const t=ne();return{goPath:()=>{R("Path",e.path),t.push("/files")}}},render(){return Q("a",{class:"text-primary hover:text-primary-hover",href:"javascript:;",onClick:()=>{this.goPath()}},[this.path])}});const ke=({row:e})=>Q(i,null,{default:()=>[e.name]}),ge=({row:e})=>Q(B,{value:e.status},null),Se=({row:e})=>{const{t:t}=oe();return Q(i,{type:e.backup_count>0?"primary":"warning",onClick:()=>{l({title:t("Site.PHP.index_33",[e.name]),width:720,minHeight:200,data:{row:e},component:ie((()=>r((()=>import("./index127.js?v=1721298337096")),__vite__mapDeps([18,1,2,3,4,19,20,21,22,23,7,24,25,8,9,10,11,12,13,14,26,27,28,29,5]))))})}},{default:()=>[e.backup_count>0?t("Site.PHP.index_31",[e.backup_count]):t("Site.PHP.index_32")]})},He=({row:e})=>Q(xe,{path:e.path},null),je=({row:e})=>Q(i,null,{default:()=>[e.php_version]}),Ce=({row:e})=>{let t;const{t:a}=oe(),{ssl:n}=e;return d(n)?Q(i,{type:n.endtime<0?"error":"primary"},{default:()=>[n.endtime<0?a("Site.PHP.index_28"):a("Site.PHP.index_29",[n.endtime])]}):Q(i,{type:"warning"},"function"==typeof(o=t=a("Site.PHP.index_30"))||"[object Object]"===Object.prototype.toString.call(o)&&!se(o)?t:{default:()=>[t]});var o},De=({row:e})=>Q(i,{type:e.attack>0?"error":"primary"},{default:()=>[e.attack]}),Ee={class:"w-150px"},Oe=N({__name:"index",props:{value:{default:null}},setup(e){const{t:t}=oe(),a=ie((()=>r((()=>import("./set.js?v=1721298337096")),__vite__mapDeps([30,1,2,3,4,31,5,23,7,24,27,28,8,9,10,11,12,13,14])))),i=le(e,"value"),{loading:o,setLoading:s}=T(),l=q([]),d=_(t("Site.PHP.index_44"),{setOptions:(e,t)=>{t===i.value&&(i.value=-1),l.value=e.map((e=>({label:e.name,value:e.id}))),c()}}),u=()=>{d.show=!0},c=()=>{l.value.unshift({label:t("Site.PHP.index_45"),value:-1})};return c(),(async()=>{try{s(!0);const{message:e}=await A();m(e)?l.value=e.map((e=>({label:e.name,value:e.id}))):l.value=[],c()}finally{s(!1)}})(),(e,t)=>{const s=n,r=me,c=h;return J(),re("div",Ee,[Q(r,{value:ee(i),"onUpdate:value":t[0]||(t[0]=e=>ae(i)?i.value=e:null),loading:ee(o),options:ee(l)},{action:F((()=>[Q(s,{block:"",onClick:u},{default:F((()=>[X(Y(e.$t("Site.PHP.index_43")),1)])),_:1})])),_:1},8,["value","loading","options"]),Q(c,{show:ee(d).show,"onUpdate:show":t[1]||(t[1]=e=>ee(d).show=e),width:350,title:ee(d).title,data:ee(d).data,component:ee(a)},null,8,["show","title","data","component"])])}}}),Te=te("span",{class:"mx-4px"},"|",-1),Re=N({__name:"index",setup(e){const t=ie((()=>r((()=>import("./index128.js?v=1721298337096")),__vite__mapDeps([32,33,2,34,1,3,4,14,35,31,36,37,38,39,40,16,41,42,5,11,12,13,29,8,9,10,43])))),a=ie((()=>r((()=>import("./index129.js?v=1721298337096")),__vite__mapDeps([44,33,2,34,1,3,4,14,35,45,29,15,11,12,13,20])))),o=ie((()=>r((()=>import("./index130.js?v=1721298337096")),__vite__mapDeps([46,47,1,2,3,4,31,5,29,11,12,13])))),s=ie((()=>r((()=>import("./index131.js?v=1721298337096")),__vite__mapDeps([48,47,1,2,3,4,31,5,29,11,12,13])))),R=ie((()=>r((()=>import("./index132.js?v=1721298337096").then((e=>e.i))),__vite__mapDeps([49,1,2,3,4,50,34,14,10,51,22,23,7,24,26,9,11,12,13,27,28,8,40,16,41,5,29,31,36,37,38,39,33,35,47,45,15,20,52,53,54,55,56,57,19,21,58])))),{t:B}=oe(),$=w(),{web:A,webserver:N}=D($),K=q(!1),G=_(B("Site.PHP.index_9")),ne=()=>{G.show=!0},se=_(B("Site.PHP.index_10")),le=()=>{se.show=!0},re=_(B("Site.PHP.index_11")),me=()=>{re.show=!0},he=_(B("Site.PHP.index_12")),we=()=>{he.show=!0},Pe=de({show:!1,title:"",data:{siteInfo:null,config:{menu:"",subMenu:""}}}),fe=(e,t={})=>{Pe.title=B("Site.PHP.index_13",[e.name,e.addtime]),Pe.data.siteInfo=e,Pe.data.config=Object.assign({menu:"",subMenu:""},t),Pe.show=!0},be=()=>I({title:B("Public.Table.Operation"),width:150,options:e=>[{label:B("Site.PHP.index_14"),onClick:()=>{(async()=>{await u({source:142}),await c("monitor"),p({name:"monitor",title:"Website statistics-v2",admin:!0})})()}},{label:B("Site.PHP.index_15"),show:"nginx"===$.webserver||"apache"===$.webserver,onClick:()=>{E(e.name)}},{label:B("Site.PHP.index_16"),onClick:()=>{fe(e)}},{label:B("Public.Btn.Del"),onClick:()=>{ve([e])}}]}),{keys:xe,table:Ee,columns:Re}=S([{type:"selection",width:40},{key:"name",title:B("Site.PHP.index_17"),width:"12%",minWidth:110,sorter:!0,sortOrder:!1,render:e=>Q(ke,{row:e,onClick:()=>{fe(e)}},null)},{key:"status",title:B("Public.Table.Status"),width:"8%",minWidth:90,sorter:!0,sortOrder:!1,render:e=>Q(ge,{row:e,onClick:t=>{P({title:"".concat(B("1"===t?"Site.PHP.index_21.1":"Site.PHP.index_21.2")," ").concat(B("Site.PHP.index_21.0",[e.name])),content:B("1"===t?"Site.PHP.index_22":"Site.PHP.index_23"),onConfirm:async()=>{await V("1"===t,{id:e.id,name:e.name}),e.status=t}})}},null)},{key:"backup_count",title:B("Site.PHP.index_19"),width:"6%",minWidth:70,render:e=>Q(Se,{row:e},null)},{key:"path",title:B("Site.PHP.index_20"),minWidth:130,ellipsis:{tooltip:!0},render:e=>Q(He,{row:e},null)},L({type:"site",width:"6%",minWidth:70,callback:()=>{Ae()}}),{key:"edate",title:B("Site.PHP.index_25"),width:"8%",minWidth:96,render:e=>Q(ye,{row:e},null)},U({width:"8%",onBlur:async(e,t)=>{await M({id:t.id,ps:e})}}),{key:"php_version",title:B("Site.PHP.index_26"),width:"6%",minWidth:70,render:e=>Q(je,{row:e,onClick:()=>{fe(e,{menu:"php"})}},null)},{key:"site_ssl",title:B("Site.PHP.index_27"),width:"9%",minWidth:110,sorter:!0,sortOrder:!1,render:e=>Q(Ce,{row:e,onClick:()=>{fe(e,{menu:"ssl"})}},null)},{key:"attack",title:B("Site.PHP.index_24"),width:"6%",minWidth:60,render:e=>Q(De,{row:e,onClick:()=>{fe(e,{menu:"logs",subMenu:"security"})}},null)},be()]),Be=e=>{Re.value.forEach((t=>{const a=t;a.key===e.columnKey?a.sortOrder=e.order:a.sortOrder=void 0})),e.order?Ue.order="".concat(e.columnKey," ").concat("descend"===e.order?"desc":"asc"):Ue.order="",Ae()},Le=[{key:"enable",type:"confirm",label:"Enable website",confirm:{title:"Batch enable website",desc:"Please be cautious, The selected item will be [Enable website] after confirmation",columns:[Re.value[1]],api:e=>V(!0,{id:e.id,name:e.name},!1),done:()=>{Ae()}}},{key:"disable",type:"confirm",label:"Disable website",confirm:{title:"Batch disable website",desc:"Please be cautious, The selected item will be [Disable website] after confirmation",columns:[Re.value[1]],api:e=>V(!1,{id:e.id,name:e.name},!1),done:()=>{Ae()}}},{key:"backup",type:"confirm",label:"Backup website",confirm:{title:"Batch backup website",desc:"Please be cautious, The selected item will be [Backup website] after confirmation",columns:[Re.value[1]],api:e=>W({id:e.id},!1),done:()=>{Ae()}}},{key:"expired",label:"Set expired date",onBatch:e=>{l({title:"Batch set expired date",width:380,minHeight:72,footer:!0,data:{rows:e},component:ie((()=>r((()=>import("./batch.js?v=1721298337096")),__vite__mapDeps([59,31,2,1,3,4,5,6,7,8,9,10,11,12,13,14,60,52,53,22,23,24,25,26,27,28,61,62,63,55,29,64,65,66]))))})}},{key:"php",label:"Set php version",onBatch:e=>{l({title:"Batch set php version",width:500,minHeight:198,footer:!0,data:{rows:e},component:ie((()=>r((()=>import("./batch2.js?v=1721298337096")),__vite__mapDeps([67,47,1,2,3,4,31,29,5,6,7,8,9,10,11,12,13,14]))))})}},{key:"category",label:"Set category",onBatch:e=>{l({title:"Batch set category",width:350,minHeight:72,footer:!0,data:{rows:e},component:ie((()=>r((()=>import("./batch3.js?v=1721298337096")),__vite__mapDeps([68,31,2,1,3,4,29,5,11,12,13]))))})}},{key:"delete",label:"Delete website",onBatch:e=>{ve(e)}}],Ue=de({p:1,limit:10,table:"sites",search:"",order:"",type:-1}),{loading:Ie,setLoading:$e}=T(!0),Ae=async()=>{try{$e(!0);const e=(()=>{const e=pe(Ue);return{...e,type:e.type?e.type:-1}})(),{message:t}=await z(e);d(t)?(Ee.data=m(t.data)?t.data:[],Ee.total=f(t.page)):(Ee.data=[],Ee.total=0)}finally{xe.value=[],$e(!1)}};ue((()=>$.isRefresh),(e=>{e&&($.setRefresh(!1),Ae())}));return(async()=>{try{await $.getConfig(),$e(!1),await _e(),Re.value[Re.value.length-1]=be(),$e(!0),$.web.setup?(K.value=!0,Ae()):(K.value=!1,$e(!1),O())}catch(e){$e(!1)}})(),(e,l)=>{const r=i,d=n,u=C,c=j,p=H,_=g,m=k,w=x,P=h,f=v,S=y;return J(),Z(S,null,{default:F((()=>[Q(f,{install:ee(A).setup},{desc:F((()=>[te("span",null,Y(e.$t("Site.PHP.index_1")),1),Q(r,{class:"ml-4px",onClick:l[0]||(l[0]=e=>ee(b)("nginx"))},{default:F((()=>[X(Y(e.$t("Site.PHP.index_2")),1)])),_:1}),Te,Q(r,{onClick:l[1]||(l[1]=e=>ee(b)("apache"))},{default:F((()=>[X(Y(e.$t("Site.PHP.index_3")),1)])),_:1})])),default:F((()=>[Q(w,{class:"p-16px",feedback:!0},{toolsLeft:F((()=>[Q(d,{type:"primary",onClick:ne},{default:F((()=>[X(Y(e.$t("Site.PHP.index_4")),1)])),_:1}),Q(d,{onClick:le},{default:F((()=>[X(Y(e.$t("Site.PHP.index_5")),1)])),_:1}),Q(d,{onClick:me},{default:F((()=>[X(Y(e.$t("Site.PHP.index_6")),1)])),_:1}),Q(d,{onClick:we},{default:F((()=>[X(Y(e.$t("Site.PHP.index_7")),1)])),_:1}),ee(K)?(J(),Z(u,{key:0,"soft-name":ee(N)},null,8,["soft-name"])):ce("",!0)])),toolsRight:F((()=>[Q(Oe,{value:ee(Ue).type,"onUpdate:value":[l[2]||(l[2]=e=>ee(Ue).type=e),Ae]},null,8,["value"]),Q(c,{value:ee(Ue).search,"onUpdate:value":l[3]||(l[3]=e=>ee(Ue).search=e),placeholder:e.$t("Site.PHP.index_8"),onSearch:Ae},null,8,["value","placeholder"])])),table:F((()=>[Q(p,{"checked-row-keys":ee(xe),"onUpdate:checkedRowKeys":l[4]||(l[4]=e=>ae(xe)?xe.value=e:null),loading:ee(Ie),data:ee(Ee).data,columns:ee(Re),"onUpdate:sorter":Be},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:F((()=>[Q(_,{"checked-row-keys":ee(xe),"onUpdate:checkedRowKeys":l[5]||(l[5]=e=>ae(xe)?xe.value=e:null),data:ee(Ee).data,options:Le},null,8,["checked-row-keys","data"])])),pageRight:F((()=>[Q(m,{page:ee(Ue).p,"onUpdate:page":l[6]||(l[6]=e=>ee(Ue).p=e),"page-size":ee(Ue).limit,"onUpdate:pageSize":l[7]||(l[7]=e=>ee(Ue).limit=e),"item-count":ee(Ee).total,"store-key":"site-php-page",onRefresh:Ae},null,8,["page","page-size","item-count"])])),_:1}),Q(P,{show:ee(G).show,"onUpdate:show":l[8]||(l[8]=e=>ee(G).show=e),title:ee(G).title,width:640,height:540,footer:!0,component:ee(t)},null,8,["show","title","component"]),Q(P,{show:ee(se).show,"onUpdate:show":l[9]||(l[9]=e=>ee(se).show=e),title:ee(se).title,width:820,"min-height":608,component:ee(a)},null,8,["show","title","component"]),Q(P,{show:ee(re).show,"onUpdate:show":l[10]||(l[10]=e=>ee(re).show=e),title:ee(re).title,width:560,footer:!0,component:ee(o)},null,8,["show","title","component"]),Q(P,{show:ee(he).show,"onUpdate:show":l[11]||(l[11]=e=>ee(he).show=e),title:ee(he).title,width:560,"min-height":148,footer:!0,component:ee(s)},null,8,["show","title","component"]),Q(P,{show:ee(Pe).show,"onUpdate:show":l[12]||(l[12]=e=>ee(Pe).show=e),title:ee(Pe).title,data:ee(Pe).data,width:860,height:700,component:ee(R)},null,8,["show","title","data","component"])])),_:1},8,["install"])])),_:1})}}}),Be=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"}));export{Pe as a,Be as b,fe as i};