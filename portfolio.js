/*********************Portfolio expandable****************/
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const content = link.nextElementSibling;

      // Remove active class from all links
      menuLinks.forEach((l) => l.classList.remove("active"));

      // Toggle visibility of content
      if (content.classList.contains("active")) {
        content.style.maxHeight = null; // Collapse content
        content.classList.remove("active");
      } else {
        // Collapse any open content
        document.querySelectorAll(".menu-content.active").forEach((activeContent) => {
          activeContent.style.maxHeight = null;
          activeContent.classList.remove("active");
        });

        // Expand current content
        content.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px"; // Smoothly expand
        link.classList.add("active"); // Highlight active link
      }
    });
  });
});
