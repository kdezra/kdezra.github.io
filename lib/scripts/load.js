async function loadIncludes() {
  if ("file:" != location.protocol) {
    let e = document.querySelectorAll("include");
    for (let t = 0; t < e.length; t++) {
      let o = e[t],
        l = o.getAttribute("src");
      try {
        const e = await fetch(l);
        if (!e.ok) {
          console.log("Could not include file: " + l), o?.remove();
          continue;
        }
        let t = await e.text(),
          n = document.createRange().createContextualFragment(t),
          i = Array.from(n.children);
        for (let e of i)
          e.classList.add("hide"),
            (e.style.transition = "opacity 0.5s ease-in-out"),
            setTimeout(() => {
              e.classList.remove("hide");
            }, 10);
        o.before(n), o.remove(), console.log("Included file: " + l);
      } catch (e) {
        o?.remove(), console.log("Could not include file: " + l, e);
        continue;
      }
    }
  } else {
    if (document.querySelectorAll("include").length > 0) {
      var e = document.createElement("div");
      (e.id = "error"),
        (e.textContent =
          "Web server exports must be hosted on an http / web server to be viewed correctly."),
        (e.style.position = "fixed"),
        (e.style.top = "50%"),
        (e.style.left = "50%"),
        (e.style.transform = "translate(-50%, -50%)"),
        (e.style.fontSize = "1.5em"),
        (e.style.fontWeight = "bold"),
        (e.style.textAlign = "center"),
        document.body.appendChild(e),
        document.querySelector(".document-container")?.classList.remove("hide");
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  loadIncludes();
});
let isFileProtocol = "file:" == location.protocol;
function waitLoadScripts(e, t) {
  let o = e.map((e) => document.getElementById(e + "-script")),
    l = 0;
  !(function e() {
    let n = o[l];
    l++,
      (n && "true" != n.getAttribute("loaded")) || (l < o.length && e()),
      l < o.length ? n.addEventListener("load", e) : t();
  })();
}
