
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let changeColors = null;

  const buttonStart = document.querySelector("button[data-start]");
  const buttonStop = document.querySelector("button[data-stop]");
 const bodyColor = document.querySelector("body");

  buttonStart.addEventListener("click", onClickStart);

  buttonStop.addEventListener("click", onClickStop);
  buttonStop.setAttribute("disabled", true);
  
function onClickStart() { 
 buttonStart.setAttribute("disabled", true);
 buttonStop.removeAttribute("disabled");
changeColors = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor()
    console.log(bodyColor);
   
  }, 1000);
  return;
}



function onClickStop() {
  
  clearInterval(changeColors)
   buttonStart.removeAttribute("disabled");
   buttonStop.setAttribute("disabled", false);
return;
}

