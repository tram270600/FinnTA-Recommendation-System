const fs = require("fs");
const { parse } = require("csv-parse");
// To write Array to CSV file

let itemListId = []
let itemCannotUploadImage = []
let itemFinishUpload = []

// Reads in the cloudinary env variable
require('dotenv').config()

const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: "tramnguyen2706", 
    api_key: "822142534432596",
    api_secret: "4Kn7heP6WVz-zAwAodklZB1hW6I"
});

const category = 'bags_2'
fs.createReadStream(`./upload/categoryDivide/${category}.csv`)
        .pipe(parse({ delimiter: ",", from_line: 1 })) //From line 2 to ignore the header
        .on("data", function (row) {
            let itemID = `${row[0]}`;
            itemListId.push(itemID);
        })
        .on("end", async function(){
                itemListId.forEach((element, index) => 
                {   console.log(element);
                    UploadImage(element);
                });
        })
        .on("error", function (error) {
                console.log(error.message);
        });

function UploadImage(itemID){
    cloudinary.uploader
    .upload(`./images/${itemID}.jpg`, {
        // categorization: "google_tagging", 
        // auto_tagging: 0.7,
        folder: `${category}`,
        resource_type: "image",
        use_filename: true, 
        unique_filename: false,
        quality: 60
    })
    .then((result) => {
        console.log("Success Upload:",itemID, JSON.stringify(result, null, 2));
        itemFinishUpload.push(itemID)
    })
    .catch((error) => {
        console.log("ERROR", itemID, JSON.stringify(error, null, 2));
        itemCannotUploadImage.push(itemID)
        console.log("Item upload FAIL: ", itemCannotUploadImage[itemCannotUploadImage.length-1]);
    });
}