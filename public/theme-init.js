/* eslint-env browser */

(function () {
  try {
    var storageKey = "portfolio-theme";
    var stored = localStorage.getItem(storageKey);
    var theme = stored || "system";
    var root = document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }
  } catch (e) {
    document.documentElement.classList.add("light");
  }
})();