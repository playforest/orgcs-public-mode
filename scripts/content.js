console.error('SCRIPT EXECUTION STARTS HERE')
window.addEventListener("load", init, false);

function init() {
    console.log('DOM CONTENT LOADED')
    const newCommentButton = document.querySelector('.tabs__nav')?.childNodes[2];
    console.log('NEW COMMENT BUTTON', newCommentButton)
    newCommentButton.addEventListener('mousedown', clickTrigger, true)

    function clickTrigger() {
        console.log('clicked New Comment!');
        window.addEventListener("load", loadedCommentWindow, false);


        function loadedCommentWindow() { console.error('LOADED COMMENT WINDOW!!');}
        let parentContainer = document.querySelector('.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer');
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
    
        let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
        let isPublicChecked = publicCheckbox.checked
        if (!isPublicChecked)
            publicContainer.querySelectorAll('input')[0].click();
    }



}