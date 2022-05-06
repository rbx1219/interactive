function Onclick(){
    const height = document.getElementById("height");
    const m = (height.value)/100;
    const weight = document.getElementById("weight");
    const kg = Math.abs(weight.value);
    const bmi = kg/(m)**2;
    if (bmi < 18.5) {
        document.getElementById("information").innerHTML = "BMI:體重過輕";
        document.getElementById("information").style.color = "green";
    } else if (bmi >= 18.5 && bmi < 24) {
        document.getElementById("information").innerHTML = "BMI:正常";
        document.getElementById("information").style.color = "yellow";
    } else {
        document.getElementById("information").innerHTML = "BMI:體重過重";
        document.getElementById("information").style.color = "red";
    }
}