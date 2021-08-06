function runscript() {
    localStorage.checkedSettings = 1;
    let s = document.createElement("h4");
s.innerHTML = `Debug Mode <input onclick="localStorage.debugMode = document.getElementById('maths-online-util-debug-mode').checked" type="checkbox" class="theme-box" id="maths-online-util-debug-mode">`;
document.getElementsByClassName("col-md-8")[1].prepend(s);
    let r = document.createElement("h4");
r.innerHTML = `Show Video <input onclick="localStorage.showVideo = document.getElementById('maths-online-util').checked" type="checkbox" class="theme-box" id="maths-online-util">`;
document.getElementsByClassName("col-md-8")[1].prepend(r);
if (localStorage.showVideo != "false"){
document.getElementById("maths-online-util").checked = true
}
if (localStorage.debugMode != "true" || undefined) {
} else {
document.getElementsByName("background-colour")[0].type = "text";
document.getElementsByName("accent-colour")[0].type = "text";
document.getElementById("maths-online-util-debug-mode").checked = true
}
}
document.addEventListener('DOMContentLoaded', runscript);
