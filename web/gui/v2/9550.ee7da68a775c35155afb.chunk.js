!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c2c5e52b-d8ea-4964-ad2d-ec9ddd86cb12",e._sentryDebugIdIdentifier="sentry-dbid-c2c5e52b-d8ea-4964-ad2d-ec9ddd86cb12")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"f81fb6a9df497df4056a0be3b169a0ddcb17e366"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[9550],{83169:function(e,t,n){n.r(t),n.d(t,{SignIn:function(){return A},default:function(){return D}});n(41539),n(39714),n(66992),n(78783),n(33948),n(60285),n(41637),n(74916),n(15306),n(64765),n(77601);var a=n(67294),i=n(89250),o=n(17563),r=n(59978),l=n(15794),c=n(1043),d=n(87562),u=n(26502),s=n(87462),g=n(45987),f=(n(92222),n(71893)),m=["method"],p=f.default.a.withConfig({displayName:"linkButton__LinkButton",componentId:"sc-9kv26a-0"})(["color:",";text-decoration:none;background-color:transparent;display:flex;flex-flow:row nowrap;justify-content:flex-start;align-items:center;height:",";background:",";border:1px solid ",";border-radius:2px;max-width:320px;width:100%;",";&:hover{text-decoration:none;color:unset;}"],(0,r.getColor)("background"),(0,r.getSizeBy)(5.5),(0,r.getColor)("mainBackground"),(0,r.getColor)("mainBackground"),(function(e){var t=e.disabled;return"\n    opacity: ".concat(t?.4:1,";\n    pointer-events: ").concat(t?"none":"auto",";\n  ")})),b=function(e){return function(t){var n=t.method,i=(0,g.Z)(t,m);return n==localStorage.getItem("lastSignInMethod")?a.createElement(r.Box,null,a.createElement(r.TextMicro,null,"Last Sign-in method"),a.createElement(e,(0,s.Z)({isLastSignInMethod:!0},i))):a.createElement(e,i)}},h=function(e){return(0,f.default)(p).withConfig({displayName:"linkButton",componentId:"sc-9kv26a-1"})(["box-shadow:0px 0px 1px rgba(0,0,0,0.12);border-radius:2px;background:",";border-style:solid;border-color:",";border-width:",";span{flex:1;display:flex;align-items:center;justify-content:center;padding:0 ",";color:",";}"],e,(function(t){return t.isLastSignInMethod?"green":e}),(function(e){return e.isLastSignInMethod?"2px":"1px"}),(0,r.getSizeBy)(1),(0,r.getColor)("bright"))},w=h("#445260"),v=h("#4285f4"),E=n(29439),y=(n(88674),n(17727),n(78312)),x=n(87267),k=b(y.U5),S=function(e){var t=e.onSubmit,n=e.disabled,i=e.initialValue,o=e.buttonLabel,l=e.tagging,c=(0,r.useInputValue)({value:i||""}),d=(0,E.Z)(c,4),u=d[0],s=d[1],g=d[3],f=(0,r.useTouchedState)({}),m=(0,E.Z)(f,2),p=m[0],b=m[1],h=(0,a.useState)(!1),w=(0,E.Z)(h,2),v=w[0],S=w[1],I=(0,x.Z)(),C=I.sendButtonClickedLog,B=I.isReady,L=(0,a.useCallback)((function(e){e.preventDefault(),C({feature:"SignIn",dataGa:"signinup::click-email::".concat(l)}).finally((function(){t(u)})),localStorage.setItem("lastSignInMethod","email")}),[t,u,B]);return a.createElement(r.Flex,{as:"form",column:!0,gap:4,width:"100%","data-testid":"emailField"},a.createElement(k,{value:u,onChange:s,isValid:v,setIsValid:S,instantFeedback:"positiveFirst",isDirty:g,success:v&&"Valid E-mail",onBlur:b,touched:p,"data-testid":"emailField-input",method:"email"}),a.createElement(y.Sn,{type:"submit",disabled:n||!g,width:"100%",label:o,onClick:L,"data-ga":"signinup::click-email::".concat(l),"data-testid":"emailField-submitButton"}))},I=n(27266),C=n(87464),B=n(97096),L=n(39979),_=n(16294),Z=function(){var e=(0,a.useMemo)((function(){var e=window.location.search;return o.parse(e).telemetry_session_id}));(0,a.useEffect)((function(){e&&sessionStorage.setItem(_.Hw.session,e)}),[e])},F=n(63346),G=b(v),M=(0,L.Z)(G),T=b(w),R=(0,L.Z)(T),U=function(e){var t=e.to;try{t=new URL(t).toString()}catch(n){t=null}return t?a.createElement(r.Box,{position:"fixed"},a.createElement(r.Button,{as:"a",href:t,flavour:"borderless",label:"Go back to ".concat(t.replace(/#.*/,"")),icon:"arrow_left",rel:"noopener noreferrer"})):null},A=function(){var e=(0,i.TH)().search,t=window.location.hash,n=(0,c.iM)(),l=o.parse(e).redirect_uri;Z();var s=(0,a.useCallback)((function(a){var i=encodeURIComponent((0,d.$)("/sign-in".concat(e),t)),o=encodeURIComponent((0,d.$)("/sign-up/verify".concat(e),t));n({email:a,redirectURI:i,registerURI:o})}),[]);(0,a.useEffect)((function(){if(/app\.netdata\.cloud/.test(location.hostname)){var e=document.createElement("script");return e.src="https://zsvdrp94yfxr.statuspage.io/embed/script.js",e.async=!0,document.body.appendChild(e),function(){document.body.removeChild(e)}}}),[]);var g=function(e){localStorage.setItem("lastSignInMethod",e)};return a.createElement(F.ZP,{feature:"SignIn"},!window.envSettings.onprem&&!!l&&a.createElement(U,{to:l}),a.createElement(I.Z,{"data-testid":"signIn"},a.createElement(r.Flex,{column:!0,gap:4},a.createElement(r.H1,{textAlign:"center"},"Welcome!"),a.createElement(r.TextBig,{textAlign:"center"},"Sign in and let's get you started")),a.createElement(y.Yb,null,a.createElement(r.Flex,{column:!0,gap:4},a.createElement(M,{href:(0,d.G)("google"),onClick:function(){return g("google")},disabled:!1,"data-ga":"signinup::click-google::sni-view","data-testid":"signIn-googleButton",method:"google",feature:"SignIn",payload:{label:"Continue with Google"}},a.createElement(y.xG,null,a.createElement(u.av,null)),a.createElement(r.Text,{textAlign:"center"},"Continue with Google")),a.createElement(R,{href:(0,d.G)("github"),onClick:function(){return g("github")},disabled:!1,"data-ga":"signinup::click-github::sni-view","data-testid":"signIn-githubButton",method:"github",feature:"SignIn",payload:{label:"Continue with GitHub"}},a.createElement(y.xG,null,a.createElement(u.bY,null)),a.createElement(r.Text,null,"Continue with GitHub"))),a.createElement(r.Flex,{gap:2,alignItems:"center"},a.createElement(C.Z,{theme:"default"}),a.createElement(r.H4,null,"or"),a.createElement(C.Z,{theme:"default"})),a.createElement(S,{onSubmit:s,buttonLabel:"Sign in by email",tagging:"sni-view"})),!window.envSettings.onprem&&a.createElement(r.Flex,{column:!0,gap:4,alignSelf:"center",width:{max:"480px"}},a.createElement(r.TextBig,{textAlign:"center"},"Don't have a Netdata account yet? Relax! Sign-in and we will create one for you!"),a.createElement(r.Text,{textAlign:"center"},"By creating an account, you agree with Netdata's"," ",a.createElement(B.F,{tagging:"signin-view"})," and our"," ",a.createElement(B.w,{tagging:"signin-view"}),"."))))},D=(0,l.k)(A,"light")},97096:function(e,t,n){n.d(t,{F:function(){return c},w:function(){return l}});n(92222);var a=n(67294),i=n(78312),o={link:"https://www.netdata.cloud/terms",title:"Terms And Conditions",dataGa:"signinup::click-terms::"},r=function(e){var t=e.link,n=e.title,o=e.dataGa;return function(e){var r=e.tagging;return a.createElement(i.Fg,{href:t,target:"_blank",rel:"noopener noreferrer","data-ga":"".concat(o).concat(r)},n)}},l=r({link:"https://www.netdata.cloud/privacy",title:"Privacy Policy",dataGa:"signinup::click-privacy::"}),c=r(o)},76362:function(e,t,n){n.d(t,{S1:function(){return o},ZT:function(){return a},ae:function(){return l},jU:function(){return r},on:function(){return i}});var a=function(){};function i(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var r="undefined"!==typeof window,l="undefined"!==typeof navigator},94829:function(e,t,n){var a=n(67294),i=n(76362);t.Z=function(e,t){var n=(0,a.useState)(function(e,t){return void 0!==t?t:!!i.jU&&window.matchMedia(e).matches}(e,t)),o=n[0],r=n[1];return(0,a.useEffect)((function(){var t=!0,n=window.matchMedia(e),a=function(){t&&r(!!n.matches)};return n.addListener(a),r(n.matches),function(){t=!1,n.removeListener(a)}}),[e]),o}}}]);