document.addEventListener("DOMContentLoaded", function () {
  const colorItems = document.querySelectorAll(".color-item");
  const colorDescription = document.querySelector(".color-description");

  colorItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Get the color name from the clicked item's ID
      const colorName = item.id;

      // Define a mapping of color names to their corresponding colors
      const colorMap = {
        "Rojo": "red",
        "Azul": "blue",
        "Anaranjado": "orange",
        "Verde": "green",
        "Amarillo": "yellow"
      };

      // Get the corresponding color from the mapping
      const color = colorMap[colorName];

      // Hide all color-title elements
      const colorTitles = document.querySelectorAll(".color-title");
      colorTitles.forEach(function (title) {
        title.style.display = "none";
      });

      // Display the corresponding color-title element
      const correspondingColorTitle = item.querySelector(".color-title");
      correspondingColorTitle.style.display = "block";

      // Apply the corresponding color to the text of the corresponding color title
      correspondingColorTitle.style.color = color;

      // Display the color name in the text container with the corresponding color
      colorDescription.innerHTML = `<p style="color: ${color};">${colorName}</p>`;

      // Show the text container
      colorDescription.classList.add("active");
    });
  });
});
