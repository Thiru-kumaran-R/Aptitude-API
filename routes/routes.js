const express = require("express");
const {body} = require('express-validator');

const router = express.Router();

const validation = require('../validation/validation');
const aptitudeController = require("../controllers/controller");

//random routes
router.get("/random", aptitudeController.getRandom);

router.post('/random', aptitudeController.postRandom);

router.get("/MixtureAndAlligation", aptitudeController.getMixtureAndAlligation);

router.get("/ProfitAndLoss", aptitudeController.getProfitAndLoss);

//Age routes
router.get("/Age" , aptitudeController.getAge);

router.post('/Age',validation.validateUser ,validation.handleValidationErrors ,aptitudeController.postAge);

router.get("/PermutationAndCombination", aptitudeController.getPermutationAndCombination);

router.get("/SimpleInterest", aptitudeController.getSpeedTimeDistance);

router.get("/SimpleInterest", aptitudeController.getSimpleInterest);

router.get("/Calendar", aptitudeController.getCalendar);

router.get("/PipesAndCisterns", aptitudeController.getPipesAndCistern);

module.exports = router;
