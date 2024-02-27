let clickCount = 0;

window.addEventListener("load", function () {
  window.opener.postMessage("Ready", "*");

  window.addEventListener("message", function (event) {
    console.log("Nuevo mensaje");
  });
});

window.addEventListener("beforeunload", function () {
  window.opener.postMessage("ConnectionLost", "*");
});
