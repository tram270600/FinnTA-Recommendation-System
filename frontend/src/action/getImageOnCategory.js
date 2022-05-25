const cloudinary = require('cloudinary/lib-es5/cloudinary').v2;

cloudinary.config({ 
    cloud_name: "tramnguyen2706", 
    api_key: "822142534432596",
    api_secret: "4Kn7heP6WVz-zAwAodklZB1hW6I",
    secure: true
});

// function getImageOnCategory(){
//     cloudinary.api.resources({
//         type: 'upload',
//         prefix: 'all-body' // add your folder
//       },
//     function(error, result) { console.log(result, error) });   
// }

export function searchImage(category){
    let arrImageCategory = [];

    cloudinary.search
    .expression(`folder:${category}/*`)
    .sort_by('public_id','desc')
    .max_results(5)
    .execute()
    .then((result) => {
        // console.log(result.resources.length, result.resources[0].public_id);
        for (let i in result.resources){
            let imageId = result.resources[i].public_id;
            console.log(i, imageId);
            arrImageCategory.push(imageId);
        }
        console.log("Length", arrImageCategory.length);
        
    });
    return arrImageCategory;
}
searchImage('hats')
export function helloXam(){
    // alert("Xam");
    searchImage("hats");
}