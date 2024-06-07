import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import '../styles/main.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// WITH STAN's HELP FOR THE HOVER EFFECT
class Application {
  constructor() {
    this.mouse = { x: 0, y: 0 };
    this.position = { x: 0, y: 0 };

    this.$projects = [...document.querySelectorAll("[data-select='project']")];
    this.$images = [...document.querySelectorAll("[data-select='image']")];

    gsap.set(this.$images, { scale: 0 });

    this.$projects.forEach(($project) => {
      const id = $project.dataset.id;
      $project.addEventListener("mouseenter", () => this.handleProjectEnter(id));
      $project.addEventListener("mouseleave", () => this.handleProjectLeave(id));
    });

    window.addEventListener("mousemove", this.handleMouseMove);
    gsap.ticker.add(this.handleTick);
  }

  handleProjectEnter = (id) => {
    this.image = this.$images.find((image) => image.dataset.id === id);
    gsap.to(this.image, { scale: 1.1, ease: "power2.out", duration: 1 });
  };

  handleProjectLeave = () => {
    gsap.to(this.$images, { scale: 0.0, ease: "power2.out", duration: 1 });
  };

  handleTick = () => {
    this.position.x = gsap.utils.interpolate(this.position.x, this.mouse.x, 0.075);
    this.position.y = gsap.utils.interpolate(this.position.y, this.mouse.y, 0.075);

    if (this.image) {
      gsap.set(this.image, { x: this.position.x, y: this.position.y });
    }
  };

  handleMouseMove = (event) => {
    this.mouse.x = event.clientX;
    this.mouse.y = event.clientY;
  };
}

class Factory {
  constructor(config = {}) {
    this.$element = config.element;
    this.types = config.types;
    this.components = this.getComponents();
  }

  getComponents() {
    const $elements = gsap.utils.toArray(this.$element.querySelectorAll("[data-component]"));
    return $elements.reduce((components, $element) => {
      const id = $element.dataset.id;
      const type = $element.dataset.component;
      const component = new this.types[type]({ id: id, type, element: $element });
      components[id] = component;
      return components;
    }, {});
  }
}

class Parallax {
  constructor(config = {}) {
    this.id = config.id;
    this.$element = config.element;
    this.$image = this.$element.querySelector("[data-select='parallax-image']");
    gsap.fromTo(this.$image, { yPercent: -50 }, { yPercent: 50, duration: 1.0, ease: "none", scrollTrigger: { trigger: this.$element, scrub: true } });
  }
}

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
  const playgroundImg = document.querySelectorAll(".playground img");
  const arrowTop = document.querySelector('.arrow-top');
  const backToTopButton = document.getElementById('back-to-top');

  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(underline, { width: link.offsetWidth, left: link.offsetLeft, duration: 0.5, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(underline, { width: 0, duration: 0.5, ease: "power2.out" });
    });
  });

  const tl = gsap.timeline();
  tl.set(document.querySelector(".main-body"), { alpha: 1 });

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
  }, "-=0.8");

  const arrowTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
  arrowTl.to(arrow, {
    y: -15,
    duration: 1.5,
  });

  const circleTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "power2-out" });
  circleTl.to(sayHiCircle, {
    rotation: 15,
    duration: 2,
  });

  // -----------------------SCROLL TO SECTIONS---------------------------
  const smoothScrollTo = (target) => {
    gsap.to(window, {
      scrollTo: {
        y: target,
        autoKill: false
      },
      duration: 2,
      ease: "power2.out"
    });
  };

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

  // ------------------BACK TO TOP BUTTON ----------------------------
  backToTopButton.addEventListener('click', () => {
    gsap.to(window, {
      duration: 4,
      scrollTo: { y: 0, autoKill: true },
      ease: "power4.out"
    });
  });

  const arrowTopTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
  arrowTopTl.to(arrowTop, {
    y: -10,
    duration: 1.2,
  });

  new Application();
  new Factory({
    element: document.body,
    types: {
      parallax: Parallax,
    },
  });

});
