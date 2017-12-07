const bigInt = require('big-integer');

exports.decrypt = function(privateKey, encryptMessage){
  let decryptMessage = "";
  let  t;
  for(let i = 0; i < encryptMessage.length; i++){
    t = bigInt(encryptMessage[i]).modPow(privateKey[0], privateKey[1]);
    decryptMessage += String.fromCharCode(Number(t.toString()));
  }
  return decryptMessage;
}
