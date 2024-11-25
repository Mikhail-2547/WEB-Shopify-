const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
    deleteFormula: '[aria-controls="delete-formula"]',
    createFormula: '[aria-controls="create-formula"]',
    textInputforCreatingFormula: '.text_input_lol',
    discard: '.discard',
    save: '.save',
    create: '.create',
    formulasFolder: '#formulasFolder',
    template: '.formula-template'
}


//  CURRENT LIST OF FORMULAS
const currentSettings  = document.querySelectorAll(selectors.template);
// sessionStorage.setItem("myData", JSON.stringify(formulaTemplate));





// INITIALIZING THE EMTY STATE
const empty = document.querySelector('.empty-state');
const table = document.querySelector('.formulas_s')
if (currentSettings.length == 0){
    table.classList.add('hidden');
}

//  ADDING EMPTY STATE HIDDEN IF LIST OF FORMULAS IS NOT EMPTY

function emptyStateFunction( x ){
    if (x.length == 0) {
        empty.classList.remove('hidden');
        table.classList.add('hidden');
    }
    else {
        empty.classList.add('hidden');
        table.classList.remove('hidden');
    }
}
emptyStateFunction(currentSettings);



// CURRENT URL
const url = new URL(window.location)


// JSON FROM HTML FILE
const initialState = document.querySelector(selectors.stateJson).textContent;
const state = JSON.parse(initialState);

// NO NEED FOR NOW
const params = new URLSearchParams(state[1]);


// TESTING
console.log(url.search);
console.log(url);
console.log(currentSettings)

// GOING TO ANOTHER LINK
const ev = document.querySelector(".b_0");
const es = document.querySelector(".linkToFormulasPage");

(ev, es).addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/WEB-Shopify--MIT-21-Mikhail-Melik-Kazarian/setting.html?id=1&id=4';
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('trash')) {
        const parent = event.target.parentElement.parentElement;
        parent.remove();
        emptyStateFunction(document.querySelectorAll(".formula-template"));
    }
});


document.querySelector(selectors.discard).addEventListener('click', () => {
    const textInput = document.querySelector(selectors.textInputforCreatingFormula).value;
    console.log(textInput);
})

const saveButton = document.querySelector(selectors.save);




const field = document.querySelector(selectors.formulasFolder);
const template = document.querySelector(selectors.template);

const createFormula = document.querySelector(selectors.createFormula);

createFormula.addEventListener('click', () => {
    if (document.querySelector(selectors.textInputforCreatingFormula).value == "") {
        console.log("Write something ...");
        alert("Write something ...");
    }
    else{
        const newElement = document.createElement("tr");
        newElement.innerHTML = template.innerHTML;
        newElement.querySelector(".linkToFormulasPage").innerText = document.querySelector(selectors.textInputforCreatingFormula).value;
    
        console.log(newElement);
        field.appendChild(newElement);
        document.querySelector(selectors.textInputforCreatingFormula).value = "";
    }
})
