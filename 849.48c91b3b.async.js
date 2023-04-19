(self.webpackChunk_hocgin_giboard=self.webpackChunk_hocgin_giboard||[]).push([[849],{89462:function(de,H,d){"use strict";d.r(H),d.d(H,{GiBoard:function(){return ae}});var O=d(25359),C=d.n(O),E=d(49811),M=d.n(E),L=d(54306),w=d.n(L),S=d(50959),R=d(57213),U=d.n(R),J=d(54689),Q=d.n(J),z="https://api.github.com",Y="".concat(z,"/graphql"),K=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.entries(t).forEach(function(r){var o=w()(r,2),n=o[0],l=o[1];e=e.replace("$".concat(n),l)}),e};function W(c,e){return B.apply(this,arguments)}function B(){return B=M()(C()().mark(function c(e,t){return C()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",fetch(Y,{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({query:K(X,e)})}).then(function(n){return n.json()}).catch(console.warn));case 1:case"end":return o.stop()}},c)})),B.apply(this,arguments)}var X=`query{
  user(login: "$login"){
      projectV2(number: $number) {
          url
          title
          shortDescription
          readme
          views(last: 10) {
              nodes {
                id
                name
                number
                project {
                  title
                  items(first: 50) {
                    nodes {
                      id
                      fieldValues(first: 8) {
                        nodes {
                        ... on ProjectV2ItemFieldTextValue {
                            text
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
                                login,
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
}`;function k(c){var e,t,r,o,n,l=(e=c==null||(t=c.data)===null||t===void 0||(r=t.user)===null||r===void 0?void 0:r.projectV2)!==null&&e!==void 0?e:{},x=(o=l==null||(n=l.views)===null||n===void 0?void 0:n.nodes)!==null&&o!==void 0?o:[];return console.log("field.resp",c),{url:l==null?void 0:l.url,title:l==null?void 0:l.title,shortDescription:l==null?void 0:l.shortDescription,readme:l==null?void 0:l.readme,views:x.map(function(u){var g,m,y;return{id:u==null?void 0:u.id,name:u==null?void 0:u.name,items:((g=u==null||(m=u.project)===null||m===void 0||(y=m.items)===null||y===void 0?void 0:y.nodes)!==null&&g!==void 0?g:[]).map(function(h){var p,f,v={id:h==null?void 0:h.id},j=(p=h==null||(f=h.fieldValues)===null||f===void 0?void 0:f.nodes)!==null&&p!==void 0?p:[],P=Q()(j),I;try{for(P.s();!(I=P.n()).done;){var s=I.value,N=s==null?void 0:s.field,a=N==null?void 0:N.name,T="".concat(a).trim().toLowerCase();if(T==="title")v[a]=s==null?void 0:s.text;else if(T==="status")v[a]=s==null?void 0:s.name;else if(T==="description")v[a]=s==null?void 0:s.text;else if(T==="complete")v[a]=s==null?void 0:s.number;else if(T==="priority")v[a]=s==null?void 0:s.number;else if(T==="assignees"){var $,A;v[a]=(($=s==null||(A=s.users)===null||A===void 0?void 0:A.nodes)!==null&&$!==void 0?$:[]).map(function(G){return U()({},G)})}}}catch(G){P.e(G)}finally{P.f()}return v})}})}}var q=d(70084),_=d(52510),b=d.n(_),ee=d(84875),V=d.n(ee),i=d(11527),ne=function(e){var t=e.active,r=t===void 0?0:t,o=e.title,n=e.items,l=n===void 0?[]:n,x=e.onChange;return(0,i.jsxs)("div",{className:"GiHead",children:[o&&(0,i.jsx)("div",{className:"GiTitle",children:o}),l.length>1&&(0,i.jsx)("div",{className:"GiSegmented",children:l.map(function(u,g){return(0,i.jsx)("div",{className:V()("SegmentedItem",b()({},"Segmented",r===g)),onClick:function(){return x==null?void 0:x(g)},children:u==null?void 0:u.label})})})]})},Z=d(4726),ie=d(86452),D=function(e){var t=e.title,r=e.description,o=e.items,n=o===void 0?[]:o;return(0,i.jsxs)("div",{className:"List",children:[(0,i.jsxs)("div",{className:"ListHead",children:[(0,i.jsx)("div",{children:t}),r&&(0,i.jsx)("div",{className:"Description",children:r})]}),(0,i.jsx)("div",{className:"Body",children:n.map(function(l){return(0,i.jsx)(te,{item:l})})})]})},te=function(e){var t,r,o,n=e.item,l=(0,ie.Z)(!1),x=w()(l,2),u=x[0],g=x[1],m=g.toggle,y=g.setFalse,h=(t=n==null?void 0:n.Assignees)!==null&&t!==void 0?t:[],p=(r=n==null?void 0:n.Description)!==null&&r!==void 0?r:n==null?void 0:n.Title,f=(o=n==null?void 0:n.Title)!==null&&o!==void 0?o:p,v=!!p;return(0,i.jsxs)("div",{className:V()("Item","Progress"),style:{"--percentage":se(n==null?void 0:n.Complete)},children:[(0,i.jsxs)("div",{className:"ItemHead",onClick:m,style:{cursor:v?"pointer":"not-allowed"},children:[(0,i.jsx)(le,{hasContent:v})," ",(0,i.jsx)("span",{className:"ItemHeadTitle",children:f}),h.length>0&&(0,i.jsx)("div",{className:"Avatars",children:h.map(function(j){return(0,i.jsx)(re,{src:j==null?void 0:j.avatarUrl,login:j==null?void 0:j.login})})})]}),u&&v&&(0,i.jsx)("div",{className:"ItemDescription",children:p})]})},oe=function(e){var t=e.view,r=(0,S.useMemo)(function(){var m,y,h,p,f=Z.Ey.toGroup(((m=t==null?void 0:t.items)!==null&&m!==void 0?m:[]).sort(function(v,j){var P,I;return Z.Ey.sortDesc((P=v==null?void 0:v.Priority)!==null&&P!==void 0?P:0,(I=j==null?void 0:j.Priority)!==null&&I!==void 0?I:0)}),function(v){return v==null?void 0:v.Status});return console.log("group",f,t),{InProgress:(y=f.get("In Progress"))!==null&&y!==void 0?y:[],Todo:(h=f.get("Todo"))!==null&&h!==void 0?h:[],Done:(p=f.get("Done"))!==null&&p!==void 0?p:[]}},[t==null?void 0:t.items]),o=r.InProgress,n=o===void 0?[]:o,l=r.Todo,x=l===void 0?[]:l,u=r.Done,g=u===void 0?[]:u;return(0,i.jsxs)("div",{className:"View",children:[(0,i.jsx)(D,{title:(0,i.jsx)(F,{className:"Todo",count:x.length,children:"Todo"}),items:x,description:"This item hasn't been started"}),(0,i.jsx)(D,{title:(0,i.jsx)(F,{className:"InProgress",count:n.length,children:"In Progress"}),items:n,description:"This is actively being worked on"}),(0,i.jsx)(D,{title:(0,i.jsx)(F,{className:"Done",count:g.length,children:"Done"}),items:g,description:"This has been completed"})]})},F=function(e){var t=e.className,r=e.count,o=r===void 0?0:r,n=e.children;return(0,i.jsxs)("div",{className:"Badge",children:[(0,i.jsx)("div",{className:V()("BadgeIcon",t)}),n&&(0,i.jsx)("span",{className:"Title",children:n}),o>0&&(0,i.jsx)("span",{className:"Count",children:o})]})},le=function(e){var t=e.hasContent;return(0,i.jsx)("span",{className:V()(b()({},"HasContent",t)),children:(0,i.jsx)("svg",{focusable:"false","aria-label":"Draft issue",role:"img",className:"StyledOcticon-sc-1lhyyr-0 lnFpuJ",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible",color:"rgb(87, 96, 106)"},children:(0,i.jsx)("path",{d:"M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z"})})})},re=function(e){var t=e.src,r=e.login;return(0,i.jsx)("a",{className:"Avatar",href:"https://github.com/".concat(r),children:(0,i.jsx)("img",{src:t,alt:r})})};function se(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=Math.min(Math.max(c,0),100);return e.toFixed(2)+"%"}var ae=function(e){var t=e.login,r=e.style,o=e.className,n=e.title,l=e.projectId,x=e.token,u=(0,S.useState)(),g=w()(u,2),m=g[0],y=g[1],h=(0,S.useState)(0),p=w()(h,2),f=p[0],v=p[1];(0,q.Z)(M()(C()().mark(function s(){return C()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=k,a.next=3,W({login:t,number:l},x);case 3:return a.t1=a.sent,a.abrupt("return",(0,a.t0)(a.t1));case 5:case"end":return a.stop()}},s)})),{onSuccess:y});var j=(0,S.useMemo)(function(){var s,N,a=(s=m==null?void 0:m.views)!==null&&s!==void 0?s:[],T=(N=a==null?void 0:a[f])!==null&&N!==void 0?N:[];return console.log("view",f),{views:a==null?void 0:a.map(function($){return{label:$==null?void 0:$.name,value:$==null?void 0:$.id}}),view:T}},[m,f]),P=j.views,I=j.view;return(0,i.jsxs)("div",{className:V()("GiBoard",o),style:r,children:[(0,i.jsx)(ne,{title:n!=null?n:m==null?void 0:m.title,items:P,active:f,onChange:v}),(0,i.jsx)(oe,{view:I})]})}},57002:function(){}}]);
