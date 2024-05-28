import gsap from "gsap";

class Application {
  constructor() {
    // Initialize mouse and position coordinates
    this.mouse = { x: 0, y: 0 };
    this.position = { x: 0, y: 0 };

    // Select all project elements and image elements
    this.$projects = [...document.querySelectorAll("[data-select='project']")];
    this.$images = [...document.querySelectorAll("[data-select='image']")];

    // Set the initial scale of images to 0 (hidden)
    gsap.set(this.$images, { scale: 0 });

    // Add event listeners for each project element
    this.$projects.forEach(($project) => {
      const id = $project.dataset.id;
      // Handle mouse enter event
      $project.addEventListener("mouseenter", () => this.handleProjectEnter(id));
      // Handle mouse leave event
      $project.addEventListener("mouseleave", () => this.handleProjectLeave(id));
    });

    // Add event listener for mouse move on the window
    window.addEventListener("mousemove", this.handleMouseMove);

    // Add the tick function to the GSAP ticker (animation loop)
    gsap.ticker.add(this.handleTick);
  }

  // Handle project mouse enter event
  handleProjectEnter = (id) => {
    // Find the corresponding image by data-id
    this.image = this.$images.find((image) => image.dataset.id === id);
    // Animate the image to scale 1 (visible)
    gsap.to(this.image, { scale: 1.1, ease: "power2.out", duration: 1 });
  };

  // Handle project mouse leave event
  handleProjectLeave = () => {
    // Animate all images to scale 0 (hidden)
    gsap.to(this.$images, { scale: 0.0, ease: "power2.out", duration: 1 });
  };

  // Handle the animation frame updates
  handleTick = () => {
    // Interpolate the position towards the mouse position for smooth movement
    this.position.x = gsap.utils.interpolate(this.position.x, this.mouse.x, 0.075);
    this.position.y = gsap.utils.interpolate(this.position.y, this.mouse.y, 0.075);

    // If an image is being animated, update its position
    if (this.image) {
      gsap.set(this.image, { x: this.position.x, y: this.position.y });
    }
  };

  // Handle mouse move event
  handleMouseMove = (event) => {
    // Update mouse coordinates with the current mouse position
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };
}

// Instantiate the Application class to run the code
new Application();

// ----------------------------LANDING PAGE ANIMATIONS --------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const headlineNames = document.querySelectorAll("#landing-page .header");
  const description = document.querySelector(".description");
  const sayHi = document.querySelector(".say-hi");
  const scrollLanding = document.querySelector(".scroll-landing");
  const arrow = document.querySelector(".scroll-landing img");
  const sayHiCircle = document.querySelector(".say-hi img");
  const underline = document.querySelector(".underline");
  const navLinks = document.querySelectorAll("nav a");

  // Add event listeners to each nav link
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(underline, { width: link.offsetWidth, left: link.offsetLeft, duration: 0.5, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(underline, { width: 0, duration: 0.5, ease: "power2.out" });
    });
  });


  const tl = gsap.timeline();

  tl.from(headlineNames, {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1
  });

  tl.from([nav, description, sayHi, scrollLanding], {
    y: 30,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1
  }, "-=0.8"); // Overlap with previous animation by 0.8 seconds

  const arrowTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
  arrowTl.to(arrow, {
    y: -15,
    duration: 1.5,
  });

  const circleTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
  circleTl.to(sayHiCircle, {
    rotation: 20, 
    duration: 2, 
  });
});


// SCROLL TO SECTIONS
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
document.addEventListener("DOMContentLoaded", () => {
  // Function to smooth scroll to a target
  const smoothScrollTo = (target) => {
    gsap.to(window, {
      scrollTo: {
        y: target,
        autoKill: false // Optional: disable auto-killing of the scroll
      },
      duration: 1.5, // Duration of the scroll animation
      ease: "power2.out"
    });
  };

  // Add click event listeners to navigation links
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        smoothScrollTo(targetElement);
      }
    });
  });
});