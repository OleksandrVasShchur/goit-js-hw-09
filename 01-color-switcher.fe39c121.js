let t=null;const e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,console.log(n)}),1e3)})),o.addEventListener("click",(function(){e.setAttribute("disabled",!1),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.fe39c121.js.map
