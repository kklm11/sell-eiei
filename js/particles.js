particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#a855f7"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 1
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8b5cf6",
      opacity: 0.2,
      width: 1
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.6
        }
      }
    }
  },
  retina_detect: true
});
