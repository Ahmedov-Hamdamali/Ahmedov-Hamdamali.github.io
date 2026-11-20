
document.addEventListener("DOMContentLoaded", () => {

    // 1. Плавное появление элементов

    const animatedElements = document.querySelectorAll(
        ".intro, .section-card, .sections h2, .section-label"
    );

    animatedElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";
    });

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        animatedElements.forEach(element => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }


    // 2. Плавная прокрутка

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // 3. Эффекты карточек

    document.querySelectorAll(".section-card").forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transition = "0.3s ease";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transition = "0.3s ease";
        });

    });


    // 4. Анимация изображения

    const heroImage = document.querySelector(".hero-image img");

    if (heroImage) {
        heroImage.style.transition = "opacity 0.7s ease";

        if (heroImage.complete) {
            heroImage.style.opacity = "1";
        } else {
            heroImage.addEventListener("load", () => {
                heroImage.style.opacity = "1";
            });
        }
    }


    // 5. Подсветка активной страницы

    const currentPage = window.location.pathname;

    document.querySelectorAll(".navigation a").forEach(link => {

        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPage) {
            link.classList.add("active");
        }

    });


    // 6. Сообщение о загрузке

    console.log("Музей Маяковского успешно загружен!");

});
