// Importing HTML Elements
var changeThemeTrigger = document.getElementById("color_mode");

changeThemeTrigger.addEventListener('onclick', () => {
    console.log("Test")
    document.body.classList.toggle("darkTheme")
})

changeThemeTrigger.onclick = () => {
    document.body.classList.toggle("darkTheme")
    if (document.body.classList.contains("darkTheme")) {
        changeThemeTrigger.innerHTML = '<span class="material-symbols-rounded">dark_mode</span>'
    } else {
        changeThemeTrigger.innerHTML = '<span class="material-symbols-rounded">light_mode</span>'
    }
}