const express = require('express');
const bodyparser = require('body-parser');

const {PORT} = require('./config/server.config')

const apiRouter = require('./routes/index.js');
const BaseError = require('./Errors/base.error.js');
const NotFoundError = require('./Errors/NotFoundError.js');
const errorHandler = require('./utils/errorHandler.js');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));   // @ 
app.use(bodyparser.text());

// If any req comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req,res) => {
    return res.json({message: 'Problem Service is alive'});
});

// Last MiddleWare if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);

    // throw new BaseError("new Error", 404, "Som.. went wrong", {});

    // try{ 
    //     throw new BaseError("Some error", 404, {errorMessage: "Oops!!!"});
    // } catch(error) {
    //     console.log("Somthing went wrong |", error.name);
    // } finally {
    //     console.log("xyz server colsed.");
    // }
 
    // try{
    //     throw new NotFoundError({});
    // } catch(error) {
    //     console.log("Somthing went wrong ", error);
    // } finally {
    //     console.log("Executed finally");
    // }
}); 