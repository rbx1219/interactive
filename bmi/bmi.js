

function bmivalues() {
    const height = document.getElementById("height");
    const m = (height.value)/100;
    const weight = document.getElementById("weight");
    const kg = Math.floor(weight.value);
    BMI.height = height;
    BMI.m = m;
    BMI.weight = weight;
    BMI.kg = kg;
    BMI.bmi = (kg/(m)**2).toFixed(2);
}

function Onclick(){
    bmivalues();
    if (BMI.bmi < 18.5) {
        document.getElementById("information").innerHTML = "BMI:"+BMI.bmi+"體重過輕";
        document.getElementById("information").style.color = "green";
    } else if (BMI.bmi >= 18.5 && BMI.bmi < 24) {
        document.getElementById("information").innerHTML = "BMI:"+BMI.bmi+"正常";
        document.getElementById("information").style.color = "yellow";
    } else {
        document.getElementById("information").innerHTML = "BMI:"+BMI.bmi+"體重過重";
        document.getElementById("information").style.color = "red";
    }
}

function Onhelp(){
    if (BMI.bmi < 18.5) {
        // document.getElementById("thin").style.display = "block";
        window.open('https://www.hpa.gov.tw/Pages/Detail.aspx?nodeid=542&pid=706&sid=9547', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    } else if (BMI.bmi >= 18.5 && BMI.bmi < 24) {
        alert("你體重正常，不用做啥了");
    } else {
        window.open('https://health.tvbs.com.tw/medical/323822', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
    }
}

window.BMI = {};
// init();
