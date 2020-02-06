const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;

// arry = fs.readFile()
// arr.push()post
// fs.writefile(path, JSON.stringify(updatedarry))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT: http://localhost:" + PORT);
});

// let uniqueIDs = [];
// let localNotes = [];

// app.post("/api/notes", (req, res) => {
//   data = req.body; //Collect and initialize POST data
//   let id = uniqueID();
//   // Create new note object with collected data => write new note to  JSON 'database'               
//   let note = new Note(data.title, data.text, id);
//   localNotes = []; //clear local note storage of data
//   localNotes.push(note); // push new note onto local note storage
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//       if (err) { console.log(err) }
//       else {
//           let database = JSON.parse(data);
//           localNotes = localNotes.concat(database); //pull server notes and concat with local notes
//       }
//       fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(localNotes), (err) => { // push [local+server] notes back to db.json
//           if (err) { console.log(err) }
//       });
//   });
//   res.sendFile(path.join(__dirname, "/db/db.json"));
// })

// app.delete("/api/notes/:id", (req, res) => {
//   let note_id = parseInt(req.params.id);
//   localNotes = []; //clear local note storage of data
//   fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
//       if (err) { console.log(err) }
//       else {
//           let database = JSON.parse(data);
//           localNotes = localNotes.concat(database); //pull server notes and concat with local notes
//           let filteredNotes = localNotes.filter((obj) => {
//               if(obj.id !== note_id){
//                   return obj.id;e4
//               };
//           })
//           console.log(filteredNotes);
//           fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(filteredNotes), (err) => { // push [local+server] notes back to db.json
//               if (err) { console.log(err) }
//           });
//       }
//   })
//   res.sendFile(path.join(__dirname, "/db/db.json"));
// })