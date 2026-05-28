import { useEffect, useState } from "react";
import "./NoteEditor.css";
export default function ({ onSave, editingNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setBody(editingNote.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingNote]);
  function handleSave() {
    if (!title && !body) return;
    onSave({
      id: editingNote ? editingNote.id : crypto.randomUUID(),
      title,
      body,
      date: new Date().toLocaleDateString(),
    });
    setTitle("");
    setBody("");
  }
  function handleEdit(note) {
    setEditingNote(note);
  }
  return (
    <div className="editor">
      <span className="editor-label">Title</span>
      <input
        type="text"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className="editor-label">Body</span>
      <textarea
        placeholder="Write your note..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}
