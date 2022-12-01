
window.addEventListener("load", init, false);

function init() {
    let parentClass = 'body';
    let parentContainer = document.querySelector(parentClass);

    parentContainer.addEventListener('mousedown', onMouseDown)
    function onMouseDown(event) {

        if (event.target.className == 'slds-textarea') {
            let publicInputContainer = event.target
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.parentNode
                                            ?.childNodes[2]

            if (publicInputContainer) {
                let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
                let isPublicChecked = publicCheckbox.checked;

                if (!isPublicChecked) {
                    publicCheckbox.click();
                } 
            }
        }

    }
