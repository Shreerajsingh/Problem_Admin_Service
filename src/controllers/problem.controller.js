function pingProblemController(req, res) {
    return res.json({message : 'Problem controller is up :)'});
}

function addProblem(req, res) {
    return res.status(501).json({
        message: 'Node Implemented'
    });
}

function getProblem(req, res) {
    return res.status(501).json({
        message: 'Node Implemented'
    });
}

function getProblems(req, res) {
    return res.status(501).json({
        message: 'Node Implemented'
    });
}

function updateProblem(req, res) {
    return res.status(501).json({
        message: 'Node Implemented'
    });
}

function deleteProblem(req, res) {
    return res.status(501).json({
        message: 'Node Implemented'
    });
}


module.exports = { 
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingProblemController,
}