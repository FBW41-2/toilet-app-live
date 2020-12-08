getToilets();

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
    let html = "";

    for (i = 0; i < list.length; i++) {
      console.log(list[i]);
      const data = list[i];
      const {
        name,
        city,
        zip,
        street,
        streetnr: nr,
        stalls,
        rating,
        [`feat-access`]: access,
        ...features
      } = data;
      let featString = "";
      for (feat in features) {
        feat = feat.split("-")[1];
        featString += `<span>
            ${feat[0].toUpperCase()}${feat.substr(1)}
          </span> `;
      }

      html += `<div class="card mt-3 p-2 border border-dark rounded" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title text-center">WC in ${list[i].city}</h5>
            <ul class= "list-unstyled">
            <li>Place: ${list[i].name}</li>
            <li>Address: ${list[i].street}  ${list[i].streetnr}, ${list[i].zip} ${list[i].city}</li>
            <li> Available number of Stalls: ${list[i].stalls} </li>
            <li> Accessibility: ${access}
            <li>Rating: ${list[i].rating}</li>
            <li>Features: ${featString}
    </li>
            
            
            </ul>
          </div>
        </div>`;
    }

    // insert your html into referenced div
    listDIV.innerHTML = html;
  } else {
    alert(
      "List loading Error: " +
        response.status +
        " " +
        response.statusText +
        " " +
        response.url
    );
  }
}
