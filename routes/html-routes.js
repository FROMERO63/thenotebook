const router = require('express').Router();
const path = require('path');

//creates the home route
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//created the notes route
router.get('/notes', (req,res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;