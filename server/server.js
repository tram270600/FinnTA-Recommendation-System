const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const { cloudinary } = require('./utils/cloudinary');

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('/api/images/:category', async (req, res)=> {
    const category = req.params.category
    console.log("Hello", req.params);
    const {resources} = await cloudinary.search
    // .expression('folder:hats')
    .expression(`tags=${category}`)
    .sort_by('public_id','desc')
    .max_results(6)
    .execute();
    const publicIds = resources.map( file => file.public_id);
    res.send(publicIds);
});
app.get('/api/images/skirt', async (req, res)=> {
    const {resources} = await cloudinary.search
    // .expression('folder:hats')
    .expression('tags=skirt')
    .sort_by('public_id','desc')
    .max_results(6)
    .execute();
    const publicIds = resources.map( file => file.public_id);
    res.send(publicIds);
});

 app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});