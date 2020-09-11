// Code your solutions in this file
function writeCards(names, message) {
    const thankYouMessages = [];
    for(let i=0; i<names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`);
    }
    return thankYouMessages;
}

function countDown(num) {
    let i = num;
    while(i >= 0) {
        console.log(i);
        i--;
    }

}