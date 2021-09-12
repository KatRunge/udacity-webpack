function checkForUrl(inputUrl) {
  const urlCheck =
    /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  return urlCheck.test(inputUrl);
}

export { checkForUrl };

// sources used for creating this function:
//
// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
