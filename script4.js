function runscript() {
    if(localStorage.showVideo == "false") {
document.getElementById("htmlTutorialPlayer").remove();
document.getElementsByClassName("tab-video")[0].remove();
document.getElementsByClassName("tab-lesson-svg")[0].click()
}
}
document.addEventListener('DOMContentLoaded', runscript);