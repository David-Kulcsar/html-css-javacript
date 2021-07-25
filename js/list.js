const employeeList = [];

function extractText() {
    const input = document.getElementById("text");
    if(!input.value) {
        alert("Please type here something");
        return;
    }
    updateList(input.value);
    input.value = '';
}

function updateList(text) {
    employeeList.push(text);
    const textContainer = document.querySelector(".list");
    textContainer.textContent = employeeList;
    
}