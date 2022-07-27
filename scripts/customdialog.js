// @ts-check
//export function confirmDialog() {
//}
function alertDialog(dialog, okButton) {
    dialog?.show();
    let okButton = document.lastChild?.firstChild;
    okButton?.addEventListener('click', () => dialog?.close())
}
function confirmDialog() {
    let dialog = document.getElementById('confirm-dialog');
    dialog?.show();
    let cancleButton = document.lastChild?.firstChild;
    let okButton = document.lastChild?.lastChild;
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
let alertButtonDialog = document.getElementById('alert-dialog-button');
alertButtonDialog?.addEventListener('click', () => alertDialog())