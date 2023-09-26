const router = require('express').Router();
const { v4: uuidv4}= require('uuid');
const fs = require("fs");

//created the get route for the api notes
router.get('/api/notes', async (req,res)=>{
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
});

//created the post route for the api notes that created the new note
router.post('/api/notes', (req,res)=>{
  const dbJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(dbJson));
  res.json(dbJson);
});

//created the delete route to delete the notes
  router.delete('/api/notes/:id', (req, res) => {
    let data = fs.readFileSync("db/db.json", "utf8");
    const dataJSON =  JSON.parse(data);
    const newNotes = dataJSON.filter((note) => { 
      return note.id !== req.params.id;
    });
    fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
    res.json(" deleted");
  });

  module.exports = router;