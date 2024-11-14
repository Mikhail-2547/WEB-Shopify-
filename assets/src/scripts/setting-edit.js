const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
}






const url = new URL('http://127.0.0.1:5500/WEB-Shopify--MIT-21-Mikhail-Melik-Kazarian/index.html')

const initialState = document.querySelector(selectors.stateJson).textContent;

const state = JSON.parse(initialState);
const params = new URLSearchParams(state[1]);

