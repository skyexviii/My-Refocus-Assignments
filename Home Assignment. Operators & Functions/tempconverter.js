function cConvertToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin
}
function fConvertToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempKelvin
}
console.log(cConvertToKelvin(35))
console.log(fConvertToKelvin(32))