import{r as s,j as t}from"./index-BN810mbR.js";import{C as n}from"./CardNavigation--OutlOlv.js";import{T as c}from"./TitleSlideAnimation-D0r3oYpP.js";function h(){const o="/Riset/dist/",[i,a]=s.useState([]),r=["Chill Achievement","Narrow Win","Epic Feat"];return s.useEffect(()=>{fetch("https://api.npoint.io/39c348d0c28f1d79ea00").then(e=>e.json()).then(e=>a(e)).catch(e=>console.log("error:",e))},[]),t.jsxs("div",{className:"min-h-screen bg-custom-bg",children:[t.jsx("div",{className:"absolute top-[-5] right-0 w-64 h-64 custom-radius opacity-100 blur-3xl z-1 bg-custom-button-text",style:{marginTop:"-100px"}}),t.jsxs("div",{className:"container mx-auto px-4 border-0 overflow-hidden",style:{paddingTop:"100px"},children:[t.jsxs("div",{className:"container mx-auto",children:[t.jsx("h1",{className:"font-bold text-custom-headline gradient-text ml-1",style:{fontSize:"40px",marginBottom:"-35px"},children:"My"}),t.jsx("h1",{className:"font-bold text-custom-headline gradient-text",style:{fontSize:"70px",marginBottom:"-35px"},children:"Achievement"}),t.jsx("h2",{className:"font-bold mb-2",children:t.jsx(c,{color:"text-custom-subtitle",texts:r,size:"2.25rem"})})]}),t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 mb-32",children:i.map((e,l)=>t.jsx("div",{className:"relative w-full h-64 bg-cover bg-center z-10 hover-slide flex justify-center items-center shadow",style:{backgroundImage:`url(${o+"img/sertif/"+e.image})`},children:t.jsxs("div",{className:"text-white text-center relative z-10 text-overlay-portofolio",children:[t.jsx("div",{className:"title-portofolio px-3",children:e.title}),t.jsx("a",{href:`${o+"img/sertif/"+e.image}`,className:"px-12 py-4 button-portofolio",target:"_blank",children:"VIEW"})]})},l))})]}),t.jsx(n,{})]})}export{h as default};
