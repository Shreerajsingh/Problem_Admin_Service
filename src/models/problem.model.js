const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: [true, 'Title can\'t be empty']
    },
    description: {
        type: String,
        requires: [true, 'Description can\'t be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        requires: [true, 'Difficulty can\'t be empty'],
        level: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                typr: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
});


const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;