const abLink = document.getElementById("ab");
const hmLink = document.getElementById("hm");
const projLink = document.getElementById("proj");
const contactLink = document.getElementById("contact");


const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const projSection = document.getElementById("projects");
const contact = document.getElementById("contacts");



abLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to "#")
    aboutSection.scrollIntoView({ behavior: "smooth" });
});

hmLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to "#")
    homeSection.scrollIntoView({ behavior: "smooth" });
});

projLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to "#")
    projSection?.scrollIntoView({ behavior: "smooth" });
});

contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior (e.g., navigating to "#")
    contact.scrollIntoView({ behavior: "smooth" });
});