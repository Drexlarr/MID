let clickCount = 0;

window.addEventListener("load", function () {
    const request = {
        eventName: "on-core-portal-is-ready",
    };
  window.opener.postMessage(JSON.stringify(request), "*");

  window.addEventListener("message", function (event) {
    console.log("Nuevo mensaje");
  });
});

window.addEventListener("beforeunload", function () {
    const request = {
        eventName: "on-core-portal-is-closed",
    };
  window.opener.postMessage(JSON.stringify(request), "*");
});
