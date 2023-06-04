let inputs = document.getElementsByClassName("input_fields");
console.log(inputs)

function handle(event){
    event.preventDefault();

    for(let i = 0; i<inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].style.border = "2px solid red";

        }
        else{
            inputs[i].style.border = "";
        }
    }
}