!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="d1a85bd7-dbdf-455a-aaf6-6e29c37bf604",e._sentryDebugIdIdentifier="sentry-dbid-d1a85bd7-dbdf-455a-aaf6-6e29c37bf604")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"32bc201d4a26e6ab17d208aa0df5704cd8335a7f"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[837],{52428:function(e,t,n){n.d(t,{JG:function(){return C},NS:function(){return b},d:function(){return v},f0:function(){return x},iE:function(){return E}});var a=n(4942),o=n(29439),r=(n(92222),n(47941),n(82526),n(57327),n(41539),n(88449),n(2490),n(59849),n(38880),n(15581),n(34514),n(54747),n(49337),n(33321),n(69070),n(67294)),c=n(15557),l=n(58206),i=n(52631),d=n(74855),s=n(91008);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){var t=e.isNightly,n=e.rooms,a=e.token,o=e.url;return{curl:"curl https://my-netdata.io/kickstart.sh > /tmp/netdata-kickstart.sh && sh /tmp/netdata-kickstart.sh --".concat(t?"nightly":"stable","-channel --claim-token ").concat(a).concat(n?" --claim-rooms ".concat(n):""," --claim-url ").concat(o),wget:"wget -O /tmp/netdata-kickstart.sh https://my-netdata.io/kickstart.sh && sh /tmp/netdata-kickstart.sh --".concat(t?"nightly":"stable","-channel --claim-token ").concat(a).concat(n?" --claim-rooms ".concat(n):""," --claim-url ").concat(o)}},g=function(e){var t=e.isNightly,n=e.rooms,a=e.token;return"helm install netdata netdata/netdata \\\n  --set image.tag=".concat(t?"latest":"stable",' \\\n  --set parent.claiming.enabled="true" \\\n  --set parent.claiming.token=').concat(a," \\")+"".concat(n&&"\n  --set parent.claiming.rooms=".concat(n," \\"),'\n  --set child.claiming.enabled="true" \\\n  --set child.claiming.token=').concat(a)+"".concat(n&&" \\\n  --set child.claiming.rooms=".concat(n))},h=function(e){var t=e.isNightly,n=e.rooms,a=e.token,o=e.url;return"docker run -d --name=netdata \\\n  --pid=host \\\n  --network=host \\\n  -v netdataconfig:/etc/netdata \\\n  -v netdatalib:/var/lib/netdata \\\n  -v netdatacache:/var/cache/netdata \\\n  -v /etc/passwd:/host/etc/passwd:ro \\\n  -v /etc/group:/host/etc/group:ro \\\n  -v /proc:/host/proc:ro \\\n  -v /sys:/host/sys:ro \\\n  -v /etc/os-release:/host/etc/os-release:ro \\\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  --restart unless-stopped \\\n  --cap-add SYS_PTRACE \\\n  --cap-add SYS_ADMIN \\\n  --security-opt apparmor=unconfined \\\n  -e NETDATA_CLAIM_TOKEN=".concat(a," \\\n  -e NETDATA_CLAIM_URL=").concat(o," \\")+"".concat(n&&"\n  -e NETDATA_CLAIM_ROOMS=".concat(n," \\"),"\n  netdata/netdata:").concat(t?"edge":"stable")},f={linux:p,docker:h,macos:function(e){var t=e.isNightly,n=e.rooms,a=e.token,o=e.url;return"curl https://my-netdata.io/kickstart.sh > /tmp/netdata-kickstart.sh && sh /tmp/netdata-kickstart.sh --".concat(t?"nightly":"stable","-channel --claim-token ").concat(a).concat(n?" --claim-rooms ".concat(n):""," --claim-url ").concat(o)},kubernetes:g,windows:function(e){var t=e.rooms,n=e.token,a=e.url;return"msiexec.exe /i netdata.msi TOKEN=".concat(n," ").concat(t?"ROOMS="+t:"","  URL=").concat(a)}},b=function(e,t,n,a){if(null===e||void 0===e||!e.length)return"Loading tokens...";var r=(0,o.Z)(e,1)[0].token,c=null!==a&&void 0!==a&&a.length?a.join(","):"",l=window.envSettings.apiUrl;return f[n]({isNightly:t,rooms:c,token:r,url:l})},v={linux:"Run the script below on your node's terminal",windows:function(){return r.createElement(c.Flex,{column:!0,gap:3},r.createElement(c.Text,{strong:!0},"Install Netdata on Windows"),r.createElement(c.Box,{sx:{listStyleType:"circle"},column:!0,as:"ul",padding:[3.5],gap:1},r.createElement(c.Box,{as:"li"},r.createElement(c.Text,null,"Download the latest"," ",r.createElement(s.Z,{href:"https://github.com/netdata/msi-installer",rel:"noopener noreferrer",strong:!0,target:"_blank"},"netdata.msi"))),r.createElement(c.Box,{as:"li"},r.createElement(c.Text,null,"From an admin terminal, run the below command in the same location as the downloaded file:"))))},docker:function(){return r.createElement(c.Flex,{column:!0,gap:2},r.createElement(c.Text,null,"Install and connect new Docker containers")," ",r.createElement(c.Text,null,"Find the commands for ",r.createElement(c.Text,{code:!0},"docker run"),", ",r.createElement(c.Text,{code:!0},"docker compose")," or Docker Swarm. On the last two you can copy the configs, then run"," ",r.createElement(c.Text,{code:!0},"docker-compose up -d")," in the same directory as the"," ",r.createElement(c.Text,{code:!0},"docker-compose.yml")),r.createElement(c.Flex,{background:"modalBackground",padding:[3],column:!0,gap:2},r.createElement(c.Box,null,r.createElement(c.Text,null,"Netdata container requires different privileges and mounts to provide functionality similar to that provided by Netdata installed on the host. More info"," ",r.createElement(s.Z,{href:"https://learn.netdata.cloud/docs/installing/docker#create-a-new-netdata-agent-container",target:"_blank",whiteSpace:"nowrap"},"here"))),r.createElement(c.Box,null,r.createElement(c.Text,null,"Netdata will use the hostname from the container in which it is run instead of that of the host system. To change the default hostname check"," ",r.createElement(s.Z,{href:"https://learn.netdata.cloud/docs/agent/packaging/docker#change-the-default-hostname",target:"_blank",whiteSpace:"nowrap"},"here")))))},macos:"Run the script below on your OSX, macOS server",kubernetes:"Use helm install to install Netdata on your Kubernetes cluster"},x={windows:"https://learn.netdata.cloud/docs/agent/collectors/go.d.plugin/modules/wmi",linux:"https://learn.netdata.cloud/docs/agent/claim#connect-an-agent-running-in-linux",docker:"https://learn.netdata.cloud/docs/agent/claim#connect-an-agent-running-in-docker",macos:"https://learn.netdata.cloud/docs/agent/claim#connect-an-agent-running-in-macos",kubernetes:"https://learn.netdata.cloud/docs/agent/packaging/installer/methods/kubernetes#connect-your-kubernetes-cluster-to-netdata-cloud"},w=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.envSettings.apiUrl;return{dockerCli:{command:h({isNightly:e,rooms:t,token:n,url:a}),label:"Docker CLI"},compose:{label:"Docker Compose",command:"version: '3'\nservices:\n  netdata:\n    image: netdata/netdata:".concat(e?"edge":"stable","\n    container_name: netdata\n    pid: host\n    network_mode: host\n    restart: unless-stopped\n    cap_add:\n      - SYS_PTRACE\n      - SYS_ADMIN\n    security_opt:\n      - apparmor:unconfined\n    volumes:\n      - netdataconfig:/etc/netdata\n      - netdatalib:/var/lib/netdata\n      - netdatacache:/var/cache/netdata\n      - /etc/passwd:/host/etc/passwd:ro\n      - /etc/group:/host/etc/group:ro\n      - /proc:/host/proc:ro\n      - /sys:/host/sys:ro\n      - /etc/os-release:/host/etc/os-release:ro\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    environment:\n      - NETDATA_CLAIM_TOKEN=").concat(n,"\n      - NETDATA_CLAIM_URL=").concat(a,"\n      - NETDATA_CLAIM_ROOMS=").concat(t,"\n\nvolumes:\n  netdataconfig:\n  netdatalib:\n  netdatacache:")},swarm:{label:"Docker Swarm",command:"version: '3'\nservices:\n  netdata:\n    image: netdata/netdata:".concat(e?"edge":"stable","\n    container_name: netdata\n    ports:\n      - 19999:19999\n    restart: unless-stopped\n    cap_add:\n      - SYS_PTRACE\n    security_opt:\n      - apparmor:unconfined\n    volumes:\n      - netdataconfig:/etc/netdata\n      - netdatalib:/var/lib/netdata\n      - netdatacache:/var/cache/netdata\n      - /etc/passwd:/host/etc/passwd:ro\n      - /etc/group:/host/etc/group:ro\n      - /proc:/host/proc:ro\n      - /sys:/host/sys:ro\n      - /etc/os-release:/host/etc/os-release:ro\n      - /etc/hostname:/etc/hostname:ro\n    environment:\n      - NETDATA_CLAIM_TOKEN=").concat(n,"\n      - NETDATA_CLAIM_URL=").concat(a,"\n      - NETDATA_CLAIM_ROOMS=").concat(t,"\n    deploy:\n      mode: global\n\nvolumes:\n  netdataconfig:\n  netdatalib:\n  netdatacache:")}}},k=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.envSettings.apiUrl;return{wget:{command:p({isNightly:e,rooms:t,token:n,url:a}).wget,label:"wget"},curl:{command:p({isNightly:e,rooms:t,token:n,url:a}).curl,label:"curl"}}},y=function(e,t,n){return{helm:{command:g({isNightly:e,rooms:t,token:n}),label:"Helm"},existingCluster:{label:"Existing cluster",command:"image:\n  tag: ".concat(e?"latest":"stable","\n  ").concat(e?"\nrestarter:\n  enabled: true\n  ":"","\nparent:\n  claiming:\n    enabled: true\n    token: ").concat(n,"\n    rooms: ").concat(t,"\n  \nchild:\n  claiming:\n    enabled: true\n    token: ").concat(n,"\n    rooms: ").concat(t)}}},E=function(e,t,n,a){if(null===a||void 0===a||!a.length)return"Loading tokens...";var r=(0,o.Z)(a,1)[0].token,c=null!==n&&void 0!==n&&n.length?n.join(","):"";return{docker:w(e,c,r),linux:k(e,c,r),kubernetes:y(e,c,r)}[t]},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){(0,l.Z)(e);var n=(0,d.sc)(m(m({header:"Copied",text:"Command copied to your clipboard! Please run it on your node's terminal.",icon:"gear"},t),{},{success:!0}));i.Z.success(n,{context:"copy"})}}},57387:function(e,t,n){n.d(t,{ZM:function(){return h}});n(47941),n(82526),n(57327),n(41539),n(88449),n(2490),n(59849),n(38880),n(15581),n(34514),n(54747),n(49337),n(33321),n(69070);var a=n(45987),o=n(4942),r=n(67294),c=n(60677),l=n(15557),i=n(52428),d=["children"],s=["children","confirmationText","commandText"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=(0,c.default)(l.Box).attrs((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({color:"textDescription",background:"modalTabsBackground",border:{side:"all",color:"borderSecondary"},padding:[4,10,4,4],position:"relative",width:"100%"},e)})).withConfig({displayName:"command__StyledTerminalCommand",componentId:"sc-wnwmk3-0"})(["color:",';border-radius:2px;overflow-wrap:anywhere;white-space:pre-wrap;font-family:"Courier New",Courier,monospace;letter-spacing:0.09px;line-height:18px;font-size:14px;word-break:break-word;'],(0,l.getColor)("textDescription")),p=(0,c.default)(l.Icon).withConfig({displayName:"command__StyledIcon",componentId:"sc-wnwmk3-1"})(["display:flex;align-self:flex-end;cursor:pointer;"]),g=(0,c.default)(l.Box).attrs({color:"textDescription",border:{side:"all",color:"borderSecondary"},background:"modalTabsBackground",padding:[0,1]}).withConfig({displayName:"command__CodeText",componentId:"sc-wnwmk3-2"})(["display:inline-block;color:",';border-radius:2px;font-family:"Courier New",Courier,monospace;letter-spacing:0.09px;line-height:18px;font-size:14px;word-break:break-word;'],(0,l.getColor)("textDescription")),h=function(e){var t=e.children,n=(0,a.Z)(e,d);return r.createElement(g,n,t)};t.ZP=function(e){var t=e.children,n=e.confirmationText,o=void 0===n?"Command copied to your clipboard.":n,c=e.commandText,d=void 0===c?t:c,u=(0,a.Z)(e,s);return r.createElement(m,u,t,r.createElement(l.Box,{position:"absolute",bottom:"8px",right:"8px"},r.createElement(p,{name:"copy",size:"small",color:"primary",onClick:(0,i.JG)(d||t,{text:o})})))}},20686:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),o=n(45987),r=n(67294),c=n(15557),l=n(60677),i=(0,l.default)(c.Icon).attrs({width:12,height:14}).withConfig({displayName:"styled__StyledIcon",componentId:"sc-z9l478-0"})([""]),d=(0,l.default)(c.Flex).attrs({alignItems:"center",justifyContent:"center",padding:[.5,2],round:9}).withConfig({displayName:"styled__StyledPill",componentId:"sc-z9l478-1"})(["cursor:pointer;pointer-events:",";"],(function(e){return e.onClick?"auto":"none"})),s={critical:{background:"nodeBadgeBackground",color:"errorLite",border:{side:"all",color:"error"}},warning:{background:"nodeBadgeBackground",color:"warningText",border:{side:"all",color:"warning"}},neutral:{background:"disabledBackground",color:"textDescription",border:{side:"all",color:"tabsBorder"}},clear:{background:"nodeBadgeBackground",color:"successLite",border:{side:"all",color:"success"}},criticalAlertsTable:{background:"nodeBadgeBackground",color:"errorLite",border:{side:"all",color:"error"}},warningAlertsTable:{background:"nodeBadgeBackground",color:"warningText",border:{side:"all",color:"warning"}},clearAlertsTable:{background:"nodeBadgeBackground",color:"successLite",border:{side:"all",color:"success"}}},u=["type","icon","children","textSize"],m={small:c.TextSmall,normal:c.Text},p=function(e){var t=e.type,n=e.icon,l=e.children,p=e.textSize,g=(0,o.Z)(e,u),h=s[t]||{},f=h.background,b=h.color,v=h.border,x=p?m[p]:n?c.Text:c.TextMicro;return r.createElement(d,(0,a.Z)({background:f,border:v,gap:1.5},g),n&&r.createElement(i,{name:n,title:n,color:b}),l&&r.createElement(x,{color:b,textTransform:"capitalize",strong:!0,wordBreak:"keep-all",whiteSpace:"nowrap"},l))}},79837:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(29439),o=n(67294),r=n(37518),c=n(12899),l=n(60677),i=n(61193),d=n.n(i),s=n(15557),u=(n(85827),n(41539),n(25387),n(2490),n(72608),n(69826),n(31672),n(59461),n(87462)),m=n(45987),p=n(4211),g=function(){return o.createElement(s.Text,null,"Something went wrong during document parsing")},h=["transformConfiguration","validationConfig","validate","errorComponent","children"],f=function(e){return function(t){var n=t.transformConfiguration,a=void 0===n?{}:n,r=t.validationConfig,c=void 0===r?{}:r,l=t.validate,i=void 0===l||l,d=t.errorComponent,s=t.children,f=(0,m.Z)(t,h),b=function(e){var t=e.markdocContent,n=e.validate,a=e.validationConfig,r=e.transformConfiguration;return(0,o.useMemo)((function(){var e=p.ZP.parse(t),o=[];return n&&(o=p.ZP.validate(e,a)),{tree:o.length?null:p.ZP.transform(e,r),errors:o}}),[t,n,a,r])}({markdocContent:s,validate:i,validationConfig:c,transformConfiguration:a}),v=b.tree,x=b.errors,w=d&&"function"==typeof d?d:g;return x.length?o.createElement(w,{errors:x}):o.createElement(e,(0,u.Z)({tree:v},f))}},b=(0,o.memo)(f((function(e){var t=e.tree,n=e.renderConfiguration;return p.ZP.renderers.react(t,o,n)}))),v=(f((function(e){var t=e.tree;return p.ZP.renderers.html(t)})),b),x=n(97945),w=function(e){var t=e.label,n=e.value;return o.createElement(s.Flex,{gap:2},o.createElement(s.Text,{strong:!0},t,":"),o.createElement(s.Text,null,n))},k=function(e){var t=e.name,n=e.nodeId,l=e.chartId,i=e.alertOptions,d=(0,r.UL)(),u=(0,c.R3)(),m=(0,a.Z)(u,2)[1],p=(0,x.bV)(n,"name");return o.createElement(s.Flex,{column:!0},i.length>1&&o.createElement(s.Box,{margin:[0,0,2,0]},o.createElement(s.Select,{"data-testid":"".concat(t,"-assistant-modal-alerts-select"),onChange:function(e){var t=e.value;return m({roomId:d,alert:{name:t}})},styles:{size:"tiny"},menuPlacement:"auto",options:i,value:{value:t,label:t}})),1==i.length&&o.createElement(w,{label:"Alert",value:t}),p&&o.createElement(w,{label:"Node",value:p}),l&&o.createElement(w,{label:"Chart id",value:l}))},y=function(e){return o.createElement(s.Box,(0,u.Z)({as:"hr",height:"1px",width:"100%",sx:{borderWidth:"1px 0px 0px 0px",borderColor:"borderSecondary",borderStyle:"solid"}},e))},E=(n(9653),n(91008)),C=n(57387),T=["level"],_=["children"],S=["children","href"],I=["content"],Z=["content"],N=["ordered","children"],O=l.default.ol.withConfig({displayName:"markdocSchema__OrderedList",componentId:"sc-1maymd4-0"})(["list-style:roman;padding-left:14px;"]),A=l.default.ul.withConfig({displayName:"markdocSchema__UnorderedList",componentId:"sc-1maymd4-1"})(['list-style-image:url("/static/img/list-style-image.svg");padding-left:14px;']),M={heading:{render:function(e){var t=e.level,n=void 0===t?1:t,a=(0,m.Z)(e,T),r=s.H1;switch(n){case 2:r=s.H2;break;case 3:r=s.H3;break;case 4:r=s.H4;break;case 5:r=s.H5;break;case 6:r=s.H6}return o.createElement(r,(0,u.Z)({margin:[2,0]},a))},attributes:{id:{type:String},level:{type:Number}}},paragraph:{render:function(e){var t=e.children,n=(0,m.Z)(e,_);return o.createElement(s.Flex,(0,u.Z)({padding:[2,0]},n),o.createElement(s.Text,null,t))}},link:{render:function(e){var t=e.children,n=e.href,a=(0,m.Z)(e,S);return o.createElement(E.Z,(0,u.Z)({href:n,rel:"noopener noreferrer",target:"_blank"},a),t)},attributes:{href:{type:String}}},code:{render:function(e){var t=e.content,n=(0,m.Z)(e,I);return o.createElement(C.ZM,n,t)},attributes:{content:{type:String}}},fence:{render:function(e){var t=e.content,n=(0,m.Z)(e,Z);return o.createElement(C.ZP,n,t)},attributes:{content:{type:String}}},list:{render:function(e){var t=e.ordered,n=e.children,a=(0,m.Z)(e,N),r=t?O:A;return o.createElement(r,a,n)},attributes:{ordered:{type:Boolean}}}},D=function(e){var t=e.selectedAlert,n=(0,c.Nu)(),r=(0,a.Z)(n,1)[0],l=t.name,i=t.nodeId,d=t.chartId,u=(0,c.UD)({alarm:l,node:i,chart:d}),m=u.loaded,p=u.value,g=u.hasError,h=r.reduce((function(e,t){var n={value:t.name,label:t.name};return e.find((function(e){return e.label==n.label}))||e.push(n),e}),[]);return m?g?o.createElement(s.Text,null,"Something went wrong"):null!==p&&void 0!==p&&p.result?o.createElement(s.Flex,{column:!0,gap:3},o.createElement(k,{name:l,nodeId:i,chartId:d,alertOptions:h}),o.createElement(y,null),o.createElement(v,{transformConfiguration:{nodes:M}},p.result)):o.createElement(s.Text,null,"No data"):o.createElement(s.Text,null,"Loading...")},B=n(27856),z=n(46667),L=n(82351),P=n(20686),j=n(50308),F=n.n(j),R=(0,l.default)(s.Flex).withConfig({displayName:"minimizedModal__ElevatedContent",componentId:"sc-9ix42v-0"})(["box-shadow:0 18px 28px rgba(0,0,0,0.5);"]),U=(0,l.default)(s.Icon).withConfig({displayName:"minimizedModal__IconAbsolute",componentId:"sc-9ix42v-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]),H=function(e){var t=e.onModalClose,n=void 0===t?F():t;return o.createElement(L.Z,{content:"Close assistant",zIndex:7500},o.createElement(R,{position:"absolute",bottom:"37px",right:"-10px",background:"mainBackground",sx:{borderRadius:"100%"},border:{side:"all",color:"primary",size:"1px",type:"solid"},width:"28px",height:"28px",onClick:n,cursor:"pointer"},o.createElement(U,{name:"x",color:"text",size:"sm"})))},K=function(e){var t=e.alert,n=e.onClick,a=void 0===n?F():n;return o.createElement(L.Z,{content:"Show assistant",zIndex:7500},o.createElement(R,{position:"absolute",top:"0",right:"0",onClick:a,cursor:"pointer"},o.createElement(P.Z,{type:(null===t||void 0===t?void 0:t.status)||"neutral"},null===t||void 0===t?void 0:t.name)))},Y=function(e){var t=e.alert,n=e.isMinimized,r=e.maximize,c=void 0===r?F():r,l=e.onModalClose,i=void 0===l?F():l,d=(0,o.useState)(!1),u=(0,a.Z)(d,2),m=u[0],p=u[1];return o.createElement(s.Flex,{position:"relative",width:"56px",height:n?"95px":"56px",onMouseEnter:function(){return p(n)},onMouseLeave:function(){return p(!1)}},o.createElement(R,{position:"absolute",bottom:"0",background:"primary",sx:{borderRadius:"100%"},width:"56px",height:"56px",cursor:"move"},o.createElement(U,{name:"netdataAssistant",size:"large"})),m&&o.createElement(o.Fragment,null,o.createElement(K,{alert:t,onClick:function(){n&&(c(),p(!1))}}),o.createElement(H,{onModalClose:i})))},G=l.default.ul.withConfig({displayName:"helpTooltipContent__List",componentId:"sc-uh9315-0"})(["width:350px;padding-left:16px;list-style:disc outside none;"]),V=function(){return o.createElement(G,null,o.createElement("li",null,"You can drag around the assistant window and navigate to other tabs within the same room, and the assistant window won't go away."),o.createElement("li",null,"Use the buttons at the right to expand, or minimize the assistant window."),o.createElement("li",null,"Hold down the ",o.createElement(s.TextSmall,{strong:!0},"Shift")," button in order to select any text inside the assistant window."))},q=(0,l.default)(s.ModalContent).attrs((function(e){var t=e.expanded;return{width:t?{base:"80vw"}:{base:150,max:150,min:70},height:t?{base:"80vh",min:"80vh"}:{base:150,max:150,min:150},padding:[0,0,4,0]}})).withConfig({displayName:"assistantModal__ModalContent",componentId:"sc-nobbii-0"})(["box-shadow:0 18px 28px rgba(0,0,0,0.5);"]),J=function(){var e=(0,z.Z)(),t=(0,a.Z)(e,2),n=t[0],r=t[1],l=(0,o.useState)(!1),i=(0,a.Z)(l,2),u=i[0],m=i[1],p=(0,o.useState)(!1),g=(0,a.Z)(p,2),h=g[0],f=g[1],b=(0,z.Z)(),v=(0,a.Z)(b,4),x=v[0],w=v[1],k=v[3],y=(0,c.R3)(),E=(0,a.Z)(y,2),C=E[0],T=E[1],_=(null===C||void 0===C?void 0:C.alert)||{},S=(0,B.D)(300,(function(e){var t=e.target;return f(t.scrollTop>150&&!(null===_||void 0===_||!_.name))})),I=function(){return T(null)};return o.createElement(s.Modal,{zIndex:7e3,backdrop:!1},o.createElement(d(),{disabled:u},o.createElement(s.Flex,{column:!0,alignItems:"end",gap:3},!x&&o.createElement(q,{expanded:n,cursor:u?"text":"move",tabIndex:0,onKeyDown:function(e){"Shift"==e.key&&m(!0)},onKeyUp:function(){return m(!1)}},o.createElement(s.ModalHeader,{justifyContent:"between"},o.createElement(s.Flex,{gap:2,alignItems:"center"},o.createElement(s.Icon,{name:"netdataAssistant",color:"text"}),h?o.createElement(P.Z,{type:(null===_||void 0===_?void 0:_.status)||"neutral"},null===_||void 0===_?void 0:_.name):o.createElement(s.H4,null,"Netdata Assistant"),o.createElement(L.Z,{plain:!0,isBasic:!0,align:"top",content:V,zIndex:7050},o.createElement(s.Flex,null,o.createElement(s.Icon,{name:"question",color:"textLite",width:"16px",height:"16px"})))),o.createElement(s.Flex,{gap:2,alignItems:"baseline"},o.createElement(L.Z,{align:"bottom",content:"Minimize window",zIndex:7050},o.createElement(s.Flex,null,o.createElement(s.ModalButton,{iconName:"minimize_s",onClick:w,testId:"assistant-modal-minimize-button"}))),o.createElement(L.Z,{align:"bottom",content:n?"Reduce window size":"Expand window",zIndex:7050},o.createElement(s.Flex,null,o.createElement(s.ModalButton,{iconName:n?"reduceSize":"fullScreen",onClick:r,testId:"assistant-modal-expand-collapse-button"}))),o.createElement(L.Z,{align:"bottom",content:"Close window",zIndex:7050},o.createElement(s.Flex,null,o.createElement(s.ModalCloseButton,{onClose:I,testId:"assistant-modal-close-button"}))))),o.createElement(s.ModalBody,{overflow:{vertical:"auto"},onScroll:S,cursor:u?"text":"default"},o.createElement(D,{selectedAlert:_}))),o.createElement(Y,{isMinimized:x,maximize:k,alert:_,onModalClose:I}))))},W=function(){var e=(0,r.UL)(),t=(0,c.R3)(),n=(0,a.Z)(t,2),l=n[0],i=n[1],d=l||{},s=d.roomId,u=d.alert;return(0,o.useEffect)((function(){s!=e&&i(null)}),[s,e]),u&&s==e?o.createElement(J,null):null}},12899:function(e,t,n){n.d(t,{R3:function(){return u},Nu:function(){return m},UD:function(){return s}});var a=n(4480),o=n(26398),r=n(74059),c=n(37518),l=(0,a.cn)({key:"assistantAlert",default:null}),i=(0,a.cn)({key:"assistantAlertsAtom",default:[]}),d=(0,a.CG)({key:"assistantSelector",get:function(e){var t=e.space,n=e.room,a=e.alarm,r=e.node,c=e.chart;return function(){return function(e){var t=e.space,n=e.room,a=e.alarm,r=e.node,c=e.chart;return o.Z.post("/api/v1/troubleshoot",{space:t,room:n,alarm:a,node:r,chart:c})}({space:t,room:n,alarm:a,node:r||"dummy-node-id",chart:c||"dummy-chart-id"})}},cachePolicy_UNSTABLE:{eviction:"most-recent"}}),s=function(e){var t,n=e.alarm,o=e.node,l=e.chart,i=(0,r.th)(),s=(0,c.UL)(),u=(0,a.$P)(d({space:i,room:s,alarm:n,node:o,chart:l}));return{loaded:"loading"!==u.state,value:null===(t=u.contents)||void 0===t?void 0:t.data,hasError:"hasError"===u.state}},u=function(){return(0,a.FV)(l)},m=function(){return(0,a.FV)(i)}}}]);