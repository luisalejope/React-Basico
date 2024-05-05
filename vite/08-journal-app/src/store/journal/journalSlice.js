import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        /* active: {
            id: '',
            title: '',
            body: '',
            date: 123445,
            imageUrls: []
        } */
    },
    reducers: {

        savingNewNote: (state) => {
            state.isSaving = !state.isSaving
        },
        addNewEmptyNote: (state, { payload }) => {
            state.notes.push(payload);
        },
        setActiveNote: (state, { payload }) => {
            state.active = payload
        },
        setNotes: (state, { payload }) => {
            state.notes = [...payload]
            state.messageSaved = ''
        },
        setSaving: (state) => {
            state.isSaving = !state.isSaving
            
        },
        updateNote: (state, {payload}) => {
            state.notes = state.notes.map(note => {
                if(note.id !== payload.id) return note
                return payload
            })
            state.messageSaved = `${payload.title}, actualizada correctamente`
        },

        deleteNoteById: (state, action) => {

        },
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, deleteNoteById, updateNote, savingNewNote } = journalSlice.actions;