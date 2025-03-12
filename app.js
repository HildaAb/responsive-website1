window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("windoww-scroll", window.scrollY > 0);
});
