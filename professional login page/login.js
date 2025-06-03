const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        const icon = input.parentElement.querySelector('i');
        if (input.value.trim() !== "") {
            icon.classList.add("active");
            // input.classList.add("active");
        } else {
            icon.classList.remove("active");
            // input.classList.remove("active");
        }
    });
});
