"use client";

import { memo } from "react";
import Cursors from "./cursors";

const CursorsPresence = memo(() => {
  return <Cursors />;
});

CursorsPresence.displayName = "CursorsPresence";

export default CursorsPresence;
