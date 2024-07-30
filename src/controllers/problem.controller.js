const { StatusCodes } = require('http-status-codes');
const NotImplemented = require('../Errors/notimplemented.error');
const BadRequest = require('../Errors/badrequest.error');

function pingProblemController(req, res, next) {
    return res.json({message : 'Problem controller is up :)'});
}

function addProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new NotImplemented("Add Problem");
    } catch (error) { 
        next(error);
    }
} 

function getProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new NotImplemented("Get Problem");
    } catch (error) { 
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new NotImplemented("Get Problems");
    } catch (error) { 
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new NotImplemented("Update Problem");
    } catch (error) { 
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new NotImplemented("Delete Problem");
    } catch (error) { 
        next(error);
    }
}


module.exports = { 
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController,
}