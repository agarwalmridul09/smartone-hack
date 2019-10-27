const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const port = 4000;
const axios = require("axios");
// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');
const fs = require('fs');

//server.use(bodyParser())
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));

server.post("/uploadpic", async function(req,res){

    let image_64 = req.body.image;
    //Creates a client
    const client = new vision.ImageAnnotatorClient();

    // Performs object detection on the image file
    const image = req.body.image

    const [labels] = await client.objectLocalization({image: {content: image}});
    let detectedObjArray = []
    let recipeResponse = {}
    labels.localizedObjectAnnotations.map((label) => {   
        detectedObjArray.push(label.name)
    })
    let detectedObjString = detectedObjArray.join(',');
    console.log(detectedObjString);

    await axios({
        "method":"GET",
        "url":"https://recipe-puppy.p.rapidapi.com/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"recipe-puppy.p.rapidapi.com",
        "x-rapidapi-key":"16201af670mshfc5e3e5fa401ab9p1be0b5jsn3d44d796bf9f"
        },"params":{
        "p":"1",
        "i": detectedObjString
        }
        })
        .then((response)=>{
          recipeResponse = response.data.results;
        })
        .catch((error)=>{
          console.log(error)
        })

//     recipeResponse =  [ { title: 'Ginger Champagne',
//     href: 'http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx',
//     ingredients: 'champagne, ginger, ice, vodka',
//     thumbnail: 'http://img.recipepuppy.com/1.jpg' },
//   { title: 'Potato and Cheese Frittata',
//     href:
//      'http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx',
//     ingredients: 'cheddar cheese, eggs, olive oil, onions, potato, salt',
//     thumbnail: 'http://img.recipepuppy.com/2.jpg' },
//   { title: 'Eggnog Thumbprints',
//     href:
//      'http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx',
//     ingredients:
//      'brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar',
//     thumbnail: 'http://img.recipepuppy.com/3.jpg' },
//   { title: 'Succulent Pork Roast',
//     href:
//      'http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx',
//     ingredients: 'brown sugar, garlic, pork chops, water',
//     thumbnail: 'http://img.recipepuppy.com/4.jpg' },
//   { title: 'Irish Champ',
//     href: 'http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx',
//     ingredients: 'black pepper, butter, green onion, milk, potato, salt',
//     thumbnail: 'http://img.recipepuppy.com/5.jpg' },
//   { title: 'Chocolate-Cherry Thumbprints',
//     href:
//      'http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx',
//     ingredients:
//      'cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract',
//     thumbnail: 'http://img.recipepuppy.com/6.jpg' },
//   { title: 'Mean Woman Pasta',
//     href: 'http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx',
//     ingredients:
//      'garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato',
//     thumbnail: 'http://img.recipepuppy.com/7.jpg' },
//   { title: 'Hot Spiced Cider',
//     href: 'http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx',
//     ingredients:
//      'allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt',
//     thumbnail: 'http://img.recipepuppy.com/8.jpg' },
//   { title: 'Isa\'s Cola de Mono',
//     href: 'http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx',
//     ingredients:
//      'cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar',
//     thumbnail: 'http://img.recipepuppy.com/9.jpg' },
//   { title: 'Amy\'s Barbecue Chicken Salad',
//     href:
//      'http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx',
//     ingredients:
//      'barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato',
//     thumbnail: 'http://img.recipepuppy.com/10.jpg' } ]



    console.log(recipeResponse);
    res.send(recipeResponse);

});


server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});