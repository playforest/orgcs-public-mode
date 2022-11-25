/*
    track mutations:
    https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists

*/

console.error('SCRIPT EXECUTION STARTS HERE')
window.addEventListener("load", init, false);


function init() {
    console.warn('DOM CONTENT LOADED')

    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) return
        
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                // do things to your newly added nodes here
                let node = mutation.addedNodes[i]
                
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
                                            ?.childNodes[2]
                
                if (publicInputContainer) {
                    console.log(node, publicInputContainer)
                    let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
                    console.error('PUBLICINPUTOCNTQINER FOUND')
                    console.log(publicCheckbox)

                    let isPublicChecked = publicCheckbox.checked
                    if (!isPublicChecked) {
                        publicCheckbox.click();
                        break;
                    } else {
                        return;
                    }
                }
                // console.log(node)
            }
        })
    })
      
    let parentContainer = document.querySelector('.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer');

    observer.observe(parentContainer, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false
    })
}


