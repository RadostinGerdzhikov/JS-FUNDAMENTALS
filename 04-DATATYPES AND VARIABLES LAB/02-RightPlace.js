function isStringMatched(firstWord, character, secondWord) {
    let matchWord = "";
    for (let i=0; i < firstWord.length; i++) {
      if(firstWord[i] === '_') {
        matchWord += character;
      }else {
        matchWord += firstWord[i]; 
      }
    }

    if (secondWord === matchWord ) {
        console.log('Matched');
    }else {
        console.log('Not Matched');
    }
}