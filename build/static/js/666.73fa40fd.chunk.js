"use strict";(self.webpackChunkakart=self.webpackChunkakart||[]).push([[666],{6442:(e,r,s)=>{s.d(r,{A:()=>c});var a=s(7154);const o=500;var t=s(1036);const n="get",i="post",l="put",d="delete";const c=class{constructor(){this.isLoggedIn=!1,this.userData={},this.userToken=null,this.baseURL="http://64.227.181.53:3000/"}get(e,r){return new Promise(((s,a)=>{this.api(n,e,r).then((e=>{s(e)})).catch((e=>{console.log(e)}))}))}post(e,r){return new Promise(((s,a)=>{this.api(i,e,r).then((e=>{s(e)})).catch((e=>{}))}))}put(e,r){return new Promise(((s,a)=>{this.api(l,e,r).then((e=>{s(e)})).catch((e=>{}))}))}delete(e,r){return new Promise(((s,a)=>{this.api(d,e,r).then((e=>{s(e)})).catch((e=>{console.log(e)}))}))}api(e,r,s){return new Promise(((n,i)=>{let l={};l.method=e,l.url=this.baseURL+r,l.headers=this.setHeaders(s),s&&s&&(l.data=s),(0,a.A)(l).then((e=>{var r;e&&e.status===o?alert("Something went wrong!!"):(n(e),e&&(console.log("response",e),t.oR.success(null===(r=e.data)||void 0===r?void 0:r.message)))})).catch((e=>{var r,s;let a=null===e||void 0===e?void 0:e.response,o=null===e||void 0===e?void 0:e.response.data;console.log("ERROR",e),null!==(r=e.response.data)&&void 0!==r&&r.email&&e.response.data.email.length>0?t.oR.error("Email ".concat(e.response.data.email[0])):null!==(s=e.response.data)&&void 0!==s&&s.phone_number&&e.response.data.phone_number.length>0?t.oR.error("Mobile Number ".concat(e.response.data.phone_number[0])):e.response.data.message&&e.response.data.message.length>0?t.oR.error("".concat(e.response.data.message)):401===(null===a||void 0===a?void 0:a.status)?t.oR.error("".concat(o.errors)):t.oR.error("An error occurred")}))}))}setHeaders(e){let r={"accept-language":"en","Content-Type":"application/json",Accept:"application/json"};if(r.Authorization=localStorage.getItem("token"),e&&(e.isMultipart&&(r["Content-Type"]="multipart/form-data"),e.headers))for(var s in e.headers)e.headers.hasOwnProperty(s)&&(r[s]=e.headers[s]);return r}}},1848:(e,r,s)=>{s.d(r,{g:()=>o});var a=s(899);const o=e=>{const r={};return e.forEach((e=>{switch(e){case"name":r.name=a.Yj().min(2,"Name is Short!").max(50,"Name is Long!").required("Name is required");break;case"email":r.email=a.Yj().email("Invalid email address format").required("Email is required");break;case"mobile_number":r.mobile_number=a.Yj().required("Mobile Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Mobile Number");break;case"phone_number":r.phone_number=a.Yj().required("Phone Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Phone Number");break;case"relationship":r.relationship=a.Yj().min(3,"Relationship is Short!").max(50,"Relationship is Long!").required("Relationship is required");break;case"address":r.address=a.Yj().min(5,"Address is Short!").max(100,"Address is Long!").required("Address is required");break;case"first_name":r.first_name=a.Yj().min(2,"First Name is Short!").max(50,"First Name is Long!").required("First Name is required");break;case"last_name":r.last_name=a.Yj().min(2,"Last Name is Short!").max(50,"Last Name is Long!").required("Last Name is required");break;case"password":r.password=a.Yj().min(8,"Password should be at least 8 characters").required("Password is required");break;case"new_password":r.new_password=a.Yj().min(8,"New Password should be at least 8 characters").required("New Password is required");break;case"password_confirmation":r.password_confirmation=a.Yj().min(8,"Password should be at least 8 characters").required("Confirm Password is required")}})),a.Ik(r)}},6666:(e,r,s)=>{s.r(r),s.d(r,{default:()=>y});s(5043);var a=s(2518),o=s(8446),t=s(8903),n=s(6446),i=s(5865),l=s(1744),d=s(622),c=s(3193),m=s(1292),u=s(3336),p=s(1787),h=s(7022),g=s(3216),x=s(1135),b=s(3516),w=s(6870);const v=new(s(6442).A),j=(e,r)=>function(s){var a;s((a=e,{type:w.W$,payload:a})),(async e=>new Promise((async(r,s)=>{try{r(await v.post("".concat("/login"),e))}catch(a){s(a)}})))(e).then((e=>{console.log(e),console.log("res in api",e.status);const a=null===e||void 0===e?void 0:e.data.token;console.log("res token",a),localStorage.setItem("token",a),s({type:w.NM}),200===e.status&&r("/welcomepage")})).catch((e=>s((e=>({type:w.qe,payload:e}))(e.message))))};var f=s(1848),A=s(579);const y=()=>{const e=(0,g.zy)(),r=(0,g.Zp)(),s=(0,b.wA)(),w=null===e||void 0===e?void 0:e.state,v=(0,f.g)(["email","password"]),y=(0,x.Wx)({initialValues:{email:"",password:"",type:"email_account"},validationSchema:v,onSubmit:e=>(async e=>{console.log("email login ",e);try{s(j(e,r))}catch(a){}})(e)});return(0,A.jsx)(d.A,{component:"main",maxWidth:"xs",sx:{margin:"auto"},children:(0,A.jsx)(n.A,{children:(0,A.jsxs)(u.A,{elevation:1,variant:"elevation",square:!1,sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",bgcolor:"#fff"},children:[(0,A.jsx)(i.A,{component:"h1",variant:"h5",mt:2,children:"Log In"}),(0,A.jsxs)("form",{onSubmit:y.handleSubmit,component:"form",style:{padding:"25px",marginTop:"20px"},children:[(0,A.jsxs)(c.A,{fullWidth:!0,sx:{marginBottom:"15px"},children:[(0,A.jsx)(m.A,{sx:{marginBottom:"10px",color:"#000",fontWeight:400,fontSize:"15px"},children:"Enter Your Email Id"}),(0,A.jsx)(l.A,{type:"text",id:"email",name:"email",size:"small",value:w?y.values.email=w:y.values.email,disabled:!0,readOnly:!0,InputProps:{endAdornment:(0,A.jsx)(p.A,{position:"end",children:(0,A.jsx)(h.A,{sx:{cursor:"pointer"},onClick:()=>{r("/login",{state:w})}})})}})]}),(0,A.jsxs)(c.A,{fullWidth:!0,children:[(0,A.jsx)(m.A,{sx:{marginTop:"13px",marginBottom:"10px",color:"#000",fontWeight:400,fontSize:"15px"},children:"Enter Your Password"}),(0,A.jsx)(l.A,{placeholder:"password",id:"password",name:"password",size:"small",type:"password",value:y.values.password,onBlur:y.handleBlur,onChange:y.handleChange,error:y.touched.password&&Boolean(y.errors.password),helperText:y.touched.password&&y.errors.password})]}),(0,A.jsx)(a.A,{type:"submit",sx:{mt:3,mb:2,color:"#111",bgcolor:"#FFD814",borderColor:"#FCD200",borderRadius:"md",textDecoration:"none",textTransform:"none","&:hover":{bgcolor:"#FCD200"}},fullWidth:!0,children:"Continue"}),(0,A.jsx)(t.Ay,{container:!0,sx:{marginBottom:"8px"},children:(0,A.jsx)(t.Ay,{item:!0,xs:!0,children:(0,A.jsx)(o.A,{underline:"none",variant:"body1",sx:{cursor:"pointer"},onClick:()=>r("/emailpwdrecovery",{state:w}),children:"Forgot password ?"})})})]})]})})})}}}]);
//# sourceMappingURL=666.73fa40fd.chunk.js.map