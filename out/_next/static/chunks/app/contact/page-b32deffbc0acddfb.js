(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{3065:(e,s,a)=>{Promise.resolve().then(a.bind(a,6215))},6215:(e,s,a)=>{"use strict";a.d(s,{default:()=>m});var l=a(5155),t=a(2177),r=a(2115),i=a(5518);function m(){let[e,s]=(0,r.useState)(""),{register:a,handleSubmit:m,reset:n,formState:{errors:o,isSubmitting:c}}=(0,t.mN)({defaultValues:{nom:""}}),x=async e=>{try{let a={nom:e.nom,email:e.email,objet:e.objet,message:e.message};await i.Ay.send("service_r5xdpwo","template_38y2ib5",a,"CBEyuwpu_0GUrmeuT"),s("Votre message a \xe9t\xe9 envoy\xe9 avec succ\xe8s !"),n(),setTimeout(()=>s(""),5e3)}catch(e){console.error("\xc9chec de l'envoi de l'email:",e)}};return(0,l.jsx)("div",{className:"flex justify-center mt-10 min-h-screen",children:(0,l.jsxs)("form",{onSubmit:m(x),className:"flex gap-4 flex-col min-w-96",children:[(0,l.jsxs)("label",{className:"flex gap-2 flex-col",children:["Nom:",(0,l.jsx)("input",{...a("nom",{required:"Champ obligatoire"}),type:"text",className:"border-2 rounded-lg p-2"}),o.nom&&(0,l.jsx)("span",{className:"text-red-500 text-xs",children:o.nom.message})]}),(0,l.jsxs)("label",{className:"flex gap-2 flex-col",children:["Email:",(0,l.jsx)("input",{...a("email",{required:"Champ obligatoire",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Adresse email invalide"}}),type:"text",className:"border-2 rounded-lg p-2"}),o.email&&(0,l.jsx)("span",{className:"text-red-500 text-xs",children:o.email.message})]}),(0,l.jsxs)("label",{className:"flex gap-2 flex-col",children:["Objet:",(0,l.jsx)("input",{...a("objet",{required:"Champ obligatoire"}),type:"text",className:"border-2 rounded-lg p-2"}),o.objet&&(0,l.jsx)("span",{className:"text-red-500 text-xs",children:o.objet.message})]}),(0,l.jsxs)("label",{className:"flex gap-2 flex-col",children:["Message:",(0,l.jsx)("textarea",{...a("message",{required:"Champ obligatoire"}),className:"border-2 rounded-lg p-2",rows:5}),o.message&&(0,l.jsx)("span",{className:"text-red-500 text-xs",children:o.message.message})]}),e&&(0,l.jsx)("p",{className:"text-green-600",children:e}),Object.keys(o).length>0&&(0,l.jsx)("p",{className:"text-red-500 text-sm",children:"Veuillez remplir tous les champs obligatoires."}),(0,l.jsxs)("div",{className:"flex justify-center gap-4 my-8",children:[(0,l.jsx)("input",{type:"submit",value:c?"Envoi...":"Envoyer",className:"bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700",disabled:c}),(0,l.jsx)("input",{type:"button",value:"Annuler",className:"bg-gray-600 text-white rounded-lg p-2 cursor-pointer hover:bg-gray-700",onClick:()=>n()})]})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[330,441,684,358],()=>s(3065)),_N_E=e.O()}]);