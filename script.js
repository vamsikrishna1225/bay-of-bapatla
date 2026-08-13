const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const toast = document.querySelector(".toast");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "✕" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

document.querySelector("#subscribe-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = e.target.querySelector("input").value;
  if (!email) return;
  toast.textContent = "Thanks! You'll receive Bay of Bapatla updates.";
  toast.classList.add("show");
  e.target.reset();
  setTimeout(() => toast.classList.remove("show"), 3500);
});
