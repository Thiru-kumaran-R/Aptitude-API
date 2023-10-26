const express = require("express");

const router = express.Router();

const aptitudeController = require("../controllers/controller");

router.get("/random", aptitudeController.getRandom);

router.get("/MixtureAndAlligation", aptitudeController.getMixtureAndAlligation);

router.get("/ProfitAndLoss", aptitudeController.getProfitAndLoss);

router.get("/Age" , aptitudeController.getAge);

router.get("/PermutationAndCombination", aptitudeController.getPermutationAndCombination);

router.get("/SpeedTimeDistance", aptitudeController.getSpeedTimeDistance);

router.get("/SimpleInterest", aptitudeController.getSimpleInterest);

router.get("/Calendar", aptitudeController.getCalendar);

router.get("/PipesAndCisterns", aptitudeController.getPipesAndCistern);

module.exports = router;
