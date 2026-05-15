function toggleText(button){

    const extraText =
    button.nextElementSibling;

    extraText.classList.toggle("show");

    if(extraText.classList.contains("show")){

        button.innerText = "Hide Project";

    } else {

        button.innerText = "View Project";

    }

}