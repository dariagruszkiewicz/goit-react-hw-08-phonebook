"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[535],{1535:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(9434),a="ContactForm_form__dhl+T",s=n(3634),c=function(e){return e.contacts.items},i=function(e){return e.contacts.error},o=function(e){return e.contacts.error},l=function(e){return e.filter},u=n(184),d=function(){var e=(0,r.v9)(c);console.log(e);var t=(0,r.I0)();return(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r={name:n.target.elements.text.value,number:n.target.elements.tel.value};e.map((function(e){return e.name})).includes(r.name)?alert("".concat(r.name," is alredy in contacts.")):t((0,s.uK)(r)),n.target.reset()},className:a,children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",name:"text",pattern:"^[A-Za-z.'\\- ]+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{type:"tel",name:"tel",pattern:"^\\+?\\d{1,4}?\\s?\\(?\\d{1,4}?\\)?\\s?\\d{1,4}\\s?\\d{1,4}\\s?\\d{1,9}$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})},m="ContactList_item_contact__7f2K5",h=function(){var e=(0,r.v9)(c),t=(0,r.v9)(l),n=(0,r.v9)(o),a=(0,r.v9)(i),d=(0,r.I0)(),h=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,u.jsxs)("ul",{children:[n&&!a&&(0,u.jsx)("p",{children:"Is loading..."}),a&&(0,u.jsx)("p",{children:a}),h.map((function(e){return(0,u.jsxs)("li",{className:m,children:[e.name,": ",e.number,(0,u.jsx)("button",{type:"button",name:e.name,onClick:function(){return d((0,s.GK)(e.id))},children:"Delete"})]},e.id)}))]})},f=n(8429),p=function(){var e=(0,r.I0)();return(0,u.jsxs)("label",{children:["Find contacts by name",(0,u.jsx)("input",{type:"text",name:"filter",onChange:function(t){e((0,f.W)(t.target.value))}})]})},x=n(4270),j=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.q,{children:(0,u.jsx)("title",{children:"Contacts"})}),(0,u.jsx)(d,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(p,{}),(0,u.jsx)(h,{})]})}}}]);
//# sourceMappingURL=535.df5fce76.chunk.js.map