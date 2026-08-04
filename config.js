const CONFIG = {
    BASE_URL: "https://fire-pixel-studio.github.io/Diablo-repo"
};

document.addEventListener("DOMContentLoaded", () => {
    const OLD = "https://muldhon.com";

    document.querySelectorAll("[src],[href]").forEach(el => {
        if (el.src && el.src.startsWith(OLD)) {
            el.src = el.src.replace(OLD, CONFIG.BASE_URL);
        }

        if (el.href && el.href.startsWith(OLD)) {
            el.href = el.href.replace(OLD, CONFIG.BASE_URL);
        }
    });
});