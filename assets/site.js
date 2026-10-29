// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Photo viewer on the Projects page
const box = document.querySelector("dialog.lightbox");
if (box) {
  const img = box.querySelector("img");
  const cap = box.querySelector("p");
  document.querySelectorAll(".gallery button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const thumb = btn.querySelector("img");
      img.src = thumb.src;
      img.alt = thumb.alt;
      cap.textContent = btn.querySelector("figcaption")?.textContent || "";
      box.showModal();
    });
  });
  box.addEventListener("click", (e) => {
    if (e.target === box || e.target.classList.contains("close")) box.close();
  });
}

// Contact form: opens the visitor's email app with the message filled in
const form = document.querySelector("#quote-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Tree work request – ${d.get("service")}`;
    const body = [
      `Name: ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email")}`,
      `Address / area: ${d.get("address")}`,
      `Service: ${d.get("service")}`,
      "",
      d.get("message"),
    ].join("\n");
    window.location.href =
      `mailto:${form.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
