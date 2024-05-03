import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks";
import { useEffect, useMemo } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote } from "../../store/journal/thunks";

export const NoteView = () => {
    const dispatch = useDispatch()
    const {active: note} = useSelector(state => state.journal);

    const {title, body, date, onInputChange, formState} = useForm(note);

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    const dateString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString()
    }, [date])

    const onSaveNote = () => {
        dispatch(startSaveNote())
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
                <Button color="primary" sx={{ padding: 2 }} onClick={onSaveNote}>
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
