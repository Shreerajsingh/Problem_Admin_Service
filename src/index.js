const express = require('express');
const bodyparser = require('body-parser');

const {PORT} = require('./config/server.config')

const apiRouter = require('./routes/index.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));   // @ 
app.use(bodyparser.text());

// If any req comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req,res) => {
    return res.json({message: 'Problem Service is alive'});
});

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
}); 