
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  let changeColors = null;

  const buttonStart = document.querySelector("button[data-start]");
  const buttonStop = document.querySelector("button[data-stop]");
 const bodyColor = document.querySelector("body");
// buttonStop.setAttribute("disabled", true);

  buttonStart.addEventListener("click", onClickStart);

  buttonStop.addEventListener("click", onClickStop);
 
function onClickStart() { 
 buttonStart.setAttribute("disabled", true);
//  buttonStop.setAttribute("disabled", false);
changeColors = setInterval(() => {
    bodyColor.style.backgroundColor = getRandomHexColor()
    console.log(bodyColor);
   
  }, 1000);
}



function onClickStop() {
  // buttonStart.setAttribute("disabled", true);
  // buttonStop.setAttribute("disabled", true);
  clearInterval(changeColors)
}
