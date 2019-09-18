key = window.addEventListener("keypress", checkKeyPress, false);
function checkKeyPress (key) {
    if (key.getKey() === "13") {
        alert("enter pressed")
        location.href = 'index.html'
    }
}
// console.log(inname)
// console.log(caseno)
// localStorage.setItem("key", (inname+ ',' + caseno))