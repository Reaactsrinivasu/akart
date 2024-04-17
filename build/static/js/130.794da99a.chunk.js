"use strict";(self.webpackChunkakart=self.webpackChunkakart||[]).push([[130],{6442:(e,o,a)=>{a.d(o,{A:()=>c});var n=a(7154);const t=500;var s=a(1036);const r="get",i="post",l="put",d="delete";const c=class{constructor(){this.isLoggedIn=!1,this.userData={},this.userToken=null,this.baseURL="http://64.227.181.53:3000/"}get(e,o){return new Promise(((a,n)=>{this.api(r,e,o).then((e=>{a(e)})).catch((e=>{console.log(e)}))}))}post(e,o){return new Promise(((a,n)=>{this.api(i,e,o).then((e=>{a(e)})).catch((e=>{}))}))}put(e,o){return new Promise(((a,n)=>{this.api(l,e,o).then((e=>{a(e)})).catch((e=>{}))}))}delete(e,o){return new Promise(((a,n)=>{this.api(d,e,o).then((e=>{a(e)})).catch((e=>{console.log(e)}))}))}api(e,o,a){return new Promise(((r,i)=>{let l={};l.method=e,l.url=this.baseURL+o,l.headers=this.setHeaders(a),console.log("axiosConfig.headers",l.headers),a&&a&&(l.data=a),(0,n.A)(l).then((e=>{var o;e&&e.status===t?s.oR.error("Something went wrong!!"):(r(e),e&&(console.log("response",e),s.oR.success(null===(o=e.data)||void 0===o?void 0:o.messages)))})).catch((e=>{var o,a;let n=null===e||void 0===e?void 0:e.response,t=null===e||void 0===e?void 0:e.response.data;console.log("ERROR",e),null!==(o=e.response.data)&&void 0!==o&&o.email&&e.response.data.email.length>0?s.oR.error("Email ".concat(e.response.data.email[0])):null!==(a=e.response.data)&&void 0!==a&&a.phone_number&&e.response.data.phone_number.length>0?s.oR.error("Mobile Number ".concat(e.response.data.phone_number[0])):e.response.data.message&&e.response.data.message.length>0?s.oR.error("".concat(e.response.data.message)):401===(null===n||void 0===n?void 0:n.status)?s.oR.error("".concat(t.errors)):422===(null===n||void 0===n?void 0:n.status)?s.oR.error("".concat(e.response.data.errors)):s.oR.error("An error occurred")}))}))}setHeaders(e){let o={"accept-language":"en","Content-Type":"application/json",Accept:"application/json"};if(o.Authorization=localStorage.getItem("token"),e&&(e.isMultipart&&(o["Content-Type"]="multipart/form-data"),e.headers))for(var a in e.headers)e.headers.hasOwnProperty(a)&&(o[a]=e.headers[a]);return o}}},6130:(e,o,a)=>{a.r(o),a.d(o,{default:()=>E});var n=a(5043),t=a(6446),s=a(5376),r=a(1147),i=a(3216),l=a(4975),d=(a(4014),a(5084),a(3874),a(2462),a(5225)),c=a(6870),p=a(6442);const h=new p.A,x=(e,o)=>function(e){e({type:c.zc}),(async()=>new Promise((async(e,o)=>{try{console.log("Requesting carousel...");const o=await h.get("".concat("contents","?title=").concat("home_carousel_data"));console.log("carouseldata loaded:",o),e(o.data)}catch(a){console.error("Error in loadAllExpertsApi:",a),o(a)}})))().then((o=>{console.log("res",o),e((e=>{const o={type:c.mQ,payload:e};return console.log("data:",e),o})(o))})).catch((o=>e((e=>({type:c.x_,payload:e}))(o.message))))};var g=a(9456),u=a(579);const m=()=>{const e=(0,g.wA)();(0,n.useEffect)((()=>{e(x())}),[e]);const o=(0,g.d4)((e=>e.homecarouseldata.data));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.RC,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:[d.Ij,d.Vx],className:"mySwiper1",children:null===o||void 0===o?void 0:o.data.map(((e,o)=>(0,u.jsx)(l.qr,{style:{height:"30rem"},children:(0,u.jsx)("img",{src:e.content_image_id[0],loading:"lazy",alt:"1",style:{width:"100%",height:"100%"}})},o)))})})};var y=a(170);const A=new p.A,j=(e,o)=>function(e){e({type:c.eu}),(async e=>new Promise((async(e,o)=>{try{console.log("Requesting carousel...");const o=await A.get("".concat("contents","?title=").concat("home_grandglobal_data"));console.log("grandGlobal data  loaded:",o),e(o)}catch(a){console.error("Error in loadAllExpertsApi:",a),o(a)}})))().then((o=>{console.log(o),e((e=>{const o={type:c.TU,payload:e};return console.log("data:",e),o})(o))})).catch((o=>e((e=>({type:c.UA,payload:e}))(o.message))))},v=()=>{const e=(0,g.wA)();(0,n.useEffect)((()=>{e(j())}),[e]);const o=(0,g.d4)((e=>{var o;return null===(o=e.homegrandglobaldata)||void 0===o?void 0:o.data})),a=null===o||void 0===o?void 0:o.data;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(y.A.ReusableBox,{sx:{mt:1,backgroundColor:"#f3f6f999",width:"100%",height:"auto",padding:"30px",marginBottom:"1px"},children:[(0,u.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:3,fontWeight:500,color:"#222"},children:"GRAND GLOBAL BRANDS"}),(0,u.jsx)(y.A.ReusableGrid,{container:!0,children:(0,u.jsx)(l.RC,{spaceBetween:10,slidesPerView:4,breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}},autoplay:!0,loop:!0,navigation:!0,modules:[d.Vx,d.Ij],className:"mySwiper3",style:{"--swiper-navigation-size":"10px"},children:a&&(null===a||void 0===a?void 0:a.data.map(((e,o)=>(0,u.jsx)(l.qr,{children:(0,u.jsx)(y.A.ReusableBox,{sx:{margin:"2px",backgroundColor:"#FFFFFF",borderRadius:"8px",marginBottom:"50px",border:"1px solid #9e9e9e",transition:"box-shadow 0.3s","&:hover":{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"}},children:(0,u.jsxs)(y.A.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"30px"},children:[(0,u.jsx)("img",{src:null===e||void 0===e?void 0:e.content_image_id[0],alt:"",width:"70%",height:"70%",loading:"lazy"}),(0,u.jsx)(y.A.ReusableTypography,{variant:"h6",sx:{fontWeight:500},children:e.description}),(0,u.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{fontWeight:"bold"},children:e.discount})]})})},o))))})})]})})};var b=a(8903),w=a(5865);const f=new p.A,R=(e,o)=>function(e){e({type:c.LI}),(async e=>new Promise((async(e,o)=>{try{console.log("Requesting carousel...");const o=await f.get("".concat("contents","?title=").concat("home_shopbycategory_data"));console.log("ShopByCategory data  loaded:",o),e(o)}catch(a){console.error("Error in ShopByCategory api:",a),o(a)}})))().then((o=>{console.log(o),e((e=>{const o={type:c.q2,payload:e};return console.log("data:",e),o})(o))})).catch((o=>e((e=>({type:c.B6,payload:e}))(o.message))))},F=()=>{const e=(0,g.wA)();(0,n.useEffect)((()=>{e(R())}),[]);const o=(0,g.d4)((e=>{var o,a;return null===e||void 0===e||null===(o=e.homeshopbycategorydata)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.data}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(y.A.ReusableBox,{children:(0,u.jsxs)(b.Ay,{container:!0,spacing:2,p:0,children:[[0,1].map((e=>(0,u.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,u.jsx)(b.Ay,{container:!0,children:(0,u.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,u.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",padding:1},children:[(0,u.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"SHOP BY CATEGORY"}),(0,u.jsx)(b.Ay,{container:!0,spacing:1,p:1,children:null===o||void 0===o?void 0:o.data.slice(4*e,4*e+4).map(((e,o)=>(0,u.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,u.jsxs)(t.A,{sx:{padding:"10px",border:"1px solid",borderColor:"divider",borderRadius:"5px",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)(t.A,{component:"img",src:e.content_image_id[0],height:"100%",width:"100%",loading:"lazy",alt:"1",sx:{cursor:"pointer",transition:"transform 0.3s ease",transform:"scale(0.96)","&:hover":{transform:"scale(0.99)"}}}),(0,u.jsx)(w.A,{sx:{color:"green"},children:e.description}),(0,u.jsx)(w.A,{sx:{fontWeight:"bold"},children:e.discount})]})},o)))})]})})})},e))),(0,u.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,u.jsx)(b.Ay,{container:!0,children:(0,u.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,u.jsx)(t.A,{component:"img",src:"assets/imgs/shopBycatImg.jpg",alt:"1",sx:{width:"100%",height:"87.5%"}})})})})]})})})},B=new p.A,C=(e,o)=>function(e){e({type:c.b5}),(async e=>new Promise((async(e,o)=>{try{console.log("Requesting carousel...");const o=await B.get("".concat("contents","?title=").concat("home_discountcards_data"));console.log("DiscountCardsData data  loaded:",o),e(o)}catch(a){console.error("Error in DiscountCardsData api:",a),o(a)}})))().then((o=>{console.log("res",o),e((e=>{const o={type:c.kU,payload:e};return console.log("data:",e),o})(o))})).catch((o=>e((e=>({type:c.xv,payload:e}))(o.message))))},P=()=>{const e=(0,g.wA)();(0,n.useEffect)((()=>{e(C())}),[e]);const o=(0,g.d4)((e=>{var o,a;return null===(o=e.homediscountcardsdata)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.data}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(y.A.ReusableBox,{children:(0,u.jsx)(b.Ay,{container:!0,spacing:2,p:0,children:[0,1,2].map((e=>(0,u.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,u.jsx)(b.Ay,{container:!0,children:(0,u.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,u.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #9e9e9e",padding:1},children:[(0,u.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Up to 60% off"}),(0,u.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[null===o||void 0===o?void 0:o.data.slice(4*e,4*e+4).map(((e,o)=>(0,u.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,u.jsx)(t.A,{component:"img",src:e.content_image_id[0],height:"75%",width:"75%",alt:"",sx:{}})},o))),(0,u.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Sukkhi Adorable Gold Plated Pearl Choker Necklace Set for Women"}),(0,u.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,marginLeft:"-5px",color:"#FFA500"},children:"Explore more"})]})]})})})})))})})})},_=new p.A,k=(e,o)=>function(e){e({type:c.PI}),(async e=>new Promise((async(e,o)=>{try{console.log("Requesting TodayDeals...");const o=await _.get("".concat("contents","?title=").concat("home_todaydeals_data"));console.log("TodayDeals data  loaded:",o),e(o)}catch(a){console.error("Error in TodayDeals api:",a),o(a)}})))().then((o=>{console.log("res",o),e((e=>{const o={type:c.Ss,payload:e};return console.log("data:",e),o})(o))})).catch((o=>e((e=>({type:c.Vc,payload:e}))(o.message))))},T=()=>{const e=(0,g.wA)();(0,n.useEffect)((()=>{e(k())}),[e]);const o=(0,g.d4)((e=>{var o,a;return null===(o=e.hometodaydealsdata)||void 0===o||null===(a=o.data)||void 0===a?void 0:a.data}));return console.log("homeTodayDealsData",o),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(y.A.ReusableBox,{sx:{mt:1,backgroundColor:"#f3f6f999",width:"100%",height:"auto",padding:"30px",marginBottom:"1px"},children:[(0,u.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:3,fontWeight:500,color:"#222"},children:"TODAY DEALS"}),(0,u.jsx)(y.A.ReusableGrid,{container:!0,children:(0,u.jsx)(l.RC,{spaceBetween:10,slidesPerView:4,breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}},autoplay:!0,loop:!0,navigation:!0,modules:[d.Vx,d.Ij],className:"mySwiper3",style:{"--swiper-navigation-size":"10px"},children:null===o||void 0===o?void 0:o.data.map(((e,o)=>(0,u.jsx)(l.qr,{children:(0,u.jsxs)(y.A.ReusableBox,{sx:{margin:"2px",backgroundColor:"#FFFFFF",borderRadius:"8px",marginBottom:"50px",border:"1px solid #9e9e9e",transition:"box-shadow 0.3s","&:hover":{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"}},children:[(0,u.jsx)(y.A.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"30px",paddingTop:"10px"},children:(0,u.jsx)("img",{src:null===e||void 0===e?void 0:e.content_image_id[0],alt:"",width:"50%",height:"50%",loading:"lazy"})}),(0,u.jsxs)(y.A.Box,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:"20px"},children:[(0,u.jsx)(y.A.Button,{variant:"contained",sx:{height:"25px",color:"#FFFCFC",bgcolor:"#FFA500",borderColor:"#2C7E34",textDecoration:"none",textTransform:"none",borderRadius:"6px",fontSize:"12px",whiteSpace:"nowrap","&:hover":{bgcolor:"#FFA500"}},children:e.discount}),(0,u.jsx)(y.A.ReusableTypography,{component:"span",sx:{color:"#FFA500"},children:e.data})]}),(0,u.jsx)(y.A.Box,{sx:{display:"flex",justifyContent:"left"},children:(0,u.jsx)(y.A.ReusableTypography,{variant:"body1",sx:{fontWeight:"bold",padding:2,marginLeft:"5px"},children:e.description})})]})},o)))})})]})})},D=(new p.A,()=>{(0,g.wA)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(y.A.ReusableBox,{children:(0,u.jsx)(b.Ay,{container:!0,spacing:2,p:0})})})}),E=()=>{(0,i.Zp)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(r.A,{children:[(0,u.jsx)(s.Ay,{}),(0,u.jsx)(t.A,{children:(0,u.jsxs)(t.A,{component:"main",sx:{padding:"5px"},children:[(0,u.jsx)(m,{}),(0,u.jsx)(v,{}),(0,u.jsx)(F,{}),(0,u.jsx)(P,{}),(0,u.jsx)(T,{}),(0,u.jsx)(D,{})]})})]})})}},2462:()=>{}}]);
//# sourceMappingURL=130.794da99a.chunk.js.map