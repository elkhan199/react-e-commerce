(this["webpackJsonpreact-e-commerce"]=this["webpackJsonpreact-e-commerce"]||[]).push([[0],{48:function(e,t,n){e.exports=n(86)},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},61:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(29),i=n.n(c),l=(n(53),n(10)),o=n.n(l),s=n(4),m=n(16),u=n(23),p=n(24),d=n(26),b=n(25),h=(n(55),n(17)),g=n(6),f=(n(56),Object(g.g)((function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"".concat(a," menu-item"),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),v=(n(61),n(5)),E=n(3),y=Object(E.a)([function(e){return e.directory}],(function(e){return e.sections})),O=Object(E.b)({sections:y}),k=Object(v.b)(O)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return r.a.createElement(f,Object.assign({key:t},n))})))})),j=(n(63),n(11)),w=n(12);function N(){var e=Object(j.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 80px;\n"]);return N=function(){return e},e}var C=w.b.div(N()),x=function(){return r.a.createElement(C,null,r.a.createElement(k,null))},U=(n(65),n(66),{TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"}),I=function(){return{type:U.TOGGLE_CART_HIDDEN}},T=function(e){return{type:U.ADD_ITEM,payload:e}};function S(){var e=Object(j.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    ","\n\n"]);return S=function(){return e},e}function R(){var e=Object(j.a)(["\n    background-color: #4285f4;\n    color: white;\n    &:hover {\n    background-color: #357ae8;\n    border: none;\n    }\n"]);return R=function(){return e},e}function A(){var e=Object(j.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n    }\n"]);return A=function(){return e},e}function M(){var e=Object(j.a)(["\n    background-color: black;\n    color: white;\n    border: none;\n    \n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n        }\n"]);return M=function(){return e},e}var P=Object(w.a)(M()),B=Object(w.a)(A()),D=Object(w.a)(R()),_=w.b.button(S(),(function(e){return e.isGoogleSignIn?D:e.inverted?B:P})),G=function(e){var t=e.children,n=Object(h.a)(e,["children"]);return r.a.createElement(_,n,t)},W=Object(v.b)(null,(function(e){return{addItem:function(t){return e(T(t))}}}))((function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},c)),r.a.createElement(G,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))})),L=function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))},H=(n(67),Object(E.a)([function(e){return e.shop}],(function(e){return e.collections}))),J=Object(E.a)([H],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),q=Object(E.b)({collections:J}),z=Object(v.b)(q)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,n=Object(h.a)(e,["id"]);return r.a.createElement(L,Object.assign({key:t},n))})))})),F=(n(68),Object(v.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(E.a)([H],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,a=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},n),r.a.createElement("div",{className:"items"},a.map((function(e){return r.a.createElement(W,{key:a.id,item:e})}))))}))),V=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(g.b,{exact:!0,path:"".concat(t.path),component:z}),r.a.createElement(g.b,{path:"".concat(t.path,"/:collectionId"),component:F}))},K=n(15);function Y(){var e=Object(j.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return Y=function(){return e},e}function Q(){var e=Object(j.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Q=function(){return e},e}function Z(){var e=Object(j.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return Z=function(){return e},e}function X(){var e=Object(j.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]);return X=function(){return e},e}var $=w.b.div(X()),ee=Object(w.b)(K.b)(Z()),te=w.b.div(Q()),ne=Object(w.b)(K.b)(Y());function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ce=r.a.createElement("title",null,"Group"),ie=r.a.createElement("desc",null,"Created with Sketch."),le=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),oe=function(e){var t=e.svgRef,n=e.title,a=re(e,["svgRef","title"]);return r.a.createElement("svg",ae({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},a),void 0===n?ce:n?r.a.createElement("title",null,n):null,ie,le)},se=r.a.forwardRef((function(e,t){return r.a.createElement(oe,ae({svgRef:t},e))})),me=(n.p,n(27)),ue=n.n(me),pe=(n(69),n(72),function(){var e=Object(m.a)(o.a.mark((function e(t,n){var a,r,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=be.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(s.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());ue.a.initializeApp({apiKey:"AIzaSyA_0Jhma16KZgM703meNz9uNhy56uDWWWM",authDomain:"ecommerce-react-data.firebaseapp.com",databaseURL:"https://ecommerce-react-data.firebaseio.com",projectId:"ecommerce-react-data",storageBucket:"ecommerce-react-data.appspot.com",messagingSenderId:"189704469507",appId:"1:189704469507:web:de7a1847b393be16d66236",measurementId:"G-FYRG8KWY1J"});var de=ue.a.auth(),be=ue.a.firestore(),he=new ue.a.auth.GoogleAuthProvider;he.setCustomParameters({prompt:"select_account"});var ge=function(){return de.signInWithPopup(he)};ue.a;function fe(){return(fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ee=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),je=r.a.createElement("g",null),we=r.a.createElement("g",null),Ne=r.a.createElement("g",null),Ce=r.a.createElement("g",null),xe=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Te=r.a.createElement("g",null),Se=r.a.createElement("g",null),Re=r.a.createElement("g",null),Ae=r.a.createElement("g",null),Me=function(e){var t=e.svgRef,n=e.title,a=ve(e,["svgRef","title"]);return r.a.createElement("svg",fe({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},a),n?r.a.createElement("title",null,n):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ee,ye,Oe,ke,je,we,Ne,Ce,xe,Ue,Ie,Te,Se,Re,Ae)},Pe=r.a.forwardRef((function(e,t){return r.a.createElement(Me,fe({svgRef:t},e))})),Be=(n.p,n(74),function(e){return e.cart}),De=Object(E.a)([Be],(function(e){return e.cartItems})),_e=Object(E.a)([Be],(function(e){return e.hidden})),Ge=Object(E.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),We=Object(E.a)([De],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),Le=Object(E.b)({itemCount:Ge}),He=Object(v.b)(Le,(function(e){return{toggleCartHidden:function(){return e(I())}}}))((function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Pe,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))})),Je=(n(75),n(76),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",a)))}),qe=Object(E.b)({cartItems:De}),ze=Object(g.g)(Object(v.b)(qe)((function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(Je,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(G,{onClick:function(){n.push("/react-e-commerce/checkout"),a(I())}},"GO TO CHECKOUT"))}))),Fe=Object(E.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ve=Object(E.b)({currentUser:Fe,hidden:_e}),Ke=Object(v.b)(Ve)((function(e){var t=e.currentUser,n=e.hidden;return r.a.createElement($,null,r.a.createElement(ee,{to:"/react-e-commerce/"},r.a.createElement(se,{className:"logo"})),r.a.createElement(te,null,r.a.createElement(ne,{to:"/react-e-commerce/shop"},"SHOP"),r.a.createElement(ne,{to:"/react-e-commerce/contact"},"CONTACT"),t?r.a.createElement(ne,{as:"div",onClick:function(){return de.signOut()}},"SIGN OUT"):r.a.createElement(ne,{to:"/react-e-commerce/signin"},"SIGN IN"),r.a.createElement(He,null)),n?null:r.a.createElement(ze,null))})),Ye=(n(77),n(22)),Qe=(n(78),n(79),function(e){var t=e.handleChange,n=e.label,a=Object(h.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),Ze=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=function(){var e=Object(m.a)(o.a.mark((function e(t){var n,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,de.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(Ye.a)({},r,n))},a.state={email:"",password:""},a}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Qe,{name:"email",type:"email",value:this.state.email,handleChange:this.handleChange,label:"email",required:!0}),r.a.createElement(Qe,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(G,{type:"submit"},"Sign In"),r.a.createElement(G,{onClick:ge,isGoogleSignIn:!0}," ","Sign in with Google"," "))))}}]),n}(r.a.Component),Xe=(n(80),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(o.a.mark((function t(n){var a,r,c,i,l,s,m;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){t.next=5;break}return alert("'Passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,de.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,m=s.user,t.next=12,pe(m,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(Ye.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Qe,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(Qe,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Qe,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(Qe,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(G,{type:"submit"},"Sign UP")))}}]),n}(r.a.Component)),$e=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Ze,null),r.a.createElement(Xe,null))},et="SET_CURRENT_USER",tt=n(44),nt=n.n(tt),at=function(e){var t=e.price,n=100*t;return r.a.createElement(nt.a,{label:"Pay Now",name:"Clothing",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){alert("Payment Successful")},stripeKey:"pk_test_51H4l4YGvXEvDEvFniGjTU4e62PZVQg5gdRtBFrLZdLIjfrKn5HF8bPlGuJ7sDKxa4DnJZgLtBhstSEvGwGDNm3aE00uYVONnkk"})},rt=(n(81),Object(v.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:U.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(T(t))},removeItem:function(t){return e(function(e){return{type:U.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))}))),ct=(n(82),Object(E.b)({cartItems:De,total:We})),it=Object(v.b)(ct)((function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(rt,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"TOTAL: $",n)),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: any future date - CW: any three digits"),r.a.createElement(at,{price:n}))})),lt=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribeFromAuth=null,e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=de.onAuthStateChanged(function(){var t=Object(m.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=7;break}return t.next=3,pe(n);case 3:t.sent.onSnapshot((function(t){e(Object(s.a)({id:t.id},t.data()))})),t.next=8;break;case 7:e(n);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ke,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/react-e-commerce/",component:x}),r.a.createElement(g.b,{path:"/react-e-commerce/shop",component:V}),r.a.createElement(g.b,{exact:!0,path:"/react-e-commerce/checkout",component:it}),r.a.createElement(g.b,{exact:!0,path:"/react-e-commerce/signin",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/react-e-commerce/"}):r.a.createElement($e,null)}})))}}]),n}(r.a.Component),ot=Object(E.b)({currentUser:Fe}),st=Object(v.b)(ot,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:et,payload:e}}(t))}}}))(lt),mt=n(45),ut=n(14),pt=(n(83),n(30)),dt={currentUser:null},bt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return Object(s.a)(Object(s.a)({},e),{},{currentUser:t.payload});default:return e}},ht=n(47),gt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(ht.a)(e),[Object(s.a)(Object(s.a)({},t),{},{quantity:1})])},ft=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{quantity:e.quantity-1}):e}))},vt={hidden:!0,cartItems:[]},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U.TOGGLE_CART_HIDDEN:return Object(s.a)(Object(s.a)({},e),{},{hidden:!e.hidden});case U.ADD_ITEM:return Object(s.a)(Object(s.a)({},e),{},{cartItems:gt(e.cartItems,t.payload)});case U.CLEAR_ITEM_FROM_CART:return Object(s.a)(Object(s.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case U.REMOVE_ITEM:return Object(s.a)(Object(s.a)({},e),{},{cartItems:ft(e.cartItems,t.payload)});default:return e}},yt=n(46),Ot={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;return t.type,e},jt={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Nt={key:"root",storage:n.n(yt).a,whitelist:["cart"]},Ct=Object(ut.c)({user:bt,cart:Et,directory:kt,shop:wt}),xt=Object(pt.a)(Nt,Ct);var Ut=Object(ut.d)(xt,ut.a.apply(void 0,[])),It=Object(pt.b)(Ut);i.a.render(r.a.createElement(v.a,{store:Ut},r.a.createElement(K.a,null,r.a.createElement(mt.a,{persistor:It},r.a.createElement(st,null)))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a2631e69.chunk.js.map