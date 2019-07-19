function checkMail() {
    let str = document.getElementById('str').value;
    regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexp.test(str)) {
        document.getElementById("kq").innerText = "TRUE";
    } else {
        document.getElementById("kq").innerText = "FALSE";
    }
    console.log("@ajkhj");
}
