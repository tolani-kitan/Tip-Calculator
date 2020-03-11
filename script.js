let tipCalculation = () => {
    let amount = parseInt(document.getElementById('bill').value);
    let tipPercent = parseInt(document.getElementById('tip').value);
    let numOfPeople = parseInt(document.getElementById('numOfPeople').value);
    
    if(isNaN(amount) || isNaN(tipPercent) || isNaN(numOfPeople)) {
        return 0;
    }

    let invdBill = 0;
    let tips = amount * tipPercent / 100;
    let totalBill = amount + tips;
    invdBill = totalBill / numOfPeople;
    let tipPerPerson = tips / numOfPeople;

    document.getElementById('totalBill').innerHTML = `<strong>₦${formatNumber(totalBill.toFixed(2))}`;
    document.getElementById('tipAmount').innerHTML = `<strong>₦${formatNumber(tips.toFixed(2))}`;
    document.getElementById('tipPerPerson').innerHTML = `<strong>₦${formatNumber(tipPerPerson.toFixed(2))}`;
    document.getElementById('billPerPerson').innerHTML = `<strong>₦${formatNumber(invdBill.toFixed(2))}`;
}

let formatNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

let reset = () => {
    document.getElementById('bill').value = "";
    document.getElementById('tip').value = "";
    document.getElementById('numOfPeople').value = "";
    document.getElementById('totalBill').innerHTML = `0.00`;
    document.getElementById('tipAmount').innerHTML = `0.00`;
    document.getElementById('tipPerPerson').innerHTML = `0.00`;
    document.getElementById('billPerPerson').innerHTML = `0.00`;
}

document.getElementById("calculate").addEventListener("click", tipCalculation);
document.getElementById("reset").addEventListener("click", reset);



