import React from 'react';
import { TONES, NOTE_NAMES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor (props) {
    super(props);
    this.notes = this.props.notes;
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    this.notes.forEach( (note, idx) => {
      // if (this.props.notes.indexOf(note) !== -1) {
      console.log(note);
        this.notes[idx].start();
      //
      // } else {
      //   this.notes[idx].stop();
      // }
    });
  }

  render() {
    // const noteList = this.notes.map( (note, idx) => (
    //   <li>{note}</li>
    // ));
    this.playNotes();

    const noteKeys = this.notes.map((note, idx) => (
      <NoteKey key={idx} note={note} pressed={this.notes.includes(note)}/>
    ));

    return (

      <div className='notes'>
        <ul className='note-keys'>
          {noteKeys}
        </ul>
      </div>
    );
  }
}


export default Synth;
