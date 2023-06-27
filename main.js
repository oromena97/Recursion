function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }

  if (word[0] === word[word.length - 1]) {
    return isPalindrome(word.substring(1, word.length - 1));
  } else {
    return false;
  }
}
