import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"
import { fileUpload, loadNotes } from "../../helpers"


export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote())
        try {
            const { uid } = getState().auth

            const newNote = {
                title: '',
                body: '',
                date: new Date().getTime(),
            }

            const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))

            await setDoc(newDoc, newNote)
            newNote.id = newDoc.id

            dispatch(addNewEmptyNote(newNote))
            dispatch(setActiveNote(newNote))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(savingNewNote())
        }

    }
}


export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        if (!uid) throw new Error('El uid no existe');

        try {
            const resp = await loadNotes(uid)
            dispatch(setNotes(resp))
        } catch (error) {
            console.error(error)
        }

    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())
        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        if (!uid) throw new Error('El uid no existe');

        try {
            const noteToFireStore = { ...note }
            delete noteToFireStore.id

            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)

            await setDoc(docRef, noteToFireStore, { merge: true })

            dispatch(updateNote(note))

        } catch (error) {
            console.error(error)
        } finally {
            dispatch(setSaving())
        }
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())

        const fileUploadPromises = []

        try {
            for (const file of files) {
                fileUploadPromises.push(fileUpload(file))
            }

            const photosUrls = await Promise.all(fileUploadPromises)
            dispatch(setPhotosToActiveNote(photosUrls))

        } catch (error) {
            console.warn(error)
        } finally {
            dispatch(setSaving())
        }
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {
        dispatch(setSaving())

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        try {
            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
            await deleteDoc(docRef)
            dispatch(deleteNoteById(note))
        } catch (error) {
            console.error(error)
        } finally {
            dispatch(setSaving())
        }

    }
}