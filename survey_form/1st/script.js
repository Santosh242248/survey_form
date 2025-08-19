let star = document.querySelectorAll(".star");
let rate = null;
star.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        highlightStars(index);
        useratingrate(rate);
    });
})
let reason = document.querySelector(".reason");
const highlightStars=(index)=>{
    star.forEach((star,i)=>{
        star.classList.toggle("highlight",i<=index);
    });
     rate = index+1;
     if(rate<=2){
        reason.style.display="block";
     }else{
        reason.style.display="none";
     }
}

function useratingrate(value){
    rate = value;
    return rate;
}
rate = useratingrate();
console.log(rate);

let agegroup = document.getElementById("age-group");
let container = document.querySelector(".container");
agegroup.addEventListener("change",()=>{
        if(agegroup.value === "50+"){
            // document.querySelector("#h4").style.display="block";
            document.querySelector(".extraQuestion").style.display="block";
            container.style.height="95%";

        }else{
            document.querySelector(".extraQuestion").style.display="none";
            container.style.height="89%";

        }
})
let yesNo = document.querySelectorAll(".bt");
let click = null;
yesNo.forEach((clicked)=>{
    clicked.addEventListener("click",()=>{
        document.querySelector(".extraQuestion").style.display="none";
            click=clicked.value;
    })
})
// let radios = document.querySelectorAll("input[name]=recommend");
//     let radioValue=null;
//     radios.forEach(radio=>{
//         if(radio.checked){
//             radioValue = radio.value;
//         }
//     })
function Validate(){
    // NAME ERROR
    let isValid = true;
    let nameError=document.querySelector(".nameError");
    let nameInput = document.querySelector("#name");
    if(nameInput.value == ""){
        nameError.innerHTML="*This Field Is Required";
        nameError.style.color="red";
        // let nameInput = document.querySelector("#name");
        nameInput.style.boxShadow = "0px 0px 2px 1px red";
        isValid=false;
    }else{
        nameError.innerHTML="";
        nameInput.style.boxShadow = "none";
    }
    //AGE ERROR
    let agegroup = document.querySelector("#age-group");
   let selectedValue = agegroup.value;
    let ageError = document.querySelector(".ageError");
    if (selectedValue === "") {
        ageError.innerHTML = "*This Field Is Required";
        ageError.style.color = "red";
        agegroup.style.boxShadow = "0px 0px 2px 1px red";
        isValid = false;
    } else {
        ageError.innerHTML = "";
        agegroup.style.boxShadow = "0px 0px 2px 1px";
    }
    // Service Error
    let service = document.querySelector("#service");
    let serviceValue = service.value;
    let serviceError = document.querySelector(".serviceError");
    if(serviceValue==""){
        serviceError.innerHTML="*This Field is Required";
        serviceError.style.color="red";
        service.style.boxShadow = "0px 0px 2px 1px red";
        isValid=false;
    }else{
        serviceError.innerHTML="";
        service.style.boxShadow = "0px 0px 2px 1px";
    }
    // star error
    let starError= document.querySelector(".StarError");
    if(rate == null){
        starError.innerHTML="This Field is Required";
        starError.style.color="red";
        isValid=false;
    }
    else{
        starError.innerHTML="";
    }
    //radio
    let radios = document.querySelectorAll("input[name=recommend]");
    let radioValue=null;
    radios.forEach(radio=>{
        if(radio.checked){
            radioValue = radio.value;
        }
    })
   
    let yeasNo= document.querySelector(".yeasNo");
    if(radioValue==null){
        yeasNo.innerHTML="*This Field is Required";
        yeasNo.style.color="red";
        isValid=false;
    }
    else{
        yeasNo.innerHTML="";
    }
    return isValid;
}

