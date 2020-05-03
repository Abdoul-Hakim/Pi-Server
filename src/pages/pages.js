function runPages() {
    const body = document.getElementsByTagName("body");
    console.log("body")
    body[0].classList.add("pages-body");
}

function runMenuBtn(status) {
    requirejs(["../styles/styles"], function (scriptforstyle) {
        rotateImgBtn(status);
    })
}

