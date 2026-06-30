fetch("../header.html")
    .then(response => 
        response.text())
    .then(data => {
        document.getElementById("header2").innerHTML = data
    })