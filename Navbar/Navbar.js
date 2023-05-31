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
      if(x=="earbuds"){
        window.location.href = "earbuds.html";
      }
      if(x=="watch"){
        window.location.href = "watch.html";
      }

}
