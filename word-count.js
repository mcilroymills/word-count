
module.exports = function Words () {

  this.count = function (string) {
    //Create a wordObj object without a protoype to prevent interference with reserved words
    var wordObj = Object.create(null);
    string = string.replace(/\n/g, ' ');//Get rid of newlines
    string = string.replace(/\t/g, ' ');//Get rid of tabs

    //Create variable to store wordObj key as it is built
    var currentWord = '';

    for (var i = 0; i < string.length; i++) {

      if (string[i] === ' ') {

        if (currentWord) {//If currentWord has a length
          if (wordObj[currentWord]) {//If wordObj already has a currentWord key
            wordObj[currentWord]++;
            currentWord = '';//reset currentWord
          }
          else {
            wordObj[currentWord] = 1;
            currentWord = '';//reset currentWord
          }
        }
      }
      else
        currentWord += string[i];
    }
    if (currentWord) {//If currentWord has a length
      if (wordObj[currentWord])//If wordObj already has a currentWord key
        wordObj[currentWord]++;
      else {
        wordObj[currentWord] = 1;
        currentWord = '';//reset currentWord
      }
    }

    return wordObj;
  }
}