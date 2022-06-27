//Variables that will be used
var hamburgerMenu = document.querySelector('.hamburger-menu')
var hamburgerBtn = document.querySelector('.hamburger-btn')


//Function that will run when user clicks on hamburger button
hamburgerBtn.onclick = function(){
    this.classList.toggle('show-menu')
    hamburgerBtn.setAttribute('aria-expanded', true)

}


// Function that runs when body is clicked (closes menu)
document.body.onclick = function(e){
    if (e.target == hamburgerMenu) {
        hamburgerMenu.style.display = "none";
        hamburgerBtn.setAttribute('aria-expanded', false)
    }
  }


//Function that runs when user presses the Escape key
document.onkeyup = function(e){
    if (e.key === "Escape"){
		// Close the menu
		hamburgerMenu.closeElement();
    }
}
