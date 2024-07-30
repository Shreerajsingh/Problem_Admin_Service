const BaseError = require('../Errors/base.error');
const {StatusCodes} = require('http-status-codes');

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} // beacause this is an exception so no data is going tobe provided.
        })
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Somthing went wrong!",
        error: err,
        data: {} // beacause this is an exception so no data is going tobe provided.
    })
}

module.exports = errorHandler;