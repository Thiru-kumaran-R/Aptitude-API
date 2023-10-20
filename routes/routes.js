const express = require("express");

const router = express.Router();

const aptitudeController = require("../controllers/controller");

router.get("/random", aptitudeController.getBasics);

router.get("/MixtureAndAlligation", aptitudeController.getMixtureAndAlligation);

router.get("/ProfitAndLoss", aptitudeController.getProfitAndLoss)

router.get("/Age" , aptitudeController.getAge);

module.exports = router;