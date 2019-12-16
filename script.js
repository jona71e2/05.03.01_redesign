// produktview


// drop down menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}
window.onclick = function (event) {

    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn2')) {
        var dropdowns = document.getElementsByClassName("dropdown-content2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}









// produktview slut

//burger menu
//hvad starter js med?
window.addEventListener("load", startVises);

// Hvad skal i skrive for at skjule den div?

function startVises() {
    console.log("startVises");
    document.querySelector("#menu").addEventListener("click", clickMenuKnap);

}

function clickMenuKnap() {
    console.log("clickMenuKnap");
    document.querySelector("#menu").classList.remove("hidden");

    document.querySelector("#menuknap").classList.add("hide");
    document.querySelector("#lukkeknap").classList.remove("hide");
    document.querySelector("#lukkeknap").addEventListener("click", clickMenuVoek);


}

function clickMenuVoek() {
    console.log("clickMenuVoek");
    document.querySelector("#lukkeknap").classList.add("hide");
    document.querySelector("#menuknap").classList.remove("hide");
    document.querySelector("#menu").classList.add("hidden");
}
