(self.webpackChunk_hocgin_giboard=self.webpackChunk_hocgin_giboard||[]).push([[849],{89462:function(de,H,v){"use strict";v.r(H),v.d(H,{GiBoard:function(){return ae}});var O=v(25359),C=v.n(O),E=v(49811),M=v.n(E),L=v(54306),w=v.n(L),S=v(50959),R=v(57213),U=v.n(R),J=v(54689),Q=v.n(J),z="https://api.github.com",Y="".concat(z,"/graphql"),K=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.entries(t).forEach(function(l){var n=w()(l,2),a=n[0],o=n[1];e=e.replace("$".concat(a),o)}),e};function W(c,e){return B.apply(this,arguments)}function B(){return B=M()(C()().mark(function c(e,t){return C()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch(Y,{method:"POST",headers:{Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({query:K(X,e)})}).then(function(a){return a.json()}).catch(console.warn));case 1:case"end":return n.stop()}},c)})),B.apply(this,arguments)}var X=`query{
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
}`;function k(c){var e,t,l,n,a,o=(e=c==null||(t=c.data)===null||t===void 0||(l=t.user)===null||l===void 0?void 0:l.projectV2)!==null&&e!==void 0?e:{},j=(n=o==null||(a=o.views)===null||a===void 0?void 0:a.nodes)!==null&&n!==void 0?n:[];return console.log("field.resp",c),{url:o==null?void 0:o.url,title:o==null?void 0:o.title,shortDescription:o==null?void 0:o.shortDescription,readme:o==null?void 0:o.readme,views:j.map(function(u){var f,m,p;return{id:u==null?void 0:u.id,name:u==null?void 0:u.name,items:((f=u==null||(m=u.project)===null||m===void 0||(p=m.items)===null||p===void 0?void 0:p.nodes)!==null&&f!==void 0?f:[]).map(function(h){var x,g,d={id:h==null?void 0:h.id},$=(x=h==null||(g=h.fieldValues)===null||g===void 0?void 0:g.nodes)!==null&&x!==void 0?x:[],y=Q()($),I;try{for(y.s();!(I=y.n()).done;){var r=I.value,N=r==null?void 0:r.field,s=N==null?void 0:N.name,T="".concat(s).trim().toLowerCase();if(T==="title")d[s]=r==null?void 0:r.text;else if(T==="status")d[s]=r==null?void 0:r.name;else if(T==="description")d[s]=r==null?void 0:r.text;else if(T==="complete")d[s]=r==null?void 0:r.number;else if(T==="priority")d[s]=r==null?void 0:r.number;else if(T==="assignees"){var P,A;d[s]=((P=r==null||(A=r.users)===null||A===void 0?void 0:A.nodes)!==null&&P!==void 0?P:[]).map(function(G){return U()({},G)})}}}catch(G){y.e(G)}finally{y.f()}return d})}})}}var q=v(70084),_=v(52510),b=v.n(_),ee=v(84875),V=v.n(ee),i=v(11527),ne=function(e){var t=e.active,l=t===void 0?0:t,n=e.title,a=e.items,o=a===void 0?[]:a,j=e.onChange;return(0,i.jsxs)("div",{className:"GiHead",children:[n&&(0,i.jsx)("div",{className:"GiTitle",children:n}),o.length>1&&(0,i.jsx)("div",{className:"GiSegmented",children:o.map(function(u,f){return(0,i.jsx)("div",{className:V()("SegmentedItem",b()({},"Segmented",l===f)),onClick:function(){return j==null?void 0:j(f)},children:u==null?void 0:u.label})})})]})},Z=v(4726),ie=v(86452),F=function(e){var t=e.title,l=e.description,n=e.items,a=n===void 0?[]:n;return(0,i.jsxs)("div",{className:"List",children:[(0,i.jsxs)("div",{className:"ListHead",children:[(0,i.jsx)("div",{children:t}),l&&(0,i.jsx)("div",{className:"Description",children:l})]}),(0,i.jsx)("div",{className:"Body",children:a.map(function(o){return(0,i.jsx)(te,{item:o})})})]})},te=function(e){var t,l,n=e.item,a=(0,ie.Z)(!1),o=w()(a,2),j=o[0],u=o[1],f=u.toggle,m=u.setFalse,p=(t=n==null?void 0:n.Assignees)!==null&&t!==void 0?t:[],h=n==null?void 0:n.Description,x=(l=n==null?void 0:n.Title)!==null&&l!==void 0?l:h,g=!!h;return(0,i.jsxs)("div",{className:V()("Item","Progress"),style:{"--percentage":se(n==null?void 0:n.Complete)},children:[(0,i.jsxs)("div",{className:"ItemHead",onClick:f,style:{cursor:g?"pointer":"not-allowed"},children:[(0,i.jsx)(le,{hasContent:g})," ",(0,i.jsx)("span",{className:"ItemHeadTitle",children:x}),p.length>0&&(0,i.jsx)("div",{className:"Avatars",children:p.map(function(d){return(0,i.jsx)(re,{src:d==null?void 0:d.avatarUrl,login:d==null?void 0:d.login})})})]}),j&&g&&(0,i.jsx)("div",{className:"ItemDescription",children:h})]})},oe=function(e){var t=e.view,l=(0,S.useMemo)(function(){var m,p,h,x,g=Z.Ey.toGroup(((m=t==null?void 0:t.items)!==null&&m!==void 0?m:[]).sort(function(d,$){var y,I;return Z.Ey.sortDesc((y=d==null?void 0:d.Priority)!==null&&y!==void 0?y:0,(I=$==null?void 0:$.Priority)!==null&&I!==void 0?I:0)}),function(d){return d==null?void 0:d.Status});return console.log("group",g,t),{InProgress:(p=g.get("In Progress"))!==null&&p!==void 0?p:[],Todo:(h=g.get("Todo"))!==null&&h!==void 0?h:[],Done:(x=g.get("Done"))!==null&&x!==void 0?x:[]}},[t==null?void 0:t.items]),n=l.InProgress,a=n===void 0?[]:n,o=l.Todo,j=o===void 0?[]:o,u=l.Done,f=u===void 0?[]:u;return(0,i.jsxs)("div",{className:"View",children:[(0,i.jsx)(F,{title:(0,i.jsx)(D,{className:"Todo",count:j.length,children:"Todo"}),items:j,description:"This item hasn't been started"}),(0,i.jsx)(F,{title:(0,i.jsx)(D,{className:"InProgress",count:a.length,children:"In Progress"}),items:a,description:"This is actively being worked on"}),(0,i.jsx)(F,{title:(0,i.jsx)(D,{className:"Done",count:f.length,children:"Done"}),items:f,description:"This has been completed"})]})},D=function(e){var t=e.className,l=e.count,n=l===void 0?0:l,a=e.children;return(0,i.jsxs)("div",{className:"Badge",children:[(0,i.jsx)("div",{className:V()("BadgeIcon",t)}),a&&(0,i.jsx)("span",{className:"Title",children:a}),n>0&&(0,i.jsx)("span",{className:"Count",children:n})]})},le=function(e){var t=e.hasContent;return(0,i.jsx)("span",{className:V()(b()({},"HasContent",t)),children:(0,i.jsx)("svg",{focusable:"false","aria-label":"Draft issue",role:"img",className:"StyledOcticon-sc-1lhyyr-0 lnFpuJ",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor",style:{display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible",color:"rgb(87, 96, 106)"},children:(0,i.jsx)("path",{d:"M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z"})})})},re=function(e){var t=e.src,l=e.login;return(0,i.jsx)("a",{className:"Avatar",href:"https://github.com/".concat(l),children:(0,i.jsx)("img",{src:t,alt:l})})};function se(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=Math.min(Math.max(c,0),100);return e.toFixed(2)+"%"}var ae=function(e){var t=e.login,l=e.style,n=e.className,a=e.title,o=e.projectId,j=e.token,u=(0,S.useState)(),f=w()(u,2),m=f[0],p=f[1],h=(0,S.useState)(0),x=w()(h,2),g=x[0],d=x[1];(0,q.Z)(M()(C()().mark(function r(){return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.t0=k,s.next=3,W({login:t,number:o},j);case 3:return s.t1=s.sent,s.abrupt("return",(0,s.t0)(s.t1));case 5:case"end":return s.stop()}},r)})),{onSuccess:p});var $=(0,S.useMemo)(function(){var r,N,s=(r=m==null?void 0:m.views)!==null&&r!==void 0?r:[],T=(N=s==null?void 0:s[g])!==null&&N!==void 0?N:[];return console.log("view",g),{views:s==null?void 0:s.map(function(P){return{label:P==null?void 0:P.name,value:P==null?void 0:P.id}}),view:T}},[m,g]),y=$.views,I=$.view;return(0,i.jsxs)("div",{className:V()("GiBoard",n),style:l,children:[(0,i.jsx)(ne,{title:a!=null?a:m==null?void 0:m.title,items:y,active:g,onChange:d}),(0,i.jsx)(oe,{view:I})]})}},57002:function(){}}]);
