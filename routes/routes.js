const express = require("express");

const router = express.Router();

const validation = require("../validation/validation");
const aptitudeController = require("../controllers/controller");

//random routes
router.get("/Random", aptitudeController.getRandom);

router.post(
  "/Random",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postRandom
);

//mixture and alligations routes
router.get("/MixtureAndAlligation", aptitudeController.getMixtureAndAlligation);

router.post(
  "/MixtureAndAlligation",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postMixtureAndAlligation
);

//profit and loss routes
router.get("/ProfitAndLoss", aptitudeController.getProfitAndLoss);

router.post(
  "/ProfitAndLoss",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postProfitAndLoss
);

//Age routes
router.get("/Age", aptitudeController.getAge);

router.post(
  "/Age",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postAge
);

//Permutation and combination routes
router.get(
  "/PermutationAndCombination",
  aptitudeController.getPermutationAndCombination
);

router.post(
  "/PermutationAndCombination",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postPermutationAndCombination
);

//simple interest routes
router.get("/SimpleInterest", aptitudeController.getSpeedTimeDistance);

router.post(
  "/SimpleInterest",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postSimpleInterest
);

//calendar routes
router.get("/Calendar", aptitudeController.getCalendar);

router.post(
  "/Calendar",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postCalendar
);

//Pipes and Cisterns routes
router.get("/PipesAndCistern", aptitudeController.getPipesAndCistern);

router.post(
  "/PipesAndCistern",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postPipesAndCisterns
);

// Speed Time Distance routes
router.get("/SpeedTimeDistance", aptitudeController.getSpeedTimeDistance);

router.post(
  "/SpeedTimeDistance",
  validation.validateQuestion,
  validation.handleValidationErrors,
  aptitudeController.postSpeedTimeDistance
);

//delete questions routes
router.delete("/:model", aptitudeController.deleteQuestion);

//modify questions routes
router.patch("/:model", aptitudeController.updateQuestion);

module.exports = router;
