(self["webpackChunkaauevora"]=self["webpackChunkaauevora"]||[]).push([[297],{8862:function(e,n,a){var t=a(2109),r=a(7854),i=a(5005),o=a(2104),u=a(1702),l=a(7293),s=r.Array,c=i("JSON","stringify"),m=u(/./.exec),d=u("".charAt),f=u("".charCodeAt),p=u("".replace),g=u(1..toString),v=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,k=/^[\uDC00-\uDFFF]$/,_=function(e,n,a){var t=d(a,n-1),r=d(a,n+1);return m(h,e)&&!m(k,r)||m(k,e)&&!m(h,t)?"\\u"+g(f(e,0),16):e},F=l((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&t({target:"JSON",stat:!0,forced:F},{stringify:function(e,n,a){for(var t=0,r=arguments.length,i=s(r);t<r;t++)i[t]=arguments[t];var u=o(c,null,i);return"string"==typeof u?p(u,v,_):u}})},8464:function(e,n,a){"use strict";a.d(n,{Z:function(){return m}});a(9254);var t=a(6252),r=a(3577),i={class:"button"},o=["href"];function u(e,n,a,u,l,s){return(0,t.wg)(),(0,t.iD)("button",i,[(0,t.Uk)((0,r.zw)(a.buttonText)+" ",1),(0,t.WI)(e.$slots,"default",{},void 0,!0),a.link?((0,t.wg)(),(0,t.iD)("a",{key:0,href:a.link,rel:"noreferrer nooppener",target:"_blank"},null,8,o)):(0,t.kq)("",!0)])}var l={name:"Button",props:{buttonText:String,link:String}},s=a(3744);const c=(0,s.Z)(l,[["render",u],["__scopeId","data-v-5bd2d029"]]);var m=c},1435:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return E}});a(8309);var t=a(6252),r=a(9963),i=a(3577),o=a(7691),u=function(e){return(0,t.dD)("data-v-17f7f3d9"),e=e(),(0,t.Cn)(),e},l={class:"denuncias"},s={key:0,class:"contactForm"},c=u((function(){return(0,t._)("div",{class:"contactInfo"},[(0,t._)("h2",null," Tens algo a denunciar? "),(0,t._)("p",null,[(0,t.Uk)(" Não te preocupes, porque não estás sozinh@. Estamos aqui para te ajudar. "),(0,t._)("br"),(0,t.Uk)(" Toda a informação que nos for transmitida será mantida em anonimato! "),(0,t._)("br"),(0,t.Uk)(" Não fiques em silêncio, contacta-nos!")]),(0,t._)("div",{class:"contactIcons"},[(0,t._)("ul",null,[(0,t._)("a",{href:"mailto:gape@aaue.pt"},[(0,t._)("i",{class:"fas fa-envelope","aria-hidden":"true"},[(0,t._)("span",null,"Email")]),(0,t._)("li",null,"gape@aaue.pt")])])])],-1)})),m=u((function(){return(0,t._)("label",{for:"Contacto"},[(0,t.Uk)("Nome / Contacto "),(0,t._)("span",null,"(Não é obrigatório)")],-1)})),d=u((function(){return(0,t._)("label",{for:"mensagem"},[(0,t.Uk)("Mensagem "),(0,t._)("span",null,"*")],-1)})),f={key:1,class:"modal"},p={key:0,src:o,alt:""},g={key:1,class:"sucess"},v=u((function(){return(0,t._)("h1",null,"Mensagem enviada",-1)})),h=u((function(){return(0,t._)("i",{class:"far fa-check-circle sucessIcon"},null,-1)})),k={key:2,class:"failure"},_=u((function(){return(0,t._)("h1",null,"Ocorreu um erro",-1)})),F=u((function(){return(0,t._)("i",{class:"fas fa-exclamation-circle errorIcon"},null,-1)})),b=u((function(){return(0,t._)("p",null," Por favor volte a tentar mais tarde ou envie uma mensagem para gape@aaue.pt ",-1)}));function y(e,n,a,o,u,y){var D=(0,t.up)("Button");return(0,t.wg)(),(0,t.iD)("section",l,[u.sendingEmail?((0,t.wg)(),(0,t.iD)("div",f,[u.emailSent||u.emailFailed?u.emailSent?((0,t.wg)(),(0,t.iD)("div",g,[v,h,(0,t.Wm)(D,{buttonText:"Voltar",onClick:y.resetEmailSendingValues},null,8,["onClick"])])):u.emailFailed?((0,t.wg)(),(0,t.iD)("div",k,[_,F,b,(0,t.Wm)(D,{buttonText:"Voltar",onClick:y.resetEmailSendingValues},null,8,["onClick"])])):(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("img",p))])):((0,t.wg)(),(0,t.iD)("div",s,[c,(0,t._)("form",{action:"POST",onSubmit:n[2]||(n[2]=(0,r.iM)((function(){return y.sendFormData&&y.sendFormData.apply(y,arguments)}),["prevent"]))},[m,(0,t.wy)((0,t._)("input",{type:"text",placeholder:"Nome",id:"name","onUpdate:modelValue":n[0]||(n[0]=function(e){return o.name=e})},null,512),[[r.nr,o.name]]),d,(0,t.wy)((0,t._)("textarea",{class:"mensagem",placeholder:"Mensagem",id:"mensagem","onUpdate:modelValue":n[1]||(n[1]=function(e){return o.mensagem=e}),required:""},null,512),[[r.nr,o.mensagem]]),(0,t._)("div",{class:(0,i.C_)(["buttons",{isActive:o.isFormFilled}])},[(0,t.Wm)(D,{buttonText:"Enviar mensagem",class:"g-recaptcha","data-sitekey":"6LcQvp4cAAAAAGNx5TXt5zWBQ1lHd_mhHyit-Plq","data-callback":"onSubmit","data-action":"submit"})],2)],32)]))])}var D=a(8534),w=(a(5666),a(8862),a(1539),a(2262)),S=a(8464),x={name:"Denuncias",data:function(){return{emailSent:!1,emailFailed:!1,sendingEmail:!1,name:"",email:"",mensagem:"",isFormFilled:!1}},setup:function(){var e=(0,w.iH)(""),n=(0,w.iH)(""),a=(0,w.iH)(""),r=(0,w.iH)(!1);return(0,t.YP)([e,n],(function(){n.value?r.value=!0:r.value=!1})),{isFormFilled:r,name:e,email:a,mensagem:n}},components:{Button:S.Z},methods:{sendFormData:function(){var e=this;return(0,D.Z)(regeneratorRuntime.mark((function n(){var a,t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isFormFilled){n.next=2;break}return n.abrupt("return");case 2:return e.sendingEmail=!0,a={sendTo:"denuncias@aaue.pt",subject:"Denúncias",message:{origem:"AAUE.pt",name:e.name?e.name:"Anónimo",email:"Anónimo",text:e.mensagem}},t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)},n.next=7,fetch("https://blogposting-api.herokuapp.com/api/sendEmail",t).then(function(){var n=(0,D.Z)(regeneratorRuntime.mark((function n(a){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.ok&&(e.emailSent=!0,e.clearFormInfo());case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(n){e.emailFailed=!0,console.log(n.message)}));case 7:case"end":return n.stop()}}),n)})))()},clearFormInfo:function(){this.name="",this.mensagem=""},resetEmailSendingValues:function(){this.sendingEmail=!1,this.emailSent=!1,this.emailFailed=!1}}},A=a(3744);const C=(0,A.Z)(x,[["render",y],["__scopeId","data-v-17f7f3d9"]]);var E=C}}]);
//# sourceMappingURL=Denuncias-legacy.00582d59.js.map