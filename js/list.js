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
                <div class="row p-3">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">${list[i].city}</h2>
                                    <p class="card-text">${list[i].name}, ${list[i].street} ${list[i].zip}.</p>
                                    <div id="myButton" class="container">
                                    <li>${list[i]["feat-access"]}</li>
                                    <li>${list[i]["feat-mirror"]}</li>
                                    <li>${list[i]["feat-perfume"]}</li>
                                    <li>${list[i].rating}</li>
                                    <li>${list[i].stalls}</li>
                                    </div>
                                    <a href="#" class="btn btn-primary" onclick="myFunction()">Click to see features</a>
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

// setting hidden button
function myFunction() {
    var x = document.getElementById("myButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

