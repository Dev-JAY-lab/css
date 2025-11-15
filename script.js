 
document.addEventListener("DOMContentLoaded", () => {
    const text = "Developer";
    let index = 1;
    const typingElement = document.querySelector(".typing-text");

    function typeText() {
        if (index < text.length) {
            typingElement.innerHTML = text.slice(0, index + 7) + '<span class="cursor"></span>';
            index++;
            setTimeout(typeText, 90);
        } else {
            setTimeout(() => {
                index = 0;
                typeText();
            }, 1000); 
        }
    }

    typeText();

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
//
////



