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
        let html = "";
        let citySet = new Set;
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
            citySet.add(list[i].city);
        }
        for (const iterator of citySet) {
            console.log(iterator)
            for (let i = 0; i < list.length; i++) {
            
            
            
            
            }
            // html += `<div class="card">
            //     <h2>${list[i]["city"]}</h2>
            //     <h2>${list[i]["city"]}</h2>
            //     <p>${list[i]["zip"]}, ${list[i]["street"]}, ${list[i]["streetnr"]}</p>
            //     <p></p>
            //     </div>`;
        }
        
        
        // const html = `<div class="card"><h2>${JSON.stringify(list)}</h2></div>`

        // insert your html into referenced div
        listDIV.innerHTML = html

    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}