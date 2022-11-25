/*
    notes:
    tracking mutations via MutationObserver class:
    https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
*/

window.addEventListener("load", init, false);


function init() {
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) 
                return;
        
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                let node = mutation.addedNodes[i];
                
                let newCommentTab;
                for (let section of parentContainer.childNodes) {
                    if (section.ariaExpanded == 'true')
                        newCommentTab = section;
                }

                let publicInputContainer = newCommentTab
                                            ?.childNodes[0]
                                            ?.childNodes[2]
                                            ?.childNodes[0]
                                            ?.childNodes[2]
                                            ?.childNodes[2]
                                            ?.childNodes[0]
                                            ?.childNodes[1]
                                            ?.childNodes[2];
                
                if (publicInputContainer) {
                    let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];

                    let isPublicChecked = publicCheckbox.checked
                    if (!isPublicChecked) {
                        publicCheckbox.click();
                        break;
                    } 
                }
            }
        })
    })
    
    const parentClass = '.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer';
    let parentContainer = document.querySelector(parentClass);

    observer.observe(parentContainer, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    })
}


