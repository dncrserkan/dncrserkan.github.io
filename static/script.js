
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}


function closeNavbar() {
    const navbarToggle = document.querySelector('.navbar-collapse');
    if (navbarToggle.classList.contains('show')) {
        new bootstrap.Collapse(navbarToggle).toggle();
    }
}


const icons = [
    {
      id: "icon-github",
      hoverSrc: "static/icons/github-mark-hover.svg",
      originalSrc: "static/icons/github-mark-white.svg"
    },
    {
      id: "icon-cults3d",
      hoverSrc: "static/icons/cults3d-hover.svg",
      originalSrc: "static/icons/cults3d-white.svg"
    },
    {
      id: "icon-mail",
      hoverSrc: "static/icons/mail-hover.svg",
      originalSrc: "static/icons/mail-white.svg"
    }
];


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.id.split('-')[0];
            showTab(tabName);
        });
    });

    showTab('home');



    icons.forEach(icon => {
        const imgElement = document.getElementById(icon.id);

        imgElement.addEventListener("mouseover", () => {
            imgElement.src = icon.hoverSrc;
        });

        imgElement.addEventListener("mouseout", () => {
            imgElement.src = icon.originalSrc;
        });
    });




    // document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
    //     link.addEventListener('click', closeNavbar);
    // });

    // document.querySelector('.navbar-brand').addEventListener('click', closeNavbar);

    // document.querySelector('.navbar-toggler).addEventListener('click', closeNavbar);

    // document.addEventListener('click', (event) => {
    //     const isClickInside = document.querySelector('.navbar').contains(event.target);
    //     if (!isClickInside) {
    //         closeNavbar();
    //     }
    // });


    document.addEventListener('click', closeNavbar);


});


