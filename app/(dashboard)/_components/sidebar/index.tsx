import React from "react";
import NewButton from "./new-button";
import OrgList from "./org-list";

const Sidebar = () => {
  return (
    <aside className="w-sidebar bg-sidebar fixed left-0 z-[1] flex h-full flex-col gap-y-4 p-3 text-white">
      <OrgList />
      <NewButton />
    </aside>
  );
};

export default Sidebar;
