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
        // add your code here
        const html = `<div class="card"><h2>test</h2></div>`
        newList(list)
        function newList(data){
            for (let i = 0; i < data.length; i++) {
                const toilet = data[i]
                const {
                    name,
                    city,
                    zip,
                    street,
                    streetnr:nr,
                    stalls,
                    ['feat-access']:access,
                    rating,
                    ...features
                } = toilet

                let featString = ""
                
            for(feat in features) {
                feat = feat.split("-")[1]
                featString += `<div class="card">${feat[0].toUpperCase()}${feat.substr(1)}</div>`
            }   
            
            var newData = `<div class="col" ontouchstart="this.classList.toggle('hover');">
            <div class="container">
                <div class="front" style="background-image: url(https://unsplash.it/500/500/)">
                    <div class="inner">
                        <p>${city}</p>
          <span>Hover For InFo</span>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <div class="card">Zip:  ${zip}</div>
                    <div class="card">Address : ${street} </div>
                    <div class="card">Street Nur: ${nr}</div>
                    <div class="card">Location : ${name}</div> 
                    <div class="card">Access : ${access}</div>
                    <div class="card">Stalls : ${stalls}</div>
                    ${featString}
                    <div class="card">Rating : ${rating}</div>
                    </div>
                </div>
            </div>
        </div>
		`
            listDIV.innerHTML += newData
        
            }
        }  
        // insert your html into referenced div
    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}