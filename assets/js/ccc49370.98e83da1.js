"use strict";(self.webpackChunkmy_site_ts=self.webpackChunkmy_site_ts||[]).push([[6344],{2412:(e,t,n)=>{n.d(t,{c:()=>O});n(1504);var a=n(5456),s=n(5536),i=n(7624);function r(e){let{children:t,className:n}=e;return(0,i.jsx)("article",{className:n,children:t})}var l=n(867);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,s.gL)(),{permalink:c,title:d}=n,m=r?"h1":"h2";return(0,i.jsx)(m,{className:(0,a.c)(o.title,t),children:r?d:(0,i.jsx)(l.c,{to:c,children:d})})}var d=n(4357),m=n(5944),u=n(3852);const g={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,m.A)();return t=>{const n=Math.ceil(t);return e(n,(0,d.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,i.jsx)(i.Fragment,{children:n(t)})}function x(e){let{date:t,formattedDate:n}=e;return(0,i.jsx)("time",{dateTime:t,children:n})}function f(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function p(e){let{className:t}=e;const{metadata:n}=(0,s.gL)(),{date:r,readingTime:l}=n,o=(0,u.y)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,a.c)(g.container,"margin-vert--md",t),children:[(0,i.jsx)(x,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var v=n(7214);const j={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function b(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,s.gL)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,i.jsx)("div",{className:(0,a.c)("margin-top--md margin-bottom--sm",l?j.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,i.jsx)("div",{className:(0,a.c)(!l&&(o?"col col--12":"col col--6"),l?j.imageOnlyAuthorCol:j.authorCol),children:(0,i.jsx)(v.c,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(p,{}),(0,i.jsx)(b,{})]})}var L=n(5684),_=n(9444);function y(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,s.gL)();return(0,i.jsx)("div",{id:r?L.cH:void 0,className:(0,a.c)("markdown",n),children:(0,i.jsx)(_.c,{children:t})})}var C=n(5864),k=n(3092),H=n(1096);function T(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function w(e){const{blogPostTitle:t,...n}=e;return(0,i.jsx)(l.c,{"aria-label":(0,d.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,i.jsx)(T,{})})}function A(){const{metadata:e,isBlogPostPage:t}=(0,s.gL)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,m=!t&&o,u=n.length>0;if(!(u||m||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.c)("row","margin-top--sm",C.W.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(H.c,{tags:n})})}),e&&(0,i.jsx)(k.c,{className:(0,a.c)("margin-top--sm",C.W.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,a.c)("col",{"col--9":m}),children:(0,i.jsx)(H.c,{tags:n})}),m&&(0,i.jsx)("div",{className:(0,a.c)("col text--right",{"col--3":u}),children:(0,i.jsx)(w,{blogPostTitle:r,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,s.gL)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,a.c)(l,n),children:[(0,i.jsx)(N,{}),(0,i.jsx)(y,{children:t}),(0,i.jsx)(A,{})]})}},1686:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(1504);var a=n(5456),s=n(8900),i=n(5864),r=n(5536),l=n(3208),o=n(2412),c=n(4357),d=n(308),m=n(7624);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.G)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.c,{...n,subLabel:(0,m.jsx)(c.c,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(d.c,{...t,subLabel:(0,m.jsx)(c.c,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,r.gL)(),{title:n,description:a,date:i,tags:l,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.U7,{title:n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=n(6952);function x(){const e=(0,r.CC)();return(0,m.jsx)(h.c,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(5124),p=n(44);function v(e){let{sidebar:t,children:n}=e;const{metadata:a,toc:s}=(0,r.gL)(),{nextItem:i,prevItem:c,frontMatter:d}=a,{hide_table_of_contents:g,toc_min_heading_level:h,toc_max_heading_level:x}=d;return(0,m.jsxs)(l.c,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(f.c,{toc:s,minHeadingLevel:h,maxHeadingLevel:x}):void 0,children:[(0,m.jsx)(p.c,{metadata:a}),(0,m.jsx)(o.c,{children:n}),(i||c)&&(0,m.jsx)(u,{nextItem:i,prevItem:c})]})}function j(e){const t=e.content;return(0,m.jsx)(r.EB,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.cr,{className:(0,a.c)(i.W.wrapper.blogPages,i.W.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(x,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},3512:(e,t,n)=>{n.d(t,{c:()=>c});n(1504);var a=n(5456),s=n(7976),i=n(5864),r=n(304),l=n(7624);function o(e){let{className:t}=e;return(0,l.jsx)(r.c,{type:"caution",title:(0,l.jsx)(s.GI,{}),className:(0,a.c)(t,i.W.common.unlistedBanner),children:(0,l.jsx)(s.oX,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Qj,{}),(0,l.jsx)(o,{...e})]})}},44:(e,t,n)=>{n.d(t,{c:()=>d});n(1504);var a=n(5456),s=n(7976),i=n(5864),r=n(304),l=n(7624);function o(e){let{className:t}=e;return(0,l.jsx)(r.c,{type:"caution",title:(0,l.jsx)(s.kh,{}),className:(0,a.c)(t,i.W.common.draftBanner),children:(0,l.jsx)(s.Yv,{})})}var c=n(3512);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.c,{}),a.draft&&(0,l.jsx)(o,{})]})}},308:(e,t,n)=>{n.d(t,{c:()=>r});n(1504);var a=n(5456),s=n(867),i=n(7624);function r(e){const{permalink:t,title:n,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.c,{className:(0,a.c)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:n})]})}},5124:(e,t,n)=>{n.d(t,{c:()=>c});n(1504);var a=n(5456),s=n(3088);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(7624);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.c)(i.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(s.c,{...n,linkClassName:l,linkActiveClassName:o})})}},3088:(e,t,n)=>{n.d(t,{c:()=>x});var a=n(1504),s=n(1824);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.y)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var m=n(867),u=n(7624);function g(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.c,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:m,...g}=e;const x=(0,s.y)(),f=c??x.tableOfContents.minHeadingLevel,p=m??x.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>r({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:f,maxHeadingLevel:p}}),[l,o,f,p])),(0,u.jsx)(h,{toc:v,className:n,linkClassName:l,...g})}},3020:(e,t,n)=>{n.d(t,{c:()=>l});n(1504);var a=n(5456),s=n(867);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=n(7624);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,r.jsxs)(s.c,{href:t,title:o,className:(0,a.c)(i.tag,l?i.tagWithCount:i.tagRegular),children:[n,l&&(0,r.jsx)("span",{children:l})]})}},1096:(e,t,n)=>{n.d(t,{c:()=>o});n(1504);var a=n(5456),s=n(4357),i=n(3020);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(7624);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,a.c)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.c,{...e})},e.permalink)))})]})}},7976:(e,t,n)=>{n.d(t,{GI:()=>r,Qj:()=>o,Yv:()=>d,kh:()=>c,oX:()=>l});n(1504);var a=n(4357),s=n(6952),i=n(7624);function r(){return(0,i.jsx)(a.c,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(a.c,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.c,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(a.c,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(a.c,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);