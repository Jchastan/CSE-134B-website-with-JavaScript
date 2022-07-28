// @ts-check
export function alertDialog(dialog, okButton) {
    dialog.showModal();
    okButton?.addEventListener('click', () => dialog.close())
}
export function confirmDialog(dialog, okButton, cancleButton, target) {
    dialog.showModal();
    let response = 'fuck the police';
    okButton.addEventListener('click', () => {
        target.innerHTML = `The value returned by the confirm method is : ${true}`;
        dialog.close();
    });
    cancleButton?.addEventListener('click', () => {
        response = `The value returned by the confirm method is : ${false}`;
        dialog.close();
    });
}
export function promptDialog(dialog, okButton, target) {
    dialog.showModal();
    let userInput = dialog.querySelector('input');
    target.innerHTML = userInput.value;
    okButton.addEventListener('click', () => {
        dialog.close();
    });
}
export function safePromptDialog() {

}