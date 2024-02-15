const mongoose = require('mongoose');
const Model = require('../model/question');

exports.getAge = (req, res, next) => {
    return Model.Age
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postAge = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const age = new Model.Age({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return age.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getRandom = (req, res, next) => {
    return Model.Random
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
};

exports.postRandom = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const random = new Model.Random({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return random.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getMixtureAndAlligation = (req, res, next) => {
    return Model.MixtureAndAlligation
    .aggregate([
        { $sample : { size : 1 } },
        {$project : { _id : 0, _v : 0} }
    ])
    .then(doc => {
        res.status(200).json(doc[0])
    })
    .catch(err => {
        next(err)
    })
}

exports.postMixtureAndAlligation = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const mixture = new Model.MixtureAndAlligation({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return mixture.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getProfitAndLoss= (req, res, next) => {
    return Model.ProfitAndLoss
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postProfitAndLoss = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const profitAndLoss = new Model.ProfitAndLoss({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return profitAndLoss.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getPermutationAndCombination = (req, res, next) => {
    return Model.PermutationAndCombination
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postPermutationAndCombination = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const permutationAndCombination = new Model.PermutationAndCombination({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return permutationAndCombination.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getSpeedTimeDistance =(req, res, next) => {
    return Model.SpeedTimeDistance
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postSpeedTimeDistance = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const speedTimeDistance = new Model.SpeedTimeDistance({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return speedTimeDistance.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getSimpleInterest = (req, res, next) => {
    return Model.SimpleInterest
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postSimpleInterest = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const simpleInterest = new Model.SimpleInterest({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return simpleInterest.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getCalendar = (req, res, next) => {
    return Model.Calendar
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postCalendar = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const calendar = new Model.Calendar({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return calendar.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.getPipesAndCistern = (req, res, next) => {
    return Model.PipesAndCistern
        .aggregate([
            { $sample : { size : 1 } },
            {$project : { _id : 0, _v : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.postPipesAndCisterns = (req, res, next) => {
    const question = req.body.question;
    const answer = req.body.answer;
    const options = req.body.options;
    const explanation = req.body.explanation;

    const pipesAndCistern = new Model.PipesAndCistern({
        question : question,
        answer : answer,
        options : options,
        explanation : explanation
    })
    return pipesAndCistern.save()
        .then(result => {
            res.status(201).json({
                message : 'Question created successfully',
                postedQuestion : {
                    question : question,
                    answer : answer,
                    options : options,
                    explanation : explanation
                }
             })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500;
            }
            next(err)
        })
}

exports.deleteQuestion = (req, res, next) => {
    const model = req.params.model;
    const question = req.body.question;
    if(model){
       mongoose.model(model).findOneAndDelete({question : question})
        .then(doc => {
            if(!doc){
                const error = new Error("Question not found");
                error.statusCode = 404;
                throw error;
            }
            res.json({
                message : 'Question deleted successfully',
                deletedQuestion : {
                    question : doc.question,
                    answer : doc.answer,
                    options : doc.options,
                    explanation : doc.explanation
                }
            });    
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        }); 
    }
}