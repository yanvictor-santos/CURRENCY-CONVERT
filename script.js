const convertButton = document.querySelector(".exchangeButton");
const currencySelect = document.querySelector(".to_convert");

function convertValues() {
  const textAreaCurrency = document.querySelector(".text-currency").value; // valor em real
  const currencyValueConverted = document.querySelector(".convert-currency"); // valor nas outras moedas convertido

  const dolarToday = 5;
  const euroToday = 6;
  const poundToday = 7;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(textAreaCurrency / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(textAreaCurrency / euroToday);
  }

  if (currencySelect.value == "pound") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(textAreaCurrency / poundToday);
  }
}

convertButton.addEventListener("click", convertValues);
