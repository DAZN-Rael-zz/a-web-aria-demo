console.log('Hello there!');

// State:
const state = {
    checkboxes: {
        gitgud: true,
        uninstall: false
    }
};

// onSelect option:
function onSelectOption(e, opt) {
    e.preventDefault();
    e.stopPropagation();

    if(!Object.keys(state.checkboxes).includes(opt)){
        throw new Error(`Tried to select invalid option: ${JSON.stringify(opt)}`)
    }

    // Invert mode
    state.checkboxes[opt] = !state.checkboxes[opt];

    // Also set the checkbox:
    document.querySelector(`input[name="${opt}"]`).checked = state.checkboxes[opt];

    refreshCheckboxes();
}

// Submit part:
function onFormSubmit() {

    // Set the inner text:
    document.querySelector("#chosenOption").innerText = Object.keys(state.checkboxes).filter(option => state.checkboxes[option]).join(' and ') || 'do nothing';

    // Unhide the box:
    document.querySelector(".modal-container").hidden = false;

    return false
}

