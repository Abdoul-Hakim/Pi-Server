function runloader() {
    if (document.readyState !== "ready"){
        const body = document.getElementsByTagName("body");
        body[0].classList.add("bodyloading");
        loadinganimation();
    }
    setTimeout(load, 2500)
}

function loadinganimation(){
    anime({
        targets: '#loader',
        width: ['20px', '100px', '300px'],
        easings: ['easeInSine','easeOutCubic'],
        direction: 'normal',
        backgroundColor: '#FFF',
        loop: false,
        duration: 1500
    });
}

function load(){
    const body = document.getElementsByTagName("body");
    const lcontainer = document.getElementsByClassName("loadercontainer")
    const html = document.getElementsByTagName("html");
    

    const temp = document.getElementsByTagName("template")[0];
    let clone = temp.content.cloneNode(true);
    document.body.appendChild(clone);

    body[0].classList.remove("bodyloading");
    body[0].classList.add("bodyready");

    lcontainer[0].remove();
    html[0].classList.add("bodyready");

    const header = document.getElementById("header");
    const aside = document.getElementById("aside");
    const main = document.getElementById("main");

    header.classList.remove("collapse");
    main.classList.remove("collapse");
}