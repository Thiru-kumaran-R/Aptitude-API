const randomApt = require("../data/random.json");
const mixtureAndAlligation = require("../data/mixtureAndAlligation.json");
const profitAndLoss = require("../data/profitAndLoss.json");
const age = require("../data/age.json");
const permutationAndCombination = require("../data/PermutationAndCombination.json");
const speedTimeDistance = require("../data/SpeedTimeDistance.json");
const simpleInterest = require("../data/simpleInterest.json");
const calendar = require("../data/calendars.json");
const pipesAndCistern = require("../data/pipesAndCisterns.json");

exports.getRandom = (req, res, next) => {
    res.status(200).json(randomApt[(Math.round( Math.random() * (randomApt.length-1) ))]);
};

exports.getMixtureAndAlligation = (req, res, next) => {
    res.status(200).json(mixtureAndAlligation[(Math.round( Math.random() * (mixtureAndAlligation.length-1) ))])
}

exports.getProfitAndLoss= (req, res, next) => {
    res.status(200).json(profitAndLoss[(Math.round( Math.random() * (profitAndLoss.length-1) ))])
}

exports.getAge = (req, res, next) => {
    res.status(200).json(age[ Math.round(Math.random() * age.length -1 ) ])
}

exports.getPermutationAndCombination = (req, res, next) => {
    res.status(200).json(permutationAndCombination[(Math.round( Math.random() * (permutationAndCombination.length-1) ))])
}

exports.getSpeedTimeDistance =(req, res, next) => {
    res.status(200).json( speedTimeDistance[ Math.round( Math.random() * speedTimeDistance.length - 1 ) ] )
}

exports.getSimpleInterest = (req, res, next) => {
    res.status(200).json( simpleInterest[ Math.round( Math.random() * (simpleInterest.length - 1) ) ]);
}

exports.getCalendar = (req, res, next) => {
    res.status(200).json( calendar[ Math.round( Math.random() * (calendar.length -1) ) ] )
}

exports.getPipesAndCistern = (req, res, next) => {
    res.status(200).json( pipesAndCistern[ Math.round( Math.random() * (pipesAndCistern.length - 1) ) ] )
}
