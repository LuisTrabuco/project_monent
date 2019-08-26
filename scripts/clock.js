const clockContainer=document.querySelector('.js-clock');
const clocktitle=clockContainer.querySelector('h1');

function getTime(){
    const date=new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clocktitle.innerText=`${hours} : ${minutes} : ${seconds}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();