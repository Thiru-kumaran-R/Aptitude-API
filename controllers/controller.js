const mongoose = require("mongoose");
const Model = require("../model/question");

exports.getAge = async (req, res, next) => {
  try {
    const doc = await Model.Age.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postAge = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.Age.exists({ question: question });
    if (doc) {
      const error = new Error("Question Already exists");
      error.statusCode = 409;
      throw error;
    }
    let age = new Model.Age({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await age.save();
    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getRandom = async (req, res, next) => {
  try {
    const doc = await Model.Random.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postRandom = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.Random.exists({ question: question });
    if (doc) {
      const error = new Error("Question Already exists");
      error.statusCode = 409;
      throw error;
    }
    const random = new Model.Random({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await random.save();
    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getMixtureAndAlligation = async (req, res, next) => {
  try {
    const doc = await Model.MixtureAndAlligation.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postMixtureAndAlligation = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.MixtureAndAlligation.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }

    const mixture = new Model.MixtureAndAlligation({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await mixture.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getProfitAndLoss = async (req, res, next) => {
  try {
    const doc = await Model.ProfitAndLoss.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postProfitAndLoss = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.ProfitAndLoss.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }

    const profitAndLoss = new Model.ProfitAndLoss({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await profitAndLoss.save();
    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPermutationAndCombination = async (req, res, next) => {
  try {
    const doc = await Model.PermutationAndCombination.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postPermutationAndCombination = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.PermutationAndCombination.exists({
      question: question,
    });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }
    const permutationAndCombination = new Model.PermutationAndCombination({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await permutationAndCombination.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getSpeedTimeDistance = async (req, res, next) => {
  try {
    const doc = await Model.SpeedTimeDistance.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postSpeedTimeDistance = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.SpeedTimeDistance.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }
    const speedTimeDistance = new Model.SpeedTimeDistance({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await speedTimeDistance.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getSimpleInterest = async (req, res, next) => {
  try {
    const doc = await Model.SimpleInterest.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postSimpleInterest = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.SimpleInterest.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }
    const simpleInterest = new Model.SimpleInterest({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await simpleInterest.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getCalendar = async (req, res, next) => {
  try {
    const doc = await Model.Calendar.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postCalendar = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.Calendar.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }
    const calendar = new Model.Calendar({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await calendar.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getPipesAndCistern = async (req, res, next) => {
  try {
    const doc = await Model.PipesAndCistern.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0, _v: 0 } },
    ]);
    return res.status(200).json(doc[0]);
  } catch (err) {
    next(err);
  }
};

exports.postPipesAndCisterns = async (req, res, next) => {
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await Model.PipesAndCistern.exists({ question: question });
    if (doc) {
      const error = new Error("Question already exists");
      error.statusCode = 409;
      throw error;
    }
    const pipesAndCistern = new Model.PipesAndCistern({
      question: question,
      answer: answer,
      options: options,
      explanation: explanation,
    });
    await pipesAndCistern.save();

    res.status(201).json({
      message: "Question created successfully",
      postedQuestion: {
        question: question,
        answer: answer,
        options: options,
        explanation: explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteQuestion = async (req, res, next) => {
  const model = req.params.model;
  const question = req.body.question;

  if (!question) {
    const error = new Error("Question is required");
    error.statusCode = 422;
    throw error;
  }

  if (!model) {
    const error = new Error("Topic must be defined in the route");
    error.statusCode = 422;
    throw error;
  }

  try {
    const doc = await mongoose
      .model(model)
      .findOneAndDelete({ question: question });
    if (!doc) {
      const error = new Error("Question not found");
      error.statusCode = 404;
      throw error;
    }

    res.json({
      message: "Question deleted successfully",
      deletedQuestion: {
        question: doc.question,
        answer: doc.answer,
        options: doc.options,
        explanation: doc.explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateQuestion = async (req, res, next) => {
  const model = mongoose.model(req.params.model);

  const questionToBeUpdated = req.body.questionToBeUpdated;
  const question = req.body.question;
  const answer = req.body.answer;
  const options = req.body.options;
  const explanation = req.body.explanation;

  try {
    const doc = await model.exists({ question: questionToBeUpdated });
    if (!doc) {
      console.log(doc)
      const error = new Error("Question does not exists.");
      error.statusCode = 404;
      throw error;
    }
    const document = await model.findById({ _id: doc._id });
    document.question = question;
    document.answer = answer;
    document.options = options;
    document.explanation = explanation;
    await document.save();
    res.json({
      message: "Question updated successfully",
      updateQuestionquestion: {
        question: document.question,
        answer: document.answer,
        options: document.options,
        explanation: document.explanation,
      },
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
