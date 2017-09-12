const express = require('express');
const path = require('path');
const fs = require('fs');
const url = require('url');
const open = require('open');
const webpack = require('webpack');
const config = require('../webpack.dev.config');
const bodyParser = require('body-parser');

const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(config);
const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use('/', express.static('dist'));

app.use(webpackHotMiddleware(compiler));
app.listen(port, function (error) {
    if (error) {
        console.log(error);
    } else {
        open(`http://localhost:${port}`)
    }
});



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/tilesData', function (req, res) {
    res.sendFile(path.join(__dirname, '../data/data.json'));
});

app.put('/tilesData/:id', function (req, res) {

    let id = req.params.id;

    filePath = path.join(__dirname, '../data/data.json');
    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(404);
        }
        else {
            let jsonObject = JSON.parse(data);
            let items = jsonObject.items;
            jsonObject.items = items.filter(function (items) {
                return items.id !== id;
            });

            jsonObject.items.push(req.body);
            fs.writeFile(filePath, JSON.stringify(jsonObject), 'utf8', function (err) {
                if (err)
                    throw err;
                res.send((JSON.stringify(jsonObject)));
            });


        }

    });
});
app.get('/search/:tagId', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/detailsContainer/:tagId', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/detailsContainer/:tagId', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/image/:imgName', function (req, res) {
    res.sendFile(path.join(__dirname, '../assets/img/' + req.params.imgName));
});

console.log(`listening on ${port}`);
