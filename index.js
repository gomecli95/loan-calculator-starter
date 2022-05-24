const calc = document.getElementById("calc");
calc.addEventListener("click", () => {
    const principal = document.getElementById("amount").value;
    const interest = document.getElementById("rate").value;
    const months = document.getElementById("months").value;
    if (principal == "" || interest == "" || months == "") {
        alert("Please enter valid input!");
    }
    const monthlyPayment = ((principal) * ((interest / (100 * (12 / months))) + 1)) / months;
    if (!isNaN(monthlyPayment) && monthlyPayment < Infinity) {
        document.getElementById("total").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    } else {
        document.getElementById("total").innerHTML = "Invalid input"
    }
})
