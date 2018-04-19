var cheerio = require('cheerio')
var fs = require("fs");

const fileName = './UnConferenceHtml.txt'

var html = readHtmlFromFile()
let $ = cheerio.load(html)

// presenters()
// titles()
descriptions()

function readHtmlFromFile(){
  return fs.readFileSync(fileName, "utf8")
}

function presenters(){
  return spans()
    .filter( (i,e) => $(e).text().includes('Suggester') )
    .each( (i,e) => console.log($(e).next().text().trim()) )
}

function titles(){
  return spans()
    .filter( (i,e) => $(e).text().includes('Title') )
    .each( (i,e) => console.log($(e).next().text().trim()) )
}

function descriptions(){
  return spans()
    .filter( (i,e) => $(e).text().includes('Description') )
    .each( (i,e) => console.log($(e).next().text().trim()) )
}
function spans(){
  return $('div').find('th')
}
