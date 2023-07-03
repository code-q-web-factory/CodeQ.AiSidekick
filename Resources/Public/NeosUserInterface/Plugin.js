(()=>{var _e=Object.create;var ne=Object.defineProperty;var le=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var Ie=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var Re=(n,e)=>()=>(n&&(e=n(n=0)),e);var W=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var Ke=(n,e,t,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Fe(e))!Te.call(n,r)&&r!==t&&ne(n,r,{get:()=>e[r],enumerable:!(s=le(e,r))||s.enumerable});return n};var S=(n,e,t)=>(t=n!=null?_e(Ie(n)):{},Ke(e||!n||!n.__esModule?ne(t,"default",{value:n,enumerable:!0}):t,n));var G=(n,e,t,s)=>{for(var r=s>1?void 0:s?le(e,t):e,o=n.length-1,i;o>=0;o--)(i=n[o])&&(r=(s?i(e,t,r):i(r))||r);return s&&r&&ne(e,t,r),r};function k(n){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${n}`])return window["@Neos:HostPluginAPI"][`@${n}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var T=Re(()=>{});var J=W((dt,me)=>{T();me.exports=k("NeosProjectPackages")().ReactUiComponents});var $=W((lt,ge)=>{T();ge.exports=k("NeosProjectPackages")().NeosUiReduxStore});var Y=W((mt,fe)=>{T();fe.exports=k("vendor")().React});var Q=W((ft,he)=>{T();he.exports=k("vendor")().reactRedux});var re=W((yt,ye)=>{T();ye.exports=k("vendor")().reduxSagaEffects});var oe=W((vt,Se)=>{T();Se.exports=k("vendor")().PropTypes});var ie=W((Nt,ve)=>{T();ve.exports=k("NeosProjectPackages")().NeosUiDecorators});T();var H=class{constructor(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e}};var je=(n,e="position",t="key")=>{let s=typeof e=="string"?c=>c[e]:e,r={},o={},i={},f={},l={},g={};n.forEach((c,y)=>{let p=c[t]?c[t]:String(y);r[p]=y;let N=s(c),h=String(N||y),B=!1;if(h.startsWith("start")){let d=h.match(/start\s+(\d+)/),m=d&&d[1]?Number(d[1]):0;i[m]||(i[m]=[]),i[m].push(p)}else if(h.startsWith("end")){let d=h.match(/end\s+(\d+)/),m=d&&d[1]?Number(d[1]):0;f[m]||(f[m]=[]),f[m].push(p)}else if(h.startsWith("before")){let d=h.match(/before\s+(\S+)(\s+(\d+))?/);if(!d)B=!0;else{let m=d[1],O=d[3]?Number(d[3]):0;l[m]||(l[m]={}),l[m][O]||(l[m][O]=[]),l[m][O].push(p)}}else if(h.startsWith("after")){let d=h.match(/after\s+(\S+)(\s+(\d+))?/);if(!d)B=!0;else{let m=d[1],O=d[3]?Number(d[3]):0;g[m]||(g[m]={}),g[m][O]||(g[m][O]=[]),g[m][O].push(p)}}else B=!0;if(B){let d=parseFloat(h);(isNaN(d)||!isFinite(d))&&(d=y),o[d]||(o[d]=[]),o[d].push(p)}});let a=[],u=[],E=[],F=[],b=(c,y)=>{let p=Object.keys(c).map(N=>Number(N)).sort((N,h)=>N-h);return y?p:p.reverse()},v=(c,y)=>{c.forEach(p=>{if(!(F.indexOf(p)>=0)){if(F.push(p),l[p]){let N=b(l[p],!0);for(let h of N)v(l[p][h],y)}if(y.push(p),g[p]){let N=b(g[p],!1);for(let h of N)v(g[p][h],y)}}})};for(let c of b(i,!1))v(i[c],a);for(let c of b(o,!0))v(o[c],u);for(let c of b(f,!0))v(f[c],E);for(let c of Object.keys(l))if(!(F.indexOf(c)>=0))for(let y of b(l[c],!1))v(l[c][y],a);for(let c of Object.keys(g))if(!(F.indexOf(c)>=0))for(let y of b(g[c],!1))v(g[c][y],u);return[...a,...u,...E].map(c=>r[c]).map(c=>n[c])},se=je;var M=class extends H{constructor(e){super(e),this._registry=[]}set(e,t,s=0){if(typeof e!="string")throw new Error("Key must be a string");if(typeof s!="string"&&typeof s!="number")throw new Error("Position must be a string or a number");let r={key:e,value:t};s&&(r.position=s);let o=this._registry.findIndex(i=>i.key===e);return o===-1?this._registry.push(r):this._registry[o]=r,t}get(e){if(typeof e!="string")return console.error("Key must be a string"),null;let t=this._registry.find(s=>s.key===e);return t?t.value:null}_getChildrenWrapped(e){let t=this._registry.filter(s=>s.key.indexOf(e+"/")===0);return se(t)}getChildrenAsObject(e){let t={};return this._getChildrenWrapped(e).forEach(s=>{t[s.key]=s.value}),t}getChildren(e){return this._getChildrenWrapped(e).map(t=>t.value)}has(e){return typeof e!="string"?(console.error("Key must be a string"),!1):!!this._registry.find(t=>t.key===e)}_getAllWrapped(){return se(this._registry)}getAllAsObject(){let e={};return this._getAllWrapped().forEach(t=>{e[t.key]=t.value}),e}getAllAsList(){return this._getAllWrapped().map(e=>Object.assign({id:e.key},e.value))}};var pe=k("manifest");var V=S(J()),U=S($()),x=S(Y()),ue=S(Q()),De=S(re());var P=S(Y()),ke=S(Q()),A=S(oe()),Ne=S(ie()),L=S(J()),X=S($());var Me={autoFocus:!1,disabled:!1,maxlength:null,readonly:!1},R=class extends P.Component{constructor(t){super(t);this.state={loading:!1};this.getIcon=t=>t?P.default.createElement(L.Icon,{icon:"spinner",size:"",fixedWidth:!0,padded:"right",spin:!0}):P.default.createElement(L.Icon,{icon:"magic",size:"",fixedWidth:!0,padded:"right"});this.fetch=async t=>{let{commit:s,externalService:r,contentService:o,activeContentDimensions:i,addFlashMessage:f,i18nRegistry:l}=this.props;this.setState({loading:!0});let g=o.getCurrentDocumentNode()?.properties?.title,a=o.getGuestFrameDocumentHtml();try{let u=await r.generate(t,i.language?i.language[0]:"",g,a);s(u)}catch(u){console.error(u),f("NEOSidekick.AiAssistant",l.translate("NEOSidekick.AiAssistant:Main:failedToGenerate"),"ERROR")}this.setState({loading:!1})}}render(){let{id:t,value:s,className:r,commit:o,options:i,i18nRegistry:f,onKeyPress:l,onEnterKey:g}=this.props,a=Object.assign({},Me,i),u=i&&i.placeholder&&f.translate(unescape(i.placeholder)),E=!(a.readonly||a.disabled);return P.default.createElement("div",{style:{display:"flex",flexDirection:"column"},className:r},P.default.createElement("div",null,P.default.createElement(L.TextInput,{id:t,value:s,onChange:o,disabled:a.disabled||this.state.loading,maxLength:a.maxlength,readOnly:a.readonly,placeholder:u,onKeyPress:l,onEnterKey:g})),E?P.default.createElement("div",null,P.default.createElement(L.Button,{className:"generateBtn",size:"regular",icon:this.state.loading?"hourglass":"magic",style:"neutral",hoverStyle:"clean",disabled:this.state.loading,onClick:async()=>await this.fetch(a.module)},f.translate("NEOSidekick.AiAssistant:Main:generate"),"\xA0",this.getIcon(this.state.loading))):null)}};R.propTypes={className:A.default.string,value:A.default.oneOfType([A.default.string,A.default.number]),commit:A.default.func.isRequired,options:A.default.object,onKeyPress:A.default.func,onEnterKey:A.default.func,id:A.default.string,activeContentDimensions:A.default.object.isRequired,i18nRegistry:A.default.object.isRequired,externalService:A.default.object.isRequired,contentService:A.default.object.isRequired,addFlashMessage:A.default.func.isRequired},R.defaultProps={options:{}},R=G([(0,Ne.neos)(n=>({i18nRegistry:n.get("i18n"),externalService:n.get("NEOSidekick.AiAssistant").get("externalService"),contentService:n.get("NEOSidekick.AiAssistant").get("contentService")})),(0,ke.connect)(n=>({activeContentDimensions:X.selectors.CR.ContentDimensions.active(n)}),{addFlashMessage:X.actions.UI.FlashMessages.add})],R);var _=S(Y()),Ae=S(Q()),C=S(oe()),Ce=S(ie()),q=S(J()),Z=S($());var We={autoFocus:!1,disabled:!1,maxlength:null,readonly:!1},K=class extends _.Component{constructor(t){super(t);this.getIcon=t=>t?_.default.createElement(q.Icon,{icon:"spinner",size:"",fixedWidth:!0,padded:"right",spin:!0}):_.default.createElement(q.Icon,{icon:"magic",size:"",fixedWidth:!0,padded:"right"});this.fetch=async t=>{let{commit:s,externalService:r,contentService:o,activeContentDimensions:i,addFlashMessage:f,i18nRegistry:l}=this.props;this.setState({loading:!0});let g=o.getCurrentDocumentNode()?.properties?.title,a=o.getGuestFrameDocumentHtml();try{let u=await r.generate(t,i.language?i.language[0]:"",g,a);s(u)}catch(u){console.error(u),f(u?.code??u?.message,u?.code?l.translate("NEOSidekick.AiAssistant:Error:"+u.code):u?.message,u?.severity??"error")}this.setState({loading:!1})};this.state={loading:!1}}render(){let{id:t,value:s,className:r,commit:o,options:i,i18nRegistry:f,onKeyPress:l,onEnterKey:g}=this.props,a=Object.assign({},We,i),u=i&&i.placeholder&&f.translate(unescape(i.placeholder)),E=!(a.readonly||a.disabled);return _.default.createElement("div",{style:{display:"flex",flexDirection:"column"},className:r},_.default.createElement("div",null,_.default.createElement(q.TextArea,{id:t,value:s,onChange:o,disabled:a.disabled||this.state.loading,maxLength:a.maxlength,readOnly:a.readonly,placeholder:u,minRows:a.minRows,expandedRows:a.expandedRows,onKeyPress:l,onEnterKey:g})),E?_.default.createElement("div",null,_.default.createElement(q.Button,{className:"generateBtn",size:"regular",icon:this.state.loading?"hourglass":"magic",style:"neutral",hoverStyle:"clean",disabled:this.state.loading,onClick:async()=>await this.fetch(a.module)},f.translate("NEOSidekick.AiAssistant:Main:generate"),"\xA0",this.getIcon(this.state.loading))):null)}};K.propTypes={className:C.default.string,value:C.default.oneOfType([C.default.string,C.default.number]),commit:C.default.func.isRequired,options:C.default.object,onKeyPress:C.default.func,onEnterKey:C.default.func,id:C.default.string,activeContentDimensions:C.default.object.isRequired,i18nRegistry:C.default.object.isRequired,externalService:C.default.object.isRequired,contentService:C.default.object.isRequired,addFlashMessage:C.default.func.isRequired},K.defaultProps={options:{}},K=G([(0,Ce.neos)(n=>({i18nRegistry:n.get("i18n"),externalService:n.get("NEOSidekick.AiAssistant").get("externalService"),contentService:n.get("NEOSidekick.AiAssistant").get("contentService")})),(0,Ae.connect)(n=>({activeContentDimensions:Z.selectors.CR.ContentDimensions.active(n)}),{addFlashMessage:Z.actions.UI.FlashMessages.add})],K);var j=class extends Error{constructor(t,s){super(t);this.severity="error";this.code=s}};var Ee=n=>{let e=n["NEOSidekick.AiAssistant"];return new ae(e.apiDomain,e.apiKey)},ae=class{constructor(e,t){this.apiDomain="";this.apiKey="";this.generate=async(e,t,s,r)=>{if(!this.apiKey)throw new j("This feature is not available in the free version.","1688157373215");let o=await fetch(`${this.apiDomain}/api/v1/chat?language=${t}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`,Accept:"application/json"},body:JSON.stringify({module:"meta_description",platform:"neos",user_input:[{identifier:"title",value:s},{identifier:"content",value:r}]})});if(o.status===401)throw new j("The AISidekick api key provided is not valid.","1688158193038");if(o.status<200||o.status>=400)throw new j("An error occurred while asking AISidekick.","1688158257149");return(await o.json())?.data?.message?.message};this.apiDomain=e,this.apiKey=t}};var we=(n,e)=>new ce(n,e),ce=class{constructor(e,t){this.getGuestFrameDocumentHtml=()=>document.getElementsByName("neos-content-main")[0]?.contentDocument?.body?.innerHTML;this.getCurrentDocumentNode=()=>{let e=this.store.getState(),t=e?.cr?.nodes?.documentNode;return e?.cr?.nodes?.byContextPath[t]};this.getCurrentDocumentNodeType=()=>{let e=this.getCurrentDocumentNode();return this.globalRegistry.get("@neos-project/neos-ui-contentrepository").get(e?.nodeType)};this.getCurrentDocumentTargetAudience=()=>{let e=this.getCurrentDocumentNode(),t=this.getCurrentDocumentNodeType()?.options?.sidekick?.targetAudience;return t?this.processClientEval(t,e,e):null};this.getCurrentDocumentPageBriefing=()=>{let e=this.getCurrentDocumentNode(),t=this.getCurrentDocumentNodeType()?.options?.sidekick?.pageBriefing;return t?this.processClientEval(t,e,e):null};this.getCurrentDocumentFocusKeyword=()=>{let e=this.getCurrentDocumentNode(),t=this.getCurrentDocumentNodeType()?.options?.sidekick?.focusKeyword;return t?this.processClientEval(t,e,e):null};this.processClientEval=(e,t,s)=>{if(typeof e=="string"&&e.startsWith("ClientEval:"))try{return new Function("node,parentNode","return "+e.replace("ClientEval:",""))(t,s)}catch(r){console.warn('An error occurred while trying to evaluate "'+e+`"
`,r)}return e};this.globalRegistry=e,this.store=t}};var xe=S(re()),z=S($());var be=(n,e)=>function*(){yield(0,xe.takeEvery)(z.actionTypes.ServerFeedback.HANDLE_SERVER_FEEDBACK,function*(t){t.payload.feedbackEnvelope.feedbacks.forEach(s=>{if(s.type!=="Neos.Neos.Ui:NodeCreated")return;let r=n.get("@neos-project/neos-ui-contentrepository"),o=n.get("NEOSidekick.AiAssistant").get("contentService"),i=n.get("NEOSidekick.AiAssistant").get("assistantService"),f=e.getState(),l=z.selectors.CR.Nodes.nodesByContextPathSelector(f)[s.payload.contextPath],g=z.selectors.CR.Nodes.nodesByContextPathSelector(f)[l.parent],a=r.get(l.nodeType);Object.keys(a.properties).forEach(u=>{if(u[0]==="_")return;let E=a.properties[u];if(!E?.options?.sidekick?.onCreate)return;if(!E?.ui?.inlineEditable)throw new j("You can only generate content on inline editable properties","1688395273728");let F=o.processClientEval(E.options.sidekick.onCreate.arguments.topic,l,g);i.sendMessageToIframe({version:"1.0",eventName:"call-module",data:{plattform:"neos",module:"paragraph_generator",arguments:{topic:F},target:{nodePath:l.contextPath,propertyName:u}}})})})})};var Oe=(n,e)=>new de(n,e),de=class{constructor(e,t){this.sendMessageToIframe=e=>{let t=setInterval(()=>{let s=document.getElementById("neosidekickAssistant");if(s.dataset.hasOwnProperty("loaded"))console.log("loaded, sending message to frame",e),s.contentWindow.postMessage(e,"*"),clearInterval(t);else{console.log("not loaded, waiting...");return}},250)};this.listenToMessages=()=>{let e=setInterval(()=>{let t=document.getElementById("neosidekickAssistant");if(t?.dataset?.hasOwnProperty("loaded"))window.addEventListener("message",r=>{let o=t.contentWindow;r.source===o&&(console.log(r),this.handleMessage(r))}),clearInterval(e);else return},250)};this.handleMessage=e=>{if(e.data.eventName==="write-content"){let{contextPath:t,propertyName:s,propertyValue:r}=e.data.data;this.changePropertyValue(t,s,r)}};this.changePropertyValue=(e,t,s)=>{let i=(document.getElementsByName("neos-content-main")[0]?.contentDocument).querySelector(`[data-__neos-editable-node-contextpath="${e}"][data-__neos-property="${t}"]`);setTimeout(()=>{i.ckeditorInstance.setData(s)},100)};this.globalRegistry=e,this.store=t}};function Pe(n){return new Promise(e=>setTimeout(e,n))}pe("NEOSidekick.AiAssistant",{},(n,{store:e,frontendConfiguration:t})=>{let s=t["NEOSidekick.AiAssistant"];if(s===null||s.enabled===!1)return;n.set("NEOSidekick.AiAssistant",new M("test"));let r=Ee(t);n.get("NEOSidekick.AiAssistant").set("externalService",r);let o=we(n,e);n.get("NEOSidekick.AiAssistant").set("contentService",o);let i=Oe(n,e);n.get("NEOSidekick.AiAssistant").set("assistantService",i),i.listenToMessages();let f=n.get("containers"),l=f.get("App"),g=b=>{let v=localStorage.getItem("NEOSidekick")?JSON.parse(localStorage.getItem("NEOSidekick")):{open:!0,fullscreen:!1},[D,c]=x.default.useState(v?.open),y=w=>{c(w),v.open=w,localStorage.setItem("NEOSidekick",JSON.stringify(v))},[p,N]=x.default.useState(v?.fullscreen),h=w=>{N(w),v.fullscreen=w,localStorage.setItem("NEOSidekick",JSON.stringify(v))},B=(w,ee,te)=>{if(w)return x.default.createElement(V.IconButton,{icon:ee?"compress":"expand",onClick:te})},d=(w,ee,te)=>{if(!ee)return x.default.createElement(V.IconButton,{icon:w?"chevron-circle-right":"chevron-circle-left",onClick:te})},m=(0,ue.useSelector)(U.selectors.CR.ContentDimensions.active),O=(0,ue.useSelector)(w=>w?.user?.preferences?.interfaceLanguage),I=new URL(`${s.apiDomain}/chat/`);return I.searchParams.append("contentLanguage",m.language?m.language[0]:""),I.searchParams.append("interfaceLanguage",O),I.searchParams.append("userId",s.userId),I.searchParams.append("plattform","neos"),I.searchParams.append("domain",s.domain),I.searchParams.append("siteName",s.siteName),s?.referral&&I.searchParams.append("referral",s?.referral),s?.apiKey&&I.searchParams.append("apikey",s?.apiKey),x.default.createElement("div",{className:`neosidekick_appWrapper ${D?"neosidekick_appWrapper--sidebar-open":""}  ${p?"neosidekick_appWrapper--sidebar-fullscreen":""}`},x.default.createElement(l,{...b}),x.default.createElement("div",{className:"neosidekick_sideBar"},x.default.createElement("div",{className:"neosidekick_sideBar__title"},x.default.createElement(V.Headline,{className:`neosidekick_sideBar__title-headline ${D?"neosidekick_sideBar__title-headline--open":""}`},"AI Sidekick"),x.default.createElement("div",null,B(D,p,()=>h(!p)),d(D,p,()=>y(!D)))),x.default.createElement("iframe",{id:"neosidekickAssistant",className:`neosidekick_sideBar__frame ${D?"neosidekick_sideBar__frame--open":""}`,src:I.toString(),allow:"clipboard-write",onLoad:w=>w.target.dataset.loaded=!0})))};f.set("App",g);let a=!1,u=function*(){yield(0,De.takeLatest)([U.actionTypes.UI.ContentCanvas.SET_SRC,U.actionTypes.UI.ContentCanvas.RELOAD,U.actionTypes.CR.Nodes.MERGE],function*(b){b.type===U.actionTypes.UI.ContentCanvas.SET_SRC&&(a=!0),yield Pe(500);let v=n.get("@neos-project/neos-ui-contentrepository"),D=e.getState(),y=document.getElementsByName("neos-content-main")[0]?.contentDocument,p=D?.ui?.contentCanvas?.previewUrl,N=o.getCurrentDocumentNode(),h=N?.contextPath,B=Object.values(D?.cr?.nodes?.byContextPath||{}).filter(d=>{let m=v.getRole("document");if(!m)throw new Error("Document role is not loaded!");let O=v.getSubTypesOf(m);return h&&d.contextPath.indexOf(h.split("@")[0])===0&&(d.contextPath===h||!O.includes(d.nodeType))});i.sendMessageToIframe({version:"1.0",eventName:a?"page-changed":"page-updated",data:{url:p,title:N?.properties?.title||y?.title,content:y?.body?.innerHTML,structuredContent:B,targetAudience:o.getCurrentDocumentTargetAudience(),pageBriefing:o.getCurrentDocumentPageBriefing(),focusKeyword:o.getCurrentDocumentFocusKeyword()}}),a=!1})},E=n.get("sagas");E.set("NEOSidekick.AiAssistant/watchDocumentNodeChange",{saga:u}),E.set("NEOSidekick.AiAssistant/watchNodeCreated",{saga:be(n,e)});let F=n.get("inspector").get("editors");F.set("NEOSidekick.AiAssistant/Inspector/Editors/MagicTextFieldEditor",{component:R}),F.set("NEOSidekick.AiAssistant/Inspector/Editors/MagicTextAreaEditor",{component:K})});})();
//# sourceMappingURL=Plugin.js.map
