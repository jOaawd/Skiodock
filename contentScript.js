function inject() {

document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,700"rel=stylesheet><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"rel=stylesheet><style>:root{--app-margin:12px}*,::after,::before{box-sizing:border-box}.icon{max-width:100%;display:block}body{margin:0}#dock{position:sticky;width:100%;font-family:Roboto,sans-serif;display:flex;flex-direction:row;user-select:none;background-color:rgba(213,214,219,.75);backdrop-filter:blur(4px);bottom:0;border-radius:30px 30px 0 0;padding:8px 8px 7px 8px;z-index:10}#info{display:flex;flex-grow:0;justify-content:flex-end}.button{background-color:rgba(244,243,251,.85);padding:10px 10px;cursor:pointer;font-weight:600;color:rgba(0,0,0,.8)}#info .button{display:flex;align-items:center}#info .button:first-child{border-radius:22px 5px 5px 22px;padding-left:14px}#info .button:nth-child(2){border-radius:5px 22px 22px 5px;margin-left:3px;padding-right:14px}#openBtn{padding:9px;border-radius:22px;display:flex;flex-grow:0;justify-content:flex-start}#apps{flex-grow:2;display:flex;flex-direction:row;justify-content:center;align-items:center}#apps a:first-child{margin-right:var(--app-margin)}#apps a:nth-child(3){margin-left:var(--app-margin)}#apps img{width:38px;height:38px;border-radius:50%;box-shadow:0 2px 0 0 rgba(0,0,0,.2)}</style>'; 
document.body.innerHTML += '<div id=dock><div id=launcher><div id=openBtn class=button><span class=material-symbols-outlined>radio_button_checked</span></div></div><div id=apps><a class="icon chrome"href=#><img src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/chrome.svg></a><a class="icon files"href=chrome://file-manager target=_blank><img src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/files.png></a><a class="icon settings"href=chrome://os-settings target=_blank><img src=https://raw.githubusercontent.com/LagTheSystem/ChromeOS-Dock/main/assets/settings.png></a></div><div id=info><div id=calendar class=button></div><div id=clock class=button></div></div></div>';
}

inject();


// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
    console.log("updated time");
    // Getting current time and date
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
  
    time.setMonth(month);
    month = time.toLocaleString('en-US', { month : 'short' })
  
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
    } else if (hour == 0) {
        hr = 12;
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    hour = parseInt(hour, 10);
    
    let currentTime =
        hour +
        ":" +
        min;
  
    let currentDate = month + " " + date
 
    // Displaying the time
 document.getElementById("clock").innerHTML = currentTime;
  document.getElementById("calendar").innerHTML = currentDate;
}
 
showTime();