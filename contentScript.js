const inject = function() {
    document.head.innerHTML += '<style>:root {
        --app-margin: 12px;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      
      img, picture, svg {
        max-width: 100%;
        display: block;
      }
      
      body {
        background-image: url(https://9to5google.com/wp-content/uploads/sites/4/2017/02/chromeos_newdefaultwall_1-e1487111985183.png);
        margin: 0;
      }
      
      #dock {
        width: 100%;
        font-family: Roboto, sans-serif;
        display: flex;
        flex-direction: row;
        user-select: none;
        background-color: rgba(228, 229, 235, 0.75);
        backdrop-filter: blur(4px);
        position: absolute;
        bottom: 0;
        border-radius: 30px 30px 0 0;
        padding: 8px 8px 7px 8px;
      }
      
      #info {
        display: flex;
        flex-grow: 0;
        justify-content: flex-end;
      }
      
      .button {
        background-color: rgba(237, 235, 248, .85);
        padding: 10px 10px;
        cursor: pointer;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.8)
      }
      
      #info .button:first-child {
        border-radius: 22px 5px 5px 22px;
        padding-left: 14px;
      }
      
      #info .button:nth-child(2) {
        border-radius: 5px 22px 22px 5px;
        margin-left: 3px;
        padding-right: 14px;
      }
      
      #openBtn {
        padding: 7px;
        border-radius: 22px;
        display: flex;
        flex-grow: 0;
        justify-content: flex-start;
      }
      
      #apps {
        flex-grow: 2;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      
      #apps a:first-child { 
        margin-right: var(--app-margin);
      }
      
      #apps a:nth-child(3) { 
        margin-left: var(--app-margin);
      }
      
      #apps img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
      }
      </style>';
    document.body.innerHTML += 
    '<div id="dock">
        <div id="launcher">
          <div class="button" id="openBtn">
            <span class="material-symbols-outlined">radio_button_checked</span>
          </div>
        </div>
        <div id="apps">
          <a class="chrome" href="#"><img src="assets/chrome.svg"></img></a>
          <a class="files" href="chrome://file-manager" target="_blank"><img src="assets/files.png"></img></a>
          <a class="settings" href="chrome://os-settings" target="_blank"><img src="assets/settings.png"></img></a>
        </div>
        <div id="info">
          <div class="button" id="calendar"></div>
          <div class="button" id="clock"></div>
        </div>
      </div>';
}

// Calling showTime function at every second
setInterval(showTime, 1000);

// Defining showTime funcion
function showTime() {
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