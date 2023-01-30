const noteDialog = document.getElementById('dialog')
noteDialog.returnValue = 'initialValue'

const createBtn = document.getElementById('create')
const saveBtn = document.getElementById('save-note')
const cancelBtn = document.getElementById('cancel-note')
const note = document.getElementById('note')
const nameLocalStorage = 'notes'

const notesContainer = document.getElementById('notes-container')

let notes = JSON.parse(localStorage.getItem(nameLocalStorage))

if(notes)
{
    createNotes(notes)
}
else
{
    notes = []
}

function updateNotes(newNotes)
{
    localStorage.setItem(nameLocalStorage, JSON.stringify(newNotes))
}


function deleteNote(note)
{   
    const idDelete = notes.indexOf(note)
    notes.splice(idDelete, 1)
    updateNotes(notes)
}

function editNote(id, newEdit)
{
    // notes[id] = newEdit
    // updateNotes(notes)
}

function createNotes (notes)
{   
    const notesFragment = document.createDocumentFragment()
    notes.forEach((note, id) => {
        notesFragment.append(createNote(note, id))
    });
    notesContainer.append(notesFragment)
}

function createNote (note)
{
    const noteContainer = document.createElement('div')
    noteContainer.classList.add('note')
    const btnEdit = document.createElement('button')
    const btnDelete = document.createElement('button')
    const noteText = document.createElement('p')
    btnEdit.innerHTML = '<i class="bi bi-pencil-fill"></i>'
    btnDelete.innerHTML = '<i class="bi bi-trash-fill"></i>'
    btnDelete.addEventListener('click', () => {
        deleteNote(note)
        noteContainer.remove()
    })
    btnEdit.addEventListener('click', () => editNote(note))
    noteText.innerText = note
    noteContainer.append(btnEdit, btnDelete, noteText)
    return noteContainer
}

// Show Dialog 

createBtn.addEventListener('click', () => {
    noteDialog.showModal();
})

cancelBtn.addEventListener('click', () => {
    noteDialog.close();
})

saveBtn.addEventListener('click', () => {
    if(!note.value) return
    notes.push(note.value)
    updateNotes(notes)
    notesContainer.append(createNote(note.value))
})

noteDialog.addEventListener('close', () => {
    note.value = ''
})