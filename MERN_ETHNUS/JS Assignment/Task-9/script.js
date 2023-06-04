let inputs = document.getElementsByClassName("input_fields");
console.log(inputs);
let errors = document.getElementsByClassName("error");

let regexobj = {
  0: /^[a-zA-Z\s]+$/,
  1: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  2: /^[\s\S]*$/,
  3: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
  4: /^[\s\S]*$/,
  5: /^[\s\S]*$/,
};

function handle(event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      inputs[i].style.border = "2px solid #ffc900";
      let error = document.getElementById(`error_${inputs[i].id}`);
      error.style.display = "inline";
    } else {
      if (regexobj[i].test(inputs[i].value)) {
        console.log("executed");
        inputs[i].style.border = "";
        let error = document.getElementById(`error_${inputs[i].id}`);
        error.style.display = "none";
    } else {
          console.log("executed_2");
        inputs[i].style.border = "2px solid #ffc900";
        let error = document.getElementById(`error_${inputs[i].id}`);
        error.style.display = "inline";
      }
    }
  }
}
