getToilets();

// Asynchronous function that enables waiting
async function getToilets() {
  // loading the data, followind instructions will wait until loading is finished
  let response = await fetch("https://kloapp.herokuapp.com/all");

  if (response.ok) {
    // converting from json to array, will wait until conversion is finished
    let list = await response.json();
    console.log(list);

    // get reference to <div id="list">
    const listDIV = document.getElementById("list");

    // add your code here
    newToilet(list);
    function newToilet(Data) {
      for (i = 0; i < Data.length; i++) {
        const newData = `<div class="card"><h2>City: ${Data[i].city}</h2></div>
                         <div class="card"><h2>Zip: ${Data[i].zip}</h2></div>
                         <div class="card"><h2>City: ${Data[i][feat-access]}</h2></div>
                        <div class="card"><h2>City: ${Data[i][feat-mirror]}</h2></div>
                        <div class="card"><h2>City: ${Data[i][feat-perfume]}</h2></div>
                         <div class="card"><h2>name: ${Data[i].name}</h2></div>
                         <div class="card"><h2>rating: ${Data[i].rating}</h2></div>
                         <div class="card"><h2>stalls: ${Data[i].stalls}</h2></div>
                         <div class="card"><h2>street: ${Data[i].street}</h2></div>
                         <div class="card"><h2>streetnr: ${Data[i].streetnr}</h2></div>`
        ;
        listDIV.innerHTML += newData;
        console.log(newData);
      }
    }

    // insert your html into referenced div
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
