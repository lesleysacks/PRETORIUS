// Pretorius – page behaviour (footer year + "Expand all" button for services)

document.getElementById("yr").textContent = new Date().getFullYear();

// Expand / collapse all services
const list = document.getElementById("services-list");
const toggleBtn = document.querySelector(".toggle-all");
const items = list.querySelectorAll(":scope > details");

toggleBtn.addEventListener("click", () => {
  const expand = toggleBtn.getAttribute("aria-expanded") !== "true";
  items.forEach(d => { d.open = expand; });
});

// Keep the button in sync when items open/close individually (toggle doesn't bubble → capture)
list.addEventListener("toggle", () => {
  toggleBtn.setAttribute("aria-expanded", [...items].every(d => d.open));
}, { capture: true });
