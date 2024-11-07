
// Selectors from index.html we use to interact with the DOM
const selectors = {
    stateJson: '#state',
    emptyState: '.empty-state',
    settingsTable: '.settings-table',
    createSettingButton: '[aria-controls="create-setting"]',
    settingsList: '.settings-list',
    settingTemplate: '#setting-line-template',
    settingLine: '.setting-line',
    settingLink: '.setting-link',
    settingStatusBadge: '.setting-status-badge',
    settingRemoveButton: '[aria-controls="create-remove"]'
}

// start here
const initialState = document.querySelector(selectors.stateJson).textContent;

// Initial state is a JSON string, so we need to parse it to get the actual object.
const state = JSON.parse(initialState);

function createSettingHandler() {

}


/**
 * Removes the setting from the state and the DOM.
 * 
 * 
 * @param {Object} settingLineElement - The setting line element to remove.
 */


function removeSettingHandler(settingLineElement) {
    //Remove the setting from the DOM
    settingLineElement.remove();
    //remove the setting from the state
    const settingIndexToRemove = state.settings.findIndex((setting) => setting.id === settingLineElement.id);
    state.settings.splice(settingIndexToRemove, 1);
    toggleEmptyState();
}

/**
 * Function initialization
 * 
 * Creates line setting elements based on the state by copying the template element, change its content and append it to the
 * 
 * @param {Object} setting - The setting object to render
 */

function renderSettingElement(setting) {
    // 1. Find the setting template element
    const settingTemplateElement = document.querySelector(selectors.settingTemplate);
    console.log('✌settingTemplateElement --->', settingTemplateElement);

    // 2. Deep clone the setting template element
    const settingTemplateElementCopy = settingTemplateElement.cloneNode(true);

    // 3. Change the content of the clonned setting template element
    settingTemplateElementCopy.id = setting.id;
    const settingLinkElement = settingTemplateElementCopy.querySelector(selectors.settingLink);
    const settingUrl = `setting.html?id=${setting.id}`;
    settingLinkElement.href = settingUrl;
    settingLinkElement.innerText = setting.title;
    const settingStatusBadgeElement = settingTemplateElementCopy.querySelector(selectors.settingStatusBadge);
    settingStatusBadgeElement.innerText = setting.status;
    // toggle the active class based on the setting status
    if (setting.status === 'active') {
        settingStatusBadgeElement.classList.add('active');
    } else {
        settingStatusBadgeElement.classList.remove('active');
    }
    const settingRemoveButtonElement = settingTemplateElementCopy.querySelector(selectors.settingRemoveButton);
    // Add an event listener to the remove button element to remove button element to remove the setting from the state and the DOM
    settingRemoveButtonElement.addEventListener('click', () => {
        removeSettingHandler(settingTemplateElementCopy);
    });
    settingTemplateElementCopy.classList.remove('hidden');
    
    // 4. Append the clonned setting template element to the settings list element
    const settingsListElement = document.querySelector(selectors.settingsList);
    console.log('✌settingsListElement --->', settingsListElement);
    settingsListElement.appendChild(settingTemplateElementCopy);
}

/**
 * Toggles the empty state based on the state settings length
 */
function toggleEmptyState() {
    const emptyStateElement = document.querySelector(selectors.emptyState);
    const settingsTable = document.querySelector(selectors.settingsTable);
    if (state.settings.length === 0) {
        emptyStateElement.classList.remove('hidden');
        settingsTable.classList.add('hidden');
    } else {
        emptyStateElement.classList.add('hidden');
        settingsTable.classList.remove('hidden');
    }
}

toggleEmptyState();

state.settings.forEach(setting => {
    // Call the function to render the settings elements
    renderSettingElement(setting);
});