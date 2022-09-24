const two = document.querySelectorAll("#two");
const image = document.querySelector(".image");
const img = document.getElementsByClassName("image")[0]; 
const image2 = [];
const image_2 = [];
const three = document.querySelectorAll("#three");
const image3 = [];
const image_3 = [];
const press1 = document.querySelector("#press1");
const butt = document.getElementById("press1");
let i = 0;
two.forEach(e =>{
    image2.push(e);
    e.style.display = "none";
})
three.forEach(e =>{
    image3.push(e);
    e.style.display = "none";
})
console.log(two);
press1.addEventListener("click",e => {
    i =i+1;
    if(i%2!=0)
    {    
        two.forEach(e =>{
        image_2.push(e);
        e.style.display = "inline";
    })
    three.forEach(e =>{
        image_3.push(e);
        e.style.display = "inline";
    })
    butt.textContent = "show Less";
   
}
else{
    two.forEach(e =>{
        image2.push(e);
        e.style.display = "none";
    })
    three.forEach(e =>{
        image3.push(e);
        e.style.display = "none";
    })
    butt.textContent = "show More";

}
});

