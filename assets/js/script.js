const Btn = document.querySelector(".scrollbtn");
        window.addEventListener("scroll", scrollTop);

        function scrollTop() {
        window.scrollY > 0
            ? (Btn.style.display = "block") //if ?
            : (Btn.style.display = "none"); //else :
        }
        function subirTela() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }