"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{7339:function(e,s,a){a.d(s,{d9:function(){return g},ZP:function(){return N}});var r=a(4051),n=a.n(r),c=a(5893),i=a(7294),t=(a(9669),a(6455)),o=a.n(t),l=a(7630),d=a.n(l),m=(a(976),a(9155)),h=a.n(m);function u(e,s,a,r,n,c,i){try{var t=e[c](i),o=t.value}catch(l){return void a(l)}t.done?s(o):Promise.resolve(o).then(r,n)}var x=function(){var e,s=(e=n().mark((function e(s){var a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/contact",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Accept:"application/json "}});case 3:return a=e.sent,e.abrupt("return",a.status);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),g(),e.abrupt("return","Error");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var s=this,a=arguments;return new Promise((function(r,n){var c=e.apply(s,a);function i(e){u(c,r,n,i,t,"next",e)}function t(e){u(c,r,n,i,t,"throw",e)}i(void 0)}))});return function(e){return s.apply(this,arguments)}}();function v(e,s,a,r,n,c,i){try{var t=e[c](i),o=t.value}catch(l){return void a(l)}t.done?s(o):Promise.resolve(o).then(r,n)}function j(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}var p=d()(o()),g=function(){p.fire({title:"Something Went Wrong",text:"Please Try After Some Time",icon:"error",timer:2e3,timerProgressBar:!0,showConfirmButton:!1})},f={name:"",email:"",number:"",subject:"",text:""},N=function(){var e=(0,i.useState)(f),s=e[0],a=e[1],r=(0,i.useState)(!1),t=r[0],o=r[1],l=function(e){var s=e.target,r=s.name,n=s.value;a((function(e){return function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(s){j(e,s,a[s])}))}return e}({},e,j({},r,n))}))},d=function(){var e,r=(e=n().mark((function e(r){var c;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=s.email,c=n?/\S+@\S+\.\S+/.test(n)?"":"Ooops! We need a valid email address.":"Email can't be empty.",!(s.number.length<10)){e.next=4;break}return e.abrupt("return",p.fire({title:"Please Enter a Vaild Number",text:"Make You Enter a Valid Number  ",icon:"warning",timer:3e3,timerProgressBar:!0,showConfirmButton:!1}));case 4:if(!c){e.next=6;break}return e.abrupt("return",p.fire({title:"Invalid Email",text:c,icon:"warning",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}));case 6:return o(!0),e.next=9,x(s);case 9:200===e.sent?(p.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),a(f)):g(),o(!1);case 12:case"end":return e.stop()}var n}),e)})),function(){var s=this,a=arguments;return new Promise((function(r,n){var c=e.apply(s,a);function i(e){v(c,r,n,i,t,"next",e)}function t(e){v(c,r,n,i,t,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{className:"talk-area ptb-100",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row align-items-center",children:[(0,c.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,c.jsx)("div",{className:"talk-image",children:(0,c.jsx)("img",{src:"/images/talk/talk.png",alt:"image"})})}),(0,c.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,c.jsxs)("div",{className:"talk-content margin-zero",children:[(0,c.jsx)("span",{children:"LET'S TALK"}),(0,c.jsx)("h3",{children:"We Would Like To Hear From You Anytime"}),(0,c.jsx)("div",{className:"contact-from",children:(0,c.jsx)("form",{onSubmit:d,children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Your name",value:s.name,onChange:l,required:!0})})}),(0,c.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Your email address",value:s.email,onChange:l,required:!0})})}),(0,c.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("input",{type:"text",name:"subject",className:"form-control",placeholder:"Your Subject",value:s.subject,onChange:l,required:!0})})}),(0,c.jsx)("div",{className:"col-lg-6 col-md-6 col-sm-6",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("input",{type:"tel",name:"number",className:"form-control",value:s.number,onChange:l,placeholder:"Your Phone",maxLength:10,required:!0})})}),(0,c.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("textarea",{name:"text",cols:"30",rows:"6",className:"form-control",placeholder:"Your message...",value:s.text,onChange:l,required:!0})})}),(0,c.jsx)("div",{className:"col-lg-12 col-md-12 col-sm-12",children:(0,c.jsxs)("button",{type:"submit",className:"default-btn",children:["Send Message",(0,c.jsx)("span",{}),t&&(0,c.jsx)("div",{className:h().spinner})]})})]})})})]})})]})})})})}},5371:function(e,s,a){var r=a(5893),n=(a(7294),a(1664)),c=a.n(n);s.Z=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"choose-area pt-100 pb-75",children:[(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"section-title",children:[(0,r.jsx)("span",{children:"KEY FEATURES"}),(0,r.jsxs)("h2",{children:["We Help You To ",(0,r.jsx)("b",{children:"Increase"})," Your Sale Through Solutions"]}),(0,r.jsx)("p",{children:"We are leading technology solutions providing company all over the world."})]}),(0,r.jsxs)("div",{className:"row justify-content-center",children:[(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"single-choose-card","data-aos":"fade-up","data-aos-delay":"50","data-aos-duration":"600","data-aos-once":"true",children:[(0,r.jsx)("div",{className:"choose-image",children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/choose/choose-1.png",alt:"image"})})})}),(0,r.jsxs)("div",{className:"choose-content",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:"Data and Analytics"})})}),(0,r.jsx)("p",{children:"The app can provide valuable data and insights for better decision-making and long-term planning."})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"single-choose-card","data-aos":"fade-up","data-aos-delay":"60","data-aos-duration":"800","data-aos-once":"true",children:[(0,r.jsx)("div",{className:"choose-image",children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/choose/choose-2.png",alt:"image"})})})}),(0,r.jsxs)("div",{className:"choose-content",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:"Visitor Management"})})}),(0,r.jsx)("p",{children:"Guest registration and tracking for enhanced security. Access control features for visitors and service personnel"})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"single-choose-card","data-aos":"fade-up","data-aos-delay":"70","data-aos-duration":"1000","data-aos-once":"true",children:[(0,r.jsx)("div",{className:"choose-image",children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/choose/choose-3.png",alt:"image"})})})}),(0,r.jsxs)("div",{className:"choose-content",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:"Security"})})}),(0,r.jsx)("p",{children:"Secure login and data encryption for privacy and data protection."})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,r.jsxs)("div",{className:"single-choose-card","data-aos":"fade-up","data-aos-delay":"80","data-aos-duration":"1200","data-aos-once":"true",children:[(0,r.jsx)("div",{className:"choose-image",children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{src:"/images/choose/choose-4.png",alt:"image"})})})}),(0,r.jsxs)("div",{className:"choose-content",children:[(0,r.jsx)("h3",{children:(0,r.jsx)(c(),{href:"/services/service-details",children:(0,r.jsx)("a",{children:"Green Initiatives"})})}),(0,r.jsx)("p",{children:"Paperless communication and transactions to reduce environmental impact."})]})]})})]})]}),(0,r.jsx)("div",{className:"choose-shape-1",children:(0,r.jsx)("img",{src:"/images/choose/choose-shape.png",alt:"image"})}),(0,r.jsx)("div",{className:"choose-shape-2",children:(0,r.jsx)("img",{src:"/images/choose/choose-shape-2.png",alt:"image"})})]})})}}}]);