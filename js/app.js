document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); // Select all sections
  const navbar = document.querySelector(".navbar"); // Select the navigation bar container

  // Create a <ul> element to hold the navigation menu items
  const ul = document.createElement("ul");
  ul.classList.add("navbar__list"); // Add a class for styling the <ul>

  // Dynamically generate the navigation menu
  sections.forEach((section) => {
      const sectionId = section.id; // Get the ID of the section
      const sectionName = section.getAttribute("data-nav"); // Get the section name from data attribute

      // Create a <li> element for each section
      const li = document.createElement("li");
      li.classList.add("navbar__item"); // Add a class for styling the <li>

      // Create an <a> element inside the <li>
      const link = document.createElement("a");
      link.textContent = sectionName; // Set the link text
      link.href = `#${sectionId}`; // Link to the corresponding section by ID
      link.classList.add("navbar__link"); // Add a class for styling the <a>

      // Add smooth scrolling effect on click
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent the default jump-to behavior
          section.scrollIntoView({ behavior: "smooth", block: "start" }); // Smooth scroll to the section
      });

      // Append the link to the <li> element
      li.appendChild(link);

      // Append the <li> element to the <ul>
      ul.appendChild(li);
  });

  // Append the <ul> to the navigation bar
  navbar.appendChild(ul);

  // Add scroll event listener for highlighting active section
  document.addEventListener("scroll", function () {
      let activeSection = null;

      // Check which section is visible in the viewport
      sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
              activeSection = section; // Set the active section
          }
      });

      if (activeSection) {
          // Update section classes
          sections.forEach((section) => {
              section.classList.remove("your-active-class");
          });
          activeSection.classList.add("your-active-class");

          // Update navbar link classes
          const allLinks = document.querySelectorAll(".navbar__link");
          allLinks.forEach((link) => {
              link.classList.remove("active"); // Remove "active" class from all links
          });

          const activeLink = document.querySelector(
              `.navbar__link[href="#${activeSection.id}"]`
          );
          if (activeLink) {
              activeLink.classList.add("active"); // Add "active" class to the corresponding link
          }
      }
  });
});
