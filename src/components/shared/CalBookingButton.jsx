"use client";

const CAL_LINK = "osd-apparels-j1l1kr/30min";
const CAL_URL = "https://cal.com/osd-apparels-j1l1kr/30min";
const CAL_NAMESPACE = "30min";
const CAL_ORIGIN = "https://app.cal.com";
const CAL_SCRIPT = "https://app.cal.com/embed/embed.js";

let configured = false;

function initialiseCal() {
  const browserWindow = window;
  if (!browserWindow.Cal) {
    browserWindow.Cal = function calLoader(...args) {
      const cal = browserWindow.Cal;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        const script = document.createElement("script");
        script.src = CAL_SCRIPT;
        script.async = true;
        script.dataset.calEmbed = "osd-apparels";
        document.head.appendChild(script);
        cal.loaded = true;
      }
      if (args[0] === "init") {
        const namespace = args[1];
        const namespaceApi = (...namespaceArgs) => namespaceApi.q.push(namespaceArgs);
        namespaceApi.q = namespaceApi.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || namespaceApi;
          cal.ns[namespace].q.push(args);
          cal.q.push(["initNamespace", namespace]);
        } else {
          cal.q.push(args);
        }
        return;
      }
      cal.q.push(args);
    };
  }

  if (!configured) {
    browserWindow.Cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    browserWindow.Cal.ns[CAL_NAMESPACE]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    configured = true;
  }
}

export function CalBookingButton({ children, className = "button button--outline", onOpen }) {
  function handleClick(event) {
    const wasLoaded = Boolean(window.Cal?.loaded);
    initialiseCal();
    onOpen?.(event);

    // The first interaction retains the normal-link fallback while the embed
    // loads. Once Cal is available, its delegated handler opens the popup.
    if (!wasLoaded) return;
  }

  return <a className={className} href={CAL_URL} data-cal-link={CAL_LINK} data-cal-namespace={CAL_NAMESPACE} data-cal-config={JSON.stringify({ layout: "month_view", useSlotsViewOnSmallScreen: "true" })} onClick={handleClick}>{children}</a>;
}
