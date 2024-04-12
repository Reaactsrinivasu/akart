"use strict";(self.webpackChunkakart=self.webpackChunkakart||[]).push([[510],{6442:(e,s,i)=>{i.d(s,{A:()=>c});var o=i(7154);const n=500;var t=i(1036);const a="get",r="post",d="put",l="delete";const c=class{constructor(){this.isLoggedIn=!1,this.userData={},this.userToken=null,this.baseURL="http://64.227.181.53:3000/"}get(e,s){return new Promise(((i,o)=>{this.api(a,e,s).then((e=>{i(e)})).catch((e=>{console.log(e)}))}))}post(e,s){return new Promise(((i,o)=>{this.api(r,e,s).then((e=>{i(e)})).catch((e=>{}))}))}put(e,s){return new Promise(((i,o)=>{this.api(d,e,s).then((e=>{i(e)})).catch((e=>{}))}))}delete(e,s){return new Promise(((i,o)=>{this.api(l,e,s).then((e=>{i(e)})).catch((e=>{console.log(e)}))}))}api(e,s,i){return new Promise(((a,r)=>{let d={};d.method=e,d.url=this.baseURL+s,d.headers=this.setHeaders(i),console.log("axiosConfig.headers",d.headers),i&&i&&(d.data=i),(0,o.A)(d).then((e=>{var s;e&&e.status===n?t.oR.error("Something went wrong!!"):(a(e),e&&(console.log("response",e),t.oR.success(null===(s=e.data)||void 0===s?void 0:s.messages)))})).catch((e=>{var s,i;let o=null===e||void 0===e?void 0:e.response,n=null===e||void 0===e?void 0:e.response.data;console.log("ERROR",e),null!==(s=e.response.data)&&void 0!==s&&s.email&&e.response.data.email.length>0?t.oR.error("Email ".concat(e.response.data.email[0])):null!==(i=e.response.data)&&void 0!==i&&i.phone_number&&e.response.data.phone_number.length>0?t.oR.error("Mobile Number ".concat(e.response.data.phone_number[0])):e.response.data.message&&e.response.data.message.length>0?t.oR.error("".concat(e.response.data.message)):401===(null===o||void 0===o?void 0:o.status)?t.oR.error("".concat(n.errors)):422===(null===o||void 0===o?void 0:o.status)?t.oR.error("".concat(e.response.data.errors)):t.oR.error("An error occurred")}))}))}setHeaders(e){let s={"accept-language":"en","Content-Type":"application/json",Accept:"application/json"};if(s.Authorization=localStorage.getItem("token"),e&&(e.isMultipart&&(s["Content-Type"]="multipart/form-data"),e.headers))for(var i in e.headers)e.headers.hasOwnProperty(i)&&(s[i]=e.headers[i]);return s}}},426:(e,s,i)=>{i.r(s),i.d(s,{default:()=>w});var o=i(5043),n=i(6446),t=i(5376),a=i(1147),r=i(3216),d=i(4975),l=(i(4014),i(5084),i(3874),i(5225)),c=i(6870),x=i(6442);const g=new x.A,p=(e,s)=>function(e){e({type:c.zc}),(async()=>new Promise((async(e,s)=>{try{console.log("Requesting carousel...");const s=await g.get("".concat("contents","?title=").concat("home_carousel_data"));console.log("carouseldata loaded:",s),e(s.data)}catch(i){console.error("Error in loadAllExpertsApi:",i),s(i)}})))().then((s=>{console.log("res",s),e((e=>{const s={type:c.mQ,payload:e};return console.log("data:",e),s})(s))})).catch((s=>e((e=>({type:c.x_,payload:e}))(s.message))))};var h=i(9456),m=i(579);const u=()=>{const e=(0,h.wA)();(0,o.useEffect)((()=>{e(p())}),[e]);const s=(0,h.d4)((e=>e.homecarouseldata.data));return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d.RC,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:[l.Ij,l.Vx],className:"mySwiper1",children:null===s||void 0===s?void 0:s.data.map(((e,s)=>(0,m.jsx)(d.qr,{style:{height:"30rem"},children:(0,m.jsx)("img",{src:e.content_image_id[0],loading:"lazy",alt:"1",style:{width:"100%",height:"100%"}})},s)))})})};var y=i(170);const j=new x.A,f=(e,s)=>function(e){e({type:c.eu}),(async e=>new Promise((async(e,s)=>{try{console.log("Requesting carousel...");const s=await j.get("".concat("contents","?title=").concat("home_grandglobal_data"));console.log("grandGlobal data  loaded:",s),e(s)}catch(i){console.error("Error in loadAllExpertsApi:",i),s(i)}})))().then((s=>{console.log(s),e((e=>{const s={type:c.TU,payload:e};return console.log("data:",e),s})(s))})).catch((s=>e((e=>({type:c.UA,payload:e}))(s.message))))},A=()=>{const e=(0,h.wA)();(0,o.useEffect)((()=>{e(f())}),[e]);const s=(0,h.d4)((e=>{var s;return null===(s=e.homegrandglobaldata)||void 0===s?void 0:s.data})),i=null===s||void 0===s?void 0:s.data;return console.log("homeGrandGlobalData",i),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(y.A.ReusableBox,{sx:{mt:1,backgroundColor:"#f3f6f999",width:"100%",height:"auto",padding:"30px",marginBottom:"1px"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:3,fontWeight:500,color:"#222"},children:"GRAND GLOBAL BRANDS"}),(0,m.jsx)(y.A.ReusableGrid,{container:!0,children:(0,m.jsx)(d.RC,{spaceBetween:10,slidesPerView:4,breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}},autoplay:!0,loop:!0,navigation:!0,modules:[l.Vx,l.Ij],className:"mySwiper3",style:{"--swiper-navigation-size":"10px"},children:i&&(null===i||void 0===i?void 0:i.data.map(((e,s)=>(0,m.jsx)(d.qr,{children:(0,m.jsx)(y.A.ReusableBox,{sx:{margin:"2px",backgroundColor:"#FFFFFF",borderRadius:"8px",marginBottom:"50px",border:"1px solid #9e9e9e",transition:"box-shadow 0.3s","&:hover":{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"}},children:(0,m.jsxs)(y.A.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"30px"},children:[(0,m.jsx)("img",{src:null===e||void 0===e?void 0:e.content_image_id[0],alt:"",width:"70%",height:"70%",loading:"lazy"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h6",sx:{fontWeight:500},children:e.product}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{fontWeight:"bold"},children:e.discount})]})})},s))))})})]})})};var b=i(8903);const F=()=>{const e=()=>(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsx)("img",{src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/q/d/-original-imagfaeknqapmgq5-bb.jpeg?q=70",height:"100%",width:"100%",loading:"lazy",alt:"1",style:{padding:"10px",border:"1px solid #9e9e9e",borderRadius:"5px"}})});return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(y.A.ReusableBox,{children:(0,m.jsxs)(b.Ay,{container:!0,spacing:2,p:0,children:[(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",padding:1},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"SHOP BY CATEGORY"}),(0,m.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[(0,m.jsx)(e,{}),(0,m.jsx)(e,{}),(0,m.jsx)(e,{}),(0,m.jsx)(e,{})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",padding:1},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"SHOP BY CATEGORY"}),(0,m.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[(0,m.jsx)(e,{}),(0,m.jsx)(e,{}),(0,m.jsx)(e,{}),(0,m.jsx)(e,{})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsx)("img",{src:"assets/imgs/shopBycatImg.jpg",alt:"1",style:{width:"100%",height:"94%"}})})})})]})})})},R=()=>{const e=[{image:"assets/imgs/cardImg-1.jpg"},{image:"assets/imgs/cardImg-2.jpg"},{image:"assets/imgs/cardImg-3.jpg"},{image:"assets/imgs/cardImg-4.jpg"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(y.A.ReusableBox,{children:(0,m.jsxs)(b.Ay,{container:!0,spacing:2,p:0,children:[(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",borderRadius:"12px",border:"1px solid #9e9e9e",padding:1},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Up to 60% off"}),(0,m.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[null===e||void 0===e?void 0:e.map(((e,s)=>(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsx)("img",{src:e.image,height:"85%",width:"85%",alt:"",style:{}})},s))),(0,m.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Sukkhi Adorable Gold Plated Pearl Choker Necklace Set for Women"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,marginLeft:"-5px",color:"#FFA500"},children:"Explore more"})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",border:"1px solid #9e9e9e",padding:1,borderRadius:"12px"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Up to 40% off"}),(0,m.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[null===e||void 0===e?void 0:e.map(((e,s)=>(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsx)("img",{src:e.image,loading:"lazy",height:"85%",width:"85%",alt:"",style:{}})},s))),(0,m.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Crocs Unisex-Adult Bayaband ClogClogs and More"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,marginLeft:"-5px",color:"#FFA500"},children:"Explore more"})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",border:"1px solid #9e9e9e",padding:1,borderRadius:"12px"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:"Up to 50% off"}),(0,m.jsxs)(b.Ay,{container:!0,spacing:1,p:1,children:[null===e||void 0===e?void 0:e.map(((e,s)=>(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsx)("img",{src:e.image,height:"85%",width:"85%",alt:"",style:{}})},s))),(0,m.jsx)(y.A.ReusableTypography,{variant:"h4",sx:{padding:2,fontWeight:500,marginLeft:"-5px"},children:'Maxima Tubo2 1.96" Bluetooth Calling Smart Watch, Biggest Display with 600 Nits Brightness'}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,marginLeft:"-5px",color:"#FFA500"},children:"Explore more"})]})]})})})})]})})})},v=()=>{const e=[{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Puma",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers from Top Brands",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Puma",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers from Top Brands",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Puma",discount:"UpTo 15% Off",subdec:"Limited Time Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Puma",discount:"UpTo 15% Off",subdec:"Limited Time Deal"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(y.A.ReusableBox,{sx:{mt:1,backgroundColor:"#f3f6f999",width:"100%",height:"auto",padding:"30px",marginBottom:"1px"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h2",sx:{padding:3,fontWeight:500,color:"#222"},children:"TODAY DEALS"}),(0,m.jsx)(y.A.ReusableGrid,{container:!0,children:(0,m.jsx)(d.RC,{spaceBetween:10,slidesPerView:4,breakpoints:{1440:{slidesPerView:4},1024:{slidesPerView:3},768:{slidesPerView:3},576:{slidesPerView:2},0:{slidesPerView:1}},autoplay:!0,loop:!0,navigation:!0,modules:[l.Vx,l.Ij],className:"mySwiper3",style:{"--swiper-navigation-size":"10px"},children:null===e||void 0===e?void 0:e.map(((e,s)=>(0,m.jsx)(d.qr,{children:(0,m.jsxs)(y.A.ReusableBox,{sx:{margin:"2px",backgroundColor:"#FFFFFF",borderRadius:"8px",marginBottom:"50px",border:"1px solid #9e9e9e",transition:"box-shadow 0.3s","&:hover":{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"}},children:[(0,m.jsx)(y.A.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"30px",paddingTop:"10px"},children:(0,m.jsx)("img",{src:e.img,alt:"",width:"50%",height:"50%",loading:"lazy"})}),(0,m.jsxs)(y.A.Box,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",gap:"20px"},children:[(0,m.jsx)(y.A.Button,{variant:"contained",sx:{height:"25px",color:"#FFFCFC",bgcolor:"#FFA500",borderColor:"#2C7E34",textDecoration:"none",textTransform:"none",borderRadius:"6px",fontSize:"12px",whiteSpace:"nowrap","&:hover":{bgcolor:"#FFA500"}},children:e.discount}),(0,m.jsx)(y.A.ReusableTypography,{component:"span",children:e.subdec})]}),(0,m.jsx)(y.A.Box,{sx:{display:"flex",justifyContent:"left"},children:(0,m.jsx)(y.A.ReusableTypography,{variant:"h6",sx:{fontWeight:500,padding:1,marginLeft:"5px"},children:e.description})})]})},s)))})})]})})};var T=i(9409);const B=()=>{const e=[{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Storite",discount:"UpTo 15% Off",subdec:"Limited Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers on Puma",discount:"UpTo 15% Off",subdec:"Limited Deal"},{img:"assets/imgs/todayImg-2.jpg",description:"Best offers from Top Brands",discount:"UpTo 15% Off",subdec:"Limited Deal"}];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(y.A.ReusableBox,{children:(0,m.jsxs)(b.Ay,{container:!0,spacing:2,p:0,children:[(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",borderRadius:"12px",padding:1},children:[(0,m.jsxs)(y.A.ReusableBox,{sx:{padding:2,fontWeight:500,marginLeft:"-5px",display:"flex",justifyContent:"space-around",alignItems:"center"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h3",children:"You May Also Like...."}),(0,m.jsx)(y.A.IconButton,{size:"large",edge:"start",sx:{color:"#0078db"},children:(0,m.jsx)(T.A,{sx:{fontSize:"40px"}})})]}),(0,m.jsxs)(b.Ay,{container:!0,p:1,children:[(0,m.jsx)(b.Ay,{container:!0,xs:12,sm:6,md:6,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{border:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-1.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500},children:"ZAVERI PEARLS For Women"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,color:"#316630"},children:"85% OFF"})]})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsxs)(b.Ay,{container:!0,children:[(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{borderTop:"1px solid #9e9e9e",borderRight:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-2.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500},children:"Pink Crystal Shine"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,color:"#316630"},children:"75% OFF"})]})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{borderTop:"1px solid #9e9e9e",borderRight:"1px solid #9e9e9e",borderBottom:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-3.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:1,fontWeight:500},children:"Crystal Finger Ring"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:1,fontWeight:500,color:"#316630"},children:"65% OFF"})]})})]})})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",borderRadius:"12px",padding:1},children:[(0,m.jsxs)(y.A.ReusableBox,{sx:{padding:2,fontWeight:500,marginLeft:"-5px",display:"flex",justifyContent:"space-around",alignItems:"center"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h3",children:"You May Also Like...."}),(0,m.jsx)(y.A.IconButton,{size:"large",edge:"start",sx:{color:"#0078db"},children:(0,m.jsx)(T.A,{sx:{fontSize:"40px"}})})]}),(0,m.jsxs)(b.Ay,{container:!0,p:1,children:[(0,m.jsx)(b.Ay,{container:!0,xs:12,sm:6,md:6,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{border:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-1.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500},children:"ZAVERI PEARLS For Women"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,color:"#316630"},children:"85% OFF"})]})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsxs)(b.Ay,{container:!0,children:[(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{borderTop:"1px solid #9e9e9e",borderRight:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-2.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500},children:"Pink Crystal Shine"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:2,fontWeight:500,color:"#316630"},children:"75% OFF"})]})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{borderTop:"1px solid #9e9e9e",borderRight:"1px solid #9e9e9e",borderBottom:"1px solid #9e9e9e",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,m.jsx)("img",{src:"assets/imgs/youmayImg-3.jpg",height:"100%",width:"100%",alt:"",style:{}}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:1,fontWeight:500},children:"Crystal Finger Ring"}),(0,m.jsx)(y.A.ReusableTypography,{variant:"h5",sx:{padding:1,fontWeight:500,color:"#316630"},children:"65% OFF"})]})})]})})]})]})})})}),(0,m.jsx)(b.Ay,{item:!0,xs:12,md:4,lg:4,children:(0,m.jsx)(b.Ay,{container:!0,children:(0,m.jsx)(b.Ay,{item:!0,xs:12,md:12,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{backgroundColor:"#FFFFFF",borderRadius:"12px",padding:1,borderRadius:"12px"},children:[(0,m.jsxs)(y.A.ReusableBox,{sx:{padding:2,fontWeight:500,marginLeft:"-5px",display:"flex",justifyContent:"space-around",alignItems:"center"},children:[(0,m.jsx)(y.A.ReusableTypography,{variant:"h3",children:"Discounts For You..."}),(0,m.jsx)(y.A.IconButton,{size:"large",edge:"start",sx:{color:"#0078db"},children:(0,m.jsx)(T.A,{sx:{fontSize:"40px"}})})]}),(0,m.jsx)(b.Ay,{container:!0,spacing:1,p:1,children:null===e||void 0===e?void 0:e.map(((e,s)=>(0,m.jsx)(b.Ay,{item:!0,xs:12,sm:6,md:6,children:(0,m.jsxs)(y.A.ReusableBox,{sx:{margin:"2px",backgroundColor:"#FFFFFF",borderRadius:"8px",marginBottom:"50px",border:"1px solid #9e9e9e",transition:"box-shadow 0.3s","&:hover":{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.3)"}},children:[(0,m.jsx)(y.A.Box,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginBottom:"30px",paddingTop:"10px"},children:(0,m.jsx)("img",{src:e.img,alt:"",width:"89%",height:"89%",loading:"lazy"})}),(0,m.jsxs)(y.A.Box,{sx:{display:"flex",alignItems:"center",gap:"10px",padding:1},children:[(0,m.jsx)(y.A.Button,{variant:"contained",sx:{height:"25px",color:"#FFFCFC",bgcolor:"#FFA500",borderColor:"#2C7E34",textDecoration:"none",textTransform:"none",borderRadius:"6px",fontSize:"12px",whiteSpace:"nowrap","&:hover":{bgcolor:"#FFA500"}},children:e.discount}),(0,m.jsx)(y.A.ReusableTypography,{variant:"subtitle2",children:e.subdec})]}),(0,m.jsx)(y.A.Box,{sx:{display:"flex",justifyContent:"left"},children:(0,m.jsx)(y.A.ReusableTypography,{variant:"h6",sx:{fontWeight:500,padding:1,marginLeft:"5px"},children:e.description})})]})},s)))})]})})})})]})})})},w=()=>{(0,r.Zp)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(a.A,{children:[(0,m.jsx)(t.Ay,{}),(0,m.jsx)(n.A,{children:(0,m.jsxs)(n.A,{component:"main",sx:{padding:"5px"},children:[(0,m.jsx)(u,{}),(0,m.jsx)(A,{}),(0,m.jsx)(F,{}),(0,m.jsx)(R,{}),(0,m.jsx)(v,{}),(0,m.jsx)(B,{})]})})]})})}}}]);
//# sourceMappingURL=510.e59da6f9.chunk.js.map