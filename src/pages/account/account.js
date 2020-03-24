(function runAccount(params) {
    requirejs(["../pages"],function (pages) {
        runPages()
    })

    const editbtn = document.getElementsByClassName("img-mod-btn");
    const input = document.getElementsByClassName("userdata");
    let toogler = {}

    for(let i = 0; i < input.length; i++){
        toogler[i] = true;
        input[i].classList.add("normal-input");
        input[i].setAttribute("readonly", "readonly");
        editbtn[i].src = "../../Images/bearbeiten.svg";
    }

    //toggle modify - store data
    editbtn[0].addEventListener('click', () => {
        if(toogler[0] == false){
            input[0].classList.add("normal-input");
            input[0].setAttribute("readonly", "readonly")
            input[0].classList.remove("changing-input");

            editbtn[0].src = "../../Images/bearbeiten.svg";

            toogler[0] = true;
        } else {
            input[0].classList.add("changing-input");
            input[0].removeAttribute("readonly");
            input[0].classList.remove("normal-input");

            editbtn[0].src = "../../Images/check.svg";

            toogler[0] = false;
        }
    });

    //if the focus is lost change colors
    input[0].addEventListener('focusout', () => {
        input[0].textContent = " ";
        input[0].classList.add("normal-input");
        input[0].setAttribute("readonly", "readonly")
        input[0].classList.remove("changing-input");

        editbtn[0].src = "../../Images/bearbeiten.svg";
    });

    editbtn[1].addEventListener('click', () => {
        if(toogler[1] == false){
            input[1].classList.add("normal-input");
            input[1].setAttribute("readonly", "readonly");
            input[1].classList.remove("changing-input");

            editbtn[1].src = "../../Images/bearbeiten.svg";

            toogler[1] = true;
        } else {
            input[1].classList.add("changing-input");
            input[1].removeAttribute("readonly");
            input[1].classList.remove("normal-input");


            editbtn[1].src = "../../Images/check.svg";

            toogler[1] = false;
        }
    });

    input[1].addEventListener('focusout', () => {
        input[1].textContent = " ";
        input[1].classList.add("normal-input");
        input[1].setAttribute("readonly", "readonly")
        input[1].classList.remove("changing-input");

        editbtn[1].src = "../../Images/bearbeiten.svg";
    });

    editbtn[2].addEventListener('click', () => {
        if(toogler[2] == false){
            input[2].classList.add("normal-input");
            input[2].setAttribute("readonly", "readonly");
            input[2].classList.remove("changing-input");

            editbtn[2].src = "../../Images/bearbeiten.svg";

            toogler[2] = true;
        } else {
            input[2].classList.add("changing-input");
            input[2].removeAttribute("readonly");
            input[2].classList.remove("normal-input");

            editbtn[2].src = "../../Images/check.svg";

            toogler[2] = false;
        }
    });

    input[2].addEventListener('focusout', () => {
        input[2].textContent = " ";
        input[2].classList.add("normal-input");
        input[2].setAttribute("readonly", "readonly")
        input[2].classList.remove("changing-input");

        editbtn[2].src = "../../Images/bearbeiten.svg";
    });
})()
