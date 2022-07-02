
//Variables that will be used

var hamburgerMenu = document.querySelector('.hamburger-menu')

var hamburgerBtn = document.querySelector('.hamburger-btn')



//Function that will run when user clicks on hamburger button

hamburgerBtn.onclick = function(){  

  this.classList.toggle('show-menu')

  if(hamburgerMenu.classList.contains('show-menu'))

  {

    hamburgerBtn.setAttribute('aria-expanded', false);

    hamburgerMenu.classList.remove('show-menu');

  }

  else{

    hamburgerBtn.setAttribute('aria-expanded', true)

    hamburgerMenu.classList.toggle('show-menu');  

  }     

}


// Function that runs when body is clicked (closes menu)

document.body.onclick = function(e){

  if (e.target !== hamburgerMenu &&

      e.target !== hamburgerBtn &&

      !e.target.closest('li')) {

      //hamburgerMenu.style.display = "none";

      hamburgerBtn.setAttribute('aria-expanded', false);

      hamburgerMenu.classList.remove('show-menu');

  }

}


//Function that runs when user presses the Escape key

document.onkeyup = function(e){

  if (e.key === "Escape"){

  // Close the menu

  hamburgerMenu.closeElement();

  }

}



hamburgerMenu.closeElement = function(){

  hamburgerMenu.classList.remove('show-menu');

  hamburgerBtn.focus();

  hamburgerBtn.setAttribute('aria-expanded', false);

}











