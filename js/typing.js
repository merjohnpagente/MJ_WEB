// Typing animation for "I'm a ..." (Student, Developer, ...)
(function () {
  var WORDS = ["Student", "Developer", "Learning Web Designer", "Youtuber"];
  var TYPE_SPEED = 110;
  var DELETE_SPEED = 55;
  var HOLD_TIME = 1400;

  function init() {
    var el = document.getElementById("typed");
    if (!el) return;

    var wi = 0;
    var ci = 0;
    var deleting = false;

    function tick() {
      var word = WORDS[wi];

      if (!deleting) {
        ci++;
        el.textContent = word.slice(0, ci);
        if (ci >= word.length) {
          deleting = true;
          setTimeout(tick, HOLD_TIME);
          return;
        }
        setTimeout(tick, TYPE_SPEED);
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci <= 0) {
          deleting = false;
          wi = (wi + 1) % WORDS.length;
          setTimeout(tick, 350);
          return;
        }
        setTimeout(tick, DELETE_SPEED);
      }
    }

    tick();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
