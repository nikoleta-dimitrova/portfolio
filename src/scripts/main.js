import gsap from "gsap";
import '../styles/main.css';
import Lenis from 'lenis';

import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ------------------Initialize Lenis for smooth scrolling------------------------
const lenis = new Lenis({
  duration: 1.5,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  smooth: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ------------------------Hover cards effect----------------------------------------
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

// ------------------------------Parallax Sections-------------------------------------
class Parallax {
  constructor(config = {}) {
    this.id = config.id;
    this.$element = config.element;
    this.$image = this.$element.querySelector("[data-select='parallax-image']");
    gsap.fromTo(this.$image, { yPercent: -50 }, { yPercent: 50, duration: 1.0, ease: "none", scrollTrigger: { trigger: this.$element, scrub: true } });
  }
}


// ----------------------------------Animating Elements--------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  const description = document.querySelector(".description");
  const sayHi = document.querySelector(".say-hi");
  const scrollLanding = document.querySelector(".scroll-landing");
  const arrow = document.querySelector(".scroll-landing img");
  const projectArrow = document.querySelector(".explore img");
  const sayHiCircle = document.querySelector(".say-hi img");
  const underline = document.querySelector(".underline");
  const navLinks = document.querySelectorAll("nav a");
  const arrowTop = document.querySelector('.arrow-top');
  const backToTopButton = document.getElementById('back-to-top');
  const aboutMe = document.querySelector(".about-text");
  const contactQuestion = document.querySelector(".contact-question");
  const getTouch = document.querySelector(".get-in-touch");
  const footerAnimation = document.querySelector(".footer");
  const myPhoto = document.querySelector(".photo");
  const numberProjects = document.getElementById("circle-number-projects");
  const circlePlayground = document.getElementById("circle-playground");

  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      gsap.to(underline, { width: link.offsetWidth, left: link.offsetLeft, duration: 0.5, ease: "power2.out" });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(underline, { width: 0, duration: 0.5, ease: "power2.out" });
    });
  });

  gsap.set(document.querySelector(".main-body"), { alpha: 1 });

  gsap.from([nav], {
    transform: 'translateY(-50px)',
    opacity: 0,
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,
  }, "-=0.8");

  // -----------------------LANDING SCREEN---------------------------
  gsap.utils.toArray([sayHi, description, scrollLanding]).forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
          onEnter: () => {
            gsap.to(element, { opacity: 1, y: 0, duration: 1 });
          }
        }
      }
    );
  })

  gsap.utils.toArray('.header-title').forEach(element => {
    gsap.fromTo(element,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play reverse play reverse",

        }
      }
    );
  })

  const arrowTl = gsap.timeline({ repeat: -1, yoyo: true, ease: "sine.inOut" });
  arrowTl.to(arrow, {
    y: -15,
    duration: 1.5,
  });

  arrowTl.to(projectArrow, {
    y: -15,
    duration: 1.5,
  })

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

  if (!window.location.pathname.includes("project") && !window.location.pathname.includes("playground")) {
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
  }

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


  // --------------------ANIMATED HEADLINES-------------------
  gsap.utils.toArray('.header').forEach(headline => {
    gsap.fromTo(headline,
      { opacity: 0, transform: 'translateY(60px)' },
      {
        opacity: 1,
        transform: 'translateY(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: headline,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

  // --------------------PROJECT SECTION---------------------
  gsap.utils.toArray('.project-tag').forEach(tag => {
    gsap.fromTo(tag,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: tag,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

  gsap.utils.toArray('.number-of-project').forEach(number => {
    gsap.fromTo(number,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: number,
          start: "top 95%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

  gsap.fromTo(numberProjects,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: numberProjects,
        start: "top 95%",
        toggleActions: "play reverse play reverse",

      }
    }
  );

  gsap.fromTo(circlePlayground,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: circlePlayground,
        start: "top 95%",
        toggleActions: "play reverse play reverse",

      }
    }
  );

  // --------------------ABOUT ME SECTION-------------------
  gsap.fromTo(aboutMe,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: aboutMe,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      }
    }
  );

  gsap.utils.toArray('.skills').forEach(skills => {
    gsap.fromTo(skills,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: skills,
          start: "top 100%",
          toggleActions: "play reverse play reverse",
        }
      }
    );
  });

  gsap.fromTo(myPhoto,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: myPhoto,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      }
    }
  );

  // --------------------CONTACT SECTION-------------------
  gsap.fromTo(contactQuestion,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactQuestion,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      }
    }
  );

  gsap.fromTo(getTouch,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: getTouch,
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      }
    }
  );

  gsap.fromTo(footerAnimation,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: footerAnimation,
        start: "top 100%",
        toggleActions: "play reverse play reverse",
      }
    }
  );

  new Application();
  new Factory({
    element: document.body,
    types: {
      parallax: Parallax,
    },
  });
});
