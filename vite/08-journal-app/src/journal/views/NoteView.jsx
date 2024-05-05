import 'sweetalert2/dist/sweetalert2.css'
import Swal from "sweetalert2";
import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks";

export const NoteView = () => {
    const dispatch = useDispatch()
    const {active: note, isSaving, messageSaved} = useSelector(state => state.journal);

    const {title, body, date, onInputChange, formState} = useForm(note);
    const fileInputRef = useRef();

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota Actualizada', messageSaved, 'success')
        }
    }, [messageSaved])
    

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date])

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({target}) => {
        if(target.files.length === 0) return;

        dispatch(startUploadingFiles(target.files))

    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >
            <Grid item>
                <Typography fontSize={39} fontWeight="ligth">
                    {dateString}
                </Typography>
            </Grid>
            <Grid item>

                <input type="file" ref={fileInputRef} multiple onChange={onFileInputChange} style={{display: 'none'}} />

                <IconButton color='primary' disabled={isSaving} onClick={()=>fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ padding: 2 }} disabled={isSaving} onClick={onSaveNote}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    name="title"
                    value={title}
                    onChange={onInputChange}
                    placeholder="Write a title"
                    label="Title"
                    sx={{ border: "none", mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    name="body"
                    value={body}
                    onChange={onInputChange}
                    placeholder="What happened today?"
                    minRows={5}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    );
};

NoteView.propTypes = {};
