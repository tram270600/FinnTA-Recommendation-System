const fs = require("fs");
const { parse } = require("csv-parse");
// To write Array to CSV file
var stringify = require('csv-stringify');

let itemListId = []
let itemCannotUploadImage = []
let itemFinishUpload = []
let neededUpload = 10
let currentUpload = 0

// Reads in the cloudinary env variable
require('dotenv').config()

const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
    cloud_name: "tramnguyen2706", 
    api_key: "822142534432596",
    api_secret: "4Kn7heP6WVz-zAwAodklZB1hW6I"
    // cloud_name: process.env.CLOUD_NAME, 
    // api_key: process.env.CLOUD_KEY,
    // api_secret: process.env.CLOUD_SECRET
});

// var bar = new Promise((resolve, reject) => {
//     foo.forEach((value, index, array) => {
//         console.log(value);
//         if (index === array.length -1) resolve();
//     });
// });

// bar.then(() => {
//     console.log('All done!');
// });

// const fs = require('fs');
// const path = require('path');
// const json2csv = require('json2csv').parse;
// const write = async (fileName, data) => {
//     // output file in the same folder
//     const filename = path.join(__dirname, 'CSV', `${fileName}`);
//     let rows;
//     // If file doesn't exist, we will create new file and add rows with headers.    
//     if (!fs.existsSync(filename)) {
//         rows = json2csv(data, { header: false });
//     } else {
//         // Rows without headers.
//         rows = json2csv(data, { header: false });
//     }

//     // Append file function can create new file too.
//     fs.appendFileSync(filename, rows);
//     // Always add new line if file already exists.
//     fs.appendFileSync(filename, "\r\n");
// }

// write('./upload/test.csv', itemCannotUploadImage);

async function inputFile(){
// fs.createReadStream("./upload/itemList.csv")
fs.createReadStream("./upload/smallerItemList.csv")
  .pipe(parse({ delimiter: ",", from_line: 1 })) //From line 2 to ignore the header
  .on("data", function (row) {
    // console.log(row);
    let itemID = `${row}`;
    itemListId.push(itemID);
    })
    .on("end", 
    // function(){
        async function () {
        // console.log("Finished saving list of itemID");

        // let promiseUpload = new Promise((resolve, reject)=>{

        // itemListId.forEach((element, index) => 
        // {
        //     console.log(element);
        //     UploadImage(element);
        //     // if (index === itemListId.length -1) resolve();
        // });

        // const uploadFiles = async (files) => {
        //     try {
        //       const fileUploads = files.map((delay, i) => uploadFile(delay, i));
        //       await Promise.all(fileUploads);
        //       console.log('all files uploaded');
        //     } catch (e) {
        //       console.log('some files failed to upload');
        //     }
        //   }

        // const uploadFiles = async () => {
        //     try {
        //       const fileUploads = itemListId.map((element, index) => UploadImage(element));
        //       await Promise.all(fileUploads);
        //       console.log('all files uploaded');
        //       checkUploadResult()
        //     } catch (e) {
        //       console.log('some files failed to upload');
        //     }
        //   }
          
        await Promise.all(itemListId.map(async (element) => {
            console.log(element);
            await UploadImage(element);
            checkUploadResult();
        }));

        // for (const element of itemListId) {
        //     console.log(element)
        //     await UploadImage(element);
        // }

        // });
        // promiseUpload.then(() => {
        //     console.log('All uploading image of item is done!');
        //     console.log('Amount Success: ', itemFinishUpload.length, "\tAmount Fail: ", itemCannotUploadImage.length);
        //     if (itemCannotUploadImage.length > 0){
        //         stringify(itemCannotUploadImage, {
        //             header: false
        //         }, function (err, output) {
        //             fs.writeFile(__dirname+'/itemUploadFail.csv', output);
        //         })
        //     }
        // });
        },
    )
    .on("error", function (error) {
        console.log(error.message);
    });
console.log("hehe", itemCannotUploadImage.length);
return itemCannotUploadImage;
}

inputFile()
// checkUploadResult();

async function checkUploadResult(){
    itemCannotUploadImage = await inputFile();
    console.log('All uploading image of item is done!');
    console.log('Amount Success: ', itemFinishUpload.length, "\tAmount Fail: ", itemCannotUploadImage.length);
    if (itemCannotUploadImage.length > 0){
        console.log("Xam")
        stringify(itemCannotUploadImage, {
        header: false
        }, function (err, output) {
        fs.writeFile(__dirname+'/itemUploadFail.csv', output);
        })
    }
}

function UploadImage(itemID){
    currentUpload++;
    cloudinary.uploader
    .upload(`./images/${itemID}.jpg`, {
        categorization: "google_tagging", 
        auto_tagging: 0.7,
        folder: 'polyvoreItem',
        resource_type: "image",
        use_filename: true, 
        unique_filename: false,
        quality: 60
    })
    .then((result) => {
        console.log("Success Upload:",itemID, JSON.stringify(result, null, 2));
        itemFinishUpload.push(itemID)
        return itemCannotUploadImage;
        // if (currentUpload === neededUpload) checkUploadResult();
        
    })
    .catch((error) => {
        console.log("ERROR", itemID, JSON.stringify(error, null, 2));
        itemCannotUploadImage.push(itemID)
        console.log("Item upload FAIL: ", itemCannotUploadImage[itemCannotUploadImage.length-1]);
        return itemCannotUploadImage;
        // if (currentUpload === neededUpload) checkUploadResult();
    });
}