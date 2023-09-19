(function () {
  const doc = document;
  const rootEl = doc.documentElement;
  const body = doc.body;
  const lightSwitch = doc.getElementById("lights-toggle");
  /* global ScrollReveal */
  const sr = (window.sr = ScrollReveal());

  rootEl.classList.remove("no-js");
  rootEl.classList.add("js");

  window.addEventListener("load", function () {
    body.classList.add("is-loaded");
  });

  // Reveal animations
  function revealAnimations() {
    sr.reveal(".feature", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      origin: "right",
      viewFactor: 0.2,
    });
  }

  function updateCountdown() {
    const now = new Date();
    const targetDate = new Date(now.getFullYear(), now.getMonth(), 19);

    // Si el 3 de este mes ya pasó, avanzamos al próximo mes
    if (now.getDate() >= 19) {
      targetDate.setMonth(targetDate.getMonth() + 1);
    }

    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    //const todayMessageElement = document.getElementById("todayMessage");
    //const countdownElement = document.getElementById("countdown");

    if (now.getDate() === 19) {
      todayMessageElement.textContent = "";
    } else {
      todayMessageElement.textContent = ""; // Borra el mensaje si no es el día 3

      // Función para agregar un "0" adelante si el número es menor a 10
    }

    function addLeadingZero(num) {
      return num < 10 ? "0" + num : num;
    }

    countdownElement.innerHTML = `${addLeadingZero(days)}:${addLeadingZero(
      hours
    )}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
  }

  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);

  // Actualizar al cargar la página
  updateCountdown();

  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);

  // Actualizar al cargar la página
  updateCountdown();

  // Actualizar cada segundo
  setInterval(updateCountdown, 1000);

  // Actualizar al cargar la página
  updateCountdown();

  if (body.classList.contains("has-animations")) {
    window.addEventListener("load", revealAnimations);
  }

  // Light switcher
  if (lightSwitch) {
    window.addEventListener("load", checkLights);
    lightSwitch.addEventListener("change", checkLights);
  }

  function checkLights() {
    let labelText = lightSwitch.parentNode.querySelector(".label-text");
    if (lightSwitch.checked) {
      body.classList.remove("lights-off");
      if (labelText) {
        labelText.innerHTML = "dark";
      }
    } else {
      body.classList.add("lights-off");
      if (labelText) {
        labelText.innerHTML = "light";
      }
    }
  }
})();
