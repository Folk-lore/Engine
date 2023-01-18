function StoryCreator(createStory) {
    var storyCreator = document.createElement('form');
    storyCreator.id = "storyCreator";
    appendNameInput(storyCreator);
    appendPlotInput(storyCreator);
    appendCreateButton(storyCreator, createStory);
    return storyCreator;
}

function appendNameInput(storyCreator) {
    var nameInputParent = document.createElement('div');
    var nameInputLabel = document.createElement('label');
    nameInputLabel.htmlFor = "storyNameInput";
    nameInputLabel.innerText = "Name:";
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'storyNameInput';
    nameInput.id = 'storyNameInput';
    nameInputParent.appendChild(nameInputLabel);
    nameInputParent.appendChild(nameInput);
    storyCreator.appendChild(nameInputParent);
}


function appendPlotInput(storyCreator) {
    var plotInputParent = document.createElement('div');
    var plotInputLabel = document.createElement('label');
    plotInputLabel.htmlFor = "storyPlotInput";
    plotInputLabel.innerText = "Plot:";
    var plotInput = document.createElement('input');
    plotInput.type = 'text';
    plotInput.name = 'storyPlotInput';
    plotInput.id = 'storyPlotInput';
    plotInputParent.appendChild(plotInputLabel);
    plotInputParent.appendChild(plotInput);
    storyCreator.appendChild(plotInputParent);
}

function appendCreateButton(storyCreator, createStory) {
    var createButton = document.createElement('button');
    createButton.innerText = "Create";
    createButton.onclick = function () {
        createStory(convertDataToJson(storyCreator, createStory));
    };
    storyCreator.appendChild(createButton);
}

function convertDataToJson(storyCreator) {
    return JSON.stringify(Object.fromEntries(new FormData(storyCreator)));
}















