document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".navbar-toggler"),t=document.querySelector("#collapsible"),n=document.querySelector(".msg-form");e.addEventListener("click",(()=>{e.classList.toggle("expanded"),t.classList.toggle("expanded")})),n&&n.addEventListener("submit",(e=>{e.preventDefault(),(async e=>{const t=await fetch("main.php",{method:"POST",body:e});return t.ok?await t.json():"Ошибка"})(new FormData(n)).then((e=>{console.log(e),n.reset()}))}))}));
//# sourceMappingURL=main.js.map