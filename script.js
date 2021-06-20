//const text = "My viewers on Twitch are the best!! <3";

let index = 0;
let field = document.getElementById("autowrite")


function auto() {

  let text = document.getElementById("text").value
  
  function writeText() {
    field.innerText = text.slice(0, index);
  
      index++;
  
      if (index > text.length) {
          index = 0;
      }
  }
  
  setInterval(writeText, 100);


}


