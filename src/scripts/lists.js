const $ = require('jquery')
const { remote } = require('electron')

openDatabase()

getTables(populateLists)

function populateLists(tables) {
    tables.forEach(table => {
        list = document.createElement("div")
        list.classList.add("col-4")
        list.classList.add("col")
        list.classList.add("card")
        list.addEventListener('click', goToList);
        list.setAttribute('table-name', table.name);

        list.innerHTML = table.name
        document.body.appendChild(list)
    });
}

function goToList() {
    table_name = this.getAttribute('table-name');

    localStorage.setItem("table-name", JSON.stringify(table_name));

    changeFile("viewing.html")
}

function changeFile(file_name) {
    url = window.location.pathname
    index = url.lastIndexOf("/")
    url = url.substring(0, index + 1)
    url += file_name
    window.location.pathname = url
}