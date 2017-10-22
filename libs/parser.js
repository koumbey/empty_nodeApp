var xml = require('xml2json');
var fs = require('fs');
var filepath = "../ressource/AttributeOriginal.xml"

var xmlString = fs.readFileSync(filepath, 'utf-8')

var jsonArray = xml.toJson(xmlString)

console.log(jsonArray)