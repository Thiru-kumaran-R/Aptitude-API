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
