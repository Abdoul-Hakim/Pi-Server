function runstyle(){
    let menustatus = true;
    const menuimg =  document.getElementById("menuimg"); 
    const imgbtn = document.getElementsByClassName("menubtn");
    const refbtn = document.getElementsByClassName("refbtn");
    const aside = document.getElementById("aside");
    const main = document.getElementById("main");
    
    imgbtn[0].addEventListener('click', () => {
        if (menustatus == true){
            menuimg.style.transform = 'rotate(90deg)';
            main.classList.add("collapse");
            aside.classList.remove("collapse");
            menustatus = false;
        }else{
            menuimg.style.transform = 'rotate(0deg)';
            main.classList.remove("collapse");
            aside.classList.add("collapse");
            menustatus = true;
        }   
    });

    refbtn[0].addEventListener('click', () => {
        generateGPIOs("Physical")

        refbtn[2].classList.remove("refbtn-on");
        refbtn[2].classList.add("refbtn-off");

        refbtn[1].classList.remove("refbtn-on");
        refbtn[1].classList.add("refbtn-off");

        refbtn[0].classList.remove("refbtn-off");
        refbtn[0].classList.add("refbtn-on");
    });

    refbtn[1].addEventListener('click', () => {
        generateGPIOs("BCM")

        refbtn[0].classList.remove("refbtn-on");
        refbtn[0].classList.add("refbtn-off");

        refbtn[2].classList.remove("refbtn-on");
        refbtn[2].classList.add("refbtn-off");
        
        refbtn[1].classList.remove("refbtn-off");
        refbtn[1].classList.add("refbtn-on");
    });

    refbtn[2].addEventListener('click', () => {
        generateGPIOs("WiringPi")

        refbtn[1].classList.remove("refbtn-on");
        refbtn[1].classList.add("refbtn-off");

        refbtn[0].classList.remove("refbtn-on");
        refbtn[0].classList.add("refbtn-off");

        refbtn[2].classList.remove("refbtn-off");
        refbtn[2].classList.add("refbtn-on");
    });

    generateGPIOs("Physical", true);
    asidelements();
}

function asidelements() { 
    const asideItems = document.getElementsByClassName("aside-list-item");
    let x = 1;
    for(let i=0; i < asideItems.length; i++){
        asideItems[i].style.gridRow = x + 1
        x++
    }
 }

function generateGPIOs(type, firsttime) {

    const gpiocontainer = document.getElementsByClassName("gpiocontainer");

    let left = true;
    let rownum = 0;

    if( firsttime == true){
        //first generation
        for(let i = 1; i<=40; i++){
            let texttag = document.createElement("p");
            let gpiotag = document.createElement("div");
            let name = "gpio";
    
            texttag.classList.add("gpiotext");
            gpiotag.classList.add("gpio");
            gpiotag.classList.add("gpio-off");
            gpiotag.id = name + i.toString();
            
            name = name + i.toString();
            texttag.innerText = name;
    
            if(left == true){
                texttag.style.gridColumn = 2;
                gpiotag.style.gridColumn = 3;
                left = false;
                rownum = rownum + 1;
            }else{
                texttag.style.gridColumn = 6;
                gpiotag.style.gridColumn = 5;
                left = true;
            }
            gpiotag.style.marginLeft = 25 + '%';
    
            texttag.style.gridRow = rownum;
            gpiotag.style.gridRow = rownum;
    
            gpiocontainer[0].append(texttag);
            gpiocontainer[0].append(gpiotag);
        }
    } else {
        //generation after btn click
        const gpiotexts = document.getElementsByClassName("gpiotext");

        if (type == "Physical"){

            for(let i = 0; i<40; i++){
                gpiotexts[i].innerText = "gpio" + i.toString();
            }

        } else if (type == "BCM"){

            const bcmnames = 
            [
                "3v3 PW", "5v PW",
                "BCM 2", "5v PW",
                "BCM 3", "Ground",
                "BCM 4", "BCM 14",
                "Ground", "BCM 15",
                "BCM 17", "BCM 18",
                "BCM 27", "Ground",
                "BCM 22", "BCM 23",
                "3v3 PW", "BCM 24",
                "BCM 10", "Ground",
                "BCM 9", "BCM 25",
                "BCM 11", "BCM 8",
                "Ground", "BCM 7",
                "BCM 0", "BCM 1",
                "BCM 5", "Ground",
                "BCM 6", "BCM 12",
                "BCM 13", "Ground",
                "BCM 19", "BCM 16",
                "BCM 26", "BCM 20",
                "Ground", "BCM 21",
            ]

            for(let i = 0; i<40; i++){
                gpiotexts[i].innerText = bcmnames[i];
            }
        } else if (type == "WiringPi"){ 

            const wrpinames = 
            [
                "3v3 PW", "5v PW",
                "Pin 8", "5v PW",
                "Pin 9", "Ground",
                "Pin 7", "Pin 15",
                "Ground", "Pin 16",
                "Pin 0", "Pin 1",
                "Pin 2", "Ground",
                "Pin 3", "Pin 4",
                "3v3 PW", "Pin 5",
                "Pin 12", "Ground",
                "Pin 13", "Pin 6",
                "Pin 14", "Pin 10",
                "Ground", "Pin 11",
                "Pin 30", "Pin 31",
                "Pin 21", "Ground",
                "Pin 22", "Pin 26",
                "Pin 23", "Ground",
                "Pin 24", "Pin 27",
                "Pin 25", "Pin 28",
                "Ground", "Pin 29",
            ]

            for(let i = 0; i<40; i++){
                gpiotexts[i].innerText = wrpinames[i];
            }

        }
    }
}