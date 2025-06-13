document.addEventListener("DOMContentLoaded", () => {
  const name = "RISHABH CHOUDHARY";
  const target = document.getElementById("animatedName");

  name.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.classList.add("glitch-text");

    if (letter === " ") {
      span.innerHTML = "&nbsp;"; // Proper space handling
    } else {
      span.setAttribute("data-text", letter);
      span.textContent = letter;
    }

    span.style.animationDelay = `${index * 0.1}s`;
    target.appendChild(span);
  });

  // Loader fade-out after short delay
  const loader = document.getElementById("loading");
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 1s ease";
    setTimeout(() => loader.remove(), 1000);
  }, 1200);

  // Scroll-based fade-in
  const fadeIns = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Only once
      }
    });
  }, { threshold: 0.2 });

  fadeIns.forEach(el => observer.observe(el));

  // Vanta Background Setup
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x0ff,
    backgroundColor: 0x02070a,
    points: 12.00,
    maxDistance: 20.00,
    spacing: 15.00
  });
});
