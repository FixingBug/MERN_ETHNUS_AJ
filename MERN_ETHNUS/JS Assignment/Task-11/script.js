let inputs = document.getElementsByClassName("input_fields");
console.log(inputs);
let errors = document.getElementsByClassName("error");
let pass = document.getElementById("4");
let repass = document.getElementById("5");
let concent = document.getElementById("concent");
let regexobj = {
  0: /^[a-zA-Z\s]+$/,
  1: /^[a-zA-Z\s]+$/,
  2: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  3: /^[\s\S]*$/,
  4: /^[\s\S]*$/,
  5: /^(0?[1-9]|[1-9][0-9]|[1][0-1][0-9]|120)$/,
  6: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
  7: /^[\s\S]*$/,
  8: /^[\s\S]*$/,
};

function handle(event) {
  event.preventDefault();

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
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
        let error = document.getElementById(`error_${inputs[i].id}`);
        error.style.display = "inline";
      }
    }
  }
  if (!concent.checked) {
    let error = document.getElementById("concent_error");
    error.style.display = "inline";
  } else {
    let error = document.getElementById("concent_error");
    error.style.display = "none";
  }

  if (pass.value != repass.value) {
    let error = document.getElementById("error_5");
    error.style.display = "inline";
  } else {
    let error = document.getElementById("error_5");
    error.style.display = "none";
  }
}
