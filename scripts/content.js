/*
    notes:
    tracking mutations via MutationObserver class:
    - https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    - https://stackoverflow.com/questions/5525071/how-to-wait-until-an-element-exists
*/


let currentPage = location.href;



// window.addEventListener('popstate', function (event) {
// 	// Log the state data to the console
// 	console.error('state changed')
//     console.log(event.state);
// });


// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log(request, sender, sendResponse)
//     if (request.message === 'TabUpdated') {
//         conwole.log('CHROME.RUNTIME EVENT LISTENER')
//       console.log(document.location.href);
//     }
//   })

window.addEventListener("load", init, false);

function init() {
    console.error('CODE STARTS HERE')
    let parentClass = 'body';
    let parentContainer = document.querySelector(parentClass);
    const newCommentBtnSelector = 'a[data-tab-name="Case.New_Comment_Screen_Flow"';

    let newCommentButton = document.querySelector(parentClass)
    parentContainer.addEventListener('mousedown', onMouseDown)
    function onMouseDown(event) {
        console.log('mousedown!!!', event.target)
        console.log('debug: ', event.target.className)

        if (event.target.className == 'slds-textarea') {
            console.log('selected textbox!!!')
            // parentClass = '.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer';
            // parentContainer = document.querySelector(parentClass);
            // let newCommentTab;

            // for (let section of parentContainer.childNodes) {
            //     if (section.ariaExpanded == 'true')
            //         newCommentTab = section;
            // }

            // let publicInputContainer = newCommentTab
            // ?.childNodes[0]
            // ?.childNodes[2]
            // ?.childNodes[0]
            // ?.childNodes[2]
            // ?.childNodes[2]
            // ?.childNodes[0]
            // ?.childNodes[1]
            // ?.childNodes[2];

            // console.log(newCommentTab, publicInputContainer)
            // if (publicInputContainer) {
            //     let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
            //     let isPublicChecked = publicCheckbox.checked;
            //     console.log('ISPUBLICCHECKED??? ', isPublicChecked)
            //     if (!isPublicChecked) {
            //         console.error('CHECKBOX SELECTED')
            //         publicCheckbox.click();
            //     } 
            // }

            console.log(event.target
                                .parentNode
                                .parentNode
                                .parentNode
                                .parentNode
                                .parentNode
                                .parentNode
                                .parentNode
                                .parentNode
                                .childNodes[2])

            let publicInputContainer = event.target
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .parentNode
                                            .childNodes[2]
            console.log('publicInputContainer identified: ', publicInputContainer)
            if (publicInputContainer) {
                let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
                let isPublicChecked = publicCheckbox.checked;
                console.log('ISPUBLICCHECKED??? ', isPublicChecked)
                if (!isPublicChecked) {
                    console.error('CHECKBOX SELECTED')
                    publicCheckbox.click();
                } 
            }
        }

    }


    // let observer = new MutationObserver((mutations) => {
    //     parentClass = '.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer';
    //     parentContainer = document.querySelector(parentClass);

    //     console.log('MUTATION TRIGGERED')
    //     mutations.forEach((mutation) => {
    //         if (!mutation.addedNodes) 
    //             return;
        
    //         for (let i = 0; i < mutation.addedNodes.length; i++) {
    //             let node = mutation.addedNodes[i];
    //             let newCommentTab;

    //             for (let section of parentContainer.childNodes) {
    //                 if (section.ariaExpanded == 'true')
    //                     newCommentTab = section;
    //             }

    //             let publicInputContainer = newCommentTab
    //                                         ?.childNodes[0]
    //                                         ?.childNodes[2]
    //                                         ?.childNodes[0]
    //                                         ?.childNodes[2]
    //                                         ?.childNodes[2]
    //                                         ?.childNodes[0]
    //                                         ?.childNodes[1]
    //                                         ?.childNodes[2];
                
    //             if (publicInputContainer) {
    //                 let publicCheckbox = publicInputContainer.querySelectorAll('input')[0];
    //                 let isPublicChecked = publicCheckbox.checked;

    //                 if (isPublicChecked == true) {
    //                     observer.disconnect();
    //                 }

    //                 if (!isPublicChecked) {
    //                     console.error('CHECKBOX SELECTED')
    //                     publicCheckbox.click();
    //                     break;
    //                 } 
    //             }
    //         }
    //     })
    // })
    
    // const parentClass = '.MEDIUM.uiTabset--base.uiTabset--task.uiTabset.oneActionsComposer.forceActionsContainer';


    // observer.observe(parentContainer, {
    //     childList: true,
    //     subtree: true,
    //     attributes: false,
    //     characterData: false
    // })
}


