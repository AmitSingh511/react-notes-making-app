import { useEffect, useState } from "react";
import "./App.css";
import NoteEditor from "./components/NoteEditor";
export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  function handleSave(newNote) {
    setNotes((currentNotes) => {
      const noteExists = currentNotes.some((note) => note.id === newNote.id);

      if (noteExists) {
        return currentNotes.map((note) =>
          note.id === newNote.id ? newNote : note
        );
      }

      return [...currentNotes, newNote];
    });
    setEditingNote(null);
  }
  function handleDelete(id) {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingNote?.id === id) {
      setEditingNote(null);
    }
  }
  const [editingNote, setEditingNote] = useState(null);
  function handleEdit(note) {
    setEditingNote(note);
  }
  return (
    <div className="app-container">
      <header className="app-header">
        <p className="eyebrow">Quick capture workspace</p>
        <h1 className="heading">My Notes</h1>
        <p className="subheading">
          Write down ideas, reminders, and thoughts in one calm place.
        </p>
      </header>
      <div className="main-layout">
        <NoteEditor
          key={editingNote?.id ?? "new-note"}
          onSave={handleSave}
          editingNote={editingNote}
        />
        <div className="notes-panel">
          <div className="notes-panel-header">
            <div>
              <span className="section-label">Saved notes</span>
              <h2>Your collection</h2>
            </div>
            <p className="notes-count">{notes.length} note(s)</p>
          </div>
          <div className="notes-list">
            {notes.length === 0 ? (
              <div className="empty-state">
                <span className="empty-icon">+</span>
                <h3>No notes yet</h3>
                <p>Your saved notes will appear here after you write one.</p>
              </div>
            ) : (
              notes.map((note) => (
                <article className="note-card" key={note.id}>
                  <div className="note-card-content">
                    <h3>{note.title || "Untitled note"}</h3>
                    <p>{note.date}</p>
                    <p>{note.body || "No details added."}</p>
                  </div>
                  <div className="card-actions">
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(note.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn-edit"
                      onClick={() => handleEdit(note)}
                    >
                      Edit
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
