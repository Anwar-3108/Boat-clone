
    // var otpTimer;
// var timeLeft = 10; // Time limit in seconds

// document.getElementById("send-otp-btn").addEventListener("click", function() {
//     event.preventDefault() ;
//   var enteredOTP = document.getElementById("inpNum").value;
//   var generatedOTP = 123; // Replace with the actual OTP sent to the user

//   if (enteredOTP === generatedOTP) {
//     // stopTimer();
//     window.location.href="home.html"
//   } else {
//     // document.getElementById("errormsg").textContent = "Invalid OTP. ";
//     console.log("invalid")
//   }
// });

// function startTimer() {
//   otpTimer = setInterval(function() {
//     if (timeLeft > 0) {
//       document.getElementById("left").textContent = "Resend OTP in  " + timeLeft + "s";
//       timeLeft--;
//     } else {
//       stopTimer();
//       document.getElementById("errormsg").textContent = "OTP expired";
//       document.getElementById("right").textContent = "Resend";
//     }
//   }, 1000);
// }

// function stopTimer() {
//   clearInterval(otpTimer);
// }

// startTimer();



/////////--t-1-------//

//   var otpTimer;
// var timeLeft = 10; // Time limit in seconds



document.querySelector("form").addEventListener("submit" , getData) ;

function getData(){
  event.preventDefault() ;


  //   var enteredOTP = document.getElementById("inpNum").value;
  // var generatedOTP = "123"; // Replace with the actual OTP sent to the user


  //   if (enteredOTP === generatedOTP) {
  //   stopTimer();
  //   window.location.href="home.html"
  // } else {
  //   // document.getElementById("errormsg").textContent = "Invalid OTP. ";
  //   console.log("invalid")
  // }

let otp =  document.getElementById("inpNum").value ;

if(otp ==="123"){
  
  window.location.href="waiting.html";

}else{
  // window.location.href="otp.html" ;
   document.querySelector("askForCode").textContent =`Invalid OTP`;
  document.getElementById("inpNum").textContent="" ;
}

}

//     !! throwing errror while calling the function



// function startTimer() {
//   otpTimer = setInterval(function() {
//     if (timeLeft > 0) {
//       document.querySelector("#left").textContent =` Resend OTP in  + ${timeLeft} + s`;
//       timeLeft--;
//     } else {
//       stopTimer();
//       document.getElementById("errormsg").textContent = "OTP expired";
//       document.getElementById("right").textContent = "Resend";
//     }
//   }, 1000);
// }


function stopTimer() {
  clearInterval(otpTimer);
}

startTimer();



function goToLogin(){
  window.location.href="signin.html"  ; 
}
























