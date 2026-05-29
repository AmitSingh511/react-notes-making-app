import { useState } from "react";
import "./NoteEditor.css";
export default function NoteEditor({ onSave, editingNote }) {
  const [title, setTitle] = useState(editingNote?.title ?? "");
  const [body, setBody] = useState(editingNote?.body ?? "");
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
      <button onClick={handleSave}>
        {editingNote ? "Update Note" : "Save Note"}
      </button>
    </div>
  );
}
