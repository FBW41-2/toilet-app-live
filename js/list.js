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
    const htmlEmelntsArray = data.map(entry)
    listDIV.innerHTML = htmlEmelntsArray.join("")
    /* internal workings of map
    const newArr = []
    for(i = 0; i < data.length; i++) {
        newArr.push(callback(data[i]))
    }
    return newArr
    */
}

function entry({name, city, zip, street, streetnr:nr, stalls, ['feat-access']:access, rating, ...features}){
    const featureNames = Object.keys(features)
    let featString = featureNames.map(feat => {
        feat = feat.split("-")[1]
        return `<h2>${feat[0].toUpperCase()}${feat.substr(1)}</h2>`
    }).join("")
    
    return `<div class="card"><h2>Location: ${name}</h2> 
    <h2>City: ${city} ${zip}</h2>
    <h2>Address: ${street} ${nr}</h2>
    <h2>Stalls: ${stalls}</h2>
    <h2>Access: ${access}</h2>
    ${featString}</div>`
}