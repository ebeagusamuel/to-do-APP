import "./assets/style.scss";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import dom from "./dom";

const contentDiv = document.getElementById("content");

contentDiv.appendChild(dom.nav());
contentDiv.appendChild(dom.projectAndTaskContainer());
contentDiv.appendChild(dom.footer());
