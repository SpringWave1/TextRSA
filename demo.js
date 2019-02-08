/*
 * The main function show how to apply RSA in your code
 */

 // get the RSA object
var RSA = require('./RSA'); 
rsa = new RSA(); 

// Two application function, no need to modify.
// encrypt
let encrypt = function (raw_text){
    return new Promise(function(resolve, reject){
        rsa.encrypt(raw_text,function (encrypt_text) {resolve(encrypt_text)})
    });
}
// decrypt
let decrypt = function (en_text){
    return new Promise(function(resolve, reject){
        rsa.decrypt(en_text,function (raw_text) {resolve(raw_text)})
    });
}

// change here:
let demo = async function(raw_text){
    let encrypt_data = await encrypt(raw_text);
    console.log('encrypt:',encrypt_data);
    let raw_data = await decrypt(encrypt_data);
    console.log('decrpt:',raw_data);
}

demo('ccc')





