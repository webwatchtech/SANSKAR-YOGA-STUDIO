const body = document.body;
const firstSection = document.querySelector("section:nth-child(1)");
const lastSection = document.querySelector("section:nth-child(3)");
const table = document.querySelector("table");
const thead = document.querySelector("table thead");
const mq = window.matchMedia("(min-width: 780px)");
const stickyClass = "sticky-table";
const sticky2Class = "sticky2-table";

let tableWidth = table.offsetWidth;
let tableOffsetTop = table.getBoundingClientRect().top;
// or
//let tableOffsetTop = table.offsetTop;
let theadHeight = thead.offsetHeight;

window.addEventListener("scroll", scrollHandler);
window.addEventListener("resize", resizeHandler);

function scrollHandler() {
  if (mq.matches) {
    const scrollY = window.pageYOffset;
    const lastSectionOffsetTop = lastSection.getBoundingClientRect().top;
    if (scrollY >= tableOffsetTop) {
      thead.style.width = `${tableWidth}px`;
      if (lastSectionOffsetTop > theadHeight) {
        body.classList.remove(sticky2Class);
        body.classList.add(stickyClass);
        thead.style.top = 0;
        body.style.paddingTop = `${theadHeight}px`;
      } else {
        body.classList.remove(stickyClass);
        body.classList.add(sticky2Class);
        thead.style.top = `calc(100% - ${theadHeight}px)`;
      }
    } else {
      body.classList.remove(stickyClass, sticky2Class);
      body.style.paddingTop = 0;
      thead.style.width = "100%";
      thead.style.top = "auto";
    }
  }
}

function resizeHandler() {
  if (mq.matches) {
    tableWidth = table.offsetWidth;
    tableOffsetTop = firstSection.offsetHeight;
    theadHeight = thead.offsetHeight;
  } else {
    body.classList.remove(stickyClass, sticky2Class);
    body.style.paddingTop = 0;
    thead.style.width = "100%";
    thead.style.top = "auto";
  }
}