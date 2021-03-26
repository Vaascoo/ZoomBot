const express = require("express");
const src = require("../src");
const urls = new src.urls();

const HOST = "0.0.0.0";
const PORT = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//app code

app.get("/api", (req, res) => {

    let name = req.query.name;
    let type = req.query.type;

    let url = urls.fetch(name, type);
    
    res.json({
        content : url == null ? "Error : class name or type not on database" : url
    });
    
});

//--

app.listen(PORT, HOST, () => {
    console.log(`Running server at ${HOST}:${PORT}`);
});
