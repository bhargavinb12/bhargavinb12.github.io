(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{104:function(e,t,a){},115:function(e,t){},117:function(e,t){},118:function(e,t){},119:function(e,t){},120:function(e,t){},155:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),l=a.n(o),i=a(29),c=a(30),m=(a(97),a(98),a(181)),s=a(160),u=a(183),p=a(184),d=a(186),g=a(187),f=a(185),E=a(78),v=a.n(E),y=a(87),b=a(182),h=Object(y.a)({palette:{primary:{main:"#7986cb"},secondary:{main:"#fff"}}}),x=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var w=a(188),S=(a(104),{paperContainer:{height:"85vh",backgroundSize:"cover",backgroundPosition:"top",width:"100vw ",backgroundImage:"linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 80, 131, 0.8)), url(".concat("/images/hero.jpg",")"),clipPath:"polygon(0 0, 100% 0, 100% 75vh, 0 100%)"}}),j=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function N(){var e=j();return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{container:!0,spacing:0,direction:"column",justify:"flex-end"},r.a.createElement(w.a,{item:!0,xs:12}),r.a.createElement(w.a,{item:!0,xs:12},r.a.createElement(s.a,{className:"paperOne",style:S.paperContainer},r.a.createElement("span",{className:"HeaderOne"},"Hi, I'm Bhargavi Narayan Bhat"),r.a.createElement("span",{className:"HeaderTwo"}," Front-End Web Developer")))))}var k=a(63),D=a(189),C=Object(m.a)((function(e){return{root:{padding:e.spacing(3,2),display:"flex",justifyContent:"center"}}})),O=function(){var e=C();return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",height:"90vh"}},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(f.a,{edge:"start",color:"inherit"},r.a.createElement(D.a,{style:{display:"inline",color:"#fb8c00"},fontSize:"large"}))),r.a.createElement(d.a,{align:"center",variant:"h5",component:"h3"},"Hire Me"),r.a.createElement(s.a,{className:e.root},r.a.createElement("div",null,r.a.createElement(k.SocialIcon,{style:{marginRight:"6px"},url:"https://www.linkedin.com/in/bhargavi-bhat/"}),r.a.createElement(k.SocialIcon,{style:{marginLeft:"2px"},url:"https://github.com/bhargavinb12"}))))},P=a(80),L=a(81),T=a(88),B=a(82),M=a(89),A=(a(110),a(40)),I=(a(156),a(190)),J=a(85),R=a.n(J),H=a(191),U=a(192),z=a(193);A.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(A.pdfjs.version,"/pdf.worker.js");Object(m.a)((function(e){return{button:{color:F},input:{display:"none"}}}));var F=R.a.A700,G=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(T.a)(this,(e=Object(B.a)(t)).call.apply(e,[this].concat(r)))).state={numPages:null,pageNumber:1},a.onDocumentLoadSuccess=function(e){var t=e.numPages;a.setState({numPages:t})},a.goToPrevPage=function(){return a.setState((function(e){return{pageNumber:1}}))},a.goToNextPage=function(){return a.setState((function(e){return{pageNumber:2}}))},a.exportPDF=function(){a.resume.save()},a}return Object(M.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pageNumber,a=e.numPages;return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",margin:"6px",padding:"6px"}},r.a.createElement("a",{href:"/resume.pdf",style:{textDecoration:"none"}},r.a.createElement(I.a,{variant:"extended",size:"small",style:{backgroundColor:"#2e7d32",color:"#fff"},"aria-label":"add"},r.a.createElement(H.a,null),"Download"))),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},r.a.createElement(I.a,{style:{marginLeft:"34px",padding:"6px"},size:"small",color:"secondary","aria-label":"prev",onClick:this.goToPrevPage},r.a.createElement(U.a,null)),r.a.createElement("div",{style:{height:772,width:612,padding:"none",backgroundColor:"white",boxShadow:"5px 5px 5px 5px black",margin:"auto",overflowX:"hidden",overflowY:"hidden"}},r.a.createElement(A.Document,{file:"/resume.pdf",onLoadSuccess:this.onDocumentLoadSuccess},r.a.createElement(A.Page,{pageNumber:t,width:600}))),r.a.createElement(I.a,{style:{marginRight:"34px",padding:"6px"},size:"small",color:"secondary","aria-label":"next",onClick:this.goToNextPage},r.a.createElement(z.a,null))),r.a.createElement("div",{style:{marginTop:"16px",display:"flex",flexDirection:"row",justifyContent:"center"}},r.a.createElement(d.a,null,"Page ",t," of ",a)))}}]),t}(r.a.Component),W=a(64),Q=a(60),V=a.n(Q),Y=a(86),_=a.n(Y),X=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"row",justifyContent:"center",alignContent:"center",flexGrow:1},paper:{padding:e.spacing(2),margin:"auto",maxWidth:650},image:{width:128,height:128},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}}));a(155);var q=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))},K=r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement((function(e){var t=x();return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{theme:h},r.a.createElement(u.a,{color:"primary",position:"static"},r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(v.a,null)),r.a.createElement(d.a,{align:"left",variant:"h6",className:t.title},"Bhargavi Narayan Bhat"),r.a.createElement(g.a,{color:"secondary"},r.a.createElement(i.b,{to:"/",style:{textDecoration:"none",color:"#fff"}}," ",r.a.createElement(d.a,{color:"initial",variant:"subtitle1"},"Home"))),r.a.createElement(g.a,{color:"secondary"},r.a.createElement(i.b,{to:"/about",style:{textDecoration:"none"}}," ",r.a.createElement(d.a,{variant:"subtitle1",style:{color:"white"}},"About"))),r.a.createElement(g.a,{color:"secondary"},r.a.createElement(i.b,{to:"/resume",style:{textDecoration:"none"}}," ",r.a.createElement(d.a,{style:{color:"white"},variant:"subtitle1",color:"initial"},"Resume"," "))),r.a.createElement(g.a,{color:"secondary"},r.a.createElement(i.b,{to:"/contact",style:{textDecoration:"none"}}," ",r.a.createElement(d.a,{style:{color:"white"},variant:"subtitle1",color:"initial"},"Contact"," ")))))))}),null),r.a.createElement(c.a,{exact:!0,path:"/",component:q}),r.a.createElement(c.a,{path:"/about",component:function(){var e=X();return r.a.createElement("div",{className:"container",style:{display:"flex",height:"85vh"}},r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{elevation:20,className:e.paper},r.a.createElement(w.a,{container:!0,spacing:2},r.a.createElement(w.a,{item:!0},r.a.createElement(W.a,{className:e.image},r.a.createElement("img",{className:e.img,alt:"complex",src:"/images/bharg-uncc.jpg"})),r.a.createElement("div",null)),r.a.createElement(w.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(w.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(d.a,{fontWeight:"600",color:"primary",gutterBottom:!0,variant:"subtitle1"},"About Me"),r.a.createElement(d.a,{variant:"body2",gutterBottom:!0},"Experienced Frontend Developer with a demonstrated history of working in the information technology and services industry."),r.a.createElement(d.a,{color:"secondary",variant:"subtitle1"}," ","Technical Skills:"," "),r.a.createElement(d.a,{color:"primary",variant:"subtitle1"}," ","Front-end JavaScript frameworks"),"Angular 8, React JS, jQuery, Vue JS",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"Front-end tech stack:"),"Vanilla JavaScript, HTML, HTML5, CSS3, NodeJS, LESS/SASS, Redux, CSS3, Modules, ES6, DOM manipulation, design patterns",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"UI component frameworks:"),"Semantic UI React, Element React, Material UI React",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"Front-end development tools:"),"Webpack, Grunt, NPM, Yarn, Browserify, Babel",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"Unit Testing Platforms:"),"JUnit (Unit Testing framework), Jest, Selenium, Mocha",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"Databases:"),"MongoDB, SQL, PL/SQL, NoSQL, Oracle 11g",r.a.createElement(d.a,{color:"primary",variant:"subtitle1"},"Tools:"),"JIRA, Confluence, Git-hub (modern version control flows), Bitbucket, AWS (S3, EC2), Source Tree, Docker"),r.a.createElement(w.a,{item:!0},r.a.createElement("div",{style:{cursor:"pointer",display:"flex",justifyContent:"space-around"}},r.a.createElement("div",null,r.a.createElement(I.a,{style:{marginLeft:"34px",padding:"6px"},size:"small",color:"secondary","aria-label":"prev"},r.a.createElement(V.a,null)),r.a.createElement(d.a,{color:"secondary",variant:"subtitle1"},"980-430-0345")),r.a.createElement("div",null,r.a.createElement(I.a,{style:{marginLeft:"34px",padding:"6px"},size:"small",color:"secondary","aria-label":"prev"},r.a.createElement(_.a,null)),r.a.createElement(d.a,{color:"secondary",variant:"subtitle1"},"bhargavinb@gmail.com"))))),r.a.createElement(w.a,{item:!0},r.a.createElement(d.a,{variant:"subtitle1"})))))))}}),r.a.createElement(c.a,{path:"/resume",component:G}),r.a.createElement(c.a,{path:"/contact",component:O})));l.a.render(K,document.getElementById("root"))},43:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=43},92:function(e,t,a){e.exports=a(157)},97:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"}},[[92,1,2]]]);
//# sourceMappingURL=main.429d954d.chunk.js.map