(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[42],{1071:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1222),m=t(1225),p=t(1220),u=t(1221),d=t(186),b=t(794),h=t(798),E=t(795),v=t(793),f=t(865),j=t(805),g=t.n(j),A=t(271),y=t(266),N=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:[e.props.labelColor,e.props.labelColor,e.props.primary,e.props.labelColor,e.props.labelColor,e.props.labelColor],grid:{show:!1,padding:{left:0,right:0}},dataLabels:{enabled:!1},plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}},series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}]},e}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,{className:"pb-50"},i.a.createElement(u.a,{lg:{size:6,order:1},sm:{size:12,order:2},xs:{order:2},className:"d-flex justify-content-between flex-column mt-lg-0 mt-2"},i.a.createElement("div",{className:"session-info"},i.a.createElement("h2",{className:"text-bold-600 mb-25"},"2.7K"),i.a.createElement("p",{className:"text-bold-500 mb-75"},"Avg Sessions"),i.a.createElement("h5",{className:"font-medium-2"},i.a.createElement("span",{className:"text-success"},"+5.2% "),i.a.createElement("span",null,"vs last 7 days"))),i.a.createElement(d.a.Ripple,{className:"btn-block shadow",color:"primary"},"View Details ",i.a.createElement(A.a,{size:15}))),i.a.createElement(u.a,{lg:{size:6,order:2},sm:{size:12,order:1},xs:{order:1},className:"d-flex justify-content-between flex-column text-right"},i.a.createElement(b.a,null,i.a.createElement(h.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",i.a.createElement(y.a,{size:10})),i.a.createElement(E.a,{right:!0},i.a.createElement(v.a,null,"Last 28 days"),i.a.createElement(v.a,null,"Last Month"),i.a.createElement(v.a,null,"Last Year"))),i.a.createElement(g.a,{options:this.state.options,series:this.state.series,type:"bar",height:200}))),i.a.createElement("hr",null),i.a.createElement(p.a,{className:"pt-50"},i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement("p",{className:"mb-0"},"Goal: $100000"),i.a.createElement(f.a,{className:"mt-25",value:"50"})),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement("p",{className:"mb-0"},"Users: 100K"),i.a.createElement(f.a,{className:"mt-25",color:"warning",value:"60"})),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement("p",{className:"mb-0"},"Retention: 90%"),i.a.createElement(f.a,{className:"mt-25",color:"danger",value:"70"})),i.a.createElement(u.a,{md:"6",sm:"12"},i.a.createElement("p",{className:"mb-0"},"Duration: 1yr"),i.a.createElement(f.a,{className:"mt-25",color:"success",value:"80"})))))}}]),t}(i.a.Component);a.a=N},1072:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1222),m=t(1223),p=t(1224),u=t(794),d=t(798),b=t(795),h=t(793),E=t(1225),v=t(1220),f=t(1221),j=t(805),g=t.n(j),A=t(266),y=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{},plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:e.props.white,strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:[e.props.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.props.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{dashArray:8},labels:["Completed Tickets"]},series:[83]},e}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Support Tracker"),i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"cursor-pointer",tag:"small"},"Last 7 days ",i.a.createElement(A.a,{size:10})),i.a.createElement(b.a,{right:!0},i.a.createElement(h.a,null,"Last 28 days"),i.a.createElement(h.a,null,"Last Month"),i.a.createElement(h.a,null,"Last Year")))),i.a.createElement(E.a,{className:"pt-0"},i.a.createElement(v.a,null,i.a.createElement(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center"},i.a.createElement("h1",{className:"font-large-2 text-bold-600 mt-2 mb-0"},"163"),i.a.createElement("small",null,"Tickets")),i.a.createElement(f.a,{sm:"10",className:"d-flex justify-content-center"},i.a.createElement(g.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:350,className:"support-tracker-card"}))),i.a.createElement("div",{className:"chart-info d-flex justify-content-between"},i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"mb-50"},"New Tickets"),i.a.createElement("span",{className:"font-large-1"},"29")),i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"mb-50"},"Open Tickets"),i.a.createElement("span",{className:"font-large-1"},"63")),i.a.createElement("div",{className:"text-center"},i.a.createElement("p",{className:"mb-50"},"Response Time"),i.a.createElement("span",{className:"font-large-1"},"1d")))))}}]),t}(i.a.Component);a.a=y},1073:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1222),m=t(1223),p=t(1224),u=t(794),d=t(798),b=t(795),h=t(793),E=t(1225),v=t(805),f=t.n(v),j=t(266),g=t(205),A=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={options:{colors:[e.props.primary,e.props.warning,e.props.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:[e.props.primaryLight,e.props.warningLight,e.props.dangerLight],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{name:{fontSize:"18px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},labels:["Finished","Pending","Rejected"]},series:[70,52,26]},e}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,null,i.a.createElement(p.a,null,"Product Orders"),i.a.createElement(u.a,null,i.a.createElement(d.a,{tag:"small",className:"text-bold-500 cursor-pointer"},"Last 7 days ",i.a.createElement(j.a,{size:10})),i.a.createElement(b.a,{right:!0},i.a.createElement(h.a,null,"Last 28 days"),i.a.createElement(h.a,null,"Last Month"),i.a.createElement(h.a,null,"Last Year")))),i.a.createElement(E.a,null,i.a.createElement(f.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:350,className:"mb-3"}),i.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(g.a,{strokeWidth:5,size:"12",className:"primary"}),i.a.createElement("span",{className:"text-bold-600 ml-50"},"Finished")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"23043"))),i.a.createElement("div",{className:"chart-info d-flex justify-content-between mb-1"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(g.a,{strokeWidth:5,size:"12",className:"warning"}),i.a.createElement("span",{className:"text-bold-600 ml-50"},"Pending")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"14658"))),i.a.createElement("div",{className:"chart-info d-flex justify-content-between"},i.a.createElement("div",{className:"series-info d-flex align-items-center"},i.a.createElement(g.a,{strokeWidth:5,size:"12",className:"danger"}),i.a.createElement("span",{className:"text-bold-600 ml-50"},"Rejected")),i.a.createElement("div",{className:"series-result"},i.a.createElement("span",{className:"align-middle"},"4758")))))}}]),t}(i.a.Component);a.a=A},1074:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1222),m=t(1223),p=t(1224),u=t(1225),d=t(805),b=t.n(d),h=t(372),E=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=a.call.apply(a,[this].concat(n))).state={options:{chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:[e.props.primary,e.props.info],plotOptions:{radar:{polygons:{strokeColors:[e.props.strokeColor,"transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#9f8ed7",e.props.infoLight],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0},legend:{show:!1},labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:[e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor,e.props.strokeColor]}},yaxis:{show:!1},grid:{show:!1}},series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}]},e}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,null,i.a.createElement("div",{className:"title"},i.a.createElement(p.a,null,"Sales"),i.a.createElement("p",{className:"text-muted mb-0"},"Last 6 months")),i.a.createElement(h.a,{className:"cursor-pointer",size:20})),i.a.createElement(u.a,null,i.a.createElement("div",{className:"item-info d-inline-block mr-2"},i.a.createElement("div",{className:"bg-primary",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),i.a.createElement("span",null,"Sales")),i.a.createElement("div",{className:"item-info d-inline-block"},i.a.createElement("div",{className:"bg-info",style:{height:"10px",width:"10px",borderRadius:"50%",display:"inline-block",marginRight:"5px"}}),i.a.createElement("span",null,"Visits")),i.a.createElement(b.a,{options:this.state.options,series:this.state.series,type:"radar",height:400})))}}]),t}(i.a.Component);a.a=E},1399:function(e,a){e.exports="data:image/png;base64,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"},1400:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII="},1402:function(e,a,t){},2060:function(e,a,t){"use strict";t.r(a);var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1220),m=t(1221),p=t(1222),u=t(1225),d=(t(1399),t(1400),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{className:"bg-analytics text-white sales-card"},i.a.createElement(u.a,{className:"text-center"},i.a.createElement("div",{className:"avatar avatar-xl bg-primary shadow avatar-dashboard mt-0"}),i.a.createElement("div",{className:"award-info text-center"},i.a.createElement("h1",{className:"mb-2 text-white"},"Hi Admin,",i.a.createElement("div",null),"WELCOME TO AVERIS"),i.a.createElement("p",{className:"m-auto mb-0 w-75"},"FUN, LEARNING AND CONTINOUS IMPROVEMENT."))))}}]),t}(i.a.Component)),b=(t(943),t(944),t(1071),t(1072),t(1073),t(1074),t(1223)),h=t(1224),E=t(395),v=t(223),f=t(265),j=(i.a.Component,t(178),t(179),t(134),t(132),t(100),t(68),t(60),t(81),i.a.Component,t(1402),function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{className:"match-height"},i.a.createElement(m.a,{lg:"6",md:"12"},i.a.createElement(d,null))))}}]),t}(i.a.Component));a.default=j},838:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(1222),m=t(1225),p=t(805),u=t.n(p),d=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,null,i.a.createElement(m.a,{className:"".concat(this.props.className?this.props.className:"stats-card-body"," d-flex ").concat(this.props.iconRight||this.props.hideChart?this.props.iconRight?"justify-content-between flex-row-reverse align-items-center":this.props.hideChart&&!this.props.iconRight?"justify-content-center flex-column text-center":null:"flex-column align-items-start"," ").concat(this.props.hideChart?"pb-2":"pb-0"," pt-2")},i.a.createElement("div",{className:"icon-section"},i.a.createElement("div",{className:"avatar avatar-stats p-50 m-0 ".concat(this.props.iconBg?"bg-rgba-".concat(this.props.iconBg):"bg-rgba-primary")},i.a.createElement("div",{className:"avatar-content"},this.props.icon))),i.a.createElement("div",{className:"title-section"},i.a.createElement("h2",{className:"text-bold-600 mt-1 mb-25"},this.props.stat),i.a.createElement("p",{className:"mb-0"},this.props.statTitle))),!this.props.hideChart&&i.a.createElement(u.a,{options:this.props.options,series:this.props.series,type:this.props.type,height:this.props.height?this.props.height:100}))}}]),t}(i.a.Component);a.a=d},844:function(e,a,t){"use strict";t.d(a,"g",(function(){return r})),t.d(a,"h",(function(){return s})),t.d(a,"e",(function(){return n})),t.d(a,"f",(function(){return l})),t.d(a,"c",(function(){return o})),t.d(a,"d",(function(){return i})),t.d(a,"a",(function(){return c})),t.d(a,"b",(function(){return m}));var r={chart:{id:"subscribers",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},s=[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],n={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#28C76F"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},l=[{name:"Revenue",data:[350,275,400,300,350,300,450]}],o={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#EA5455"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},i=[{name:"Sales",data:[10,15,7,12,3,16]}],c={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#FF9F43"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},m=[{name:"Orders",data:[10,15,8,15,7,12,8]}]},865:function(e,a,t){"use strict";var r=t(5),s=t(43),n=t(6),l=t(0),o=t.n(l),i=t(1),c=t.n(i),m=t(3),p=t.n(m),u=t(4);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var h={children:c.a.node,bar:c.a.bool,multi:c.a.bool,tag:u.tagPropType,value:c.a.oneOfType([c.a.string,c.a.number]),min:c.a.oneOfType([c.a.string,c.a.number]),max:c.a.oneOfType([c.a.string,c.a.number]),animated:c.a.bool,striped:c.a.bool,color:c.a.string,className:c.a.string,barClassName:c.a.string,cssModule:c.a.object,style:c.a.object,barAriaValueText:c.a.string,barAriaLabelledBy:c.a.string},E=function(e){var a=e.children,t=e.className,s=e.barClassName,l=e.cssModule,i=e.value,c=e.min,m=e.max,d=e.animated,h=e.striped,E=e.color,v=e.bar,f=e.multi,j=e.tag,g=e.style,A=e.barAriaValueText,y=e.barAriaLabelledBy,N=Object(n.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),O=Object(u.toNumber)(i)/Object(u.toNumber)(m)*100,x=Object(u.mapToCssModules)(p()(t,"progress"),l),w={className:Object(u.mapToCssModules)(p()("progress-bar",v&&t||s,d?"progress-bar-animated":null,E?"bg-"+E:null,h||d?"progress-bar-striped":null),l),style:b(b({},g),{},{width:O+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":c,"aria-valuemax":m,"aria-valuetext":A,"aria-labelledby":y,children:a};return v?o.a.createElement(j,Object(r.a)({},N,w)):o.a.createElement(j,Object(r.a)({},N,{className:x}),f?a:o.a.createElement("div",w))};E.propTypes=h,E.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=E},943:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(838),m=t(461),p=t(844),u=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,{icon:i.a.createElement(m.a,{className:"primary",size:22}),stat:"92.6k",statTitle:"Subscribers Gained",options:p.g,series:p.h,type:"area"})}}]),t}(i.a.Component);a.a=u},944:function(e,a,t){"use strict";var r=t(12),s=t(13),n=t(15),l=t(14),o=t(0),i=t.n(o),c=t(838),m=t(378),p=t(844),u=function(e){Object(n.a)(t,e);var a=Object(l.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(c.a,{icon:i.a.createElement(m.a,{className:"warning",size:22}),iconBg:"warning",stat:"97.5K",statTitle:"Orders Received",options:p.a,series:p.b,type:"area"})}}]),t}(i.a.Component);a.a=u}}]);
//# sourceMappingURL=42.925431fb.chunk.js.map