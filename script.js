// ===== Task 1: Dark / Light Mode =====
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// ===== Task 2: Show More / Show Less =====
const aboutBtn = document.getElementById("about-toggle");
const aboutMore = document.getElementById("about-more");

aboutBtn.addEventListener("click", function () {
  aboutMore.classList.toggle("hidden");
  const isHidden = aboutMore.classList.contains("hidden");
  aboutBtn.textContent = isHidden ? "Show More" : "Show Less";
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

    const title = document.createElement("h3");
    title.textContent = project.title;

    const desc = document.createElement("p");
    desc.textContent = project.description;

    const cat = document.createElement("p");
    const catLabel = document.createElement("strong");
    catLabel.textContent = "Category: ";
    cat.appendChild(catLabel);
    cat.appendChild(document.createTextNode(project.category));

    const tech = document.createElement("p");
    const techLabel = document.createElement("strong");
    techLabel.textContent = "Technologies: ";
    tech.appendChild(techLabel);
    tech.appendChild(document.createTextNode(project.technologies.join(", ")));

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(cat);
    card.appendChild(tech);

    if (project.link) {
      const link = document.createElement("a");
      link.href = project.link;
      link.textContent = "View Figma Prototype";
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
