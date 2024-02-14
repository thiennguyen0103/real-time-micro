import { useOthersConnectionIds } from "@/liveblocks.config";
import { Fragment } from "react";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <Fragment>
      {ids.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </Fragment>
  );
};

export default Cursors;
