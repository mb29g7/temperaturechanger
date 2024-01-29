document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("temperature-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputTemp = parseFloat(document.getElementById("temperature").value);
        const inputType = document.getElementById("unit").value.toUpperCase();

        if (isNaN(inputTemp)) {
            resultDiv.innerText = "Please enter a valid number.";
        } else if (inputType !== "F" && inputType !== "C") {
            resultDiv.innerText = "Please enter °F or °C.";
        } else {
            let convertedTemp, convertedType;

            if (inputType === "F") {
                convertedTemp = ((inputTemp - 32) * 5) / 9;
                convertedType = "C";
            } else {
                convertedTemp = (inputTemp * 9) / 5 + 32;
                convertedType = "F";
            }

            convertedTemp = convertedTemp.toFixed(2);
            resultDiv.innerText = `${inputTemp} ${inputType} is ${convertedTemp} ${convertedType}`;
        }
    });
});
