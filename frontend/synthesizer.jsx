import React from "react";
import ReactDom from 'react-dom';
import Note from './util/note.js';

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<Synth />, document.getElementById('root'));
});

window.Note(800);
