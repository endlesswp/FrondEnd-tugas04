'use strict';

angular.module('tugas_angular')
    .service('NotesService', [function() {
        // Initialize notes from localStorage if available
        var notes = JSON.parse(localStorage.getItem('notes')) || [];

        function saveToLocalStorage() {
            try {
                localStorage.setItem('notes', JSON.stringify(notes));
                console.log('Notes saved to localStorage:', notes);
            } catch (e) {
                console.error('Error saving to localStorage:', e);
            }
        }

        return {
            getAllNotes: function() {
                console.log('Getting all notes:', notes);
                return notes;
            },
            addNote: function(note) {
                console.log('Adding note:', note);
                notes.push(note);
                saveToLocalStorage();
            },
            getNote: function(id) {
                console.log('Getting note at index:', id);
                return notes[id];
            },
            updateNote: function(id, note) {
                console.log('Updating note at index:', id, 'with:', note);
                notes[id] = note;
                saveToLocalStorage();
            },
            deleteNote: function(id) {
                console.log('Deleting note at index:', id);
                notes.splice(id, 1);
                saveToLocalStorage();
            }
        };
    }]);