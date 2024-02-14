const { validationResult } = require('express-validator');

const Model = require('../model/question');

exports.getAge = (req, res, next) => {
    return Model.Age
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
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
                postedQuestion : age
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
            {$project : {_id : 0} }
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
                postedQuestion : random
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
    return Model.Mixture
    .aggregate([
        { $sample : { size : 1 } },
        {$project : {_id : 0} }
    ])
    .then(doc => {
        res.status(200).json(doc[0])
    })
    .catch(err => {
        next(err)
    })
}

exports.getProfitAndLoss= (req, res, next) => {
    return Model.ProfitAndLoss
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.getPermutationAndCombination = (req, res, next) => {
    return Model.Permutation
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.getSpeedTimeDistance =(req, res, next) => {
    return Model.SpeedTimeDistance
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.getSimpleInterest = (req, res, next) => {
    return Model.SimpleAndInterest
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.getCalendar = (req, res, next) => {
    return Model.Calendar
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}

exports.getPipesAndCistern = (req, res, next) => {
    return Model.PipesAndCistern
        .aggregate([
            { $sample : { size : 1 } },
            {$project : {_id : 0} }
        ])
        .then(doc => {
            res.status(200).json(doc[0])
        })
        .catch(err => {
            next(err)
        })
}
