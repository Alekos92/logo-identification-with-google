const express = require('express');
const bodyParser = require('body-parser');
var dataUriToBuffer = require('data-uri-to-buffer');
const app = express();

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});


const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/api/world', (req, res) => {


    async function query_cloud_vision(dataurl) {
        let buffer = dataUriToBuffer(dataurl);
        let request = {
            image: {
                content: buffer
            }
        };
        const vision = require('@google-cloud/vision');
        const client = new vision.ImageAnnotatorClient();
        const [result] = await client.logoDetection(request);
        const logos = result.logoAnnotations;
        res.send({logos: logos})
    }

    query_cloud_vision(req.body.image);


});

app.listen(port);