let root = document.documentElement;

var mode = 'light';

function toggleMode() {
  
  if (mode == 'light') {
    
    root.style.setProperty('--background', "url(/Images/dark.png)");
    root.style.setProperty('--blue', "#5587EA");
    root.style.setProperty('--text', "rgb(200, 200, 200)");
    root.style.setProperty('--boxes', "rgb(40, 40, 40)");
    root.style.setProperty('--shadow1',"rgb(25, 25, 25)");
    root.style.setProperty('--moon',"url(/Images/lightmode.svg)");
    root.style.setProperty('--pog',"rgb(87, 87, 87)");

    mode = 'dark';

  } else if (mode == 'dark') {

    root.style.setProperty('--background', "url(/Images/light.png)");
    root.style.setProperty('--blue', "#5587EA");
    root.style.setProperty('--text', "rgb(88, 88, 88)");
    root.style.setProperty('--boxes', "#f7f7f7");
    root.style.setProperty('--shadow1',"#e2e2e2");
    root.style.setProperty('--moon',"url(/Images/darkmode2.svg)");
    root.style.setProperty('--pog',"rgb(187, 187, 187)");

    mode = 'light';

  }

}