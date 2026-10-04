// Autoplay helpers: pause-other + pause offscreen to save battery/data
(function () {
  function init() {
    var videos = Array.prototype.slice.call(document.querySelectorAll(".video-grid video"));
    if (!videos.length) return;

    // Try muted autoplay (required by browsers: muted + playsinline)
    videos.forEach(function (v) {
      v.muted = true;
      var p = v.play();
      if (p && p.catch) p.catch(function () {});
    });

    // When user plays one with sound, pause the others
    videos.forEach(function (v) {
      v.addEventListener("play", function () {
        videos.forEach(function (other) {
          if (other !== v && !other.paused) other.pause();
        });
      });
    });

    // Pause videos scrolled out of view, resume when visible
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var v = entry.target;
            if (entry.isIntersecting) {
              if (v.paused && v.muted) {
                var p = v.play();
                if (p && p.catch) p.catch(function () {});
              }
            } else if (!v.paused) {
              v.pause();
            }
          });
        },
        { threshold: 0.25 }
      );
      videos.forEach(function (v) {
        io.observe(v);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
