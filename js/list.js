getToilets()

// Asynchronous function that enables waiting
async function getToilets() {
    // loading the data, followind instructions will wait until loading is finished
    let response = await fetch("https://kloapp.herokuapp.com/all")

    if (response.ok) {
        // converting from json to array, will wait until conversion is finished
        let list = await response.json()
        console.log(list)
        // get reference to <div id="list">
        const listDIV = document.getElementById("list")

        newList(list, listDIV)
    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}

function newList(data, listDIV){
    for (let index = 0; index < data.length; index++) {
        const toilet = data[index]                

        listDIV.innerHTML += entry(toilet)
        
        console.log(data[index])
    }
}

function entry({name, city, zip, street, streetnr:nr, stalls, ['feat-access']:access, rating, ...features}){
    let featString = ""

    for(feat in features) {
        feat = feat.split("-")[1]
        featString += `<div class="card"><h2>${feat[0].toUpperCase()}${feat.substr(1)}</h2></div>`
    }
    
    return `<div class="card"><h2>Location: ${name}</h2></div> 
    <div class="card"><h2>City: ${city} ${zip}</h2></div>
    <div class="card"><h2>Address: ${street} ${nr}</h2></div>
    <div class="card"><h2>Stalls: ${stalls}</h2></div>
    <div class="card"><h2>Access: ${access}</h2></div>
    ${featString}`
}