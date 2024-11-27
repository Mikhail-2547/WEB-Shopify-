const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
    deleteFormula: 'trash',
    createFormula: 'create_formula',
    pen: 'pen',
    textInputforCreatingFormula: '.text_input_lol',
    discard: '.discard',
    save: '.save',
    formulasFolder: '#formulasFolder',
    template: '.formula-template',
    createFormulaFromEmptyState: 'b_0',
    link: 'linkToFormulasPage',
    table: '.formulas_s',
    home: '#home'
}


function getState() {
    const data = localStorage.getItem('state');
    return JSON.parse(data);
}
function updateState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

const state = getState();
if (state){
    console.log("🔥#GOOD#🔥 ---> state.json parsed from localeStorage!!!")
}







//  CURRENT LIST OF FORMULAS
const currentSettings  = document.querySelector(selectors.formulasFolder);
//  SAVED LIST OF FORMULAS
const savedSettings = currentSettings.cloneNode(currentSettings);

const empty = document.querySelector(selectors.emptyState);
const table = document.querySelector(selectors.table)

// CURRENT URL
const url = new URL(window.location);


// INITIALIZING THE EMTY STATE




//  ADDING EMPTY STATE HIDDEN IF LIST OF FORMULAS IS NOT EMPTY

function emptyStateFunction( x ){
    if (x.childElementCount == 1) {
        empty.classList.remove('hidden');
        table.classList.add('hidden');
    }
    else {
        empty.classList.add('hidden');
        table.classList.remove('hidden');
    }
}
emptyStateFunction(currentSettings);




// JSON FROM HTML FILE
// const initialState = document.querySelector(selectors.stateJson).textContent;
// const state = JSON.parse(initialState);


document.addEventListener('click', (event) => {
    if (event.target.classList.contains(selectors.deleteFormula)) {
        const parent = event.target.parentElement.parentElement;
        parent.remove();
        emptyStateFunction(currentSettings);
    }
});


// EDIT
document.addEventListener('click', (event) => {
    if (event.target.classList.contains(selectors.pen)) {
        if (document.querySelector(selectors.textInputforCreatingFormula).value == "") {
            console.log("Write something ...");
            alert("Write something ...");
        }
        else{
            const sibling = event.target.parentElement.parentElement.firstElementChild.firstElementChild;
            sibling.innerText = document.querySelector(selectors.textInputforCreatingFormula).value;
            document.querySelector(selectors.textInputforCreatingFormula).value = "";
        }
    }
});








const field = document.querySelector(selectors.formulasFolder);
const template = document.querySelector(selectors.template);
// CREATE FORMULA
document.addEventListener('click', (event) => {
    if (event.target.classList.contains(selectors.createFormula) || event.target.classList.contains(selectors.createFormulaFromEmptyState)) {
        if (document.querySelector(selectors.textInputforCreatingFormula).value == "") {
            console.log("Write something ...");
            alert("Write something ...");
        }
        else{
            const newElement = document.createElement("tr");
            newElement.classList.add("." + selectors.template);
            newElement.innerHTML = template.innerHTML;
            newElement.querySelector("." + selectors.link).innerText = document.querySelector(selectors.textInputforCreatingFormula).value;
        
            console.log(newElement);
            field.appendChild(newElement);
            document.querySelector(selectors.textInputforCreatingFormula).value = "";
            emptyStateFunction(currentSettings);
        }
    }
});



const saveButton = document.querySelector(selectors.save);
const discardButton = document.querySelector(selectors.discard);


// SAVE
saveButton.addEventListener('click', () => {
    savedSettings.innerHTML = currentSettings.innerHTML;
    console.log(savedSettings);
})
// DISCARD
discardButton.addEventListener('click', () => {
    document.querySelector(selectors.formulasFolder).innerHTML = savedSettings.innerHTML;
    console.log(document.querySelector(selectors.formulasFolder));
    emptyStateFunction(currentSettings);
})



// URL MANIPULATION
document.addEventListener('click', (e) => {
    if (e.target.classList.contains(selectors.link)) {

        const child = e.target.parentElement.parentElement; // formula-template
        const parent = child.parentElement; // formulaFolder
        const children = Array.from(parent.children); // children of formulaFolder
        const index = children.indexOf(child); // index of formula template
        console.log(index);
        const urlToMerge = "http://127.0.0.1:5500/WEB-Shopify--MIT-21-Mikhail-Melik-Kazarian/";
        // window.location.href = `${urlToMerge}formula.html${url.search}&id=${index}#${e.target.innerText}`;
        window.location.href = `${urlToMerge}formula.html${url.search}&id=${index}`;
    }
})
document.querySelector(selectors.home).addEventListener('click', () => {
    window.location.href = "http://127.0.0.1:5500/WEB-Shopify--MIT-21-Mikhail-Melik-Kazarian/";
})
