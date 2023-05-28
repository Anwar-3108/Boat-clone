
    var otpTimer;
var timeLeft = 30; // Time limit in seconds

document.getElementById("send-otp-btn").addEventListener("click", function() {
    event.preventDefault() ;
  var enteredOTP = document.getElementById("inpNum").value;
  var generatedOTP = "123456"; // Replace with the actual OTP sent to the user

  if (enteredOTP === generatedOTP) {
    stopTimer();
    window.location.href="waiting.html"
  } else {
    document.getElementsByClassName("errormsg")[0].textContent = "Invalid OTP. ";
    // console.log("invalid")
  }
});

function startTimer() {
  otpTimer = setInterval(function() {
    if (timeLeft > 0) { 
      // console.log(timeLeft)
      document.getElementsByClassName("left")[0].textContent = "Resend OTP in  " + timeLeft + "s";
      timeLeft--;
    } else {
      stopTimer(); 
      document.getElementsByClassName("left")[0].textContent = "Didn't recive otp? " 
      // document.getElementsByClassName("errormsg")[0].textContent = "OTP expired";
      document.getElementsByClassName("right")[0].textContent = "Resend";
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(otpTimer);
}

startTimer();


function resendOtp(){
  window.location.reload();
}



function goToLogin(){
  window.location.href="signin.html"  ; 
}
























