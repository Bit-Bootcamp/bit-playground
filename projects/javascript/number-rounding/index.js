function roundNumber() {
  /* Get input value and store it in a variable */
  let inputValue = document.getElementById("number-input").value;

  if (isNaN(inputValue)) {
    /* IF INPUT IS NOT A NUMBER */
    console.log("Input value'akaman stringa");
    alert("Please enter a valid number");
  } else {
    /* ELSE */
    console.log("Input value'akaman numbea ");
    alert(`The text you have entered is: ${Math.round(inputValue)}`);
  }
}
