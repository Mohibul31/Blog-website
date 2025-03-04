// Add scroll animation to featured posts
document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".post-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  posts.forEach(post => {
    post.style.opacity = 0;
    post.style.transform = "translateY(50px)";
    post.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(post);
  });
});

// Add fade-in animation on scroll
const categoryCards = document.querySelectorAll(".category-card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.5 }
);

categoryCards.forEach(card => {
  observer.observe(card);
});

// Optional: Add form submission functionality
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
      alert(`Thank you for subscribing! We'll send updates to ${email}.`);
      this.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });
// Add smooth scroll to team section links (if needed)
document.querySelectorAll('.team-social a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scrolling for footer links
document.querySelectorAll('.footer-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});