!function(){var t=null,e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]"),r=document.querySelector("body");o.setAttribute("disabled",!0),e.addEventListener("click",(function(){return e.setAttribute("disabled",!0),o.removeAttribute("disabled"),void(t=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log(r)}),1e3))})),o.addEventListener("click",(function(){clearInterval(t),o.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.693be27d.js.map
