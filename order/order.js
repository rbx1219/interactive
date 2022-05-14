function TradeEntry(){
    const milktea_cup = Number(document.getElementById("milktea").value);
    const coffee_cup = Number(document.getElementById("coffee").value);
    const subtatal = 30*milktea_cup+45*coffee_cup;

    document.getElementById("subtotal").innerHTML = "小計"+subtatal+"元";

}
function Monitor(){
    const reset = document.getElementById("reset");
    reset.addEventListener("click",initdrinkvalue);
}


function initdrinkvalue(){
    // change UI setfield to zero 
    // change subtotal to zero
    const milkteo_cup = document.getElementById("milktea");
    const coffee_cup = document.getElementById("coffee");
    const subtotal = document.getElementById("subtotal");

    if(milkteo_cup){
        milkteo_cup.value = "0";
    }
    if(coffee_cup){
        coffee_cup.value = "0";
    }
    if(subtotal){
        subtotal.innerHTML = "小計0元";
    }
}

function Order(){
    const milktea_cup = Number(document.getElementById("milktea").value);
    const coffee_cup = Number(document.getElementById("coffee").value);
    const subtatal = 30*milktea_cup+45*coffee_cup;
    alert("珍珠奶茶"+milktea_cup+"杯,招牌拿鐵"+coffee_cup+"杯,總計"+subtatal+"元");
}

window.onload = Monitor;