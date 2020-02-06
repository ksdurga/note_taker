const path = require("path");


module.exports = function(app) {
  app.get("/api/notes", (req, res)=>{
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
};