let clickCount = 0;

window.addEventListener("message", function (event) {
  console.log("Encontré este mensaje", event.data);
  const message = event.data;
  const request = {
    eventName: "on-core-portal-is-ready",
  };
  if (message.eventName === "on-core-portal-ready") {
    window.opener.postMessage(request, "*");
  }
});
function hacerConsoleLog() {
  const request = {
    eventName: "on-core-portal-refresh-opportunity",
  };

  window.opener.postMessage(JSON.stringify(request), "*");
}
window.addEventListener("beforeunload", function () {
  const request = {
    eventName: "on-core-portal-is-closed",
  };
  window.opener.postMessage(JSON.stringify(request), "*");
});
