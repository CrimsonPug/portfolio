const triggers = document.querySelectorAll('.menu > li');
const roles = document.querySelector('.fun-role');
const title = ['frisbee chaser', 'Nemo\'s advocate','casual scuba-diver','sloppy sushi-maker']
let i = 0;
var index;
var prevWord;
var currentWord;
var duration = 1200;

function handleEnter(){
    console.log('enter');
    this.classList.add('trigger-enter');
}

function handleLeave(){
    console.log('leave!');
    this.classList.remove('trigger-enter');
}

function randomIndex(max,min){
    index = Math.floor(Math.random() * (max - min + 1)) + min;
        return index;
}

// var randomRole = funct

function clearRole(){
    
}

function rotateText(){
    setInterval(()=>{
        prevWord = currentWord;

        currentWord = title[randomIndex(title.length - 1, 0)]; 

        if (prevWord === currentWord){
            currentWord = title[randomIndex(title.length - 1, 0)];
        };

        // console.log(currentWord);
        roles.innerHTML = currentWord;

    },duration);

}

rotateText();

triggers.forEach(trigger => trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave',handleLeave));