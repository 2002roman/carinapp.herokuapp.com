webpackJsonp([1],{"09wD":function(t,e){},"99DY":function(t,e){},HV8G:function(t,e){},K8zg:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a,i=r("VU/8")({name:"App",data:function(){return{}}},n,!1,function(t){r("yLIf")},null,null).exports,s=r("/ocq"),c=r("BO1k"),d=r.n(c),p=r("mtWM");p.defaults.withCredentials=!0;var l={data:function(){return{formCardOption:this.$store.state[this.$route.name+"Option"],store:this.$store,files:"",errorText:""}},methods:{formComplite:function(){a=this;var t={},e=!0,r=!1,o=void 0;try{for(var n,i=d()(this.formCardOption.formModels);!(e=(n=i.next()).done);e=!0){var s=n.value;t[s.name]=s.model}}catch(t){r=!0,o=t}finally{try{!e&&i.return&&i.return()}finally{if(r)throw o}}console.log(t),p.post("https://carinapp.herokuapp.com/api/"+this.$route.name,t).then(function(t){1==t.data?(a.$store.commit("waveRaising","1"),setTimeout(function(){a.$router.push("/user/profile")},5e3)):(a.formCardOption.formModels[0].model="",a.formCardOption.formModels[1].model="",a.formCardOption.formModels[2].model="",a.formCardOption.formModels[3].model="",a.formCardOption.formModels[4].model="",a.formCardOption.formModels[5].model="",a.formCardOption.formModels[6].model="",a.formCardOption.formModels[7].model="",a.errorText=t.data)})}},beforeCreate:function(){var t=this;p("https://carinapp.herokuapp.com/api/verify").then(function(e){1==e.data&&t.$router.push("/user/profile")})}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{attrs:{id:"form-card"}},[r("div",{attrs:{id:"card-text"}},[r("h3",{attrs:{id:"card-title"}},[t._v(t._s(t.formCardOption.cardTitle))]),r("br"),t._v(" "),""!==t.errorText?r("h6",[t._v(t._s(t.errorText))]):t._e()]),t._v(" "),r("div",{attrs:{id:"card-func"}},[r("form",{on:{submit:function(e){e.preventDefault(),t.formComplite()}}},[t._l(t.formCardOption.formOption,function(e,o){return r("div",{staticClass:"input-field col s6"},["checkbox"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.formCardOption.formModels[o].model,expression:"formCardOption.formModels[index]['model']"}],staticClass:"validate",attrs:{id:e.name,autocomplete:"off",required:"",type:"checkbox"},domProps:{checked:Array.isArray(t.formCardOption.formModels[o].model)?t._i(t.formCardOption.formModels[o].model,null)>-1:t.formCardOption.formModels[o].model},on:{change:function(e){var r=t.formCardOption.formModels[o].model,n=e.target,a=!!n.checked;if(Array.isArray(r)){var i=t._i(r,null);n.checked?i<0&&t.$set(t.formCardOption.formModels[o],"model",r.concat([null])):i>-1&&t.$set(t.formCardOption.formModels[o],"model",r.slice(0,i).concat(r.slice(i+1)))}else t.$set(t.formCardOption.formModels[o],"model",a)}}}):"radio"===e.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.formCardOption.formModels[o].model,expression:"formCardOption.formModels[index]['model']"}],staticClass:"validate",attrs:{id:e.name,autocomplete:"off",required:"",type:"radio"},domProps:{checked:t._q(t.formCardOption.formModels[o].model,null)},on:{change:function(e){t.$set(t.formCardOption.formModels[o],"model",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.formCardOption.formModels[o].model,expression:"formCardOption.formModels[index]['model']"}],staticClass:"validate",attrs:{id:e.name,autocomplete:"off",required:"",type:e.type},domProps:{value:t.formCardOption.formModels[o].model},on:{input:function(e){e.target.composing||t.$set(t.formCardOption.formModels[o],"model",e.target.value)}}}),t._v(" "),r("label",{attrs:{for:e.name}},[t._v(t._s(e.label))])])}),t._v(" "),r("input",{attrs:{type:"submit"},domProps:{value:t.formCardOption.sendButtonValue}}),r("br"),t._v(" "),r("h6",{attrs:{id:"card-end"}},[t._v(t._s(t.formCardOption.cardEndText)+" \n                "),r("router-link",{attrs:{to:{name:t.formCardOption.redirectParams.link}}},[t._v(t._s(t.formCardOption.redirectParams.name))])],1)],2),t._v(" "),t._m(0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{id:"fcButton"}},[e("a",{attrs:{href:"https://carinapp.herokuapp.com/api/facebook"}},[this._v("Connect with Facebook")])])}]};var m=r("VU/8")(l,u,!1,function(t){r("HV8G")},"data-v-36429683",null).exports,f={data:function(){return{formCardOption:{cardTitle:"Log In",cardEndText:"Want to sign up?",formOption:[{name:"username",type:"text",label:"Username"},{name:"password",type:"password",label:"Password"}],sendButtonValue:"Log In",redirectParams:{name:"Register",link:"regin"},formModels:[{name:"username",model:""},{name:"password",model:""}]}}},components:{formCard:m},created:function(){this.$store.commit("logInOption",this.formCardOption)}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"form"}},[e("form-card")],1)},staticRenderFns:[]};var v=r("VU/8")(f,h,!1,function(t){r("WlU3")},"data-v-455b48e0",null).exports,_={data:function(){return{formCardOption:{cardTitle:"Reg In",cardEndText:"Already registered?",formOption:[{name:"username",type:"text",label:"Username"},{name:"password",type:"password",label:"Password"},{name:"name",type:"text",label:"Name"},{name:"lastname",type:"text",label:"Lastname"}],sendButtonValue:"Reg In",redirectParams:{name:"Log In",link:"login"},formModels:[{name:"username",model:""},{name:"password",model:""},{name:"name",model:""},{name:"lastname",model:""}]}}},components:{formCard:m},created:function(){this.$store.commit("regInOption",this.formCardOption)}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"form"}},[e("form-card")],1)},staticRenderFns:[]};var w,C,k=r("VU/8")(_,g,!1,function(t){r("tVjx")},"data-v-555cf79f",null).exports,x=r("Zrlr"),b=r.n(x),y=r("wxAW"),j=r.n(y),P=r("izxJ"),O=r.n(P),M=0,S=window.innerHeight/30,I=1,W=window.innerWidth/2.5,R=10,E=50,D=[],V=window.innerHeight/8*7,A="0",U=0,N=function(){function t(e,r){b()(this,t),this.sk=e,this.numberBall=r,this.cordinate=e.createVector(e.width/E*r,e.random(0+E,e.height)),this.speedDirection={x:0,y:1},this.size=e.random(1,10),this.color=Math.floor(e.random(25,100))}return j()(t,[{key:"updateCordinate",value:function(t,e){this.cordinate.x+=Math.floor(t),this.cordinate.y+=Math.floor(e),this.cordinate.y<=0&&(this.cordinate.y=this.sk.height),this.cordinate.x<=0&&(this.cordinate.x=this.sk.width),this.cordinate.x>=this.sk.width+1&&(this.cordinate.x=0)}},{key:"showBall",value:function(){this.sk.stroke(this.color),this.sk.strokeWeight(this.size),this.sk.point(this.cordinate.x,this.cordinate.y)}}]),t}(),F={data:function(){return{store:this.$store,windowSize:window.innerWidth}},components:{"vue-p5":O.a},methods:{setup:function(t){t.createCanvas(t.displayWidth,t.displayHeight),C=t.loadImage("https://carinapp.herokuapp.com/public/img/img.jpg"),w=t.TWO_PI/W*1,R=new Array(t.floor(t.width/1));for(var e=0;e<E;e++)D.push(new N(t,e));t.frameRate(100)},draw:function(t){t.background(C),S>=t.height/30&&1==I?I=-1:S<-t.height/30&&-1==I&&(I=1),S+=I,this.calcWave(t),this.renderWave(t),t.mouseX>t.pmouseX?U=3:t.mouseX<t.pmouseX&&(U=-3);for(var e=0;e<E;e++)D[e].updateCordinate(U,-1),D[e].showBall();1==A&&(V-=30),A=this.store.state.waveRaising,this.windowSize=window.innerWidth},calcWave:function(t){for(var e=M+=.02,r=0;r<R.length;r++)R[r]=t.sin(e)*S,e+=w},renderWave:function(t){t.fill(t.color(48,50,55)),t.strokeWeight(0),t.beginShape();for(var e=0;e<R.length;e++)t.vertex(1*e+1,V+R[e]);t.vertex(t.width+10,t.height),t.vertex(0,t.height),t.endShape(t.CLOSE),t.endShape(),t.noFill()}}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[this.windowSize>741?e("vue-p5",{on:{setup:this.setup,draw:this.draw}}):this._e(),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var z=r("VU/8")(F,T,!1,function(t){r("09wD")},null,null).exports,L=r("Xxa5"),B=r.n(L),q=r("exGp"),H=r.n(q);$(document).on("click",$(".dropbtn"),function(t){var e=$(t.target).parent().find(".dropdown-content"),r=e.hasClass("show");$(".dropdown-content").removeClass("show"),r||e.addClass("show")});var X=r("mtWM");X.defaults.withCredentials=!0;var Y={data:function(){return{projects:[]}},mounted:function(){var t,e=(t=H()(B.a.mark(function t(){var e;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X("https://carinapp.herokuapp.com/api/user/projects");case 3:e=t.sent,r.projects=e.data,console.log(e.data),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])})),function(){return t.apply(this,arguments)}),r=this;e()},methods:{goToCreateProject:function(){this.$router.push("createProject")},goView:function(t){console.log(t),this.$router.push("controllRobot/"+this.projects[t].id)},goDelete:function(t){var e=this;X.delete("https://carinapp.herokuapp.com/api/user/deleteProject/"+this.projects[t].id).then(function(r){"error"==r.data.status?alert(r.data.error):e.projects.splice(t,1)})},goDownload:function(){this.$router.go("https://carinapp.herokuapp.com/controlRobot")},goSeeData:function(t){this.$router.push("project/"+this.projects[t].id)}}},G={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("table",[t._m(1),t._v(" "),r("tbody",t._l(t.projects,function(e,o){return r("tr",[r("td",[t._v(t._s(e.projectname))]),t._v(" "),r("td",[t._v(t._s(e.id))]),t._v(" "),r("td",[t._v(t._s(e.status))]),t._v(" "),r("div",{staticClass:"dropdown"},[r("i",{staticClass:"small material-icons dropbtn",staticStyle:{"background-color":"#3fb0ac"}},[t._v("more_horiz")]),t._v(" "),r("div",{staticClass:"dropdown-content"},[r("button",{on:{click:function(e){t.goView(o)}}},[t._v("View")]),t._v(" "),r("button",{on:{click:function(e){t.goDelete(o)}}},[t._v("Delete")]),t._v(" "),r("a",{attrs:{href:"https://carinapp.herokuapp.com/api/user/downloadProject/"+e.id,download:""}},[t._v("Download")]),t._v(" "),r("button",{on:{click:function(e){t.goSeeData(o)}}},[t._v("See More")])])])])}))]),t._v(" "),r("button",{staticClass:"waves-effect waves-light btn",attrs:{id:"createProjectBtn"},on:{click:t.goToCreateProject}},[t._v("Create project")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ocean"},[e("div",{staticClass:"wave"}),this._v(" "),e("div",{staticClass:"wave"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Project name")]),this._v(" "),e("th",[this._v("Project Id")]),this._v(" "),e("th",[this._v("Project Status")])])])}]};var J=r("VU/8")(Y,G,!1,function(t){r("r7iB")},null,null).exports,K=r("mtWM");K.defaults.withCredentials=!0;var Q={data:function(){return{}},beforeCreate:function(){var t=this;K.get("https://carinapp.herokuapp.com/api/verify").then(function(e){0==e.data&&t.$router.push("/access/login")})},methods:{logOut:function(){var t=this;K.get("https://carinapp.herokuapp.com/api/logout").then(function(e){1==e.data&&t.$router.push("/access/login")})}}},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("br"),this._v(" "),e("router-link",{attrs:{to:{name:"profile"}}},[e("button",{staticClass:"buttonR"},[this._v("Profile")])]),this._v(" "),e("button",{staticClass:"buttonR",on:{click:this.logOut}},[this._v("Log Out")]),this._v(" "),e("br"),e("br"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var tt,et=r("VU/8")(Q,Z,!1,function(t){r("hOf6")},null,null).exports,rt=r("mtWM");rt.defaults.withCredentials=!0;var ot={data:function(){return{newProject:{footPart1S:4,footPart2S:5,footPart3S:8,servoMaxInPWM:2500,servoMinInPWM:600,high:8,highMax:10,highMin:5,pinsLayout:[[2,3,4],[14,15,18],[22,10,9],[23,24,25],[21,20,16],[26,19,13]]}}},methods:{send:function(){tt=this,rt.post("https://carinapp.herokuapp.com/api/user/createProject",this.formCardOption.formModels).then(function(t){console.log(t),"done"==t.data.status?tt.$router.push("/user/profile"):alert(t.data.error)})}}},nt={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Create your project")]),t._v(" "),r("div",{attrs:{id:"footParts"}},[r("img",{attrs:{src:"https://carinapp.herokuapp.com/public/img/footParts.svg",height:"400px"}}),t._v(" "),r("div",{staticClass:"form"},[r("h3",[t._v("Parts sizes")]),t._v(" "),r("br"),t._v(" "),r("h5",[t._v("Part 1")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProject.footPart1S[0],expression:"newProject.footPart1S[0]"}],attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"},domProps:{value:t.newProject.footPart1S[0]},on:{__r:function(e){t.$set(t.newProject.footPart1S,0,e.target.value)}}})]),t._v(" "),r("h5",[t._v("Part 2")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProject.footPart2S[1],expression:"newProject.footPart2S[1]"}],attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"},domProps:{value:t.newProject.footPart2S[1]},on:{__r:function(e){t.$set(t.newProject.footPart2S,1,e.target.value)}}})]),t._v(" "),r("h5",[t._v("Part 3")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProject.footPart3S[2],expression:"newProject.footPart3S[2]"}],attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"},domProps:{value:t.newProject.footPart3S[2]},on:{__r:function(e){t.$set(t.newProject.footPart3S,2,e.target.value)}}})])])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{attrs:{id:"rpiPins"}},[r("div",{staticClass:"form"},[r("h3",[t._v("Live stream configuration")]),t._v(" "),r("br"),r("br"),t._v(" "),r("div",[t._v("["),r("br"),t._v(" "),t._l(t.newProject.pinsLayout,function(e){return r("div",{staticStyle:{"margin-left":"70px","margin-top":"30px"}},[t._v("\n                            ["),t._l(e,function(e,o){return r("span",[t._v(" "),0!==o?r("span",[t._v(", ")]):t._e(),r("input",{attrs:{type:"number"},domProps:{value:e}})])}),t._v("  ]\n                        ")],2)}),t._v("]\n                    ")],2)]),t._v(" "),r("img",{attrs:{src:"https://carinapp.herokuapp.com/public/img/rpi.png",width:"400px"}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"motor"}},[r("div",{staticClass:"form"},[r("h3",[t._v("Motor data sheet")]),t._v(" "),r("br"),r("br"),t._v(" "),r("h5",[t._v("Motor torque")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"}})]),t._v(" "),r("h5",[t._v("Motor speed")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"}})])]),t._v(" "),r("img",{attrs:{src:"https://carinapp.herokuapp.com/public/img/motor.svg",height:"400px"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"stream"}},[r("div",{staticClass:"form"},[r("h3",[t._v("Live stream configuration")]),t._v(" "),r("br"),r("br"),t._v(" "),r("h5",[t._v("Number of parts")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"}})]),t._v(" "),r("h5",[t._v("Image quality")]),t._v(" "),r("p",{staticClass:"range-field"},[r("input",{attrs:{type:"range",id:"test5",min:"0",max:"20",step:"0.1"}})])]),t._v(" "),r("img",{attrs:{src:"https://carinapp.herokuapp.com/public/img/stream.svg",height:"400px"}})])}]};var at=r("VU/8")(ot,nt,!1,function(t){r("Qq1x")},"data-v-f96ef48c",null).exports,it=r("mtWM");it.defaults.withCredentials=!0;var st={data:function(){return{}},methods:{goDownload:function(){}},beforeCreate:function(){it("https://carinapp.herokuapp.com/api/verify").then(function(t){conosle.log(t)})}},ct={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n    Hello from home page!\n    "),e("br"),this._v("\n    You can donwload robot zip\n    "),e("br"),this._v(" "),e("button",{on:{click:this.goDownload}},[e("a",{attrs:{href:"https://carinapp.herokuapp.com/api/download/robotZip",download:""}},[this._v("Download")])])])},staticRenderFns:[]};var dt=r("VU/8")(st,ct,!1,function(t){r("K8zg")},"data-v-278c5626",null).exports,pt=r("mtWM");pt.defaults.withCredentials=!0;var lt={data:function(){return{project:[],edit:!1}},mounted:function(){var t,e=this;console.log(),(t=H()(B.a.mark(function t(){var r;return B.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pt("https://carinapp.herokuapp.com/api/user/project/"+e.$route.params.id);case 3:r=t.sent,e.project=r.data[0],t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])})),function(){return t.apply(this,arguments)})()},methods:{updateProject:function(){var t=this;pt.put("https://carinapp.herokuapp.com/api/user/editProject",t.project).then(function(e){"error"==e.data.status?alert(e.data.error):t.edit=!1})}}},ut={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"json-style"},[r("code",{staticClass:"head"},[t._v("projectData :")]),t._v(" "),r("div",{staticClass:"content"},t._l(t.project.projectdata,function(e,o){return r("div",[r("div",[r("code",[t._v(t._s(e.name)+" :")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.project.projectdata[o].model,expression:"project.projectdata[index].model"}],attrs:{readonly:!t.edit},domProps:{value:t.project.projectdata[o].model},on:{input:function(e){e.target.composing||t.$set(t.project.projectdata[o],"model",e.target.value)}}})])])})),t._v(" "),t.edit?t._e():r("a",{staticClass:"waves-effect waves-teal btn-flat",on:{click:function(e){t.edit=!0}}},[t._v("Edit")]),t._v(" "),t.edit?r("a",{staticClass:"waves-effect waves-teal btn-flat",on:{click:function(e){t.edit=!1}}},[t._v("Cancel")]):t._e(),t._v(" "),t.edit?r("a",{staticClass:"waves-effect waves-teal btn-flat",on:{click:function(e){t.updateProject()}}},[t._v("Update")]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ocean"},[e("div",{staticClass:"wave"}),this._v(" "),e("div",{staticClass:"wave"})])}]};var mt=r("VU/8")(lt,ut,!1,function(t){r("Vz6O")},null,null).exports,ft=r("woOf"),ht=r.n(ft),vt={workerOne:null,id1:null,path:"",host:"http://127.0.0.1",worker:function(t,e){this.host=t,this.path=e;var r=new Blob([this.workerRunner()],{type:"text/javascript"}),o=URL.createObjectURL(r);return this.worker1=new Worker(o),this.worker1},workerRunner:function(){return"\n\t\timportScripts('https://carinapp.herokuapp.com/socket.io/socket.io.js');\n\t\tvar socket = io('"+this.host+"',{path:'/stream"+this.path+"'});\n\n\t\tsocket.on('connect', ()=>{\n\t\t\tthis.id1 = socket.io.engine.id;\n\t\t\tself.postMessage({ message_name : 'setID',data : { \n\t\t\t\tid : socket.io.engine.id,\n\t\t\t\tindex : "+this.path+"\n\t\t\t} });\n\t\t\tsocket.on('stream',(data)=>{\n\t\t\t\tself.postMessage(data)\n\t\t\t})\n\t\t});\n\t\tself.onmessage = function(msg) { \n\t\t\tif(msg.message_name == 'start_stream') {\n\t\t\t\tsocket.robotId = msg.id\n\t\t\t\tsocket.on('stream', (data)=>{\n\t\t\t\t\tself.postMessage(data);\n\t\t\t\t})\n\t\t\t}\n\t\t}"}},_t={data:function(){return{direction:"",socketCopy:null,imageSrc:"data:image/jpeg;base64,",imageArray:["","","","","","","","","","","","","","","","","","","",""],newImageArray:["","","","","","","","","","","","","","","","","","","",""],socketsID:[],workers:[],comedWorkersNum:[],kadrNum:1}},mounted:function(){this.start()},computed:{getImageSrc:function(){return this.imageSrc+this.imageArray.join("")}},methods:{start:function(){var t=this,e=r("mtWM");e.defaults.withCredentials=!0;var o=io("https://carinapp.herokuapp.com",{path:"/auth"});o.on("connect",function(){var r={id:t.$route.params.id};e.get("https://carinapp.herokuapp.com/api/user/getCookies").then(function(e){r.typeAccess=e.data.typeAccess,r.token=e.data.token,o.emit("verifyUser",r),o.on("verifyUser_res",function(e){if("error"==e.status)return t.verifyError=e.error,void console.error("Error messgae :: ",e.error);o.robot_id=e.id,t.startControll(),t.startStream(),t.socketCopy=o})})})},startStream:function(){for(var t=this,e=function(e){t.workers[e]=vt.worker("https://carinapp.herokuapp.com",e),t.workers[e].onmessage=function(r){"setID"==r.data.message_name?(t.socketsID.push(r.data.data),10==t.socketsID.length&&t.socketCopy.emit("setUserStreamIds",t.socketsID)):(t.newImageArray[e]=r.data.data,t.newImageArray=ht()([],t.newImageArray),t.comedWorkersNum.push(e),10==t.comedWorkersNum.length&&(t.imageArray=t.newImageArray,t.comedWorkersNum=[],t.kadrNum++))},t.workers[e].postMessage("start")},r=0;r<10;r++)e(r)},startControll:function(){var t=this;nipplejs.create({mode:"static",position:{left:"120px",bottom:"120px"},size:200,color:"red"}).on("start end",function(e,r){"end"==e.type&&(t.socketCopy.emit("setDirection",{direction:"stop"}),t.direction="stop")}).on("move",function(e,r){void 0!=r.direction&&r.direction.angle!==t.direction&&(t.socketCopy.emit("setDirection",{direction:r.direction.angle}),t.direction=r.direction.angle)}).on("dir:up plain:up dir:left plain:left dir:downplain:down dir:right plain:right",function(t,e){}).on("pressure",function(t,e){})}}},gt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:this.getImageSrc,width:"640px",height:"480px"}})])},staticRenderFns:[]};var wt=r("VU/8")(_t,gt,!1,function(t){r("99DY")},null,null).exports;o.default.use(s.a);var Ct=new s.a({routes:[{path:"/home",name:"home",component:dt},{path:"/access",name:"accessMenu",component:z,children:[{path:"",redirect:"login"},{path:"login",name:"login",component:v},{path:"regin",name:"regin",component:k},{path:"*",redirect:"login"}]},{path:"/user",name:"user",component:et,children:[{path:"",redirect:"profile"},{path:"profile",name:"profile",component:J},{path:"project/:id",name:"project",component:mt},{path:"controllRobot/:id",name:"controllRobot",component:wt},{path:"createProject",name:"createProject",component:at},{path:"*",redirect:"profile"}]},{path:"*",redirect:"/access/login"}],mode:"history"}),kt=r("3EgV"),xt=r.n(kt),bt=r("NYxO");o.default.use(bt.a);var yt=new bt.a.Store({state:{waveRaising:0,loginOption:"",reginOption:""},mutations:{waveRaising:function(t){t.waveRaising=1},logInOption:function(t,e){t.loginOption=e},projectOption:function(t,e){t.projectOption=e},regInOption:function(t,e){t.reginOption=e},formCompliteError:function(t){t.formCompliteError=!0}}}),jt=r("C/JF"),Pt=r("fhbW"),Ot=r("U0v6"),Mt=r("8smA");o.default.use(Mt.a),jt.library.add(Pt.a,Pt.b),o.default.component("font-awesome-icon",Ot.FontAwesomeIcon),o.default.config.productionTip=!1,o.default.use(xt.a),new o.default({el:"#app",router:Ct,store:yt,components:{App:i},template:"<App/>"})},Qq1x:function(t,e){},Vz6O:function(t,e){},WlU3:function(t,e){},hOf6:function(t,e){},r7iB:function(t,e){},tVjx:function(t,e){},yLIf:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9fca5064156385b718a8.js.map