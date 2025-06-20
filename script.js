document.addEventListener("DOMContentLoaded", () => {
  const name = "RISHABH CHOUDHARY";
  const target = document.getElementById("animatedName");

  if (target) {
    name.split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.classList.add("glitch-text");

      if (letter === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.setAttribute("data-text", letter);
        span.textContent = letter;
      }

      span.style.animationDelay = `${index * 0.07}s`; // Slightly faster typing
      target.appendChild(span);
    });
  }

  // Loader fade-out
  const loader = document.getElementById("loading");
  loader.style.transition = "opacity 1s ease";

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => loader.remove(), 1000);
  }, 1000);

  // Scroll fade-in animations
  const fadeIns = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  fadeIns.forEach(el => observer.observe(el));

  // Vanta Net Background Setup
  let vantaEffect = null;

  function initVanta() {
    if (vantaEffect) vantaEffect.destroy();

    vantaEffect = VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x00ffff,
      backgroundColor: 0x02070a,
      points: 14.00,
      maxDistance: 22.00,
      spacing: 16.00
    });
  }

  initVanta();
  window.addEventListener("resize", () => {
    initVanta(); // Reinitialize on resize to fix canvas sizing issues
  });
});
