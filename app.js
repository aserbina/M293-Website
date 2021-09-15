var index = [
    { 
        "name": "restaurant",
        "imageUrl": "https://www.greenpapaya.ch/wp-content/uploads/2021/05/IMG_4169.jpg"
    },
    {
        "name": "Pizza",
        "imageUrl": "https://farm5.staticflickr.com/4042/4660357797_09dcd917b1.jpg"
    },
    {
        "name": "Salad",
        "imageUrl": "https://farm6.staticflickr.com/5087/5358599242_7251dc7de4.jpg"
    },
    {
        "name": "Softdrinks",
        "imageUrl": "https://farm1.staticflickr.com/71/203324363_b448827eb0.jpg"
    }
];

window.onload = function () {
    document.getElementById("imgRestaurant").src = index[0].imageUrl;
    let salad = null;
    for (var i = 1; i < index.length; ++i) {
        // <div style="background-image: url(Bilder/Pizza.jpg)">Pizza</div>
        let div = document.createElement("div");
        div.innerText = index[i].name;
        div.style = "background-image: url(" + index[i].imageUrl + ")";
        // <a href="Pizza.html" class="secondRow">
        let a = document.createElement("a");
        a.href = index[i].name + ".html";
        a.classList.add("secondRow");
        a.appendChild(div);
        document.getElementById("divSecond").appendChild(a);
        //
        if ("Salad" == index[i].name) {
            salad = div;
        }
    }

    loadSalads(salad);
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQaXp6YXJpYUFQSSJ9.D_l-fWG6weTuxSoHfjJrK5ehk7KHK0F_Q0ZdDlcPvV4";
const baseUrl = "https://pizza.dev.aigis.ch/api";

function loadSalads(saladDiv) {
    // auf window gibt es die "fetch" methode, damit können wir einen beliebigen URL im Internet fetchen
    window.fetch(
        // zuerst wird die URL benötigt welche wir abrufen möchten
        baseUrl + "/salads",
        // hier können wir optionen für unseren request definieren
        {
            // als option setzen wir einen request header
            headers: {
                // wir verwenden ein sogenanntes bearer token
                "Authorization": "Bearer " + token
        }
    })
    // wenn der reqeust abgeschlossen ist, erhalten wir eine response zurück (asynchron)
    .then(response => {
        // wenn der response status 200 ist, dann ist gilt ein request als erfolgreich abgeschlossen
        if(response.status === 200) {
            // jetzt können wir die antwort die wir erhalten haben als "JSON" behandeln
            response.json().then(function (json) {
                // hier haben wir jetzt Zugriff auf das JSON das uns vom Server geschickt wurde
                console.log("RESPONSE JSON", json);
                console.log(json.length + " Salads");
                //saladDiv.innerText = saladDiv.innerText + " " + json.length + "*";
            });
        }
    });

}


/*
// my js file
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQaXp6YXJpYUFQSSJ9.D_l-fWG6weTuxSoHfjJrK5ehk7KHK0F_Q0ZdDlcPvV4";
const baseUrl = "https://pizza.dev.aigis.ch/api";

function loadPizzas() {
    // auf window gibt es die "fetch" methode, damit können wir einen beliebigen URL im Internet fetchen
    window.fetch(
        // zuerst wird die URL benötigt welche wir abrufen möchten
        baseUrl + "/salads",
        // hier können wir optionen für unseren request definieren
        {
            // als option setzen wir einen request header
            headers: {
                // wir verwenden ein sogenanntes bearer token
                "Authorization": "Bearer " + token
        }
    })
    // wenn der reqeust abgeschlossen ist, erhalten wir eine response zurück (asynchron)
    .then(response => {
        // wenn der response status 200 ist, dann ist gilt ein request als erfolgreich abgeschlossen
        if(response.status === 200) {
            // jetzt können wir die antwort die wir erhalten haben als "JSON" behandeln
            response.json().then(function (json) {
                // hier haben wir jetzt Zugriff auf das JSON das uns vom Server geschickt wurde
                console.log("RESPONSE JSON", json);

                json.forEach(function(element) {
                let test = document.createElement("div");
                console.log(element.name);  
                console.log(element.imageURL);  

                test.innerHTML = '<img class="indexImage" src="' + element.imageURL + '">';
                console.log(test.innerHTML);
                var p = document.createElement("p");
                document.body.appendChild(test);​
                });
            });
        }
     });
}
*/