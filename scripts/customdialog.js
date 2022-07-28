// @ts-check
export function alertDialog(dialog, okButton) {
    dialog.showModal();
    okButton?.addEventListener('click', () => dialog?.close())
}
export function confirmDialog(dialog, okButton, cancleButton) {
    dialog.showModal();
    let response = 'fuck the police';
    okButton.addEventListener('click', (response) => {
        response = `The value returned by the confirm method is : ${true}`;
        dialog.close();
    });
    cancleButton?.addEventListener('click', () => {
        response = "god I fucking hate you";
        dialog.close();
        response = `The value returned by the confirm method is : ${false}`;
    });
    return response;
}
export function promptDialog(dialog, okButton) {
    dialog.showModal();
    let userInput = dialog.querySelector('input');
    let response = userInput.value;
    okButton.addEventListener('click', () => {
        dialog.close();
    });
    return response;
}
export function safePromptDialog() {

}