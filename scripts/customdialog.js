/*export function confirmDialog*/
// @ts-check
export function confirmFunction() {
            let confirmResponse = confirm('are you sure you want to do nothing?');
            document.getElementById('confirm-response').innerHTML = `The value returned by the confirm method is : ${confirmResponse}`;
}