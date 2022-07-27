// @ts-check
export function alertDialog(dialog, okButton) {
    dialog?.show();
    okButton?.addEventListener('click', () => dialog?.close())
}
export function confirmDialog(dialog, okButton, cancleButton) {
    dialog?.show();
    okButton?.addEventListener('click', () => {
        dialog?.close();
        return `The value returned by the confirm method is : ${true}`
    });
    cancleButton?.addEventListener('click', () => {
        dialog?.close();
        return `The value returned by the confirm method is : ${false}`
    });
}
export function promptDialog() {

}
export function safePromptDialog() {

}