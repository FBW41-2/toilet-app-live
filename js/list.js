getToilets()

// Asynchronous function that enables waiting
async function getToilets() {
    // loading the data, followind instructions will wait until loading is finished
    let response = await fetch("https://kloapp.herokuapp.com/all");

    if (response.ok) {
        // converting from json to array, will wait until conversion is finished
        let list = await response.json();

        // get reference to <div id="list">
        const listDIV = document.getElementById("list");

        // add your code here
        console.log(list);
        let html = "";
        for (let i = 0; i < list.length; i++) {
            html += `
            <div class="container-fluid">
            <div class="row row-tols-3 p-3">
            <div class="col-sm-6">
                <div class="card">
                    <div class="card-body">
                                <h5 class="card-title">${list[i].city}</h5>
                                    <p class="card-text">${list[i].street}, ${list[i].name}.</p>
                                        <a href="#" class="btn btn-primary">More info.</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        `
        }
        // insert your html into referenced div
        listDIV.innerHTML = html;

    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url);
    }
}