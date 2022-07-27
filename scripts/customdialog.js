// @ts-check
function alertDialog(dialog, okButton) {
    dialog?.show();
    okButton?.addEventListener('click', () => dialog?.close())
    document.getElementById('confirm-dialog-button').innerHTML = "what the fuck is this";
}
function confirmDialog(dialog, okButton, cancleButton) {
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
function promptDialog() {

}
function safePromptDialog() {

}