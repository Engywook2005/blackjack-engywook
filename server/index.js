const bodyParser = require('body-parser');
const express = require('express');

const listenPort = process.argv[2];
const app = express();

app.use(express.static(`${process.cwd()}/html/public`));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(listenPort);
