let time = document.getElementById("time_d");
let date = document.getElementById("date_d");

function d_time(){
    let data = new Date();
    time.innerText = data;
}

function d_date(){
    let data = new Date();
    date.innerText = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;
}