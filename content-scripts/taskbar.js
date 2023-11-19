var taskbarStyleElement = document.createElement("style");
taskbarStyleElement.innerHTML = `


      #eXelper-taskbar {
        width: 100%;
        height: 45px;
        background-image: linear-gradient(to right top, #403539CC, #453b41CC, #494248CC, #4e484fCC, #524f56CC);
        backdrop-filter: blur(15px);
        position: fixed;
        left: 0;
        bottom: -44px;
        transition-duration: 0.5s;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        z-index: 1e12;
        
      }

      #eXelper-taskbar:hover {
        bottom: 0px;
        transition-duration: 0.5s;
      }

      #eXelper-taskbar  * {
        display: inline-block;
        user-select: none;
      }

      .eXelper-tb-icon {
        width: 37px;
        height: 37px;
        margin-bottom: 2px;
        margin-left: 25px;
      }

      .eXelper-middle-stuff {
        margin-right: 5px;
        width: calc(100% - 190px);
      }

      .eXelper-far-right-stuff {
        float: right;

      }

      #eXelper-time-container {
        background-color: rgba(255, 255, 255, 0.2);
        width: 120px;
        height: 35px;
        margin-top: 5px;
        margin-right: 6px;
        border-radius: 40px;
        font-family: Verdana, sans-serif;
        font-size: 90%;
        color: white;
      }



      .eXelper-left-icon {
        margin-bottom: 20px;
        position: relative;
        bottom: 2px;
      }

      #eXelper-actual-time {
        position: relative;
        bottom: 9px;
      }

      .material-symbols-outlined {
        font-variation-settings:
          'FILL'0,
          'wght'400,
          'GRAD'0,
          'opsz'24;
        position: relative;
        bottom: 3px;
      }

`
document.head.appendChild(taskbarStyleElement);

var bottomTaskbarElement = document.createElement('div');

