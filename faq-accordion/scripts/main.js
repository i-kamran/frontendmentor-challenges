document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".accordion__toggle");

  toggles.forEach((button) => {
    const details = button.closest("details");

    button.addEventListener("click", (event) => {
      event.preventDefault(); // prevent default <summary> toggle
      const isOpen = details.open;

      // Close all items
      document.querySelectorAll("details.accordion__item").forEach((d) => {
        d.open = false;
        d.querySelector("button").setAttribute("aria-expanded", "false");
      });

      // Open current if it was closed
      if (!isOpen) {
        details.open = true;
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
});
