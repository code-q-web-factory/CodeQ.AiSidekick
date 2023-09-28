(()=>{var Re=Object.create;var se=Object.defineProperty;var ue=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var Ke=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var Be=(s,e)=>()=>(s&&(e=s(s=0)),e);var B=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var He=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Ie(e))!We.call(s,r)&&r!==t&&se(s,r,{get:()=>e[r],enumerable:!(n=ue(e,r))||n.enumerable});return s};var h=(s,e,t)=>(t=s!=null?Re(Ke(s)):{},He(e||!s||!s.__esModule?se(t,"default",{value:s,enumerable:!0}):t,s));var Y=(s,e,t,n)=>{for(var r=n>1?void 0:n?ue(e,t):e,o=s.length-1,i;o>=0;o--)(i=s[o])&&(r=(n?i(e,t,r):i(r))||r);return n&&r&&se(e,t,r),r};function S(s){return(...e)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${s}`])return window["@Neos:HostPluginAPI"][`@${s}`](...e);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var F=Be(()=>{});var Q=B((gt,pe)=>{F();pe.exports=S("NeosProjectPackages")().ReactUiComponents});var H=B((ht,ge)=>{F();ge.exports=S("NeosProjectPackages")().NeosUiReduxStore});var X=B((vt,fe)=>{F();fe.exports=S("vendor")().React});var Z=B((Nt,he)=>{F();he.exports=S("vendor")().reactRedux});var ee=B((Ct,ye)=>{F();ye.exports=S("vendor")().reduxSagaEffects});var oe=B((Et,ve)=>{F();ve.exports=S("vendor")().PropTypes});var ie=B((bt,Se)=>{F();Se.exports=S("NeosProjectPackages")().NeosUiDecorators});F();var V=class{constructor(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e}};var Le=(s,e="position",t="key")=>{let n=typeof e=="string"?c=>c[e]:e,r={},o={},i={},l={},p={},g={};s.forEach((c,C)=>{let u=c[t]?c[t]:String(C);r[u]=C;let P=n(c),v=String(P||C),_=!1;if(v.startsWith("start")){let m=v.match(/start\s+(\d+)/),f=m&&m[1]?Number(m[1]):0;i[f]||(i[f]=[]),i[f].push(u)}else if(v.startsWith("end")){let m=v.match(/end\s+(\d+)/),f=m&&m[1]?Number(m[1]):0;l[f]||(l[f]=[]),l[f].push(u)}else if(v.startsWith("before")){let m=v.match(/before\s+(\S+)(\s+(\d+))?/);if(!m)_=!0;else{let f=m[1],M=m[3]?Number(m[3]):0;p[f]||(p[f]={}),p[f][M]||(p[f][M]=[]),p[f][M].push(u)}}else if(v.startsWith("after")){let m=v.match(/after\s+(\S+)(\s+(\d+))?/);if(!m)_=!0;else{let f=m[1],M=m[3]?Number(m[3]):0;g[f]||(g[f]={}),g[f][M]||(g[f][M]=[]),g[f][M].push(u)}}else _=!0;if(_){let m=parseFloat(v);(isNaN(m)||!isFinite(m))&&(m=C),o[m]||(o[m]=[]),o[m].push(u)}});let a=[],O=[],w=[],d=[],y=(c,C)=>{let u=Object.keys(c).map(P=>Number(P)).sort((P,v)=>P-v);return C?u:u.reverse()},N=(c,C)=>{c.forEach(u=>{if(!(d.indexOf(u)>=0)){if(d.push(u),p[u]){let P=y(p[u],!0);for(let v of P)N(p[u][v],C)}if(C.push(u),g[u]){let P=y(g[u],!1);for(let v of P)N(g[u][v],C)}}})};for(let c of y(i,!1))N(i[c],a);for(let c of y(o,!0))N(o[c],O);for(let c of y(l,!0))N(l[c],w);for(let c of Object.keys(p))if(!(d.indexOf(c)>=0))for(let C of y(p[c],!1))N(p[c][C],a);for(let c of Object.keys(g))if(!(d.indexOf(c)>=0))for(let C of y(g[c],!1))N(g[c][C],O);return[...a,...O,...w].map(c=>r[c]).map(c=>s[c])},re=Le;var W=class extends V{constructor(e){super(e),this._registry=[]}set(e,t,n=0){if(typeof e!="string")throw new Error("Key must be a string");if(typeof n!="string"&&typeof n!="number")throw new Error("Position must be a string or a number");let r={key:e,value:t};n&&(r.position=n);let o=this._registry.findIndex(i=>i.key===e);return o===-1?this._registry.push(r):this._registry[o]=r,t}get(e){if(typeof e!="string")return console.error("Key must be a string"),null;let t=this._registry.find(n=>n.key===e);return t?t.value:null}_getChildrenWrapped(e){let t=this._registry.filter(n=>n.key.indexOf(e+"/")===0);return re(t)}getChildrenAsObject(e){let t={};return this._getChildrenWrapped(e).forEach(n=>{t[n.key]=n.value}),t}getChildren(e){return this._getChildrenWrapped(e).map(t=>t.value)}has(e){return typeof e!="string"?(console.error("Key must be a string"),!1):!!this._registry.find(t=>t.key===e)}_getAllWrapped(){return re(this._registry)}getAllAsObject(){let e={};return this._getAllWrapped().forEach(t=>{e[t.key]=t.value}),e}getAllAsList(){return this._getAllWrapped().map(e=>Object.assign({id:e.key},e.value))}};var me=S("manifest");var J=h(Q()),$=h(H()),D=h(X()),le=h(Z()),_e=h(ee());var j=h(X()),Ne=h(Z()),A=h(oe()),ke=h(ie()),L=h(Q()),z=h(H());var qe={autoFocus:!1,disabled:!1,maxlength:null,readonly:!1},I=class extends j.Component{constructor(t){super(t);this.state={loading:!1};this.getIcon=t=>t?j.default.createElement(L.Icon,{icon:"spinner",size:"",fixedWidth:!0,padded:"right",spin:!0}):j.default.createElement(L.Icon,{icon:"magic",size:"",fixedWidth:!0,padded:"right"});this.fetch=async(t,n)=>{let{commit:r,externalService:o,contentService:i,activeContentDimensions:l,addFlashMessage:p,i18nRegistry:g,node:a,parentNode:O,frontendConfiguration:w}=this.props;this.setState({loading:!0});try{n=await i.processObjectWithClientEval(Object.assign({},n),a,O),n=Object.keys(n).map(y=>({identifier:y,value:n[y]}));let d=await o.generate(t,l.language?l.language[0]:w.defaultLanguage,n);r(d)}catch(d){p(d?.code??d?.message,d?.code?g.translate("NEOSidekick.AiAssistant:Error:"+d.code,d.message,{0:d.externalMessage}):d.message,d?.severity??"error")}finally{this.setState({loading:!1})}}}render(){let{id:t,value:n,className:r,commit:o,options:i,i18nRegistry:l,onKeyPress:p,onEnterKey:g}=this.props,a=Object.assign({},qe,i),O=i&&i.placeholder&&l.translate(unescape(i.placeholder)),w=!(a.readonly||a.disabled);return j.default.createElement("div",{style:{display:"flex",flexDirection:"column"},className:r},j.default.createElement("div",null,j.default.createElement(L.TextInput,{id:t,value:n,onChange:o,disabled:a.disabled||this.state.loading,maxLength:a.maxlength,readOnly:a.readonly,placeholder:O,onKeyPress:p,onEnterKey:g})),w?j.default.createElement("div",{style:{"margin-top":"4px"}},j.default.createElement(L.Button,{className:"generateBtn",size:"regular",icon:this.state.loading?"hourglass":"magic",style:"neutral",hoverStyle:"clean",disabled:this.state.loading,onClick:async()=>await this.fetch(a.module,a.arguments??{})},l.translate("NEOSidekick.AiAssistant:Main:generate"),"\xA0",this.getIcon(this.state.loading))):null)}};I.propTypes={className:A.default.string,value:A.default.oneOfType([A.default.string,A.default.number]),commit:A.default.func.isRequired,options:A.default.object,onKeyPress:A.default.func,onEnterKey:A.default.func,id:A.default.string,activeContentDimensions:A.default.object.isRequired,node:A.default.object,parentNode:A.default.object,i18nRegistry:A.default.object.isRequired,externalService:A.default.object.isRequired,contentService:A.default.object.isRequired,addFlashMessage:A.default.func.isRequired,frontendConfiguration:A.default.object},I.defaultProps={options:{}},I=Y([(0,ke.neos)(s=>({i18nRegistry:s.get("i18n"),externalService:s.get("NEOSidekick.AiAssistant").get("externalService"),contentService:s.get("NEOSidekick.AiAssistant").get("contentService"),frontendConfiguration:s.get("NEOSidekick.AiAssistant").get("configuration")})),(0,Ne.connect)(s=>e=>{let t=z.selectors.CR.ContentDimensions.active(e),n=z.selectors.CR.Nodes.focusedSelector(e),r=z.selectors.CR.Nodes.nodeByContextPath(e)(n.parent);return{activeContentDimensions:t,node:n,parentNode:r}},{addFlashMessage:z.actions.UI.FlashMessages.add})],I);var T=h(X()),Ce=h(Z()),E=h(oe()),Ae=h(ie()),U=h(Q()),G=h(H());var $e={autoFocus:!1,disabled:!1,maxlength:null,readonly:!1},K=class extends T.Component{constructor(t){super(t);this.getIcon=t=>t?T.default.createElement(U.Icon,{icon:"spinner",size:"",fixedWidth:!0,padded:"right",spin:!0}):T.default.createElement(U.Icon,{icon:"magic",size:"",fixedWidth:!0,padded:"right"});this.fetch=async(t,n)=>{let{commit:r,externalService:o,contentService:i,activeContentDimensions:l,addFlashMessage:p,i18nRegistry:g,node:a,parentNode:O,frontendConfiguration:w}=this.props;this.setState({loading:!0});try{n=await i.processObjectWithClientEval(Object.assign({},n),a,O),n=Object.keys(n).map(y=>({identifier:y,value:n[y]}));let d=await o.generate(t,l.language?l.language[0]:w.defaultLanguage,n);r(d)}catch(d){p(d?.code??d?.message,d?.code?g.translate("NEOSidekick.AiAssistant:Error:"+d.code,d.message,{0:d.externalMessage}):d.message,d?.severity??"error")}finally{this.setState({loading:!1})}};this.state={loading:!1}}render(){let{id:t,value:n,className:r,commit:o,options:i,i18nRegistry:l,onKeyPress:p,onEnterKey:g}=this.props,a=Object.assign({},$e,i),O=i&&i.placeholder&&l.translate(unescape(i.placeholder)),w=!(a.readonly||a.disabled);return T.default.createElement("div",{style:{display:"flex",flexDirection:"column"},className:r},T.default.createElement("div",null,T.default.createElement(U.TextArea,{id:t,value:n,onChange:o,disabled:a.disabled||this.state.loading,maxLength:a.maxlength,readOnly:a.readonly,placeholder:O,minRows:a.minRows,expandedRows:a.expandedRows,onKeyPress:p,onEnterKey:g})),w?T.default.createElement("div",null,T.default.createElement(U.Button,{className:"generateBtn",size:"regular",icon:this.state.loading?"hourglass":"magic",style:"neutral",hoverStyle:"clean",disabled:this.state.loading,onClick:async()=>await this.fetch(a.module,a.arguments??{})},l.translate("NEOSidekick.AiAssistant:Main:generate"),"\xA0",this.getIcon(this.state.loading))):null)}};K.propTypes={className:E.default.string,value:E.default.oneOfType([E.default.string,E.default.number]),commit:E.default.func.isRequired,options:E.default.object,onKeyPress:E.default.func,onEnterKey:E.default.func,id:E.default.string,activeContentDimensions:E.default.object.isRequired,node:E.default.object,parentNode:E.default.object,i18nRegistry:E.default.object.isRequired,externalService:E.default.object.isRequired,contentService:E.default.object.isRequired,addFlashMessage:E.default.func.isRequired,frontendConfiguration:E.default.object},K.defaultProps={options:{}},K=Y([(0,Ae.neos)(s=>({i18nRegistry:s.get("i18n"),externalService:s.get("NEOSidekick.AiAssistant").get("externalService"),contentService:s.get("NEOSidekick.AiAssistant").get("contentService"),frontendConfiguration:s.get("NEOSidekick.AiAssistant").get("configuration")})),(0,Ce.connect)(s=>e=>{let t=G.selectors.CR.ContentDimensions.active(e),n=G.selectors.CR.Nodes.focusedSelector(e),r=G.selectors.CR.Nodes.nodeByContextPath(e)(n.parent);return{activeContentDimensions:t,node:n,parentNode:r}},{addFlashMessage:G.actions.UI.FlashMessages.add})],K);var b=class extends Error{constructor(t,n,r){super(t);this.severity="error";this.code=n,this.externalMessage=r}};var Ee=s=>{let e=s["NEOSidekick.AiAssistant"];return new ae(e.apiDomain,e.apiKey)},ae=class{constructor(e,t){this.apiDomain="";this.apiKey="";this.hasApiKey=()=>this.apiKey!==null&&this.apiKey!=="";this.generate=async(e,t,n={})=>{if(!this.apiKey)throw new b("This feature is not available in the free version.","1688157373215");let r=await fetch(`${this.apiDomain}/api/v1/chat?language=${t}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`,Accept:"application/json"},body:JSON.stringify({module:e,platform:"neos",user_input:n})}),o=await r.json();if(r.status===401)throw new b("The NEOSidekick api key provided is not valid.","1688158193038");if(r.status<200||r.status>=400)throw new b("An error occurred while asking NEOSidekick.","1688158257149",o?.message);let i=o?.data?.message?.message;return i.startsWith('"')&&i.endsWith('"')&&(i=i.substr(1,i.length-2)),i};this.apiDomain=e,this.apiKey=t}};F();var we=S("NeosProjectPackages")().NeosUiBackendConnectorDefault,{fetchWithErrorHandling:It}=S("NeosProjectPackages")().NeosUiBackendConnector;var be=(s,e)=>new ce(s,e),ce=class{constructor(e,t){this.getGuestFrameDocumentTitle=()=>document.getElementsByName("neos-content-main")[0]?.contentDocument?.title;this.getGuestFrameDocumentHtml=()=>document.getElementsByName("neos-content-main")[0]?.contentDocument?.body?.innerHTML;this.getCurrentDocumentNode=()=>{let e=this.store.getState(),t=e?.cr?.nodes?.documentNode;return e?.cr?.nodes?.byContextPath[t]};this.getCurrentDocumentParentNode=()=>{let e=this.store.getState(),t=this.getCurrentDocumentNode();return e?.cr?.nodes?.byContextPath[t.parent]};this.getCurrentDocumentNodeType=()=>{let e=this.getCurrentDocumentNode();return this.globalRegistry.get("@neos-project/neos-ui-contentrepository").get(e?.nodeType)};this.getCurrentDocumentTargetAudience=async()=>{let e=this.getCurrentDocumentNodeType()?.options?.sidekick?.targetAudience;return e?await this.processClientEval(e):null};this.getCurrentDocumentPageBriefing=async()=>{let e=this.getCurrentDocumentNodeType()?.options?.sidekick?.pageBriefing;return e?await this.processClientEval(e):null};this.getCurrentDocumentFocusKeyword=async()=>{let e=this.getCurrentDocumentNodeType()?.options?.sidekick?.focusKeyword;return e?await this.processClientEval(e):null};this.processClientEval=async(e,t=null,n=null)=>{if(typeof e=="string"&&(e.startsWith("SidekickClientEval:")||e.startsWith("ClientEval:")))try{t=t??this.getCurrentDocumentNode(),n=n??this.getCurrentDocumentParentNode();let r=this.getGuestFrameDocumentTitle(),o=this.getGuestFrameDocumentHtml(),i=await this.getImageMetadata,l=Object.getPrototypeOf(async function(){}).constructor;return await new l("node,parentNode,documentTitle,documentContent,AssetUri","return "+e.replace("SidekickClientEval:","").replace("ClientEval:",""))(t,n,r,o,i)}catch(r){throw r instanceof b?r:(console.error(r),new b('An error occurred while trying to evaluate "'+e+'"',1694682118365,e))}return e};this.processObjectWithClientEval=async(e,t=null,n=null)=>(await Promise.all(Object.keys(e).map(async r=>{let o=e[r];typeof o=="string"&&(e[r]=await this.processClientEval(o,t,n)),typeof o=="object"&&o!==null&&(e[r]=await this.processObjectWithClientEval(o,t,n)),Array.isArray(o)&&(e[r]=await Promise.all(o.map(async i=>await this.processObjectWithClientEval(i,t,n))))})),e);this.getImageMetadata=async e=>{if(!e||!e?.__identity)throw new b("The property does not have a valid image.",1694595562191);let{loadImageMetadata:t}=we.get().endpoints,n;try{n=(await t(e?.__identity))?.originalImageResourceUri}catch{throw new b("Could not fetch image object.",1694595598880)}if(!n||n==="")throw new b("The given image does not have a correct url.",1694595462402);let r=this.globalRegistry.get("NEOSidekick.AiAssistant").get("configuration").domain;return n=n.replace("http://","").replace("https://").split("/"),n.shift(),n.unshift(r),n.join("/")};this.globalRegistry=e,this.store=t}};var Oe=h(ee()),q=h(H());var Pe=(s,e)=>function*(){yield(0,Oe.takeEvery)(q.actionTypes.ServerFeedback.HANDLE_SERVER_FEEDBACK,function*(t){t.payload.feedbackEnvelope.feedbacks.forEach(n=>{if(n.type!=="Neos.Neos.Ui:NodeCreated")return;let r=s.get("@neos-project/neos-ui-contentrepository"),o=s.get("i18n"),i=s.get("NEOSidekick.AiAssistant").get("contentService"),l=s.get("NEOSidekick.AiAssistant").get("assistantService"),p=s.get("NEOSidekick.AiAssistant").get("externalService"),g=e.getState(),a=q.selectors.CR.Nodes.nodesByContextPathSelector(g)[n.payload.contextPath],O=q.selectors.CR.Nodes.nodesByContextPathSelector(g)[a.parent],w=r.get(a.nodeType);Object.keys(w.properties).forEach(d=>{if(d[0]==="_")return;let y=w.properties[d];if(!y?.options?.sidekick?.onCreate)return;try{if(!y?.ui?.inlineEditable)throw new b("You can only generate content on inline editable properties","1688395273728");if(!p.hasApiKey())throw new b("This feature is not available in the free version.","1688157373215")}catch(k){e.dispatch(q.actions.UI.FlashMessages.add(k?.code??k?.message,k?.code?o.translate("NEOSidekick.AiAssistant:Error:"+k.code):k?.message,k?.severity??"error"))}let N=JSON.parse(JSON.stringify(y.options.sidekick.onCreate));i.processObjectWithClientEval(N,a,O).then(k=>{let c={version:"1.0",eventName:"call-module",data:{platform:"neos",target:{nodePath:a.contextPath,propertyName:d},...k}};console.log("Message: ",c),l.sendMessageToIframe(c)})})})})};var xe=h(ee()),De=h(H()),Fe=(s,e)=>function*(){yield(0,xe.takeEvery)(De.actionTypes.CR.Nodes.REMOVE,function*(t){console.log("Payload: ",t);let n=s.get("NEOSidekick.AiAssistant").get("assistantService");if(n.currentlyHandledNodePath===t.payload){n.resetCurrentlyHandledNodePath();let r={version:"1.0",eventName:"cancel-call-module"};console.log("Message: ",r),n.sendMessageToIframe(r)}})};var je=h(H()),Te=(s,e)=>new de(s,e),de=class{constructor(e,t){this.sendMessageToIframe=e=>{if(this.currentlyHandledNodePath&&e?.eventName==="call-module"){this.addFlashMessage("1695668144026","You cannot start two text generations at the same time.");return}e?.eventName==="call-module"&&(this.currentlyHandledNodePath=e?.data?.target?.nodePath);let t=setInterval(()=>{let n=document.getElementById("neosidekickAssistant");if(n.dataset.hasOwnProperty("loaded"))console.log("loaded, sending message to frame",e),n.contentWindow.postMessage(e,"*"),clearInterval(t),e?.eventName==="call-module"&&this.resetCurrentlyHandledNodePathDebounced();else{console.log("not loaded, waiting...");return}},250)};this.listenToMessages=()=>{let e=setInterval(()=>{let t=document.getElementById("neosidekickAssistant");if(t?.dataset?.hasOwnProperty("loaded"))window.addEventListener("message",r=>{let o=t.contentWindow;r.source===o&&(console.log(r),this.handleMessage(r))}),clearInterval(e);else return},250)};this.handleMessage=e=>{if(console.info("Handle Sidekick Message: "+e.data.eventName),e?.data?.eventName==="write-content"){let{nodePath:t,propertyName:n,value:r,isFinished:o}=e.data.data;this.currentlyHandledNodePath=t,this.changePropertyValue(t,n,r,o)}else if(e?.data?.eventName==="stopped-generation")this.resetTypingCaret(),this.resetCurrentlyHandledNodePath();else if(e?.data?.eventName==="error"){let t=e?.data?.data?.message;this.addFlashMessage("1688158257149","An error occurred while asking NEOSidekick: "+t,"error",t),this.resetTypingCaret(),this.resetCurrentlyHandledNodePath()}this.resetCurrentlyHandledNodePathDebounced()};this.changePropertyValue=(e,t,n,r=!1)=>{let l=(document.getElementsByName("neos-content-main")[0]?.contentDocument).querySelector(`[data-__neos-editable-node-contextpath="${e}"][data-__neos-property="${t}"]`);if(!l){this.resetCurrentlyHandledNodePath();return}if(!this.store.getState()?.cr?.nodes?.byContextPath.hasOwnProperty(e)){l.classList.remove("typing-caret"),this.resetCurrentlyHandledNodePath();return}l?.ckeditorInstance?.setData(n),l?.classList.toggle("typing-caret",!r),r&&this.resetCurrentlyHandledNodePath()};this.globalRegistry=e,this.store=t,this.currentlyHandledNodePath=null}resetTypingCaret(){let n=(document.getElementsByName("neos-content-main")[0]?.contentDocument).querySelector(".typing-caret");n&&n.classList.remove("typing-caret")}resetCurrentlyHandledNodePath(){this.currentlyHandledNodePath=null}resetCurrentlyHandledNodePathDebounced(){let e,t=1e3;return()=>{clearTimeout(e),e=setTimeout(()=>{this.currentlyHandledNodePath=null},t)}}addFlashMessage(e,t,n="error",r=null){let o=this.globalRegistry.get("i18n");this.store.dispatch(je.actions.UI.FlashMessages.add(e,o.translate("NEOSidekick.AiAssistant:Error:"+e,t,{0:r}),n))}};function Me(s){return new Promise(e=>setTimeout(e,s))}me("NEOSidekick.AiAssistant",{},(s,{store:e,frontendConfiguration:t})=>{let n=t["NEOSidekick.AiAssistant"];if(n===null||n.enabled===!1)return;if(!n.hasOwnProperty("defaultLanguage")||!n.defaultLanguage){console.error("Could not initialize AiAssistant: defaultLanguage is not configured correctly, see README.");return}s.set("NEOSidekick.AiAssistant",new W),s.get("NEOSidekick.AiAssistant").set("configuration",n);let r=Ee(t);s.get("NEOSidekick.AiAssistant").set("externalService",r);let o=be(s,e);s.get("NEOSidekick.AiAssistant").set("contentService",o);let i=Te(s,e);s.get("NEOSidekick.AiAssistant").set("assistantService",i),i.listenToMessages();let l=s.get("containers"),p=l.get("App"),g=y=>{let N=localStorage.getItem("NEOSidekick")?JSON.parse(localStorage.getItem("NEOSidekick")):{open:!0,fullscreen:!1},[k,c]=D.default.useState(N?.open),C=x=>{c(x),N.open=x,localStorage.setItem("NEOSidekick",JSON.stringify(N))},[u,P]=D.default.useState(N?.fullscreen),v=x=>{P(x),N.fullscreen=x,localStorage.setItem("NEOSidekick",JSON.stringify(N))},_=(x,te,ne)=>{if(x)return D.default.createElement(J.IconButton,{icon:te?"compress":"expand",onClick:ne})},m=(x,te,ne)=>{if(!te)return D.default.createElement(J.IconButton,{icon:x?"chevron-circle-right":"chevron-circle-left",onClick:ne})},f=(0,le.useSelector)($.selectors.CR.ContentDimensions.active),M=(0,le.useSelector)(x=>x?.user?.preferences?.interfaceLanguage),R=new URL(`${n.apiDomain}/chat/`);return R.searchParams.append("contentLanguage",f.language?f.language[0]:n.defaultLanguage),R.searchParams.append("interfaceLanguage",M),R.searchParams.append("userId",n.userId),R.searchParams.append("plattform","neos"),R.searchParams.append("domain",n.domain),R.searchParams.append("siteName",n.siteName),n?.referral&&R.searchParams.append("referral",n?.referral),n?.apiKey&&R.searchParams.append("apikey",n?.apiKey),D.default.createElement("div",{className:`neosidekick_appWrapper ${k?"neosidekick_appWrapper--sidebar-open":""}  ${u?"neosidekick_appWrapper--sidebar-fullscreen":""}`},D.default.createElement(p,{...y}),D.default.createElement("div",{className:"neosidekick_sideBar"},D.default.createElement("div",{className:"neosidekick_sideBar__title"},D.default.createElement(J.Headline,{className:`neosidekick_sideBar__title-headline ${k?"neosidekick_sideBar__title-headline--open":""}`},"AI Sidekick"),D.default.createElement("div",null,_(k,u,()=>v(!u)),m(k,u,()=>C(!k)))),D.default.createElement("iframe",{id:"neosidekickAssistant",className:`neosidekick_sideBar__frame ${k?"neosidekick_sideBar__frame--open":""}`,src:R.toString(),allow:"clipboard-write",onLoad:x=>x.target.dataset.loaded=!0})))};l.set("App",g);let a=!1,O=function*(){yield(0,_e.takeLatest)([$.actionTypes.UI.ContentCanvas.SET_SRC,$.actionTypes.UI.ContentCanvas.RELOAD,$.actionTypes.CR.Nodes.MERGE],async function*(y){y.type===$.actionTypes.UI.ContentCanvas.SET_SRC&&(a=!0),yield Me(500);let N=s.get("@neos-project/neos-ui-contentrepository"),k=e.getState(),c=k?.ui?.contentCanvas?.previewUrl,C=o.getCurrentDocumentNode(),u=C?.contextPath,P=Object.values(k?.cr?.nodes?.byContextPath||{}).filter(v=>{let _=N.getRole("document");if(!_)throw new Error("Document role is not loaded!");let m=N.getSubTypesOf(_);return u&&v.contextPath.indexOf(u.split("@")[0])===0&&(v.contextPath===u||!m.includes(v.nodeType))});i.sendMessageToIframe({version:"1.0",eventName:a?"page-changed":"page-updated",data:{url:c,title:C?.properties?.title||o.getGuestFrameDocumentTitle(),content:o.getGuestFrameDocumentHtml(),structuredContent:P,targetAudience:await o.getCurrentDocumentTargetAudience(),pageBriefing:await o.getCurrentDocumentPageBriefing(),focusKeyword:await o.getCurrentDocumentFocusKeyword()}}),a=!1})},w=s.get("sagas");w.set("NEOSidekick.AiAssistant/watchDocumentNodeChange",{saga:O}),w.set("NEOSidekick.AiAssistant/watchNodeCreated",{saga:Pe(s,e)}),w.set("NEOSidekick.AiAssistant/watchNodeRemoved",{saga:Fe(s,e)});let d=s.get("inspector").get("editors");d.set("NEOSidekick.AiAssistant/Inspector/Editors/MagicTextFieldEditor",{component:I}),d.set("NEOSidekick.AiAssistant/Inspector/Editors/MagicTextAreaEditor",{component:K})});})();
//# sourceMappingURL=Plugin.js.map
