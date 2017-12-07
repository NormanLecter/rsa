const bigInt = require('big-integer');

exports.encrypt = function(publicKey, text){
  let encryptMessage = new Array(text.length);
  let t;
  let c;
  for(let i = 0; i < text.length; i++){
    // every single sign to ASCII Code - it's enough?
    t = text.charCodeAt(i);
    c = bigInt(t).modPow(publicKey[0], publicKey[1]);
    encryptMessage[i] = Number(c.toString());
  }
  return encryptMessage;
}
