var pizzas = [
    {
        "name": "Piccante",
        "prize": "16$",
        "id": 1,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Spicy Salami",
            "Chilies",
            "Oregano"
        ],
        "imageUrl": "https://farm5.staticflickr.com/4042/4660357797_09dcd917b1.jpg"
    },
    {
        "name": "Giardino",
        "prize": "14$",
        "id": 2,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Artichokes",
            "Fresh Mushrooms"
        ],
        "imageUrl": "https://farm4.staticflickr.com/3565/5818252079_29635c03cc.jpg"
    },
    {
        "name": "Prosciuotto e funghi",
        "prize": "15$",
        "id": 3,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Fresh Mushrooms",
            "Oregano"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8326/8096659940_4e0a65e598.jpg"
    },
    {
        "name": "Quattro formaggi",
        "prize": "13$",
        "id": 4,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Parmesan",
            "Gorgonzola"
        ],
        "imageUrl": "https://farm3.staticflickr.com/2797/4344770705_b6d159f799.jpg"
    },
    {
        "name": "Quattro stagioni",
        "prize": "17$",
        "id": 5,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Artichokes",
            "Fresh Mushrooms"
        ],
        "imageUrl": "https://farm5.staticflickr.com/4078/4932649252_b0aaa733ae.jpg"
    },
    {
        "name": "Stromboli",
        "prize": "12$",
        "id": 6,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Fresh Chilies",
            "Olives",
            "Oregano"
        ],
        "imageUrl": "https://farm6.staticflickr.com/5661/22907779119_b2ec1efa11.jpg"
    },
    {
        "name": "Verde",
        "prize": "13$",
        "id": 7,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Broccoli",
            "Spinach",
            "Oregano"
        ],
        "imageUrl": "https://farm7.staticflickr.com/6044/6363618775_e8714fb517.jpg"
    },
    {
        "name": "Rustica",
        "prize": "15$",
        "id": 8,
        "ingredients": [
            "Tomato",
            "Mozzarella",
            "Ham",
            "Bacon",
            "Onions",
            "Garlic",
            "Oregano"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8574/16488100040_988f0caa70.jpg"
    }
]

var salads = [
    {
        "name": "Green salad with tomatoe",
        "prize": "4$",
        "id": 1,
        "ingredients": [
            "Iceberg lettuce",
            "Tomatoes"
        ],
        "imageUrl": "https://farm6.staticflickr.com/5087/5358599242_7251dc7de4.jpg"
    },
    {
        "name": "Tomato salad with mozzarella",
        "prize": "5$",
        "id": 2,
        "ingredients": [
            "Tomato",
            "Mozzarella"
        ],
        "imageUrl": "https://farm4.staticflickr.com/3130/5862973974_c107ed81ea.jpg"
    },
    {
        "name": "Field salad with egg",
        "prize": "4$",
        "id": 3,
        "ingredients": [
            "Field salad",
            "Egg"
        ],
        "imageUrl": "https://farm9.staticflickr.com/8223/8372222471_662acd24f6.jpg"
    },
    {
        "name": "Rocket with parmesan",
        "prize": "5$",
        "id": 4,
        "ingredients": [
            "Rocket",
            "Parmesan"
        ],
        "imageUrl": "https://farm8.staticflickr.com/7017/6818343859_bb69394ff2.jpg"
    }
]

var softdrinks = [
    {
        "name": "Coke",
        "prize": "2$",
        "id": 1,
        "imageUrl": "https://farm1.staticflickr.com/71/203324363_b448827eb0.jpg",
        "volume": "50cl"
    },
    {
        "name": "Fanta",
        "prize": "2$",
        "id": 2,
        "imageUrl": "https://farm1.staticflickr.com/684/32876893826_130576f75a.jpg",
        "volume": "50cl"
    },
    {
        "name": "Pepsi",
        "prize": "2$",
        "id": 3,
        "imageUrl": "https://farm4.staticflickr.com/3344/3593103557_bf47c0a3a2.jpg",
        "volume": "50cl"
    },
    {
        "name": "Red bull",
        "prize": "3$",
        "id": 4,
        "imageUrl": "https://farm3.staticflickr.com/2391/2507916617_254348d40c.jpg",
        "volume": "50cl"
    }
]

window.onload = function () {
//Diese Funktion wird automatisch ausgeführt, sobald der DOM fertig geladen wurde.

    //Zugriff auf das erste Element von Pizzas
    var pizzaName = pizzas[0].name;
    var pizzaURL = pizzas[0].imageUrl;
    var pizzaPrice = pizzas[0].prize;

    //Zugriff auf das zweite Element von Softdrinks
    var softdrinkName = softdrinks[1].name;
    var softdrinkURL = softdrinks[1].imageUrl;
    var softdrinkPrice = softdrinks[1].prize;

    //Zugriff auf das dritte Element von Salat
    var saladName = salads[2].name;
    var saladURL = salads[2].imageUrl;
    var saladPrice = salads[2].prize;



    //Setzen der Elemente in bestehende <div> oder <img>
    document.getElementById("pizza_img_1").src = pizzaImage;
    document.getElementById("pizza_img_1").clientWidth = "100px"; //Bildbreite festlegen oder im style.css
    document.getElementById("description_1").textContent = pizzaName; 
    
    //Hier weitere Elemente hinzufügen für Salad, Pizza und Softdrinks
}


