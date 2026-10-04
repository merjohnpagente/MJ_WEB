// Hamburger menu toggle (shared by Home, About, Gallery)
(function () {
  function init() {
    var toggle = document.getElementById("menu-toggle");
    var nav = document.getElementById("nav-menu");
    if (!toggle || !nav) return;

    var icon = toggle.querySelector("i");

    function setOpen(open) {
      nav.classList.toggle("active", open);
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (icon) {
        icon.className = open ? "bx bx-x" : "bx bx-menu";
      }
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains("active"));
    });

    // Close when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
