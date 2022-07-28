// @ts-check
export function alertDialog(dialog, okButton) {
    dialog.showModal();
    okButton?.addEventListener('click', () => dialog?.close())
}
export function confirmDialog(dialog, okButton, cancleButton) {
    dialog.showModal();
    okButton.addEventListener('click', () => {
        dialog.close();
        return `The value returned by the confirm method is : ${true}`
    });
    cancleButton?.addEventListener('click', () => {
        dialog.close();
        return `The value returned by the confirm method is : ${false}`
    });
}
export function promptDialog(dialog, okButton) {
    dialog.showModal();

    okButton?.addEventListener('click', () => {
        dialog.close();
        return `The value returned by the confirm method is : ${true}`
    });
}
export function safePromptDialog() {

}