"use client";

import React from "react";
import EmptySearch from "./empty/empty-search";
import EmptyFavorites from "./empty/empty-favorites";
import EmptyBoards from "./empty/empty-boards";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query?.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query?.favorites) {
    return <EmptyFavorites />;
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>BoardList</div>;
};

export default BoardList;
