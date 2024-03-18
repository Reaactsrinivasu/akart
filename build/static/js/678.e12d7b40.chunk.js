"use strict";(self.webpackChunkakart=self.webpackChunkakart||[]).push([[678],{6442:(e,s,r)=>{r.d(s,{A:()=>c});var a=r(7154);const o=500;var n=r(1036);const t="get",i="post",d="put",l="delete";const c=class{constructor(){this.isLoggedIn=!1,this.userData={},this.userToken=null,this.baseURL="http://64.227.181.53:3000/"}get(e,s){return new Promise(((r,a)=>{this.api(t,e,s).then((e=>{r(e)})).catch((e=>{console.log(e)}))}))}post(e,s){return new Promise(((r,a)=>{this.api(i,e,s).then((e=>{r(e)})).catch((e=>{}))}))}put(e,s){return new Promise(((r,a)=>{this.api(d,e,s).then((e=>{r(e)})).catch((e=>{}))}))}delete(e,s){return new Promise(((r,a)=>{this.api(l,e,s).then((e=>{r(e)})).catch((e=>{console.log(e)}))}))}api(e,s,r){return new Promise(((t,i)=>{let d={};d.method=e,d.url=this.baseURL+s,d.headers=this.setHeaders(r),r&&r&&(d.data=r),(0,a.A)(d).then((e=>{var s;e&&e.status===o?alert("Something went wrong!!"):(t(e),e&&(console.log("response",e),n.oR.success(null===(s=e.data)||void 0===s?void 0:s.message)))})).catch((e=>{var s,r;let a=null===e||void 0===e?void 0:e.response,o=null===e||void 0===e?void 0:e.response.data;console.log("ERROR",e),null!==(s=e.response.data)&&void 0!==s&&s.email&&e.response.data.email.length>0?n.oR.error("Email ".concat(e.response.data.email[0])):null!==(r=e.response.data)&&void 0!==r&&r.phone_number&&e.response.data.phone_number.length>0?n.oR.error("Mobile Number ".concat(e.response.data.phone_number[0])):e.response.data.message&&e.response.data.message.length>0?n.oR.error("".concat(e.response.data.message)):401===(null===a||void 0===a?void 0:a.status)?n.oR.error("".concat(o.errors)):n.oR.error("An error occurred")}))}))}setHeaders(e){let s={"accept-language":"en","Content-Type":"application/json",Accept:"application/json"};if(s.Authorization=localStorage.getItem("token"),e&&(e.isMultipart&&(s["Content-Type"]="multipart/form-data"),e.headers))for(var r in e.headers)e.headers.hasOwnProperty(r)&&(s[r]=e.headers[r]);return s}}},1848:(e,s,r)=>{r.d(s,{g:()=>o});var a=r(899);const o=e=>{const s={};return e.forEach((e=>{switch(e){case"name":s.name=a.Yj().min(2,"Name is Short!").max(50,"Name is Long!").required("Name is required");break;case"email":s.email=a.Yj().email("Invalid email address format").required("Email is required");break;case"mobile_number":s.mobile_number=a.Yj().required("Mobile Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Mobile Number");break;case"phone_number":s.phone_number=a.Yj().required("Phone Number is required").matches(/^[6-9][0-9]{9}$/,"Invalid Phone Number");break;case"relationship":s.relationship=a.Yj().min(3,"Relationship is Short!").max(50,"Relationship is Long!").required("Relationship is required");break;case"address":s.address=a.Yj().min(5,"Address is Short!").max(100,"Address is Long!").required("Address is required");break;case"first_name":s.first_name=a.Yj().min(2,"First Name is Short!").max(50,"First Name is Long!").required("First Name is required");break;case"last_name":s.last_name=a.Yj().min(2,"Last Name is Short!").max(50,"Last Name is Long!").required("Last Name is required");break;case"password":s.password=a.Yj().min(8,"Password should be at least 8 characters").required("Password is required");break;case"new_password":s.new_password=a.Yj().min(8,"New Password should be at least 8 characters").required("New Password is required");break;case"password_confirmation":s.password_confirmation=a.Yj().min(8,"Password should be at least 8 characters").required("Confirm Password is required")}})),a.Ik(s)}},1678:(e,s,r)=>{r.r(s),r.d(s,{default:()=>v});r(5043);var a=r(2518),o=r(6446),n=r(5865),t=r(1744),i=r(622),d=r(3193),l=r(1292),c=r(3336),m=r(3216),p=r(1135),h=r(3516),u=r(6870);const w=new(r(6442).A),g=(e,s)=>function(r){var a;r((a=e,{type:u.D8,payload:a})),(async e=>new Promise((async(s,r)=>{try{const r=await w.post("".concat("/accounts/reset_password"),e);console.log("result in api",r),s(r)}catch(a){r(a)}})))(e).then((e=>{console.log(e),r({type:u.qK}),200===e.status&&s("/login")})).catch((e=>r((e=>({type:u.Fs,payload:e}))(e.message))))};var b=r(1848),x=r(579);const v=()=>{const e=(0,m.zy)(),s=(0,m.Zp)(),r=(0,h.wA)(),u=null===e||void 0===e?void 0:e.state;console.log("receivedData",u);const w=(0,b.g)(["password","new_password"]),v=(0,p.Wx)({initialValues:{password:"",new_password:"",account_id:null===u||void 0===u?void 0:u.id},validationSchema:w,onSubmit:e=>(async e=>{console.log("create new password ",e);try{r(g(e,s))}catch(a){}})(e)});return(0,x.jsx)(i.A,{component:"main",maxWidth:"xs",sx:{margin:"auto"},children:(0,x.jsx)(o.A,{children:(0,x.jsxs)(c.A,{elevation:1,variant:"elevation",square:!1,sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center",bgcolor:"#fff"},children:[(0,x.jsx)(n.A,{component:"h1",variant:"h5",mt:2,children:"Create New Password"}),(0,x.jsxs)("form",{onSubmit:v.handleSubmit,component:"form",style:{padding:"25px",marginTop:"20px"},children:[(0,x.jsxs)(d.A,{fullWidth:!0,sx:{marginBottom:"15px"},children:[(0,x.jsx)(l.A,{sx:{marginBottom:"10px",color:"#000",fontWeight:400,fontSize:"15px"},children:"New Password"}),(0,x.jsx)(t.A,{type:"password",id:"password",name:"password",size:"small",value:v.values.password,onBlur:v.handleBlur,onChange:v.handleChange,error:v.touched.password&&Boolean(v.errors.password),helperText:v.touched.password&&v.errors.password})]}),(0,x.jsxs)(d.A,{fullWidth:!0,children:[(0,x.jsx)(l.A,{sx:{marginTop:"13px",marginBottom:"10px",color:"#000",fontWeight:400,fontSize:"15px"},children:"Password Again"}),(0,x.jsx)(t.A,{placeholder:"new password",id:"new_password",name:"new_password",size:"small",type:"password",value:v.values.new_password,onBlur:v.handleBlur,onChange:v.handleChange,error:v.touched.new_password&&Boolean(v.errors.new_password),helperText:v.touched.new_password&&v.errors.new_password})]}),(0,x.jsx)(a.A,{type:"submit",sx:{mt:3,mb:2,color:"#111",bgcolor:"#FFD814",borderColor:"#FCD200",borderRadius:"md",textDecoration:"none",textTransform:"none","&:hover":{bgcolor:"#FCD200"}},fullWidth:!0,children:"Save & Sign"})]})]})})})}}}]);
//# sourceMappingURL=678.e12d7b40.chunk.js.map