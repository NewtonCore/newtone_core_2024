"use strict";(self.webpackChunknewton_recruitment=self.webpackChunknewton_recruitment||[]).push([[8336],{36129:function(e,t,n){n(33824),n(72791);var a=n(53361),i=n(31785),s=n(80184);t.Z=function(e){var t=e.showLock,n=void 0!==t&&t,l=e.showEdit,r=void 0!==l&&l,d=e.showDelete,o=void 0!==d&&d,c=e.handleEditButton,u=void 0===c?{}:c,h=e.hanldeDeleteButton,m=void 0===h?{}:h,x=e.hanldeLockButton,j=void 0===x?{}:x;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"...",children:[n&&(0,s.jsx)("button",{onClick:function(){return j()},className:"btn btn-default",children:(0,s.jsx)(i.default,{height:25,image:a.nC})}),r&&(0,s.jsx)("button",{onClick:function(){return u()},className:"btn btn-default",children:(0,s.jsx)(i.default,{height:22,image:a.uu})}),o&&(0,s.jsx)("button",{onClick:function(){return m()},className:"btn btn-default",children:(0,s.jsx)(i.default,{height:25,image:a.nG})})]})})}},64739:function(e,t,n){var a=n(57482),i=(n(72791),n(54046)),s=n(49690),l=n(5501),r=n(33824),d=n(80184);t.Z=function(e){var t=e.message,n=e.message2,o=e.show,c=e.onHide,u=e.actionButtonFn,h=e.loading,m=e.confirmText,x=e.cancelText,j=e.isDanger,v=void 0===j||j,p=e.children,f=e.showCancelButton,g=void 0===f||f;return(0,d.jsx)("div",{children:(0,d.jsxs)(i.Z,{scrollable:!0,contentClassName:"",show:o,backdrop:"static",keyboard:!1,onHide:c,centered:!0,children:[h&&(0,d.jsx)(a.Z,{}),(0,d.jsx)(i.Z.Header,{closeButton:!0,children:(0,d.jsx)("span",{className:"ms-auto",children:t})}),(0,d.jsxs)(i.Z.Body,{children:[v?(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"alert alert-danger",children:[(0,d.jsxs)("h6",{children:[(0,d.jsx)(r.mLj,{})," Warning"]}),void 0!==n&&""!==n&&(0,d.jsxs)(d.Fragment,{children:[n,(0,d.jsx)("br",{})]}),"You can't undo this action."]})}):(0,d.jsx)("p",{className:"text-center",children:n}),void 0!==p&&p]}),(0,d.jsx)(i.Z.Footer,{children:(0,d.jsxs)("div",{className:"d-flex mb-2 flex-row-reverse w-100",children:[(0,d.jsx)("div",{className:"p-1 w-100",children:(0,d.jsx)(l.Z,{className:"w-100",size:"small",loading:h,backgroundColor:v?s.cE:s.iZ,onClick:u,children:void 0!==m?m:(0,d.jsx)(d.Fragment,{children:"Delete"})})}),g&&(0,d.jsx)("div",{className:"p-1 w-100",children:(0,d.jsx)(l.Z,{className:"w-100",backgroundColor:s.ST,color:"transparent",size:"small",loading:h,onClick:c,children:void 0!==x?x:(0,d.jsx)(d.Fragment,{children:"Cancel"})})})]})})]})})}},62466:function(e,t,n){n(72791);var a=n(49690),i=n(27028),s=(n(5501),n(33170)),l=n(31785),r=n(80184);t.Z=function(e){var t=e.message,n=void 0===t?"":t,d=e.hasAction,o=void 0!==d&&d,c=e.actionLabel,u=e.linkPath,h=e.title,m=void 0===h?"":h,x=e.image,j=e.component;return(0,r.jsx)(r.Fragment,{children:void 0!==j?(0,r.jsxs)("div",{className:"border p-5 rounded",children:[j,o&&(0,r.jsx)(s.Z,{size:"small",isLink:!0,linkPath:u,style:{backgroundColor:a.ST,color:"black"},children:c})]}):(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},className:"border p-5 rounded",children:[(0,r.jsx)(l.default,{className:"animate__animated animate__pulse mb-3",style:{height:70,opacity:void 0===x?".4":"1"},image:void 0===x?i.ou:x}),(0,r.jsx)("p",{className:"fs-5 text-center",style:{color:a.iZ},children:m}),(0,r.jsx)("p",{className:"fs-6 text-muted text-center",children:n}),o&&(0,r.jsx)(s.Z,{size:"small",isLink:!0,linkPath:u,style:{backgroundColor:a.ST,color:"black"},children:c})]})})}},76250:function(e,t,n){var a=n(33824),i=(n(72791),n(75985)),s=(n(51753),n(80184));t.Z=function(e){var t=e.url;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"input-group",children:[(0,s.jsx)("input",{value:t,disabled:!0,type:"text",className:"form-control","aria-describedby":"basic-addon1"}),(0,s.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(t),void i.Am.info("Link copied",1e3)},className:"input-group-text",id:"basic-addon1",children:(0,s.jsx)(a.CKM,{})})]})})}},23902:function(e,t,n){var a=n(57482),i=(n(72791),n(54046)),s=n(49690),l=n(5501),r=n(80184);t.Z=function(e){var t=e.message,n=e.show,d=e.onHide,o=e.viewTalentFn,c=void 0===o?{}:o,u=e.publishFn,h=e.loading;return(0,r.jsx)("div",{children:(0,r.jsxs)(i.Z,{scrollable:!0,contentClassName:"",show:n,onHide:d,centered:!0,children:[h&&(0,r.jsx)(a.Z,{}),(0,r.jsx)(i.Z.Header,{closeButton:!0,children:(0,r.jsx)("span",{className:"ms-auto",children:"Are you sure?"})}),(0,r.jsxs)(i.Z.Body,{children:[t,(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(l.Z,{className:"w-100",loading:h,onClick:c,label:"View Talent Now"})}),(0,r.jsx)("div",{className:"p-2 mt-3",children:(0,r.jsx)(l.Z,{className:"w-100",backgroundColor:s.ST,color:"transparent",loading:h,onClick:u,label:"Publish Publicly"})})]})]})]})})}},39541:function(e,t,n){n(33824),n(72791);var a=n(54046),i=(n(75985),n(5501)),s=(n(51753),n(58732)),l=n(76250),r=n(80184);t.Z=function(e){var t=e.show,n=e.onHide,d=e.viewJobFn,o=(e.publishFn,e.loading),c=e.jobLink;return(0,r.jsx)("div",{children:(0,r.jsxs)(a.Z,{scrollable:!0,contentClassName:"",show:t,onHide:n,centered:!0,children:[(0,r.jsx)(a.Z.Header,{closeButton:!0,children:(0,r.jsx)("span",{className:"ms-auto",children:"Published Successfully"})}),(0,r.jsxs)(a.Z.Body,{children:[(0,r.jsx)("div",{className:"text-muted text-center",children:"Your job has been published successfully"}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.Z,{shareUrl:c}),(0,r.jsx)("hr",{}),(0,r.jsx)("div",{className:"p-2",children:(0,r.jsx)(l.Z,{url:c})}),(0,r.jsx)("div",{className:"p-2 mt-3",children:(0,r.jsx)(i.Z,{className:"w-100",loading:o,onClick:d,label:"View Job"})})]})]})]})})}},58732:function(e,t,n){n(72791);var a=n(61300),i=n(95092),s=n(12462),l=n(54261),r=n(26971),d=n(82709),o=n(39846),c=n(93127),u=n(32028),h=n(3582),m=n(45904),x=n(56720),j=n(28414),v=n(78685),p=n(62675),f=n(12071),g=n(80184);t.Z=function(e){var t=e.shareUrl,n=void 0===t?"https://newtoncore.com/":t,y=(e.heading,e.quote),b=void 0===y?"Newton":y,N=e.shareTitle,Z=void 0===N?"Newton":N,k=e.hashtags,w=void 0===k?["newton"]:k,_=[{id:(0,l.Z)(),component:(0,g.jsx)(r.Z,{title:Z,url:n,children:(0,g.jsx)(d.Z,{quote:b,size:32,round:!0})})},{id:(0,l.Z)(),component:(0,g.jsx)(o.Z,{quote:b,url:n,children:(0,g.jsx)(c.Z,{size:32,round:!0})})},{id:(0,l.Z)(),component:(0,g.jsx)(u.Z,{title:Z,url:n,children:(0,g.jsx)(h.Z,{size:32,round:!0})})},{id:(0,l.Z)(),component:(0,g.jsx)(m.Z,{hashtags:w,title:Z,url:n,children:(0,g.jsx)(x.Z,{size:32,round:!0})})},{id:(0,l.Z)(),component:(0,g.jsx)(j.Z,{title:Z,url:n,children:(0,g.jsx)(v.Z,{size:32,round:!0})})},{id:(0,l.Z)(),component:(0,g.jsx)(p.Z,{title:Z,url:n,children:(0,g.jsx)(f.Z,{size:32,round:!0})})}];return(0,g.jsx)("div",{children:(0,g.jsxs)(a.Z,{children:[(0,g.jsx)("center",{children:(0,g.jsx)("span",{className:"text-muted text-center",children:"You can share via"})}),(0,g.jsx)(i.default,{className:s.Z.footerIcons,children:_.map((function(e){return(0,g.jsx)("div",{className:"mt-1",children:e.component},e.id)}))})]})})}},15293:function(e,t,n){n(72791);var a=n(54046),i=(n(88570),n(80184));t.Z=function(e){var t=e.show,n=e.toggleFunction,s=e.children,l=e.heading,r=void 0===l?"heading":l;return(0,i.jsx)("div",{children:(0,i.jsxs)(a.Z,{size:"xl",scrollable:!0,show:t,onHide:n,centered:!0,children:[(0,i.jsx)(a.Z.Header,{closeButton:!0,children:(0,i.jsx)(a.Z.Title,{children:(0,i.jsx)("span",{className:"ms-auto",children:r})})}),(0,i.jsx)(a.Z.Body,{children:s})]})})}},89719:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(29439),i=n(72791),s=n(59434),l=n(5501),r=n(82916),d=n(95092),o=n(76348),c=(n(33824),n(36129)),u=n(80184);var h=function(e){var t=e.data,n=(e.recentlyUpdated,e.showActionButtons),a=void 0===n||n,i=e.showDivider,s=void 0===i||i,l=e.handleDelete,r=e.toggleEdit;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"flex_parent mt-4",children:[(0,u.jsx)("div",{className:"flex_children flex_child1",children:(0,u.jsx)("h6",{className:"text-start",children:void 0!==t.skill.name&&t.skill.name})}),(0,u.jsx)("div",{className:"flex_children flex_child2",children:(0,u.jsxs)("span",{className:"text-muted",children:[t.yearExperience," Years"]})}),(0,u.jsx)("div",{className:"flex_children flex_child3",children:(0,u.jsx)("span",{className:"text-muted",children:t.level})}),(0,u.jsx)("div",{className:"flex_children flex_child4",children:a&&(0,u.jsx)("div",{className:"flex-fill bd-highlight",children:(0,u.jsx)("div",{className:"float-end",children:(0,u.jsx)(c.Z,{showDelete:!0,hanldeDeleteButton:function(){return l(t)},handleEditButton:function(){r(t)}})})})})]}),s?(0,u.jsx)("hr",{}):(0,u.jsx)("div",{className:"mt-3"})]})},m=n(55979),x=n(57482);var j=function(e){var t=e.sectionName,n=e.data,c=e.dispatch,j=(e.handleAddForm,e.handleTextInputFn),v=e.handleSelectFn,p=e.handlePostSkill,f=e.skillList,g=e.toggleDelete,y=(e.loading,e.successAdding),b=e.toggleEdit,N=e.isEdit,Z=void 0!==N&&N,k=(0,i.useState)(!1),w=(0,a.Z)(k,2),_=w[0],K=w[1];(0,i.useEffect)((function(){}),[Z]),(0,i.useEffect)((function(){y&&(K(!0),setTimeout((function(){K(!1)}),100))}),[y]);var C=function(e){c(g(JSON.stringify(e)))},S=function(e,t){var n=e.target,a=n.value,i=n.name,s=t.DataKey,l=t.RowKey,r=t.ChildKey;c(j({state:"skill",valueToUpdate:a,KeyName:i,RowKey:l,ChildKey:r,DataKey:s}))},D=function(e,t){var n=t.DataKey,a=t.RowKey,i=t.ChildKey;c(v({state:"skill",valueToUpdate:JSON.parse(e),RowKey:a,ChildKey:i,DataKey:n}))},E=(0,s.v9)((function(e){return e.skill})).skillsState.data.results,F=f.filter((function(e){return null!==e.skill})),T=Z?E:(0,m.Ak)(F,E);return(0,u.jsxs)("div",{className:"mt-4",children:[!Z&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h5",{children:[t," ",void 0!==E&&(0,u.jsxs)(u.Fragment,{children:["ex: ","",E.length>3&&E.slice(0,3).map((function(e,t){return t+1===3?e.name:e.name+", "}))]})]}),Array.isArray(F)&&F.map((function(e){return(0,u.jsx)(h,{handleDelete:C,data:e,toggleEdit:b},e.id)}))]}),Array.isArray(T)&&0===T.length&&(0,u.jsx)("div",{class:"alert alert-warning",role:"alert",children:"No skills to choose from"}),_?(0,u.jsx)(x.Z,{}):(0,u.jsxs)(u.Fragment,{children:[n.map((function(e,t){return(0,u.jsx)("span",{children:e.map((function(e,n){return(0,u.jsx)(d.default,{className:"gx-5",children:e.children.map((function(a,i){return(0,u.jsx)(r.default,{size:12/e.colums,lg_size:12/e.colums,children:(0,u.jsx)(o.Z,{handleChange:"text-input"===a.type?S:"select"===a.type||"r-select"===a.type||"r-select-2"===a.type?D:{},type:a.type,metaData:{meta:{DataKey:t,RowKey:n,ChildKey:i},label:a.label,value:a.value,name:a.name,input_type:a.input_type,inputId:"settings_input_fields",min:a.min,data:"skill"===a.name?Array.isArray(T)&&T.map((function(e){return e})):a.data,type:a.input_type,isFromBackendData:a.isFromBackendData,isRequired:a.isRequired,errorMessage:"text-input"===a.type&&a.errorMessage,valueName:"skill"===a.name?"name":void 0}})},a.id)}))},e.id)}))},t)})),(0,u.jsx)("hr",{}),(0,u.jsx)("center",{children:(0,u.jsx)(l.Z,{size:"small",label:"+ Save ".concat(t),onClick:function(){p(n)}})})]}),(0,u.jsx)("hr",{})]})}},71295:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(1413),i=n(29439),s=n(52739),l=n(13239),r=n(72791),d=n(64739),o=n(89719),c=n(59434),u=n(91608),h=n(82916),m=n(95092),x=n(76348),j=JSON.parse('[{"id":"USD","symbol":"US$","name":"United States dollar"},{"id":"GBP","symbol":"\xa3","name":"British pound"},{"id":"EUR","symbol":"\u20ac","name":"European Euro"},{"id":"\u20a6","symbol":"\u20a6","name":"Nigerian Naira"}]'),v=(n(55979),"CompanyJob_red_input__QSjsr"),p=n(80184);var f=function(e){var t=e.data,n=e.isEdit,i=void 0!==n&&n,s=(0,c.I0)(),l=(0,c.v9)((function(e){return e.skill})).technicalSkillsState.data.results,r=function(e,t){var n=e.target,a=(n.value,n.name),i=t.DataKey,l=t.RowKey,r=t.ChildKey;s((0,u._Q)({state:"job_data",valueToUpdate:e.target.value,KeyName:a,RowKey:l,ChildKey:r,DataKey:i})),s((0,u.vY)())},d=function(e,t){var n="",a="";void 0!==e.target?(n=e.target.value,a=e.target.name):n=e;var i=t.RowKey,l=t.ChildKey;s((0,u.PI)({state:"job_data",valueToUpdate:n,KeyName:a,RowKey:i,ChildKey:l}))},o=function(e,t){s((0,u.p4)());var n="",a="";void 0!==e.target?(n=e.target.value,a=e.target.name):n=e;var i=t.RowKey,l=t.ChildKey;s((0,u.V$)({state:"job_data",valueToUpdate:n,KeyName:a,RowKey:i,ChildKey:l}))},f=function(e,t){var n=t.RowKey,a=t.ChildKey;s((0,u.Ku)({state:"job_data",valueToUpdate:JSON.parse(e),RowKey:n,ChildKey:a}))},g=function(e,t,n){var a=t.meta,i=(a.DataKey,a.RowKey),l=a.ChildKey;s((0,u.xl)({state:"job_data",valueToUpdate:n,RowKey:i,ChildKey:l}))};return(0,p.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault()}(e)},children:Array.isArray(t)&&t.map((function(e,t){return(0,p.jsxs)(m.default,{className:"gx-5",children:[void 0!==e.desc&&!e.hidden&&(0,p.jsxs)("h6",{className:"mt-4",children:[e.desc," * "]}),e.children.map((function(n,s){if(!0!==n.hidden)return(0,p.jsx)(h.default,{size:12/e.colums,md_size:12,lg_size:12/e.colums,children:(0,p.jsx)(x.Z,{onBlurValidation:"text-input"===n.type||"text-area"===n.type||"text-area-tiny"===n.type?r:{},handleChange:"text-input"===n.type||"text-area"===n.type||"mui-date"===n.type||"text-area-tiny"===n.type?o:"select"===n.type||"r-select"===n.type||"r-select-2"===n.type?f:"file"===n.type?g:"radioInput"===n.type?d:{},type:n.type,metaData:(0,a.Z)((0,a.Z)({meta:{RowKey:t,ChildKey:s},value:n.value,showMonthYearPicker:"year-month-date"===n.type&&!1,errorMessage:"text-input"===n.type||"text-area"===n.type&&n.errorMessage||n.minMaxMessage},n),{},{inputId:"settings_input_fields",type:n.input_type,data:"title"===n.name?Array.isArray(l)&&l.map((function(e){return e})):"currency"===n.name?Array.isArray(j)&&j.map((function(e){return e})):n.data,options:"give_work_authorization"===n.name?n.options:[],valueName:"title"===n.name?"name":void 0,combineNameID:"currency"===n.name,isEdit:i,message:n.dateErrorMessage||n.minMaxMessage,className:n.hasError||n.hasDateError||n.hasMinMaxError?v:""})})},n.id)}))]},e.id)}))})},g=n(15293);var y=function(e){var t=e.isEdit,n=e.handlePostSkill,h=e.handleSelectFn,m=e.handleTextInputFn,x=(e.handleRadioFn,e.dispatch),j=e.sectionName,v=void 0===j?"Language Stack":j,y=e.skillList,b=e.skill_data,N=e.form_data,Z=e.loading_delete,k=e.deleteSkill,w=e.showDeleteSkillModal,_=e.onHide,K=e.toggleDeleteSkill,C=e.postingJobLoading,S=e.jobObject,D=void 0===S?"":S,E=e.loadingAddingSkill,F=(0,c.v9)((function(e){return e.jobCompany})),T=(0,r.useState)(!0),B=(0,i.Z)(T,2),R=B[0],A=(B[1],(0,r.useState)(!1)),z=(0,i.Z)(A,2),M=z[0],P=(z[1],F.skillObject),I=F.showEditSkillModal,L=function(e){x((0,u.Vg)(JSON.stringify(e)))};return(0,r.useEffect)((function(){var e=(0,a.Z)({},P);I&&x((0,u.sg)(e))}),[I]),(0,r.useEffect)((function(){}),[D]),(0,p.jsxs)("div",{children:[(0,p.jsx)(s.Z,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:Z||C||M,children:(0,p.jsx)(l.Z,{color:"inherit"})}),(0,p.jsx)(g.Z,{toggleFunction:function(){return L()},heading:"Edit Skill",show:I&&Object.keys(P).length>=0,children:(0,p.jsx)(o.Z,{isEdit:!0,toggleEdit:L,toggleDelete:K,handlePostSkill:n,handleSelectFn:h,handleTextInputFn:m,dispatch:x,sectionName:v,skillList:y,data:b,loading:E})}),R&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.Z,{loading:Z,actionButtonFn:k,show:w,message:"Delete Skill",onHide:_,message2:"Are you sure you want to delete?"}),(0,p.jsx)(f,{isEdit:t,data:N}),!I&&(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(o.Z,{toggleEdit:L,toggleDelete:K,handlePostSkill:n,handleSelectFn:h,handleTextInputFn:m,dispatch:x,sectionName:v,skillList:y,data:b,loading:E})})]})]})}},51753:function(){},12462:function(e,t){t.Z={refer_modal:"ReferModal_refer_modal__9kP4g",footerIcons:"ReferModal_footerIcons__kNf03"}},88570:function(e,t){t.Z={red_input:"EditProfile_red_input__aiPEL",modal_90w:"EditProfile_modal_90w__5ab41"}}}]);
//# sourceMappingURL=8336.6c84a132.chunk.js.map