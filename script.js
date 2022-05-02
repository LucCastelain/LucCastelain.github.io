function toggleMenu() {
    const menuToogle = document.querySelector(".toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToogle.classList.toggle("active");
    sidebar.classList.toggle("active");
}

function hideMenu() {
    const menuToogle = document.querySelector(".toggle");
    const sidebar = document.querySelector(".sidebar");

    menuToogle.classList.remove("active");
    sidebar.classList.remove("active");
}

function showContent(contentId) {
    const content = document.getElementById(contentId);

    content.classList.add("active");

    const children = content.getElementsByTagName("*");
    for(var child, i = 0; child = children[i]; ++i) {
        child.classList.add("active");
        if(child.className.includes("contentToggle")) {
            child.style.display = "";
        }
    }
}

function hideContent(contentId) {
    const content = document.getElementById(contentId);

    const children = content.getElementsByTagName("*");
    for(var child, i = 0; child = children[i]; ++i) {
        child.classList.remove("active");
        if(child.className == "contentToggle") {
            child.style.display = "none";
        }
    }

    content.classList.remove("active");
}