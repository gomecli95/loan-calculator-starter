const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", () => {
    const principal = document.getElementById("amount").value;
    const interest = document.getElementById("rate").value;
    const months = document.getElementById("months").value;
    const monthlyPayment = ((principal) * ((interest / (100 * (12 / months))) + 1)) / months;
    if (!isNaN(monthlyPayment) && monthlyPayment < Infinity) {
        document.getElementById("total").innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
    }
})
