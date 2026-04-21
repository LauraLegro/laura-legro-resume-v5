document.addEventListener("click", function (e) {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const url = a.getAttribute("href");
  if (url && url.startsWith("http")) {
    e.preventDefault();
    try {
      window.top.open(url, "_blank");
    } catch (err) {
      window.open(url, "_blank");
    }
  }
});

function toggleTheme() {
  const body = document.body;
  const label = document.getElementById("toggleLabel");
  const icon = document.querySelector(".toggle-icon");
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  label.textContent = isLight ? "DARK" : "LIGHT";
  icon.textContent = isLight ? "☀️" : "🌙";
}
// First get the full content height
