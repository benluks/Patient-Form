(this["webpackJsonppatient-form-showcase"]=this["webpackJsonppatient-form-showcase"]||[]).push([[0],{154:function(e,t,n){},195:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),s=n(28),a=n.n(s),l=(n(195),n(154),n(348)),c=n(343),o=n(85),d=n(50),u=n(132),h={fontStyle:{fontSize:"18px"},headerStyle:{background:"#fff"},qCardStyle:{border:"none",overflow:"wrap",whiteSpace:"none",wordWrap:"break-word"}},j=n.p+"static/media/charite.c1bfc3c2.png",b=n(6);var m=function(e){var t=e.children;return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(u.Header,{style:h.headerStyle,children:Object(b.jsx)(c.a,{style:{padding:"30px"},src:j,width:250})}),Object(b.jsx)(u.Content,{style:{background:"white"},children:Object(b.jsx)(o.a,{justify:"center",children:Object(b.jsx)(d.a,{span:12,children:t})})}),Object(b.jsx)(u.Footer,{children:"Footer"})]})},f=n(122),g=n(346),p=n(123),x=[{title:"Spitzenrisiken",risks:["Verletzungen von Blutgef\xe4\xdfen","Infektionen","Nervenverletzungen","Chronische Schmerzen und bleibende L\xe4hmungen","Thrombose/Embolie"]},{title:"Allgemeinrisiken",risks:["Haut-, Gewebe- und Nervensch\xe4den","Reaktionen auf Medikamente","Stoffwechselentgleisung","Verwirrtheit"]},{title:"Narkoserisiken",risks:["Aspiration","Verschluss der Luftwege","Schluckbeschwerden","Wachheit"]}],O=n(345),y=g.a.Title;var w=function(e){var t=e.title,n=e.list;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{level:4,children:t}),Object(b.jsx)(O.b,{size:"small",dataSource:n,renderItem:function(e){return Object(b.jsx)(O.b.Item,{children:e})}})]})},v=g.a.Title,S=g.a.Paragraph;var k=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{children:"Aufkl\xe4rung"}),Object(b.jsx)(S,{style:h.fontStyle,children:"Dieser Bogen wird Sie auf Ihren geplanten Eingriff vorbereiten und Ihre/n An\xe4sthesistin/en mit wichtigen Infos versorgen."}),Object(b.jsx)(v,{level:2,children:"Bet\xe4ubung"}),Object(b.jsx)(S,{style:h.fontStyle,children:"Bei Ihrem geplanten Eingriff werden Sie voraussichtlich unter Narkose gesetzt oder es wird eine Regionalan\xe4sthesie durchgef\xfchrt, damit Sie keine Schmerzen versp\xfcren. M\xf6glich ist auch, dass beide Verfahren kombiniert werden."}),Object(b.jsx)(v,{level:2,children:"Risiken"}),Object(b.jsx)(S,{style:h.fontStyle,children:"Ihr/e An\xe4sthesist/in wird w\xe4hrend des gesamten Eingriffs Ihre Vitalfunktionen \xfcberwachen und falls erforderlich, unterst\xfctzen. Unter Umst\xe4nden kann es dabei zu Komplikationen kommen, die weitere Ma\xdfnahmen erfordern."})]})};var T=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{}),x.map((function(e,t){return Object(b.jsx)(w,{title:e.title,list:e.risks},t)}))]})},q=n(351),I=n(130),M=["","#6D176B","#8E0000"],z=g.a.Title;var F=function(e){var t=e.timeline;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z,{level:2,style:{marginBottom:"48px"},children:"Vor der Operation"}),Object(b.jsxs)(q.a,{children:[t.map((function(e,t){return Object(b.jsxs)(q.a.Item,{dot:Object(b.jsx)(I.a,{style:{fontSize:"16px",color:M[t]}}),children:[Object(b.jsx)("b",{className:"timeline-time",children:e.time}),Object(b.jsx)("p",{className:"timeline-event",style:{padding:"48px 0",text:"bold"},children:e.rule})]},t)})),Object(b.jsx)(q.a.Item,{style:{paddingLeft:"0"}})]})]})},W=[{time:"Ab 6 Stunden vor der Operation",rule:"Kein Essen"},{time:"2-6 Stunden vor der Operation",rule:"Nur noch Wasser trinken"},{time:"Ab 2 Stunden vor der Operation",rule:"Keine Fl\xfcssigkeit mehr"}],B=n.p+"static/media/aufklaerung.5deb3a21.png";var N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(c.a,{style:{padding:"48px 160px"},src:B}),Object(b.jsxs)(g.a,{style:{marginBottom:"150px"},children:[Object(b.jsx)(T,{}),Object(b.jsx)(F,{timeline:W})]}),Object(b.jsx)(p.a,{type:"primary",style:{margin:"48px"},children:Object(b.jsx)(f.b,{to:"/fragebogen",children:"Zum Fragebogen"})})]})};var A=function(){return Object(b.jsx)(m,{children:Object(b.jsx)(N,{})})},C=(n(272),n(183)),E=n(187),V=n(344),D=n(342),G=n(347),P=n(341),Q=n(349),K=n(350);var R=function(e){var t=e.question,n=(e.form,e.handleChange);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(V.a.Item,{rules:[{required:t.isMandatory,message:"Please enter your answer here"}],children:Object(b.jsxs)(Q.a.Group,{style:{float:"left"},onChange:n,placeholder:"Bitte ja oder nein w\xe4hlen",children:[Object(b.jsx)(Q.a,{value:!0,children:"Ja"}),Object(b.jsx)(Q.a,{value:!1,children:"Nein"})]})}),Object(b.jsx)(V.a.Item,{noStyle:!0,shouldUpdate:function(e,n){return e[t.title]!==n[t.title]},children:function(e){return(0,e.getFieldValue)(t.title)?t.ifTrueQuestion&&Object(b.jsx)(V.a.Item,{label:t.ifTrueQuestion,rules:[{required:!0,message:"Please enter your answer here"}],children:Object(b.jsx)(K.a,{})}):null}})]})},J=n(95);var L=function(e){var t=e.quest,n=J.a.Option;return Object(b.jsx)(J.a,{placeholder:"".concat(t.title," bitte w\xe4hlen"),children:t.dropdown.map((function(e,t){return Object(b.jsx)(n,{value:e,children:e},t)}))})},U=[{title:"age",question:"Wie alt sind Sie?",isMandatory:!0,dataType:"date"},{title:"height",question:"Wie gro\xdf sind Sie in cm?",isMandatory:!0,dataType:"int"},{title:"weight",question:"Wieviel Kilogramm wiegen Sie?",isMandatory:!0,dataType:"int"},{title:"genderChoice",question:"Mit welchem Geschlecht identifizieren Sie sich?",isMandatory:!1,dropdown:["m\xe4nnlich","weiblich","divers"]},{title:"genderBiological",question:"Welches Geschlecht wurde Ihnen bei Geburt zugewiesen?",isMandatory:!0,dropdown:["m\xe4nnlich","weiblich"]},{title:"previousTreatment",question:"Wurden Sie in den letzten 4 Wochen \xe4rztlich behandelt?",isMandatory:!0,dataType:"bool",ifTrueQuestion:"Welche Behandlung wurde durchgef\xfchrt?",trueDataType:"string"},{title:"infect",question:"Wurde bei Ihnen in den letzten 4 Wochen eine Infektion festgestellt?",isMandatory:!0,dataType:"bool",ifTrueQuestion:"Welche Infektion wurde festgestellt?",trueDataType:"string"},{title:"medication",question:"Nehmen Sie regelm\xe4\xdfig Medikamente?",isMandatory:!0,dropdown:["Aspirin","Marcumar","Mirtazapin","Serotonin"],ifTrueQuestion:"Wie hoch ist die Dosis in mg?",trueDataType:"int"},{title:"smoke",question:"Rauchen Sie?",dataType:"bool",isMandatory:!0},{title:"telephoneNumber",question:"Damit Ihr An\xe4sthesist Sie erreichen kann, bitte geben Sie Ihre Telefonnummer ein:",isMandatory:!0,dataType:"int"}],H=n.p+"static/media/fragen.9e84c2b6.png",Z=g.a.Title;var X=function(){var e=V.a.useForm(),t=Object(E.a)(e,1)[0];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(c.a,{style:{padding:"48px 160px"},src:H}),Object(b.jsxs)(V.a,{form:t,style:{marginBotton:"48px"},layout:"vertical",name:"basic",children:[Object(b.jsx)(Z,{children:"Fragebogen"}),U.map((function(e,n){return"bool"===e.dataType?Object(b.jsx)(D.a,{title:e.question,style:h.qCardStyle,children:Object(b.jsx)(R,{question:e,form:t,handleChange:function(n){t.setFieldsValue(Object(C.a)({},e.title,n.target.value))}},n)}):Object(b.jsx)(D.a,{title:e.question,style:h.qCardStyle,children:Object(b.jsxs)(V.a.Item,{style:{color:"red"},rules:[{required:e.isMandatory,message:"Please enter your answer here"}],children:["int"===e.dataType&&Object(b.jsx)(G.a,{style:{float:"left"},min:0}),"date"===e.dataType&&Object(b.jsx)(P.a,{style:{float:"left"}}),e.dropdown&&Object(b.jsx)(L,{quest:e,style:{float:"left"}})]},n)})})),Object(b.jsx)(p.a,{type:"primary",htmlType:"submit",style:{margin:"0 0 4rem 1.5rem"},children:"Submit"})]})]})};var Y=function(e){return e.location,Object(i.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(b.jsx)(m,{children:Object(b.jsx)(X,{})})},$=n(29);var _=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(f.a,{children:Object(b.jsxs)($.c,{children:[Object(b.jsx)($.a,{exact:!0,path:"/Patient-Form",children:Object(b.jsx)(A,{})}),Object(b.jsx)($.a,{exact:!0,path:"/fragebogen",children:Object(b.jsx)(Y,{})})]})})})};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.0170258a.chunk.js.map