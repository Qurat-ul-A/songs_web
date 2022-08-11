// Initialize variables
let burger = document.querySelector('.burger')
let nav = document.querySelector('.nav')
let navbarItems = document.querySelector('.navbar-items')

/* Music  */
let musicSection = document.getElementById("music");
var isplaying = true;


burger.addEventListener('click', () => {
    navbarItems.classList.toggle('h-class')
    nav.classList.toggle('v-class')

})

musicSection.addEventListener("click", function (event) {
    // Notice This function is only for play button , not for stop or sound button 
    let TargetedElement = event.target;
    // Select Play Button Using Class "Options"
    if (TargetedElement.className.includes('Options')) {

        let selected = document.querySelector('.Selected');
        // This will be the flag for the selected element.

        let img = TargetedElement.parentElement.parentElement.querySelector(".img")

        // target the Music using previousElementSibling
        let music = TargetedElement.previousElementSibling.previousElementSibling;
        var sounds = document.getElementsByTagName("audio");
        let playElements = document.getElementsByClassName("fa-pause");
        // set loop for pause
        for (let i = 0; i < sounds.length; i++) {
            // pause all sounds            
            if (sounds[i].play) sounds[i].pause();

            // changing pause icons to play 
            if (playElements[i]) playElements[i].classList.replace("fa-pause", "fa-play-circle")
        }
        // checking the condition for playing 
        if (isplaying) {
            music.play();
            isplaying = false;
            TargetedElement.classList.replace("fa-play-circle", "fa-pause")
            img.classList.add("playmusic");
        }
        else {
            music.pause();
            isplaying = true;
            TargetedElement.classList.replace("fa-pause", "fa-play-circle")
            img.classList.remove("playmusic")
        }

        // Remove the selected element 
        if (selected) selected.classList.remove('Selected');
        // Here we're removing the element that was selected before. 

        TargetedElement.parentElement.parentElement.classList.add('Selected');
        // Adding a class to the targeted element so we will able to select it later

    }
})

let musicStop=document.getElementById('music-stop')
let faStop=document.getElementsByClassName('fa-stop')

musicStop.addEventListener('click',()=>{
 if (isplaying){
     music.stop();
     isplaying=true;
 }
})