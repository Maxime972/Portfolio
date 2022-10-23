function menumobile() {
    const btn = document.querySelector(".burger");
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');

    btn.addEventListener("click", () => {
        //console.log("click burger");
        header.classList.toggle("show-nav");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            //console.log("click lien");
            header.classList.remove("show-nav");
        });
        
    });
}

menumobile();