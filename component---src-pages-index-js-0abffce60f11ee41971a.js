(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7361:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/cloudinary-gatsby-starter-blog/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,a){"use strict";var l=a(7294),r=a(5444),i=a(8605);t.Z=function(){var e,t,n=(0,r.useStaticQuery)("3257411868"),c=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social;return l.createElement("div",{className:"bio"},l.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(7361)}),(null==c?void 0:c.name)&&l.createElement("p",null,"Written by ",l.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",l.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))}},9774:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var l=a(7294),r=a(5444),i=a(9535),n=a(7198),c=a(3751),s=function(){var e=(0,r.useStaticQuery)("489869618").allCloudinaryMedia.edges;return l.createElement("div",null,l.createElement("div",{className:"image-grid"},e.map((function(e,t){return l.createElement("div",{className:"image-item",key:t+"-cl"},l.createElement("img",{src:e.node.secure_url,alt:"no alt :("}))}))))},o=function(e){var t,a=e.data,o=e.location,d=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",u=a.allMarkdownRemark.nodes;return 0===u.length?l.createElement(n.Z,{location:o,title:d},l.createElement(c.Z,{title:"All posts"}),l.createElement(i.Z,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):l.createElement(n.Z,{location:o,title:d},l.createElement(c.Z,{title:"All posts"}),l.createElement(s,null),l.createElement(i.Z,null),l.createElement("ol",{style:{listStyle:"none"}},u.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0abffce60f11ee41971a.js.map