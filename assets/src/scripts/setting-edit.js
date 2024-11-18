const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
}

const initialState = document.querySelector(selectors.stateJson).textContent;

const state = JSON.parse(initialState);
const params = new URLSearchParams(state);

const url = window.location.href;



// function getUrlParams(url) {
//     const params = {};
//     const parser = new URL(url);
//     console.log(parser);
//     const queryString = parser.search.slice(1);
//     const queryArray = queryString.split("&");
    
//     queryArray.forEach(param => {
//       const [key, value] = param.split('=');
//       params[decodeURIComponent(key)] = decodeURIComponent(value || '');
//     });
  
//     console.log(params);
    
//     return params;
//   }
function getUrlParams(url) {
    const urlInit = new URL(url);
    const params = new URLSearchParams(urlInit.search);
    params.append('id','6');

}


getUrlParams(url);



// function URL_ident(url) {
//     param
// }