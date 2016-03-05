var Dispatcher = require('../dispatcher/dispatcher');
var EditorConstants = require('../constants/editorConstants');

module.exports = {
  addTrack: function() {
    Dispatcher.dispatch({
      actionType: EditorConstants.ADD_TRACK
    });
  },

  resizePattern: function(patternId, newSize) {
    Dispatcher.dispatch({
      actionType: EditorConstants.RESIZE_PATTERN,
      patternId: patternId,
      newSize: newSize
    });
  },

  removeTrack: function(trackIdx) {
    Dispatcher.dispatch({
      actionType: EditorConstants.REMOVE_TRACK,
      trackIdx: trackIdx
    });
  },

  insertNote: function(noteParams) {
    Dispatcher.dispatch({
      actionType: EditorConstants.INSERT_NOTE,
      noteParams: noteParams
    });
  },

  removeNote: function(pitch, position) {
    Dispatcher.dispatch({
      actionType: EditorConstants.REMOVE_NOTE,
      pitch: pitch,
      position: position
    });
  },

  moveNoteTo: function(pitch, position) {
    Dispatcher.dispatch({
      actionType: EditorConstants.MOVE_NOTE_TO,
      pitch: pitch,
      position: position
    });
  },

  resizeNoteTo: function(endPosition) {
    Dispatcher.dispatch({
      actionType: EditorConstants.REISZE_NOTE_TO,
      endPosition: endPosition
    });
  },

  selectNote: function(noteParams, cellPosition) {
    Dispatcher.dispatch({
      actionType: EditorConstants.SELECT_NOTE,
      noteParams: noteParams,
      cellPosition: cellPosition
    });
  },

  dragNoteOverCell: function(cellPitch, cellPosition) {
    Dispatcher.dispatch({
      actionType: EditorConstants.DRAG_NOTE_OVER_CELL,
      cellPitch: cellPitch,
      cellPosition: cellPosition
    });
  },

  dragNoteOverCellForResize: function(cellPosition) {
    Dispatcher.dispatch({
      actionType: EditorConstants.DRAG_NOTE_OVER_CELL_FOR_RESIZE,
      cellPosition: cellPosition
    });
  },

  dragCompleted: function() {
    Dispatcher.dispatch({
      actionType: EditorConstants.DRAG_COMPLETED
    });
  },

  selectKey: function(keyPitch) {
    Dispatcher.dispatch({
      actionType: EditorConstants.SELECT_KEY,
      keyPitch: keyPitch
    });
  },

  setTempo: function(tempo) {
    Dispatcher.dispatch({
      actionType: EditorConstants.SET_TEMPO,
      tempo: tempo
    });
  },

  updateSynth: function(trackIdx, synthParams) {
    Dispatcher.dispatch({
      actionType: EditorConstants.UPDATE_SYNTH,
      trackIdx: trackIdx,
      synthParams: synthParams
    });
  },

  selectTrack: function(trackIdx) {
    Dispatcher.dispatch({
      actionType: EditorConstants.SELECT_TRACK,
      trackIdx: trackIdx,
    });
  },

};
