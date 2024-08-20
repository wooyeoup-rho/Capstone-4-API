import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const catFactURL = "https://meowfacts.herokuapp.com/";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const catFactResponse = await axios.get(catFactURL);
        const result = catFactResponse.data;
        res.render("index.ejs", {fact: result.data})
    } catch(error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});