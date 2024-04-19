const fetchRes = fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ySMNdhAdGoWB8KaSgx1eMmvrrPafLNJ39HpzxObZ&currencies=EUR%2CUSD%2CCAD%2CAUD%2CNZD&base_currency=GBP");

fetchRes.then(res =>
	res.json()).then(rates => {
		document.getElementById('eur-exchange-value').textContent = rates.data.EUR.toFixed(5);
		document.getElementById('usd-exchange-value').textContent = rates.data.USD.toFixed(5);
		document.getElementById('aud-exchange-value').textContent = rates.data.AUD.toFixed(5);
		document.getElementById('nzd-exchange-value').textContent = rates.data.NZD.toFixed(5);
		document.getElementById('cad-exchange-value').textContent = rates.data.CAD.toFixed(5);

		document.getElementById('currencyContainer').style.visibility = 'visible';
	}).catch((e) => {
		console.log(e);
	});
