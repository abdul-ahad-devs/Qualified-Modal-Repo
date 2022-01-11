// CAESAR CIPHER ENCRYPTION
export const caesarCipherEncryption = (input) => {
  let cipherText = "";
  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      let hash = input[i].charCodeAt(0) + process.env.CAESAR_CIPHER_KEY;
      cipherText += String.fromCharCode(hash);
    }
  }

  return cipherText;
};

// CAESAR CIPHER DECRYPTION
export const caesarCipherDecryption = (input) => {
  let decipherText = "";
  if (input.length > 0) {
    for (let i = 0; i < input.length; i++) {
      let hash = input[i].charCodeAt(0) - process.env.CAESAR_CIPHER_KEY;
      decipherText += String.fromCharCode(hash);
    }
  }

  return decipherText;
};
