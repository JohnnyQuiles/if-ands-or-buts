const prompt = require('prompt-sync')();

const code = prompt (' Enter pinCode to proceed : ');

const pinCode= '1234'; 

if (code === '1234') {
    console.log('success');
}
else {
    console.log('failure');
}

