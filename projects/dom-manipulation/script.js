/* Setting inner content of an Element */
function setText() {
  document.getElementById("demo").innerHTML = "Hello World";
}

/* Replacing a DOM element with a new one */
function replaceText() {
  var oldElement = document.getElementById("old");
  var newElement = document.createElement("p");
  newElement.innerHTML = "<b>Hello new text!</b>";

  // replace oldElement with newElement
  oldElement.parentNode.replaceChild(newElement, oldElement);
}

/* EMpty an Element */
function unwrapElement() {
  var el = document.getElementById("element-content");
  el.innerHTML = "";
}

/* toggle fullscreen */
function openFullscreen() {
  var elem = document.getElementById("myVideo");

  if (document.fullscreenEnabled) {
    /* Show the element in fullscreen */
    elem.requestFullscreen();
  }
}

/* print element content to the console */
function printContent() {
  var el = document.querySelector("h2");
  text = el.textContent || el.innerText;
  console.log(text);
}

/* When F key pressed, make myVideo element full screen and background of the body Black */
document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    document.body.style = "color: white; background-color: #111111";

    let elem = document.getElementById("myVideo");

    if (document.fullscreenEnabled) {
      /* Show the element in fullscreen */
      elem.requestFullscreen();
    }
  }
});
