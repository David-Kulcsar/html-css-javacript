function GetParams() {
    const url = new URL(window.location.href);
    const name = url.searchParams.get("name");
    const desc = url.searchParams.get("desc");
    const email = url.searchParams.get("email");

    if(!name || !desc || !email) {
        alert("wrong parameteres");
        location.href = "employees.html";
        return;
    }

    document.querySelector("#name").textContent = name;
    document.querySelector("#description").textContent = desc;
    document.querySelector("#email").textContent = email;
}