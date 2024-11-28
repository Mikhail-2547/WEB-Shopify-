
function getState() {
    const data = localStorage.getItem('state');
    return JSON.parse(data);
}
function updateState(state) {
    localStorage.setItem('state', JSON.stringify(state));
}

function getUrlParams(url) {
    const params = new URL(url).searchParams;
    return Object.fromEntries(params.entries());
}

const state = getState();
if (state){
    console.log("🔥#GOOD#🔥 ---> state.json parsed from localeStorage!!!")
}
const url = window.location.href;
const params = getUrlParams(url);
console
const settingId = params.settingId;
console.log(settingId);
const currentSetting = state.settings.find(setting => setting.id == settingId);

function getCurrentFormula(currentSetting, formulaId) {
    const formulaTemplate = {
        id: Date.now(),
        title: 'Formula name',
        currency: 'BTC',
        formula: 'X * Y',
        frequency: 1000,
        targets: {
            collectionsIds: [],
            products: [],
        }
    }
    if (!formulaId) {
        return currentSetting.formulas.find(formula => formula.id == formulaId);
    }
    else {
        const formula = { ...formulaTemplate };
        currentSetting.formulas.push(formula);
        return formula;
    }
}

let currentFormula = getCurrentFormula(currentSetting, params.id);
console.log(currentFormula);
let savedFormula = { ...currentFormula };

const selectors = {
    searchCurrency: '#searchCurrency',
    booksContent: '.books_content',
    saveCurrency: '#saveCurrency',
    formulaTitleInput: '#formulaTitleInput',
    formulaInput: '#formulaInput',
    frequencyInput: '#frequencyInput',
    searchCurrencyTemplate: '.book_content'
}

document.querySelector(selectors.searchCurrency).addEventListener('click', () => {
    document.querySelector(selectors.booksContent).classList.remove('hidden');
})

document.querySelector(selectors.saveCurrency).addEventListener('click', () => {
    // const selectedCurrency = document.querySelector(selectors.saveCurrency);

    document.querySelector(selectors.booksContent).classList.add('hidden');
})







const searchCurrencyTemplate = document.querySelector(selectors.searchCurrencyTemplate);
console.log(searchCurrencyTemplate);






function createCurrencySearchResult(currencyId) {
    const searchCurrencyTemplate = document.querySelector(selectors.searchCurrencyTemplate);
    const searchCurrencyCopy = searchCurrencyTemplate.cloneNode(true);

    const searchCurrencyInput = searchCurrencyCopy.querySelector('input[type="radio"]');
    const searchCurrencyLabel = searchCurrencyCopy.querySelector('.book_content_title');

    searchCurrencyCopy.classList.remove('hidden');
    searchCurrencyInput.value = currencyId;
    searchCurrencyInput.id = currencyId;
    searchCurrencyLabel.innerText = currencyId;

    return searchCurrencyCopy;
}


function renderPage(currentFormula) {
    formulaTitleInput.value = currentFormula.title;
    formulaInput.value = currentFormula.formula;
    frequencyInput.value = currentFormula.frequency;

    const currencies = state?.currencies || {};
    for (const currencyId in currencies) {
        if (Object.prototype.hasOwnProperty.call(currencies, currencyId)) {
            const currencyElement = createCurrencySearchResult(currencyId);
            document.querySelector(selectors.booksContent).appendChild(currencyElement);
        }
    }
}
renderPage(currentFormula);