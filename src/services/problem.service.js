const sanitizeMarksownContent = require('../utils/markdownSanitizer');

class ProblemService {

    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // throw {"errror" : "Some error"};
            problemData.description = sanitizeMarksownContent(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllProblems() {
        const problems = await this.problemRepository.getAllProblems();

        return problems;
    }
}

module.exports = ProblemService;