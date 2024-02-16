"use client";

import { Fragment, memo } from "react";
import Cursors from "./cursors";
import Drafts from "./drafts";

const CursorsPresence = memo(() => {
  return (
    <Fragment>
      <Drafts />
      <Cursors />
    </Fragment>
  );
});

CursorsPresence.displayName = "CursorsPresence";

export default CursorsPresence;
