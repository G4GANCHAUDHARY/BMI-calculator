// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (height<=0 || mass<=0) {
        return "INVALID INPUT"
    }
    else {
        var BMI=1.0;
        BMI=mass/(height*height)
        return BMI
    }
}

module.exports = BMICalculator;
