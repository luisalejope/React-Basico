import { IconButton, Typography, colors } from "@mui/material";
import { JournalLayout } from "../layout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*  <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ad sed? Natus inventore enim impedit odio veritatis? Aperiam eos cumque eligendi eum ipsam sequi aspernatur, est fuga quos, excepturi dignissimos?</Typography> */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
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
