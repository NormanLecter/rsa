const Encrypt = require('./encryption.js');
const Decrypt = require('./decryption.js');
const LoremIpsum = require('./text.js');
const bigInt = require('big-integer');

// Euclid's algorithm to check whether two numers are coprime
function gcd(a, b) {
	while(a != b) {
		if(a > b) {
			a = a - b;
		} else {
			b = b - a;
		}
	}
	return a;
}

// chceck if  value is prime
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

let p = 0;
let q = 0;
let n = 0;
let fi = 0;
let e = 0;
let d = 0;
let publicKey = new Array(2);
let privateKey = new Array(2);
let text = LoremIpsum.LoremIpsum;


// TODO: use Miller-Rabin test + bigger number!
p = Math.floor((Math.random() * 100) + 10);

while(!isPrime(p)){
  p = Math.floor((Math.random() * 100) + 10);
}

q = Math.floor((Math.random() * 100) + 10);

while(!isPrime(q)){
  q = Math.floor((Math.random() * 100) + 10);
}

// Euler function
fi = (p - 1) * (q - 1);

// module n
n = p * q;

// cleaning to protect data
//p = 0;
//q = 0;

// public key exponent
// + Euclid's algorithm to check whether e is coprime to fi + wheter  odd
e = Math.floor((Math.random() * (n - 1)) + 3);
while((gcd(e,fi) != 1) || (e % 2  === 0)){
  e = Math.floor((Math.random() * (n - 1)) + 3);
}

// private key exponent
d = Math.floor((Math.random() * (n - 1)) + 3);
while(!(((d * e) % fi) === 1)){
  d = Math.floor((Math.random() * (n - 1)) + 3);
}

// establish keys
publicKey = [e, n];
privateKey = [d, n];

/*****************************************************************************/

// encrypt using public key
let encryptMessage = Encrypt.encrypt(publicKey, text);

// decrypt using private key
let decryptMessage = Decrypt.decrypt(privateKey, encryptMessage);

// write decrypted message to console
console.log(decryptMessage);