bottomTaskbarElement.innerHTML = `
<div id="eXelper-taskbar">

      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

      <span class="eXelper-far-Left-stuff">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" style="margin-left:2px; margin-top: 4px;">
          <!-- background circle -->
          <circle cx="20" cy="20" r="18" fill="rgba(255, 255, 255, 0.2)" class="hover-bright" />

          <!-- outer circle with outline -->
          <circle cx="20" cy="20" r="6" fill="none" stroke="#ffffff" stroke-width="2" />

          <!-- inner filled circle (removed for now) -->
          <!-- <circle cx="20" cy="20" r="6" fill="#ffffff" /> -->
        </svg>


      </span>
      <center class="eXelper-middle-stuff">
        <span>

          <!-- Google Chrome -->
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 54" class="eXelper-tb-icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 52" class="eXelper-tb-icon">
              <defs>
                <linearGradient id="a" x1="3.2173" y1="15" x2="44.7812" y2="15" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#b93025" />
                  <stop offset="1" stop-color="#ca4335" />
                </linearGradient>
                <linearGradient id="b" x1="20.7219" y1="47.6791" x2="41.5039" y2="11.6837" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#fcc934" />
                  <stop offset="1" stop-color="#fbbc04" />
                </linearGradient>
                <linearGradient id="c" x1="26.5981" y1="46.5015" x2="5.8161" y2="10.506" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#1e8e3e" />
                  <stop offset="1" stop-color="#34a853" />
                </linearGradient>

              </defs>


              <use xlink:href="#p" fill="url(#a)" transform="rotate(120 24 24)" />
              <use xlink:href="#p" fill="url(#b)" transform="rotate(-120 24 24)" />
              <use xlink:href="#p" fill="url(#c)" />

              <circle cx="24" cy="24" r="12" style="fill:#fff" />
              <circle cx="24" cy="24" r="9.5" style="fill:#1a73e8" />
            </svg>
            <defs>
              <path id="p" d="M13.6086 30.0031 3.218 12.006A23.994 23.994 0 0 0 24.0025 48l10.3906-17.9971-.0067-.0068a11.9852 11.9852 0 0 1-20.7778.007Z" />
              <linearGradient id="d" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:white;stop-opacity:1" />
                <stop offset="100%" style="stop-color:white;stop-opacity:1" />
              </linearGradient>
            </defs>
            <!-- Bottom white bar -->
            <rect x="12" y="51" width="24" height="3" rx="0.5" ry="0.5" fill="url(#d)" />
          </svg>
          <!-- Chrome Canvas -->
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" xmlns:xlink="http://www.w3.org/1999/xlink" class="eXelper-tb-icon" viewBox="0 0 48 48">
            <g>
              <path style="opacity:0.961" fill="#ea4536" d="M 16.5,1.5 C 29.8914,-0.722459 39.3914,4.27754 45,16.5C 47.717,29.9001 42.8836,39.4001 30.5,45C 17.0999,47.717 7.59994,42.8836 2,30.5C -0.586299,17.0057 4.24703,7.339 16.5,1.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#fef8f9" d="M 33.5,32.5 C 30.8151,28.8169 27.4818,25.8169 23.5,23.5C 23.3059,21.0882 21.9726,20.0882 19.5,20.5C 19.0882,22.9726 20.0882,24.3059 22.5,24.5C 24.8169,28.4818 27.8169,31.8151 31.5,34.5C 28.619,36.68 25.2856,37.68 21.5,37.5C 21.8511,35.1305 22.0178,32.7972 22,30.5C 10.5284,30.2209 7.1951,24.8875 12,14.5C 19.955,7.60489 27.6217,7.93822 35,15.5C 38.6843,21.6654 38.1843,27.3321 33.5,32.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#f3938a" d="M 18.5,12.5 C 19.5,12.5 20.5,12.5 21.5,12.5C 21.5,13.8333 21.5,15.1667 21.5,16.5C 20.1667,16.5 18.8333,16.5 17.5,16.5C 17.4326,15.0413 17.7659,13.7079 18.5,12.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#f1a7e5" d="M 25.5,12.5 C 28.5,12.1667 29.8333,13.5 29.5,16.5C 28.1667,16.5 26.8333,16.5 25.5,16.5C 25.5,15.1667 25.5,13.8333 25.5,12.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#f0a5e5" d="M 13.5,18.5 C 14.5,18.5 15.5,18.5 16.5,18.5C 16.5,19.8333 16.5,21.1667 16.5,22.5C 15.1667,22.5 13.8333,22.5 12.5,22.5C 12.4326,21.0413 12.7659,19.7079 13.5,18.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#f29088" d="M 31.5,18.5 C 32.5,18.5 33.5,18.5 34.5,18.5C 34.5,19.8333 34.5,21.1667 34.5,22.5C 33.1667,22.5 31.8333,22.5 30.5,22.5C 30.4326,21.0413 30.7659,19.7079 31.5,18.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#ec5446" d="M 23.5,23.5 C 23.5,24.1667 23.1667,24.5 22.5,24.5C 20.0882,24.3059 19.0882,22.9726 19.5,20.5C 21.9726,20.0882 23.3059,21.0882 23.5,23.5 Z" />
            </g>
            <g>
              <path style="opacity:1" fill="#f2aef8" d="M 23.5,23.5 C 27.4818,25.8169 30.8151,28.8169 33.5,32.5C 36.1667,36.5 35.5,37.1667 31.5,34.5C 27.8169,31.8151 24.8169,28.4818 22.5,24.5C 23.1667,24.5 23.5,24.1667 23.5,23.5 Z" />
            </g>
          </svg>
          <!-- Play Store -->
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" width="33" height="40" class="eXelper-tb-icon">
            <circle cx="24" cy="24" r="23" fill="white" />

            <svg xmlns="http://www.w3.org/2000/svg" x="9px" y="7px" viewBox="0 0 48 48" width="33" height="33">
              <linearGradient id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1" x1="18.102" x2="25.297" y1="3.244" y2="34.74" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#35ab4a"></stop>
                <stop offset=".297" stop-color="#31a145"></stop>
                <stop offset=".798" stop-color="#288739"></stop>
                <stop offset="1" stop-color="#237a33"></stop>
              </linearGradient>
              <path fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)" d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"></path>
              <linearGradient id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2" x1="19.158" x2="21.194" y1="23.862" y2="66.931" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#f14e5d"></stop>
                <stop offset=".499" stop-color="#ea3d4f"></stop>
                <stop offset="1" stop-color="#e12138"></stop>
              </linearGradient>
              <path fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)" d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"></path>
              <linearGradient id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3" x1="32.943" x2="36.541" y1="14.899" y2="43.612" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#ffd844"></stop>
                <stop offset=".519" stop-color="#ffc63f"></stop>
                <stop offset="1" stop-color="#ffb03a"></stop>
              </linearGradient>
              <path fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)" d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"></path>
              <linearGradient id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4" x1="13.853" x2="15.572" y1="5.901" y2="42.811" gradientUnits="userSpaceOnUse">
                <stop offset=".003" stop-color="#0090e6"></stop>
                <stop offset="1" stop-color="#0065a0"></stop>
              </linearGradient>
              <path fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)" d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"></path>
            </svg>
          </svg>

        </span>
      </center>
      <span class="eXelper-far-right-stuff">
        <span id="eXelper-time-container">
          <span style="padding: 7.5px; padding-right: 0px; padding-left: 13px; height: 25px; width: calc(100% - 15px);">
            <span class="eXelper-left-icon" id="eXelper-actual-time">12:30</span>
            <span class="material-symbols-outlined left-icon" style="font-size: 22px; margin-left: 2px; bottom: 4px">
              network_wifi_3_bar
            </span>
            <span class="material-symbols-outlined left-icon">
              battery_6_bar
            </span>
          </span>
        </span>
      </span>
</div>
      `;

