const themeDots = document.querySelectorAll(".theme-dot");
const body = document.body;

themeDots.forEach(dot => {
  dot.addEventListener("click", () => {
    const theme = dot.getAttribute("data-theme-val");

    body.setAttribute("data-theme", theme);

    themeDots.forEach(item => item.classList.remove("active"));
    dot.classList.add("active");
  });
});

const skillBars = document.querySelectorAll(".skill-bar-inner");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const percentage = entry.target.getAttribute("data-percentage");
        entry.target.style.width = percentage + "%";
      }
    });
  },
  {
    threshold: 0.3
  }
);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

const panels = document.querySelectorAll(".panel");

const panelObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15
  }
);

panels.forEach(panel => {
  panel.style.opacity = "0";
  panel.style.transform = "translateY(25px)";
  panel.style.transition = "0.7s ease";
  panelObserver.observe(panel);
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


