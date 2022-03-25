var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var getText = () => document.getElementById("textarea-text").value;
var getTextEncrypted = () => document.getElementById("textarea-encriptada").value;

var encriptado = (message, plain, encrypt) => {
  
  var encryptedText = "";

  for (var i = 0; i < message.length; i++){
    
   if (!plain.includes(message[i]))  encryptedText += message[i] 

    for (var j = 0; j < plain.length; j++){  

      if(message[i] === plain[j])
        encryptedText += encrypt[j]; 
        
    }   
  }
  return encryptedText;
}



var principal = () =>{
  var restultEncriptado = encriptado( getText(), plainAlphabet, encryptedAlphabet );
  var restultDesncriptado = encriptado( getTextEncrypted(), encryptedAlphabet, plainAlphabet );
  document.getElementById("resultado").innerText = restultEncriptado;
  document.getElementById("resultado-desencriptado").innerText = restultDesncriptado;
}

//events

document.getElementById("encriptar").addEventListener("click", principal);
document.getElementById("desencriptar").addEventListener("click", principal);


