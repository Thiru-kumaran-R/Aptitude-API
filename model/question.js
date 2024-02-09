const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question : {
        type : String,
        required : true
    },
    answer : {
        type : String,
        required : true
    },
    options : {
        type : [String],
        required : true
    },
    explanation : {
        type : String,
        required : true
    }
})

const ageSchema = mongoose.model('AgeQuestions', questionSchema);
const calendarSchema = mongoose.model('CalendarQuestions', questionSchema);
const mixtureSchema = mongoose.model('MixtureAndAlligationQuestions', questionSchema);
const PermutationSchema = mongoose.model('PermutationAndCombinationQuestions', questionSchema);
const PipesSchema = mongoose.model('PipesAndCisternQuestions', questionSchema);
const ProfitSchema = mongoose.model('ProfitAndLossQuestions', questionSchema);
const SimpleSchema = mongoose.model('SimpleInterestQuestions', questionSchema);
const SpeedSchema = mongoose.model('SpeedTimeDistanceQuestions', questionSchema);

modules.export = {
    ageSchema,
    calendarSchema,
    mixtureSchema,
    PermutationSchema,
    PipesSchema,
    ProfitSchema,
    SimpleSchema,
    SpeedSchema
}