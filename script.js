// script.js
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".rocking-image");

  // Set up the Intersection Observer configuration
  const options = {
    threshold: 0.5, // Trigger the callback when 50% of the image is in view
  };

  // Callback function when the image is in view
  function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start rocking animation
        image.style.animation = "rock 2s infinite alternate";
      } else {
        // Stop animation when not in view
        image.style.animation = "none";
      }
    });
  }

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(handleIntersection, options);

  // Observe the target image
  observer.observe(image);
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all the skill icons
  const skillIcons = document.querySelectorAll(".container #skills i");

  // Function to handle icon enlargement on mouseover
  function enlargeIcon() {
    this.style.transform = "scale(1.5)"; // Increase the scale factor for enlargement
  }

  // Function to handle returning the icon to normal size on mouseout
  function resetIconSize() {
    this.style.transform = "scale(1)"; // Reset the scale factor to normal size
  }

  // Add event listeners to each skill icon
  skillIcons.forEach(function (icon) {
    icon.addEventListener("mouseover", enlargeIcon);
    icon.addEventListener("mouseout", resetIconSize);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // ... (your existing code)

  // Get the back-to-top button element
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Function to show/hide the back-to-top button based on scroll position
  function toggleBackToTopBtn() {
    if (window.scrollY >= 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  // Function to smoothly scroll to the top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Add a scroll event listener to call the toggleBackToTopBtn function
  window.addEventListener("scroll", toggleBackToTopBtn);

  // Add a click event listener to the back-to-top button
  backToTopBtn.addEventListener("click", scrollToTop);
});
