const {Problem} = require('../models');

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testCases: (problemData.testCases) ? problemData.testCases : [],
                editorial: (problemData.editorial) ? problemData.editorial : {},
            })

            return problem;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(id) {
        const problem = await Problem.findById(id);

        return problem;
    }

    async getAllProblems() {
        const problems = await Problem.find({});
        return problems;
    }
}

module.exports = ProblemRepository;

//Here we write mongoose queries