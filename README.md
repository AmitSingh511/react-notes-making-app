# My Notes

A clean and responsive note-taking application built with React and Vite. My Notes helps users quickly capture ideas, reminders, and thoughts, then keep them available in the browser using local storage.

## Overview

My Notes is a lightweight personal notes workspace. It provides a simple editor for writing notes and a saved notes panel where users can review, edit, and delete their entries. The app is designed for fast capture, easy scanning, and persistent browser-based storage without requiring a backend.

## Features

- Create notes with a title and body.
- Save notes directly from the editor.
- Display saved notes in a responsive card layout.
- Show the saved date for each note.
- Edit an existing note by loading it back into the editor.
- Delete notes from the collection.
- Persist notes with `localStorage`, so data remains after page refresh.
- Display a live note count.
- Show a friendly empty state when no notes exist.
- Responsive layout for desktop and mobile screens.

## How It Works

The app stores notes in React state and automatically syncs them to the browser's `localStorage`. When the app loads, it checks for previously saved notes and restores them if available.

Each note includes:

- `id`: A unique identifier generated with `crypto.randomUUID()`.
- `title`: The note title entered by the user.
- `body`: The main note content.
- `date`: The date when the note was saved.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Browser `localStorage`

## Project Structure

```text
src/
  App.jsx
  App.css
  main.jsx
  index.css
  components/
    NoteEditor.jsx
    NoteEditor.css
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Usage

1. Enter a title in the note editor.
2. Add note details in the body field.
3. Click **Save Note** to add it to your collection.
4. Use **Edit** to load an existing note into the editor.
5. Use **Delete** to remove a note from the saved list.

## Data Storage

Notes are saved in the browser only. This means:

- Notes remain available after refreshing the page.
- Notes are specific to the current browser and device.
- Clearing browser storage will remove saved notes.
- No data is sent to an external server.

## Current Limitations

- Notes are not synced across devices.
- There is no user authentication.
- Editing loads note content into the editor, but the save flow currently appends the note instead of replacing the existing saved note.
- Date formatting depends on the user's browser locale.

## Purpose

This project is useful for practicing core React concepts such as component state, props, controlled inputs, conditional rendering, list rendering, event handling, and browser persistence with `localStorage`.
