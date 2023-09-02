// Constants
const projectInformationFilePath = "../resources/json/project_information.json";

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
            var newCard = `<div class="card"><h3>${fileData[i].project_name}</h3><img src="/public/resources/images/sample.png"><p>${fileData[i].description}</p><div class="cardButtonContainer"><button class="secondaryButton" onclick="window.open('${fileData[i].github_link}', '_blank')">GitHub</button><button class="secondaryButton" onclick="window.open('${fileData[i].live_example_link}', '_blank')">Live Site/App</button></div></div>`;
            projectsContainer.innerHTML += newCard;
        }
    })