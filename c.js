// marks 20%
const fetch = require('node-fetch');
const cheerio = require('cheerio');
// node-fetch is a library that allows you to make http requests in node. It's already listed in the package.json so just run `npm i` to install it
// install the cheerio library and use it to get all the text within every anchor tag at this URL: http://home.mcom.com/home/welcome.html

function c() {
  return fetch('http://home.mcom.com/home/welcome.html')
    .then(res => res.text())
    .then(html => {
      const $ = cheerio.load(html);
      const anchorTags = $('a');
      const texts = anchorTags.map((index, anchor) => $(anchor).text()).get();
      const toString = texts.join("");
      return toString;  
    })
    .catch(err => console.error(err));
}
module.exports = c;




