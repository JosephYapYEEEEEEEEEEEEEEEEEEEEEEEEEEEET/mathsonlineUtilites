function runscript() {
  if(!!localStorage.checkedShowVideo) {
    localStorage.checkedSettings = localStorage.checkedShowVideo;
    localStorage.removeItem("checkedShowVideo");
  }
  if(localStorage.checkedSettings != 1) {
    d = document.createElement("div");
    d.innerHTML = `1`;
    d.style = "position:absolute; top: 1px; right: 1px;";
    d.className = "badge round-3";
    d.id = "maths-settings-check"
    document.getElementsByTagName("li")[5].append(d);
  }
}
document.addEventListener('DOMContentLoaded', runscript);
