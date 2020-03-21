(function(){
    let menustatus = true;
    const menuimg =  document.getElementById("menuimg"); 
    const imgbtn = document.getElementsByClassName("menubtn");
    
    imgbtn[0].addEventListener('click', function() {
        if (menustatus == true){
            menuimg.style.transform = 'rotate(90deg)';
            menustatus = false;
        }else{
            menuimg.style.transform = 'rotate(0deg)';
            menustatus = true;
        }   
    });

    generateGPIOs();
})()

function rotateimgbtn(status, img){
    if (status == true)
        img.style.transform = 'rotate(90deg)';
    else
        img.style.transform = 'rotate(0deg)';
}


function generateGPIOs() {

    const gpiocontainer = document.getElementsByClassName("gpiocontainer");

    let left = true;
    let rownum = 0;

    for(let i = 1; i<=20; i++){
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
            gpiotag.style.marginLeft = 25;

            left = false;
            rownum = rownum + 1;
        }else{
            texttag.style.gridColumn = 6;

            gpiotag.style.gridColumn = 5;
            gpiotag.style.marginRight = 25;
            left = true;
        }
        texttag.style.gridRow = rownum;
        gpiotag.style.gridRow = rownum;

        gpiocontainer[0].append(texttag);
        gpiocontainer[0].append(gpiotag);
    }
}