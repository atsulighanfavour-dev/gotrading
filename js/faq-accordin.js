const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector("h4");

  question.setAttribute("role", "button");
  question.setAttribute("tabindex", "0");
  question.setAttribute("aria-expanded", "false");

  const toggleitem = () => {
    const isOpen = item.classList.contains("open");

    faqItems.forEach((faqItems) => {
      faqItems.classList.remove("open");
      faqItems.querySelector("h4").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      question.setAttribute("aria-expanded", "true");
    }
  };

  question.addEventListener("click", toggleitem);

  question.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleitem();
    }
  });
});
