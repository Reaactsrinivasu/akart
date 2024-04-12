"use strict";(self.webpackChunkakart=self.webpackChunkakart||[]).push([[583],{6442:(e,r,o)=>{o.d(r,{A:()=>d});var n=o(7154);const a=500;var s=o(1036);const t="get",i="post",l="put",c="delete";const d=class{constructor(){this.isLoggedIn=!1,this.userData={},this.userToken=null,this.baseURL="http://64.227.181.53:3000/"}get(e,r){return new Promise(((o,n)=>{this.api(t,e,r).then((e=>{o(e)})).catch((e=>{console.log(e)}))}))}post(e,r){return new Promise(((o,n)=>{this.api(i,e,r).then((e=>{o(e)})).catch((e=>{}))}))}put(e,r){return new Promise(((o,n)=>{this.api(l,e,r).then((e=>{o(e)})).catch((e=>{}))}))}delete(e,r){return new Promise(((o,n)=>{this.api(c,e,r).then((e=>{o(e)})).catch((e=>{console.log(e)}))}))}api(e,r,o){return new Promise(((t,i)=>{let l={};l.method=e,l.url=this.baseURL+r,l.headers=this.setHeaders(o),console.log("axiosConfig.headers",l.headers),o&&o&&(l.data=o),(0,n.A)(l).then((e=>{var r;e&&e.status===a?s.oR.error("Something went wrong!!"):(t(e),e&&(console.log("response",e),s.oR.success(null===(r=e.data)||void 0===r?void 0:r.messages)))})).catch((e=>{var r,o;let n=null===e||void 0===e?void 0:e.response,a=null===e||void 0===e?void 0:e.response.data;console.log("ERROR",e),null!==(r=e.response.data)&&void 0!==r&&r.email&&e.response.data.email.length>0?s.oR.error("Email ".concat(e.response.data.email[0])):null!==(o=e.response.data)&&void 0!==o&&o.phone_number&&e.response.data.phone_number.length>0?s.oR.error("Mobile Number ".concat(e.response.data.phone_number[0])):e.response.data.message&&e.response.data.message.length>0?s.oR.error("".concat(e.response.data.message)):401===(null===n||void 0===n?void 0:n.status)?s.oR.error("".concat(a.errors)):422===(null===n||void 0===n?void 0:n.status)?s.oR.error("".concat(e.response.data.errors)):s.oR.error("An error occurred")}))}))}setHeaders(e){let r={"accept-language":"en","Content-Type":"application/json",Accept:"application/json"};if(r.Authorization=localStorage.getItem("token"),e&&(e.isMultipart&&(r["Content-Type"]="multipart/form-data"),e.headers))for(var o in e.headers)e.headers.hasOwnProperty(o)&&(r[o]=e.headers[o]);return r}}},1848:(e,r,o)=>{o.d(r,{g:()=>a});var n=o(899);const a=e=>{const r={};return e.forEach((e=>{switch(e){case"name":r.name=n.Yj().min(2,"Name is Short!").max(50,"Name is Long!").required("Name is required");break;case"email":r.email=n.Yj().email("Invalid email address format").required("Email is required");break;case"mobile_number":r.mobile_number=n.Yj().required("Mobile Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Mobile Number");break;case"phone_number":r.phone_number=n.Yj().required("Phone Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Phone Number");break;case"relationship":r.relationship=n.Yj().min(3,"Relationship is Short!").max(50,"Relationship is Long!").required("Relationship is required");break;case"address":r.address=n.Yj().min(5,"Address is Short!").max(100,"Address is Long!").required("Address is required");break;case"first_name":r.first_name=n.Yj().min(2,"First Name is Short!").max(50,"First Name is Long!").required("First Name is required");break;case"last_name":r.last_name=n.Yj().min(2,"Last Name is Short!").max(50,"Last Name is Long!").required("Last Name is required");break;case"password":r.password=n.Yj().min(8,"Password should be at least 8 characters").required("Password is required");break;case"old_password":r.old_password=n.Yj().min(8,"Current Password should be at least 8 characters").required("Current Password is required");break;case"new_password":r.new_password=n.Yj().min(8,"New Password should be at least 8 characters").required("New Password is required");break;case"password_confirmation":r.password_confirmation=n.Yj().min(8,"Password should be at least 8 characters").required("Confirm Password is required");break;case"confirm_password":r.confirm_password=n.Yj().min(8,"Confirm Password should be at least 8 characters").required("Confirm Password is required");break;case"input":r.input=n.Yj().required("Input is required")}})),n.Ik(r)}},8583:(e,r,o)=>{o.r(r),o.d(r,{default:()=>f});o(5043);var n=o(2518),a=o(8446),s=o(8903),t=o(6446),i=(o(1036),o(5865)),l=o(9252),c=o(3193),d=o(1292),u=o(5795),m=o(3336),p=o(3216),h=o(9456),b=o(3516),v=o(1848),g=o(84),x=o(579);const f=()=>{const e=(0,p.zy)(),r=(0,p.Zp)(),o=(0,h.wA)(),f=(null===e||void 0===e||e.state,(0,v.g)(["phone_number"])),w=(0,b.Wx)({initialValues:{phone_number:"",type:"mobile_account"},validationSchema:f,onSubmit:e=>(async e=>{console.log("values for mobile",e);try{o((0,g.xf)(e,r))}catch(n){}})(e)});return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(l.A,{component:"main",maxWidth:"xs",sx:{margin:"auto"},children:(0,x.jsx)(t.A,{children:(0,x.jsxs)(m.A,{elevation:1,variant:"elevation",square:!1,sx:{mx:"auto",my:15,py:3,px:2,display:"flex",flexDirection:"column",gap:2,borderRadius:"sm",bgcolor:"#fff"},children:[(0,x.jsx)(i.A,{textAlign:"left",variant:"h6",mt:2,children:"Password Assistance With Mobile"}),(0,x.jsxs)("form",{onSubmit:w.handleSubmit,style:{marginTop:"20px"},children:[(0,x.jsxs)(c.A,{fullWidth:!0,children:[(0,x.jsx)(d.A,{sx:{marginBottom:"10px",color:"#000",fontWeight:400,fontSize:"15px"},children:"Enter Your Mobile Number"}),(0,x.jsx)(u.A,{placeholder:"enter your mobile number",id:"phone_number",name:"phone_number",size:"small",value:w.values.phone_number,onBlur:w.handleBlur,onChange:w.handleChange,error:w.touched.phone_number&&Boolean(w.errors.phone_number),helperText:w.touched.phone_number&&w.errors.phone_number})]}),(0,x.jsx)(n.A,{type:"submit",fullWidth:!0,sx:{mt:2,mb:2,color:"#111",bgcolor:"#FFD814",borderColor:"#FCD200",borderRadius:"md",textDecoration:"none",textTransform:"none","&:hover":{bgcolor:"#FCD200"}},children:"Send OTP"}),(0,x.jsxs)(s.Ay,{container:!0,display:"flex",flexDirection:"row",justifyContent:"flex-end",sx:{marginBottom:"8px",gap:1,color:"#9e9e9e",cursor:"pointer"},children:[(0,x.jsx)(s.Ay,{item:!0,children:(0,x.jsx)(i.A,{variant:"body1",children:"Already a member ?"})}),(0,x.jsx)(s.Ay,{item:!0,children:(0,x.jsx)(a.A,{underline:"none",variant:"body1",onClick:()=>r("/login"),children:"Sign in"})})]})]})]})})})})}},84:(e,r,o)=>{o.d(r,{rz:()=>c,xf:()=>d});var n=o(6870);const a=new(o(6442).A),s=async e=>new Promise((async(r,o)=>{try{const o=await a.post("".concat("/forgot_password"),e);console.log("result in api",o),r(o)}catch(n){o(n)}})),t=e=>({type:n._2,payload:e}),i=()=>({type:n.RR}),l=e=>({type:n.QI,payload:e}),c=(e,r)=>function(o){o(t(e)),s(e).then((e=>{var n,a;console.log("res",e);let s=null===(n=e.data)||void 0===n?void 0:n.account.id,t={email:null===(a=e.data)||void 0===a?void 0:a.account.email,id:s};o(i()),200===e.status&&r("/otp/otpverifyfornewpassword",{state:t})})).catch((e=>o(l(e.message))))},d=(e,r)=>function(o){o(t(e)),s(e).then((e=>{var n,a;console.log("res",e);let s=null===(n=e.data)||void 0===n?void 0:n.account.id,t={phone_number:null===(a=e.data)||void 0===a?void 0:a.account.phone_number,id:s};o(i()),200===e.status&&r("/otp/otpverifyfornewpassword",{state:t})})).catch((e=>o(l(e.message))))}},8446:(e,r,o)=>{o.d(r,{A:()=>k});var n=o(8587),a=o(8168),s=o(5043),t=o(8387),i=o(8606),l=o(6803),c=o(4535),d=o(2876),u=o(7844),m=o(5849),p=o(5865),h=o(7056),b=o(2400);function v(e){return(0,b.Ay)("MuiLink",e)}const g=(0,h.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var x=o(7162),f=o(310);const w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>{let{theme:r,ownerState:o}=e;const n=(e=>w[e]||e)(o.color),a=(0,x.Yn)(r,"palette.".concat(n),!1)||o.color,s=(0,x.Yn)(r,"palette.".concat(n,"Channel"));return"vars"in r&&s?"rgba(".concat(s," / 0.4)"):(0,f.X4)(a,.4)};var A=o(579);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],_=(0,c.Ay)(p.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r["underline".concat((0,l.A)(o.underline))],"button"===o.component&&r.button]}})((e=>{let{theme:r,ownerState:o}=e;return(0,a.A)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,a.A)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:y({theme:r,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(g.focusVisible)]:{outline:"auto"}})})),k=s.forwardRef((function(e,r){const o=(0,d.A)({props:e,name:"MuiLink"}),{className:c,color:p="primary",component:h="a",onBlur:b,onFocus:g,TypographyClasses:x,underline:f="always",variant:y="inherit",sx:k}=o,q=(0,n.A)(o,j),{isFocusVisibleRef:R,onBlur:C,onFocus:S,ref:P}=(0,u.A)(),[N,Y]=s.useState(!1),L=(0,m.A)(r,P),D=(0,a.A)({},o,{color:p,component:h,focusVisible:N,underline:f,variant:y}),F=(e=>{const{classes:r,component:o,focusVisible:n,underline:a}=e,s={root:["root","underline".concat((0,l.A)(a)),"button"===o&&"button",n&&"focusVisible"]};return(0,i.A)(s,v,r)})(D);return(0,A.jsx)(_,(0,a.A)({color:p,className:(0,t.A)(F.root,c),classes:x,component:h,onBlur:e=>{C(e),!1===R.current&&Y(!1),b&&b(e)},onFocus:e=>{S(e),!0===R.current&&Y(!0),g&&g(e)},ref:L,ownerState:D,variant:y,sx:[...Object.keys(w).includes(p)?[]:[{color:p}],...Array.isArray(k)?k:[k]]},q))}))}}]);
//# sourceMappingURL=583.ad6eb195.chunk.js.map