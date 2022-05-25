require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    // cloud_name: process.env.CLOUDINARY_NAME,
    // api_key: process.env.CLOUDINARY_API_KEY,
    // api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: "tramnguyen2706", 
    api_key: "822142534432596",
    api_secret: "4Kn7heP6WVz-zAwAodklZB1hW6I"
});

module.exports = { cloudinary };