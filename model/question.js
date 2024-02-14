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

const Age = mongoose.model('Age', questionSchema);
const Calendar = mongoose.model('Calendar', questionSchema);
const Mixture = mongoose.model('MixtureAndAlligation', questionSchema);
const Permutation = mongoose.model('PermutationAndCombination', questionSchema);
const PipesAndCistern = mongoose.model('PipesAndCistern', questionSchema);
const ProfitAndLoss = mongoose.model('ProfitAndLoss', questionSchema);
const SimpleAndInterest = mongoose.model('SimpleInterest', questionSchema);
const SpeedTimeDistance = mongoose.model('SpeedTimeDistance', questionSchema);
const Random = mongoose.model('Random', questionSchema);

module.exports = { 
    Age, 
    Calendar, 
    Mixture, 
    Permutation, 
    PipesAndCistern,
    ProfitAndLoss, 
    SimpleAndInterest, 
    SpeedTimeDistance, 
    Random 
};