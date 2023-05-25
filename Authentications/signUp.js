document.querySelector("form").addEventListener("submit", getData);


let credentialArr =JSON.parse(localStorage.getItem("userCred")) || [];

function getData() {
    event.preventDefault();


    let mobNum = document.querySelector("#inpNum").value;


    let dataObj = {
        mobNum: mobNum
    }

    credentialArr.push(dataObj);
    console.log(credentialArr);

    localStorage.setItem("userCred", JSON.stringify(credentialArr))

    window.location.href="otp.html"

}