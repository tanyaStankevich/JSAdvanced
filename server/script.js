const a = 5;
console.log(a);

const moment = require('moment');
const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (! err) {
        const d = JSON.parse(data);
        d.third = "THREE";
        
        fs.writeFile('./data.json', JSON.stringify(d), (err) => {
          console.log(data);  
        })
    }
})