const headers = document.querySelectorAll(".currency-head");

const symbols = {
  usd: "$",
  eur: "€",
  ngn: "₦",
  gbp: "£",
};

async function fetchCrypto(currency = "usd") {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=bitcoin,ethereum,solana,dogecoin`,
  );

  const data = await response.json();

  const sign = symbols[currency];

  document.getElementById("cryptoTable").innerHTML = `
    
       <tr>
           <td class="c_t"><img src="${data[0].image}" width="15">
               BTC
            </td>
            <td class="c_t">${sign}${data[0].current_price}</td>
        </tr>

        <tr>
            <td class="c_t"><img src="${data[1].image}" width="15">
               ETH
            </td>
            <td class="c_t">${sign}${data[1].current_price}</td>
        </tr>

        <tr>
            <td class="c_t"><img src="${data[2].image}" width="15">
              SOL</td>
            <td class="c_t">${sign}${data[2].current_price}</td>
        </tr>

        <tr>
            <td class="c_t"><img src="${data[3].image}" width="15">
             DOGE</td>
            <td class="c_t">${sign}${data[3].current_price}</td>           
        </tr>

    `;
}

fetchCrypto();

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const currency = header.dataset.currency;

    // remove active from all headers
    headers.forEach(h => h.classList.remove("active"));

    // add active to clicked one
    header.classList.add("active");

    fetchCrypto(currency);
  });
});



 

