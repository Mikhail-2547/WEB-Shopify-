const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
    formulasLine: '.formula-template',
    createFormulaButton: '[aria-controls="create-formula"]',
    deleteFormulaButton: '[aria-controls="delete-formula"]',
    formulasTable: '.table_formulas'
}

const initialState = document.querySelector(selectors.stateJson).textContent;
const state = JSON.parse(initialState);


function deleteFormula() {
    const formulasline = document.querySelector(selectors.formulasLine);
    const deletee = document.querySelector(selectors.deleteFormulaButton);
    deletee.addEventListener("click", () => {
        formulasline.remove();
        console.log("Кнопка нажата!!!") 
    })
}

function createElementWithTemplate(template) {
    const template = document.querySelector(template);
    return template.content.cloneNode(true);
}

const table = document.querySelector("id","lol");
const newRow = createElementWithTemplate(selectors.formulasLine);


createFormulaButton.addEventListener("click", () => {
    const newRow = createElementWithTemplate(selectors.formulasLine);
    console.log("lol");
    if (newRow) {
        table.appendChild(newRow);
    }
})