const headers1 = document.querySelectorAll(".table_head");

let cryptoData = [];

async function fecthCrypto(currency = "usd") {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1`,
    );

    const data = await response.json();

    cryptoData = data;

    renderTable(cryptoData);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

function renderTable(data) {
  document.getElementById("crypto_market").innerHTML = data
    .map(
      (coin) => `
            <tr>
               <td id="coin-info">
                 <img src="${coin.image}" width="15">
                 <span>${coin.name}</span>
                </td>
                <td id="coin-info">${coin.market_cap.toLocaleString()}</td>
                <td id="coin-info">${coin.fully_diluted_valuation?.toLocaleString() || "N/A"}</td>
                <td id="coin-info">$${coin.current_price.toLocaleString()}</td>
                <td id="coin-info">${coin.circulating_supply.toLocaleString()}</td>
                <td id="coin-info">${coin.total_supply?.toLocaleString() || "N/A"}</td>
                <td id="coin-info">${coin.total_volume.toLocaleString()}</td>
                <td id="coin-info" class="${
                  coin.price_change_percentage_24h >= 0
                    ? "positive"
                    : "negative"
                }">
                   ${coin.price_change_percentage_24h?.toFixed(2) || "0.00"}%
                  </td>
            </tr>
            `,
    )
    .join("");
}

headers1.forEach((header) => {
  header.addEventListener("click", () => {
    const sortKey = header.dataset.sort;

    if (sortKey === "name") {
      cryptoData.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      cryptoData.sort((a, b) => (b[sortKey] ?? 0) - (a[sortKey] ?? 0));
    }

    renderTable(cryptoData);
  });
});

fecthCrypto();
