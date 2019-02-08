/*
 * Use this function to generate RSA keys first
 */

var NodeRSA = require('node-rsa')
var fs = require('fs')
function generator() {
    var key = new NodeRSA({ b: 512 })
    key.setOptions({ encryptionScheme: 'pkcs1' })
    var privatePem = key.exportKey('pkcs1-private-pem')
    var publicPem = key.exportKey('pkcs1-public-pem')
    fs.writeFile('./pem/public.pem', publicPem, (err) => {
        if (err) throw err
        console.log('Public key have been saved！')
    })
    fs.writeFile('./pem/private.pem', privatePem, (err) => {
        if (err) throw err
        console.log('Private key have been saved！')
        })
}
generator();