let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.nav_toggle ion-icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_menu.classList.toggle('active');
  nav_toggle_icon.setAttribute('name',
    nav_menu.classList.contains('active') ? 'close-outline' : 'menu-outline'
  );
});




function goTo(){

  // console.log("working")
  var x = document.getElementById("inpVal").value;
  console.log(x)
      if(x=="earbuds" || x=="Earbuds"){
        window.location.href = "earbuds.html";
      }
      if(x=="watch" ||  x=="Watch" ||  x=="smart watch" ||  x=="Smart watch" || x=="Smart Watch"){
        window.location.href = "smartWatch.html";
      }
      if(x=="headphone"  || x=="Headphone" || x=="Gaming headphone" || x=="Gaming Headphone"){
        window.location.href = "gamingHeadphones.html";
      }

}