(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{21:function(e,t,c){},35:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(19),i=c.n(a),r=(c(35),c(9)),o=c(8),l=c(5),d=c(2),j=(c(21),c(0)),u=function(e){var t=e.cartQty;return Object(j.jsxs)("nav",{className:"header",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)(l.b,{to:"/about",className:"tab",children:Object(j.jsx)("li",{children:"about"})}),Object(j.jsx)(l.b,{to:"/shop",className:"tab",children:Object(j.jsx)("li",{children:"shop"})}),Object(j.jsx)(l.b,{to:"/cart",className:"tab",children:Object(j.jsxs)("li",{children:["cart ",Object(j.jsx)("sup",{children:t})]})})]}),Object(j.jsx)(l.b,{to:"/shopping-cart",className:"brand-name",children:"endless"})]})},b=function(){return Object(j.jsx)("nav",{className:"footer",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"tab",onClick:function(){return window.open("mailto:customercare@endless.com","_blank")},children:"customercare@endless.com"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"tab",onClick:function(){return window.open("https://www.google.com/maps/place/395+Johnson+Ave,+Brooklyn,+NY+11206/@40.7078046,-73.9353283,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25c01d28bb8ad:0x84c38d97b3317d2!8m2!3d40.7078046!4d-73.9331396","_blank")},children:"395 johnson avenue, brooklyn, ny, 11206"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"tab",onClick:function(){return window.open("tel:+15553635377","_blank")},children:"+1 555 363 5377"})})]})})},m=c.p+"static/media/featured1.438b34f0.jpeg",h=c.p+"static/media/featured2.25ada7d0.jpeg",O=c.p+"static/media/slide-1.08b71743.jpeg",x=c.p+"static/media/slide-2.4ea0019a.jpeg",p=c.p+"static/media/slide-3.ad6373d4.jpeg",v=c(15),f=(c(48),c(49),function(){return Object(s.useEffect)((function(){var e=document.querySelector(".welcome-screen-container");document.body.style.overflow="hidden";var t=function(){e.style.transform="translateY(-100%)",setTimeout((function(){document.body.style.overflow=""}),1100)};return setTimeout((function(){e.addEventListener("wheel",t),e.addEventListener("click",t)}),2400),setTimeout((function(){t()}),4800),function(){e.removeEventListener("wheel",t),e.removeEventListener("click",t)}}),[]),Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("div",{className:"welcome-screen",children:Object(j.jsx)("div",{className:"welcome-screen-container",children:Object(j.jsxs)("div",{className:"welcome-screen-message-container",children:[Object(j.jsx)("span",{className:"welcome-screen-message",children:"endless."}),Object(j.jsx)("span",{className:"welcome-screen-message",children:"luxury."})]})})}),Object(j.jsx)("div",{className:"main",children:Object(j.jsxs)("div",{className:"main-container",children:[Object(j.jsx)("div",{className:"featured-image",children:Object(j.jsx)("img",{src:m,alt:"close up of a diamond"})}),Object(j.jsxs)("div",{className:"main-message",children:["A diamond is made up of just one kind of atom, many times over: carbon. Its complete chemical formula is exquisitely simple: C. Yet, as a matter of chemical fact, the same carbon atoms, differently arranged, yield not a sparkling diamond, but gray pencil lead.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"The diamond is in the details."]}),Object(j.jsx)("div",{className:"carousel-container",children:Object(j.jsxs)(v.Carousel,{infiniteLoop:!0,autoPlay:!0,showArrows:!1,showThumbs:!1,showStatus:!1,children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:O,alt:"Slide"})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:x,alt:"Slide"})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:p,alt:"Slide"})})]})}),Object(j.jsxs)("div",{className:"shop-button-container",children:[Object(j.jsx)("img",{src:h,alt:"close up of a diamond"}),Object(j.jsx)("div",{className:"shop-button-overlay",children:Object(j.jsx)(l.b,{to:"/shop",children:Object(j.jsx)("button",{children:"shop now"})})})]})]})})]})}),g=c(12),N=c.n(g),y=c(16),w=function(e){var t=e.data;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t.mainImage,alt:t.title,onMouseEnter:function(e){return e.currentTarget.src=t.hoverImage},onMouseLeave:function(e){return e.currentTarget.src=t.mainImage}}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("div",{className:"designer",children:t.designer}),Object(j.jsx)("div",{className:"title",children:t.title}),Object(j.jsx)("div",{className:"price",children:"$".concat(t.price)})]})]})},S=(c(51),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(){var t,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/products");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{className:"shop",children:c.map((function(e){var t={mainImage:e.image1,hoverImage:e.image4,designer:e.designer.toLowerCase(),title:e.title.toLowerCase(),price:e.price};return Object(j.jsx)(l.b,{to:"/shop/".concat(e.id),children:Object(j.jsx)(w,{data:t})},e.id)}))})}),k=(c(52),c.p+"static/media/logo.4723c0b1.png"),C=function(){return Object(j.jsx)("div",{className:"about",children:Object(j.jsxs)("div",{className:"about-container",children:[Object(j.jsxs)("div",{className:"about-message",children:["There was a time when Andy Warhol would carry priceless diamonds in his breast pocket - close to him but invisible, just for the hell\xa0and thrill of it. That is the power and lure of jewellery. We want you to feel that exhilarating thrill Warhol felt. We want you to feel that endlessly.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),'Endless, which represents the unlimited statements of jewelry, is an independent American luxury company. All the pieces are handmade in Italy and inspired by "childhood obsessions," and "heritage as a fantasy."']}),Object(j.jsx)("img",{src:k,alt:"endless logo"})]})})},q=c(30),T=(c(53),function(e){var t=e.match,c=e.cart,n=e.setCart,a=Object(s.useState)({}),i=Object(o.a)(a,2),d=i[0],u=i[1],b=function(e){var t=document.querySelector(".add-to-bag-btn"),c=t.textContent;t.textContent=e,setTimeout((function(){return t.textContent=c}),1e3)};return Object(s.useEffect)((function(){var e=function(){var e=Object(y.a)(N.a.mark((function e(){var c,s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/products/".concat(t.params.product));case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,Object.entries(s).forEach((function(e){e[0].includes("image")||"string"!==typeof e[1]||(s[e[0]]=e[1].toLowerCase())})),u(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{className:"product-page",children:Object(j.jsxs)("div",{className:"product-container",children:[Object(j.jsx)("div",{className:"carousel-container",children:Object(j.jsxs)(v.Carousel,{infiniteLoop:!0,showArrows:!0,showThumbs:!0,showIndicators:!1,showStatus:!1,children:[Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:d.image1,alt:"Slide"})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:d.image2,alt:"Slide"})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:d.image3,alt:"Slide"})}),Object(j.jsx)("div",{className:"image",children:Object(j.jsx)("img",{src:d.image4,alt:"Slide"})})]})}),Object(j.jsxs)("div",{className:"product-info",children:[Object(j.jsx)("div",{className:"product-designer",children:d.designer}),Object(j.jsx)("div",{className:"product-title",children:d.title}),Object(j.jsx)("div",{className:"product-price",children:"$".concat(d.price)}),Object(j.jsxs)("div",{className:"product-colour",children:[Object(j.jsxs)("div",{className:"product-colour-text",children:[Object(j.jsx)("span",{className:"key",children:"colour: "}),Object(j.jsx)("span",{className:"value",children:d.colour})]}),Object(j.jsxs)("div",{className:"qty",children:[Object(j.jsx)("button",{onClick:function(){if(document.querySelector("input").value!==document.querySelector("input").min){var e=parseInt(document.querySelector("input").value)-1;document.querySelector("input").value=e.toString()}},children:"-"}),Object(j.jsx)("input",{type:"number",min:"1",max:"100",defaultValue:"1"}),Object(j.jsx)("button",{onClick:function(){var e=parseInt(document.querySelector("input").value)+1;document.querySelector("input").value=e.toString()},children:"+"})]})]}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("button",{className:"add-to-bag-btn",onClick:function(){if(c.some((function(e){return e.id===d.id})))b("already in cart");else{var e=Object(r.a)(Object(r.a)({},d),{},{quantity:document.querySelector("input").value});n((function(t){return[].concat(Object(q.a)(t),[e])})),b("added to cart")}},children:"add to cart"}),Object(j.jsx)(l.b,{to:"/shop",children:Object(j.jsx)("button",{children:"keep shopping"})})]}),Object(j.jsxs)("div",{className:"product-description",children:[Object(j.jsx)("span",{className:"key",children:"notes: "}),Object(j.jsx)("span",{className:"value",children:d.description})]})]})]})})}),I=(c(54),function(e){var t=e.cart,c=e.setCart,n=Object(s.useState)(0),a=Object(o.a)(n,2),i=a[0],r=a[1],l=Object(s.useState)(0),d=Object(o.a)(l,2),u=d[0],b=(d[1],Object(s.useState)(0)),m=Object(o.a)(b,2),h=m[0],O=m[1];return Object(s.useEffect)((function(){var e=t.reduce((function(e,t){return e+parseInt(t.price.replace(/,/g,""))*parseInt(t.quantity)}),0);r(e),O(e+u)}),[t]),Object(j.jsx)("div",{className:"cart",children:Object(j.jsxs)("div",{className:"cart-container",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("div",{className:"header-title",children:"cart"}),Object(j.jsxs)("div",{className:"header-qty",children:[t.length," ",1!==t.length?"items":"item"]}),Object(j.jsx)("hr",{}),t.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.image1,alt:""}),Object(j.jsxs)("div",{className:"cart-info",children:[Object(j.jsx)("div",{className:"designer",children:e.designer}),Object(j.jsx)("div",{className:"title",children:e.title}),Object(j.jsx)("div",{className:"colour",children:"colour: ".concat(e.colour)}),Object(j.jsx)("div",{className:"qty",children:" qty: ".concat(e.quantity)}),Object(j.jsx)("div",{className:"price",children:"$".concat(e.price)}),Object(j.jsx)("button",{onClick:function(){!function(e){var s=t.filter((function(t){return t.id!==e.id}));c(s)}(e)},children:"remove"})]})]}),Object(j.jsx)("hr",{})]})}))]}),Object(j.jsxs)("div",{className:"review",children:[Object(j.jsx)("div",{className:"summary",children:"order summary"}),Object(j.jsxs)("div",{className:"subtotal",children:["item sub-total",Object(j.jsx)("span",{children:"$".concat(i.toLocaleString())})]}),Object(j.jsxs)("div",{className:"shipping",children:["shipping",Object(j.jsx)("span",{children:"free"})]}),Object(j.jsxs)("div",{className:"total",children:["total (usd)",Object(j.jsx)("span",{children:"$".concat(h.toLocaleString())})]}),Object(j.jsx)("button",{onClick:function(){alert("This is the end of my shopping cart project. Thanks for checking it out!")},children:"proceed to checkout"})]})]})})}),E=c.p+"static/media/film-burns.4445041c.mp4",L=(c(55),function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(u,{cartQty:c.length}),Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/shopping-cart",exact:!0,component:f}),Object(j.jsx)(d.a,{path:"/about",component:C}),Object(j.jsx)(d.a,{path:"/shop",exact:!0,component:S}),Object(j.jsx)(d.a,{path:"/shop/:product",render:function(e){return Object(j.jsx)(T,Object(r.a)(Object(r.a)({},e),{},{cart:c,setCart:n}))}}),Object(j.jsx)(d.a,{path:"/cart",render:function(e){return Object(j.jsx)(I,Object(r.a)(Object(r.a)({},e),{},{cart:c,setCart:n}))}})]}),Object(j.jsx)(b,{}),Object(j.jsx)("video",{className:"videoTag",autoPlay:!0,loop:!0,muted:!0,children:Object(j.jsx)("source",{src:E,type:"video/mp4"})})]})});i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.52b86989.chunk.js.map