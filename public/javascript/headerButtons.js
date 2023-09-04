// Importing HTML Elements
var changeThemeTrigger = document.getElementById("color_mode");
var menuTrigger = document.getElementById("menu_button");
var menu = document.getElementById("nav");

changeThemeTrigger.onclick = () => {
    document.body.classList.toggle("darkTheme")
    if (document.body.classList.contains("darkTheme")) {
        changeThemeTrigger.innerHTML = '<span class="material-symbols-rounded">dark_mode</span>'
    } else {
        changeThemeTrigger.innerHTML = '<span class="material-symbols-rounded">light_mode</span>'
    }
}

menuTrigger.onclick = () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'flex'
        menuTrigger.innerHTML = '<span class="material-symbols-rounded">close</span>'
    } else {
        menu.style.display = 'none'
        menuTrigger.innerHTML = '<span class="material-symbols-rounded">menu</span>'
    }
}