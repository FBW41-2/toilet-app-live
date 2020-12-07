getToilets()

// Asynchronous function that enables waiting
async function getToilets() {
    // loading the data, followind instructions will wait until loading is finished
    let response = await fetch("https://kloapp.herokuapp.com/all")

    if (response.ok) {
        // converting from json to array, will wait until conversion is finished
        let list = await response.json()

        // get reference to <div id="list">
        const listDIV = document.getElementById("list")
        
        // add your code here
        const html = `<div class="card"><h2>test</h2></div>`

        // insert your html into referenced div
        listDIV.innerHTML = html

    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}