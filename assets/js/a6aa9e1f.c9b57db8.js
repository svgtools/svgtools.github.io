"use strict";(self.webpackChunkmy_site_ts=self.webpackChunkmy_site_ts||[]).push([[976],{6960:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(1504);var s=a(5456),n=a(8264),r=a(8900),i=a(5864),l=a(3208),o=a(2687),c=a(8712),d=a(992),g=a(6952),m=a(5536),u=a(7624);function h(e){const t=(0,m.QP)(e);return(0,u.jsx)(g.c,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.c)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?a:i;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(r.U7,{title:o,description:s}),(0,u.jsx)(c.c,{tag:"blog_posts_list"})]})}function x(e){const{metadata:t,items:a,sidebar:s}=e;return(0,u.jsxs)(l.c,{sidebar:s,children:[(0,u.jsx)(d.c,{items:a}),(0,u.jsx)(o.c,{metadata:t})]})}function j(e){return(0,u.jsxs)(r.cr,{className:(0,s.c)(i.W.wrapper.blogPages,i.W.page.blogListPage),children:[(0,u.jsx)(p,{...e}),(0,u.jsx)(h,{...e}),(0,u.jsx)(x,{...e})]})}},2687:(e,t,a)=>{a.d(t,{c:()=>i});a(1504);var s=a(4357),n=a(308),r=a(7624);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.c,{permalink:a,title:(0,r.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,r.jsx)(n.c,{permalink:i,title:(0,r.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},2412:(e,t,a)=>{a.d(t,{c:()=>C});a(1504);var s=a(5456),n=a(5536),r=a(7624);function i(e){let{children:t,className:a}=e;return(0,r.jsx)("article",{className:a,children:t})}var l=a(867);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,n.gL)(),{permalink:c,title:d}=a,g=i?"h1":"h2";return(0,r.jsx)(g,{className:(0,s.c)(o.title,t),children:i?d:(0,r.jsx)(l.c,{to:c,children:d})})}var d=a(4357),g=a(5944),m=a(3852);const u={container:"container_mt6G"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.A)();return t=>{const a=Math.ceil(t);return e(a,(0,d.G)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,r.jsx)(r.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,r.jsx)("time",{dateTime:t,children:a})}function x(){return(0,r.jsx)(r.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,n.gL)(),{date:i,readingTime:l}=a,o=(0,m.y)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,r.jsxs)("div",{className:(0,s.c)(u.container,"margin-vert--md",t),children:[(0,r.jsx)(p,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{}),(0,r.jsx)(h,{readingTime:l})]})]});var c}var b=a(7214);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,n.gL)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,r.jsx)("div",{className:(0,s.c)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,r.jsx)("div",{className:(0,s.c)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,r.jsx)(b.c,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,r.jsxs)("header",{children:[(0,r.jsx)(c,{}),(0,r.jsx)(j,{}),(0,r.jsx)(v,{})]})}var _=a(5684),k=a(9444);function T(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,n.gL)();return(0,r.jsx)("div",{id:i?_.cH:void 0,className:(0,s.c)("markdown",a),children:(0,r.jsx)(k.c,{children:t})})}var w=a(5864),y=a(3092),P=a(1096);function A(){return(0,r.jsx)("b",{children:(0,r.jsx)(d.c,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function L(e){const{blogPostTitle:t,...a}=e;return(0,r.jsx)(l.c,{"aria-label":(0,d.G)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,r.jsx)(A,{})})}function R(){const{metadata:e,isBlogPostPage:t}=(0,n.gL)(),{tags:a,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,m=a.length>0;if(!(m||g||l))return null;if(t){const e=!!(l||d||c);return(0,r.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.c)("row","margin-top--sm",w.W.blog.blogFooterEditMetaRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(P.c,{tags:a})})}),e&&(0,r.jsx)(y.c,{className:(0,s.c)("margin-top--sm",w.W.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,r.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,r.jsx)("div",{className:(0,s.c)("col",{"col--9":g}),children:(0,r.jsx)(P.c,{tags:a})}),g&&(0,r.jsx)("div",{className:(0,s.c)("col text--right",{"col--3":m}),children:(0,r.jsx)(L,{blogPostTitle:i,to:e.permalink})})]})}function C(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,n.gL)();return e?void 0:"margin-bottom--xl"}();return(0,r.jsxs)(i,{className:(0,s.c)(l,a),children:[(0,r.jsx)(N,{}),(0,r.jsx)(T,{children:t}),(0,r.jsx)(R,{})]})}},992:(e,t,a)=>{a.d(t,{c:()=>i});a(1504);var s=a(5536),n=a(2412),r=a(7624);function i(e){let{items:t,component:a=n.c}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.EB,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},308:(e,t,a)=>{a.d(t,{c:()=>i});a(1504);var s=a(5456),n=a(867),r=a(7624);function i(e){const{permalink:t,title:a,subLabel:i,isNext:l}=e;return(0,r.jsxs)(n.c,{className:(0,s.c)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,r.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,r.jsx)("div",{className:"pagination-nav__label",children:a})]})}},3020:(e,t,a)=>{a.d(t,{c:()=>l});a(1504);var s=a(5456),n=a(867);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=a(7624);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,i.jsxs)(n.c,{href:t,title:o,className:(0,s.c)(r.tag,l?r.tagWithCount:r.tagRegular),children:[a,l&&(0,i.jsx)("span",{children:l})]})}},1096:(e,t,a)=>{a.d(t,{c:()=>o});a(1504);var s=a(5456),n=a(4357),r=a(3020);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(7624);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(n.c,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.c)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(r.c,{...e})},e.permalink)))})]})}}}]);