import React from "react";
import { Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus
        laboriosam minima eum iste perspiciatis qui magni incidunt perferendis,
        fugiat laudantium rem veniam a neque nulla aliquid modi reiciendis
        doloremque.
      </Typography> */}

      {/* Nothing selected */}
      {/* <NothingSelectedView /> */}

      {/* Note View  */}
      <NoteView />
    </JournalLayout>
  );
};
