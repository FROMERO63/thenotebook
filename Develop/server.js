const express = require('express');
const path = require('path');
const notesData = require('./db/db.json')
const app = express ();
const PORT = 3001;

app.use(express.json());
app.use(express.static('public'));

//creating the homepage route
app.get('/', (req, res) => 
  res.send('Navigate to /notes'));

  //creating the notes route
app.get('/notes', (req,res)=>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

//listen method which will listen at specified port
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});