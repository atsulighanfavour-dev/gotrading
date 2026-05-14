const slide = [
  {
    Image: "images/bitcoin.jpg",
    title: "Very Much Convinient, Providing faster and smooter experience.",
    text: "Invest with us let your money do the work.",
    explore: "Discover More",
  },
  {
    Image: "images/Forex.webp",
    title:
      "Consider Investing In A Reputable Organisation You Have Confidence In.",
    text: "Rest easy knowing your investment is under 24/7 surveilance",
    explore: "Discover More",
  },
];

let index = 0;

function changeslide() {
    const bg = document.querySelector(".bg");
    const title = document.getElementById("img-title");
    const text = document.getElementById("img-text");
    const explore = document.querySelector(".explore");

    bg.style.backgroundImage = `url(${slide[index].Image})`;
    title.textContent = slide[index].title;
    text.textContent = slide[index].text;
    explore.textContent = slide[index].explore;


    index = (index + 1) % slide.length
}

setInterval(changeslide, 4000);
changeslide();
