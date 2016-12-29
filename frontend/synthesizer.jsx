import React from "react";
import ReactDom from 'react-dom';
import Note from './util/note.js';
import configureStore from './store/store.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDom.render(<h1> Synthesizer</h1>, document.getElementById('root'));

  window.store = store;
});
