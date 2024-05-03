import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { setActiveNote } from '../../store/journal/journalSlice'
import { useDispatch } from 'react-redux'

export const SideBarItem = ({ title = '', body = '', imageUrls = [], id, date }) => {

    const dispatch = useDispatch();

    const maxChar = (str) => str.length > 17 ? str.substring(0, 17) + '...' : str

    const newTitle = useMemo(() => maxChar(title), [title])

    const newBody = useMemo(() => maxChar(body), [body])

    const onSetActiveNote = ()=> {
        const payload = {
            id,
            title,
            body,
            date,
            imageUrls
        }
        dispatch(setActiveNote(payload))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onSetActiveNote}>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={newTitle} />
                    <ListItemText
                        secondary={newBody}
                    />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

SideBarItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.any,
    date: PropTypes.number,
    imageUrls: PropTypes.array
}
