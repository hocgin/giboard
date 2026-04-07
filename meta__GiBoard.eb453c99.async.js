(self.webpackChunk_hocgin_giboard=self.webpackChunk_hocgin_giboard||[]).push([[725],{33837:function(_,w,l){"use strict";l.r(w),l.d(w,{demos:function(){return E}});var O=l(90228),C=l.n(O),W=l(87999),G=l.n(W),D=l(75271),V=l(16010),E={"giboard-demo-0":{component:D.memo(D.lazy(G()(C()().mark(function L(){var R,$;return C()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(l.bind(l,16010));case 2:return R=x.sent,$=R.GiBoard,x.abrupt("return",{default:function(){return D.createElement("div",{style:{display:"flex",flexDirection:"column",gap:20}},D.createElement($,{token:"ghp_wfheNxmh0HhsxCZi3ApJf2...",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{api:"https://public-api.hocgin.workers.dev/api/board",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{repositories:["giboard","repo-b"],api:"https://public-api.hocgin.workers.dev/api/board",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{token:"ghp_wfheNxmh0HhsxCZi3ApJf2...",title:null,login:"hocgin",projectId:"16",style:{height:400}}))}});case 5:case"end":return x.stop()}},L)})))),asset:{type:"BLOCK",id:"giboard-demo-0",refAtomIds:["GiBoard"],dependencies:{"index.jsx":{type:"FILE",value:`import {GiBoard} from '@hocgin/giboard';

export default () => <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16" style={{height: 400}}/>
  <GiBoard repositories={['giboard', 'repo-b']} 
           api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} title={null} login="hocgin" projectId="16"
           style={{height: 400}}/>
</div>`},"@hocgin/giboard":{type:"NPM",value:"1.0.1"}},entry:"index.jsx"},context:{"@hocgin/giboard":V},renderOpts:{compile:function(){var L=G()(C()().mark(function $(){var H,x=arguments;return C()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,l.e(38).then(l.bind(l,97038));case 2:return M.abrupt("return",(H=M.sent).default.apply(H,x));case 3:case"end":return M.stop()}},$)}));function R(){return L.apply(this,arguments)}return R}()}}}},16010:function(_,w,l){"use strict";l.r(w),l.d(w,{GiBoard:function(){return Pe}});var O=l(90228),C=l.n(O),W=l(87999),G=l.n(W),D=l(48305),V=l.n(D),E=l(75271),L=l(85240),R=l(82092),$=l.n(R),H=l(82187),x=l.n(H),n=l(52676),M=function(e){var i=e.active,t=i===void 0?0:i,s=e.href,r=e.title,o=e.description,c=e.repositories,a=c===void 0?[]:c,g=e.repository,m=e.items,b=m===void 0?[]:m,j=e.onChange,f=e.onRepositoryChange;return(0,n.jsxs)("div",{className:"GiHead",children:[(0,n.jsxs)("div",{className:"GiHeadTitleWrap",children:[r&&(0,n.jsx)("a",{className:"GiTitle",href:s,children:r}),o&&(0,n.jsx)("div",{className:"GiDescription",children:o})]}),(0,n.jsxs)("div",{className:"GiHeadActions",children:[a.length>1&&(0,n.jsx)("div",{className:"GiRepositoryFilter",children:(0,n.jsx)("select",{className:"RepositorySelector",value:g!=null?g:a[0],onChange:function(p){return f==null?void 0:f(p.target.value)},children:a.map(function(h){return(0,n.jsx)("option",{value:h,children:h},h)})})}),b.length>1&&(0,n.jsx)("div",{className:"GiSegmented",children:b.map(function(h,p){var v;return(0,n.jsx)("div",{className:x()("SegmentedItem",$()({},"Segmented",t===p)),onClick:function(){return j==null?void 0:j(p)},children:h==null?void 0:h.label},(v=h==null?void 0:h.value)!==null&&v!==void 0?v:p)})})]})]})},ne=l(36075),ie=l.n(ne),q=l(62336),te=l(43804);function oe(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=Math.min(Math.max(u,0),10)*10;return e.toFixed(2)+"%"}function re(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.min(Math.max(Math.round(u),0),10)}var le=function(e){var i=e.src,t=e.login;return(0,n.jsx)("a",{className:"Avatar",href:"https://github.com/".concat(t),children:(0,n.jsx)("img",{src:i,alt:t})})},z=function(e){var i=e.className,t=e.count,s=t===void 0?0:t,r=e.children;return(0,n.jsxs)("div",{className:"Badge",children:[(0,n.jsx)("div",{className:x()("BadgeIcon",i)}),r&&(0,n.jsx)("span",{className:"Title",children:r}),s>0&&(0,n.jsx)("span",{className:"Count",children:s})]})},ae=function(e){var i=e.hasContent;return(0,n.jsx)("span",{className:x()($()({},"HasContent",i)),children:(0,n.jsx)("svg",{focusable:"false","aria-label":"Draft issue",role:"img",className:"StyledOcticon-sc-1lhyyr-0 lnFpuJ",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible",color:"rgb(87, 96, 106)"},children:(0,n.jsx)("path",{d:"M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z"})})})},se=function(e){var i,t,s,r,o,c,a=e.item,g=(0,te.Z)(!1),m=V()(g,2),b=m[0],j=m[1].toggle,f=(i=a==null?void 0:a.Assignees)!==null&&i!==void 0?i:[],h=(t=a==null?void 0:a.Description)!==null&&t!==void 0?t:a==null?void 0:a.Title,p=(s=a==null?void 0:a.Title)!==null&&s!==void 0?s:h,v=!!h,d=typeof(a==null?void 0:a.Complete)=="number",I=Math.min((r=a==null?void 0:a.Complete)!==null&&r!==void 0?r:0,5);a.repository={id:"R_kgDOJYwQPA",name:"giboard",url:"https://github.com/hocgin/giboard"};var N=a==null||(o=a.repository)===null||o===void 0||(o=o.url)===null||o===void 0?void 0:o.length,P=d;return(0,n.jsxs)("div",{className:x()("Item","Progress",P?"ItemHasItem":null),style:{"--percentage":oe(I)},children:[(0,n.jsxs)("div",{className:"ItemHead",onClick:j,style:{cursor:v?"pointer":"not-allowed"},children:[(0,n.jsx)(ae,{hasContent:!1})," ",(0,n.jsx)("span",{className:"ItemHeadTitle",children:p}),f.length>0&&(0,n.jsx)("div",{className:"Avatars",children:f.map(function(y,B){var A;return(0,n.jsx)(le,{src:y==null?void 0:y.avatarUrl,login:y==null?void 0:y.login},"".concat((A=y==null?void 0:y.login)!==null&&A!==void 0?A:"assignee","-").concat(B))})})]}),b&&v&&(0,n.jsx)("div",{className:"ItemDescription",children:h}),P&&(0,n.jsxs)("div",{className:"ItemFooter",children:[d&&(0,n.jsxs)("div",{className:"ItemSegmentedBarItem",children:[(0,n.jsx)("div",{className:"ItemSegmentedBar","aria-label":"Complete ".concat(I," of 5"),children:Array.from({length:5}).map(function(y,B){return(0,n.jsx)("span",{className:x()("ItemSegment",$()({},"Filled",B<re(I)))},B)})}),(0,n.jsx)("span",{children:(I/5*100).toFixed(0)+"%"})]}),N&&(0,n.jsx)("a",{className:"ItemALinkItem",href:a==null||(c=a.repository)===null||c===void 0?void 0:c.url,children:(0,n.jsx)("div",{className:"ALinkItem",children:(0,n.jsx)(de,{})})})]})]})},de=function(e){return ie()(e),(0,n.jsxs)("svg",{width:"1.2em",height:"1.2em",className:"s-6","aria-hidden":"true","data-astro-cid-zyo63yeq":"true","data-icon":"left-arrow",children:[(0,n.jsx)("symbol",{id:"ai:local:left-arrow",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"currentColor",d:"M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2"})}),(0,n.jsx)("use",{href:"#ai:local:left-arrow"})]})},Q=function(e){var i=e.title,t=e.description,s=e.items,r=s===void 0?[]:s;return(0,n.jsxs)("div",{className:"List",children:[(0,n.jsxs)("div",{className:"ListHead",children:[(0,n.jsx)("div",{children:i}),(t==null?void 0:t.length)&&(0,n.jsx)("div",{className:"Description",children:t})]}),(0,n.jsx)("div",{className:"Body",children:r.map(function(o){return(0,n.jsx)(se,{item:o},o==null?void 0:o.id)})})]})},ue=function(e){var i=e.view,t=(0,E.useMemo)(function(){var m,b,j,f,h=q.Ey.toGroup(((m=i==null?void 0:i.items)!==null&&m!==void 0?m:[]).sort(function(p,v){var d,I;return q.Ey.sortDesc((d=p==null?void 0:p.Priority)!==null&&d!==void 0?d:0,(I=v==null?void 0:v.Priority)!==null&&I!==void 0?I:0)}),function(p){return p==null?void 0:p.Status});return console.log("group",h,i),{InProgress:(b=h.get("In Progress"))!==null&&b!==void 0?b:[],Todo:(j=h.get("Todo"))!==null&&j!==void 0?j:[],Done:(f=h.get("Done"))!==null&&f!==void 0?f:[]}},[i==null?void 0:i.items]),s=t.InProgress,r=s===void 0?[]:s,o=t.Todo,c=o===void 0?[]:o,a=t.Done,g=a===void 0?[]:a;return(0,n.jsxs)("div",{className:"View",children:[(0,n.jsx)(Q,{title:(0,n.jsx)(z,{className:"Todo",count:c.length,children:"Todo"}),items:c,description:"This item hasn't been started"}),(0,n.jsx)(Q,{title:(0,n.jsx)(z,{className:"InProgress",count:r.length,children:"In Progress"}),items:r,description:"This is actively being worked on"}),(0,n.jsx)(Q,{title:(0,n.jsx)(z,{className:"Done",count:g.length,children:"Done"}),items:g,description:"This has been completed"})]})},ve=l(26068),U=l.n(ve),ce=l(335),me=l.n(ce),he="https://api.github.com",pe="".concat(he,"/graphql"),ge=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.entries(i).forEach(function(t){var s=V()(t,2),r=s[0],o=s[1];e=e.replace("$".concat(r),o)}),e};function fe(u,e){return Y.apply(this,arguments)}function Y(){return Y=G()(C()().mark(function u(e,i){return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",fetch(pe,{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({query:ge(je,e)})}).then(function(r){return r.json()}).catch(console.warn));case 1:case"end":return s.stop()}},u)})),Y.apply(this,arguments)}var je=`query{
  user(login: "$login"){
       # ProjectV2
      projectV2(number: $number) {
          url
          title
          shortDescription
          readme
          createdAt
          updatedAt
          #
          views(first: 1) {
              # https://docs.github.com/en/graphql/reference/objects#projectv2view
              nodes {
                id
                name
                number
                createdAt
                updatedAt

                # https://docs.github.com/en/graphql/reference/objects#projectv2
                project {
                  id
                  title
                  items(first: 100) {
                    # https://docs.github.com/en/graphql/reference/objects#projectv2item
                    nodes {
                      id
                      fieldValues(first: 20) {
                        # https://docs.github.com/en/graphql/reference/unions#projectv2itemfieldvalue
                        nodes {
                        ... on ProjectV2ItemFieldTextValue {
                            text
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                       ... on ProjectV2ItemFieldRepositoryValue {
                          repository {
                            id
                            name
                            url
                          }
                        }
                       ... on ProjectV2ItemFieldLabelValue {
                            labels(first: 20) {
                                nodes {
                                    id
                                    name
                                }
                            }
                            field {
                              ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                        }
                        ... on ProjectV2ItemFieldDateValue {
                            date
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldSingleSelectValue {
                            name
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldIterationValue {
                            title
                            startDate
                            duration
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldNumberValue {
                            number
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldUserValue {
                            users(first: 5){
                              nodes {
                                login
                                avatarUrl
                              }
                            }
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }

                        }
                      }
                    }
                  }
                }
              }
          }
      }
  }
}`;function ye(u){var e,i,t,s,r=(e=u==null||(i=u.data)===null||i===void 0||(i=i.user)===null||i===void 0?void 0:i.projectV2)!==null&&e!==void 0?e:{},o=(t=r==null||(s=r.views)===null||s===void 0?void 0:s.nodes)!==null&&t!==void 0?t:[];return console.log("field.resp",u),{url:r==null?void 0:r.url,title:r==null?void 0:r.title,shortDescription:r==null?void 0:r.shortDescription,readme:r==null?void 0:r.readme,views:o.map(function(c){var a,g;return{id:c==null?void 0:c.id,name:c==null?void 0:c.name,items:((a=c==null||(g=c.project)===null||g===void 0||(g=g.items)===null||g===void 0?void 0:g.nodes)!==null&&a!==void 0?a:[]).map(function(m){var b,j,f={id:m==null?void 0:m.id},h=(b=m==null||(j=m.fieldValues)===null||j===void 0?void 0:j.nodes)!==null&&b!==void 0?b:[],p=me()(h),v;try{for(p.s();!(v=p.n()).done;){var d=v.value,I=d==null?void 0:d.field,N=I==null?void 0:I.name,P="".concat(N).trim().toLowerCase();if(P==="title")f[N]=d==null?void 0:d.text;else if(P==="status")f[N]=d==null?void 0:d.name;else if(P==="description")f[N]=d==null?void 0:d.text;else if(P==="complete")f[N]=d==null?void 0:d.number;else if(P==="priority")f[N]=d==null?void 0:d.number;else if(P==="assignees"){var y,B;f[N]=((y=d==null||(B=d.users)===null||B===void 0?void 0:B.nodes)!==null&&y!==void 0?y:[]).map(function(A){return U()({},A)})}else"repository"in d&&(f.repository=d==null?void 0:d.repository)}}catch(A){p.e(A)}finally{p.f()}return f})}})}}function xe(u,e){var i=typeof window!="undefined"?window.location.origin:"http://localhost",t=new URL(u,i);return t.searchParams.set("login",e.login),t.searchParams.set("number","".concat(e.number)),t.searchParams.set("projectId","".concat(e.number)),t.toString()}function be(u,e,i){return k.apply(this,arguments)}function k(){return k=G()(C()().mark(function u(e,i,t){var s;return C()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!t){o.next=3;break}return s=xe(t,e),o.abrupt("return",fetch(s).then(function(c){return c.json()}));case 3:return o.t0=ye,o.next=6,fe(e,i);case 6:return o.t1=o.sent,o.abrupt("return",(0,o.t0)(o.t1));case 8:case"end":return o.stop()}},u)})),k.apply(this,arguments)}function Ie(u,e){var i;return e?U()(U()({},u),{},{views:((i=u==null?void 0:u.views)!==null&&i!==void 0?i:[]).map(function(t){var s;return U()(U()({},t),{},{items:((s=t==null?void 0:t.items)!==null&&s!==void 0?s:[]).filter(function(r){var o;return(r==null||(o=r.repository)===null||o===void 0?void 0:o.name)===e})})})}):u}var Pe=function(e){var i,t=e.login,s=e.style,r=e.className,o=e.url,c=e.title,a=e.subtitle,g=e.readme,m=e.repositories,b=e.projectId,j=e.token,f=e.api,h=(0,E.useState)(),p=V()(h,2),v=p[0],d=p[1],I=(0,E.useState)(0),N=V()(I,2),P=N[0],y=N[1],B=(0,E.useState)(),A=V()(B,2),J=A[0],Ne=A[1];(0,L.Z)(G()(C()().mark(function Z(){return C()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",be({login:t,number:b},j,f));case 1:case"end":return T.stop()}},Z)})),{onSuccess:d,refreshDeps:[t,b,j,f]});var X=(0,E.useMemo)(function(){if(m!=null&&m.length)return J&&m.includes(J)?J:m[0]},[J,m]),ee=(0,E.useMemo)(function(){var Z,K,T=Ie(v,X);console.log("board",T);var S=(Z=T==null?void 0:T.views)!==null&&Z!==void 0?Z:[],Be=(K=S==null?void 0:S[P])!==null&&K!==void 0?K:[];return{views:S==null?void 0:S.map(function(F){return{label:F==null?void 0:F.name,value:F==null?void 0:F.id}}),view:Be}},[v,P,X]),Ce=ee.views,$e=ee.view;return(0,n.jsxs)("div",{className:x()("GiBoard",r),style:s,children:[(0,n.jsx)(M,{title:c!=null?c:v==null?void 0:v.title,href:o!=null?o:v==null?void 0:v.url,description:a!=null?a:v==null?void 0:v.shortDescription,repositories:m,repository:X,onRepositoryChange:Ne,items:Ce,active:P,onChange:y}),(0,n.jsx)(ue,{view:$e}),(g!=null?g:v==null||(i=v.readme)===null||i===void 0?void 0:i.length)&&(0,n.jsxs)("div",{className:"GiReadme",children:[(0,n.jsx)("div",{className:"GiReadmeTitle",children:"README"}),(0,n.jsx)("div",{className:"GiReadmeBody",children:g!=null?g:v==null?void 0:v.readme})]})]})}},43264:function(_,w,l){"use strict";l.r(w),l.d(w,{texts:function(){return O}});const O=[{value:"This is an example component.",paraId:0,tocIndex:0}]},71568:function(){}}]);
