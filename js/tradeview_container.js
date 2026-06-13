async function fetchCrypto() {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false",
    );

    const data = await response.json();

    displayCrypto(data);
  } catch (error) {
    console.log(error);
  }
}

fetchCrypto();

const cryptoContainer = document.querySelector(".tradeview_container");

function displayCrypto(coins) {
  cryptoContainer.innerHTML = "";

  coins.forEach((coin) => {
    const isPositive = coin.price_change_percentage_24h >= 0;

    cryptoContainer.innerHTML += `
           <div class="crypto-card">
              <div class="top">
                <span>${coin.symbol.toUpperCase()}/USD</span>
                <span>$${coin.current_price.toLocaleString()}</span>
              </div>

              <div class="bottom ${isPositive ? "green" : "red"}">
                <span>${isPositive ? "▲" : "▼"}</span>
                <span class="percent">
                  ${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </span>
                <span class="change">
                  ${Math.abs(coin.price_change_24h).toFixed(2)}
                </span>
              </div>
          </div>
        `;
  });
}


