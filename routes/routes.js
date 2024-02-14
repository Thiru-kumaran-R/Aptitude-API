const express = require("express");

const router = express.Router();

const validation = require('../validation/validation');
const aptitudeController = require("../controllers/controller");

//random routes
router.get("/random", aptitudeController.getRandom);

router.post('/random',validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postRandom);

//mixture and alligations routes
router.get("/MixtureAndAlligation", aptitudeController.getMixtureAndAlligation);

router.post("/MixtureAndAlligation",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postMixtureAndAlligation);

//profit and loss routes
router.get("/ProfitAndLoss", aptitudeController.getProfitAndLoss);

router.post("/ProfitAndLoss",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postProfitAndLoss);

//Age routes
router.get("/Age" , aptitudeController.getAge);

router.post('/Age',validation.validateQuestion ,validation.handleValidationErrors ,aptitudeController.postAge);

//Permutation and combination routes
router.get("/PermutationAndCombination", aptitudeController.getPermutationAndCombination);

router.post("/PermutationAndCombination",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postPermutationAndCombination);

//simple interest routes
router.get("/SimpleInterest", aptitudeController.getSpeedTimeDistance);

router.post("/SimpleInterest",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postSimpleInterest);

//calendar routes
router.get("/Calendar", aptitudeController.getCalendar);

router.post("/Calendar",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postCalendar);

//Pipes and Cisterns routes
router.get("/PipesAndCisterns", aptitudeController.getPipesAndCistern);

router.post("/PipesAndCisterns",validation.validateQuestion ,validation.handleValidationErrors, aptitudeController.postPipesAndCisterns);

module.exports = router;
