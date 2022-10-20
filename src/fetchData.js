// Used to fetch a simple API; Key-value pair
// links:
// https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
// https://developer.edamam.com/api/faq
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// get the libs
import fetch from "node-fetch";
//import fileSystem from "fs";

// async function; where the keyword await is 
// used to promise deliver a certain task
// export the function to be used in App.js
export async function fetchData(url) {
    // using await to yield for fetch command
    const response = await fetch(url);

    // turn into JSON String; json-ify
    const data = await response.json();

    // parse the data into a list of [recipe,ingredients] pairs and return
    return parseData(data);
}

function parseData(data) {
    var recipeJSON = [];

    for (var i = 0; i < Object.keys(data.hits).length; i++) {
        var recipeName = data.hits[i].recipe.label;
        var ingredientsString = "";

        //console.log(recipeName);
        for (var j = 0; j < data.hits[i].recipe.ingredients.length; j++) {
          var ingredient = data.hits[i].recipe.ingredients[j].text;
          ingredientsString += ingredient+'\n';
        }
        recipeJSON.push([recipeName, ingredientsString]);

        // FILE RW
        // fileSystem.open('ftc/src/recipes/'+recipeName+'.txt','r+', (err, fd) => {
        //   if (err) 
        //     throw err
        // });

        // fileSystem.writeFile('ftc/src/recipes/'+recipeName+'.txt',ingredients, (err) => {
        //   if (err) 
        //     throw err
        // });  
        
    }
    //console.log(recipeJSON);
    return recipeJSON;
}

// THE FULL JSON WITH ALL QUERIES
/*
{
  "from": 0,
  "to": 0,
  "count": 0,
  "_links": {
    "self": {
      "href": "string",
      "title": "string"
    },
    "next": {
      "href": "string",
      "title": "string"
    }
  },
  "hits": [
    {
      "recipe": {
        "uri": "string",
        "label": "string",
        "image": "string",
        "images": {
          "THUMBNAIL": {
            "url": "string",
            "width": 0,
            "height": 0
          },
          "SMALL": {
            "url": "string",
            "width": 0,
            "height": 0
          },
          "REGULAR": {
            "url": "string",
            "width": 0,
            "height": 0
          },
          "LARGE": {
            "url": "string",
            "width": 0,
            "height": 0
          }
        },
        "source": "string",
        "url": "string",
        "shareAs": "string",
        "yield": 0,
        "dietLabels": [
          "string"
        ],
        "healthLabels": [
          "string"
        ],
        "cautions": [
          "string"
        ],
        "ingredientLines": [
          "string"
        ],
        "ingredients": [
          {
            "text": "string",
            "quantity": 0,
            "measure": "string",
            "food": "string",
            "weight": 0,
            "foodId": "string"
          }
        ],
        "calories": 0,
        "glycemicIndex": 0,
        "totalCO2Emissions": 0,
        "co2EmissionsClass": "A+",
        "totalWeight": 0,
        "cuisineType": [
          "string"
        ],
        "mealType": [
          "string"
        ],
        "dishType": [
          "string"
        ],
        "instructions": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "externalId": "string",
        "totalNutrients": {},
        "totalDaily": {},
        "digest": [
          {
            "label": "string",
            "tag": "string",
            "schemaOrgTag": "string",
            "total": 0,
            "hasRDI": true,
            "daily": 0,
            "unit": "string",
            "sub": {}
          }
        ]
      },
      "_links": {
        "self": {
          "href": "string",
          "title": "string"
        },
        "next": {
          "href": "string",
          "title": "string"
        }
      }
    }
  ]
}
*/