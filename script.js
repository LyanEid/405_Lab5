// Wait until the whole page is parsed so every element exists
document.addEventListener("DOMContentLoaded", function () {

  // ===== Task 1: Dark / Light Mode =====
  const themeBtn = document.getElementById("theme-toggle");

  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    document.documentElement.classList.toggle("dark-mode", isDark);
    themeBtn.textContent = isDark ? "\u2600 Light Mode" : "\u263E Dark Mode";
  });

  // ===== Task 2: Show More / Show Less =====
  const aboutBtn = document.getElementById("about-toggle");
  const aboutMore = document.getElementById("about-more");

  aboutBtn.addEventListener("click", function () {
    aboutMore.classList.toggle("hidden");
    const isHidden = aboutMore.classList.contains("hidden");
    aboutBtn.textContent = isHidden ? "Show More +" : "Show Less \u2212";
    aboutBtn.setAttribute("aria-expanded", String(!isHidden));
  });

  // ===== Task 3: Dynamic Projects =====
  const projects = [
    {
      title: "TrainHub - Internship Platform",
      description:
        "A UI/UX design in Figma for a platform connecting students with training opportunities, with a full high-fidelity prototype.",
      category: "Web",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      link: "https://www.figma.com/proto/u1FXfl15rqnt4WlkoDsVTw/280_High?node-id=2095-162&scaling=scale-down&starting-point-node-id=2095%3A162"
    },
    {
      title: "Van Seller System",
      description:
        "A role-based Java system for van sales with product scanning, returns, payments, and daily/monthly reports, using File I/O for data storage.",
      category: "Programming",
      technologies: ["Java", "File I/O"]
    },
    {
      title: "Airline Ticket Reservation System",
      description:
        "A Java system for managing airline reservations and passenger data, using File I/O to store and retrieve bookings.",
      category: "Programming",
      technologies: ["Java", "File I/O"]
    },
    {
      title: "Senior Project",
      description:
        "Currently in progress as part of my final year at King Abdulaziz University. Details coming soon.",
      category: "Programming",
      technologies: ["Cybersecurity", "Digital Forensics"]
    }
  ];

  const projectsContainer = document.getElementById("projects-container");

  function renderProjects(category) {
    // Clear old cards first so nothing is duplicated
    projectsContainer.innerHTML = "";

    const filtered =
      category === "All"
        ? projects
        : projects.filter(function (p) {
            return p.category === category;
          });

    filtered.forEach(function (project) {
      const card = document.createElement("article");
      card.className = "project-card";

      const badge = document.createElement("span");
      badge.className = "badge badge-" + project.category.toLowerCase();
      badge.textContent = project.category;

      const title = document.createElement("h3");
      title.textContent = project.title;

      const desc = document.createElement("p");
      desc.textContent = project.description;

      const techList = document.createElement("ul");
      techList.className = "tech-list";
      project.technologies.forEach(function (t) {
        const li = document.createElement("li");
        li.textContent = t;
        techList.appendChild(li);
      });

      card.appendChild(badge);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(techList);

      if (project.link) {
        const link = document.createElement("a");
        link.href = project.link;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "View Figma Prototype \u2192";
        card.appendChild(link);
      }

      projectsContainer.appendChild(card);
    });
  }

  // ===== Task 4: Project Filtering =====
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      renderProjects(btn.dataset.category);
    });
  });

  // Render all projects when the page loads
  renderProjects("All");

  // ===== Task 5: Print / Save as PDF =====
  document.getElementById("print-btn").addEventListener("click", function () {
    window.print();
  });
});
