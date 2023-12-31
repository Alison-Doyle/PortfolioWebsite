// Constants
const projectInformationFilePath = "./public/resources/json/project_information.json";

// HTML Elements -> JS ELements
var projectsContainer = document.getElementById("projectCardsContainer");

fetch(projectInformationFilePath)
    .then((result) => {
        // Getting data from JSON file
        return result.json();
    })
    .then((fileData) => {
        // Creating project card and adding it to index.html
        for (var i = 0; i < fileData.length; i++) {
            var newCard = `<div class="card"><h3>${fileData[i].project_name}</h3><img src="${fileData[i].image}"><p>${fileData[i].description}</p><div class="cardButtonContainer"><button class="cardButton" onclick="window.open('${fileData[i].github_link}', '_blank')">GitHub</button><button class="cardButton" onclick="window.open('${fileData[i].live_example_link}', '_blank')">Live Site/App</button></div></div>`;
            projectsContainer.innerHTML += newCard;
        }
    })