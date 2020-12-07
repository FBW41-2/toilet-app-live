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
        const html = `<div class="card"><h2>${list}</h2></div>`

        newList(list)
        function newList(data){
            for (let index = 0; index < data.length; index++) {
            var access = data[index]['feat-access'];
            var mirror = data[index]['feat-mirror'];
            var perfume = data[index]['feat-perfume'];
            var papertowels = data[index]['feat-papertowels'];
            var soap = data[index]['feat-soap'];
            var baby = data[index]['feat-baby'];
            var rating = data[index].rating;

            var newData = 
            `<div class="card"><h2>Location: ${data[index].name}</h2></div> 
            <div class="card"><h2>City: ${data[index].city} ${data[index].zip}</h2></div>
            <div class="card"><h2>Address: ${data[index].street} ${data[index].streetnr}</h2></div>
            <div class="card"><h2>Stalls: ${data[index].stalls}</h2></div>
            <div class="card"><h2>Access: ${access}</h2></div>
            ${mirror ? '<div class="card"><h2>Mirror</h2></div>' : ""}
            ${perfume ? '<div class="card"><h2>Perfume</h2></div>' : ""}
            ${papertowels ? '<div class="card"><h2>Papertowels</h2></div>' : ""}
            ${soap ? '<div class="card"><h2>Soap</h2></div>' : ""}
            ${baby ? '<div class="card"><h2>Baby space</h2></div>' : ""}
            ${rating ? '<div class="card"><h2>Rating</h2></div>' : ""}`
              

            listDIV.innerHTML += newData
            
            console.log(data[index])
            }
          
            if (papertowels.checked) {
                papertowels = "on";              
            }else {
                papertowels = "off";
            }

        }  
     
        // insert your html into referenced div
    

    } else {
        alert("List loading Error: " + response.status + " " + response.statusText + " " + response.url)
    }
}