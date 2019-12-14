fs = require('fs');

const book = {
    title: 'Big Little Lies',
    author: 'Liana Mortiary',
};

//const bookJSON = JSON.stringify(book);
//fs.writeFileSync('1-json.json', bookJSON);

// dataBuffer = fs.readFileSync('1-json.json');
//dataJSON = dataBuffer.toString();

//const data = JSON.parse(dataJSON);

//console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Sharon';
data.age = '23';
data.planet = 'MARS';
console.log(data);
const dataString = JSON.stringify(data);

fs.writeFileSync('1-json.json', dataString, (err) => {
    if (err) throw err;
});