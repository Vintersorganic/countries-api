(this["webpackJsonpcountries-app"]=this["webpackJsonpcountries-app"]||[]).push([[0],{112:function(n,e,t){"use strict";t.r(e);var r,c,o,i,a,l,s,d,b,u,x,j,p,h,f,g,O,m,w,v,y,k,C,S,z,L,_,D,B,M,R,T=t(0),A=t(14),E=t(19),N=t.n(E),I=t(7),F=t(5),P=t(3),J=t(4),W=t(124),U=t(25),q=t.n(U),G=function(n){return Object(P.c)(r||(r=Object(J.a)(["\n    @media only screen and (max-width: 380px) {\n      ","\n  }\n  "])),n)},H=t(29),K=t.n(H),Q=t(2),V=P.d.div(c||(c=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 17px;\n  ","\n"])),G({fontSize:14})),X=P.d.button(o||(o=Object(J.a)(["\n  transition: all 0.3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ",";\n  color: ",";\n  border: none;\n  padding: 10px;\n  width: 10%;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  ","\n\n  &:hover {\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n    cursor: pointer;\n  }\n"])),(function(n){return n.elements}),(function(n){return n.text}),G({width:"40%"})),Y=P.d.div(i||(i=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-top: 40px;\n  ","\n"])),G({flexDirection:"column"})),Z=P.d.div(a||(a=Object(J.a)(["\n  width: 45%;\n  ","\n"])),G({width:"100%"})),$=P.d.img(l||(l=Object(J.a)(["\n  width: 100%;\n  border-radius: 5px;\n"]))),nn=P.d.div(s||(s=Object(J.a)(["\n  flex: 1;\n  padding: 30px;\n  margin-left: 60px;\n  ","\n"])),G({width:"100%",marginLeft:0,padding:0,marginTop:30})),en=P.d.h1(d||(d=Object(J.a)(["\n  margin-bottom: 30px;\n"]))),tn=P.d.ul(b||(b=Object(J.a)(["\n  list-style: none;\n  padding: 0;\n  column-count: 2;\n  column-gap: 100px;\n  ","\n"])),G({width:"100%",paddingLeft:0,display:"flex",flexWrap:"wrap"})),rn=P.d.li(u||(u=Object(J.a)(["\n  font-weight: 600;\n  line-height: 2;\n"]))),cn=P.d.span(x||(x=Object(J.a)(["\n  font-weight: 300;\n"]))),on=P.d.p(j||(j=Object(J.a)(["\n  font-weight: 600;\n  margin-top: 50px;\n  font-size: 15px;\n  align-items: center;\n  flex-wrap: wrap;\n  ","\n"])),G({width:"100%",display:"flex",alignContent:"center",fontSize:14,justifyContent:"space-between"})),an=Object(P.d)(A.b)(p||(p=Object(J.a)(["\n  transition: all 0.3s;\n  font-size: 18px;\n  font-weight: 300;\n  background: ",";\n  padding: 10px;\n  color: ",";\n  margin-left: 10px;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  text-decoration: none;\n  ","\n\n  &:hover {\n    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),\n      0 17px 50px 0 rgba(0, 0, 0, 0.19);\n    cursor: pointer;\n  }\n"])),(function(n){return n.elements}),(function(n){return n.text}),G({fontSize:12,marginBottom:10,marginLeft:0,alignItem:"center"})),ln=function(){var n=Object(F.g)(),e=Object(P.e)(),t=Object(T.useState)([]),r=Object(I.a)(t,2),c=r[0],o=r[1],i=Object(F.h)().name;Object(T.useEffect)((function(){q.a.get("https://restcountries.com/v2/alpha/".concat(i)).then((function(n){console.log(n),o(n.data)}))}),[i]);return c.length<1?null:Object(Q.jsxs)(V,{children:[Object(Q.jsxs)(X,{text:e.text,elements:e.elements,onClick:function(){n("/")},children:[Object(Q.jsx)(W.a,{}),"Back"]}),Object(Q.jsxs)(Y,{children:[Object(Q.jsx)(Z,{children:Object(Q.jsx)($,{src:c.flag})}),Object(Q.jsxs)(nn,{children:[Object(Q.jsx)(en,{children:c.name}),Object(Q.jsxs)(tn,{children:[Object(Q.jsxs)(rn,{children:["Native Name: ",Object(Q.jsx)(cn,{children:c.nativeName})]}),Object(Q.jsxs)(rn,{children:["Population: ",Object(Q.jsx)(cn,{children:c.population})]}),Object(Q.jsxs)(rn,{children:["Region: ",Object(Q.jsx)(cn,{children:c.region})]}),Object(Q.jsxs)(rn,{children:["Sub Region: ",Object(Q.jsx)(cn,{children:c.subregion})]}),Object(Q.jsxs)(rn,{children:["Capital: ",Object(Q.jsx)(cn,{children:c.capital})]}),Object(Q.jsxs)(rn,{children:["Top Level Domain: ",Object(Q.jsx)(cn,{children:c.topLevelDomain})]}),Object(Q.jsxs)(rn,{children:["Currencies:"," ",c.currencies.map((function(n,e){return Object(Q.jsxs)(cn,{children:[n.name," ",e+1===c.currencies.length?"":", "]},e)}))]}),Object(Q.jsxs)(rn,{children:["Currencies:"," ",c.languages.map((function(n,e){return Object(Q.jsxs)(cn,{children:[n.name,e+1===c.languages.length?"":", "]},e)}))]})]}),Object(Q.jsxs)(on,{children:[Object(Q.jsx)("span",{children:"Border Countries:"}),c.borders?c.borders.map((function(n,t){return Object(Q.jsx)(an,{elements:e.elements,text:e.text,to:"/".concat(n),children:n},t)})):""]})]})]})]})},sn=t(22),dn=t(32),bn=t.n(dn),un=t(49),xn=Object(P.d)(A.b)(h||(h=Object(J.a)(["\n  width: 20%;\n  color: ",";\n  background: ",";\n  border-radius: 5px;\n  padding-bottom: 20px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  text-decoration: none;\n  transition: all .3s;\n  ","  \n\n  &:hover {\n    transform: scale(1.1);\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  }\n"])),(function(n){return n.text}),(function(n){return n.elements}),G({width:"100%"})),jn=P.d.img(f||(f=Object(J.a)(["\n  width: 100%;\n  height: 180px;\n  display: block;\n  border-radius: 5px;\n"]))),pn=P.d.div(g||(g=Object(J.a)(["\n  padding: 20px;\n"]))),hn=P.d.div(O||(O=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.7;\n"]))),fn=P.d.span(m||(m=Object(J.a)(["\n  font-weight: 300;\n"]))),gn=function(n){var e=n.country,t=n.setCountry,r=Object(P.e)();return e.length<1?null:Object(Q.jsxs)(xn,{text:r.text,elements:r.elements,to:"".concat(e.alpha3Code),onClick:function(){t(e)},children:[Object(Q.jsx)(jn,{src:e.flags.png}),Object(Q.jsxs)(pn,{children:[Object(Q.jsx)("h3",{children:e.name}),Object(Q.jsxs)(hn,{children:[Object(Q.jsxs)("p",{children:["Population: ",Object(Q.jsx)(fn,{children:e.population})]}),Object(Q.jsxs)("p",{children:["Region: ",Object(Q.jsx)(fn,{children:e.region})]}),Object(Q.jsxs)("p",{children:["Capital: ",Object(Q.jsx)(fn,{children:e.capital})]})]})]})]})},On=t(125),mn=t(50),wn=[{value:null,label:"All Regions"},{value:"africa",label:"Africa"},{value:"americas",label:"Americas"},{value:"asia",label:"Asia"},{value:"europe",label:"Europe"},{value:"oceania",label:"Oceania"}],vn=P.d.div(w||(w=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),yn=P.d.div(v||(v=Object(J.a)(["\n  margin-top: 40px;\n  display: flex;\n  justify-content: space-between;\n  gap: 70px;\n  flex-wrap: wrap;\n\n  ","  \n"])),G({flexDirection:"column"})),kn=P.d.div(y||(y=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  border-radius: 5px;\n  color: ",";\n  background: ",";\n  width: 20%;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n  ","\n\n  &:focus-within {\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);\n  }\n"])),(function(n){return n.text}),(function(n){return n.elements}),G({width:"100%",marginBottom:10})),Cn=P.d.input(k||(k=Object(J.a)(["\n  background: transparent;\n  border: none;\n  width: 100%;\n  padding: 10px;\n  color: ",";\n  \n\n  &:focus {\n    outline: none;\n    caret-color: ",";\n    color: ",";\n  }\n\n  &::placeholder {\n    color: ",";\n    padding-left: 10px;\n  }\n"])),(function(n){return n.text}),(function(n){return n.text}),(function(n){return n.text}),(function(n){return n.text})),Sn=P.d.div(C||(C=Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n\n  ","\n \n"])),G({flexDirection:"column",justifyContent:"center"})),zn=Object(P.d)(mn.a)(S||(S=Object(J.a)(["\n  .react-select__placeholder,\n  .react-select__single-value {\n    color: ",";\n  }\n\n  .react-select__option {\n    color: ",";\n  }\n\n  .react-select__control {\n    background-color: ",";\n    color: ",";\n    border-color: transparent;\n    padding: 10px;\n    border-radius: 5px;\n    width: 200px;\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n    ","\n  }\n\n  .react-select__menu {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.text}),(function(n){return n.text}),(function(n){return n.elements}),(function(n){return n.text}),G({width:"100%"}),(function(n){return n.text}),(function(n){return n.elements})),Ln=function(){var n=Object(T.useState)([]),e=Object(I.a)(n,2),t=e[0],r=e[1],c=Object(T.useState)(!0),o=Object(I.a)(c,2),i=o[0],a=o[1],l=Object(T.useState)(null),s=Object(I.a)(l,2),d=s[0],b=s[1],u=Object(T.useState)(null),x=Object(I.a)(u,2),j=x[0],p=x[1],h=Object(P.e)(),f=j?t.filter((function(n){return n.name.toLowerCase().includes(j)})):t,g=d?t.filter((function(n){return n.region.toLowerCase()===d})):null;Object(T.useEffect)((function(){var n=function(){var n=Object(un.a)(bn.a.mark((function n(){var e;return bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.get("https://restcountries.com/v2/all");case 2:e=n.sent,r(e.data),a(!1);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]);return Object(Q.jsxs)(vn,{children:[Object(Q.jsxs)(Sn,{children:[Object(Q.jsxs)(kn,{text:h.text,elements:h.elements,children:[Object(Q.jsx)(On.a,{}),Object(Q.jsx)(Cn,{text:h.text,type:"search",placeholder:"Search for a Country...",onChange:function(n){b(null),p(n.target.value)}})]}),Object(Q.jsx)(zn,{text:h.text,elements:h.elements,classNamePrefix:"react-select",className:"react-select-container",options:wn,onChange:function(n){b(n.value)},placeholder:"Filter By Region",theme:function(n){return Object(sn.a)(Object(sn.a)({},n),{},{colors:Object(sn.a)(Object(sn.a)({},n.colors),{},{primary25:"grey",primary:""})})}})]}),Object(Q.jsxs)(yn,{children:[i?Object(Q.jsx)(K.a,{style:{margin:"auto",marginTop:"100px"},type:"Puff",color:h.text,height:100,width:100}):null,d?g.map((function(n){return Object(Q.jsx)(gn,{country:n},n.numericCode)})):f.map((function(n){return Object(Q.jsx)(gn,{country:n},n.numericCode)}))]}),Object(Q.jsx)(F.a,{})]})},_n=P.d.div(z||(z=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 40px 50px;\n"]))),Dn=t(126),Bn=P.d.div(L||(L=Object(J.a)(["\n  width: 100%;\n  height: 90px;\n  background: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 3px 0 rgba(0,0,0,.2);\n"])),(function(n){return n.color})),Mn=P.d.h2(_||(_=Object(J.a)(["\n  color: ",";\n  font-weight: 600;\n  margin-left: 60px;\n  ","\n"])),(function(n){return n.color}),G({fontSize:14,marginLeft:20})),Rn=P.d.div(D||(D=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: ",";\n  margin-right: 60px;\n  cursor: pointer;\n  transition: .3s;\n  ","\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.color}),G({fontSize:14,marginRight:20})),Tn=P.d.button(B||(B=Object(J.a)(["\n  background: none;\n  border: none;\n  color: ",";\n  cursor: pointer;\n"])),(function(n){return n.color})),An=function(n){var e=n.handleTheme,t=Object(P.e)();return Object(Q.jsxs)(Bn,{color:t.elements,children:[Object(Q.jsx)(Mn,{color:t.text,children:"Where in the world?"}),Object(Q.jsxs)(Rn,{color:t.text,children:[Object(Q.jsx)(Dn.a,{}),Object(Q.jsx)(Tn,{onClick:e,color:t.text,children:"Dark Mode"})]})]})},En=Object(P.c)(M||(M=Object(J.a)(["\n\n\n  :root {\n\n    //Colors\n    --dark-blue: hsl(209, 23%, 22%); //(Dark Mode Elements)\n    --very-dark-blue: hsl(207, 26%, 17%); // (Dark Mode Background)\n    --very-dark-blue-text: hsl(200, 15%, 8%); // (Light Mode Text)\n    --dark-gray: hsl(0, 0%, 52%); // (Light Mode Input)\n    --very-dark-gray: hsl(0, 0%, 98%); // (Light Mode Background)\n    --white: hsl(0, 0%, 100%); // (Dark Mode Text & Light Mode Elements)\n\n    // Fonts\n \n\n    // Font-Size\n    --fs-homepage-items: 18px;\n    --fs-detail-page: 22px;\n  }\n"]))),Nn=Object(P.b)(R||(R=Object(J.a)(["\n  ","\n\n    /*\n    1. Use a more-intuitive box-sizing model.\n  */\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  /*\n    2. Remove default margin\n  */\n  * {\n    margin: 0;\n  }\n  /*\n    3. Allow percentage-based heights in the application\n  */\n  html, body {\n    height: 100%;\n  }\n  /*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    background: ",";\n    color: ",";\n    font-family:'Nunito Sans', sans-serif;\n  }\n  /*\n    6. Improve media defaults\n  */\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  /*\n    7. Remove built-in form typography styles\n  */\n  input, button, textarea, select {\n    font: inherit;\n  }\n  /*\n    8. Avoid text overflows\n  */\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  /*\n    9. Create a root stacking context\n  */\n  #root, #__next {\n    isolation: isolate;\n  }\n\n  html {\n    &::-webkit-scrollbar-track\n{\n\tborder-radius: 10px;\n\tbackground-color: ",";\n}\n\n&::-webkit-scrollbar\n{\n\twidth: 15px;\n\tbackground-color: ",";\n}\n\n&::-webkit-scrollbar-thumb\n{\n\tborder-radius: 8px;\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: ","  ;\n}\n  }\n"])),En,(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.elements}),(function(n){return n.theme.elements}),(function(n){return n.theme.text})),In={body:"hsl(0, 0%, 98%)",text:"hsl(200, 15%, 8%)",elements:"hsl(0, 0%, 100%)",input:"hsl(0, 0%, 52%)"},Fn={body:"hsl(207, 26%, 17%)",text:"hsl(0, 0%, 100%)",elements:"hsl(209, 23%, 22%)",input:"hsl(200, 15%, 8%)"},Pn=function(){var n=Object(T.useState)([]),e=Object(I.a)(n,2),t=e[0],r=e[1],c=Object(T.useState)("light"),o=Object(I.a)(c,2),i=o[0],a=o[1];return Object(Q.jsx)(P.a,{theme:"light"===i?In:Fn,children:Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(Nn,{}),Object(Q.jsx)(An,{handleTheme:function(){a("light"===i?"dark":"light")}}),Object(Q.jsx)(_n,{children:Object(Q.jsxs)(F.d,{children:[Object(Q.jsx)(F.b,{path:"/",element:Object(Q.jsx)(Ln,{setCountry:r})}),Object(Q.jsx)(F.b,{path:"/:name",element:Object(Q.jsx)(ln,{country:t})})]})})]})})};N.a.render(Object(Q.jsx)(A.a,{children:Object(Q.jsx)(Pn,{})}),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.5b692604.chunk.js.map