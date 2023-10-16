const randomApt = require("../data/random.json");
const mixtureAndAlligation = require("../data/mixtureAndAlligation.json");
const profitAndLoss = require("../data/profitAndLoss.json")

exports.getBasics = (req, res, next) => {
    res.status(200).json(randomApt[(Math.round( Math.random() * (randomApt.length-1) ))]);
};

exports.getMixtureAndAlligation = (req, res, next) => {
    res.status(200).json(mixtureAndAlligation[(Math.round( Math.random() * (mixtureAndAlligation.length-1) ))])
}

exports.getProfitAndLoss= (req, res, next) => {
    res.status(200).json(profitAndLoss[(Math.round( Math.random() * (profitAndLoss.length-1) ))])
}