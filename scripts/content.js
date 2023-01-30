
window.addEventListener("load", init, false);

const updateStatus = { 
    'enabled': false, 
    'newStatus': 'Working'    // "Solution_Provided" or "Working"
}; 

function init() {
    let parentClass = 'body';
    let parentContainer = document.querySelector(parentClass);

    function selectElement(element, valueToSelect) {    
        element.value = valueToSelect;
    }
    

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
                                            ?.parentNode
                                            ?.parentNode

            if (publicInputContainer) {
                let publicCheckbox = publicInputContainer
                                            ?.childNodes[2]
                                            .childNodes[0]
                                            .querySelectorAll('input')[0];

                let isPublicChecked = publicCheckbox.checked;

                if (!isPublicChecked) {
                    publicCheckbox.click();
                } 
                
                let statusDropdown = publicInputContainer
                                            ?.parentNode
                                            ?.childNodes[0]
                                            .querySelectorAll('select')[0];

                if (updateStatus['enabled'] && statusDropdown.value == 'New') {
                    selectElement(statusDropdown, updateStatus['newStatus'])
                }
            }
        }

    }
}
