const STORY_FORM_ID = "storyCreator";
const STORY_FORM_CLASS = "storyCreatorClass";

const READER_FORM_ID = "storyReader";
const READER_FORM_CLASS = "storyReaderClass";

const METADATA_FORM_ID = "metadata";
const METADATA_FORM_CLASS = "metadataClass";

const HOME_ID = "home";
const HOME_CLASS = "homeClass";

const CANVAS_ID = "canvas";
const CANVAS_CLASS = "canvasClass";

const STORY_FORM_TITLE_CONTAINER_CLASS = "nameContainer";
const STORY_FORM_TITLE_INPUT_NAME = "title";
const STORY_FORM_TITLE_INPUT_ID = "storyTitleID";
const STORY_FORM_TITLE_INPUT_CLASS = "storyTitleInputClass";
const STORY_FORM_TITLE_LABEL_CLASS = "storyTitleLabelClass";
const STORY_FORM_TITLE_LABEL_TEXT = "Title";

const STORY_FORM_SUMMARY_CONTAINER_CLASS = "summaryContainer";
const STORY_FORM_SUMMARY_NAME = "summary";
const STORY_FORM_SUMMARY_ID = "summaryId";
const STORY_FORM_SUMMARY_CLASS = "summaryClass";
const STORY_FORM_SUMMARY_LABEL_CLASS = "summaryLabelClass";
const STORY_FORM_SUMMARY_LABEL_TEXT = "Summary";

const STORY_FORM_CREATE_BUTTON_ID = "btnCreate";
const STORY_FORM_CREATE_BUTTON_CLASS = "btnCreate";
const STORY_FORM_CREATE_BUTTON_TEXT = "Create";


function StoryCreator(createStory) {
    var storyForm = createForm(STORY_FORM_ID, STORY_FORM_CLASS);
    var metadataDiv = createMetadata(METADATA_FORM_ID, METADATA_FORM_CLASS);
    var canvasDiv = createMetadata(CANVAS_ID, CANVAS_CLASS);
    appendMetadata(metadataDiv, storyForm, createStory);
    appendCanvas(canvasDiv, storyForm)
    return storyForm;
}

function createCanvas(id, className) {
    var canvasDiv = document.createElement('div');
    canvasDiv.id = id;
    canvasDiv.classList.add(className);
    return canvasDiv;
}

function appendCanvas(canvasDiv, storyForm) {
    appendTextarea(canvasDiv)
    storyForm.appendChild(canvasDiv);
}

function createMetadata(id, className) {
    var metadataDiv = document.createElement('div');
    metadataDiv.id = id;
    metadataDiv.classList.add(className);
    return metadataDiv;
}

function appendMetadata(metadataDiv, storyForm, createStory) {
    appendNameInput(metadataDiv)
    appendTextareaLabel(metadataDiv)
    appendCreateButton(metadataDiv, createStory, storyForm);
    storyForm.appendChild(metadataDiv);
}

function appendNameInput(div) {
    var nameInputParent = createLabelTextInputPair(
        STORY_FORM_TITLE_LABEL_TEXTSTORY_FORM_TITLE_CONTAINER_CLASS,
        STORY_FORM_TITLE_INPUT_NAME,
        STORY_FORM_TITLE_INPUT_ID,
        STORY_FORM_TITLE_INPUT_CLASS,
        STORY_FORM_TITLE_LABEL_CLASS,
        STORY_FORM_TITLE_LABEL_TEXT
    );
    div.appendChild(nameInputParent);
}

function appendTextareaLabel(div) {
    var textAreaLabelParent = createTextareaLabelPair(
        STORY_FORM_SUMMARY_CONTAINER_CLASS,
        STORY_FORM_SUMMARY_NAME,
        STORY_FORM_SUMMARY_ID,
        STORY_FORM_SUMMARY_CLASS,
        STORY_FORM_SUMMARY_LABEL_CLASS,
        STORY_FORM_SUMMARY_LABEL_TEXT,
        false
    );
    div.appendChild(textAreaLabelParent);
}

