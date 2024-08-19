const {StatusCodes} = require('http-status-codes');
const { badrequest, internalServer, notFound, notImplemented } = require('../Errors/index');
const {ProblemService} = require('../services');
const {ProblemRepository} = require('../repositories');

const problemService = new ProblemService(new ProblemRepository);

function pingProblemController(req, res, next) {
    return res.json({message : 'Problem controller is up :)'});
}

async function addProblem(req, res, next) {
    try {
        console.log("Incoming req body", req.body);
        const newProblem = await problemService.createProblem(req.body);
        
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newProblem
        });
        
        // // Nothing Implemented yet
        // throw new NotImplemented("Add Problem");
    } catch (error) { 
        next(error);
    }
} 

async function getProblem(req, res, next) {
    try {
        const response = await problemService.getProblem(req.params.id);

        if(!response) {
            throw new notFound(`Problem not found with id: ${req.params.id}`);
        }

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched the problem',
            error: {},
            data: response
        });
    } catch (error) { 
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
        
    } catch (error) { 
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new notImplemented("Update Problem");
    } catch (error) { 
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        // Nothing Implemented yet
        throw new notImplemented("Delete Problem");
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