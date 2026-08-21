

/* =========================
   PANTALLA DE BIENVENIDA
========================= */

const loader =
    document.getElementById("loader");


window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader.classList.add(
                    "hidden"
                );

            },
            4200
        );

    }
);



/* =========================
   MENÚ MÓVIL
========================= */

const menuToggle =
    document.getElementById(
        "menuToggle"
    );


const nav =
    document.querySelector(
        ".nav"
    );


if (
    menuToggle &&
    nav
) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );

        }
    );

}


const navLinks =
    document.querySelectorAll(
        ".nav a"
    );


navLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );

            }
        );

    }
);



/* =========================
   ANIMACIONES AL HACER SCROLL
========================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.15

        }

    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);



/* =========================
   CARRUSEL DE PROYECTOS
========================= */

const projectsTrack =
    document.querySelector(
        ".projects-track"
    );


const previousProject =
    document.querySelector(
        ".carousel-prev"
    );


const nextProject =
    document.querySelector(
        ".carousel-next"
    );


let currentProject = 0;



function getProjectsPerView() {

    if (
        window.innerWidth <= 700
    ) {

        return 1;

    }


    if (
        window.innerWidth <= 1000
    ) {

        return 2;

    }


    return 3;

}



function updateProjectsCarousel() {

    const projectCards =
        document.querySelectorAll(
            ".projects-track .project-card"
        );


    if (
        !projectsTrack ||
        projectCards.length === 0
    ) {

        return;

    }


    const projectsPerView =
        getProjectsPerView();


    const maxProject =
        Math.max(
            0,
            projectCards.length -
            projectsPerView
        );


    if (
        currentProject >
        maxProject
    ) {

        currentProject =
            maxProject;

    }


    const firstCard =
        projectCards[0];


    const cardWidth =
        firstCard.offsetWidth;


    const gap = 25;


    const distance =
        currentProject *
        (
            cardWidth +
            gap
        );


    projectsTrack.style.transform =
        `translateX(-${distance}px)`;

}



if (
    nextProject &&
    previousProject
) {

    nextProject.addEventListener(
        "click",
        () => {

            const projectCards =
                document.querySelectorAll(
                    ".projects-track .project-card"
                );


            const projectsPerView =
                getProjectsPerView();


            const maxProject =
                Math.max(
                    0,
                    projectCards.length -
                    projectsPerView
                );


            if (
                currentProject <
                maxProject
            ) {

                currentProject++;

            }

            else {

                currentProject = 0;

            }


            updateProjectsCarousel();

        }
    );



    previousProject.addEventListener(
        "click",
        () => {

            const projectCards =
                document.querySelectorAll(
                    ".projects-track .project-card"
                );


            const projectsPerView =
                getProjectsPerView();


            const maxProject =
                Math.max(
                    0,
                    projectCards.length -
                    projectsPerView
                );


            if (
                currentProject >
                0
            ) {

                currentProject--;

            }

            else {

                currentProject =
                    maxProject;

            }


            updateProjectsCarousel();

        }
    );

}


window.addEventListener(
    "resize",
    () => {

        updateProjectsCarousel();

    }
);


updateProjectsCarousel();



/* =========================
   PREGUNTAS DE SERVICIOS
========================= */

const serviceQuestions =
    document.querySelectorAll(
        ".service-question"
    );


serviceQuestions.forEach(
    question => {

        question.addEventListener(
            "click",
            () => {

                const answer =
                    question.nextElementSibling;


                question.classList.toggle(
                    "active"
                );


                answer.classList.toggle(
                    "active"
                );

            }
        );

    }
);
