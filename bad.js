function refreshCheckboxes() {
    Object.keys(state.checkboxes).forEach(key => {
        const box = document.querySelector(`#${key}`);
        if (state.checkboxes[key]) {
            box.classList.add('checkbox-option-checked')
        } else {
            box.classList.remove('checkbox-option-checked')
        }
    })
}