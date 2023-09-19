const saveNote = document.querySelector('.save-note');
const writeNewNote = document.querySelector('.new-note');

writeNewNote.addEventListener("click", alert("this is for a new note"));

writeNewNote.addEventListener("click", (e)=>{
    //get the note title
    let noteId = document.getElementById('noteTitle').value;
    //get the note text
    let noteText = document.getElementById('noteText').value;
    //create an object with the note title and text
    const newNote = {
        noteId,
        noteText,
    };
    fetch('/notes', {
        method: 'POST',
        body: JSON.stringify(newNote),
    })
    .then((res)=>res.json())
    .then((data)=>{
        alert(data.status);
        noteId = '';
        noteText='';
    })
    .then(console.log(newNote));
})
