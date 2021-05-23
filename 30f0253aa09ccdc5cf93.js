import"../css/reset.css";import"../css/style.css";import"../css/splide.min.css";import header from"./modules/components/header";import{home,mountSliders}from"./modules/views/home";import menu from"./modules/views/menu";import contact from"./modules/views/contact";const displayController=(()=>{const e=()=>({content:document.querySelector("#content"),title:document.querySelector(".title__text"),homeItem:document.querySelector("#home"),menuItem:document.querySelector("#menu"),menuButton:document.querySelector(".button"),contactItem:document.querySelector("#contact")}),t=({section:t,title:n})=>{let o=e().content.lastChild;var m;(e=>"header"==e.id)(o)?e().content.appendChild(t):e().content.replaceChild(t,o),m=n,e().title.textContent=m};return e().content.appendChild(header()),t({title:"Home",section:home()}),{renderSection:t,elements:e}})(),elements=displayController.elements(),renderSection=displayController.renderSection,homeItem=elements.homeItem,menuItem=elements.menuItem,menuButton=elements.menuButton,contactItem=elements.contactItem;homeItem.addEventListener("click",(e=>{e.preventDefault(),renderSection({section:home(),title:"Home"}),mountSliders()})),menuItem.addEventListener("click",(e=>{e.preventDefault(),renderSection({section:menu(),title:"Menu"})})),menuButton.addEventListener("click",(e=>{e.preventDefault(),console.log(e.target),renderSection({section:menu(),title:"Menu"})})),contactItem.addEventListener("click",(e=>{e.preventDefault(),renderSection({section:contact(),title:"Contact"})}));