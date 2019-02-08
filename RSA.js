const fs = require('fs')
const NodeRSA = require('node-rsa')
// module RSA

function RSA(){
    // encrypt
    this.encrypt = function(encrypt_string, callback){
        fs.readFile('./pem/private.pem', function (err, data) {
        var key = new NodeRSA(data);
        let cipherText = key.encryptPrivate(encrypt_string, 'base64');
        console.log(cipherText);
        callback(cipherText);
        });
    }
    // decrypt
    this.decrypt = function(decrypt_string, callback) {
        fs.readFile('./pem/public.pem', function (err, data) {
        var key = new NodeRSA(data);
        let rawText = key.decryptPublic(decrypt_string, 'utf8');
        console.log(rawText);
        callback(rawText);
        });
    }
    // function declaration
    RSA.prototype.sayHello =
        function() {
        console.log('<RSA_object>');
    };


}


// decrypt();

module.exports = RSA;