(()=>{var E=Object.create;var m=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var j=Object.getOwnPropertyNames;var k=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var F=(e,t)=>()=>(e&&(t=e(e=0)),t);var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Q=(e,t,n,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of j(t))!K.call(e,s)&&s!==n&&m(e,s,{get:()=>t[s],enumerable:!(a=I(t,s))||a.enumerable});return e};var p=(e,t,n)=>(n=e!=null?E(k(e)):{},Q(t||!e||!e.__esModule?m(n,"default",{value:e,enumerable:!0}):n,e));function r(e){return(...t)=>{if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"][`@${e}`])return window["@Neos:HostPluginAPI"][`@${e}`](...t);throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}var i=F(()=>{});var _=f((fe,y)=>{i();y.exports=r("NeosProjectPackages")().ReactUiComponents});var A=f((ue,b)=>{i();b.exports=r("NeosProjectPackages")().NeosUiReduxStore});var x=f((le,w)=>{i();w.exports=r("vendor")().React});var N=f((he,C)=>{i();C.exports=r("vendor")().reactRedux});i();var g=r("manifest");var u=p(_()),O=p(A()),o=p(x()),d=p(N());g("CodeQ.AiSidekick",{},(e,{store:t,frontendConfiguration:n})=>{let a=e.get("containers"),s=a.get("App"),S=R=>{let[c,v]=o.useState(!0),l=(0,d.useSelector)(O.selectors.CR.ContentDimensions.active),P=(0,d.useSelector)(W=>W?.user?.preferences?.interfaceLanguage);return o.createElement("div",{className:`codeQ_appWrapper ${c?"codeQ_appWrapper--sidebar-open":""}`},o.createElement(s,{...R}),o.createElement("div",{className:"codeQ_sideBar"},o.createElement("div",{className:"codeQ_sideBar__title"},o.createElement(u.Headline,{className:`codeQ_sideBar__title-headline ${c?"codeQ_sideBar__title-headline--open":""}`},"AI Sidekick"),o.createElement(u.IconButton,{icon:c?"chevron-circle-right":"chevron-circle-left",onClick:()=>v(!c)})),o.createElement("iframe",{className:`codeQ_sideBar__frame ${c?"codeQ_sideBar__frame--open":""}`,src:"https://api.neosidekick.com/chat/?contentLanguage="+(l.language?l.language[0]:"")+"&interfaceLanguage="+P})))};a.set("App",S)});})();
//# sourceMappingURL=Plugin.js.map
