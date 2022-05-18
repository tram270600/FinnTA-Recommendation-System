const fs = require("fs");
const { parse } = require("csv-parse");

// Set up cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: "tramnguyen2706", 
    api_key: "822142534432596",
    api_secret: "4Kn7heP6WVz-zAwAodklZB1hW6I"
});
let itemList = [];

// Read through CSV file
const category = 'shoes'
fs.createReadStream(`./upload/categoryDivide/${category}.csv`)
        .pipe(parse({ delimiter: ",", from_line: 1 })) //From line 2 to ignore the header
        .on("data", function (row) {
            itemList.push(row);
        })
        .on("end", async function(){
                let tags = []
                itemList.forEach(async (element, index) => 
                {   console.log(element);
                    tags = await determineTags(element);
                    console.log(tags.length);
                    tags.forEach(e=> {console.log("List of tags: ", e)})
                    AddTags(element[0], tags, element[2])
                });
        })
        .on("error", function (error) {
                console.log("Error: ", error.message);
        });

function AddTags(itemID, listOfTag, folder){
    const tagList = listOfTag;
    console.log("List of tags: ", tagList.length);

    const public_id = `${folder}/${itemID}`;
    console.log("Product ID: ", public_id);

    cloudinary.uploader
    .add_tag(tagList, `${public_id}`)
    .then((result)=> {
        console.log("Tag Success:",itemID, result);
    })
    .catch((error)=> {
        console.log("Tag Fail:",itemID, JSON.stringify(error, null, 2));
    })
}

async function determineTags(itemRow){
    return new Promise((resolve) => {
        const listTags = []
        console.log(itemRow);
        if (itemRow[3].startsWith("male")){
            listTags.push("male");
            console.log("YEEEEEEESSSSSSSSSSSSS")
        }
        listTags.push(itemRow[2]);
        listTags.push(itemRow[3]);
        console.log(listTags.length)
        
        resolve(listTags)
    })
}
