getToilets()

// Asynchronous function that enables waiting
async function getToilets() {
    // loading the data, followind instructions will wait until loading is finished
    let response = await fetch("https://kloapp.herokuapp.com/all")

    if (response.ok) {
        // converting from json to array, will wait until conversion is finished
        let list = await response.json()
        console.log(list)
        const listDIV = document.getElementById("list")

        for (i = 0; i < list.length; i++) {
            list[i] = {
            ...list[i],
            starRating() {
                    let stars = "";
                    for (i = 0; i < this.rating; i++) {
                        stars += "⭐ ";
                    }
                    return stars;
                },
            };
        } 

        let newData = "";
        list.forEach(e => {

            newData += "<div class='col' ontouchstart='this.classList.toggle('hover');'>"
            newData += "<div class='container'>"
            newData += "<div class='front' style='background-image: url(https://unsplash.it/500/500/)'>"
            newData += "<div class='inner'>"
            newData += "<p>" + e.city + "</p>"
            newData += "<div class='card'>" + e.zip + "</div>"
            newData += "<div class='card'>" + e.street + "," + e.streetnr + "</div>"
            newData += "<div class='card'>" + e.name + "</div>"
            newData += "<span>" + "Click For More InFo" + "</span>"
            newData += "</div>"
            newData += "</div>"
            newData += "<div class='back'>"
            newData += "<div class='inner'>"
            newData += "<h3 class='card_h3'>" + e.name + "</h3>"
            newData += "<div class='card'>" + e['feat-access'] + "</div>";
            newData += e['feat-mirror'] ? "<div class='card'>" + "Mirror " + "</div>" : '';
            newData += e['feat-baby'] ? "<div class='card'>" + "Baby " + "</div>" : '';
            newData += e['feat-soap'] ? "<div class='card'>" + "Soap " + "</div>" : '';
            newData += e['feat-perfume'] ? "<div class='card'>" + "perfume " + "</div>" : '';
            newData += e['feat-papertowels'] ? "<div class='card'>" + "Papertowels " + "</div>" : '';
            newData += "<div class='card'>" + e.starRating() + "</div>";
            newData += "</div>"
            newData += "</div>"
            newData += "</div>"
            newData += "</div>"
        })
            listDIV.innerHTML += newData
            console.log(newData)

    }
}