// bottomTaskbarElement.id = "eXelper-taskbar";
// bottomTaskbarElement.style.width= "100%";
// bottomTaskbarElement.style.height= "45px";
// bottomTaskbarElement.style.backgroundImage= "linear-gradient(to right top, #403539CC, #453b41CC, #494248CC, #4e484fCC, #524f56CC);";
// bottomTaskbarElement.style.backdropFilter= "blur(15px);";
// bottomTaskbarElement.style.position= "fixed";
// bottomTaskbarElement.style.bottom= "-44px";
// bottomTaskbarElement.style.transitionDuration= "0.5s";
// bottomTaskbarElement.style.borderTopLeftRadius= "25px";
// bottomTaskbarElement.style.borderTopRightRadius= "25px";

// bottomTaskbarElement.addEventListener('mouseover', function() {
//   bottomTaskbarElement.style.bottom = '0';
// });

// bottomTaskbarElement.addEventListener('mouseout', function() {
//   bottomTaskbarElement.style.bottom = '-44px';
// });


document.body.appendChild(bottomTaskbarElement);





setTimeout(() => {
  //time stuff
  const actualTime = document.getElementById("eXelper-actual-time");

  function setTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`; //`:${seconds}`;

    actualTime.innerText = time;
  }
  setInterval(setTime, 1000);
  //battery stuff
  const batteryBar = document.getElementById("eXelper-battery-bar");
  if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
      updateBatteryStatus(battery);
      battery.addEventListener('chargingchange', function() {
        updateBatteryStatus(battery);
      });
      battery.addEventListener('levelchange', function() {
        updateBatteryStatus(battery);
      });
    });
  } else {
    console.log('Battery Status API is not supported in this browser.');
  }

  function updateBatteryStatus(battery) {
    console.log(battery.level * 6);
    let batteryStatus = Math.round(battery.level * 7);
    batteryStatus = batteryStatus >= 7 ? "full" : batteryStatus + "_bar";
    console.log(batteryStatus)
    batteryBar.innerHTML = "battery_" + batteryStatus;
  }
}, 250);
