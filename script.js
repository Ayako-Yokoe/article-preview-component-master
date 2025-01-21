const activeFooter = document.getElementById("mobile-active-footer");
const shareButton = document.getElementById("share-icon-container");
const profile = document.querySelector(".profile");
const footer = document.querySelector(".footer");
const shareIcon = document.querySelector(".share-icon");
const toolTip = document.getElementById("tooltip");

shareButton.addEventListener("click", () => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        const isActiveMobile = activeFooter.classList.contains("visible");
        if (isActiveMobile) {
            activeFooter.classList.remove("visible");
            profile.classList.remove("hidden");
            footer.style.backgroundColor = "white";
            shareButton.style.backgroundColor =
                "var(--color-light-grayish-blue)";
            shareIcon.style.fill = "#6E8098";
        } else {
            activeFooter.classList.add("visible");
            profile.classList.add("hidden");
            footer.style.backgroundColor =
                "var(--color-very-dark-grayish-blue)";
            shareButton.style.backgroundColor =
                "var(--color-desaturated-dark-blue)";
            shareIcon.style.fill = "white";
        }
    } else {
        const isActiveDesktop = toolTip.classList.contains("visible");
        if (isActiveDesktop) {
            toolTip.classList.remove("visible");
        } else {
            toolTip.classList.add("visible");
        }
    }
});
