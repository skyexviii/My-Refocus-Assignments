let weight = 0; // write in KG
let height = 0; // write in CM

function getBMI(weight, height){
    const  BMI = (weight/height/height)*10000;
    if (BMI <= 18.5){
        console.log("Underweight")
    } else if (BMI > 18.5 && BMI < 24.9){
        console.log("Normal")
    } else if(BMI > 25){
        console.log("Overweight")
    } else return 0;
}

getBMI(20, 164)