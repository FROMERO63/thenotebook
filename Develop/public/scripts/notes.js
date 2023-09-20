const saveNote = document.querySelector('.save-note');
const writeNewNote = document.querySelector('.new-note');


const getNotes = () =>
    fetch('api/notes',{
        method: 'GET'
    })
    .then((response)=>response.json())
    .then((data)=> data)
    .catch((error)=>{
        console.error(error);
    });

const postNote = (note) =>
  fetch('api/notes', {
    method: 'POST',
    body: JSON.stringify(note),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      //create note here
      createCard(note);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    //update the createCard fonction
getNotes().then((data) => data.forEach((note) => createCard(note)));


//this will probably be deleted


// writeNewNote.addEventListener("click", (e)=>{
//     e.preventDefault();
//     //get the note title
//     let noteId = document.getElementById('noteTitle').value;
//     //get the note text
//     let noteText = document.getElementById('noteText').value;
//     //create an object with the note title and text
//     const newNote = {
//         noteId,
//         noteText,
//     };
//     fetch('/api/db', {
//         method: 'POST',
//         body: JSON.stringify(newNote),
//     })
//     .then((res)=>res.json())
//     .then((data)=>{
//         alert(data.status);
//         noteId = '';
//         noteText='';
//     })
//     .then(console.log(newNote));
// })


