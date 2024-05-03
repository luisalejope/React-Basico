import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const {isSaving, active} = useSelector(state => state.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () =>{
    dispatch(startNewNote());
  }

  return (
    <JournalLayout>
      {/*  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad sed? Natus inventore enim impedit odio veritatis? Aperiam eos cumque eligendi eum ipsam sequi aspernatur, est fuga quos, excepturi dignissimos?</Typography> */}
      
      {active ? 
        (<NoteView />) :
        (<NothingSelectedView />)  
      }
      
      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
