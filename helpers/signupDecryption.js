export const caesarDecryption = (encryptedString, unshiftAmount) => {
  var plainText = "";
  for (var i = 0; i < encryptedString.length; i++) {
    var encryptedCharacter = encryptedString.charCodeAt(i);
    if (encryptedCharacter >= 97 && encryptedCharacter <= 122) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 97 - unshiftAmount + 26) % 26) + 97
      );
    } else if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
      plainText += String.fromCharCode(
        ((encryptedCharacter - 65 - unshiftAmount + 26) % 26) + 65
      );
    } else {
      plainText += String.fromCharCode(encryptedCharacter);
    }
  }
  return plainText;
};

export const doubleCaesarDecryption = (encryptedString) => {
  let firstStepDecryption = encryptedString;
  let secondStepDecryption = encryptedString;
  for (let i = 0; i < 23; i++) {
    firstStepDecryption = caesarDecryption(secondStepDecryption, i);
    secondStepDecryption = caesarDecryption(firstStepDecryption, i);
    firstStepDecryption = secondStepDecryption;
  }

  return secondStepDecryption;
};
