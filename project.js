
const start = document.querySelector("#start");
const search = document.querySelector("#search");

if (start){
    start.addEventListener("click", e => {
        const email = document.getElementById('search').value;
        console.log(email);
        const number = Math.random() * 10000 + 1;
        const OTP1 = Math.ceil(number);
        console.log(OTP1);
        sendMail(OTP1, email);
        
    });
}

async function sendMail(OTP1, email) {

    try {
        await emailjs.send("service_lia22y2","template_wf0f6ap",{
            from_name: "Anime Fandom",
            OTP: OTP1.toString(),
            to_mail: email 
            
           
        });
        localStorage.setItem("OTP",OTP1);
        window.open("project1.html");
    
    }
   
    catch {
       alert("you have entered a wrong emailId please enter again");
    }
};
