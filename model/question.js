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
        required : true,
        unique : true,
        sparse : true,
        index : true
    },
    explanation : {
        type : String,
        required : true
    }
})

const Age = mongoose.model('Age', questionSchema);
const Calendar = mongoose.model('Calendar', questionSchema);
const MixtureAndAlligation = mongoose.model('MixtureAndAlligation', questionSchema);
const PermutationAndCombination = mongoose.model('PermutationAndCombination', questionSchema);
const PipesAndCistern = mongoose.model('PipesAndCistern', questionSchema);
const ProfitAndLoss = mongoose.model('ProfitAndLoss', questionSchema);
const SimpleInterest = mongoose.model('SimpleInterest', questionSchema);
const SpeedTimeDistance = mongoose.model('SpeedTimeDistance', questionSchema);
const Random = mongoose.model('Random', questionSchema);

module.exports = { 
    Age, 
    Random,
    Calendar,  
    PipesAndCistern,
    ProfitAndLoss, 
    SimpleInterest, 
    SpeedTimeDistance,
    MixtureAndAlligation, 
    PermutationAndCombination,
};