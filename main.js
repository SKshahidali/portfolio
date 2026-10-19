(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme");
  var meta = document.querySelector('meta[name="theme-color"]');
  var mq = window.matchMedia("(prefers-color-scheme: dark)");

  function current() {
    return root.dataset.theme || (mq.matches ? "dark" : "light");
  }
  function apply(theme) {
    root.dataset.theme = theme;
    btn.setAttribute("aria-label", "Switch to " + (theme === "dark" ? "light" : "dark") + " mode");
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0c1a22" : "#f4f7f9");
  }

  apply(current());
  btn.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
