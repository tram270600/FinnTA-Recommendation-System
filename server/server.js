const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
const { cloudinary } = require('./utils/cloudinary');

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.get('/api/images', async (req, res)=> {
    const {resources} = await cloudinary.search
    .expression('folder:hats')
    .sort_by('public_id','desc')
    .max_results(5)
    .execute();
    const publicIds = resources.map( file => file.public_id);
    res.send(publicIds);
});

 app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});