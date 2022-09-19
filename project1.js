const enter = document.querySelector("#enter");
const start = document.querySelector("#start")

const check = localStorage.getItem("OTP");
start.addEventListener("click", e => {
    const num = document.getElementById("enter").value;
    if(num === check)
    {
        window.open("project2.html");
    }

    else{
        alert("You Have Entered the wrong OTP");
    }


});
