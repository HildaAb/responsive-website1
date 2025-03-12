window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("windoww-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
  });
});
