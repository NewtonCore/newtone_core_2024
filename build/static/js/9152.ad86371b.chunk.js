"use strict";(self.webpackChunknewton_recruitment=self.webpackChunknewton_recruitment||[]).push([[9152],{59152:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(29439),a=t(57482),s=t(72791),r=t(59434),d=t(5501),l=t(82916),o=t(61300),c=t(95092),u=t(68827),h=t(91558),m=t(49690),f=t(55979),x=t(31527),j=t(54046),w=t(80184);var b=function(e){var n=e.show,t=e.onHide,i=e.actionButtonFn;return(0,w.jsx)("div",{children:(0,w.jsxs)(j.Z,{scrollable:!0,contentClassName:"",show:n,onHide:t,centered:!0,children:[(0,w.jsx)(j.Z.Header,{closeButton:!0,children:(0,w.jsx)("span",{className:"ms-auto",children:"Meeting Confirmed"})}),(0,w.jsx)(j.Z.Body,{children:(0,w.jsxs)("center",{children:[(0,w.jsx)("p",{children:"Details about the meeting has been sent to your email."}),(0,w.jsx)(d.Z,{size:"small",onClick:i,label:"Return to Dashboard"})]})})]})})},g=t(75985),v=t(32712),z=t(57689),S=t(71652),Z=t(92852),_=t(24750),p=t(97892),y=t.n(p);var C=function(){var e=(0,r.I0)(),n=(0,z.s0)(),t=(0,r.v9)((function(e){return e.ScheduleInterviewNewton})),j=t.newtonAvailabilityState,p=t.showMeetingScheduled,C=t.ScheduleInterviewState,D=(0,s.useState)((new Date).getDay()),k=(0,i.Z)(D,2),F=k[0],I=k[1],N=(0,s.useState)(new Date),A=(0,i.Z)(N,2),B=A[0],H=A[1],M=(0,s.useState)(void 0),T=(0,i.Z)(M,2),W=T[0],E=T[1],P=(0,s.useState)([]),V=(0,i.Z)(P,2),J=V[0],O=V[1],R=(0,s.useState)([]),q=(0,i.Z)(R,2);return q[0],q[1],(0,s.useEffect)((function(){E(void 0),void 0!==F&&j.data.hasOwnProperty("availabilities")?O(j.data.availabilities.filter((function(e){return e.week_day===parseInt(F)}))):O([])}),[F,j]),(0,s.useEffect)((function(){H(new Date),I(parseInt((new Date).getDay()))}),[]),(0,w.jsxs)(h.Z,{pageTitle:"Schedule a call with us",children:[C.loading&&(0,w.jsx)(a.Z,{}),(0,w.jsx)(b,{actionButtonFn:function(){return n("/".concat(v.Ir.index).concat(v.Ir.dashboard)),void e((0,x.bF)())},show:p,onHide:function(){return e((0,x.bF)())}}),(0,w.jsx)(u.Z,{children:(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(c.default,{children:[(0,w.jsx)(l.default,{size:6,md_size:12,lg_size:8,sm_size:12,xs_size:12,children:(0,w.jsx)("div",{className:"border border-2 rounded-3",children:(0,w.jsx)(S._,{dateAdapter:_.y,children:(0,w.jsx)(Z.W,{fixedWeekNumber:6,defaultValue:y()(new Date),onChange:function(e){return function(e){I(new Date(e).getDay(e)),H(new Date(e))}(e)},disablePast:!0})})})}),(0,w.jsx)(l.default,{size:6,md_size:12,lg_size:4,sm_size:12,xs_size:12,children:void 0===F?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("span",{className:"text-muted",children:"Select a day of the week"})}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(c.default,{className:"mb-5 mt-3",children:0!==J.length?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("span",{className:"text-muted mb-3",children:["* Select a preferred time for"," ",(0,f.r2)(B)]}),J[0].data.map((function(e){return(0,w.jsx)(l.default,{size:4,md_size:4,lg_size:6,sm_size:4,xs_size:6,children:(0,w.jsx)(d.Z,{disabled:C.loading,onClick:function(){return E(e.time)},backgroundColor:W===e.time?m.Th:m.ST,style:{color:(e.time,m.wC),borderWidth:1,borderColor:m.iZ,fontSize:10},children:e.time},e.id)},e.id)})),(0,w.jsx)(o.Z,{children:(0,w.jsx)(d.Z,{disabled:void 0===B||void 0===W,loading:C.loading,onClick:function(){return function(){var n=B.toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];e((0,x.JV)((0,f.Ip)({date:(0,f.rh)(B,"yyyy-MM-dd"),time:W,time_zone:n}))).unwrap().then((function(n){e((0,x.bF)())})).catch((function(e){g.Am.warning("".concat(e),{autoClose:2e3})}))}()},label:"Schedule Call"})})]}):(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("div",{class:"alert alert-warning",role:"alert",children:["Sorry. Cannot schedule meeting on"," ",(0,f.r2)(B)]})})})})})]})})})]})}}}]);
//# sourceMappingURL=9152.ad86371b.chunk.js.map