import { KEY_RELEASED, KEY_PRESSED } from '../actions/note_actions.js';
import { NOTE_NAMES } from '../util/tones';

export function notesReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case 'KEY_PRESSED':
      let newState = state;
      if (!newState.includes(action.key) && NOTE_NAMES.includes(action.key)) {
        newState.concat(action.key);
        return newState;
      } else {
        return state;
      }
    case 'KEY_RELEASED':
      let otherState = state;
      if (otherState.includes(action.key) && NOTE_NAMES.includes(action.key)) {
        otherState.splice(action.key, 1);
        return otherState;
      } else {
        return state;
      }
    default:
      return state;
  }
}
