function checkKilo() {
    let Kwh = document.getElementById("kilowat").value;
    let ans = document.getElementById("Ans");

    if (Kwh === "" || Kwh < 0) {
        ans.textContent = "Please input a non-negative number.";
        ans.style.color = "red";
    }
    else {
        ans.textContent = ""; 
        if (Kwh <= 100) {
            alert("Lifeline Consumer: Discounted electricity rates");
        }
        else if (Kwh <= 200) {
            alert("Low Consumption: Normal residential rate");
        }
        else if (Kwh <= 300) {
            alert("Average Consumption: Typical electricity usage");
        }
        else if (Kwh <= 500) {
            alert("High Consumption: Higher electricity usage");
        }
        else {
            alert("Very High Consumption: Heavy electricity users");
        }
    }
}