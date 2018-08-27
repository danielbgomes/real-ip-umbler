const   express = require('express');
        app = express();
        pug = require('pug');

app.set('view engine', 'pug')

app.set

app.get('/', (req, res) => {
        
    let clientIp = req.headers['x-forwarded-for'];
    console.log(clientIp);
    res.render('index', {
        realIp:  clientIp
    })
});

app.listen(process.env.PORT, () => console.log('ouvindo na 3000'))
