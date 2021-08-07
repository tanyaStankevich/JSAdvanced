const express = requaire('express');
const fs = requaire('fs');
const bodyParser = requaire('body-parser');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

app.get('/catalogData', (req, res) => {
    fs.readFile('catalog.json', 'utf8', (err, data) => {
        res.send(data);
    })
})

app.post('/addToCart', (req, res) => {
    fs.readFile('cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result":0}')
        } else {
        
            const cart = JSON.parse(data);
            const item = req.body;
            cart.push(item);
            fs.wrireFile('cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result":0}')
                } else { 
                    console.log('done');
                    res.send('{"result":1}')
            }
            })
        }
    })
})

app.listen(3000, () => {
    console.log('server is running on port 3000!')
})