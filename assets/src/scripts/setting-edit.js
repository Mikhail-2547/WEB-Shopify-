const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
}

const initialState = document.querySelector(selectors.stateJson).textContent;

const state = JSON.parse(initialState);
const params = new URLSearchParams(state);
console.log(params);
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
function getUrlParams(url, state) {
    const urlInit = new URL(url);
    const params = new URLSearchParams(urlInit.search);
    params.append(state.querySelector("id"),'6');
    urlInit.search = (params);
    return urlInit;
}




document.querySelector(".pen").addEventListener("click", () => {
    console.log(getUrlParams(url, params[1]).href);
})


// function URL_ident(url) {
//     param
// }