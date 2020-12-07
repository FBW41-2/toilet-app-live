getToilets()

// Asynchronous function that enables waiting
async function getToilets() {
    // loading the data, followind instructions will wait until loading is finished
    let response = await fetch("https://kloapp.herokuapp.com/all")

    if (response.ok) {
        // converting from json to array, will wait until conversion is finished
        let list = await response.json()
        // add your code here
        const listDIV = document.getElementById("list")
        listDIV.innerHTML = JSON.stringify(list)

    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}