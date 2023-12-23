// List of supported currencies Static Currency Values
const currencies = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
  "INR",
];

// Populate currency dropdowns
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromCurrencySelect.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toCurrencySelect.add(option);
});

// Set default values
fromCurrencySelect.value = "USD"; // Default currency is USD
toCurrencySelect.value = "INR"; // Default converted currency is EUR
amount.value = 1;

function convertCurrency() {
  var amount = parseFloat(document.getElementById("amount").value);
  var fromCurrency = document.getElementById("fromCurrency").value;
  var toCurrency = document.getElementById("toCurrency").value;

  // For demonstration purposes, use hardcoded conversion rates STATIC
  var conversionRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.25,
    CAD: 1.26,
    AUD: 1.34,
    CHF: 0.91,
    CNY: 6.42,
    SEK: 8.58,
    NZD: 1.45,
    INR: 73.5,
  };

  var result =
    (amount * conversionRates[toCurrency]) / conversionRates[fromCurrency];

  document.getElementById("result").innerHTML =
    amount + " " + fromCurrency + " is " + result.toFixed(2) + " " + toCurrency;
}

// Initial conversion on page load
convertCurrency();
