
// For button press

let no = document.querySelectorAll(".drum").length;
for(let i = 0;i < no; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        // this is the html element that triggered the event - document.querySelectorAll(".drum")[i]
        var button_name= this.innerHTML;
        handleClick(button_name);
        buttonAnimation(button_name);
    })
}

function handleClick(button_name)
{
    switch (button_name) 
    {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            break;
    }   
}

// For keyboard key press

document.addEventListener("keydown", function(event)
{
    keyboardsound(event.key);
    buttonAnimation(event.key);
} 
)

function keyboardsound(key)
{
    switch (key) 
    {
        case "a":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "f":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(keyname)
{
    console.log(keyname);
    var button_class = "."+keyname;
    active_button = document.querySelector(button_class);
    console.log(active_button);
    active_button.classList.add("pressed");
    setTimeout(function()
    {
        active_button.classList.remove("pressed");
    }, 100)
}