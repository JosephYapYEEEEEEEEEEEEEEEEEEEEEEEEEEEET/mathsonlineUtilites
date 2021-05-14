function runscript() {
    let r = document.createElement("h4");
r.innerHTML = `Show Video <input onclick="localStorage.showVideo = document.getElementById('maths-online-util').checked" type="checkbox" class="theme-box" id="maths-online-util">`;
document.getElementsByClassName("col-md-8")[1].prepend(r);
if (localStorage.showVideo != "false"){
document.getElementById("maths-online-util").checked = true
}
}
document.addEventListener('DOMContentLoaded', runscript);