function inject() {
/*    let dock = document.createElement('div');
    let launcher = document.createElement('div');
    let openBtn = document.createElement('div');
    let icon = document.createElement('span');
    let apps = document.createElement('div');
    let chrome = document.createElement('a');
    let files = document.createElement('a');
    let settings = document.createElement('a');
    let info = document.createElement('div');
    let calendar = document.createElement('div');
    let clock = document.createElement('div');
    let css = document.createElement('style');

    dock.id = "dock";
    launcher.id = "launcher";
    openBtn.id = "openBtn";
    openBtn.className = "button";
    icon.className = "material-symbols-outlined";
    apps.id = "apps";
    chrome.className = "chrome";
    files.className = "files";
    settings.className = "settings";
    info.id = "info";
    calendar.id = "calendar";
    calendar.className = "button";
    clock.id = "clock";
    clock.className = "button";

    document.head.appendChild(style);

    document.body.appendChild(dock);
        dock.appendChild(launcher);
            launcher.appendChild(openBtn);
                openBtn.appendChild(icon);
        dock.appendChild(apps);
            apps.appendChild(chrome);
            apps.appendChild(files);
            apps.appendChild(settings);
        dock.appendChild(info);
            info.appendChild(calendar);
            info.appendChild(clock);*/

document.head.innerHTML += '<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,600,700"rel=stylesheet><link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0"rel=stylesheet><style>:root{--app-margin:12px}*,::after,::before{box-sizing:border-box}.icon{max-width:100%;display:block}body{margin:0}#dock{position:sticky;width:100%;font-family:Roboto,sans-serif;display:flex;flex-direction:row;user-select:none;background-color:rgba(228,229,235,.75);backdrop-filter:blur(4px);position:absolute;bottom:0;left:0;border-radius:30px 30px 0 0;padding:8px 8px 7px 8px}#info{display:flex;flex-grow:0;justify-content:flex-end}.button{background-color:rgba(237,235,248,.85);padding:10px 10px;cursor:pointer;font-weight:600;color:rgba(0,0,0,.8)}#info .button:first-child{border-radius:22px 5px 5px 22px;padding-left:14px}#info .button:nth-child(2){border-radius:5px 22px 22px 5px;margin-left:3px;padding-right:14px}#openBtn{padding:7px;border-radius:22px;display:flex;flex-grow:0;justify-content:flex-start}#apps{flex-grow:2;display:flex;flex-direction:row;justify-content:center;align-items:center}#apps a:first-child{margin-right:var(--app-margin)}#apps a:nth-child(3){margin-left:var(--app-margin)}#apps img{width:38px;height:38px;border-radius:50%;box-shadow:0 2px 0 0 rgba(0,0,0,.2)}</style>'; 
document.body.innerHTML += '<div id=dock><div id=launcher><div id=openBtn class=button><span class=material-symbols-outlined>radio_button_checked</span></div></div><div id=apps><a class="icon chrome"href=#><img src=assets/chrome.svg></a><a class="icon files"href=chrome://file-manager target=_blank><img src=assets/files.png></a><a class="icon settings"href=chrome://os-settings target=_blank><img src=assets/settings.png></a></div><div id=info><div id=calendar class=button></div><div id=clock class=button></div></div></div>'
document.body.innerHTML += '<script>function showTime(){let e=new Date,t=e.getMonth(),n=e.getDate(),o=e.getHours(),$=e.getMinutes(),_=e.getSeconds();e.setMonth(t),t=e.toLocaleString("en-US",{month:"short"}),o>=12?o>12&&(o-=12):0==o&&(hr=12),$=$<10?"0"+$:$,_=_<10?"0"+_:_;let g=(o=parseInt(o=o<10?"0"+o:o,10))+":"+$,i=t+" "+n;document.getElementById("clock").innerHTML=g,document.getElementById("calendar").innerHTML=i}setInterval(showTime,1e3),showTime();</script>'

}

inject();