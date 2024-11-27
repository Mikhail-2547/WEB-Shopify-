
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

// const state = getState();
// const url = window.location.href;
// const params = getUrlParams(url);
// const settingId = params.settingId;
// console.log(settingId);
// const currentSetting = state.settings.find(setting => setting.id == settingId);

// function getCurrentFormula(params) {
//     const formulaTemplate = {
//         id: Date.now(),
//         title: 'Formula name',
//         currency: 'BTC',
//         formula: 'X * Y',
//         frequency: 1000,
//         targets: {
//             collectionsIds: [],
//             products: [],
//         }
//     }
//     if (formulaId) {
//         return currentSetting.formulas.find(formula => formula.id == formulaId);
//     }
//     else {
//         const formula = { ...formulaTemplate };
//         currentSetting.formulas.push(formula);
//         updateState();
//         return formula;
//     }
// }

let CurrentFormula = getCurrentFormula();
let savedFormula = { ...CurrentFormula };

// function createCurrencySearchResult(currencyId) {
    
// }

// function renderPage() {

// }