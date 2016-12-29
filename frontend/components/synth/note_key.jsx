import React from 'react';

const NoteKey = ({ note, pressed }) => (
  <div className={pressed ? 'pressed note-key' : 'note-key'}>
    {note}Note
  </div>

);




export default NoteKey;
