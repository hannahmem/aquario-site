
const menuButton = document.querySelector(".hamburger-menu");
const checkbox = document.getElementById("sidebar-active");
const menuLinks = document.querySelectorAll("li a");

const syncMenuState = () => {
    const isOpen = checkbox.checked;
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

menuButton.addEventListener("focus", () => {
    menuButton.classList.add("focused");
    menuButton.setAttribute("data-focused", "true");
});

menuButton.addEventListener("blur", () => {
    menuButton.classList.remove("focused");
    menuButton.setAttribute("data-focused", "false");
});

checkbox.addEventListener("change", syncMenuState);

menuButton.addEventListener("keydown", (event) => {
    if (["Enter", " "].includes(event.key)) {
        event.preventDefault();
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && checkbox.checked) {
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event("change"));
        menuButton.focus();
    }
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
    })
})

syncMenuState();