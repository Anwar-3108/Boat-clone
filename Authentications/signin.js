document.querySelector("form").addEventListener("submit", getData);


let credentialArr =JSON.parse(localStorage.getItem("loginCred")) || [];

function getData() {
    event.preventDefault();


    let mobNum = document.querySelector("#inpNum").value;


    let dataObj = {
        mobNum: mobNum
    }

    credentialArr.push(dataObj);
    console.log(credentialArr);

    localStorage.setItem("loginCred", JSON.stringify(credentialArr))

    window.location.href="otp.html"

}