function appendTextarea(storyForm, readOnly, data) {
    var nameInputParent = createTextarea("content", "contentId", "contentClass", readOnly, data);

    storyForm.appendChild(nameInputParent);
}

function appendTitle(div, text) {
    var label = createTitle("id", "className", text);

    div.appendChild(label);
}

function appendCreateButton(div, createStory, storyForm) {
    var button = createButton(
        STORY_FORM_CREATE_BUTTON_ID,
        STORY_FORM_CREATE_BUTTON_CLASS,
        STORY_FORM_CREATE_BUTTON_TEXT,
        onclick
    );
    function onclick() {
        createStory(convertFormDataToJson(storyForm));
    };
    div.appendChild(button);
}


function convertFormDataToJson(form) {
    return JSON.stringify(Object.fromEntries(new FormData(form)));
}


function createForm(id, className) {
    var form = document.createElement('form');
    form.id = id;
    form.classList.add(className);
    return form;
}

function createLabelTextInputPair(containerClass, inputName, inputId, inputClass, labelClass, labelText) {
    var containerDiv = document.createElement('div');
    containerDiv.classList.add(containerClass);
    var label = createLabel(inputName, labelText, labelClass);
    var textInput = createTextInput(inputName, inputId, inputClass);
    containerDiv.appendChild(label);
    containerDiv.appendChild(textInput);
    return containerDiv;
}

function createLabel(nameFor, text, className) {
    var label = document.createElement('label');
    label.htmlFor = nameFor;
    label.classList.add(className);
    label.innerText = text;
    return label;
}

function createTextInput(name, id, className) {
    var input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.id = id;
    input.classList.add(className);
    return input;
}

function createTextareaLabelPair(containerClass, inputName, inputId, inputClass, labelClass, labelText, readonly, data) {
    var containerDiv = document.createElement('div');
    containerDiv.classList.add(containerClass);
    var label = createLabel(inputName, labelText, labelClass);
    var textArea = createTextarea(inputName, inputId, inputClass, readonly, data);
    containerDiv.appendChild(label);
    containerDiv.appendChild(textArea);
    return containerDiv;
}

function createTextarea(name, id, className, readOnly, data = "") {
    var textarea = document.createElement('textarea');
    textarea.name = name;
    textarea.value = data
    textarea.id = id;
    textarea.readOnly = readOnly;
    textarea.classList.add(className);
    return textarea;
}

function createTitle(id, className, text) {
    var label = document.createElement('h2');
    label.id = id;
    label.classList.add(className);
    label.innerHTML = text;
    return label;
}

function createButton(id, className, text, onclick) {
    var button = document.createElement('button');
    button.id = id;
    button.classList.add(className);
    button.innerText = text;
    button.onclick = onclick;
    return button;
}

////////////STORY READER////////////
////////////STORY READER////////////
////////////STORY READER////////////
function StoryReader(data) {
    var storyForm = createForm(READER_FORM_ID, READER_FORM_CLASS);
    appendTitle(storyForm, data.title)
    appendTextarea(storyForm, true, data.content)
    return storyForm;
}

////////////HOME////////////
////////////HOME////////////
////////////HOME////////////
function Home(data) {
    var home = createForm(HOME_ID, HOME_CLASS);
    appendTitle(home, "Home")
    var cardContiner = createCardContainer();
    appendCards(data, cardContiner)
    home.append(cardContiner)
    return home;
}

function createCardContainer(){
    var cardContainer = document.createElement('div');
    cardContainer.classList.add("cardContainer");
    return cardContainer;
}

function appendCards(data, div){
    data.map(d => {
        div.append(createCard(d))
    })
}

function createCard(data){
    var container = document.createElement('div');
    container.classList.add("card");
    var label = createLabel("label", data.title, "label");
    var textarea = createTextarea("title", "title", "title", true, data.description)
    container.appendChild(label);
    container.appendChild(textarea);
    container.onclick = redirect
    return container;
}

function redirect(){
    window.location.href = "./storyReader.html"
}
