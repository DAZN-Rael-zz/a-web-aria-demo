function refreshCheckboxes() {
    Object.keys(state.checkboxes).forEach(key => {
        // Edit the fake box
        const box = document.querySelector(`#${key}>.checkbox-option-fakebox`);
        if (state.checkboxes[key]) {
            box.innerText = 'O';
        } else {
            box.innerText = '-';
        }

        // Update the arai-checked:
        const checkbox = document.querySelector(`#${key}`);
        checkbox.setAttribute('aria-checked', state.checkboxes[key]);
    })
}