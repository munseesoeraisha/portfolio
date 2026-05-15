document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".project-card");
            const extraText = card.querySelector(".extra-text");

            // toggle visibility
            extraText.classList.toggle("show");

            // change button text
            if (extraText.classList.contains("show")) {
                this.innerText = "Hide Project";
            } else {
                this.innerText = "View Project";
            }
        });
    });
});