let block = document.querySelector('.main-layout__content__prewiew_item_button');
block.addEventListener('click',toggleContainer);
function toggleContainer(){
    block.innerText="Сохранено";
    block.style.background="#65DB3B";
}
let btn = document.querySelectorAll('.network__content__prewiew_item_button');
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener('click', function(){
        toggleComponats;
    })
}
function toggleComponats(){
    btn.style.background="#65DB3B";
}



function clockTime(){
    var
        time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString();
       

    if (h.length<2){h = "0" + h;}
    if (m.length<2){m = "0" + m;}
    

    var clockString = h + ":" + m ;
    console.log(clockString);
    var clock = document.getElementById("clock");
    clock.innerText = h;
    var clockMin = document.getElementById("clock_min");
    clockMin.innerText = m;
}
setInterval(clockTime, 1000);

var 
    time_mas=["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота",];
    timeNow= new Date();
    Day= timeNow.getDay()

var dayNow = document.getElementById("day");
dayNow.innerText = (time_mas[timeNow.getDay()]);


var
    date = new Date();
    dateNow = date.getDate();

var dayTime = document.getElementById("date");
dayTime.innerText = dateNow;

var
    month_mas=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    month = new Date();
    monthNow = month.getMonth();

var monthTime = document.getElementById('month');
monthTime.innerText = (month_mas[month.getMonth()]);
