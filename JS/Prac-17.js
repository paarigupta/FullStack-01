//selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date"); 


//event listener
name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);


//functions
function showtime()
{
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();

    //convert am and pm
    const ampm = hour>12 ? 'PM' : 'AM';

    //12 HRS FORMAT
    hour = hour%12 || 12;

    //output
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    date.innerHTML = `${todaydate}`;

    setInterval(showtime,1000);
}

function addZero(n)
{
    return((parseInt(n,10) < 10 ? '0' : '')+n);
}

function setGreeting()
{
    let today = new Date();
    let hour = today.getHours();
    if(hour<12)
    {
        document.body.style.backgroundImage = 'url("../img/morning.jpg")';
        greeting.innerHTML = 'Good Morning';
    }
    else if(hour>=12 && hour < 16)
    {
        document.body.style.backgroundImage = 'url("../img/afternoon.jpeg")';
        greeting.innerHTML = 'Good Afternoon';
    }
    else if (hour >= 16 && hour < 20)
    {
        document.body.style.backgroundImage = 'url("../img/evening.jpg")';
        greeting.innerHTML = 'Good Evening';
        document.body.style.color = "black";
    }
    else
    {
        document.body.style.backgroundImage = 'url("../img/night.jpg")';
        greeting.innerHTML = 'Good Night';
        document.body.style.color = "white";
    }
}

function getName()
{
    if(localStorage.getItem('myData') === null)
    {
        name.innerHTML = 'Pari Gupta';
    }
    else
    {
        name.innerHTML = localStorage.getItem('myData');
    }
}

function setName(e)
{
    if(e.type === 'keypress')
    {
        if(e.keyCode == 13)
        {
            localStorage.setItem('myData', e.target.innerHTML);
            name.blur();
        }
    }
    else
    {
        localStorage.setItem('myData',e.target.innerHTML);
    }
}


//function call
showtime();
setGreeting();
getName();

