(self.webpackChunk_hocgin_giboard=self.webpackChunk_hocgin_giboard||[]).push([[725],{33837:function(X,w,a){"use strict";a.r(w),a.d(w,{demos:function(){return E}});var O=a(90228),C=a.n(O),K=a(87999),G=a.n(K),D=a(75271),V=a(16010),E={"giboard-demo-0":{component:D.memo(D.lazy(G()(C()().mark(function L(){var R,$;return C()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,Promise.resolve().then(a.bind(a,16010));case 2:return R=x.sent,$=R.GiBoard,x.abrupt("return",{default:function(){return D.createElement("div",{style:{display:"flex",flexDirection:"column",gap:20}},D.createElement($,{token:"ghp_wfheNxmh0HhsxCZi3ApJf2...",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{api:"https://public-api.hocgin.workers.dev/api/board",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{repositories:["giboard","repo-b"],api:"https://public-api.hocgin.workers.dev/api/board",login:"hocgin",projectId:"16",style:{height:400}}),D.createElement($,{token:"ghp_wfheNxmh0HhsxCZi3ApJf2...",title:null,login:"hocgin",projectId:"16",style:{height:400}}))}});case 5:case"end":return x.stop()}},L)})))),asset:{type:"BLOCK",id:"giboard-demo-0",refAtomIds:["GiBoard"],dependencies:{"index.jsx":{type:"FILE",value:`import {GiBoard} from '@hocgin/giboard';

export default () => <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16" style={{height: 400}}/>
  <GiBoard repositories={['giboard', 'repo-b']} 
           api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} title={null} login="hocgin" projectId="16"
           style={{height: 400}}/>
</div>`},"@hocgin/giboard":{type:"NPM",value:"1.0.0"}},entry:"index.jsx"},context:{"@hocgin/giboard":V},renderOpts:{compile:function(){var L=G()(C()().mark(function $(){var H,x=arguments;return C()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,a.e(38).then(a.bind(a,97038));case 2:return M.abrupt("return",(H=M.sent).default.apply(H,x));case 3:case"end":return M.stop()}},$)}));function R(){return L.apply(this,arguments)}return R}()}}}},16010:function(X,w,a){"use strict";a.r(w),a.d(w,{GiBoard:function(){return Ie}});var O=a(90228),C=a.n(O),K=a(87999),G=a.n(K),D=a(48305),V=a.n(D),E=a(75271),L=a(85240),R=a(82092),$=a.n(R),H=a(82187),x=a.n(H),n=a(52676),M=function(e){var i=e.active,t=i===void 0?0:i,s=e.title,l=e.description,r=e.repositories,m=r===void 0?[]:r,o=e.repository,h=e.items,p=h===void 0?[]:h,f=e.onChange,j=e.onRepositoryChange;return(0,n.jsxs)("div",{className:"GiHead",children:[(0,n.jsxs)("div",{className:"GiHeadTitleWrap",children:[s&&(0,n.jsx)("div",{className:"GiTitle",children:s}),l&&(0,n.jsx)("div",{className:"GiDescription",children:l})]}),(0,n.jsxs)("div",{className:"GiHeadActions",children:[m.length>1&&(0,n.jsx)("div",{className:"GiRepositoryFilter",children:(0,n.jsx)("select",{className:"RepositorySelector",value:o!=null?o:m[0],onChange:function(g){return j==null?void 0:j(g.target.value)},children:m.map(function(c){return(0,n.jsx)("option",{value:c,children:c},c)})})}),p.length>1&&(0,n.jsx)("div",{className:"GiSegmented",children:p.map(function(c,g){var u;return(0,n.jsx)("div",{className:x()("SegmentedItem",$()({},"Segmented",t===g)),onClick:function(){return f==null?void 0:f(g)},children:c==null?void 0:c.label},(u=c==null?void 0:c.value)!==null&&u!==void 0?u:g)})})]})]})},ee=a(36075),ne=a.n(ee),_=a(62336),ie=a(43804);function te(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=Math.min(Math.max(v,0),10)*10;return e.toFixed(2)+"%"}function oe(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return Math.min(Math.max(Math.round(v),0),10)}var re=function(e){var i=e.src,t=e.login;return(0,n.jsx)("a",{className:"Avatar",href:"https://github.com/".concat(t),children:(0,n.jsx)("img",{src:i,alt:t})})},W=function(e){var i=e.className,t=e.count,s=t===void 0?0:t,l=e.children;return(0,n.jsxs)("div",{className:"Badge",children:[(0,n.jsx)("div",{className:x()("BadgeIcon",i)}),l&&(0,n.jsx)("span",{className:"Title",children:l}),s>0&&(0,n.jsx)("span",{className:"Count",children:s})]})},le=function(e){var i=e.hasContent;return(0,n.jsx)("span",{className:x()($()({},"HasContent",i)),children:(0,n.jsx)("svg",{focusable:"false","aria-label":"Draft issue",role:"img",className:"StyledOcticon-sc-1lhyyr-0 lnFpuJ",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible",color:"rgb(87, 96, 106)"},children:(0,n.jsx)("path",{d:"M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z"})})})},ae=function(e){var i,t,s,l,r,m,o=e.item,h=(0,ie.Z)(!1),p=V()(h,2),f=p[0],j=p[1].toggle,c=(i=o==null?void 0:o.Assignees)!==null&&i!==void 0?i:[],g=(t=o==null?void 0:o.Description)!==null&&t!==void 0?t:o==null?void 0:o.Title,u=(s=o==null?void 0:o.Title)!==null&&s!==void 0?s:g,P=!!g,d=typeof(o==null?void 0:o.Complete)=="number",b=Math.min((l=o==null?void 0:o.Complete)!==null&&l!==void 0?l:0,5);o.repository={id:"R_kgDOJYwQPA",name:"giboard",url:"https://github.com/hocgin/giboard"};var I=o==null||(r=o.repository)===null||r===void 0||(r=r.url)===null||r===void 0?void 0:r.length,B=d;return(0,n.jsxs)("div",{className:x()("Item","Progress",B?"ItemHasItem":null),style:{"--percentage":te(b)},children:[(0,n.jsxs)("div",{className:"ItemHead",onClick:j,style:{cursor:P?"pointer":"not-allowed"},children:[(0,n.jsx)(le,{hasContent:!1})," ",(0,n.jsx)("span",{className:"ItemHeadTitle",children:u}),c.length>0&&(0,n.jsx)("div",{className:"Avatars",children:c.map(function(y,A){var N;return(0,n.jsx)(re,{src:y==null?void 0:y.avatarUrl,login:y==null?void 0:y.login},"".concat((N=y==null?void 0:y.login)!==null&&N!==void 0?N:"assignee","-").concat(A))})})]}),f&&P&&(0,n.jsx)("div",{className:"ItemDescription",children:g}),B&&(0,n.jsxs)("div",{className:"ItemFooter",children:[d&&(0,n.jsxs)("div",{className:"ItemSegmentedBarItem",children:[(0,n.jsx)("div",{className:"ItemSegmentedBar","aria-label":"Complete ".concat(b," of 5"),children:Array.from({length:5}).map(function(y,A){return(0,n.jsx)("span",{className:x()("ItemSegment",$()({},"Filled",A<oe(b)))},A)})}),(0,n.jsx)("span",{children:(b/5*100).toFixed(0)+"%"})]}),I&&(0,n.jsx)("a",{className:"ItemALinkItem",href:o==null||(m=o.repository)===null||m===void 0?void 0:m.url,children:(0,n.jsx)("div",{className:"ALinkItem",children:(0,n.jsx)(se,{})})})]})]})},se=function(e){return ne()(e),(0,n.jsxs)("svg",{width:"1.2em",height:"1.2em",className:"s-6","aria-hidden":"true","data-astro-cid-zyo63yeq":"true","data-icon":"left-arrow",children:[(0,n.jsx)("symbol",{id:"ai:local:left-arrow",viewBox:"0 0 24 24",children:(0,n.jsx)("path",{fill:"currentColor",d:"M17 11H9.41l3.3-3.29a1.004 1.004 0 1 0-1.42-1.42l-5 5a1 1 0 0 0-.21.33 1 1 0 0 0 0 .76 1 1 0 0 0 .21.33l5 5a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095L9.41 13H17a1 1 0 0 0 0-2"})}),(0,n.jsx)("use",{href:"#ai:local:left-arrow"})]})},z=function(e){var i=e.title,t=e.description,s=e.items,l=s===void 0?[]:s;return(0,n.jsxs)("div",{className:"List",children:[(0,n.jsxs)("div",{className:"ListHead",children:[(0,n.jsx)("div",{children:i}),(t==null?void 0:t.length)&&(0,n.jsx)("div",{className:"Description",children:t})]}),(0,n.jsx)("div",{className:"Body",children:l.map(function(r){return(0,n.jsx)(ae,{item:r},r==null?void 0:r.id)})})]})},de=function(e){var i=e.view,t=(0,E.useMemo)(function(){var p,f,j,c,g=_.Ey.toGroup(((p=i==null?void 0:i.items)!==null&&p!==void 0?p:[]).sort(function(u,P){var d,b;return _.Ey.sortDesc((d=u==null?void 0:u.Priority)!==null&&d!==void 0?d:0,(b=P==null?void 0:P.Priority)!==null&&b!==void 0?b:0)}),function(u){return u==null?void 0:u.Status});return console.log("group",g,i),{InProgress:(f=g.get("In Progress"))!==null&&f!==void 0?f:[],Todo:(j=g.get("Todo"))!==null&&j!==void 0?j:[],Done:(c=g.get("Done"))!==null&&c!==void 0?c:[]}},[i==null?void 0:i.items]),s=t.InProgress,l=s===void 0?[]:s,r=t.Todo,m=r===void 0?[]:r,o=t.Done,h=o===void 0?[]:o;return(0,n.jsxs)("div",{className:"View",children:[(0,n.jsx)(z,{title:(0,n.jsx)(W,{className:"Todo",count:m.length,children:"Todo"}),items:m,description:"This item hasn't been started"}),(0,n.jsx)(z,{title:(0,n.jsx)(W,{className:"InProgress",count:l.length,children:"In Progress"}),items:l,description:"This is actively being worked on"}),(0,n.jsx)(z,{title:(0,n.jsx)(W,{className:"Done",count:h.length,children:"Done"}),items:h,description:"This has been completed"})]})},ue=a(26068),U=a.n(ue),ve=a(335),ce=a.n(ve),me="https://api.github.com",he="".concat(me,"/graphql"),pe=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.entries(i).forEach(function(t){var s=V()(t,2),l=s[0],r=s[1];e=e.replace("$".concat(l),r)}),e};function ge(v,e){return Q.apply(this,arguments)}function Q(){return Q=G()(C()().mark(function v(e,i){return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",fetch(he,{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({query:pe(fe,e)})}).then(function(l){return l.json()}).catch(console.warn));case 1:case"end":return s.stop()}},v)})),Q.apply(this,arguments)}var fe=`query{
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
}`;function je(v){var e,i,t,s,l=(e=v==null||(i=v.data)===null||i===void 0||(i=i.user)===null||i===void 0?void 0:i.projectV2)!==null&&e!==void 0?e:{},r=(t=l==null||(s=l.views)===null||s===void 0?void 0:s.nodes)!==null&&t!==void 0?t:[];return console.log("field.resp",v),{url:l==null?void 0:l.url,title:l==null?void 0:l.title,shortDescription:l==null?void 0:l.shortDescription,readme:l==null?void 0:l.readme,views:r.map(function(m){var o,h;return{id:m==null?void 0:m.id,name:m==null?void 0:m.name,items:((o=m==null||(h=m.project)===null||h===void 0||(h=h.items)===null||h===void 0?void 0:h.nodes)!==null&&o!==void 0?o:[]).map(function(p){var f,j,c={id:p==null?void 0:p.id},g=(f=p==null||(j=p.fieldValues)===null||j===void 0?void 0:j.nodes)!==null&&f!==void 0?f:[],u=ce()(g),P;try{for(u.s();!(P=u.n()).done;){var d=P.value,b=d==null?void 0:d.field,I=b==null?void 0:b.name,B="".concat(I).trim().toLowerCase();if(B==="title")c[I]=d==null?void 0:d.text;else if(B==="status")c[I]=d==null?void 0:d.name;else if(B==="description")c[I]=d==null?void 0:d.text;else if(B==="complete")c[I]=d==null?void 0:d.number;else if(B==="priority")c[I]=d==null?void 0:d.number;else if(B==="assignees"){var y,A;c[I]=((y=d==null||(A=d.users)===null||A===void 0?void 0:A.nodes)!==null&&y!==void 0?y:[]).map(function(N){return U()({},N)})}else"repository"in d&&(c.repository=d==null?void 0:d.repository)}}catch(N){u.e(N)}finally{u.f()}return c})}})}}function ye(v,e){var i=typeof window!="undefined"?window.location.origin:"http://localhost",t=new URL(v,i);return t.searchParams.set("login",e.login),t.searchParams.set("number","".concat(e.number)),t.searchParams.set("projectId","".concat(e.number)),t.toString()}function xe(v,e,i){return Y.apply(this,arguments)}function Y(){return Y=G()(C()().mark(function v(e,i,t){var s;return C()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=3;break}return s=ye(t,e),r.abrupt("return",fetch(s).then(function(m){return m.json()}));case 3:return r.t0=je,r.next=6,ge(e,i);case 6:return r.t1=r.sent,r.abrupt("return",(0,r.t0)(r.t1));case 8:case"end":return r.stop()}},v)})),Y.apply(this,arguments)}function be(v,e){var i;return e?U()(U()({},v),{},{views:((i=v==null?void 0:v.views)!==null&&i!==void 0?i:[]).map(function(t){var s;return U()(U()({},t),{},{items:((s=t==null?void 0:t.items)!==null&&s!==void 0?s:[]).filter(function(l){var r;return(l==null||(r=l.repository)===null||r===void 0?void 0:r.name)===e})})})}):v}var Ie=function(e){var i,t=e.login,s=e.style,l=e.className,r=e.title,m=e.subtitle,o=e.readme,h=e.repositories,p=e.projectId,f=e.token,j=e.api,c=(0,E.useState)(),g=V()(c,2),u=g[0],P=g[1],d=(0,E.useState)(0),b=V()(d,2),I=b[0],B=b[1],y=(0,E.useState)(),A=V()(y,2),N=A[0],Pe=A[1];(0,L.Z)(G()(C()().mark(function Z(){return C()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.abrupt("return",xe({login:t,number:p},f,j));case 1:case"end":return T.stop()}},Z)})),{onSuccess:P,refreshDeps:[t,p,f,j]});var k=(0,E.useMemo)(function(){if(h!=null&&h.length)return N&&h.includes(N)?N:h[0]},[N,h]),q=(0,E.useMemo)(function(){var Z,J,T=be(u,k);console.log("board",T);var S=(Z=T==null?void 0:T.views)!==null&&Z!==void 0?Z:[],$e=(J=S==null?void 0:S[I])!==null&&J!==void 0?J:[];return{views:S==null?void 0:S.map(function(F){return{label:F==null?void 0:F.name,value:F==null?void 0:F.id}}),view:$e}},[u,I,k]),Ne=q.views,Ce=q.view;return(0,n.jsxs)("div",{className:x()("GiBoard",l),style:s,children:[(0,n.jsx)(M,{title:r!=null?r:u==null?void 0:u.title,description:m!=null?m:u==null?void 0:u.shortDescription,repositories:h,repository:k,onRepositoryChange:Pe,items:Ne,active:I,onChange:B}),(0,n.jsx)(de,{view:Ce}),(o!=null?o:u==null||(i=u.readme)===null||i===void 0?void 0:i.length)&&(0,n.jsxs)("div",{className:"GiReadme",children:[(0,n.jsx)("div",{className:"GiReadmeTitle",children:"README"}),(0,n.jsx)("div",{className:"GiReadmeBody",children:o!=null?o:u==null?void 0:u.readme})]})]})}},43264:function(X,w,a){"use strict";a.r(w),a.d(w,{texts:function(){return O}});const O=[{value:"This is an example component.",paraId:0,tocIndex:0}]},71568:function(){}}]);
