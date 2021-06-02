
const rates ={};// список курса валют

const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');
const elementAUD = document.querySelector('[data-value="AUD"]');
const elementAZN = document.querySelector('[data-value="AZN"]');
const elementAMD = document.querySelector('[data-value="AMD"]');

const elementUSD1 = document.querySelector('[data-value="USD1"]');
const elementEUR1 = document.querySelector('[data-value="EUR1"]');
const elementGBP1 = document.querySelector('[data-value="GBP1"]');
const elementAUD1 = document.querySelector('[data-value="AUD1"]');
const elementAZN1 = document.querySelector('[data-value="AZN1"]');
const elementAMD1 = document.querySelector('[data-value="AMD1"]');

const elementUSD2 = document.querySelector('[data-value="USD2"]');
const elementEUR2 = document.querySelector('[data-value="EUR2"]');
const elementGBP2 = document.querySelector('[data-value="GBP2"]');
const elementAUD2 = document.querySelector('[data-value="AUD2"]');
const elementAZN2 = document.querySelector('[data-value="AZN2"]');
const elementAMD2 = document.querySelector('[data-value="AMD2"]');

// 
getCurrencies();
setInterval(getCurrencies,180000);
//xabr
//https://www.cbr-xml-daily.ru/
async function getCurrencies(){
	const response= await fetch('https://www.cbr-xml-daily.ru/daily_json.js');//await дождаться ответа от сервера
	
	const data= await response.json();
	const result= await data;

rates.USD=result.Valute.USD;
rates.EUR=result.Valute.EUR;
rates.GBP=result.Valute.GBP;
rates.AUD=result.Valute.AUD;
rates.AZN=result.Valute.AZN;
rates.AMD=result.Valute.AMD;

console.log(rates);

elementUSD.textContent = rates.USD.Value.toFixed(2);// 
elementEUR.textContent = rates.EUR.Value.toFixed(2);
elementGBP.textContent = rates.GBP.Value.toFixed(2);
elementAUD.textContent = rates.AUD.Value.toFixed(2);
elementAZN.textContent = rates.AZN.Value.toFixed(2);
elementAMD.textContent = rates.AMD.Value.toFixed(2);

elementUSD2.textContent = (rates.USD.Previous - rates.USD.Value).toFixed(2);
elementEUR2.textContent = (rates.EUR.Previous - rates.EUR.Value).toFixed(2);
elementGBP2.textContent = (rates.GBP.Previous - rates.GBP.Value).toFixed(2);
elementAUD2.textContent = (rates.AUD.Previous - rates.AUD.Value).toFixed(2);
elementAZN2.textContent = (rates.AZN.Previous - rates.AZN.Value).toFixed(2);
elementAMD2.textContent = (rates.AMD.Previous - rates.AMD.Value).toFixed(2);

elementUSD1.textContent = rates.USD.Previous.toFixed(2);
elementEUR1.textContent = rates.EUR.Previous.toFixed(2);
elementGBP1.textContent = rates.GBP.Previous.toFixed(2);
elementAUD1.textContent = rates.AUD.Previous.toFixed(2);
elementAZN1.textContent = rates.AZN.Previous.toFixed(2);
elementAMD1.textContent = rates.AMD.Previous.toFixed(2);

// color USD
if(rates.USD.Value > rates.USD.Previous){
	elementUSD2.classList.add('top');	
}
// if else(rates.USD.Value = rates.USD.Previous){
// 	elementUSD2.classList.add('centr');
// }
else
{
	elementUSD2.classList.add('bottom');
}

// color EUR
if(rates.EUR.Value>rates.EUR.Previous){
	elementEUR2.classList.add('top');
}
else
{
	elementEUR2.classList.add('bottom');
}

// color GBP
if(rates.GBP.Value>rates.GBP.Previous){
	elementGBP2.classList.add('top');
}
else
{
	elementGBP2.classList.add('bottom');
}

// color AUD
if(rates.AUD.Value>rates.AUD.Previous){
	elementAUD2.classList.add('top');
}
else
{
	elementAUD2.classList.add('bottom');
}

// color AZN
if(rates.AZN.Value>rates.AZN.Previous){
	elementAZN2.classList.add('top');
}
else
{
	elementAZN2.classList.add('bottom');
}

// color AMD
if(rates.AMD.Value>rates.AMD.Previous){
	elementAMD2.classList.add('top');
}
else
{
	elementAMD2.classList.add('bottom');
}

}



// 