function temperatureConverter(value) {
  const value = Number.parseFloat(value);
  document.getElementById("outputFahrenheit").innerHTML = ((value * 1.8) + 32).toFixed(1);
}