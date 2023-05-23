const menuIcon = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const closeIcon = document.querySelector(".fa-x");


menuIcon.addEventListener("click", () => {
    sidebar.style.width = "600px";
    
})
closeIcon.addEventListener("click", () => {
    sidebar.style.width = "0";
    
})